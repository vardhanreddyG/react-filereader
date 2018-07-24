import React, { Component } from 'react'

import XLSX from 'xlsx'

import Loader from './loader'
import Result from './result'
import Duplicates from './duplicates'

import {findDups , mergeAndCompare } from '../helper'

class File extends Component {
    
    state = {
        fileOne:{
            name:null,
            data:null
        },
        fileTwo:{
            name:null,
            data:null
        },
        showButton:false,
        result:[],
        duplicates:[],
        loading:false
    }
    
    // parse sheets
    parseExcel = (file,fileNumber) =>{
        
        return new Promise((resolve,reject)=>{
            
            let reader = new FileReader()
            reader.onload = function(e){
                let binary = e.target.result
                let excelSheet = XLSX.read(binary,{type:'binary'})
                excelSheet.SheetNames.forEach(sheetName =>{
                    let data = XLSX.utils.sheet_to_row_object_array(excelSheet.Sheets[sheetName])
                    resolve(data)
                })
            }
            
            reader.onerror = function(e){
                reject(e)
            }
            
            reader.readAsBinaryString(file)
        })
    }
    
    selectFile = (e) =>{
        let file = e.target.files[0]
        if(!this.state.fileOne.name){
          this.parseExcel(file).then(data =>{
              console.log(data)
              this.setState({
                  fileOne:{
                      name:file.name,
                      data
                  }
              })
          }).catch(error => console.error(error))
        }
        else if(!this.state.fileTwo.name){
            this.parseExcel(file).then(data =>{
                
                this.setState({
                    fileTwo:{
                        name:file.name,
                        data
                    },
                    showButton:true
                })
            })
        }else {
            alert("files already loaded")
        }
        
    }
    
    merge = () =>{
        
        this.setState({
            loading:true
        })
        
        let { fileOne,fileTwo} = this.state
        mergeAndCompare(fileOne.data,fileTwo.data).then(result =>{
            console.log(result)
            findDups(result).then(obj =>{
                console.log(obj)
                setTimeout(()=>{
                    this.setState({
                    result:obj.result,
                    duplicates:obj.duplicates,
                    loading:false
                    
                })
                },4000)
            })
        })
        
       console.log(this.state) 
    }
    
    render(){
        let button = null
        let { loading,result,duplicates } = this.state
        
        if(this.state.showButton){
          button = <button className="btn blue" onClick = {this.merge}> Merage</button>
        }
        return(
            <div className="container" >
            <div className="row">
            <div className ="col s6">
             <form action="#">
               <div className="file-field input-field">
                <div className="btn blue">
                <span>File</span>
                <input type="file" onChange={this.selectFile} />
                 </div>
               <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
           </div>
              </div>
            </form>
            </div>
            <div className ="col s6">
             <form action="#">
               <div className="file-field input-field">
                <div className="btn blue">
                <span>File</span>
                <input type="file" onChange={this.selectFile} />
                 </div>
               <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
           </div>
              </div>
            </form>
            </div>
            </div>
            <div className="row">
            <div className="col s3">
            </div>
            <div className="col s6">
            { button }
            </div>
            <div className="col s3">
            </div>
            </div>
            <div className="row">
            <div className="col s3">
            </div>
            <div className="col s6">
            <Loader show ={loading} />
            </div>
            <div className="col s3">
            </div>
            </div>
            <div className="row">
            <div className="col s6 ">
            <Result result ={ result } />
            </div>
            <div className="col s6 ">
            <Duplicates duplicates ={ duplicates } />
            </div>
            </div>
            </div>
            
            )
    }
}

export default File
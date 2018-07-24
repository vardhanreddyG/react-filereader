import React from 'react'
class Duplicates extends React.Component {
    
    
    
    render(){
        let show = null
        if(this.props.duplicates.length !=0){
           show = this.props.duplicates.map(r =>{
               return(
                <tr key ={r.NAME}>
                <td> { r.NAME} </td>
                <td> { r.EMAIL} </td>
                <td> {r.REASON }</td>
                </tr>
                
                   )
           }) 
        }
        console.log(this.props)
        return(
        <div>
        <table>
        <caption > Duplicates</caption>
        <tbody>
        {show}
        </tbody>
        </table>
        </div>
        )
    }

    
}

export default Duplicates
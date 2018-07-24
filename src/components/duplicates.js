import React from 'react'
class Duplicates extends React.Component {
    
    
    
    render(){
        let show = null
        if(this.props.duplicates.length !=0){
           show = this.props.duplicates.map(r =>{
               return(
                <tr key ={r.NAME} className="strip">
                <td > { r.NAME} </td>
                <td className ="red"> { r.EMAIL} </td>
                <td> {r.REASON }</td>
                </tr>
                
                   )
           }) 
        }
        console.log(this.props)
        return(
        <div >
        <table className ="responsive-table" >
        <caption > Duplicates</caption>
        <thead>
         <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Reason</th>
          </tr>
        </thead>
        <tbody>
        {show}
        </tbody>
        </table>
        </div>
        )
    }

    
}

export default Duplicates
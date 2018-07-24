import React from 'react'
class Result extends React.Component {
    
    
    
    render(){
        let show = null
        if(this.props.result.length !=0){
           show = this.props.result.map(r =>{
               return(
                <tr key ={r.NAME}>
                <td> { r.NAME} </td>
                <td> { r.EMAIL} </td>
                <td> { r.REASON }</td>
                </tr>
                
                   )
           }) 
        }
        console.log(this.props)
        return(
        <div>
        <table className ="responsive-table">
        <caption > Result </caption>
        <thead>
         <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Reson</th>
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

export default Result
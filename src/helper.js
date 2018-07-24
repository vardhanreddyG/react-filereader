 export const mergeAndCompare = (array1,array2) =>{
    let finalArray = []
    return new Promise((resolve,reject)=>{
        array1.forEach(ar1 =>{
            array2.forEach(ar2 =>{
                if(ar1.EMAIL === ar2.EMAIL){
                    finalArray.push({...ar1,REASON:ar2.REASON})
                }
            })
        })
        
        resolve(finalArray)
        
    })
}

export const findDups = (array)=>{
     let uniqueArray = []
     let dupsArray = []
     return new Promise((resolve,reject)=>{
      
     let emails = array.map(ele => ele.EMAIL)
     
     console.log("emails", emails)
     
     let uEmails = []
     let dEmails = []
     emails.forEach(ele =>{
         if(uEmails.indexOf(ele) === -1){
             uEmails.push(ele)
         }else {
             dEmails.push(ele)
         }
     })
     console.log("U",uEmails)
     console.log("D",dEmails)
     
     let finalUEmails = []
     let finalDEmails = []
     array.forEach(ele =>{
         uEmails.forEach(e =>{
             if(e === ele.EMAIL && finalUEmails.indexOf(e) === -1){
                 finalUEmails.push(ele,e)
             }
         })
     })
     
     array.forEach(ele =>{
         dEmails.forEach(e =>{
             if(e === ele.EMAIL && finalDEmails.indexOf(e) ===-1){
                 console.log(ele)
                 finalDEmails.push(ele,e)
             }
         })
     })
     
     console.log("before", finalUEmails)
     console.log("before", finalDEmails)
     
     let vFinalU = finalUEmails.slice()
     let vFinalD = finalDEmails.slice()
     
     finalUEmails.forEach(ele =>{
         if(typeof(ele) === "string"){
             let index = vFinalU.indexOf(ele)
             vFinalU.splice(index,1)
         }
     })
     
     finalDEmails.forEach(ele =>{
         if(typeof(ele) === "string"){
             console.log(ele)
             let index = vFinalD.indexOf(ele)
             console.log(index)
             vFinalD.splice(index,1)
         }
     })
     
     
     console.log("final dup",vFinalD)
   
   console.log("final unique",vFinalU)
     resolve({
         result:vFinalU,
         duplicates:vFinalD
     })
     })
     
}
const reverseArray = (arr)=>{
    //     // write your code here
    //     let reverseArr=[];
    //     for(let i=arr.length-1 ; i>=0 ; i-- ){
    //         reverseArr.push(arr[i]);
    //     }
    //     return reverseArr
    // // }
    
    // another solution 
       let revArr=[];
       for(let i=0;i<5;i++){
        let x=arr.pop()
        console.log(x)
        revArr.push(x)
       }
       return revArr
    }
   console.log( reverseArray([1,2,3,4,5]));;
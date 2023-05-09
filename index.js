// function equalizeArray(arr) {
//    // Write your code here
//    let repeatedArr = [];
//    let test=false;
//    for (let i = 0; i < arr.length; i++) {
//       let repeatedNumbers = arr.filter((item) => { return item === arr[i]; });
//       if (repeatedNumbers.length > 1) {
//          let test=false;
//          for (let j = 0; j < repeatedArr.length; j++) {
//             if (repeatedArr[j].toString()===repeatedNumbers.toString()){
//                test=false;
//                break;
//             }else{
//                test=true;
//             }
//          }
//       }
//       if (test){
//          repeatedArr.push(repeatedNumbers);
//       }
//    }
//    const flatrepeatedArr=repeatedArr.flat();
//    removednumbersCount=arr.length-flatrepeatedArr.length;
//   return removednumbersCount;
// }
// ##########################################################################################################################
// function equalizeArray(arr) {
//    // Write your code here
//    let repeatedArr = [];
//    let test = false;
//    for (let i = 0; i < arr.length; i++) {
//       let repeatedNumbers = arr.filter((item) => { return item === arr[i]; });
//       // console.log(repeatedNumbers)
//       if (repeatedNumbers.length > 1) {
//          // console.log("i am here")
//          let test = false;
//          let j = 0;
//          do {
//             if (repeatedArr.length === 0) {
//                repeatedArr.push(repeatedNumbers);
//             } else if (repeatedArr[j].toString() === repeatedNumbers.toString()) {
//                test = false;
//                break;
//             } else {
//                test = true;
//             }
//             j++;
//          } while (j < repeatedArr.length);

//       }
//       // console.log(test)
//       if (test) {
//          repeatedArr.push(repeatedNumbers);
//       }
//       // console.log(repeatedArr)
//    }
//    const flatrepeatedArr = repeatedArr.flat();
//    removednumbersCount = arr.length - flatrepeatedArr.length;
//    return removednumbersCount;
// }


function equalizeArray(arr) {
   // Write your code here
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      let repeatedNumbers = arr.filter((item) => { return item === arr[i]; });
      newArr.push(repeatedNumbers)
   }
   let bigestARR = newArr[0];
   for (let i = 0; i < newArr.length; i++) {
      if (bigestARR.length < newArr[i].length) {
         bigestARR = newArr[i];
      }
   }
   let answer = arr.length - bigestARR.length
   return answer;
}
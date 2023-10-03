// // Linear Search Algorithm

//  function linearSearch (numberList:Array<number>,targetNumber:number):number {
        
//          for(let i=0;i<numberList.length;i++){
//             if(numberList[i]===targetNumber){
//                 return i+1;
//             }
//          }
//       return 0;
//  };

//  const NumberList = [10,20,4,5,9,11];
//  const targetNumber= 11;

//  const result =  linearSearch(NumberList,targetNumber);

//  console.log(`In Linear Search Position of ${targetNumber} is ${result}.` );


// Binary Search Iterative Approach (using Loop)
function BinarySearch(numberList:Array<number>,targetNumber:number):number{
   let position:number ;
   let start = 0;
   let end = numberList.length-1;

   while(start<=end){
      let mid = Math.floor((start+end)/2)
      if(numberList[mid]===targetNumber){
         position = mid;
         break;
      }else if(numberList[mid]<targetNumber){
         start = mid+1;
      }else{
         end = mid-1;
      }
   }

   return position!;
};

 const NumberList = [11,33,43,45,65,68,77];
 const targetNumber= 11;

 const result =  BinarySearch(NumberList,targetNumber);

 console.log(`In BinarySearch Search Position of ${targetNumber} is ${result} on this Array ${NumberList} .` );





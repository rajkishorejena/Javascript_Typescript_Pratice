// //bubble sort

function bubbleShort (unShortedArray:Array<number>):Array<number> {
    
   for(let i=0;i<unShortedArray.length;i++){
      for(let j=0;j<unShortedArray.length;j++){
        if(unShortedArray[j]>unShortedArray[j+1]){
            let temp = unShortedArray[j];
            unShortedArray[j] = unShortedArray[j+1];
            unShortedArray[j+1] = temp;
        };
      }
   }

    return unShortedArray;
};

const unShortedArray = [34,44,4,88,77,9];
const afterShort = bubbleShort(unShortedArray);
console.log("afterShort",afterShort);
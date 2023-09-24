// Linear Search Algorithm

 function linearSearch (numberList:Array<number>,targetNumber:number):number {
        
         for(let i=0;i<numberList.length;i++){
            if(numberList[i]===targetNumber){
                return i+1;
            }
         }
      return 0;
 };

 const NumberList = [10,20,4,5,9,11];
 const targetNumber= 11;

 const result =  linearSearch(NumberList,targetNumber);

 console.log(`In Linear Search Position of ${targetNumber} is ${result}.` );



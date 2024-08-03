function printArray(index,arr){
    if (index == arr.length){
    	return;
    }
  console.log(arr[index])
  printArray(index+1,arr)
 
}

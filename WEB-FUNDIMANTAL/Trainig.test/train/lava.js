function buildingshights (nums){
    for(i = 0  ; i < nums.lenrth ; i++){
        if (nums [i] > nums[i+1]){
            nums.splice(i+1 , 1);
            i--}
            
        else if (nums[i] < nums[i+1]){
            nums.splice(i,1)}
    }

conso.log("nums");
}

var sum = nums.length;
console.log("sum")
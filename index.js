const name = "Sinmi";

console.log("hello",name);
// If you want more info on all the remaining things discussed just go back to your js tutorial
const user = {
    name: "Sinmi",
    age: 18
}
console.log(user["name"])

function multiplyAll(arr1, arr2){
    let result;
    for(i = 0; i < arr1.length; i++){
        for(j = 0; j < arr2.length; j++){
            result = arr1[i] * arr2[j];
        }
    }

    return result;
}

console.log(multiplyAll([1,2,3], [4,5,6]))

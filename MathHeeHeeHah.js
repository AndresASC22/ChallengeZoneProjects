let startNum = (Math.floor(Math.random() * 100));
let target = (Math.floor(Math.random()*100));



function funnyMath(startNum, target){
    console.log (startNum, target)
  let result = (target - startNum);
  return result;

}

console.log (funnyMath(startNum, target));
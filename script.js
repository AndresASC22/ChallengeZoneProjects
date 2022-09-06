let canSize = Math.floor(Math.random()* 101);

function fizzyDrink (canSize){
if (canSize % 5 != 0 && canSize % 3 != 0){
    return (canSize);
};

 if (canSize % 5 === 0 && canSize % 3 === 0){
    return "Semi-Fizzy";
};

 if (canSize % 3 === 0){
    return "Fizzy";
};

if (canSize % 5 === 0){
    return "Non-Fizzy";
}
};

console.log (fizzyDrink(canSize));
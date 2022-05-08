
var sudokuBox = [5,3,0,0,7,0,0,0,0];   //use array to write sudoku
var possibleNum = [1,2,3,4,5,6,7,8,9];
var presentNum = [];


for(var i = 0; i < sudokuBox.length; i++) {
   if(sudokuBox[i] > 0){
    presentNum.push(sudokuBox[i]);
   }  
};

possibleNum = possibleNum.filter(function(el){
    return presentNum.indexOf(el) < 0;
});

for(var i = 0; i < sudokuBox.length; i++){
    if(sudokuBox[i] === 0){
        sudokuBox[i] = possibleNum[0];
        possibleNum.shift();
    }
};

console.log(sudokuBox);


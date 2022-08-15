// let puzzle = [
//
//           0  [ null,null,null,  null,null,null,  null,null,null, ],  1st subgrid 
//  upper    1  [ null,null,null,  null,null,null,  null,null,null, ],
//           2  [ null,null,null,  null,null,null,  null,null,null, ],
//
//           3  [ null,null,null,  null,null,null,  null,null,null, ],
//  middle   4  [ null,null,null,  null,null,null,  null,null,null, ],     6th
//           5  [ null,null,null,  null,null,null,  null,null,null, ],
//
//           6  [ null,null,null,  null,null,null,  null,null,null, ],
//  bottom   7  [ null,null,null,  null,null,null,  null,null,null, ],
//           8  [ null,null,null,  null,null,null,  null,null,null, ]];    9th 
//
//                 0    1    2      3    4    5      6    7    8



let puzzle = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 2,7,1,   9,6,3,   4,8,5 ],
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,1,7,   2,3,8,   9,6,4 ],
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,2,8,   1,9,6,   5,4,7 ]
];


let puzzle2 = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 8,7,1,   9,6,3,   4,8,5 ],  // The wrong one is on this line
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,1,7,   2,3,8,   9,6,4 ],
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,2,8,   1,9,6,   5,4,7 ]
];


let puzzle3 = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 2,7,1,   9,6,3,   4,8,5 ],
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,1,7,   2,3,8,   9,6,4 ],  // Puzzle3 is identical to Puzzle1
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,2,8,   1,9,6,   5,4,7 ]
];



const getRow = (puzzle, rowIndex) => {
return puzzle[rowIndex];
}
// console.log(getRow(puzzle, 0));
// // -> [ 8,9,5,7,4,2,1,3,6 ]



const getColumn = (puzzle, colIndex) => {

let colArr = [];

for (let i = 0; i < puzzle.length; i++) {
  colArr.push(puzzle[i][colIndex]);
}

return colArr;
}
// console.log(getColumn(puzzle, 0));
// // -> [ 8,2,4,9,5,6,1,7,3 ]



const getSection = (puzzle, x, y) => {

x *= 3;
y *= 3;

let subGridArr = [];

for (let i = x; i < x + 3; i++) {
  for (let j = y; j < y + 3; j++) {
    subGridArr.push(puzzle[i][j]);
  }
}

return subGridArr;
}
// console.log(getSection(puzzle, 0, 0));
// // -> [ 8,9,5,2,7,1,4,6,3 ]

// console.log(getSection(puzzle, 0, 1));
// // -> [ 7,4,2,9,6,3,5,8,1 ]



const oneToNine_Checker = (arr) => {

for (let i = 1; i <= arr.length; i++) {
  if (arr.indexOf(i) === -1) {
    return false;
  }
}

return true;
}



const validator = (grid) => {

let validate = [];

for(let i = 0; i < 9; i++) {
  validate.push(getRow(grid, i));
  validate.push(getColumn(grid, i));
}

for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    validate.push(getSection(grid, i, j));
  }
}

for(let i = 0; i < validate.length; i++) {
  if(!oneToNine_Checker(validate[i])) {
    return false;
  }
}

return true;
}

// console.log(validator(puzzle));
// // -> true
// console.log(validator(puzzle2));
// // -> false
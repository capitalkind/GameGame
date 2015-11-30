// function init(){
// var createImage = function(src, title){
//   var image = new Image();
//   image.src = src;
//   image.alt = title;
//   image.title = title;
//   return image;
// };


//what if i made blank field and tried to apply the images to it
// var logo = function(a, b){
//   this.a = a;
//   this.b = b;
// }

// var logo = []

// var rows = 3;
// var columns 6;
// function memoryGame(){





/// array table idea




var arr = [
    [0,1,2],
    [1,2,3],
    [2,3,4]
];

var body, tab, tr, td, tn, row, col;
body = document.getElementsByTagName('body')[0];
tab = document.createElement('table');
for (row=0; row < arr.length; row++){
    tr = document.createElement('tr');
    for (col=0; col < arr[row].length; col++){
        td = document.createElement('td');
        tn = document.createTextNode(arr[row][col]);
        td.appendChild(tn);
        tr.appendChild(td);
    }
    tab.appendChild(tr);
}
body.appendChild(tab);


// / /*******WORKING
// function generateTable(memoryArray){
//   for (i = 0; i < memoryArray.length; i++)
//   {
//   var $formrow = '<tr class="'+ memoryArray[i] + '"><td>' + memoryArray[i] + '</tr></td>'
//   $('#card-table').append($formrow);
//   console.log('table generated');
//   }
// };


  // for (var i = 0; i < memoryArray.length; i++){
  //   var tr = $('<tr class="'+ memoryArray[i] + '"></tr>').appendTo(table);
  //   // for (var j = 0; j < totalCells; j++){
  //     tr.append('<td>' + memoryArray[i] + '</td>');
//       count++;

//     count = 0;
//     }
//   }
// }
// function generateTable(memoryArray){
//   for (i = 0; i < memoryArray.length; i++){

//   var $table = '<tr class="'+ memoryArray[i] + '">' + '<td>' + memoryArray[i] + '</tr></td>'
//   $('#card-table').append($table);
//   console.log('table generated');
//   }
// };

// function generateTable(memoryArray){
//   var memoryArray;
//   var i;
//   var body, tab, tr, td, tn, row, col;
//   var $body = $("#body")[0];
//   var $table = $("#card-table");
//   for(row = 0; row < memoryArray.length; row++){
//     $tr = '<tr class="' + memoryArray[i] + '"></tr>';
//     for (col = 0; col < memoryArray[row].length; col++){
//       $td = '<td class="' + memoryArray[i] + '">';
//       tn = document.createTextNode(memoryArray[row][col]);
//       $td.appendChild(tn);
//       $tr.appendChild($td);
//     }
//     $table.append($tr);
//   }
//   $body.append($table);
// };







  // this.$el.empty()
  // var cell;
  // var row;
  // var cellNumber = 0;

  // for (var rowIdx = 0; rowIdx < 3; rowIdx++){
  //   row = $('<tr>');
  //   for (var colIdx = 0; colIdx < 12; colIdx++){
  //     cell = $('<td>');
  //     cell.addClass ('memoryArray[i]');

  //     row.append(cell);

  //     cellNumber++
  //   }
    // $(this).append(row)
//   }
// }


// function generateTable(memoryArray){
//   for (i = 0; i < memoryArray.length; i++)
//   {
//   var $formrow = '<tr class="'+ memoryArray[i] + '"><td>' + memoryArray[i] + '</tr></td>'
//   $('#card-table').append($formrow);
//   console.log('table generated');
//   }
// };

// function generateTable(memoryArray){
//   for (i = 0; i < memoryArray.length; i++)
//   {
//   var $formtable = '<tr class="'+ memoryArray[i] + '"></tr><td class="' + memoryArray[i] + '"</td>'
//   $('#card-table').append($formtable);
//   console.log('table generated');
//   }
// };


// function generateTable(memoryArray){
//   var memoryArray = memoryArray.length;
//   var $table = $('#card-table');
//   var cell;
//   var row;
//   var cellNumber = 0;

//   for (var rowIdx = 0; rowIdx < 3; rowIdx++){
//     row = $('<tr>')
//     for (var colIdx = 0; colIdx < 12; colIdx++){
//       cell = $('<tr>');
//       // cell.addClass('memoryArray[1]');

//       row.append(cell);

//       cellNumber++
//     }
//     $table.append(row)
//   }
//   console.log('table generated')
// };


// function generateTable(memoryArray){
//   var memoryArray = shuffle(memoryArray);
//   for (i = 0; i < memoryArray.length; i++)
//   {
//     tr = document.createElement('tr');
//     td = document.createElement('td');
//     td.appendChild(document.createTextNode(memoryArray[i]));
//     tr.appendChild(td);
//     imageTable.appendChild(tr);
//   // var $formrow = '<tr class="'+ memoryArray[i] + '"><td>' + memoryArray[i] + '</tr></td>'
//   // $('#card-table').append($formrow);
//   console.log('table generated');
//   }
// };


// function generateTable(memoryArray){
//   var memoryArray;
//   var arrayLength = memoryArray.length;
//   var imageTable = document.getElementById('card-table');

//   for (var i = 0, tr, td; i < arrayLength; i++){
//     tr = document.createElement('tr');
//     td = document.createElement('td');
//     td.appendChild(memoryArray[i]);
//     tr.appendChild(td);
//     imageTable.appendChild(tr);
//   }
// document.getElementById('card-table').appendChild(imageTable);

// function generateTable(memoryArray){}
//   var cell;
//   var row;
//   var memoryArray = memoryArray.length
//     for (var rowIdx = 0; rowIdx < 3; rowIdx++){
//       row = $('<tr>');
//       for (var colIdx = 0; colIdx < 12; colIdx++){
//         cell = $('<td class="' + memoryArray[i] +'">');

//         row.append(cell);

//       // cellNumber++
//       }
//     }
// };
//   for (i = 0; i < memoryArray.length; i++)
//   {
//   var $formrow = '<tr class="'+ memoryArray[i] + '"><td>' + memoryArray[i] + '</tr></td>'
//   $('#card-table').append($formrow);
//   console.log('table generated');
//   }
// };

// var imageContainer = document.getElementById('cards');

// var table = document.createElement('table');
// var tbody = document.createElement('tbody');

// for (i = 0; i < memoryArray.length; i++) {
//   var imgVal = imgArray[i];
//   var row = document.createElement('tr');
//   for (var b = 0; b < imgVal.length; b++) {
//     var imgCell = document.createElement('td');
//     imgCell.innerHTML = imgVal[b];
//     row.appendChild(imgCell);
//   }
//   tbody.appendChild(row);
// }
// table.appendChild(tbody);
// imageContainer.appendChild(table);

// /*******WORKING
// function generateTable(memoryArray){
//   for (i = 0; i < memoryArray.length; i++)
//   {
//   var $formrow = '<tr class="'+ memoryArray[i] + '"><td>' + memoryArray[i] + '</tr></td>'
//   $('#card-table').append($formrow);
//   console.log('table generated');
//   }
// };


// function makeBoard(){
//   var newBoard = shuffle(memoryArray);

//   for (var i = 0; i < newBoard.length; i++){
//     $('<div>').className(newBoard[i])
//   console.log('newBoard')
//   }
// }



/// the idea of creating an array and populating it from another array

// function memoryGame(){
//   this.gameState = [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r'
//   ];
// }

// memoryGame.prototype.randomize = function(){

//   var gameState
//   var imgArray = [
//     "images/montreal.png",
//     "images/newyork.png",
//     "images/buffalo.png",
//     "images/calgary.png",
//     "images/detroit.png",
//     "images/minnesota.png",
//     "images/pittsburgh.png",
//     "images/winnipeg.png",
//     "images/boston.png"
//   ];

//   for (i = 0; i < imgArray.length; i++){
//     gamestate[i] = imgArray[i];
//   }

// }

// var imgArray = [
//   "images/montreal.png",
//   "images/newyork.png",
//   "images/buffalo.png",
//   "images/calgary.png",
//   "images/detroit.png",
//   "images/minnesota.png",
//   "images/pittsburgh.png",
//   "images/winnipeg.png",
//   "images/boston.png"
// ];

// var imageContainer = document.getElementById('cards');

// var table = document.createElement('table');
// var tbody = document.createElement('tbody');

// for (i = 0; i < imgArray.length; i++) {
//   var imgVal = imgArray[i];
//   var row = document.createElement('tr');
//   for (var b = 0; b < imgVal.length; b++) {
//     var imgCell = document.createElement('td');
//     imgCell.innerHTML = imgVal[b];
//     row.appendChild(imgCell);
//   }
//   tbody.appendChild(row);
// }
// table.appendChild(tbody);
// imageContainer.appendChild(table);


// img.push(createImage("images/montreal.png", "montreal"));
// img.push(createImage("images/newyork.png", "new york"));
// img.push(createImage("images/buffalo.png", "buffalo"));
// img.push(createImage("images/calgary.png", "calgary"));
// img.push(createImage("images/detroit.png", "detroit"));
// img.push(createImage("images/minnesota.png", "minnesota"));
// img.push(createImage("images/pittsburgh.png", "pittsburgh"));
// img.push(createImage("images/winnipeg.png", "winnipeg"));
// img.push(createImage("images/boston.png", "boston"));

//   ], columns = 2,
//   l = img.length, i,
//   table = document.createElement('table'),
//   tbody = table.appendChild(document.createElement('tbody')),
//   tr, td, image;
//   for(i = 0; i < l; i++){
//     if ( i % columns = 0) tr = tbody.appendChild(document.createElement('tr'));
//     tr.appendChild(document.createElement('td'))
//       .appendChild(document.createElement('image'))
//       .src = img[i];
//   }
//   document.body.appendChild(table);
// }();

// var imageContainer = document.getElementById("cards");

// for (var i = 0, len = img.length; i < len; ++i){
//   var image = new Image();
//   image.src = img[i];
//   imageContainer.appendChild(image);
// }




// var photoSet = document.getElementById("images");
// var imageTable = document.createElement("table");
// document.getElementById("cards").appendChild(imageTable);

// for (var i = 0; len = )


// function randomize(maxVal, minVal){
//   return Math.floor(Math.random() * (maxVal - minVal) + minVal);
// }



// function gameTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//     if (timer === 0) {
//       alert("You lose!")
//     }
//   }, 1000);
// }

// var t = 0;

// function pause(){
//   clearTimeout(t);
//   document.getElementById("pause").disabled = "disabled";
//   document.getElementById("resume").disabled = "";
// }

// function resume(){
//   t = setTimeout(gameTimer, 1000);
//   document.getElementById("pause").disabled = "";
//   document.getElementById("resume").disabled = "disabled";
// }

  // var t = setTimeout(function (){
  //   gameTimer(timer + 1);
  // }, 1800);

  // $('#pause').click(function(){
  //   clearTimeout(t);


// window.onload = function () {
//   var threeMinutes = 60 * 3,
//   display = document.querySelector('#time');
//   gameTimer(threeMinutes, display);
// };


// }

// window.onlaod = init;

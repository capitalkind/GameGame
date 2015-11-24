console.log('...loaded');


///central array

var memoryArray = [
  'a', 'a', 'b', 'b', 'c', 'c',
  'd', 'd', 'e', 'e', 'f', 'f',
  'g', 'g', 'h', 'h', 'i', 'i'
  ];


///timer

var gameTimer = document.getElementById("time");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");
var id;
var value = "time"

function startGameTime(minutes, seconds) {
  gameTimer.textContent = minutes + ":" + seconds;
  if (seconds == 0){
    if (minutes == 0){
      return;
    } else if (minutes != 0){
      minutes = minutes - 1;
      seconds = 60;
    }
  }

  seconds = seconds - 1;
  id = setTimeout(function (){
    startGameTime(minutes, seconds)
  }, 1000);
}

function pauseGameTime(){
  value = gameTimer.textContent;
  clearTimeout(id);
  console.log('pause');
}

function resumeGameTime(){
  var time = value.split(":");

  startGameTime(parseInt(time[0], 10), parseInt(time[1], 10));
  console.log('resume');
}

start.addEventListener("click", function() {
  startGameTime(2, 59);
  console.log('start');
}, false);

pause.addEventListener("click", pauseGameTime, false);


resume.addEventListener("click", resumeGameTime, false);

///shuffle function

function shuffle(memoryArray){
  var counter = memoryArray.length, temp, index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = memoryArray[counter];
    memoryArray[counter] = memoryArray[index];
    memoryArray[index] = temp
    console.log('shuffle working');
  }
  return memoryArray;
};

///table generation

function generateTable(memoryArray){
  var table = $("#card-table");
  for (var i = 0; i < memoryArray.length; i++){
    if (i<=5){
      var cell = $('<td class="'+ memoryArray[i] + '"">');
      $('#tr-one').append(cell);
        } else if (i<=11){
        var cell = $('<td class="'+ memoryArray[i] + '">');
        $('#tr-two').append(cell);
        } else{
          var cell = $('<td class="'+ memoryArray[i] + '">');
        $('#tr-three').append(cell);
        }
      console.log('table generated')
    }
}

// width = window.innerWidth;
// if( width % 2 != 0 ){
//     width -= 1;
// }

// document.getElementById("card-table").width = width;

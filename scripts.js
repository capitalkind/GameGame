console.log('...are you ready?');


var goal = 0;
var against = 0
var count = 0;

var gameTimer = document.getElementById("time");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var restart = document.getElementById("restart");
var id;
var value = "time"

function startGameTime(minutes, seconds) {
  gameTimer.textContent = minutes + ":" + seconds;
  if (seconds == 0){
    if (minutes == 0){
      alert("Time's Up! The Final Score Is" + " " + goal + " To" + " " + against +"!")
      $("div.cards div img").addClass('hidden');
      console.log('time is up');
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
};

function pauseGameTime(){
  value = gameTimer.textContent;
  clearTimeout(id);
  console.log('pause');
}

start.addEventListener("click", function() {
  startGameTime(01, 00);
  console.log('start');
}, false);


$('#start').click(function(){
  $(this).hide();
  $("div.cards div img").addClass('hidden');
  createImageArray();
  imageClick();
  console.log('game begins')
});

$('#restart').click(function(){
  location.reload();
});


function imageClick(){
  var divs = $(".cards img").size()
  $(".cards div").click(function (){
    $(".overlay").css({
      "z-index": "9999"
    });
    $(this).children("img").animate({
      "opacity": "1"
    }, function (){
      count++;
      var firstId = $("img.clickedImage").attr("src");
      var secondId = $(this).attr("src");
      $(this).addClass("clickedImage");

      if (count == 2){
        count = 0;
        if (firstId == secondId){
          $(".clickedImage").removeClass("clickedImage");
          goal = goal + 1;
          divs = divs - 2;
          if (divs == 0){
            pauseGameTime();
            gameWinner();
            console.log('game ends');
          }
          $(".usergoal").html(goal);
        } else {
          speed = 110;
          $(".clickedImage").animate({
            "opacity": "0"
          }, 600, function(){
            $(".clickedImage").removeClass("clickedImage");
            if (goal >= 0){
              against = against + 0.5;
              $(".useragainst").html(against);
            }
          });
        }
      } else {
        speed = 110;
      }

      $(this).animate({
        "padding": "0.1"
      }, speed, function(){
        $(".overlay").css({
          "z-index": "-9999"
        });
      });
    });
  });
};


function gameWinner(){
  if (goal >= against)
    alert("The Home Team Wins By A Score Of" + " " + goal + " To" + " " + against +"!");
      else
        alert("The Home Team Loses By A Score Of" + " " + against + " To" + " " + goal +"!");
};


function createImageArray(){
  var teamImages = [
    "images/montreal.png",
    "images/newyork.png",
    "images/buffalo.png",
    "images/calgary.png",
    "images/detroit.png",
    "images/minnesota.png",
    "images/pittsburgh.png",
    "images/winnipeg.png",
    "images/boston.png"];

  var teamImagesArray = [];
  $(".card-field div:not(.cards)").each(function (){
    var rand = Math.floor(Math.random() * teamImages.length);
    $(this).append('<img src="' + teamImages[rand] + '"/>');
    if (teamImagesArray.indexOf(teamImages[rand]) != -1) teamImages.splice(rand, 1);
      else teamImagesArray.push(teamImages[rand]);
      console.log(teamImages);
  });
};

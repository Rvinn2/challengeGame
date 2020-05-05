// your Age in days 
function ageInDays(){
    var birthYear = prompt("What year were you born?");
    var totalDays = (2020 - birthYear) * 365;
    var h1 =document.createElement('h1');
    var textAnswer= document.createTextNode('you are '+ totalDays + ' days old!' );
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice= yourChoice.id;
    botChoice= numberToChoice(randToRpsint());
    console.log('Computer choice:',botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message= finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);

}
function randToRpsint(){
   return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase={
        'rock':{'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    }  else if (yourScore === 0.5){
        return {'mesage': 'You Tied!', 'color': 'yellow'};
    } else{
        return {'message':'You Won!', 'color': 'green'};
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMesage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissores':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML= "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMesage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMesage['message'] + "</h1>"
    botDiv.innerHTML= "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}
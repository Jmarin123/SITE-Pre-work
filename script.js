//Global Constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [randomInt(1,5),randomInt(1,5),randomInt(1,5),randomInt(1,5),randomInt(1,5),randomInt(1,5),randomInt(1,5),randomInt(1,5)];
var clueHoldTime = 1000;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var strike = 1;

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function startGame(){
  //initialize game variables
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  strike = 1;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
// Sound Synthesis Functions
const freqMap = {
  1: 221.6,
  2: 309.6,
  3: 403,
  4: 500.2,
  5: 560
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime ,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 100;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] != btn){
    //Checks if there are 3 strikes
    if(strike == 3){
      clueHoldTime = 1000;
      loseGame();
    }
    else{
      alert("Strike " + strike + "/3. Restarting Round...");
      strike++;
      clueHoldTime += 100;
      playClueSequence();
    }
  }
  else if(guessCounter != progress){
    guessCounter++;
  }
  else if(guessCounter != pattern.length - 1){
    progress++;
    playClueSequence();
  }else{
    clueHoldTime = 1000;
    winGame();
  }
}
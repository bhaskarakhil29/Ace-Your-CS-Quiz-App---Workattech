const readLineSync = require('readline-sync');
const chalk= require('chalk');

const questionsOfQuiz = [
  {
      quizQues: "Which of following is not a layer in the ISO-OSI Model ?",
      options : ["Physical","Data-Link","Internet","Session"],
      correct : 3
  },
  {
      quizQues :"Number of Child processes will be created when we call fork 5 times?",
      options : ["eight","Thirty One","Thirty two","Sixteen"],
      correct :2
  },
  {
      quizQues :"Sequence of execution determines the output. This condition is called?",
    options : ["Mutual Exclusion","Progress","Race Condition","Dead Lock"],
    correct :3
  },
  {
    quizQues :"Which of the following is DDL keyword in SQL?",
    options : ["SELECT","JOIN","CREATE","SUM"],
    correct :3 
  },
  {
      quizQues :"Which of the following sorting algorithm has best case time complexity of O(n)?",
    options : ["Insertion Sort","Merge Sort","Heap Sort","Quick Sort"],
    correct :1
  }
];
let questionNumeber=0;

function welcomeGreeting(){
  const name = readLineSync.question("Enter Your Name: ");
  console.log(chalk.blue.bgWhite.bold(`\nHello ${name}, Welcome\n`) );
  console.log(`\nTest your CS knowledge by taking the quiz!\n`);
  let proceed=readLineSync.question(`ready for it? Enter 'y' to move forward\n`);
  if(proceed==='y'){
    return true;
  }else{
    return false;
  }
}
function displayQuestion(questionText,optionsText,correctAnswer){
  console.log(`Question: ${++questionNumeber}\n`);
  console.log(`\t${questionText}\n`);
  console.log(`\tOptions :\n`);
  let chosen;
  for(let i=1;i<=4;i++){
    console.log(`\t\t${i}. ${optionsText[i-1]}\n`);
  }
  chosen=readLineSync.question(`\tPlease enter your option:`);
  chosen=parseInt(chosen);
  if(chosen===correctAnswer)return true;
  else return false;

}
function displayScore(scoreSecured){
  const praise = "Congratulations, You made it! Keep it up";
  const feedback = "You can do better! Keep Going...";
  if(scoreSecured===5){
    console.log(`Your score is ${scoreSecured} of 5, ${praise}\n`);
  }else{
    console.log(`Your score is ${scoreSecured} of 5, ${feedback}\n`);
  }
}

function quizPreProcess(setOfQuestions){
  if(welcomeGreeting()){
    let score=0;
    for(ele of setOfQuestions){
      if(displayQuestion(ele.quizQues,ele.options,ele.correct)){
        score++;
        console.log(chalk.green.bold(`Congratulations, your answer is correct\nYour score now: ${score}\n`));
      }else{
        console.log(chalk.red.bold(`Incorrect, The Correct Answer is ${ele.correct}. ${ele.options[ele.correct-1]}\n`));
      }
    }
    displayScore(score);
  }
  else{
    console.log(`Looks like you need to revise your concepts! Go on and be prepared!\n`);
  }
}

quizPreProcess(questionsOfQuiz);

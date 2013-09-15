$(document).ready(function() {
  // allQuestions is an array that holds (q+choices+answer)
  var allQuestions= [
  {
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer:0
  },
  {
    question: "What is the capitol of the United States?",
    choices: ["Albany", "New York", "DC", "Houston"],
    correctAnswer:2
  },
  {
    question: "What is the meaning of life?",
    choices: ["Food", "Sex", "Fun", "TBD"],
    correctAnswer:3
  }
  ];

  var i=0;
  var answers = [];
  $("#question").text(allQuestions[i].question);

  $("#zero").text(allQuestions[i].choices[0]);
  $("#one").text(allQuestions[i].choices[1]);
  $("#two").text(allQuestions[i].choices[2]);
  $("#three").text(allQuestions[i].choices[3]);  
  
  $("#next").on("click", function(){
    i = i + 1;
    
    $("#question").text(allQuestions[i].question);

    $("#zero").text(allQuestions[i].choices[0]);
    $("#one").text(allQuestions[i].choices[1]);
    $("#two").text(allQuestions[i].choices[2]);
    $("#three").text(allQuestions[i].choices[3]); 
  });
});


for(var i=0; i< allQuestions.length; i++) {
    alert(allQuestions[i].question + 
      allQuestions[i].
      choices[allQuestions[i].correctAnswer]);
  }
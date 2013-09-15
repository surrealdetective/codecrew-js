$(document).ready(function() {
  // allQuestions is an array that holds (q+choices+answer)
  var allQuestions= [
  {
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair", "Barack Obama"],
    correctAnswer:"0"
  },
  {
    question: "What is the capitol of the United States?",
    choices: ["Albany", "New York", "DC", "Houston", "LA"],
    correctAnswer:2
  },
  {
    question: "What is the meaning of life?",
    choices: ["Food", "Sex", "Fun", "TBD"],
    correctAnswer:3
  }
  ];

  var selected = [];
  var qid = 0;
  var makequestion = function(qid){
    $("body").append("<div></div>");
    $("div").append("<h2>" + allQuestions[qid].question +"</h2>");
    $("div").append("<ol> </ol>");
    for(var i=0; i < allQuestions[qid].choices.length; i++){
      $("ol").append("<li><input type='radio' name='q' value='" +  i  + "'/><label for='q'>" + allQuestions[qid].choices[i] + "</label></li>");
    };
  };
  
  //make first question
  makequestion(qid);
  $("body").append('<input type="button" id="next" value="next"/>');
  
  //upon click of next button, go to next question
  $("#next").on("click", function(){
    //add the value of the selected input into an array that tracks answers
    selected.push($("input:checked").val());    
    //grade the question
    if(selected[0] === allQuestions[0].correctAnswer){
      alert("You got it right!");
    } else {
      alert("Incorrect.");
    }
    qid = qid + 1;
    $('div').remove();
    makequestion(qid);
  });
});

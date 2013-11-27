// 1. How do we take data from the server and render it on the page? (templating)
// 2. How do we generate a session key? (js code)
// 3. Need a way to allow user to choose a quiz. (event)
// 4. Need a way to allow user to choose answers. (event)
// 5. How the heck do we organize our code in a way that's understandable?


var Session = {
  init: function() {
    this.key = (new Date()).getTime().toString()
  }
}


function displayQuizzes(quizzes) {
  // debugger
  for(quiz in quizzes.quizzes){
    quizzes = quizzes.quizzes
    var quizClone = $('#quiz').clone()
    var $quizName = $(quizClone.text()).text(quizzes[quiz].name)
    var route = "quiz/" + quizzes[quiz].quiz_id
    $quizName.prop('href', route)
    $('.container').append($quizName)
  }
}

function displayQuestion(questionData) {
  var question = questionData.question.question
  // var choices = questionData
  for(choices in questionData.question.choices){
    var choice = choice.choice
  }
  var questionClone = $('#question').clone()
  var $questionName = $(questionClone.text()).text(question)
  debugger
}


$.get('/quizzes.json', displayQuizzes).done( function() {
   $('a').on('click', function(e){
      e.preventDefault()
      var quiz_id = e.currentTarget.href.split("").reverse()[0]
      var url = "/quizzes/" + quiz_id + "/questions/next.json"
      var data = Session.key
      $.ajax({
        url: url,
        data: { session_key: data }
      }).done(displayQuestion)
    })
})

$(document).ready(function() {
  Session.init()
})

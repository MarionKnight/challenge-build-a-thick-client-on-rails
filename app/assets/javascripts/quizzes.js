// 1. How do we take data from the server and render it on the page? (templating)
// 2. How do we generate a session key? (js code)
// 3. Need a way to allow user to choose a quiz. (event)
// 4. Need a way to allow user to choose answers. (event)
// 5. How the heck do we organize our code in a way that's understandable?


$.get('/quizzes.json', function(quizzes){
  for(quiz in quizzes.quizzes){
    quizzes = quizzes.quizzes
    var clone = $('#quiz').clone()
    var $quizName = $(clone.text()).text(quizzes[quiz].name)
    var route = "quiz/" + quizzes[quiz].quiz_id
    $quizName.prop('href', route)
    $('.container').append($quizName)
  }
})
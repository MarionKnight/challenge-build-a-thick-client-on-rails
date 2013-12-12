$(document).ready(function(){
  $('button#get-quizzes').on('click', function(e) {
    e.preventDefault()
    $.ajax({
      url: '/quizzes.json',
      type: 'get',
    }).done( function(data) {
      $('.container .quiz-list').append("Select from these quizzes:")
      for (var i = 0; i <= data.quizzes.length; i++) {
        $('.container').append(data.quizzes[i].quiz_id, " ", data.quizzes[i].name)
        console.log(data)
      }
    })
  })
})
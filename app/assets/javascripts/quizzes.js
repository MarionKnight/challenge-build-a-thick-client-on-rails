var FetchQuizzes = {
  // session_key: null,
  params: {
    url: '/quizzes.json',
    type: 'get'
  },
  listQuizzes: function(data) {
    var quizTemplate = $.trim($('#quiz_template').html());
    $('.container .quiz-list').append("Select from these quizzes:")
    for (var i = 0; i < data.quizzes.length; i++) {
      var $quiz = $(quizTemplate)
      $quiz[0].innerText = data.quizzes[i].name
      console.log($quiz)
      $('.container').append( $quiz )
      $('.container').append(
        data.quizzes[i].quiz_id,
        " ",
        data.quizzes[i].name
      )
    }
  }
}

$(function() {

  $('button#get-quizzes').on('click', function(e) {
    e.preventDefault()
    $.ajax(FetchQuizzes.params)
      .done(FetchQuizzes.listQuizzes)
  })
  // $('button#quiz').on('click', function(e) {

  // })
})

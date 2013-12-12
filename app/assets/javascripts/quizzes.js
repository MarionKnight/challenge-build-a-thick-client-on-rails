var FetchQuizzes = (function() {
  var _session_key = null
  var _params = {
      url: '/quizzes.json',
      type: 'get'
  }
  return {
    listQuizzes: function(data) {
      $('.container .quiz-list').append("Select from these quizzes:")
      for (var i = 0; i < data.quizzes.length; i++) {
        console.log(i)
        $('.container').append(data.quizzes[i].quiz_id, " ", data.quizzes[i].name)
      }
      _session_key = "a124f87dec55da23"
    }
  }
}())

$(function() {
  $('button#get-quizzes').on('click', function(e) {
    e.preventDefault()
    $.ajax(FetchQuizzes.params)
      .done(FetchQuizzes.listQuizzes())
  })
  // $('button#quiz').on('click', function(e) {

  // })
})

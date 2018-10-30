document.addEventListener("DOMContentLoaded", function() {
  var step12Btn = document.querySelector('#step12 button');

  step12Btn.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/',
      method: 'get',
      data: '',
      dataType: ''
    })
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var step12Btn = document.querySelector('#step12 button'),
  step3456Btn = document.querySelector('#step3456 button'),
  step7Btn = document.querySelector('#step7 button'),
  pingPongBtn = document.querySelector('#pingPongBtn'),
  pingorpong = 'ping';
  pingPongData = true;

  step12Btn.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/',
      method: 'get',
      data: '',
      dataType: 'text'
    });
  });
  step3456Btn.addEventListener('click', function() {
    var section3456 = document.querySelector('#step3456 p');
    
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/' + pingorpong,
      method: 'get',
      data: '',
      dataType: 'text'
    }).then(function(response) {
      console.log(response.data);
      section3456.innerHTML = response.data;
    }).catch(function() {
      section3456.innerHTML = "Server failed :'( Will try better next time";
    }).then(function() {
      section3456.innerHTML = "It is finished";
    });
  });

  step7Btn.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/count',
      method: 'get',
      data: '',
      dataType: 'text'
    });
  });

  pingPongBtn.addEventListener('click', pingPong);
  function pingPong() {
    if (pingorpong === 'ping') {
      pingorpong = 'pong';
    } else {
      pingorpong = 'ping';
    }
    document.querySelector('#pingorpong').innerHTML = pingorpong
  }

});

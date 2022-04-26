window.addEventListener('load', function(){
  const start = document.querySelector("#start");
  const time = document.querySelector("#time");
  const min = document.querySelector("#min");
  const sec = document.querySelector("#sec");
  const count = 1000;
  let DownTime = 0;

  start.onclick = function(){
    const set_id =setInterval(function(){
      min.innerHTML= time.value - DownTime;
      DownTime++;
      if(time.value - DownTime < 0 ){
        clearInterval(set_id);
      }
    },count);
  }
});
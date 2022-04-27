window.addEventListener('load', function(){
  const start = document.querySelector("#start");
  const time = document.querySelector("#time");
  const count = 1000;
  let timer = 1500;
  let min;
  let sec;
  let start_f = false;

  start.addEventListener('click',count_start, false);
  function count_start(){
    if (start_f === false) {
      const set_id =setInterval(function(){
        start_f = true;
        if(timer <= 0 ){
          clearInterval(set_id);
        }else{
          timer--;
          min = Math.floor(timer / 60);
          sec = timer % 60;
          time.innerHTML = min +":" + ("0"+sec).slice(-2);
        }
      },count);
    }
  }
});
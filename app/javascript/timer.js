window.addEventListener('load', function(){
  const start = document.querySelector("#start");
  const time = document.querySelector("#time");
  const count = 1000;
  let timer = 60;
  let min;
  let sec;

  start.addEventListener('click',count_start, false);
  function count_start(){
    start.disabled = true;
      const set_id =setInterval(function(){
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
});
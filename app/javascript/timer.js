window.addEventListener('load', function(){
  const start = document.querySelector("#start");
  const time = document.querySelector("#time");
  const min = document.querySelector("#min");
  const sec = document.querySelector("#sec");
  let count = 0;
  const s = 1000;

  start.onclick = function(){
    const set_id =setInterval(function(){
      count++;
      min.innerHTML=count;
      if(count==time.value){
        clearInterval(set_id);
      }
    },s);
  }
})
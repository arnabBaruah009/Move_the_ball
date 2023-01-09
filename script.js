const ball = document.querySelector('.ball');

document.addEventListener('keydown', (e) => {
   let ball_right = ball.getBoundingClientRect().right;
   let ball_left = ball.getBoundingClientRect().left;
   let ball_bottom = ball.getBoundingClientRect().bottom;
   let ball_top = ball.getBoundingClientRect().top;
   let window_width = window.innerWidth;
   let window_height = window.innerHeight;
   let para_bottom = document.querySelector('#para').getBoundingClientRect().bottom;

   if(e.key == 'w' && ball_top-para_bottom>20){
    ball.style.top = ball_top-40 + 'px';
   } else if (e.key == 's' && window_height-ball_bottom>40){
    ball.style.top = ball_top+20 + 'px';
   } else if(e.key == 'a' && ball_left>30){
    ball.style.left = ball_left-40 + 'px';
   } else if (e.key == 'd' && window_width-ball_right>40){
    ball.style.left = ball_left+20 + 'px';
   }
})
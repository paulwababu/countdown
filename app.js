const countdown = document.querySelector('.countdown');

//set launching gate
const launchDate = new Date('Nov 18, 2019 08:00:00').getTime();

//update every second
//USED THE ES6 ARROW FUNCTION
const intvl = setInterval(() => {
      //get todays date and time in milliseconds
      const now = new Date().getTime();
      
      //distance from now till the launch date
      const distance = launchDate - now;
      
      //time calculation, the days and hours
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //display results
      countdown.innerHTML = `
          <div>${days}<span>Days</span></div>
          <div>${hours}<span>Hours</span></div>
          <div>${minutes}<span>Minutes</span></div>
          <div>${seconds}<span>Seconds</span></div>
      `;
      //check if launch date passed
      if(distance < 0) {
          //Stop countdown
          clearInterval(intvl);
          //style and output text
          countdown.style.color = '#17a2b8';
          countdown.innerHTML = 'launched!';
      } 
}, 1000);

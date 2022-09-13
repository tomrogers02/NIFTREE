// Timer for when NFT's bidding is over //

const countdown = () => {
    const countDate= new Date ('September 30, 2022 00:00:00');
    const now= new Date().getTime();
    const gap= countDate-now;

    //How does time work?

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    const textHour = Math.floor(gap/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    console.log(textHour,textMinute,textSecond);


    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    


};

setInterval(countdown,1000)
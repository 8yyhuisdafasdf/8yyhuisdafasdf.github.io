const choosenDate = new Date("2025-03-31T02:30:00").getTime();

calcDay();

let countdown = setInterval(calcDay, 1000);

function calcDay() {

    const today = new Date().getTime();
    const diff = today - choosenDate;

    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(diff % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        "<div class=\"years\"> \
          <div class=\"c-number\">" + (years) + "</div>years</div> \
        <div class=\"days\"> \
          <div class=\"c-number\">" + (days + 1) + "</div>days</div> \
        <div class=\"hours\"> \
          <div class=\"c-number\">" + hours + "</div>hours</div> \
        <div class=\"minutes\"> \
          <div class=\"c-number\">" + minutes + "</div>minutes</div> \
        <div class=\"seconds\"> \
          <div class=\"c-number\">" + seconds + "</div>seconds</div> \
        </div>";
}
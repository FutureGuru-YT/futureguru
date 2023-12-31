// Set the date we're counting down to (e.g., the launch date)
var countDownDate = new Date("July 19, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =
    "<div><span>" + days + "</span>days</div>" +
    "<div><span>" + hours + "</span>hours</div>" +
    "<div><span>" + minutes + "</span>minutes</div>" +
    "<div><span>" + seconds + "</span>seconds</div>";

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Happy Birthday Nishtha!";
  }
}, 1000);

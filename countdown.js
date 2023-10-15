function startCountdown() {
    const eventDateInput = document.getElementById("event-date");
    const eventDate = new Date(eventDateInput.value);
  
    if (isNaN(eventDate)) {
      alert("Invalid date. Please enter a valid date and time.");
      return;
    }
  
    // Update the countdown every second
    setInterval(updateCountdown, 1000, eventDate);
  }
  
  function updateCountdown(eventDate) {
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;
  
    // Check if the event has already occurred
    if (timeDifference <= 0) {
      document.getElementById("countdown").textContent = "Event has already occurred!";
      return;
    }
  
    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    // Display the countdown
    document.getElementById("countdown").textContent = `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
  
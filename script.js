// JavaScript to update the calendar dynamically
function updateCalendar() {
    const calendarElement = document.querySelector('.calendar');
    const dayNameElement = document.getElementById('dayName');
    const dateElement = document.getElementById('date');
    const EndateElement = document.getElementById('Endate');

    // Get today's date
    const today = new Date();

    // Array of weekday names
    const daysOfWeek = ["الأحد", "الأثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

    // Get day name and formatted date
    const dayName = daysOfWeek[today.getDay()];
    const date = today.toLocaleDateString('ar-SA', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const Endate = today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    // Update the HTML elements
    dayNameElement.textContent = dayName;
    dateElement.textContent = date +' -';
    EndateElement.textContent = Endate;

}

// Update the calendar on page load
updateCalendar();

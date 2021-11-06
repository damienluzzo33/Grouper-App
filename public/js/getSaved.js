//* import helper functions
const { format_date, format_time, format_category } = require('../../util/helpers');

//* Get all the saved events from the local storage
let allSavedEvents = JSON.parse(localStorage.getItem('savedEvents'));

//*  get the button with the id of dashboard
const dashboardDisplay = document.querySelector('#dashboard');

async function displayEvents(allSavedEvents) {
    if (allSavedEvents) {
        for (let event of allSavedEvents) {
            let formattedCategory = await format_category(event.event_category);
            let formattedDate = await format_date(event.event_date);
            let formattedStartTime = await format_time(event.start_time);
            let formattedEndTime = await format_time(event.end_time);

            const htmlString = `
    <div class="card hoverable">
        <div class="card-image">
            <a href="/events/${event.id}" alt="go to the main page for this event">
                <div class="imageFrame" style="background-image: url('./image/${formattedCategory}.jpg');"></div>
            </a>
        </div>
        <div class="card-content black-text">
            <span class="card-title"><a href="/events/${event.id}" alt="get more details about this event">${event.event_name}</a></span>
            <p>${event.user.username}</p>
        </div>
        <div class="card-action">
            <p>${event.location}</p>
            <p>${formattedDate}</p>
            <p>${formattedStartTime} to ${formattedEndTime}</p>
        </div>
    </div>
            `
            dashboardDisplay.appendChild(htmlString);
        }
    }
}

displayEvents(allSavedEvents);
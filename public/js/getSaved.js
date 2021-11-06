//* Get all the saved events from the local storage
let allSavedEvents = JSON.parse(localStorage.getItem('savedEvents'));

//*  get the button with the id of dashboard
const dashboardDisplay = document.querySelector('#dashboard');

function format_date(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
}

function format_time(time) {
    return moment(time, 'HH:mm:ss').format('h:mm A');
}

function format_category(category) {
    console.log(category);
    let catArr = category.split(' ');
    let reformated = catArr.join('');
    return reformated;
}

if (allSavedEvents) {
    for (let event of allSavedEvents) {
        let formattedCategory = format_category(event.foundEvent.event_category);
        let formattedDate = format_date(event.foundEvent.event_date);
        let formattedStartTime = format_time(event.foundEvent.start_time);
        let formattedEndTime = format_time(event.foundEvent.end_time);

        const htmlString = `
<div class="card hoverable">
    <div class="card-image">
        <a href="/events/${event.foundEvent.id}" alt="go to the main page for this event">
            <div class="imageFrame" style="background-image: url('./image/${formattedCategory}.jpg');"></div>
        </a>
    </div>
    <div class="card-content black-text">
        <span class="card-title"><a href="/events/${event.foundEvent.id}" alt="get more details about this event">${event.foundEvent.event_name}</a></span>
        <p>${event.foundEvent.user.username}</p>
    </div>
    <div class="card-action">
        <p>${event.foundEvent.location}</p>
        <p>${formattedDate}</p>
        <p>${formattedStartTime} to ${formattedEndTime}</p>
    </div>
</div>
        `
        dashboardDisplay.appendChild(htmlString);
    }
}
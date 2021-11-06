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
    let catArr = category.split(' ');
    let reformated = catArr.join('');
    return reformated;
}

if (allSavedEvents) {
    for (let event of allSavedEvents) {
        let formattedCategory = format_category(event.event_category);
        let formattedDate = format_date(event.event_date);
        let formattedStartTime = format_time(event.start_time);
        let formattedEndTime = format_time(event.end_time);

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
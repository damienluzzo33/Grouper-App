let allSavedEventIds = JSON.parse(localStorage.getItem('savedEvents'));

if (!allSavedEventIds) {
    allSavedEventIds = [];
}

//* create a function that allows the user to RSVP / SAVE an event to their dashboard
const saveEventHandler = async (event) => {
    //* if the data-id attribute exists for the event, then get it and use it to save the corresponding event
    if (event.target.hasAttribute('data-id')) {
        const eventId = event.target.getAttribute('data-id');

        const response = await fetch(`/api/events/${eventId}`, {
            method: 'GET',
            headers: { 'Content-Type': "application/json" }
        });

        console.log(response.json())
        let obj = response.json();
        allSavedEventIds.push(obj);

        localStorage.setItem('savedEvents', JSON.stringify(allSavedEventIds));

        //* if the response comes back okay, then send the user back to the dashboard
        document.location.replace('/dashboard');
    } else {
        alert('Failed to save event. Try again!')
    }
}

//*  get the button with the id of save-event-btn
const saveButton = document.querySelector('#save-event-btn');
//* add event listener to the button and run above function on submit
saveButton.addEventListener('click', saveEventHandler);
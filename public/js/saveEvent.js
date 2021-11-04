//* create a function that allows the user to RSVP / SAVE an event to their dashboard
const saveEventHandler = async (event) => {
    //* if the data-id attribute exists for the event, then get it and use it to save the corresponding event
    if (event.target.hasAttribute('data-id')) {
        const eventId = event.target.getAttribute('data-id');
        const response = await fetch(`/api/events/saved/${eventId}`, {
            method: 'POST',
            body: JSON.stringify({ eventId: eventId }),
            headers: { 'Content-Type': "application/json" }
        });
        //* if the response comes back okay, then send the user back to the dashboard
        if (response.ok) document.location.replace('/dashboard');
        //*  otherwise alert them with failure message
        else alert('Failed to delete event. Try again!')
    }
}

//*  get the button with the id of save-event-btn
const saveButton = document.querySelector('#save-event-btn');
//* add event listener to the button and run above function on submit
saveButton.addEventListener('click', saveEventHandler);
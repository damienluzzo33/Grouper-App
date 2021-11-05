//*  create a function that allows the user to delete an event that they have created
const deleteEventHandler = async (event) => {
    //* if the data-id attribute exists for the event, then get it and use it to delete corresponding event
    if (event.target.hasAttribute('data-delete')) {
        const eventId = event.target.getAttribute('data-delete');
        const response = await fetch(`/api/events/${eventId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json" }
        });
        //* if the response comes back okay, then send the user back to the dashboard
        if (response.ok) document.location.replace('/dashboard');
        //*  otherwise alert them with failure message
        else alert('Failed to delete event. Try again!')
    }
};

//* get the button with the id of delete-event-btn
const deleteButton = document.querySelector('#delete-event-btn');
//* add event listener to the button and run above function when clicked
deleteButton.addEventListener('click', deleteEventHandler);

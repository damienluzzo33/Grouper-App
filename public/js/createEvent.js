//* create function that will allow the user to create a new event
const createEventHandler = async (event) => {
    //* prevent the default behavior
    event.preventDefault();
    //* get all of the necessary parts of an event object based on user responses
    const location = document.querySelector('#event-location').value.trim();
    const in_person = document.querySelector('#in_person').value.trim();
    const event_description = document.querySelector('#event-description').value.trim();
    const event_name = document.querySelector('#event-name').value.trim();
    const event_date = document.querySelector('#event-date').value.trim();
    const start_time = document.querySelector('#start-time').value.trim();
    const end_time = document.querySelector('#end-time').value.trim();
    const event_category = document.querySelector('#event-category').value.trim();

    //* if all the information is submitted correctly, then send a post request to our API
    if (location && event_date && event_name && start_time && end_time && event_category && event_description) {
        const response = await fetch(`/api/events`, {
            method: 'POST',
            body: JSON.stringify({ location, event_name, event_date, start_time, end_time, event_category }),
            headers: { 'Content-Type': application/json }
        });
        //*  if the response is okay, take the user to the dashboard
        if (response.ok) document.location.replace('/dashboard');
        else alert("Failed to create event...");
    }
};
//*  create a function that allows the user to delete an event that they have created
const deleteEventHandler = async (event) => {
    //* if the data-id attribute exists for the event, then get it and use it to delete corresponding event
    if (event.target.hasAttribute('data-id')) {
        const eventId = event.target.getAttribute('data-id');
        const response = await fetch(`/api/events/${eventId}`, {
            method: 'DELETE'
        });
        //* if the response comes back okay, then send the user back to the dashboard
        if (response.ok) document.location.replace('/dashboard');
        //*  otherwise alert them with failure message
        else alert('Failed to delete event. Try again!')
    }
};

//* create a function that allows the user to RSVP / SAVE an event to their dashboard
// const saveEventHandler = async (event) => {
//     event.preventDefault();
// }

//*  get the button with the id of create-event-btn
const createButton = document.querySelector('#create-event-form');
//* add event listener to the button and run above function on submit
createButton.addEventListener('submit', createEventHandler);

//* get the button with the id of delete-event-btn
const deleteButton = document.querySelector('#delete-event-btn');
//* add event listener to the button and run above function when clicked
deleteButton.addEventListener('click', deleteEventHandler);
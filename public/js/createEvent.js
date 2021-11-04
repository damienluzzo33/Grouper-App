//* create function that will allow the user to create a new event
const createEventHandler = async (event) => {
    //* prevent the default behavior
    event.preventDefault();
    //* get all of the necessary parts of an event object based on user responses
    const location = document.querySelector('#event-location').value.trim();
    const in_person = document.querySelector('#event-proximity').checked;
    const event_description = document.querySelector('#event-description').value.trim();
    const event_name = document.querySelector('#event-name').value.trim();
    const event_date = document.querySelector('#event-date').value.trim();
    const start_time = document.querySelector('#start-time').value.trim();
    const end_time = document.querySelector('#end-time').value.trim();
    const event_category = document.querySelector('input[name="category"]:checked').value;

    //* if all the information is submitted correctly, then send a post request to our API
    if (location && event_date && event_name && start_time && end_time && event_description) {
        const response = await fetch(`/api/events`, {
            method: 'POST',
            body: JSON.stringify({ location, event_name, event_date, start_time, end_time, event_category, event_description, in_person }),
            headers: { 'Content-Type': "application/json" }
        });
        //*  if the response is okay, take the user to the dashboard
        if (response.ok) document.location.replace('/dashboard');
        else alert("Failed to create event...");
    }
};

//*  get the button with the id of create-event-btn
const createButton = document.querySelector('#create-event-form');
//* add event listener to the button and run above function on submit
createButton.addEventListener('submit', createEventHandler);

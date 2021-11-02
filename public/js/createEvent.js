//* create function that will allow the user to create a new event

const createEventHandler = async (event) => {
    event.preventDefault();

    const location = document.querySelector('#event-location').value.trim();
    const event_name = document.querySelector('#event-name').value.trim();
    const event_date = document.querySelector('#event-date').value.trim();
    const start_time = document.querySelector('#start-time').value.trim();
    const end_time = document.querySelector('#end-time').value.trim();
    const event_category = document.querySelector('#event-category').value.trim();

    if (location && event_date && event_name && start_time && end_time && event_category) {
        const response = await fetch(`/api/events`, {
            method: 'POST',
            body: JSON.stringify({ location, event_name, event_date, start_time, end_time, event_category }),
            headers: { 'Content-Type': application/json }
        });

        if (response.ok) document.location.replace('/dashboard');
        else alert("Failed to create event...");
    }
};

// const deleteEventHandler = async (event) => {
    
// }
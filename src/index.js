document.addEventListener('DOMEContentLoaded', () => {
    const form = document.getElementById('guest-form');
    const guestList = document.getElementById('guest-list');
    const nameInput = document.getElementById('guest-name');
    const categorySelect = document.getElementById('category');
    const MAX_GUESTS = 10;

    form.addEventListener('submit', (e){
        e.preventDefault();

        const name = nameInput.value.trim();
        const category = categorySelect.value;

        if(!name) return;

        if (guestList.children.length >= MAX_GUESTS){
            alert("Guest limit (10) reached.");
            return;
        }
        const li = document.createElement('li');
        li.classList.add('guest-item', `category-${category}`);
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${name} (${category})`;

        const rsvpButton = document.createElement('button');
        rsvpButton.textContent = 'Attending';
        rsvpButton.classList.add('rsvp-btn');
        rsvpButton.addEventListener('click', () => {
            rsvpButton.textContent === 'Attending' ? 'Not Attending' : 'Attending';
             const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(rsvpButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(nameSpan);
    li.appendChild(buttonContainer);

    guestList.appendChild(li);

    form.reset();
        });

    })
})
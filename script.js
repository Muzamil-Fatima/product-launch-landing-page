document.getElementById('notify-btn').addEventListener('click', function() {
    document.getElementById('notify-form').classList.remove('hidden');
});

document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you! We'll notify you at ${email} when the product launches.`);
        document.getElementById('notify-form').classList.add('hidden');
        document.getElementById('email').value = '';
    }
});

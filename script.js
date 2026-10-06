document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form values එකතු කර ගැනීම
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if(name && email && message) {
        formMessage.classList.remove('hidden');
        formMessage.style.color = '#10b981';
        formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        
        // Form එක clear කිරීම
        document.getElementById('contactForm').reset();
        
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
});
    
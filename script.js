document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    const formData = new FormData(this);
    
    formMessage.classList.remove('hidden');
    formMessage.style.color = '#6366f1';
    formMessage.textContent = 'Sending message...';

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            formMessage.style.color = '#10b981';
            // මෙතන Sender ට පේන විදිහට Success message එක වැටෙනවා
            formMessage.textContent = 'Thank you! Your message has been sent successfully. We will contact you soon.';
            document.getElementById('contactForm').reset();
        } else {
            formMessage.style.color = '#ef4444';
            formMessage.textContent = json.message || 'Something went wrong! Please try again.';
        }
    })
    .catch(error => {
        console.log(error);
        formMessage.style.color = '#ef4444';
        formMessage.textContent = 'Something went wrong! Please check your connection.';
    })
    .finally(() => {
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 6000);
    });
});
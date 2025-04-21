document.getElementById('waitlist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to your backend
    // For now, we'll just show a success message
    const form = this;
    form.innerHTML = `
        <div class="success-message">
            <h3>Thank you!</h3>
            <p>We've added ${email} to our waitlist. We'll be in touch soon!</p>
        </div>
    `;
    
    // Add some basic styling for the success message
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            text-align: center;
            padding: 2rem;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 0.5rem;
        }
        .success-message h3 {
            color: var(--white);
            margin-bottom: 1rem;
        }
        .success-message p {
            color: var(--white);
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);
}); 
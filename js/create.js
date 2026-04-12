// 1. Initialize EmailJS with your Public Key
emailjs.init("crXjkIhCK_KMqzinc-jCd"); // <-- Replace with your actual Public Key

// 2. Listen for the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    const statusText = document.getElementById('form-status');
    statusText.innerText = "Sending message...";
    statusText.style.color = "#4facfe"; // Blue loading text

    // 3. Send the form data
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
    emailjs.sendForm('service_4fxr31m', 'template_a3u40j5', this)
        .then(function() {
            statusText.innerText = "Message sent successfully! We will be in touch.";
            statusText.style.color = "#4caf50"; // Green success text
            document.getElementById('contact-form').reset(); // Clear the form
        }, function(error) {
            statusText.innerText = "Failed to send message. Please try again.";
            statusText.style.color = "#f44336"; // Red error text
            console.log('FAILED...', error);
        });
});
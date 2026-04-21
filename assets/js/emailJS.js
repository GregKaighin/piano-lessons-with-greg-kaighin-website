function sendMail(contactForm) {
    emailjs.send("default_service", "gkpianolessons", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            var modal = new bootstrap.Modal(document.getElementById('thank-you-modal'));
            modal.show();
            contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // Stops the page from refreshing
}

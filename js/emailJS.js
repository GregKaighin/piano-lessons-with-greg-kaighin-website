emailjs.sendForm('service_s6y906n', 'template-piano-lessons', 'contact-form')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
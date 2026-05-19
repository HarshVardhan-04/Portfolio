

emailjs.init("N1iFWol7-LvptKI2U");

document
.getElementById("cont-details")
.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_98c4o2d",
        "template_9nhtibc",
        this
    )

    .then(function(){

        alert("Message Sent Successfully!");

    })

    .catch(function(error){

        alert("Failed to Send Message");

        console.log(error);

    });

});


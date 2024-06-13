/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
$(document).ready(function () {
  $("#contact").submit(function (event) {
    event.preventDefault();

    emailjs.init("D-na0r_EM4v_ennvI");

    emailjs
      .sendForm("service_9ar72uw", "template_hdvtuwg", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Form Submission Failed! Try Again");
        }
      );
  });
});

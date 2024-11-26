$(document).ready(function () {
  $(".accordion-button").on("click", function () {
    $(this).toggleClass("active");
  });
});

$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        // Handle form submission here, e.g., send data to your server
        alert('Form submitted successfully!');
    });
});
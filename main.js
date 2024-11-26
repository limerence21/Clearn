/*
function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#email")
    const subject = $("#subject")
    const message = $("message")


}
*/

function onFormSubmit(event) {
    event.preventDefault(); // Mencegah form submit default
    let isValid = true;

    // Cek setiap input yang diperlukan
    $('#contact-form input[required], #contact-form textarea[required]').each(function () {
      if ($(this).val() === '') {
        isValid = false;
        alert(`Please fill in the ${$(this).prev('label').text()} field.`);
        return false; // Keluar dari each loop
      }
    });

    // Jika valid, bisa lakukan submit form atau aksi lainnya
    if (isValid) {
      alert('Form is valid and ready to be submitted!');
      // Lakukan submit atau aksi lainnya di sini
    }
  }

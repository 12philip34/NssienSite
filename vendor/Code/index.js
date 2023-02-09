function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "nssienphilip@gmail.com",
    Password: "kbohwzbtvekmnrbn",
    To: 'nssienphilip@gmail.com',
    From: document.getElementById('yourEmail').value,
    Subject: "New Contact Form Enquiry",
    Body: "Name:" + document.getElementById('yourName').value
      + '<br> Email:' + document.getElementById('yourEmail').value
      + '<br> Message:' + document.getElementById('textArea').value

  }).then(
    message => alert('Message Sent Successful!!')
  );

}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
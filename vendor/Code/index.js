let submitBtn = document.getElementById("button");
submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let subject = document.getElementById('textArea');
  Email.send({
    Host: "smtp.gmail.com",
    Username: "nssienphilip@gmail.com",
    Password: "ffilehaauynxwyhz",
    To: 'nssienphilip@gmail.com',
    From: document.getElementById('yourEmail').value,
    Subject: subject,
    Body: "Name:" + document.getElementById('yourName').value
      + '<br> Email:' + document.getElementById('yourEmail').value
      + '<br> Message:' + document.getElementById('textArea').value

  }).then(
    message => alert('Message Sent Successful!!')
  );
})

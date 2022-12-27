const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const token = document.getElementById('token').value;
      const chatId = document.getElementById('chat_id').value;
      const text = document.getElementById('text').value;

      const apiUrl = `https://api.telegram.org/bot${token}/SendMessage?chat_id=${chatId}&text=${text}`;

      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            alert('Message sent successfully!');
          } else {
            alert('There was an error sending the message.');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('There was an error sending the message.');
        });
    });
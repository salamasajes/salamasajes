const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ex6h4mo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('El correo se ha enviado correctamente! En breve contactaremos contigo para confirmar la cita');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});
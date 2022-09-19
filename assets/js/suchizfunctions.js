var secret = "";
fetch('https://sheets.googleapis.com/v4/spreadsheets/1mXGnxpDCp_bTnma_6yLzX8Q69kTA2mbn4pQGs5Ce_y4?includeGridData=true&key=AIzaSyDlQMJFTSXTJJ71J4jyVa41bchoN-8cTcE').then(
    function (response){ return response.json();}
).then(function(obj){
    secret = obj.sheets[2].data[0].rowData[0].values[0].formattedValue;
}).catch(function(error){
    console.log(error);
});

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm() {

    let name = document.getElementById("form-name").value;
    let email = document.getElementById("form-email").value;
    let message = document.getElementById("form-message").value;


    // document.querySelector("contact-form").reset();
    sendEmail(name, email, message);
    document.getElementById("contact-form").reset();
  }

  function sendEmail(name, email, message){
      Email.send({
          Host: "smtp.gmail.com",
          Username: 'suchizgames@gmail.com',
          Password: secret,
          To: "contact@ani-love.fr",
          From: "suchizgames@gmail.com",
          Subject: `Message de ${name} via Contact de contact@ani-love.fr`,
          Body: `Nom: ${name} <br/> Email: ${email} <br/> Téléphone: ${phone} <br/> Message: ${message}`,
      }).then((message) => alert("Votre mail a bien été envoyé ! On revient vers vous très vite, merci !"));
  }

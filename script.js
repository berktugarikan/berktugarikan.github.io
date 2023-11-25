function showContent(contentType) {
    var contentDiv = document.getElementById('content');
  
    if (contentType !== 'home') {

      switch (contentType) {
        case 'categories':
          window.location.href = 'categories.html';
          break;
        case 'about':
          window.location.href = 'about.html';
          break;
        case 'contact':
          window.location.href = 'contact.html';
          break;
        default:
          alert('Invalid Menu Option');
          break;
      }
    }
}

function validateForm() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    var areaCode = document.getElementById('areaCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var turkishPhoneNumberPattern = /^(\+90\s?5\d{2}|\b05\d{2})\s?\d{3}\s?\d{2}\s?\d{2}$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid Email!');
        return false;
    }

    if (!turkishPhoneNumberPattern.test(areaCode + phoneNumber)) {
        alert('Please enter a valid Turkish telephone number!');
        return false;
    }

    alert("Form is submitted");
    window.location.href = "submit.html";
    return false;
}


var apiCompany = "https://run.mocky.io/v3/f9dd5a4d-b241-4a17-9e6a-0e4956b1067a";
function getCompany(url, selectElement) {
  fetch(url)
      .then((response) => response.json())
      .then((data) => {
          data.forEach(option => {
              var optionElement = document.createElement("option");
              optionElement.value = option.id;
              optionElement.text = option.name;
              selectElement.appendChild(optionElement);
          });
      })
      .catch((err) => console.log(err));
}

document.addEventListener("DOMContentLoaded", function () {
  getCompany(apiCompany, document.getElementById("company"));
});


var apiSubject = "https://run.mocky.io/v3/7534f8f0-9b15-4b57-a94b-75d4b5090b5f";
function getSubject(url, selectElement){
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(option => {
        var optionElement = document.createElement("option");
        optionElement.value = option.id;
        optionElement.text = option.name;
        selectElement.appendChild(optionElement);
      });
    })
    .catch((err) => console.log(err));
}

document.addEventListener("DOMContentLoaded", function(){
  getSubject(apiSubject, document.getElementById("subject"))
})



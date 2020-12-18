const btn = document.querySelector('#btn');
const inputtxt = document.querySelector("#input-text");
const outputtxt = document.querySelector('#output-text');

const serverURL = "https://api.funtranslations.com/translate/dothraki.json?text=";

function translate(){
   fetch(serverURL + inputtxt.value)
   .then(function(response){
      return response.json();
   })
   .then(function(data){
      outputtxt.innerText = data.contents.translated;
   })
   .catch(function(error){
      console.log("Something went wrong!");
      alert("Something went wrong!");
   })
}


btn.addEventListener('click', translate);
var xmlRequest = new XMLHttpRequest();
const dropdownSelect = document.getElementsByTagName("select");
const getImageButton =  document.getElementById("get-image");
const imageTag = document.getElementsByTagName("img");
const nextButton = document.getElementById("next-button");
var currentBread = document.getElementById("dropdown").value;;
var isgetImage = false
xmlRequest.onload = function (){
    var dropdownList = JSON.parse(xmlRequest.response).message;
    Object.keys(dropdownList).forEach(function(key) {
        let option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        dropdownSelect[0].appendChild(option);

      })
}
xmlRequest.open("get", "https://dog.ceo/api/breeds/list/all", true);
xmlRequest.send('');
var selectedBreed;
if(selectedBreed !== currentBread){
    isgetImage =false;
    getImageButton.disabled = false;
    nextButton.disabled = true;
    selectedBreed = currentBread
}
getImageButton.addEventListener('click', getBreedImage)
nextButton.addEventListener('click', nextBreedImage)
function getBreedImage(){
    currentBread = document.getElementById("dropdown").value;
    
    if( isgetImage == false) 
    {
        //currentBread = selectedBreed;
        let url = "https://dog.ceo/api/breed/" + currentBread + "/images/random";
        xmlRequest.onload = function (){
            var imageURL = JSON.parse(xmlRequest.response).message;
            imageTag[0].setAttribute("src", imageURL);
            imageTag[0].hidden = false;
        }
        xmlRequest.open("get", url , true);
        xmlRequest.send('');
        isgetImage = true;
        getImageButton.disabled = true;
        nextButton.disabled = false;
        return;
    }
    
}
function nextBreedImage(){
    if(isgetImage === true){
        //let selectedBreed = document.getElementById("dropdown").value;
        let url = "https://dog.ceo/api/breed/" + currentBread + "/images/random";
        xmlRequest.onload = function (){
            var imageURL = JSON.parse(xmlRequest.response).message;
            imageTag[0].setAttribute("src", imageURL);
            imageTag[0].hidden = false;
        }
        xmlRequest.open("get", url , true);
        xmlRequest.send('');
        isgetImage = true;
        return;
    }
    
    
    
}
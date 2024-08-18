function submitYourCity(event){
    event.preventDeFlault();
   console.log(searchInput.value);
   let searchInput=document.querySelector("#input-search-form");
   let cityElement=document.querySelector("#city");
   cityElement.innerHTML=searchInput.value;
}


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",submitYourCity);
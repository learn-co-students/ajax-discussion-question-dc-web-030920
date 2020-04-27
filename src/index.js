const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  const button = document.querySelector(".btn")
  button.onclick = fetchUser
});

function fetchUser(){
  fetch('https://randomuser.me/api/')
  .then(resp => resp.json())
  .then(user => render(user))
}

function render(data){
  user = data.results[0]
  // debugger
  document.getElementById("profile_picture").src = user.picture.medium
  document.getElementById("fullname").innerText = `${user.name.first} ${user.name.last}`
  document.getElementById("email").innerText = user.email
  document.getElementById("street").innerText = `${user.location.street.number} ${user.location.street.name}`
  document.getElementById("city").innerText = user.location.city
  document.getElementById("state").innerText = user.location.state
  document.getElementById("postcode").innerText = user.location.postcode
  document.getElementById("phone").innerText = user.phone
  document.getElementById("cell").innerText = user.cell
  document.getElementById("date_of_birth").innerText = user.dob.date


}
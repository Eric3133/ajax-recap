// const signUp = (event) => {
//   event.preventDefault();
//   const emailValue = document.getElementById("email").value
//   const passwordValue = document.getElementById("password").value
// //   const requireDetails = {
// //     method :"POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({
// //       "email": emailValue,
// //       "password": passwordValue}
// //     })
// //   }
// // }
// const form = document.querySelector("#form");
// form.addEventListener("submit", signUp);


//   Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})

//   Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
console.log("hello from js");
const url = "https://api.github.com/users/dhh"
console.log(fetch(url));
fetch(url)
.then(response => response.json()) // wait for the response and parse it as json
.then((data) => {
  console.log(data); // wait for parsing, allowing us to manipulate the data
})

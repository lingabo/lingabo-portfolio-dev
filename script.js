//Form Submission
const form = document.getElementById("my-form");

const userFirstname = document.querySelector("#Firstname");
const userLastname  = document.querySelector("#Lastname");
const Emailuser = document.querySelector("#email");
const Message = document.querySelector("#message");




// async function handleSubmit(event) {
//   event.preventDefault();
//   const status = document.getElementById("my-form-status");
//   const data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         status.innerHTML = "Message envoyé avec succès, Merci!";
//         form.reset();
//       } else {
//         response.json().then((data) => {
//           if (Object.hasOwn(data, "errors")) {
//             status.innerHTML = data["errors"]
//               .map((error) => error["message"])
//               .join(", ");
//           } else {
//             status.innerHTML = "Il y a eu problème au moment de soumission";
//           }
//         });
//       }
//     })
//     .catch((error) => {
//       status.innerHTML = "Il y a eu problème au moment de soumission";
//     });
// }
// form.addEventListener("submit", handleSubmit);

// //Tooltips for icons and progress bar

// let tooltipTriggerList = [].slice.call(
//   document.querySelectorAll('[data-bs-toggle="tooltip"]')
// );
// let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// });

// //Hide collapse navbar on option click

// const navLinks = document.querySelectorAll(".nav-item");
// const menuToggle = document.getElementById("navbarNav");
// const bsCollapse = new bootstrap.Collapse(menuToggle);
// navLinks.forEach((item) => {
//   item.addEventListener("click", () => {
//     bsCollapse.toggle();
//   });
// });

// //Prevent right click on the ui

// document.oncontextmenu = function () {
//   return false;
// };



function ValidateInputs(){
  
  const userFirstname = userFirstname.value.trim();
  const userLastname = userLastname.value.trim();
  const Emailuser = Emailuser.value.trim();
  const message = message.value.trim();

if (userFirstname === ""){
  setErrorFor(
    userFirstname,"N'oubliez pas de renseigner votre nom"
  );

} else if (userFirstname.length < 2){
  setErrorFor(userFirstname,"Minimum deux caractères");
  
}



}
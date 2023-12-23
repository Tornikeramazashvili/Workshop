// This function changes clothes by pressing the image

function changeSketches(newClothId) {
  const NEW_Cloth = document.getElementById(newClothId);
  const CURRENT_cloth = document.getElementById("current_cloth");

  CURRENT_cloth.src = NEW_Cloth.src;
}

// This function changes content among body, skin, hair, etc.
// Your task is to continue adding new pieces of code.

function toggleVisibility(elementId) {
  let bodyContent = document.getElementById("main-right-side-body");
  let skinContent = document.getElementById("main-right-side-skin");

  if (elementId === "main-right-side-body") {
    bodyContent.style.display = "block";
    skinContent.style.display = "none";
  } else {
    bodyContent.style.display = "none";
    skinContent.style.display = "block";
  }
}


// Saving on local storage

// function changeSketches(newClothId) {
//   const NEW_Cloth = document.getElementById(newClothId);
//   const CURRENT_cloth = document.getElementById("current_cloth");

//   // Save the new cloth source in local storage
//   localStorage.setItem('currentClothSrc', NEW_Cloth.src);

//   // Set the source of CURRENT_cloth
//   CURRENT_cloth.src = NEW_Cloth.src;
// }

// // On page load, retrieve the saved value from local storage
// document.addEventListener('DOMContentLoaded', function() {
//   const CURRENT_cloth = document.getElementById("current_cloth");

//   // Get the saved cloth source from local storage
//   const savedClothSrc = localStorage.getItem('currentClothSrc');

//   // Set the source of CURRENT_cloth if it exists in local storage
//   if (savedClothSrc) {
//     CURRENT_cloth.src = savedClothSrc;
//   }
// });

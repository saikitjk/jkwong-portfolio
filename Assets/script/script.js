function phonePop() {
  console.log("i am hit again");
  var popup = document.getElementById("phonePopup");
  popup.classList.toggle("show");
}

//top button
var mybutton = document.getElementById("topButton");

function scrollFunction() {
  console.log("dllm");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

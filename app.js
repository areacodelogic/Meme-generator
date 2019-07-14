window.addEventListener("DOMContentLoaded", loaded);

function loaded() {
  var inputForm = document.querySelector(".inputForm");
  inputForm.addEventListener("submit", generate);

  function createImage() {
    var image = document.createElement("img");
    var imageDiv = document.createElement("div");

    imageDiv.classList.add("col-", "mb-4", "image_div");

    image.classList.add("rounded", "img-responsive");

    var topText = document.querySelector("#topText").value;
    var bottomText = document.querySelector("#bottomText").value;
    var imgUrl = document.querySelector("#imgUrl").value;

    image.setAttribute("src", imgUrl);
    image.setAttribute("height", "auto");
    image.setAttribute("width", "auto");

    /* -- image text -- */

    var top_text = document.createElement("div");
    top_text.innerText = topText;
    top_text.classList.add("text", "top_text");

    var bottom_text = document.createElement("div");
    bottom_text.innerText = bottomText;
    bottom_text.classList.add("text", "bottom_text");

    var imgBox = document.querySelector(".imgBox");

    imageDiv.appendChild(image);
    imageDiv.appendChild(top_text);
    imageDiv.appendChild(bottom_text);

    imageDiv.addEventListener("click", delete_image);
    imageDiv.addEventListener("mouseenter", toggleX);
    imageDiv.addEventListener("mouseleave", toggleX);

    function delete_image(e) {
      console.log(e.target);
      var divRemoved = e.target;
      console.log({ divRemoved });

      imgBox.removeChild(divRemoved);
    }

    function toggleX(e) {
      imageDiv.classList.toggle("image");
    }

    //console.log({topText, bottomText, imgUrl})
    imgBox.appendChild(imageDiv);
  }

  function generate(e) {
    e.preventDefault();
    createImage();

    clearInputs();
  }

  function clearInputs() {
    var inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }
}

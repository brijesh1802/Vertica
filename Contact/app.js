const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
function openPopup()
{
                let popup = document.getElementById("popup");
                let wrapper = document.getElementById("wrapper");

                document.getElementById("wrapper").style.visibility = "visible";
                popup.classList.add("open-popup");
            }
        

              function closePopup()
              {
                document.getElementById("wrapper").style.visibility="hidden";
                popup.classList.remove("open-popup"); 
              
              }
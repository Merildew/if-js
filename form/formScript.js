const form = document.getElementById("form");
const imgField = document.getElementById("imgField");
const fileInput = document.getElementById("fileInput");

form.onsubmit = imgInput;

imgField.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  event.preventDefault();
  const files = fileInput.files;
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {
    const imgUrl = reader.result;
    imgField.style.backgroundImage = `url("${imgUrl}")`;
    imgField.innerHTML = "";
  };
});

async function imgInput(e) {
  e.preventDefault();
  const response = await fetch(
    "https://fe-student-api.herokuapp.com/api/file",
    {
      method: "POST",
      body: new FormData(form),
    }
  );
  const result = await response.json();
  if (response.ok) {
    console.log(result);
  } else console.log(result.message);
}

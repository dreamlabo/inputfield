const fakeFormParagraph =  document.getElementById("fake-form-p");
const hiddenFileBtn = document.getElementById("hidden-file-btn");
const toggleButton = document.getElementById("toggle-button");
let darkMode = true;

document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('nextBtnCsv');
    myButton.disabled = true; 
});

function openFileBrowser() {
    const hiddenFileBtn = document.getElementById("hidden-file-btn");
    hiddenFileBtn.click();
}

hiddenFileBtn.addEventListener("change", () =>  {
    if(hiddenFileBtn.files.length > 0 ) {
        document.getElementById("file-name-text").textContent = hiddenFileBtn.files[0].name
        document.getElementById("btn-browse").blur();
        document.getElementById("btn-trash-can").focus();

        document.getElementById("btn-trash-can").classList.add("make-visible");
        document.getElementById("nextBtnCsv").disabled = false;

        fakeFormParagraph.classList.add("active");
        fakeFormParagraph.setAttribute('aria-hidden','false');
    }
})

function clearSelectedFile() {
    document.getElementById("form").reset();
    document.getElementById("file-name-text").textContent = "No CSV file selected";

    document.getElementById("btn-trash-can").classList.remove("make-visible");
    document.getElementById("nextBtnCsv").disabled = true;

    fakeFormParagraph.classList.remove("active");
    fakeFormParagraph.setAttribute('aria-hidden','true');
}

function toggleColorTheme() {
    darkMode ? setLightMode() : setDarkMode();
}

function setLightMode() {
    document.documentElement.setAttribute("color-mode", 'light');
    toggleButton.innerHTML = "Switch to dark mode"
    darkMode = false;
}

function setDarkMode() {
    document.documentElement.setAttribute("color-mode", "dark");
    toggleButton.innerHTML = "Switch to light mode"
    darkMode = true;
}
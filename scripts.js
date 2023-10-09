function openFileBrowser() {
    const hiddenFileBtn = document.getElementById("hidden-file-btn");
    hiddenFileBtn.click();
}

const hiddenFileBtn = document.getElementById("hidden-file-btn");

hiddenFileBtn.addEventListener("change", () =>  {
    if(hiddenFileBtn.files.length > 0 ) {
        document.getElementById("file-name-text").textContent = hiddenFileBtn.files[0].name
        document.getElementById("btn-browse").blur();
        document.getElementById("btn-trash-can").focus();
        document.getElementById("fake-form-p").classList.add("active");
        document.getElementById("btn-trash-can").classList.add("make-visible");
        document.getElementById("nextBtnCsv").disabled = false;
    }
})

function clearSelectedFile() {
    document.getElementById("form").reset();
    document.getElementById("file-name-text").textContent = "No file selected";
    document.getElementById("fake-form-p").classList.remove("active");
    document.getElementById("btn-trash-can").classList.remove("make-visible");
    document.getElementById("nextBtnCsv").disabled = true;
}
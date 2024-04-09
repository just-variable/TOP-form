document.querySelector("form").addEventListener("submit", ()=>{
    if(document.querySelector("#pass1").value != document.querySelector("pass2").value){
        document.querySelector("#pass-error").style.display = "block";
        cancelFormSubmission();
    }
})
function isBlank(inputField){
    if(inputField.type == "checkbox"){
       if(inputField.checked)
    return false;
    else {
        alert("Fill the required fields !!")
    return true;
    }
    }
    if(inputField.value == "" || inputField.value == null){
        alert("Fill the required fields !!")
            return true;
    }
    return false;
    }
    
    function makeRed(inputDiv){
    inputDiv.parentNode.style.backgroundColor = "#AA0020";
    inputDiv.parentNode.style.color = "#ffffff";
    inputDiv.style.backgroundColor = "#AA0020";
    
    
    }
    
    function makeClean(inputDiv){
    inputDiv.parentNode.style.backgroundColor = "#ffffff";
    inputDiv.parentNode.style.color = "#000000";
    
    
    }
    
    
    window.onload = function(){
    var mainForm = document.getElementById("mainForm");
    var requiredInputs = document.querySelectorAll(".required");
    
    for(var i=0; i< requiredInputs.length ;i++){
    requiredInputs[i].onfocus = function(){
    this.style.backgroundColor = "#EEEE20";
    }
    }
    mainForm.onsubmit = function(e){
    var requiredInputs = document.querySelectorAll(".required");
    for(var i=0; i< requiredInputs.length ;i++){
    if(isBlank(requiredInputs[i])){
    e.preventDefault();
    makeRed(requiredInputs[i]);
 
    }
    else{
    makeClean(requiredInputs[i]);
    
    }
    }
    
    }
    
    
    
    }
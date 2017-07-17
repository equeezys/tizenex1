window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');
        
        if(contentText.innerHTML === "Basic"){
        	contentText.innerHTML = "Tizen";
        	document.myImage.style.visibility="hidden";
        }
        else{
        	contentText.innerHTML ="Basic";
        	document.myImage.style.visibility="visible";
        }
    });
};
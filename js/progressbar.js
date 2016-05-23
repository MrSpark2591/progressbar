var progressBar = {  // Golbal configuration
	    
	    progressBarFunction : function() { // Ajax Progressbar
                       var elem = document.getElementsByClassName("progressbar");
                       var width = 0;   
                       var id = setInterval(frame,10);
                       function frame() {
                     if(progressBar.progressBarFlag){
                        if (width == 100) {
                            elem[0].style.width = '0%';
                            width = 0; 
                        } else {
                            width = width + 0.5;
                            elem[0].style.width = width+'%';
                        }
                      }else{
                        elem[0].style.width = '0%';
                      }
                    }
			    },
        progressBarStart : function(){
            progressBar.progressBarFlag = true;
            progressBar.progressBarFunction();
        },
        progressBarStop : function(){
            progressBar.progressBarFlag = false;
        },
        progressBarFlag : false
}

progressBar.progressBarStart();

setTimeout(function(){
    progressBar.progressBarStop();
},5000);
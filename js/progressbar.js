var progressBar = {  // Golbal configuration
	    
	    progressBarFunction : function() { // Ajax Progressbar
                    if(progressBar.progressBarFlag){
                       $('.progressbar-div')
                        .animate({width:'100%'},1000)
                        .animate({width:'0%'},0,progressBar.progressBarFunction);
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
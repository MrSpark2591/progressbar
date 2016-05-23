var progressBar = {  // Golbal configuration
	    appConfig : {
            pattern : 1, // 1 for stright line progressbar
            color : "#FFD800", //color of progressbar
            intervalAnmation : 10, // ms interval
            height:  5// px height 
        },
        config : function(configObject){
            progressBar.appConfig = Object.assign(progressBar.appConfig , configObject);
            var temp = document.getElementsByClassName("progressbar");
            progressBar.element = temp[0];
            progressBar.cssSetFunction();
        },
        element : {},
        cssSetFunction : function(){
            progressBar.element.setAttribute("style" , "display : block;");
            progressBar.element.setAttribute("style" , "position : absolute;");
            progressBar.element.setAttribute("style" , "left: 0;");
            progressBar.element.setAttribute("style" , "z-index: 1000;");
            progressBar.element.style.background = progressBar.appConfig.color;
            progressBar.element.style.height = progressBar.appConfig.height+ 'px';
            progressBar.element.style.width = 0;
        },
        progressBarFunction : function() { // Progressbar function 
            if(progressBar.appConfig.pattern === 1){
                progressBar.progressBarFunctionPattern1();
            }     
		},
        progressBarStart : function(){ // start function
            progressBar.progressBarFlag = true;
            progressBar.progressBarFunction();
        },
        progressBarStop : function(){ // stop function
            progressBar.progressBarFlag = false;
        },
        progressBarFunctionPattern1 : function(){
            var width = 0;   
            var id = setInterval(frame, progressBar.appConfig.intervalAnmation);
            function frame() {
                if(progressBar.progressBarFlag){
                    if (width == 100) {
                        progressBar.element.style.width = '0%';
                        width = 0; 
                    }else{
                        width = width + 0.5;
                        progressBar.element.style.width = width+'%';
                    }
                }else{
                    progressBar.element.style.width = '0%';
                }
            }
        },
        progressBarFlag : false // flage for progressbar
}

var xyz = {
    pattern : 1,
    color : "#e52d27",
    height : 10,
    intervalAnmation : 5
};
progressBar.config(xyz);
progressBar.progressBarStart();

setTimeout(function(){
    progressBar.progressBarStop();
},5000);
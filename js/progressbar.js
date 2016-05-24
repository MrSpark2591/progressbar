var progressBar = {  // Golbal configuration
	    appConfig : {
            pattern : 1, // 1 for stright line progressbar
            color : "#FFD800", //color of progressbar
            intervalAnmation : 20, // ms interval
            height:  5,
            zIndex: 1000// px height 
        },
        config : function(configObject){
            progressBar.appConfig = Object.assign(progressBar.appConfig , configObject);
            var temp = document.getElementsByClassName("progressbar");
            progressBar.element = temp[0];
            progressBar.cssSetFunction();
        },
        element : {},
        cssSetFunction : function(){
            progressBar.element.setAttribute("style" , "display: block;");
            progressBar.element.setAttribute("style" , "z-index:"+progressBar.appConfig.zIndex+";");
            progressBar.element.style.width = "0%";
            progressBar.element.style.background = progressBar.appConfig.color;
            progressBar.element.style.height = progressBar.appConfig.height+ 'px';
            progressBar.element.style.position = "absolute";
            progressBar.element.style.left = "0px";
        },
        progressBarFunction : function() { // Progressbar function 
            if(progressBar.appConfig.pattern === 1 && !progressBar.inprogressFlag){
                progressBar.inprogressFlag = true;
                progressBar.progressBarFunctionPattern1();
            }     
		},
        progressBarStart : function(){ // start function
            if(!progressBar.inprogressFlag){
                progressBar.progressBarFlag = true;
                progressBar.element.style.width = '0%';
                progressBar.element.style.opacity = 1;
                progressBar.progressBarFunction();
            }
        },
        progressBarStop : function(){ // stop function
            if(progressBar.inprogressFlag){
                progressBar.fadeOut()
                progressBar.progressBarFlag = false;
                progressBar.inprogressFlag = false;   
            }
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
                    progressBar.element.style.width = '100%';
                    width = 0;
                    clearInterval(id);
                }
            }
        },
        fadeOut : function(){
            var op = 1;  // initial opacity
            var timer = setInterval(function () {
            if (op <= 0.1){
               progressBar.element.style.opacity = 0; 
              clearInterval(timer);
            }else{
                progressBar.element.style.opacity = op;
                progressBar.element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.1;
            }
            }, 10);
        },
        progressBarFlag : false,// flage for progressbar
        inprogressFlag: false 
}
progressBar.config({});

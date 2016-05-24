var quickDemoFlag = false;
var quickDemo = function(){
	if(!quickDemoFlag){
		quickDemoFlag = true;
		progressBar.progressBarStart();
		setTimeout(function(){
    		if(progressBar.inprogressFlag){
    			progressBar.progressBarStop();
    			quickDemoFlag = false;
    		}
		},5000);
	}	
}
var configObject = {};

$('.quick-demo-button').click(function(){
	quickDemo();
});
$('.start-progress-demo-button').click(function(){
	progressBar.progressBarStart();
});
$('.stop-progress-demo-button').click(function(){
	progressBar.progressBarStop();
	quickDemoFlag = false;
});
$('.progressbar-color').change(function(){
	configObject.color = $('.progressbar-color').val();
	progressBar.config(configObject);
});
$('.progressbar-height').change(function(){
	configObject.height = $('.progressbar-height').val();
	progressBar.config(configObject);
});
$('.progressbar-interval').change(function(){
	configObject.intervalAnmation = $('.progressbar-interval').val();
	progressBar.progressBarStop();
	quickDemoFlag = false;
	progressBar.config(configObject);
});
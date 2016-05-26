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
$('.pattern').change(function(){
	if($('.pattern').val() == 1){
		$('#pattern1').slideDown();
		$('.pattern2').addClass('hide');
		configObject.pattern = 1;
		progressBar.config(configObject);
	}
	if($('.pattern').val() == 2){
		$('#pattern1').slideUp();
		$('.pattern2').removeClass('hide');
		configObject.pattern = 1;
		progressBar.config(configObject);
	}
});
var inprogressFlagpattern2 = false;
$('.quick-demo-button-pattern2').click(function(){
	if(!inprogressFlagpattern2){
		var progress = 0;
		inprogressFlagpattern2 = true;
		progressBar.progressBarStart();
		var id = setInterval(function(){
			if(progress == 100){
				clearInterval(id);
				progressBar.progressBarStop();
				inprogressFlagpattern2 = false;
				$('.percent').html('0 %')
			}else{
				progress = progress + 1;
				$('.percent').html(progress +'%');
				progressBar.progressBarFunctionPattern2(progress);
			}
		},10);
	}
});
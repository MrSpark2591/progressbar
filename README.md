# progressbar
progress bar plugin for general use pure javascript base so you can use it with any technology framework like angular,jquery,etc.

#How to use ? 

Include 
<script type="text/javascript" src="http://yourjavascript.com/0061456612/progressbar-v1-0.js"></script>
or download file from js folder and put it up in your js folder and include it.(include it before all files where you want to use cool functions of this plugin!!!)

Put in html where you want progress bar to be placed.
<div class="progressbar"></div>

in your js file make one object for config and feed it to config to progressbar start working.(prfered when using jquery put it in start of document ready and for angular in init function and so on for other frameworks.)

#Defualt Configuration

appConfig : {
            pattern : 1, // 1 for stright line progressbar
            color : "#FFD800", //color of progressbar
            intervalAnmation : 10, // ms interval
            height:  5,// px height
            zIndex: 1000 // z-index if you want to adjust as per requirment  
        }
  none of the above fileds are mendetory if you don't update property it will take defult values from defult appConfig




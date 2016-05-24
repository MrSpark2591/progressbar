# Progressbar(pure plain js !!!)
progress bar plugin for general use pure javascript base so you can use it with any technology framework like angular,jquery,etc.

#How to use ? 

Include 
```html
<script type="text/javascript" src="http://yourjavascript.com/0061456612/progressbar-v1-0.js"></script>
```
or download file from js folder and put it up in your js folder and include it.(include it before all files where you want to use cool functions of this plugin!!!)

Put in html where you want progress bar to be placed.
```html
<div class="progressbar"></div>
```
in your js file make one object for config and feed it to config to progressbar start working.(prfered when using jquery put it in start of document ready and for angular in init function and so on for other frameworks.)
```javascript
progressBar.config(appConfig);
```
 here appConfig is your custom object !
#Defualt Configuration
```javascript
appConfig : {
            pattern : 1, // 1 for stright line progressbar
            color : "#FFD800", //color of progressbar
            intervalAnmation : 10, // ms interval
            height:  5,// px height
            zIndex: 1000 // z-index if you want to adjust as per requirment  
        }
```
 none of the above fileds are mendetory if you don't update property it will take defult values from defult appConfig.
 
## Pattern:
 options: 1 //for stright line progress bar
 Currently only 1 pattern is avalible more will be added soon

## Color:
You can pass any hex value of clour you want to use for progressbar

## IntervalAnmation:
Changing of width in time interval slow or fast you can configure using this property.

## Height:
height of progress bar depends on you to make it thin of fat...!!!(don't make it to thin that it's hard to be visible..:P)

## Z-Index:
Depends if you need to change it or not.


## How to start progress?
simple use following when you want to start progress:
```javascript
progressBar.progressBarStart(); 
```


## How to stop progress?
simple use following when you want to stop progress:
```javascript
progressBar.progressBarStop(); 
```


# Special for jquery lovers and wants to show ajax progress by this plugin
```javascript
$( document ).ajaxStart(function() {
     progressBar.progressBarStart(); 
});

$( document ).ajaxStop(function() {
     progressBar.progressBarStop(); 
});
		   
$( document ).ajaxError(function() {
     progressBar.progressBarStop(); 
});
```

//-------------------------------------------------------------------------------------------------------------------------------------------
//Cursor Events
function over(obj)
{
    obj.style.cursor = 'Pointer';
}

function out(obj)
{
    obj.style.cursor = 'Default';
}

function mOver(obj)
{
    obj.style.cursor = 'Pointer'

    var index = obj.src.search(/_over/);
    if(index == -1)
    {
        if(obj.src.search(/.jpg/) != -1)
            obj.src = obj.src.replace(".jpg", "_over.jpg")
        else if(obj.src.search(/.gif/) != -1)
            obj.src = obj.src.replace(".gif", "_over.gif")
        else if (obj.src.search(/.png/) != -1)
            obj.src = obj.src.replace(".png", "_over.png")
    }
}
function mOut(obj)
{
    obj.style.cursor = 'Default'

    var index = obj.src.search(/_over/);
    if(index != -1)
    {
        obj.src = obj.src.replace("_over.", ".")
        if(obj.src.search(/.jpg/) != -1)
            obj.src = obj.src.replace("_over.jpg", ".jpg")
        else if(obj.src.search(/.gif/) != -1)
            obj.src = obj.src.replace("_over.gif", ".gif")
        else if (obj.src.search(/.png/) != -1)
            obj.src = obj.src.replace("_over.png", ".png")
    }
}

function mOverPNG(obj)
{
    obj.style.cursor = 'Pointer';
    
    imagePathNew = obj.src.replace(".png", "_over.png");
    DisplayPNG(obj, imagePathNew);
}

function mOutPNG(obj)
{
    obj.style.cursor = 'Default';
    
    imagePathNew = obj.src.replace("_over.png", ".png");
    DisplayPNG(obj, imagePathNew);
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
function getElementsByClassName(oElm, strTagName, strClassName)
{
	var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, "\\-");
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];
		if(oRegExp.test(oElement.className)){
			arrReturnElements.push(oElement);
		}
	}
	return (arrReturnElements)
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
//Query URL
function getURLParam(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        if (pair[0].toLowerCase()== variable.toLowerCase())
        {
            return pair[1];
        }
    }
    return "";
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
//Redirect Page
function RedirectPage(page)
{
    self.location.href = page;
}

function RedirectiFramePage(page)
{
    self.parent.location.href = page;
}

function RedirectPageinNewWindow(id, url, setSize, w, h)
{
    var win = null;
    var settings = "";
    if(setSize == "true")
    {
        LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
        TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
        settings = 'height=' + h + ',width=' + w + ',top=' + TopPosition + ',left=' + LeftPosition + ', location=no,menubar=yes,resizable=yes,scrollbars=yes,titlebar=yes,toolbar=yes';
    }

    win = window.open(url, id, settings);
    win.focus();
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
var isBrowserPNGsupported = null;   //Global Variable

//***************************
// Check Browser Capability
//***************************
function checkIt(string){
	place = detect.indexOf(string) + 1;
	thestring = string;
	return place;
}

var detect = navigator.userAgent.toLowerCase();
var OS,browser,version,total,thestring;
setBrowserPNGCompatibility();

function setBrowserPNGCompatibility()
{
    if (checkIt('konqueror'))
    {
        browser = "Konqueror";
        OS = "Linux";
    }
    else if (checkIt('safari')) browser = "Safari"
    else if (checkIt('omniweb')) browser = "OmniWeb"
    else if (checkIt('opera')) browser = "Opera"
    else if (checkIt('webtv')) browser = "WebTV";
    else if (checkIt('icab')) browser = "iCab"
    else if (checkIt('msie')) browser = "Internet Explorer"
    else if (!checkIt('compatible'))
    {
        browser = "Netscape Navigator"
        version = detect.charAt(8);
    }
    else browser = "An unknown browser";
    
    if (!version) version = detect.charAt(place + thestring.length);
    
    if (!OS)
    {
        if (checkIt('linux')) OS = "Linux";
        else if (checkIt('x11')) OS = "Unix";
        else if (checkIt('mac')) OS = "Mac"
        else if (checkIt('win')) OS = "Windows"
        else OS = "an unknown operating system";
    }
    
    //Set Global Variable
    if(browser == "Internet Explorer")
        isBrowserPNGsupported = false;
    else
        isBrowserPNGsupported = true;
}

//Display PNG -1
function DisplayPNG(element, imagePath)
{
    if(isBrowserPNGsupported == false)
    {
        element.style.filter = "progid:dximagetransform.microsoft.alphaimageloader(enabled=true, src='" + imagePath + "', sizingmethod='scale')"
        element.src = "images/x.gif";
    }
    else
    {
        element.src = imagePath;
    }
}

/*
var arVersion = navigator.appVersion.split("MSIE")
var version = parseFloat(arVersion[1])
function fixPNG(myImage)
{
    if ((version >= 5.5) && (version < 7) && (document.body.filters)) 
    {
       var imgID = (myImage.id) ? "id='" + myImage.id + "' " : ""
       var imgClass = (myImage.className) ? "class='" + myImage.className + "' " : ""
       var imgTitle = (myImage.title) ? 
	                 "title='" + myImage.title  + "' " : "title='" + myImage.alt + "' "
       var imgStyle = "display:inline-block;" + myImage.style.cssText
       var strNewHTML = "<span " + imgID + imgClass + imgTitle
                  + " style=\"" + "width:" + myImage.width 
                  + "px; height:" + myImage.height 
                  + "px;" + imgStyle + ";"
                  + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
                  + "(src=\'" + myImage.src + "\', sizingMethod='scale');\"></span>"
       myImage.outerHTML = strNewHTML	  
    }
}
*/
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
function trim(stringToTrim)
{
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
function disableEnterKey(e)
{
     var key;     
     if(window.event)
          key = window.event.keyCode; //IE
     else
          key = e.which; //firefox     

     return (key != 13);
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
function validateEmail(input)
{
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(input))
        return false;
    else
        return true;
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
function validateNumber(input)
{
    var decimalCount = 0;
    for(z=0; z<input.length; z++)
    {
        var c = input.charAt(z);
        if(c == "0"  || c == "1" || c == "2" || c == "3" || c == "4" || c == "5" || c == "6" || c == "7" || c == "8" || c == "9" || c == ".")
        {
            if(c == ".")
            {
                if(decimalCount == 0)
                    decimalCount = 1;
                 else
                    return false;
            }
        }
        else
            return false;
    }
    return true;
}
function validateisNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
function convertToDollars(_v)
{
    var _dollars=parseInt(_v);
    var _cents=parseInt((_v-_dollars)*100);
    var _negative=_dollars<0;
    if(_negative){_dollars=-_dollars;_cents=-_cents;}
    while(_cents.toString().length<2)_cents="0"+_cents;
    var _dA=_dollars.toString().split("");
    var _d="";
    for(var i=_dA.length-1;i>=0;i--)
    {
        var _comma="";
        if((_dA.length-i)%3==0 && i!=0)_comma=",";
        _d=_comma+_dA[i]+_d;
    }
    var _neg_sign=_negative?"-":"";
    var _result="$"+_neg_sign+_d+"."+_cents;
    return _result;
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
function parseToTwoDecimal(_v)
{
    var _dollars=parseInt(_v);
    var _cents=parseInt((_v-_dollars)*100);
    var _negative=_dollars<0;
    if(_negative){_dollars=-_dollars;_cents=-_cents;}
    while(_cents.toString().length<2)_cents="0"+_cents;
    var _dA=_dollars.toString().split("");
    var _d="";
    for(var i=_dA.length-1;i>=0;i--)
    {
        _d=_dA[i]+_d;
    }
    var _neg_sign=_negative?"-":"";
    var _result=_neg_sign+_d+"."+_cents;
    
    return _result;
}
//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------
//Preload Images
function preloadimages(arr){
    var newimages=[], loadedimages=0
    var postaction=function(){}
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done:function(f){
            postaction=f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------------
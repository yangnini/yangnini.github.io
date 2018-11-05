var myImage=document.querySelector('img');

myImage.onclick=function(){
    var mySrc=myImage.getAttribute('src');
    if (mySrc==='../images/firefox1.jpg'){
        myImage.setAttribute('src','../images/firefox2.jpg');
    }else{
        myImage.setAttribute('src','../images/firefox1.jpg');
    }
}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
    var myName=prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla is cool,'+myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName=localStorage.getItem('name');
    myHeading.textContent=('Mozilla is cool,'+storedName);
}
myButton.onclick=function(){
    setUserName();
}
document.querySelector('#clearButton').onclick=function(){
    // alert('假装我在清除数据');
    console.log('我在偷偷清除数据')
    localStorage.clear();
}
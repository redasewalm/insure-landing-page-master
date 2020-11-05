/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function navshow(){
    
    var close=document.querySelector('.header .nav .close');
    var show=document.querySelector('.header .nav .show');
  var content=document.querySelector('.header .nav-content');
  
  if (content.style.visibility === "hidden") {
    content.style.visibility = "visible";
    close.style.display="block";
    content.style.opacity=1;
  content.style.transition="opacity 2s linear";
  } else {
    content.style.visibility = "hidden";
    close.style.display ="none";
    content.style.opacity=0;
    content.style.transition="visibility 0s 2s, opacity 2s linear";
  }

}
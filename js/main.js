let TopBtn = document.getElementById("topBtn");
 window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        TopBtn.style.display="block";
    }
    else{
        TopBtn.style.display = "none";
    }
 };
TopBtn.onclick = function(){
    window.scroll ({
        top:0,
        behavior:"smooth"
    })
}
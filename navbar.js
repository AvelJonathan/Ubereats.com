var win = window,
    docEl = document.documentElement,
    $logo = document.getElementById('shadow-bottom-s');

win.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
   $logo.style.display =  sTop > 500 ? "block":"none" ;
};


!function(e){e("body").on("click",(function(){e(".article-share-box.on").removeClass("on")})).on("click",".article-share-link",(function(t){t.stopPropagation();var a=e(this),i=a.attr("data-url"),r=a.attr("data-qrcode"),o=encodeURIComponent(i),s="article-share-box-"+a.attr("data-id"),c=document.title,l=a.offset();if(e("#"+s).length){if((h=e("#"+s)).hasClass("on"))return void h.removeClass("on")}else{var n=['<div id="'+s+'" class="article-share-box">','<input class="article-share-input" value="'+i+'">','<div class="article-share-links">','<a href="//twitter.com/intent/tweet?url='+o+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="//www.facebook.com/sharer.php?u='+o+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="//service.weibo.com/share/share.php?title='+c+"&url="+o+'&searchPic=true&style=number" class="article-share-weibo" target="_blank" title="Weibo"></a>','<a href="'+r+'" class="article-share-qrcode" target="_blank" title="QR code"></a>','<div class="qrcode"><img src='+r+"></div>","</div>","</div>"].join(""),h=e(n);e("body").append(h)}e(".article-share-box.on").hide(),h.css({top:l.top+25,left:l.left}).addClass("on")})).on("click",".article-share-box",(function(e){e.stopPropagation()})).on("click",".article-share-box-input",(function(){e(this).select()})).on("click",".article-share-box-link",(function(e){e.preventDefault(),e.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}))}(jQuery);
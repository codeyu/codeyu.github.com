var searchFunc=function(t,e,r){"use strict";$.ajax({url:t,dataType:"xml",success:function(t){var n=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),a=document.getElementById(e),i=document.getElementById(r);a.addEventListener("input",function(){var t='<ul class="search-result-list">',e=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="",this.value.trim().length<=0||(n.forEach(function(r){var n=!0,a=r.title.trim().toLowerCase(),i=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),s=r.url,c=-1,l=-1,u=-1;if(""!=a&&""!=i&&e.forEach(function(t,e){c=a.indexOf(t),l=i.indexOf(t),0>c&&0>l?n=!1:(0>l&&(l=0),0==e&&(u=l))}),n){t+="<li><a href='"+s+"' class='search-result-title'>"+a+"</a>";var o=r.content.trim().replace(/<[^>]+>/g,"");if(u>=0){var h=u-20,f=u+20;0>h&&(h=0),0==h&&(f=40),f>o.length&&(f=o.length);var m=o.substr(h,f);e.forEach(function(t){var e=new RegExp(t,"gi");m=m.replace(e,'<em class="search-keyword">'+t+"</em>")}),t+='<p class="search-result">'+m+"...</p>"}t+="</li>"}}),t+="</ul>",i.innerHTML=t)})}})};
!function(){let e=document.getElementById("recent-comment").getAttribute("serverURL"),t=document.getElementById("recent-comment").getAttribute("count");t||(t=10),$.ajax({url:e+"/comment?type=recent",dataType:"json",data:{count:t},success:function(e){let t="<ul>";e.forEach(((e,n)=>{var o;if(t+="<li>"+(n+1)+"、 "+(o=e.insertedAt,new Date(o).toLocaleString()),e.pid){let{href:n,author:o,str:c}=function(e){let t=/<a[^>]*href=['"]([^\\"]*)['"][^>]*>(.*?)<\/a>/g,n=[];for(;null!=t.exec(e);)n.push(RegExp.$1),n.push(RegExp.$2);return n.length>0?(e=e.replace(/<a[^>](.*?)<\/a>/,n[1]),{href:n[0],author:n[1],str:e}):""}(e.comment);t+='<div class="waline-comment-content"><a style="display: block" href='+window.location.origin+e.url+n+">"+c+"</a></div>"}else t+='<div class="waline-comment-content"><a style="display: block" href='+window.location.origin+e.url+"#"+e.objectId+">"+e.comment+"</a></div>";t+='<div class="waline-comment-content-author">--'+e.nick+"</div></li>"})),t+="</ul>",$("#widget-waline-list").append(t)}})}();
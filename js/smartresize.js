!function(i,t){jQuery.fn[t]=function(i){return i?this.bind("resize",(e=i,function(){var i=this,t=arguments;u?clearTimeout(u):r&&e.apply(i,t),u=setTimeout((function(){r||e.apply(i,t),u=null}),n||100)})):this.trigger(t);var e,n,r,u}}(jQuery,"smartresize");
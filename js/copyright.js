!function(t,s,e){var o,c=document.currentScript||(o=document.getElementsByTagName("script"))[o.length-1],n=$(c).attr("successtext");new ClipboardJS(".fa-clipboard").on("success",(function(){n&&(toastr.options={positionClass:"toast-top-center",timeOut:"1000"},toastr.success(n))}))}(window,document);
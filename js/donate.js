$(document).ready((function(){var t=$("#QRBox"),o=$("#MainBox");$("#donateBox>li").click((function(e){var n,s=$(this).attr("qr");s&&((n=s)&&o.css("background-image","url("+n+")"),$("#DonateText,#donateBox,#github").addClass("blur"),t.fadeIn(300,(function(t){o.addClass("showQR")})))})),o.click((function(e){o.removeClass("showQR").addClass("hideQR"),setTimeout((function(e){t.fadeOut(300,(function(t){o.removeClass("hideQR")})),$("#DonateText,#donateBox,#github").removeClass("blur")}),600)}))})),function(t,o,e){var n,s=document.currentScript||(n=document.getElementsByTagName("script"))[n.length-1],a=$(s).attr("successtext");new ClipboardJS("#BTC").on("success",(function(t){console.log(a),a&&(toastr.options={positionClass:"toast-top-center",timeOut:"1000"},toastr.success(a))}))}(window,document);
!function($){var red="#F86969",green="#5AE9BA",color=green,tlScreen1=new TimelineMax;tlScreen1.add("start").set("#Bubbles",{visibility:"visible"}).from("#bottom-bubbles",4,{opacity:0,y:50,x:40,ease:Elastic.easeOut.config(1,.8)}).from("#top-bubbles",4,{opacity:0,y:50,x:40,ease:Elastic.easeOut.config(1,.8)},"start").to("#btnClick",3.5,{opacity:1,y:-96,ease:Elastic.easeOut.config(1,1)},"-=3.5"),$("#btnClick").mousedown((function(){$(this).css("box-shadow","unset")})),$("#btnClick").mouseup((function(){color==green?$(this).css("box-shadow","0 3px 20px 0 rgba(90,233,186,0.60)"):$(this).css("box-shadow","0 3px 13px 0 rgba(248,105,105,0.60)")})),$("#invert").click((function(){color==green?(tlScreen1.stop(),$(".border-top").css("background-color",red),$("#blue-color").css("fill",red),$("#bluetooth").css("fill","#D74747"),$("#Bubbles ellipse").css("fill",red),$(".screen button").css({"box-shadow":"0 3px 13px 0 rgba(248,105,105,0.60)","background-color":red,"border-color":red}),$(".screen button").html("TRY AGAIN"),$(".screen h3").html("FAILED!"),$(".screen p").html("Your file has not been transferred successfully via bluetooth."),color=red,tlScreen1.restart()):(tlScreen1.stop(),$(".border-top").css("background-color",green),$("#blue-color").css("fill",green),$("#bluetooth").css("fill","#fff"),$("#Bubbles ellipse").css("fill",green),$(".screen button").css({"box-shadow":"0 3px 20px 0 rgba(90,233,186,0.60)","background-color":green,"border-color":green}),$(".screen button").html("CONTINUE"),$(".screen h3").html("SUCCESS!"),$(".screen p").html("You have successfully transferred your file via bluetooth."),color=green,tlScreen1.restart())}))}(jQuery);
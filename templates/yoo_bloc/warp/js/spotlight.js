/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function(d){var c=function(){};d.extend(c.prototype,{name:"warpspotlight",options:{effect:"fade",duration:300,transition:"swing",right:300,left:300,top:300,bottom:300,fade:300},initialize:function(c,e){this.options=d.extend({},this.options,e);var a=this;d(String(c.attr("class")).split(" ")).each(function(b,c){-1!=d.inArray(c,["right","left","top","bottom","fade"])&&(a.options.effect=c,a.options.duration=a.options[a.options.effect]);c.match(/duration\-/gi)&&(a.options.duration=c.split("-")[1])});
this.element=c;this.slides=this.element.children();this.slides.each(function(){d(this).wrap("<div>")});this.slides=this.element.children();this.slides.each(function(a){d(this).css({position:"absolute",width:"100%",visibility:0==a?"visible":"hidden"}).addClass("spotlight"+a)});this.element.css({position:"relative",overflow:"hidden",height:d(a.slides[0]).height()});var b=d(a.slides[1]);this.element.bind({mouseenter:function(){b.stop().css("visibility","visible");switch(a.options.effect){case "right":b.css({right:-1*
b.width()}).animate({right:0},a.options.duration,a.options.transition);break;case "left":b.css({left:-1*b.width()}).animate({left:0},a.options.duration,a.options.transition);break;case "top":b.css({left:0,top:-1*b.height()}).animate({top:0},a.options.duration,a.options.transition);break;case "bottom":b.css({left:0,bottom:-1*b.height()}).animate({bottom:0});break;default:b.show().css({opacity:0}).animate({opacity:1},a.options.duration,a.options.transition,function(){d.support.opacity||(b.get(0).filter=
"",b.attr("style",String(b.attr("style")).replace(/alpha\(opacity=([\d.]+)\)/i,"")))})}},mouseleave:function(){b.stop();switch(a.options.effect){case "right":b.animate({right:-1*b.width()},a.options.duration,a.options.transition);break;case "left":b.animate({left:-1*b.width()},a.options.duration,a.options.transition);break;case "top":b.animate({top:-1*b.height()},a.options.duration,a.options.transition);break;case "bottom":b.animate({bottom:-1*b.height()},a.options.duration,a.options.transition);
break;default:b.animate({opacity:0},a.options.duration,a.options.transition,function(){b.hide()})}}})}});d.fn[c.prototype.name]=function(){var f=arguments,e=f[0]?f[0]:null;return this.each(function(){var a=d(this);if(c.prototype[e]&&a.data(c.prototype.name)&&"initialize"!=e)a.data(c.prototype.name)[e].apply(a.data(c.prototype.name),Array.prototype.slice.call(f,1));else if(!e||d.isPlainObject(e)){var b=new c;c.prototype.initialize&&b.initialize.apply(b,d.merge([a],f));a.data(c.prototype.name,b)}else d.error("Method "+
e+" does not exist on jQuery."+c.name)})}})(jQuery);
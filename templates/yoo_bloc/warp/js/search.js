/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function(d){var e=function(){};d.extend(e.prototype,{name:"search",options:{url:document.location.href,param:"search",method:"post",minLength:3,delay:300,match:":not(li.skip)",skipClass:"skip",loadingClass:"loading",filledClass:"filled",resultClass:"result",resultsHeaderClass:"results-header",moreResultsClass:"more-results",noResultsClass:"no-results",listClass:"results",hoverClass:"selected",msgResultsHeader:"Search Results",msgMoreResults:"More Results",msgNoResults:"No results found"},initialize:function(a,
c){this.options=d.extend({},this.options,c);var b=this;this.value=this.timer=null;this.form=a.parent("form:first");this.input=a;this.input.attr("autocomplete","off");this.input.bind({keydown:function(a){b.form[b.input.val()?"addClass":"removeClass"](b.options.filledClass);if(a&&a.which&&!a.shiftKey)switch(a.which){case 13:b.done(b.selected);a.preventDefault();break;case 38:b.pick("prev");a.preventDefault();break;case 40:b.pick("next");a.preventDefault();break;case 27:case 9:b.hide()}},keyup:function(){b.trigger()},
blur:function(a){b.hide(a)}});this.form.find("button[type=reset]").bind("click",function(){b.form.removeClass(b.options.filledClass);b.value=null;b.input.focus()});this.choices=d("<ul>").addClass(this.options.listClass).hide().insertAfter(this.input)},request:function(a){var c=this;this.form.addClass(this.options.loadingClass);d.ajax(d.extend({url:this.options.url,type:this.options.method,dataType:"json",success:function(a){c.form.removeClass(c.options.loadingClass);c.suggest(a)}},a))},pick:function(a){var c=
null;"string"!==typeof a&&!a.hasClass(this.options.skipClass)&&(c=a);if("next"==a||"prev"==a)c=this.selected?this.selected[a](this.options.match):this.choices.children(this.options.match)["next"==a?"first":"last"]();null!=c&&c.length&&(this.selected=c,this.choices.children().removeClass(this.options.hoverClass),this.selected.addClass(this.options.hoverClass))},done:function(a){a?(a.hasClass(this.options.moreResultsClass)?this.input.parent("form").submit():a.data("choice")&&(window.location=a.data("choice").url),
this.hide()):this.input.parent("form").submit()},trigger:function(){var a=this.value,c=this;this.value=this.input.val();if(this.value.length<this.options.minLength)return this.hide();this.value!=a&&(this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){var a={};a[c.options.param]=c.value;c.request({data:a})},this.options.delay,this))},suggest:function(a){if(a){var c=this,b={mouseover:function(){c.pick(d(this))},click:function(){c.done(d(this))}};!1===a?this.hide():(this.selected=
null,this.choices.empty(),d("<li>").addClass(this.options.resultsHeaderClass+" "+this.options.skipClass).html(this.options.msgResultsHeader).appendTo(this.choices).bind(b),a.results&&0<a.results.length?(d(a.results).each(function(){d("<li>").data("choice",this).addClass(c.options.resultClass).append(d("<h3>").html(this.title)).append(d("<div>").html(this.text)).appendTo(c.choices).bind(b)}),d("<li>").addClass(c.options.moreResultsClass+" "+c.options.skipClass).html(c.options.msgMoreResults).appendTo(c.choices).bind(b)):
d("<li>").addClass(this.options.resultClass+" "+this.options.noResultsClass+" "+this.options.skipClass).html(this.options.msgNoResults).appendTo(this.choices).bind(b),this.show())}},show:function(){this.visible||(this.visible=!0,this.choices.fadeIn(200))},hide:function(){this.visible&&(this.visible=!1,this.choices.removeClass(this.options.hoverClass).fadeOut(200))}});d.fn[e.prototype.name]=function(){var a=arguments,c=a[0]?a[0]:null;return this.each(function(){var b=d(this);if(e.prototype[c]&&b.data(e.prototype.name)&&
"initialize"!=c)b.data(e.prototype.name)[c].apply(b.data(e.prototype.name),Array.prototype.slice.call(a,1));else if(!c||d.isPlainObject(c)){var f=new e;e.prototype.initialize&&f.initialize.apply(f,d.merge([b],a));b.data(e.prototype.name,f)}else d.error("Method "+c+" does not exist on jQuery."+e.name)})}})(jQuery);
(function(d){function e(a){var c={},b=/^jQuery\d+$/;d.each(a.attributes,function(a,d){d.specified&&!b.test(d.name)&&(c[d.name]=d.value)});return c}function a(){var a=d(this);a.val()===a.attr("placeholder")&&a.hasClass("placeholder")&&(a.data("placeholder-password")?a.hide().next().show().focus():a.val("").removeClass("placeholder"))}function c(){var c,b=d(this);if(""===b.val()||b.val()===b.attr("placeholder")){if(b.is(":password")){if(!b.data("placeholder-textinput")){try{c=b.clone().attr({type:"text"})}catch(f){c=
d("<input>").attr(d.extend(e(b[0]),{type:"text"}))}c.removeAttr("name").data("placeholder-password",!0).bind("focus.placeholder",a);b.data("placeholder-textinput",c).before(c)}b=b.hide().prev().show()}b.addClass("placeholder").val(b.attr("placeholder"))}else b.removeClass("placeholder")}var b="placeholder"in document.createElement("input"),f="placeholder"in document.createElement("textarea");d.fn.placeholder=b&&f?function(){return this}:function(){return this.filter((b?"textarea":":input")+"[placeholder]").bind("focus.placeholder",
a).bind("blur.placeholder",c).trigger("blur.placeholder").end()};d(function(){d("form").bind("submit.placeholder",function(){var b=d(".placeholder",this).each(a);setTimeout(function(){b.each(c)},10)})});d(window).bind("unload.placeholder",function(){d(".placeholder").val("")})})(jQuery);

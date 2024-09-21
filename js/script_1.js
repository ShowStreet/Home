
function logEvent(txt) {
//	ga('send', 'event', 'interaction', txt); 
}

function logError(txt) {
//	ga('send', 'event', 'error', txt); 
}


/*! jQuery UI - v1.12.1 - 2017-09-21
* http://jqueryui.com
* Includes: widget.js, data.js, scroll-parent.js, widgets/draggable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var s=!1;t(document).on("mouseup",function(){s=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!s){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),s=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,s=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable});







/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);



$.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
};




function swap(a, b) {
    a = $(a); b = $(b);
    var tmp = $('<span>').hide();
    a.before(tmp);
    b.before(a);
    tmp.replaceWith(b);
};




/*
    jQuery autoComplete v1.0.7
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/jQuery-autoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/

(function($){
    $.fn.autoComplete = function(options){
        var o = $.extend({}, $.fn.autoComplete.defaults, options);

        // public methods
        if (typeof options == 'string') {
            this.each(function(){
                var that = $(this);
                if (options == 'destroy') {
                    $(window).off('resize.autocomplete', that.updateSC);
                    that.off('blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete');
                    if (that.data('autocomplete'))
                        that.attr('autocomplete', that.data('autocomplete'));
                    else
                        that.removeAttr('autocomplete');
                    $(that.data('sc')).remove();
                    that.removeData('sc').removeData('autocomplete');
                }
            });
            return this;
        }

        return this.each(function(){
            var that = $(this);
            // sc = 'suggestions container'
            that.sc = $('<div class="autocomplete-suggestions '+o.menuClass+'"></div>');
            that.data('sc', that.sc).data('autocomplete', that.attr('autocomplete'));
            that.attr('autocomplete', 'off');
            that.cache = {};
            that.last_val = '';

            that.updateSC = function(resize, next){
                that.sc.css({
                    top: that.offset().top + that.outerHeight(),
                    left: that.offset().left,
                    width: that.outerWidth() - 0
                });
                if (!resize) {
                    that.sc.show();
                    if (!that.sc.maxHeight) that.sc.maxHeight = parseInt(that.sc.css('max-height'));
                    if (!that.sc.suggestionHeight) that.sc.suggestionHeight = $('.autocomplete-suggestion', that.sc).first().outerHeight();
                    if (that.sc.suggestionHeight)
                        if (!next) that.sc.scrollTop(0);
                        else {
                            var scrTop = that.sc.scrollTop(), selTop = next.offset().top - that.sc.offset().top;
                            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                that.sc.scrollTop(selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight);
                            else if (selTop < 0)
                                that.sc.scrollTop(selTop + scrTop);
                        }
                }
                $('#overlay_invisible').show();

                $('#countdown-container').height($('.autocomplete-suggestions').height());
                $('#countdown-inner').animate({'margin-top': '0px'}, 1000, 'swing', function() {
                	$('#overlay_invisible').hide();
                });

            }
            $(window).on('resize.autocomplete', that.updateSC);

            that.sc.appendTo('body');

            that.sc.on('mouseleave', '.autocomplete-suggestion', function (){
                $('.autocomplete-suggestion.selected').removeClass('selected');
            });

            that.sc.on('mouseenter', '.autocomplete-suggestion', function (){
                $('.autocomplete-suggestion.selected').removeClass('selected');
                $(this).addClass('selected');
            });

            that.sc.on('mousedown click', '.autocomplete-suggestion', function (e){
                var item = $(this), v = item.data('val');
                if (v || item.hasClass('autocomplete-suggestion')) { // else outside click
                    that.val(v);
                    o.onSelect(e, v, item);
                    that.sc.hide();
                    $('#searchinput').blur();
                }
                return false;
            });
// HIER ZIT HEM DE CRUX!
            that.on('blur.autocomplete', function(){
                try { over_sb = $('.autocomplete-suggestions:hover').length; } catch(e){ over_sb = 0; } // IE7 fix :hover
                if (!over_sb) {
                    that.last_val = that.val();
                    that.sc.hide();
                    setTimeout(function(){ that.sc.hide(); }, 350); // hide suggestions on fast input
                } else if (!that.is(':focus')) setTimeout(function(){ that.focus(); }, 20);
            });

            if (!o.minChars) that.on('focus.autocomplete', function(){ that.last_val = '\n'; that.trigger('keyup.autocomplete'); });

            function suggest(data){



            	clearTimeout($('#countdown-inner').data('timer'));
					var searchRollupTimer = setTimeout(function() {
						//var heightC = $('.autocomplete-suggestions').height();
		 				$('#countdown-inner').stop().css({'margin-top': '-0px'}).delay(3000).animate({'margin-top': '-150px'},5000,'swing', function() {
		 					$('#searchinput').blur();
  							$('#overlay_invisible').hide();
		 				});
			 		});
					$('#countdown-inner').data('timer', searchRollupTimer);



                var val = that.val();
                that.cache[val] = data;
                if (data.length && val.length >= o.minChars) {
                    var s = '';
                    for (var i=0;i<data.length;i++) s += o.renderItem(data[i], val, i);
                    that.sc.html(s);
                    that.updateSC(0);
                   // setTimeout(function() {
                 		//	var curLen = $('#searchinput').val().length;
                    	//	$('#searchinput').val($('.autocomplete-suggestion.first').data('val'));
                    //		$('#searchinput').focus().setCursorPosition(curLen);
	                 //   that.sc.hide();
                    //},5000);
                }
                else
                    that.sc.hide();
            }

            that.on('keydown.autocomplete', function(e){
                // down (40), up (38)
                if ((e.which == 40 || e.which == 38) && that.sc.html()) {
                    var next, sel = $('.autocomplete-suggestion.selected', that.sc);
                    if (!sel.length) {
                        next = (e.which == 40) ? $('.autocomplete-suggestion', that.sc).first() : $('.autocomplete-suggestion', that.sc).last();
                        that.val(next.addClass('selected').data('val'));
                    } else {
                        next = (e.which == 40) ? sel.next('.autocomplete-suggestion') : sel.prev('.autocomplete-suggestion');
                        if (next.length) { sel.removeClass('selected'); that.val(next.addClass('selected').data('val')); }
                        else { sel.removeClass('selected'); that.val(that.last_val); next = 0; }
                    }
                    that.updateSC(0, next);
                    return false;
                }
                // esc
                else if (e.which == 27) that.val(that.last_val).sc.hide();
                // enter or tab
                else if (e.which == 13 || e.which == 9) {
                    var sel = $('.autocomplete-suggestion.selected', that.sc);
                    if (sel.length && that.sc.is(':visible')) { o.onSelect(e, sel.data('val'), sel); setTimeout(function(){ that.sc.hide(); }, 20); }
                }
            });

that.on('focus', function() {
$(".autocomplete-suggestions").show(); 
});
            that.on('keyup.autocomplete', function(e){
                if (!~$.inArray(e.which, [13, 27, 35, 36, 37, 38, 39, 40])) {
                    var val = that.val();
                    if (val.length >= o.minChars) {
                        if (val != that.last_val) {
                            that.last_val = val;
                            clearTimeout(that.timer);
                            if (o.cache) {
                                if (val in that.cache) { suggest(that.cache[val]); return; }
                                // no requests if previous suggestions were empty
                                for (var i=1; i<val.length-o.minChars; i++) {
                                    var part = val.slice(0, val.length-i);
                                    if (part in that.cache && !that.cache[part].length) { suggest([]); return; }
                                }
                            }
                            that.timer = setTimeout(function(){ o.source(val, suggest) }, o.delay);
                        }
                    } else {
                        that.last_val = val;
                        that.sc.hide();
                    }
                }
            });
        });
    }

    $.fn.autoComplete.defaults = {
        source: 0,
        minChars: 4,
        delay: 250,
        cache: 1,
        menuClass: '',
        renderItem: function (item, search, i){
            // escape special characters
            search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
            return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
        },
        onSelect: function(e, term, item){}
    };
}(jQuery));







/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					var result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = converter.write ?
					converter.write(value, key) :
					encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key))
					.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
					.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';
				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}

					// Considers RFC 6265 section 5.2:
					// ...
					// 3.  If the remaining unparsed-attributes contains a %x3B (";")
					//     character:
					// Consume the characters of the unparsed-attributes up to,
					// not including, the first %x3B (";") character.
					// ...
					stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
				}

				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			var jar = {};
			var decode = function (s) {
				return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
			};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, arguments);
		};
		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));




/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-geolocation-history-mediaqueries-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,a,s,r;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],n=f[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],r=s.split("."),1===r.length?Modernizr[r[0]]=i:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=i),d.push((i?"":"no-")+r.join("-"))}}function a(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=s(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,i){var a,l,d,f,u="modernizr",p=s("div"),h=r();if(parseInt(o,10))for(;o--;)d=s("div"),d.id=i?i[o]:u+(o+1),p.appendChild(d);return a=s("style"),a.type="text/css",a.id="s"+u,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=u,h.fake&&(h.style.background="",h.style.overflow="hidden",f=c.style.overflow,c.style.overflow="hidden",c.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),c.style.overflow=f,c.offsetHeight):p.parentNode.removeChild(p),!!l}var d=[],f=[],u={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){f.push({name:e,fn:n,options:t})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var n=navigator.userAgent;return-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1});var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),h=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=h;var m=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();u.mq=m,Modernizr.addTest("mediaqueries",m("only all"));var v=u.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");v(o,function(e){t=9===e.offsetTop})}return t}),i(),a(d),delete u.addTest,delete u.addAsyncTest;for(var g=0;g<Modernizr._q.length;g++)Modernizr._q[g]();e.Modernizr=Modernizr}(window,document);



 
// http://www.paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};


// http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
Function.prototype.debounce = function (threshold, execAsap) {
 
    var func = this, timeout;
 
    return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
            if (!execAsap)
                func.apply(obj, args);
            timeout = null; 
        }
 
        if (timeout)
            clearTimeout(timeout);
        else if (execAsap)
            func.apply(obj, args);
 
        timeout = setTimeout(delayed, threshold || 100); 
    };
 
}


// adapted from http://stackoverflow.com/questions/1199352/smart-way-to-shorten-long-strings-with-javascript
String.prototype.truncleft = function(n){
    var toLong = this.length>n,
    s_ = toLong ? this.substr(this.length-n) : this;
    s_ = toLong ? s_.substr(s_.indexOf(',')+2) : s_;
    return  s_;
};

var countTime_start = new Date().getTime();
function logTime(string) {
    var countTime_end = new Date().getTime();
    var countTime_total = countTime_end - countTime_start;
}



// http://www.ajaxload.info/
// http://stackoverflow.com/questions/26561854/dragging-pegman-in-maps-v3-triggers-unwanted-click-event

// constants


var defaultModus = 'full';
var splitPane, panorama, map, centerBeforeMove;
var resize = false;
var splitter = null;
var queueHistory = [];
var lastHistorySelect = {};
var randomLocations = {};
var randomCountry = 'all';
var qPos = {};
var geocoder;
var defaultZoom = 2;
var ipLocator = true;
var instantsearch = false;
var homeScreen = true;
var countryCode = (localStorage.getItem('country_code') === null) ? "" : localStorage.getItem('country_code');

var modus; // full,split,mobile
if (window.matchMedia('(max-width: 849px)').matches) {
	modus = 'mobile';
} else {
	if (localStorage.getItem('modus') === null) {
		modus = defaultModus; //default
	} else {
		modus = localStorage.getItem('modus');
	}
}
localStorage.setItem('modus', modus);

// Ajax setup
$.ajaxSetup({
    type: 'POST',
    dataType: 'json',
    cache: true,
    error: function(jqXHR, exception) {
        if (jqXHR.status === 0) {
        } else if (jqXHR.status == 404) {
            log('404');
        } else if (jqXHR.status == 500) {
            log('500');
        } else if (exception === 'parsererror') {
            log('parsererror');
        } else if (exception === 'timeout') {
            log('timeout');
        } else if (exception === 'abort') {
            log('abort');
        } else {
            log('error: ' + jqXHR + ' ' + exception);
        }
    }
});

var isTouchDevice = 'ontouchstart' in document.documentElement;
if (isTouchDevice) {
    $('#initscreen .click').text('tap');
}



var countryDb = {
    'all': {'lat':42.121111,'lng':12.231944,'zoom': 3},
    'ad': {'lat':42.546245,'lng':1.601554,'zoom':10},
    'ae': {'lat':24.458289,'lng':54.693765,'zoom':7},
    'af': {'lat':33.93911,'lng':67.709953,'zoom':6},
    'ag': {'lat':17.060816,'lng':-61.796428,'zoom':6},
    'ai': {'lat':18.220554,'lng':-63.068615,'zoom':6},
    'al': {'lat':41.153332,'lng':20.168331,'zoom':7},
    'am': {'lat':40.069099,'lng':45.038189,'zoom':7},
    'an': {'lat':12.226079,'lng':-69.060087,'zoom':6},
    'ao': {'lat':-11.202692,'lng':17.873887,'zoom':5},
    'aq': {'lat':-75.250973,'lng':-0.071389,'zoom':6},
    'ar': {'lat':-38.416097,'lng':-63.616672,'zoom':4},
    'as': {'lat':-14.270972,'lng':-170.132217,'zoom':6},
    'at': {'lat':47.516231,'lng':14.550072,'zoom':6},
    'au': {'lat':-25.274398,'lng':133.775136,'zoom':4},
    'aw': {'lat':12.52111,'lng':-69.968338,'zoom':10},
    'az': {'lat':40.143105,'lng':47.576927,'zoom':6},
    'ba': {'lat':43.915886,'lng':17.679076,'zoom':6},
    'bb': {'lat':13.193887,'lng':-59.543198,'zoom':10},
    'bd': {'lat':23.684994,'lng':90.356331,'zoom':6},
    'be': {'lat':50.503887,'lng':4.469936,'zoom':7},
    'bf': {'lat':12.238333,'lng':-1.561593,'zoom':6},
    'bg': {'lat':42.733883,'lng':25.48583,'zoom':7},
    'bh': {'lat':25.930414,'lng':50.637772,'zoom':9},
    'bi': {'lat':-3.373056,'lng':29.918886,'zoom':7},
    'bj': {'lat':9.30769,'lng':2.315834,'zoom':6},
    'bm': {'lat':32.321384,'lng':-64.75737,'zoom':10},
    'bn': {'lat':4.535277,'lng':114.727669,'zoom':8},
    'bo': {'lat':-16.290154,'lng':-63.588653,'zoom':5},
    'br': {'lat':-14.235004,'lng':-51.92528,'zoom':4},
    'bs': {'lat':25.03428,'lng':-77.39628,'zoom':7},
    'bt': {'lat':27.514162,'lng':90.433601,'zoom':7},
    'bv': {'lat':-54.423199,'lng':3.413194,'zoom':6},
    'bw': {'lat':-22.328474,'lng':24.684866,'zoom':5},
    'by': {'lat':53.709807,'lng':27.953389,'zoom':5},
    'bz': {'lat':17.189877,'lng':-88.49765,'zoom':7},
    'ca': {'lat':56.130366,'lng':-106.346771,'zoom':4},
    'cc': {'lat':-12.164165,'lng':96.870956,'zoom':6},
    'cd': {'lat':-4.038333,'lng':21.758664,'zoom':6},
    'cf': {'lat':6.611111,'lng':20.939444,'zoom':6},
    'cg': {'lat':-0.228021,'lng':15.827659,'zoom':6},
    'ch': {'lat':46.818188,'lng':8.227512,'zoom':7},
    'ci': {'lat':7.539989,'lng':-5.54708,'zoom':6},
    'ck': {'lat':-21.236736,'lng':-159.777671,'zoom':11},
    'cl': {'lat':-35.675147,'lng':-71.542969,'zoom':4},
    'cm': {'lat':7.369722,'lng':12.354722,'zoom':5},
    'cn': {'lat':35.86166,'lng':104.195397,'zoom':4},
    'co': {'lat':4.570868,'lng':-74.297333,'zoom':5},
    'cr': {'lat':9.748917,'lng':-83.753428,'zoom':7},
    'cu': {'lat':21.521757,'lng':-77.781167,'zoom':6},
    'cv': {'lat':16.002082,'lng':-24.013197,'zoom':7},
    'cx': {'lat':-10.447525,'lng':105.690449,'zoom':6},
    'cy': {'lat':35.126413,'lng':33.429859,'zoom':8},
    'cz': {'lat':49.817492,'lng':15.472962,'zoom':7},
    'de': {'lat':51.165691,'lng':10.451526,'zoom':6},
    'dj': {'lat':11.825138,'lng':42.590275,'zoom':6},
    'dk': {'lat':56.26392,'lng':9.501785,'zoom':7},
    'dm': {'lat':15.414999,'lng':-61.370976,'zoom':6},
    'do': {'lat':18.735693,'lng':-70.162651,'zoom':7},
    'dz': {'lat':28.033886,'lng':1.659626,'zoom':5},
    'ec': {'lat':-1.831239,'lng':-78.183406,'zoom':6},
    'ee': {'lat':58.595272,'lng':25.013607,'zoom':7},
    'eg': {'lat':26.820553,'lng':30.802498,'zoom':5},
    'eh': {'lat':24.215527,'lng':-12.885834,'zoom':6},
    'er': {'lat':15.179384,'lng':39.782334,'zoom':6},
    'es': {'lat':40.463667,'lng':-3.74922,'zoom':6},
    'et': {'lat':9.145,'lng':40.489673,'zoom':5},
    'fi': {'lat':64.92411,'lng':25.748151,'zoom':4},
    'fj': {'lat':-16.578193,'lng':179.414413,'zoom':7},
    'fk': {'lat':-51.796253,'lng':-59.523613,'zoom':6},
    'fm': {'lat':7.425554,'lng':150.550812,'zoom':5},
    'fo': {'lat':61.892635,'lng':-6.911806,'zoom':8},
    'fr': {'lat':46.227638,'lng':2.213749,'zoom':6},
    'ga': {'lat':-0.803689,'lng':11.609444,'zoom':5},
    'gb': {'lat':54.875534,'lng':-1.67816,'zoom':5},
    'gd': {'lat':12.262776,'lng':-61.604171,'zoom':6},
    'ge': {'lat':42.315407,'lng':43.356892,'zoom':7},
    'gf': {'lat':3.933889,'lng':-53.125782,'zoom':7},
    'gg': {'lat':49.465691,'lng':-2.585278,'zoom':6},
    'gh': {'lat':7.946527,'lng':-1.023194,'zoom':6},
    'gi': {'lat':36.137741,'lng':-5.345374,'zoom':10},
    'gl': {'lat':66.706936,'lng':-42.604303,'zoom':4},
    'gm': {'lat':13.443182,'lng':-15.310139,'zoom':8},
    'gn': {'lat':9.945587,'lng':-9.696645,'zoom':6},
    'gp': {'lat':16.195971,'lng':-61.567641,'zoom':9},
    'gq': {'lat':1.650801,'lng':10.267895,'zoom':8},
    'gr': {'lat':39.074208,'lng':21.824312,'zoom':6},
    'gs': {'lat':-54.429579,'lng':-36.587909,'zoom':6},
    'gt': {'lat':15.783471,'lng':-90.230759,'zoom':7},
    'gu': {'lat':13.444304,'lng':144.793731,'zoom':9},
    'gw': {'lat':11.803749,'lng':-15.180413,'zoom':6},
    'gy': {'lat':4.860416,'lng':-58.93018,'zoom':6},
    'gz': {'lat':31.354676,'lng':34.308825,'zoom':6},
    'hk': {'lat':22.396428,'lng':114.109497,'zoom':10},
    'hm': {'lat':-53.08181,'lng':73.504158,'zoom':6},
    'hn': {'lat':14.7999,'lng':-86.241905,'zoom':7},
    'hr': {'lat':45.1,'lng':15.2,'zoom':6},
    'ht': {'lat':18.971187,'lng':-72.285215,'zoom':7},
    'hu': {'lat':47.162494,'lng':19.503304,'zoom':7},
    'id': {'lat':-2.732843,'lng':117.810487,'zoom':5},
    'ie': {'lat':53.41291,'lng':-8.24389,'zoom':6},
    'il': {'lat':31.546051,'lng':34.851612,'zoom':7},
    'im': {'lat':54.236107,'lng':-4.548056,'zoom':9},
    'in': {'lat':20.593684,'lng':78.96288,'zoom':5},
    'io': {'lat':-6.343194,'lng':71.876519,'zoom':6},
    'iq': {'lat':33.223191,'lng':43.679291,'zoom':6},
    'ir': {'lat':32.427908,'lng':53.688046,'zoom':5},
    'is': {'lat':64.963051,'lng':-19.020835,'zoom':6},
    'it': {'lat':41.87194,'lng':12.56738,'zoom':5},
    'je': {'lat':49.214439,'lng':-2.13125,'zoom':11},
    'jm': {'lat':18.109581,'lng':-77.297508,'zoom':9},
    'jo': {'lat':31.185164,'lng':37.238414,'zoom':7},
    'jp': {'lat':36.204824,'lng':138.252924,'zoom':5},
    'ke': {'lat':-0.023559,'lng':37.906193,'zoom':6},
    'kg': {'lat':41.20438,'lng':74.766098,'zoom':6},
    'kh': {'lat':12.565679,'lng':104.990963,'zoom':6},
    'ki': {'lat':-3.370417,'lng':-168.734039,'zoom':6},
    'km': {'lat':-11.875001,'lng':43.872219,'zoom':8},
    'kn': {'lat':17.288045,'lng':-62.674713,'zoom':9},
    'kp': {'lat':40.339852,'lng':127.510093,'zoom':6},
    'kr': {'lat':36.907757,'lng':127.766922,'zoom':7},
    'kw': {'lat':29.31166,'lng':47.481766,'zoom':8},
    'ky': {'lat':19.513469,'lng':-80.566956,'zoom':8},
    'kz': {'lat':48.019573,'lng':66.923684,'zoom':5},
    'la': {'lat':17.85627,'lng':104.795496,'zoom':6},
    'lb': {'lat':33.854721,'lng':35.862285,'zoom':8},
    'lc': {'lat':13.208679,'lng':-61.137814,'zoom':9},
    'li': {'lat':47.166,'lng':9.555373,'zoom':10},
    'lk': {'lat':7.873054,'lng':80.771797,'zoom':7},
    'lr': {'lat':6.428055,'lng':-9.429499,'zoom':6},
    'ls': {'lat':-29.609988,'lng':28.233608,'zoom':7},
    'lt': {'lat':55.169438,'lng':23.881275,'zoom':7},
    'lu': {'lat':49.815273,'lng':6.129583,'zoom':9},
    'lv': {'lat':56.879635,'lng':24.603189,'zoom':7},
    'ly': {'lat':26.3351,'lng':17.228331,'zoom':5},
    'ma': {'lat':31.791702,'lng':-7.09262,'zoom':6},
    'mc': {'lat':43.740298,'lng':7.432841,'zoom':13},
    'md': {'lat':47.111631,'lng':28.369885,'zoom':7},
    'me': {'lat':42.708678,'lng':19.37439,'zoom':8},
    'mg': {'lat':-18.766947,'lng':46.869107,'zoom':5},
    'mh': {'lat':7.131474,'lng':171.184478,'zoom':6},
    'mk': {'lat':41.608635,'lng':21.745275,'zoom':8},
    'ml': {'lat':17.570692,'lng':-3.996166 ,'zoom':5},
    'mm': {'lat':21.913965,'lng':95.956223,'zoom':5},
    'mn': {'lat':46.862496,'lng':103.846656,'zoom':5},
    'mo': {'lat':22.198745,'lng':113.543873,'zoom':10},
    'mp': {'lat':15.105245,'lng':145.681947,'zoom':9},
    'mq': {'lat':14.641528,'lng':-61.024174,'zoom':9},
    'mr': {'lat':21.00789,'lng':-10.940835,'zoom':5},
    'ms': {'lat':16.742498,'lng':-62.187366,'zoom':6},
    'mt': {'lat':35.937496,'lng':14.375416,'zoom':10},
    'mu': {'lat':-20.348404,'lng':57.552152,'zoom':9},
    'mv': {'lat':1.005427,'lng':73.70068,'zoom':7},
    'mw': {'lat':-13.254308,'lng':34.301525,'zoom':6},
    'mx': {'lat':23.634501,'lng':-102.552784,'zoom':5},
    'my': {'lat':4.210484,'lng':107.975766,'zoom':6},
    'mz': {'lat':-18.665695,'lng':35.529562,'zoom':5},
    'na': {'lat':-22.95764,'lng':18.49041,'zoom':5},
    'nc': {'lat':-20.904305,'lng':165.618042,'zoom':7},
    'ne': {'lat':17.607789,'lng':8.081666,'zoom':5},
    'nf': {'lat':-29.040835,'lng':167.954712,'zoom':6},
    'ng': {'lat':9.081999,'lng':8.675277,'zoom':5},
    'ni': {'lat':12.865416,'lng':-85.207229,'zoom':7},
    'nl': {'lat':52.132633,'lng':5.291266,'zoom':7},
    'no': {'lat':65.379353,'lng':11.984571,'zoom':4},
    'np': {'lat':28.394857,'lng':84.124008,'zoom':6},
    'nr': {'lat':-0.522778,'lng':166.931503,'zoom':12},
    'nu': {'lat':-19.054445,'lng':-169.867233,'zoom':6},
    'nz': {'lat':-40.900557,'lng':174.885971,'zoom':5},
    'om': {'lat':21.512583,'lng':55.923255,'zoom':6},
    'pa': {'lat':8.537981,'lng':-80.782127,'zoom':7},
    'pe': {'lat':-9.189967,'lng':-75.015152,'zoom':5},
    'pf': {'lat':-17.679742,'lng':-149.406843,'zoom':9},
    'pg': {'lat':-6.53639,'lng':145.598427,'zoom':6},
    'ph': {'lat':12.879721,'lng':121.774017,'zoom':6},
    'pk': {'lat':30.375321,'lng':69.345116,'zoom':5},
    'pl': {'lat':51.919438,'lng':19.145136,'zoom':6},
    'pm': {'lat':46.941936,'lng':-56.27111,'zoom':7},
    'pn': {'lat':-24.703615,'lng':-127.439308,'zoom':6},
    'pr': {'lat':18.220833,'lng':-66.590149,'zoom':9},
    'ps': {'lat':31.952162,'lng':35.233154,'zoom':7},
    'pt': {'lat':39.399872,'lng':-8.224454,'zoom':6},
    'pw': {'lat':7.29998,'lng':134.58252,'zoom':9},
    'py': {'lat':-23.442503,'lng':-58.443832,'zoom':6},
    'qa': {'lat':25.354826,'lng':51.183884,'zoom':8},
    're': {'lat':-21.115141,'lng':55.536384,'zoom':9},
    'ro': {'lat':45.943161,'lng':24.96676,'zoom':6},
    'rs': {'lat':44.016521,'lng':21.005859,'zoom':7},
    'ru': {'lat':61.52401,'lng':105.318756,'zoom':3},
    'rw': {'lat':-1.940278,'lng':29.873888,'zoom':8},
    'sa': {'lat':23.885942,'lng':45.079162,'zoom':5},
    'sb': {'lat':-9.64571,'lng':160.156194,'zoom':8},
    'sc': {'lat':-4.679574,'lng':55.491977,'zoom':9},
    'sd': {'lat':16.011619,'lng':33.469589,'zoom':5},
    'se': {'lat':63.25124,'lng':15.039985,'zoom':4},
    'sg': {'lat':1.352083,'lng':103.819836,'zoom':11},
    'sh': {'lat':-24.143474,'lng':-10.030696,'zoom':6},
    'si': {'lat':46.151241,'lng':14.995463,'zoom':8},
    'sj': {'lat':77.553604,'lng':23.670272,'zoom':6},
    'sk': {'lat':48.669026,'lng':19.699024,'zoom':7},
    'sl': {'lat':8.460555,'lng':-11.779889,'zoom':6},
    'sm': {'lat':43.94236,'lng':12.457777,'zoom':11},
    'sn': {'lat':14.497401,'lng':-14.452362,'zoom':6},
    'so': {'lat':5.152149,'lng':46.199616,'zoom':5},
    'sr': {'lat':3.919305,'lng':-56.027783,'zoom':6},
    'st': {'lat':0.18636,'lng':6.613081,'zoom':9},
    'sv': {'lat':13.794185,'lng':-88.89653,'zoom':8},
    'sy': {'lat':34.802075,'lng':38.996815,'zoom':6},
    'sz': {'lat':-26.522503,'lng':31.465866,'zoom':8},
    'tc': {'lat':21.694025,'lng':-71.797928,'zoom':8},
    'td': {'lat':15.454166,'lng':18.732207,'zoom':5},
    'tf': {'lat':-49.280366,'lng':69.348557,'zoom':6},
    'tg': {'lat':8.619543,'lng':0.824782,'zoom':6},
    'th': {'lat':15.870032,'lng':100.992541,'zoom':6},
    'tj': {'lat':38.861034,'lng':71.276093,'zoom':6},
    'tk': {'lat':-8.967363,'lng':-171.855881,'zoom':6},
    'tl': {'lat':-8.874217,'lng':125.727539,'zoom':8},
    'tm': {'lat':38.969719,'lng':59.556278,'zoom':6},
    'tn': {'lat':33.886917,'lng':9.537499,'zoom':6},
    'to': {'lat':-21.178986,'lng':-175.198242,'zoom':6},
    'tr': {'lat':38.963745,'lng':35.243322,'zoom':6},
    'tt': {'lat':10.691803,'lng':-61.222503,'zoom':8},
    'tv': {'lat':-8.516655,'lng':179.198379,'zoom':9},
    'tw': {'lat':23.69781,'lng':120.960515,'zoom':7},
    'tz': {'lat':-6.369028,'lng':34.888822,'zoom':5},
    'ua': {'lat':49.2619,'lng':31.627006,'zoom':6},
    'ug': {'lat':1.373333,'lng':32.290275,'zoom':6},
    'us': {'lat':37.09024,'lng':-95.712891,'zoom':4},
    'uy': {'lat':-32.522779,'lng':-55.765835,'zoom':6},
    'uz': {'lat':41.377491,'lng':64.585262,'zoom':6},
    'va': {'lat':41.902916,'lng':12.453389,'zoom':15},
    'vc': {'lat':12.984305,'lng':-61.287228,'zoom':6},
    've': {'lat':6.42375,'lng':-66.58973,'zoom':5},
    'vg': {'lat':18.420695,'lng':-64.639968,'zoom':10},
    'vi': {'lat':17.76068,'lng':-64.721546,'zoom':10},
    'vn': {'lat':16.221597,'lng':108.145363,'zoom':5},
    'vu': {'lat':-15.376706,'lng':166.959158,'zoom':7},
    'wf': {'lat':-13.768752,'lng':-177.156097,'zoom':6},
    'ws': {'lat':-13.759029,'lng':-172.104629,'zoom':8},
    'xk': {'lat':42.602636,'lng':20.902977,'zoom':6},
    'ye': {'lat':15.552727,'lng':48.516388,'zoom':6},
    'yt': {'lat':-12.8275,'lng':45.166244,'zoom':6},
    'za': {'lat':-28.26284,'lng':24.431647,'zoom':5},
    'zm': {'lat':-13.133897,'lng':27.849332,'zoom':5},
    'zw': {'lat':-19.015438,'lng':30.736888,'zoom':6}

};

var startLocation;
var userCountry = countryDb['all'];


//////////////////////////////////////////////////////
// Load location info from telize.com 
//////////////////////////////////////////////////////


var googleLoaded = false;


function initApp() {
    googleLoaded = true;
    if (!(ipLocator)) {
        initApp2(); 
    }
}

var directLink = false;
var url = window.location.hash.substr(1);

var hashpattern = /^[-a-z0-9|._]+$/;


// var url = 'ryjn7_55eyw_7d_a_0' //swiss
if (url.length >=15 && url.match(hashpattern)) {
    directLink = true;
    $(document).ready(function() {
       // $('#initscreen,#searchcontainer2, #overlay_lower2').hide();
    });
    

   // $('#next').one('click', function(e) {
//      if (History.enabled) {
//          var pushcountry = (country == 'all') ? '' : country;
//          History.pushState('ajax','Random Street View images from ' + $("#countries option[value='"+country+"']"),'/' + pushcountry);
//      }       
//
//  });


} else {
    startLocation = countryDb['all'];
    $(document).ready(function() {
        $('#initscreen,#searchcontainer2, #overlay_lower2').show();
    });
   /* var startheading = randomheading;
    var startpitch = 5;
    var startzoom = 1;
    if (jQuery.isEmptyObject(randomLocations[country])) {
        startposition = new google.maps.LatLng(51.730738,4.932795);
    } else {
        var startposition = new google.maps.LatLng(randomLocations[country][0].lat,randomLocations[country][0].lng);
        $('#address').html(randomLocations[country][0].formatted_address);
    }
    queueHistory.push(randomLocations[country][0]);
    */
}





if (ipLocator) {

    $.ajax({
            url: 'https://randomstreetview.com/data',
            data: { 
                geoip: true
            },
            timeout: 500,
            success: function(msg) {
                if(msg.success && countryDb[msg.isoCode.toLowerCase()] !== undefined) {
                    startLocation = userCountry = countryDb[msg.isoCode.toLowerCase()];
                    if (Modernizr.mq('only all and (max-width: 480px)')) {
                    


                        startLocation['zoom'] = userCountry['zoom'] - 1;

                    }

                } 


                if (googleLoaded) {
                        initApp2();
                } else {
                    setTimeout(function() {
                        initApp2();
                    }, 1000);
                }            
            },
            error: function(x, t, m) {
                if(t==="timeout") {
                    logTime('GeoIP timeout');

                    //fillHistory({'lat': panorama.getPosition().lat(), 'lng':  panorama.getPosition().lng(), 'formatted_address':'', 'copyright':'Google'});

                    //http://bugs.jquery.com/ticket/8744#comment:35
                    var i;
                    for (i in this) {
                        if (i.indexOf('jQuery') === 0) { //Find AJAX callback.
                            window[i] = $.noop; //Set it to a null function via jQuery.
                        }
                    }


                } else {

                }
                startLocation = countryDb['all'];
                initApp2();              
           
            }
    });

}







//////////////////////////////////////////////////////
// MAIN APP call back initiated after google maps load 
//////////////////////////////////////////////////////
function initApp2() {

if (googleLoaded == false) {
	logEvent('ip lookup faster than google maps lib loaded');
	setTimeout(function() {
		if (googleLoaded) {
			initApp2();
		} else {
		   logError('could not load google maps lib');
		   window.location.reload();
		}
 	}, 4000);
	return;
}

var mapType = google.maps.MapTypeId.ROADMAP;
var initPan = true;
var lastsvchg = 0; // at the top
var lastclick = 0; // at the top
var clickSwtch = false;
var searchRadius = 0;
var distArray = [50, 100, 200, 1000, 4000, 10000, 100000, 400000];
var singleClick = false;
var streetViewService = new google.maps.StreetViewService();  
var startLatLng = new google.maps.LatLng(startLocation.lat,startLocation.lng);
centerBeforeMove = new google.maps.LatLng(startLocation.lat,startLocation.lng);
var marker;
var markerImage = '/img/pindrop.png';
var curPos = -1;
var landing = false;

var instantdelay = 2500;


geocoder = new google.maps.Geocoder();


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}



if (directLink) landing = deurlize(url);

if (directLink && ($.isArray(landing))) {
            //window.location.href.substr(0, window.location.href.indexOf('#'));

 //setPanePerc(startLocation['splitpos']);


    //landing = deurlize(url);
    startLocation = {'lat':landing.lat,'lng':landing.lng,'zoom': landing.mapzoom,'heading': landing.heading,'pitch':landing.pitch,'panzoom':landing.panzoom};
    startLocation['splitpos'] = landing.splitpos;
    if (landing.maptype == 'hybrid') {
        mapType = google.maps.MapTypeId.HYBRID;
        $('#menulist_satellite input').prop('checked', true);
    }
        //$('#initscreen,#searchcontainer2, #overlay_lower2').remove();
 startLatLng = new google.maps.LatLng(startLocation.lat,startLocation.lng);


} else if (directLink) {
    directLink = false;
    $('#initscreen,#searchcontainer2, #overlay_lower2').show();
    //if (!(isNumeric(startLocation[0]['lat']))) {
        //startLocation = countryDb['all'];
    //}
    startLocation['heading'] = 270;
    startLocation['pitch'] = 5;
    startLocation['panzoom']  = 1;
 startLatLng = new google.maps.LatLng(startLocation.lat,startLocation.lng);


} else {

    startLocation['heading'] = 270;
    startLocation['pitch'] = 5;
    startLocation['panzoom']  = 1;

}





setTimeout(function(){
    window.scrollTo(0, 1);
}, 5);


var mapOptions = {
    draggableCursor:'crosshair',
    center: startLatLng,
    minZoom: 2,
    zoom: startLocation.zoom,
    zoomControl: false,
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
    },
    mapTypeId: mapType,
    mapTypeControl: false,
    clickableIcons: false,
    fullscreenControl: false

    //,
    //styles: [{ featureType: "poi", stylers: [{ visibility: "off" }]}]
};



map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
   
var streetViewLayer = new google.maps.StreetViewCoverageLayer();




if (!($('#menulist_satellite input').is(':checked')))  {       
    streetViewLayer.setMap(map);
}



/*
 if (jQuery.isEmptyObject(startLocation)) {
  //  var startLatLng = new google.maps.LatLng(-63.4285988,-56.6503821);
    initPanorama(null);
} else {
//    var startLatLng = new google.maps.LatLng(startLocation.lat,startLocation.lng);
    placeMarker(new google.maps.LatLng(startLocation.lat,startLocation.lng), 4, true);
 //   placeMarker(startLatLng, 4, true);
}*/


 setTimeout(function() {
        $('#overlay_upper').hide().removeClass('init');
        //});
    }, 2000);


//    var startLatLng = new google.maps.LatLng(-63.4285988,-56.6503821);



function initPanorama(location) {

    var initPos = new google.maps.LatLng(location.lat,location.lng);
    var panoramaOptions = {
        position: initPos,
        addressControl: false,
        addressControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        pov: {
            heading: startLocation['heading'],
            pitch: startLocation['pitch'],
            zoom: startLocation['panzoom']
        },
        linksControl: true,
        panControl: false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        imageDateControl: true,
        enableCloseButton: false,
        motionTracking: false,
        fullscreenControl: false
    };
    
    panorama = new google.maps.StreetViewPanorama(document.getElementById('pano_canvas'), panoramaOptions);
    map.setStreetView(panorama);
    map.panTo(initPos);
    google.maps.event.addListener(panorama, 'pano_changed', function() {
        lastsvchg = new Date(); // to check if click event triggered by pegman move
    });
    fillHistory({'lat': location.lat, 'lng': location.lng, 'formatted_address': '', 'copyright': ''});

    initPan = false;
    //setTimeout(function() {
    $('#initscreen').hide();
    

if ($('#searchinput2').val() != '') {
    
    $('#searchcontainer2').addClass('move');
    setTimeout(function() {
       $('#searchcontainer2').removeClass('init');
    }, 200);
    $('.secondarysearch').remove();
    $('#searchinput').val($('#searchinput2').val());
    $('#icon_clear').show();   
} else {
    $('#searchcontainer2').removeClass('init');
}

    $('#menulist_share').removeClass('inactive');
    $('#up, #down, .handle').show();
    
    if (directLink) {
       // $('#searchcontainer2, #overlay_lower2').remove();
       // already happened.
    } else {
        setTimeout(function() {
            $('#searchcontainer2').hide();
        }, 800);
    
        $('#overlay_lower2').fadeOut(700, function() {
            //$(this).hide();
        });

    }

 

    //triggerPan(function(){hashUpdateOn();});
    triggerPan(function() {
        setTimeout(hashUpdateOn, 1000);
    });






//if (!(initPan)) updateHash();
 //   });

}

//initPanorama();
if (directLink) initPanorama(startLocation);
// splitscreen 


var sync1, sync2, sync3, hashUpdateStatus = false;
function hashUpdateOn() {

    if ( hashUpdateStatus == false) {


       // setTimeout(function() {
                sync1 = google.maps.event.addListener(panorama, 'position_changed', function() {
                    updateHash();
                });

                sync2 = google.maps.event.addListener(panorama, 'pov_changed', (function() {
                    updateHash();

                }).debounce(200));

                sync3 = google.maps.event.addListener(map, 'zoom_changed', function() {
                    updateHash();

                }); 
                hashUpdateStatus = true;
                updateHash();
       // }, 1000);

   }
}


function hashUpdateOff() {

    if (hashUpdateStatus == true) {
        google.maps.event.removeListener(sync1);
        google.maps.event.removeListener(sync2);
        google.maps.event.removeListener(sync3);
        hashUpdateStatus = false;
    }
}


function splitScreen(splitterelement, partionupper, partionlower) {
    var self = this;
    this.Splitter = splitterelement;
    this.PartitionUpper = partionupper;
    this.PartionLower = partionlower;
    this.Counter = 0;
    this.OnStart = function () {
        self.Counter = 0;
        centerBeforeMove = map.getCenter();
        $('#ctlSplitter p').fadeOut('slow');
        Cookies.set('dragged', true);
    };

    this.OnDrag = function () {
        self.Counter++;
    };

    this.OnStop = function () {
        var mytop = $(self.Splitter).css("top");
        self.Reposition(mytop);
        var key = self.SplitterLocalStorageKey();
        localStorage.setItem(key, mytop);
    };

    this.SplitterLocalStorageKey = function () {
        //
        //Gets the Key for getting/setting the splitter position from localStorage
        //
        var key = document.title + "_" + self.Splitter.attr("ID");
        return key;
    };

    this.InitSplitterPositionFromLocalStorage = function () {
        //
        //Looks into the localstorage
        //
        //  var key = self.SplitterLocalStorageKey();
        // var splittertop = localStorage.getItem(key);
    var splittertop = null;
        if (splittertop !== null) {
            self.Reposition(splittertop);
            $(self.Splitter).css("top",splittertop);
        }
    };


    this.Reposition = function (newtop) {
        //
        //Should be called when a drag operation is complete.
        //
        //
        var splitterheight=$(splitterelement).outerHeight();
        var splitterheightint=parseInt(splitterheight);
        var newtopint=parseInt(newtop);
        splitPane(newtopint+splitterheightint);
                
        /*var htupper=(newtopint-splitterheight+10) + "px";
        var toplower=(newtopint+splitterheightint-52) + "px";
        $(self.PartitionUpper).css("height", htupper);
        $(self.PartionLower).css("top", toplower);*/

        //    if (resize == false) {
        //  resize = true;
        //} else {
        if (!(initPan)) {
            triggerPan(function(){map.panTo(centerBeforeMove);});
        } else {
            google.maps.event.trigger(map, 'resize');
        }
     //   map.panTo(panorama.getPosition());
        //            map.panTo(new google.maps.LatLng(42.345573, -71.098326));
        //google.maps.event.trigger(map, 'resize');
        //}

    };

    self.InitSplitterPositionFromLocalStorage();
 //   $(splitterelement).draggable({ axis: "y", containment: "parent" , start:self.OnStart , drag:self.OnDrag, stop:self.OnStop });
   



    $(splitterelement).draggable({ axis: "y", containment: [0,48,0,(parseInt($(document).outerHeight())-68)] , start:self.OnStart , drag:self.OnDrag, stop:self.OnStop });
   

}




// prevent pull-down-to-refresh
// http://stackoverflow.com/questions/29008194/disabling-androids-chrome-pull-down-to-refresh-feature
var lastTouchY = 0;
var preventPullToRefresh = false;

$('body').on('touchstart', function (e) {
    if (e.originalEvent.touches.length != 1) { return; }
    lastTouchY = e.originalEvent.touches[0].clientY;
    preventPullToRefresh = window.pageYOffset == 0;
});

$('body').on('touchmove', function (e) {
    var touchY = e.originalEvent.touches[0].clientY;
    var touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;
    if (preventPullToRefresh) {
        // To suppress pull-to-refresh it is sufficient to preventDefault the first overscrolling touchmove.
        preventPullToRefresh = false;
        if (touchYDelta > 0) {
            e.preventDefault();
            return;
        }
    }
});









window.onpopstate = function(event) {
    hashUpdateOff();

    var newhash = document.location.hash;
    if (newhash == '') {
        initHome();
    } else { // read url, process.
        prevloc = deurlize(newhash);

        if ($.isArray(prevloc)) {

            prevlocLatlng = new google.maps.LatLng(prevloc['lat'],prevloc['lng']);
            placeMarker(prevlocLatlng, 0, initPan);
            map.setZoom(prevloc['mapzoom']);
            //map.setCenter(new google.maps.LatLng(prevloc['lat'],prevloc['lng']));
  //  map.setCenter({'lat': queueHistory[nr]['lat'], 'lng': queueHistory[nr]['lng']});
//  triggerPan(function(){});
          if (prevloc.maptype == 'hybrid') {
                mapType = google.maps.MapTypeId.HYBRID;
                $('#menulist_satellite input').prop('checked', true);
            } else {
                 mapType = google.maps.MapTypeId.ROADMAP;
                $('#menulist_satellite input').prop('checked', false);
            }

        }
    }
};







var pixFromTop = {
    'v1': 25,
    'v2': ($( window ).height() * 0.4),
    'v3': ($( window ).height() - ($( window ).height() * 0.25))
};

function refreshBreakPix() {

    pixFromTop = {
        'v1': 25,
        'v2': ($( window ).height() * 0.4),
        'v3': ($( window ).height() - ($( window ).height() * 0.25))
    };
    $("#ctlSplitter").draggable( "option", "containment", [0,45,0,(parseInt($(document).outerHeight())-68)] );
  //  splitPane('v2');
}


 splitter = new splitScreen($("#ctlSplitter"), $("#ctlUpper"), $("#ctlLower"));


var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshBreakPix, 100);
});



$('#down').one('click', function() {
            splitPane('v3');
}); 

$('#up').one('click', function() {
            splitPane('v1');
});


function setPanePerc(perc) {

    var heightInPixels = $(window).height(); 
    var pixels = Math.round( heightInPixels / 100 * perc );
    splitPane(pixels);
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function getPanePerc() {
    var heightInPixels = $(window).height(); 
    //var splitHeight = $("#ctlSplitter").css('top');
    var splitHeight = $("#ctlSplitter").offset().top;
   //splitHeight = 20;
    var percent = Math.round( splitHeight / heightInPixels * 100 );
    percent = pad(percent, 2);
    return (percent);
    

}
//var blatest = getPanePerc();

splitPane = function(position) {

    $('#down,#up').unbind();
    var tgglNmbr = true;
   // centerBeforeMove = map.getCenter(); //TEST 20151117 
    //if (!(initPan)) updateHash(); // kijk uit met reactiveteren: breekt back button naar center state.
    if (position == 'v1') {
        $('#down').one('click', function() {
            splitPane('v2');
        }).show();
        $('#up').hide();
       
    } else if (position == 'v2') {
        $('#up').one('click', function() {
            splitPane('v1');
        }).show();
       $('#down').one('click', function() {
            splitPane('v3');
        }).show();
       
    } else if (position == 'v3') {
         $('#up').one('click', function() {
            splitPane('v2');
        }).show();
        $('#down').hide();
    } else {
        tgglNmbr = false;



        if (position < 90) {
            $('#up').hide();
            $('#down').one('click', function() {
                splitPane('v2');
            }).show();

        } else if (position <  pixFromTop['v2'] && position > 89) {
            $('#up').one('click', function() {
                splitPane('v1');
            }).show();
            $('#down').one('click', function() {
                splitPane('v2');
            }).show();
            
        } else if (position >  pixFromTop['v2'] && position < pixFromTop['v3']) {
            $('#up').one('click', function() {
                splitPane('v2');
            }).show();
            $('#down').one('click', function() {
                splitPane('v3');
            }).show();
        } else if (position > pixFromTop['v3']) {
            $('#up').one('click', function() {
                splitPane('v2');
            }).show();
            $('#down').hide();

        } 
    }

    if (tgglNmbr) {
        $("#ctlUpper").css("height", pixFromTop[position] + 19 + "px");
        $("#ctlLower").css("top", pixFromTop[position] + 30 + "px");
        $("#ctlSplitter").css("top", pixFromTop[position] + 20 + "px");
        triggerPan(function(){});
    } else {
        if (position < 60) position = 60;
        if (position > (parseInt($(document).outerHeight())-78))  position = parseInt($(document).outerHeight())-78;
        $("#ctlUpper").css("height", position - 12  + "px");
        $("#ctlLower").css("top", (position - 2) + "px");
        $("#ctlSplitter").css("top", position - 12 + "px");        
    }

    //triggerPan(function(){map.panTo(centerBeforeMove);});

};


// menu
//splitPane('v2');


if (directLink) {
   normSplitPos = startLocation['splitpos'];
   if (normSplitPos < 5) normSplitPos = 5;
   if (normSplitPos > 95) normSplitPos = 95;
    setPanePerc(normSplitPos);
} else {
/*    $('#up').one('click', function() {
            splitPane('v1');
        }).show();
   $('#down').one('click', function() {
        splitPane('v3');
    }).show();*/
}


$('#behindmenubutton,#menubutton').on('click', function() {
    if (queueHistory.length > 1) $('#prev').removeClass('inactive');
    $('#menu_content').removeClass('scroll');

    $('#menu').addClass('visible'); 
    $('#searchinput').hide();
    $('#overlay_upper,#overlay_lower,#overlay').on('click', function() {
        //$(this).hide();//NODIG?
        $('#clearmenu').trigger('click');

    });
    $('#overlay,#prev,#next').show();
    prevNextPos = curPos;

});


$('#clearmenu').on('click', function() {
    if (panoWatch) shareLinkPanoReset();
    $('#menu').removeClass('visible'); 
    $("#menu_content").removeClass('visible').removeClass('scroll');
    $('#searchinput, #sendfeedback, #feedback').show();
   // $('#menu_content_feedback p').hide();

    $('#overlay_upper,#overlay_lower,#overlay').hide().removeClass('transp').off();
    setTimeout(function() {
        $('#menulist > div, #menulist #logo').removeClass('active').show();   
        $('#menubackbutton').hide();
        $('#next').addClass('inactive');

        checkNewHistItem();
    }, 500);

});


var prevNextPos;

$('#next').on('click', function() {
    if(!($(this).hasClass('inactive'))) {

        $('#prev').removeClass('inactive');
        prevNextPos++;
        $('#overlay').addClass('transp');
    

        loadHist(prevNextPos);

        if (prevNextPos == (curPos)) {
            $('#next').addClass('inactive');
        }
    }
});


$('#prev').on('click', function() {
    if(!($(this).hasClass('inactive'))) {

        $('#next').removeClass('inactive');
        $('#overlay').addClass('transp');
        prevNextPos--;


                loadHist(prevNextPos);
        if (prevNextPos == 0) {
            $('#prev').addClass('inactive');
        }
    }

});


function loadHist(nr) {
    panorama.setPosition(new google.maps.LatLng(queueHistory[nr]['lat'],queueHistory[nr]['lng']));
   
    //if ()
    if (!(jQuery.isEmptyObject(queueHistory[nr]['pov']))) {
        panorama.setPov(queueHistory[nr]['pov']);
    }


    map.setCenter(new google.maps.LatLng(queueHistory[nr]['lat'],queueHistory[nr]['lng']));
  //  map.setCenter({'lat': queueHistory[nr]['lat'], 'lng': queueHistory[nr]['lng']});
    $('#address span,#addressmobile span').text(cleanAddress(queueHistory[nr]['formatted_address']));
    lastHistorySelect = queueHistory[nr];
    triggerPan(function(){});
}

function cleanAddress(string) {

return string.replace('Unnamed Road, ','');



}

$('#menubackbutton').on('click', function() {
    if (panoWatch) shareLinkPanoReset();
    if (queueHistory.length > 1) $('#prev').removeClass('inactive');
    $('#homebutton').fadeIn();
    
    $(this).hide();
    $('#overlay').removeClass('transp').show();
    $('#overlay_upper,#overlay_lower').hide().removeClass('transp');

    $("#menu_content").removeClass('visible');
    setTimeout(function() {
        $('#menulist > div, #menulist #logo').removeClass('active').show(); 


        $('#sendfeedback, #feedback,#prev,#next').show();  
        $('#menu_content_feedback p').hide();

        prevNextPos = curPos;
        checkNewHistItem();

    }, 800);

});




function setIntervalRotate(delay, reps, direction, pitch, callback) {
    var x = 0;
    var pov =  panorama.getPov();
    var intervalID = window.setInterval(function () {
        pov.heading += direction;
        pov.zoom = 1;
        pov.pitch -= pitch;
        panorama.setPov(pov);
        if (++x === reps) {
            window.clearInterval(intervalID);
            if (status != 'stop') callback();
       }
    }, delay);
}





$('#lookaround').on('click', function() {

    setIntervalRotate(50, 6, 15, 0, function() {});


});



function initHome() {
//map.setStreetView(null);
log('this?');
map.setOptions({streetViewControl: false,mapTypeId: google.maps.MapTypeId.ROADMAP});
    $('#initscreen,#overlay_lower2').show();
    $('#searchcontainer2').addClass('init').show();

    $('#clearmenu').trigger('click');
    splitPane('v2');
    setTimeout(function() {
        map.setCenter(new google.maps.LatLng(userCountry['lat'],userCountry['lng']));
        map.setZoom(userCountry.zoom);
    },500);

    homeScreen = true;
    firstChange = true;

}

function removeHash () { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

$('#behindzoomin,#zoomin').on('click', function() {
	if (mainview == "split" || mainview == "map") {
		zoom('map','in');
   } else if (mainview == "pano") {
   	zoom('pano','in');
   } 
});

$('#behindzoomout,#zoomout').on('click', function() {
	if (mainview == "split" || mainview == "map") {
		zoom('map','out');
   } else if (mainview == "pano") {
   	zoom('pano','out');
   }    
});

$('#behindzoomin_s,#zoomin_s').on('click', function() {
	if (mainview == "split" || mainview == "map") {
		zoom('pano','in');
   } else if (mainview == "pano") {
   	zoom('map','in');
   } 
});

$('#behindzoomout_s,#zoomout_s').on('click', function() {
	if (mainview == "split" || mainview == "map") {
		zoom('pano','out');
   } else if (mainview == "pano") {
   	zoom('map','out');
   }    
});



function zoom(el,side) {

	if (el == 'map') {
		var currZoom = map.getZoom();
		if (side == 'in') {
 			if (currZoom < 16) {
            map.setZoom(currZoom + 1);//2
        	} else if (currZoom < 21) {
            map.setZoom(currZoom + 1);
        	} else if (currZoom == 21) {
            map.setZoom(22);
			}		
		} else if (side == 'out') {
			if (currZoom > 17) {
				map.setZoom(currZoom - 1);
			} else if (currZoom > 3) {
				map.setZoom(currZoom - 1);//2
			} else if (currZoom == 3) {
				map.setZoom(2);
			}

		}





	} else if (el=="pano") {

			var currPanZoom = panorama.getZoom();


		if (side == 'in') {
			if (currPanZoom < 5) {
				panorama.setZoom(currPanZoom + 1);
			}
	
		} else if (side == 'out') {
			if (currPanZoom > 0) {
				panorama.setZoom(currPanZoom - 1);
			}
		}

	} else log('el',el);

//mainview

}




/*
var zoomStatus = '';

var zoomTimer;

zoomTimer = setTimeout(function () {
    zoomStatus = '';
}, 10000);

$('#zoom-in').on('click', function() {
    if (zoomStatus == 'in' || zoomStatus == '') {
        var currZoom = map.getZoom();
        if (currZoom < 20) {
            map.setZoom(currZoom + 2);
        }    
        zoomStatus = 'in';
    } else if (zoomStatus == 'out' || zoomStatus == 'slow') {
        var currZoom = map.getZoom();
        if (currZoom < 23) {
            map.setZoom(currZoom + 1);
        }  
        zoomStatus = 'slow'
    }
    clearTimeout(zoomTimer);
    zoomTimer = setTimeout(function () {
        zoomStatus = '';
    }, 10000);



});


$('#zoomout').on('click', function() {

    if (zoomStatus == 'out' || zoomStatus == '') {
        var currZoom = map.getZoom();
        if (currZoom > 2) {
            map.setZoom(currZoom - 2);
        }    
        zoomStatus = 'out';
    } else if (zoomStatus == 'in' || zoomStatus == 'slow') {
        var currZoom = map.getZoom();
        if (currZoom > 1) {
            map.setZoom(currZoom - 1);
        }  
        zoomStatus = 'slow'
    }
    clearTimeout(zoomTimer);
    zoomTimer = setTimeout(function () {

        zoomStatus = '';
    }, 10000);

  


});*/



function checkNewHistItem() {
    if (!(jQuery.isEmptyObject(lastHistorySelect))) {

        if (lastHistorySelect.position != queueHistory[queueHistory.length - 1]['position']) {
            fillHistory({'lat': lastHistorySelect.lat, 'lng': lastHistorySelect.lng, 'formatted_address': lastHistorySelect.formatted_address, 'copyright':''});
        } else {
            $('#address span,#addressmobile span').text(cleanAddress(lastHistorySelect.formatted_address));   
        }
        lastHistorySelect = {};
    }

}

function openSubmenu(that, target) {
    $('#overlay_upper,#overlay_lower').removeClass('transp').hide();
    $('#homebutton').fadeOut();
	$("#menu_content").removeClass('scroll').scrollTop(0);
    //$('#overlay').removeClass('transp').show();
    $(that).siblings().hide();
    var mid = $(that).attr('id');
    setTimeout(function() {
        $('#menubackbutton').fadeIn();
        $('#'+mid).addClass('active');
        
    }, 200);

    $(target).show().siblings().hide();
    setTimeout(function() {
        $("#menu_content").addClass('visible');
    }, 800);
       
}

$('#menulist_share').on('click', function() {
    if (initPan) return;
   // $('#overlay').hide();

openShareMenu();     //var thehash = urlize(lat, lng, heading, pitch, zoom);
   //urlize();

    //    var permurl2 =  'http://' + window.location.hostname + window.location.pathname + '%23'+thehash;
    //alert (permurl);
    //History.replaceState({'rnd': Math.random()},'Random Street View - images from ');
    //window.location.hash = thehash;




    openSubmenu(this, '#menu_content_share');
    $('#overlay').hide();
    $('#overlay_upper,#overlay_lower').hide();
    shareLinkPanoWatch();

});



var panoWatch = false;
var panoWatch1,panoWatch2,panoWatch3;
function shareLinkPanoWatch() {
    panoWatch = true;

    panoWatch1 = google.maps.event.addListener(panorama, 'position_changed', function() {
        urlize();
    });

    panoWatch2 = google.maps.event.addListener(panorama, 'pov_changed', function() {
        urlize();
    });

    panoWatch3 = google.maps.event.addListener(map, 'zoom_changed', function() {
        urlize();
    });

}
function shareLinkPanoReset() {
    panoWatch = false; 
    google.maps.event.removeListener(panoWatch1);
    google.maps.event.removeListener(panoWatch2);
    google.maps.event.removeListener(panoWatch3);
 
}

$('#sharelink').on('click', function() {
    if (!$('#menu').hasClass('enableoverflow')) {
        $(this).select();
        $('#menu').addClass('enableoverflow');
    }
});




$('#sharelink').on('blur', function() {
    if ($('#menu').hasClass('enableoverflow')) {
        $('#menu').removeClass('enableoverflow');
    }
});


$('#menulist_about').on('click', function() {
    $('#overlay').removeClass('transp').show();
    $('#overlay_upper').hide();
    $('#overlay_lower').hide();
    
    openSubmenu(this, '#menu_content_about');
    setTimeout(function(){$('#menu_content').addClass('scroll');},801);
    
});



$('#menulist_history').on('click', function() {
    $('#menu_content').addClass('scroll');
    openSubmenu(this, '#menu_content_history');
    setTimeout(function(){$('#menu_content').addClass('scroll');},801);

});



$('#menulist_feedback').on('click', function() {
    openSubmenu(this, '#menu_content_feedback');
});

$('#sendfeedback').click(function() {
    if ($('#feedbackform textarea').val() != '') {
        $.ajax({
            url: 'https://randomstreetview.com/data',
            data: { 
                feedback: $('#feedback').val(), 
                page: document.location.href
            },
            success: function(msg) {
                if(msg.success) {
                    $('#feedback,#sendfeedback').hide();
                    $('#menu_content_feedback p').show();

                    $('#feedback').val('');
                }               
            }
        });
    }
});



$('#menulist_random').on('click', function() {
    fetchLocations('all');
    openSubmenu(this, '#menu_content_random');
    /*$('#overlay').hide();
    $('#overlay_lower').show().addClass('transp');
    $('#overlay_upper').show().removeClass('transp');
    */
    checkNewHistItem();

    $('#overlay').addClass('transp');
    
});




var goNext = 0;

function fetchLocations(name) {
    logTime('get randomstreetview start');
    $.ajax({
        url: 'https://randomstreetview.com/data',
        data: { 
            'country': name
        },
        success: function(msg) {
            if(msg.success) {

                if (jQuery.isEmptyObject(randomLocations[name])) {
                    randomLocations[name] = msg.locations;
                    qPos[name] = 0;
                } else {
                    randomLocations[name].push.apply(randomLocations[name], msg.locations);
                }
    logTime('get randomstreetview end');

//
                if (goNext == 1) nextRandom();
            } else {
            }
        }
    });         


}

function nextRandom() {
    //loadView(randomLocations[randomCountry][qPos[randomCountry]]);   
    if (jQuery.isEmptyObject(randomLocations[randomCountry][qPos[randomCountry]])) {

        //goNext = 1; // HIER PROBLEEM met countries < 10 vulling. Voorkomen.
        fetchLocations(country);
        return;
    }


    var nxtLatLng = new google.maps.LatLng(randomLocations[randomCountry][qPos[randomCountry]]['lat'],randomLocations[randomCountry][qPos[randomCountry]]['lng']);
    placeMarker(nxtLatLng, 0, initPan);

    //if (country == 'all') {
        map.setZoom(countryDb[country]['zoom']);
    //} else {
    //    map.setZoom(8);
    //}            

    qPos[randomCountry]++;
}

$('#next_random').on('click', function() {
    nextRandom();


});


var country = 'all';
var countryChanged = false;
$("#countries").change(function() {
    if ($(this).val() !== '') {
        country = randomCountry = $(this).val();
        goNext = 1;
        fetchLocations(country);   

        if (country != 'all') {
            //var geocoder = new google.maps.Geocoder();

            geocoder.geocode( { 'address': $("#countries option:selected" ).text()}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    //map.setCenter(results[0].geometry.location);
                    map.fitBounds(results[0].geometry.viewport);
                }
        
                if(map.getZoom() < 4) map.setZoom(4);
                countryChanged = true;
            });
        } else {
            map.setZoom(2);
        }


         
    }
});




$('#next_random').attr('unselectable', 'on'); 


function loadView(object) {
    if (jQuery.isEmptyObject(object)) {

        //goNext = 1; // HIER PROBLEEM met countries < 10 vulling. Voorkomen.
        fetchLocations(country);
        return;
    }
    
    var heading = panorama.getPov().heading;
    var pitch = panorama.getPov().pitch;
    var zoom = panorama.getPov().zoom;
    if (zoom > 1.8) zoom = 1;
    if (pitch > 15 || pitch < -15) pitch = 0;
    var center = new google.maps.LatLng(object.lat,object.lng);
    panorama.setPosition(center);
    panorama.setPov({
        heading: heading,
        zoom: zoom,
        pitch: pitch
    });
    map.setCenter(center);
    if (country == 'all') {
        map.setZoom(4);
    } else {
        map.setZoom(7);
    }
    triggerPan(function(){});


// OR OOOOOORRRRRR
    //var newp = new google.maps.LatLng(object.lat,object.lng);
    //placeMarker(newp, 0);
  
    fillHistory({'lat': object.lat, 'lng': object.lng, 'formatted_address': '', 'copyright':''});
     prevNextPos = curPos;
     $('#prev').removeClass('inactive');
     $('#next').addClass('inactive');

    //$('#address').text(object.formatted_address);   
    //setTimeout(function() {
     //   nextInProgress = false;
    //}, 1e3);

}



//fetchLocations('all');





$('#menulist_satellite, #menulist_satellite input').on('click', function(){
    $('#overlay').hide();

    $('#overlay_upper').show().addClass('transp');
    $('#overlay_lower').show();

    if ($('#menulist_satellite input').is(':checked')) {
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        streetViewLayer.setMap(map);
        $('#menulist_satellite input').prop('checked', false);
    } else {
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
        streetViewLayer.setMap(null);
        $('#menulist_satellite input').prop('checked', true);
    }
    updateHash();

}); 
//    map.setMapTypeId(google.maps.MapTypeId.HYBRID);
//    streetViewLayer.setMap(null);



/*
// share this place
$('#sharelink').on('click' ,function() {
    var lat = panorama.getPosition().lat();
    var lng = panorama.getPosition().lng();
    var heading = panorama.getPov().heading;
    var pitch = panorama.getPov().pitch;
    var zoom = panorama.getPov().zoom;
    var address = $('#address').html();
    var thehash = urlize(lat, lng, heading, pitch, zoom);
    //    var permurl =  'http://' + window.location.hostname + window.location.pathname + '#'+thehash;
    //    var permurl2 =  'http://' + window.location.hostname + window.location.pathname + '%23'+thehash;
    //alert (permurl);
    //History.replaceState({'rnd': Math.random()},'Random Street View - images from ');
   // window.location.hash = thehash;
})
*/

// ad hide

$('#adclose').one('click', function() {
    $('#ad').hide()
});

function adHide() {
    $('#adclose').hide().one("click", adShow);
    $('#adcode,#advert').hide('normal', function() {
      //  setTimeout(function() {
        $('#adclose').css({'bottom': '-14px', 'right':'50%'}).prop('title', 'show ad').html('ad').fadeIn();
       // }, 100);
    });
    
}

function adShow() {
    $('#adclose').hide().one("click", adHide);
    $('#adcode,#advert').show('normal', function() {

    //setTimeout(function() {
        $('#adclose').html('hide ad <span>&#x25BC;</span>').css({'bottom': '90px'}).prop('title', 'hide ad').fadeIn();
    //}, 100);
    });

}





var clickOnMap = false;

clearSingleClick = function(){
    singleClick = false;
    $('#canvas_overlay').hide();
};


// add a click event handler to give lat/long. Have to cater for the fact that dragging the streetview pegman also triggers a click event
google.maps.event.addListener(map, 'click', function (e) {
    //alert (e.latLng.lat()+', '+e.latLng.lng());  
   // if (singleClick != true) {      
    if (new Date() - lastclick < 1500) {
        clickSwtch = true;
    } else {
        clickSwtch = false;
    }
    singleClick = true;
    lastclick = new Date(); // to check if click event triggered by pegman move
    $('#canvas_overlay').show();

    
    /*
    if (dradius > distArray[2]) searchRadius = 2;
    if (dradius > distArray[3]) searchRadius = 3;
    if (dradius > distArray[4]) searchRadius = 4;
    if (dradius > distArray[5]) searchRadius = 5;
    if (dradius > distArray[6]) searchRadius = 6;
    */ 
    var point = fromLatLngToPixel(e.latLng);   
    $('#loading').css({'top': (point.y-15)+ 'px', 'left' : (point.x-15) + 'px'}).show();
 


    setTimeout(function() {  // wait 0.5 seconds to let pano_changed trigger first in case pegman being dragged
        if ((new Date() - lastsvchg > 1500 || clickSwtch) && singleClick) {  // ignore if due to pegman being dragged in last 1500 seconds
    
    var distancio1 = fromPixelToLatLng({'x': (point.x+120), 'y': (point.y+120)});
    var dradius = google.maps.geometry.spherical.computeDistanceBetween(e.latLng, distancio1);
    for(ir = 1; ir < (distArray.length + 1); ir++){
        if (dradius > distArray[ir]) searchRadius = ir;
    }

        $('#searchinput').val('');
        $('#icon_clear').hide();        

            clickOnMap = true;
            placeMarker(e.latLng, searchRadius, initPan);

        } else if (singleClick) {
            $('#loading').hide();
        } else {
            $('#loading').hide();

        }
        clearSingleClick();


    }, 500);  // wait 1 second before testing

    //}


});

google.maps.event.addListener(map, 'dblclick', function(event) {// duh! :-( google map zoom on double click!
     clearSingleClick();
});



// detect changes to streetview position. Could use position_changed event also.

// find location on click


/*
var clickListener = google.maps.event.addListener(map, 'click', function(e) {
    placeMarker(e.latLng, searchRadius);
});
*/





$('#menu_content_history ul').on('click', 'li', function() {
   

    $('#overlay').addClass('transp');
    var qnr = $(this).data('position');
    loadHist(qnr);
    //panorama.setPano(queueHistory[qnr]['pano']);

    /*panorama.setPosition(new google.maps.LatLng(queueHistory[qnr]['lat'],queueHistory[qnr]['lng']));
    panorama.setPov(/** @type {google.maps.StreetViewPov} *///({
      /*  heading: 265,
        pitch: 0
    }));
    map.setCenter({'lat': queueHistory[qnr]['lat'], 'lng': queueHistory[qnr]['lng']});
    $('#address').text(queueHistory[qnr]['formatted_address']);
    lastHistorySelect = queueHistory[qnr];
    triggerPan(function(){});*/
});


function fillHistory(newobject) {  
    if (newobject.copyright.indexOf('Google') >= 0 && newobject.formatted_address !== '') {
        curPos++;
        queueHistory.push({'position' : curPos,'lat': newobject.lat, 'lng': newobject.lng, 'formatted_address': newobject.formatted_address});
        $('#menu_content_history ul').prepend('<li><span>' + newobject.formatted_address + '</span></li>');
        $('#menu_content_history ul li:first').data('position', curPos);
        $('#address span,#addressmobile span').text(cleanAddress(newobject.formatted_address));
        document.title = newobject.formatted_address;

        $('#menu_content_history p').hide();

    

    } else {
        curPos++;
        //var geocoder = new google.maps.Geocoder();

        var newpos123 = new google.maps.LatLng(newobject.lat,newobject.lng);
        geocoder.geocode({'location': newpos123}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                queueHistory.push({'position' : curPos,'lat': newobject.lat, 'lng': newobject.lng, 'formatted_address': results[0].formatted_address});
                $('#menu_content_history ul').prepend('<li><span>' + results[0].formatted_address + '</span></li>');
                $('#menu_content_history ul li:first').data('position', curPos);
                $('#address span,#addressmobile span').text(cleanAddress(results[0].formatted_address));
                document.title = results[0].formatted_address;
                $('#menu_content_history p').hide();
    
            } else {
            }
            
        });



    }
}


function placeMarkerProcess(position, result, init) {

    if (init === false && homeScreen === true) {
        $('#initscreen,#searchcontainer2, #overlay_lower2').hide();
        homeScreen = false;
        hashUpdateOn();
    }  

    if (init === false) {


    
     var searchRadius = 0;
   // var point = fromLatLngToPixel(position);







 
    /*var heading = google.maps.geometry.spherical.computeHeading(result.location.latLng, position);
    panorama.setPov({
        heading: heading,
        pitch: 0,
        zoom: 0
    });*/
/*


panorama.getPov();
 //   var qhheading = panorama.getPov().heading;
 //   var qhpitch = panorama.getPov().pitch;
 //   var qhpanzoom = panorama.getPov().zoom;
       











       */

queueHistory.pop();

var qhlat = panorama.getPosition().lat();
var qhlng = panorama.getPosition().lng();
var qhpov = panorama.getPov();

queueHistory.push({'position' : curPos,'lat': qhlat, 'lng': qhlng, 'pov': qhpov, 'formatted_address': $('#address span').text()});
    var heading = panorama.getPov().heading;
    var pitch = panorama.getPov().pitch;
    var zoom = panorama.getPov().zoom;
    if (zoom > 1.8) zoom = 1;
    if (pitch > 15 || pitch < -15) pitch = 0;
    //var center = new google.maps.LatLng(object.lat,object.lng);
    //panorama.setPosition(center);
   /* panorama.setPov({
               heading: heading,
                zoom: zoom,
                pitch: pitch
        });

*/
    panorama.setPano(result.location.pano);
    fillHistory({'lat': result.location.latLng.lat(), 'lng': result.location.latLng.lng(), 'formatted_address': result.location.description, 'copyright':result.copyright});

    
    var distancePointPegman = google.maps.geometry.spherical.computeDistanceBetween(result.location.latLng, position);


    if (clickOnMap) {
        var point = new google.maps.LatLng(parseFloat(result.location.latLng.lat()),parseFloat(result.location.latLng.lng()));
        var currentBounds = map.getBounds();// get bounds of the map object's viewport

        if(currentBounds.contains(point)){
            // your location is inside your map object's viewport
        }else{
            //$('#zoomout').trigger('click');
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(point);
            bounds.extend(map.getCenter());
            map.fitBounds(bounds);
        }

        triggerPan(function(){});
        //triggerPan(hashUpdateOn);

        clickOnMap = false;
    } else {

        if (distancePointPegman < 100) {
            map.panTo(result.location.latLng);


        } else {
          

           // if (distancePointPegman < 1000) {
                map.panTo(result.location.latLng);
            //} else {

                /*$('#zoomin').css({'top': (point.y-25)+ 'px', 'left' : (point.x+25) + 'px'}).one('click', function() {
                    $(this).hide();
                    var bounds = new google.maps.LatLngBounds();
                    bounds.extend(result.location.latLng);
                    bounds.extend(position);
                    map.fitBounds(bounds);
                    google.maps.event.addListenerOnce(map, 'idle', function() {
                   //     map.setZoom(map.getZoom() - 1);
                    });
                }).show(0).delay(3000).fadeOut(400);*/


    //        }
            //alert ('far!');
        }

        if (map.getZoom() < 7 && distancePointPegman < 1000) {
               /* $('#zoomin').css({'top': (point.y-25)+ 'px', 'left' : (point.x+25) + 'px'}).one('click', function() {
                    $(this).hide();
                    map.setZoom(14);
                    map.panTo(position);
                }).show(0).delay(3000).fadeOut(400);*/
        }
            //map.setOptions({draggableCursor: 'crosshair'});
        triggerPan(function(){});
       // triggerPan(hashUpdateOn);
        }

    } else {

        initPanorama({'lat': result.location.latLng.lat(), 'lng': result.location.latLng.lng()});
    }

}


function placeMarker(position, startDist, init) {
    streetViewService.getPanoramaByLocation(position, distArray[startDist], function(result, status) {

        if (status == google.maps.StreetViewStatus.OK) {
            searchRadius = 0;                     
            placeMarkerProcess(position, result, init);


        } else if (startDist < distArray.length) {
            searchRadius++;
    
            placeMarker(position, searchRadius, init);
        } else {
            map.panTo(position);
            searchRadius = 0;                     
            $('#loading').hide();
            $('#notice,#overlay').show().on('click', function() {
                $('#notice,#overlay').hide();
            }).delay(3000).fadeOut();
            

        }

    });

}


// autocomplete and search
//var clone = $('#searchcontainer').clone().prop('id', 'searchcontainer2').insertAfter('#searchcontainer').on('keyup', function(e) {
//$('#searchcontainer').remove();

//});

//autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchinput'));
//if (!(directLink)) autocomplete2 = new google.maps.places.Autocomplete(document.getElementById('searchinput2'));
//autocomplete2 = new google.maps.places.Autocomplete(document.getElementById('searchinput2'));
//autocomplete.addListener('place_changed', processSearch);
//autocomplete2.addListener('place_changed', processSearch2);

// AUTOCOMPLETE FIELD BEHAVIOR  
$('#icon_clear').on('click', function() {
    $(this).hide();
    $('.autocomplete-suggestions').hide();
    $('#searchinput').val('').focus();
});

$('#searchinput').on('click', function(){
    $(window).off('resize');
});

$('#searchinput,#searchinput2').on('keyup', function(e) {
    var code = e.which; // recommended to use e.which, it's normalized across browsers
    if ($(this).val().length > 0 && code!=13) {
        $('#icon_clear').show();
    } else if ($(this).val().length > 0) {
        $('#icon_clear').show();
    } else {
        $('#icon_clear').hide();
    }


//	if (sync == true) clearSync();
	clearTimeout($.data(this, 'timer'));
	var val = $(this).val();
	if (val != '' && val.length > 4) {
		var wait = setTimeout(function() {
			$('.loading2').show();
			processSearch(val);
		}, instantdelay);
		$(this).data('timer', wait);
	} else {
//	  	$('#suggest').html('...');
  //
  	//	log('a');
  	//	$('#intro').show();
	}


});

//var autocompleteService = new google.maps.places.AutocompleteService();
//$('#searchinput').on('keyup', function() {
//});



$('#searchinputXXX').autoComplete({
    source: function(term, response){
    	 processSearch($('#searchinput').val());
   
   //     autocompleteService.getQueryPredictions({input: term}, response);
 // $.getJSON('/some/ajax/url/', { q: term }, function(data){ response(data); });
    },
    renderItem: function (item, search, i) {
        if (i == 0) {
				firstSuggest = " first";
        		if (instantsearch) processSearch(item.description);
        } else firstSuggest = '';


        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        var secTxt = (typeof item.structured_formatting.secondary_text !== "undefined") ? item.structured_formatting.secondary_text : '';
        return '<div class="autocomplete-suggestion' + firstSuggest + '" data-val="' + item.description + '"><span class="main_text">' + item.structured_formatting.main_text.replace(re, "<b>$1</b>") + '</span>&nbsp;<span class="secondary_text">' + secTxt + '</span></div>';
			

    },
    minChars: 4,
   delay: 1000,
   onSelect: function(event, term, item) {
    setTimeout(function(){
        $("#searchinput").blur();
  }, 100);
   // processSearch(term);
    
    	$('#searchform').submit();
  		$('.autocomplete-suggestions').hide().empty();
  		$('#overlay_invisible').hide();

   }
            
});


$("#searchinput").blur(function() {
    $('autocomplete-suggestions').hide();
});
/*


clearTimeout($.data(this, 'timer'));
	if (val != '' && val.length > 4) {
		$('#intro').hide();
		var wait = setTimeout(function() {
			$('#loading').show();
			autocompleteService.getQueryPredictions({input: val}, ac_callback);
		}, instantdelay);
		$(this).data('timer', wait);
	} else {
	  	$('#suggest').html('Keep typing...');
  	//	$('#intro').show();
	}

*/



$('#searchinputXXX').on('keyup', function() {
	
	var val = $(this).val();
/*	$('#loading').hide();
	if (startup == true) {
	//	map1.setCenter({'lat':0, 'lng': 0});
	//	map1.setZoom(3);
		$('#introtxt').hide();
		$('#intro').hide();
		
		if ($.browser.msie) {
			$('#inputcontrol').css({top: '35px', left: '100px'});
			$('#main, #closemain, #searchbutton, #reset').show();
		} else {
		
			$('#inputcontrol').animate({top: '35', left: '100'}, 800, function() {
				$('#main, #closemain, #searchbutton, #reset').fadeIn('slow');
	   			 // Animation complete.
	  		});
  		
  		}
  		
		startup = false;
	}
	*/

	//if (sync == true) clearSync();
	clearTimeout($.data(this, 'timer'));
	if (val != '' && val.length > 4) {
		$('#intro').hide();
		var wait = setTimeout(function() {
			//$('#loading').show();
			autocompleteService.getQueryPredictions({input: val}, ac_callback);
		}, instantdelay);
		$(this).data('timer', wait);
	} else {
	  	$('#suggest').html('Keep typing...');
  	//	$('#intro').show();
	}
}).one("focus", function() {
  $(this).val("");
}).focus();



function ac_callback(predictions, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		//codeAddress(predictions[0]["description"]); 
	//	 $('#searchinput').val(predictions[0]["description"]);
    //$('#searchform').submit();
        processSearch(predictions[0]["description"]);
	} else codeAddress(''); 
};





$('#searchinput2XXX').autoComplete({
    source: function(term, response){
        autocompleteService.getQueryPredictions({input: term}, response);
 // $.getJSON('/some/ajax/url/', { q: term }, function(data){ response(data); });
    },
    renderItem: function (item, search, i) {
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        var secTxt = (typeof item.structured_formatting.secondary_text !== "undefined") ? item.structured_formatting.secondary_text : '';
        return '<div class="autocomplete-suggestion secondarysearch" data-val="' + item.description + '"><span class="main_text">' + item.structured_formatting.main_text.replace(re, "<b>$1</b>") + '</span>&nbsp;<span class="secondary_text">' + secTxt + '</span></div>';
    },
    minChars: 4,
   delay: 800,
   onSelect: function(event, term, item) {
   /* setTimeout(function(){
        $("#searchinput").blur();
  }, 100);*/
    $('#searchinput').val(term);
    $('#searchform').submit();
   }
            
});

var resultClicked;

$('#searchform').on('submit', function() {
    processSearch($('#searchinput').val());
    $('autocomplete-suggestions').hide();
    $('#searchinput').blur();
    return false;
});

$('#searchform2').on('submit', function() {
    processSearch($('#searchinput2').val());
    $('autocomplete-suggestions').hide();
    $('#searchinput2').blur();
    return false;
});


function processSearch(query) {
    geocoder.geocode( { 'address': query}, function(results, status) {
        log (results, status);
        if (status == google.maps.GeocoderStatus.OK) {


            var loc = results[0].geometry.location;
                
   /* if (!place.geometry) {
      //window.alert("Autocomplete's returned place contains no geometry");
      //return;
      alert($('#searchinput').val());
    }
*/
    if (results[0].geometry.viewport) {
        map.fitBounds(results[0].geometry.viewport);

        var swPoint = results[0].geometry.viewport.getSouthWest();
        var nePoint = results[0].geometry.viewport.getNorthEast();
        var radius = google.maps.geometry.spherical.computeDistanceBetween(swPoint, nePoint);

        for(ir = 1; ir < (distArray.length + 1); ir++){
            if (radius > distArray[ir]) searchRadius = ir;
        }

        google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
            var swPoint = map.getBounds().getSouthWest();
            var nePoint = map.getBounds().getNorthEast();
            var radius = google.maps.geometry.spherical.computeDistanceBetween(swPoint, nePoint);
    
        });
    

    } else {
      map.setCenter(results[0].geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }


    //log ('radius: '+radius);
$('.autocompl').slideUp();


    placeMarker(results[0].geometry.location, searchRadius, initPan);
    //triggerPan(function(){});
} else {
//log error in Google Analytics. 
if ($('.autocompl').is(":hidden")) $('.autocompl').slideDown().delay(2000).slideUp();
}
$('.loading2').hide();

});

}


function processSearch2() {
    var place = autocomplete2.getPlace();
    if (!place.geometry) {
      //window.alert("Autocomplete's returned place contains no geometry");
      //return;
      alert($('#searchinput').val());
    }

    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);

        var swPoint = place.geometry.viewport.getSouthWest();
        var nePoint = place.geometry.viewport.getNorthEast();
        var radius = google.maps.geometry.spherical.computeDistanceBetween(swPoint, nePoint);
        for(ir = 1; ir < (distArray.length + 1); ir++){
            if (radius > distArray[ir]) searchRadius = ir;
        }

        google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
            var swPoint = map.getBounds().getSouthWest();
            var nePoint = map.getBounds().getNorthEast();
            var radius = google.maps.geometry.spherical.computeDistanceBetween(swPoint, nePoint);
    
        });
    

    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }

    placeMarker(place.geometry.location, searchRadius, initPan);
    //triggerPan(function(){});

}
  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  //autocomplete.addListener('place_changed', fillInAddress); WEL DOEN


// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}



// functions
function triggerPan(callback) {
    google.maps.event.trigger(panorama, 'resize');
    google.maps.event.trigger(map, 'resize');
    $('#loading').hide();
    
  /*  panorama.setPov({
        heading: panorama.getPov().heading + 0.02,
        zoom: panorama.getPov().zoom,
        pitch: panorama.getPov().pitch
    });
*/
    setTimeout(function() {
    	// on start panorama does not exist
		if (panorama) {
	        panorama.setPov({
	            heading: panorama.getPov().heading - 0.02,
	            zoom: panorama.getPov().zoom,
	            pitch: panorama.getPov().pitch
	        });
    	}
        google.maps.event.trigger(map, 'resize');
        // map.panTo(panorama.getPosition()); get Center just used. 
//        callback(); 

    }, 500);
    setTimeout(function() {
    	callback();
    }, 800);


}

function getHash() {
    var lat = panorama.getPosition().lat();
    var lng = panorama.getPosition().lng();
    var heading = panorama.getPov().heading;
    var pitch = panorama.getPov().pitch;
    var panzoom = panorama.getPov().zoom;
    var mapzoom = map.getZoom();
    var satmap = (map.getMapTypeId() == "roadmap") ? '.' : '_'; 
    lat = Math.round(lat*1000000).toString(36);             // 4-5
    lng = Math.round(lng*1000000).toString(36);                // 4-5
    heading = Math.round(heading).toString(36);                 // 1-2
    pitch = Math.round(pitch).toString(36);                     // 1-2

    panzoom = Math.round(panzoom*10).toString(36);             
    mapzoom = Math.round(mapzoom).toString(36);
    var splitpos = getPanePerc();
    var thehash = lat + '_' + lng + '_' + heading + satmap + panzoom + '_' + pitch + '' + mapzoom + '' + splitpos;
    return thehash; 
}

var firstChange = true;

function updateHash() {
  //  if(history.pushState) {
    if (Modernizr.history) {
    


        var thehash = getHash();
        if (firstChange) {
            history.pushState(null, null, '#'+thehash);
            firstChange = false;
        } else {
            history.replaceState(null, null, '#'+thehash);
        } 
    } 
}

function openShareMenu() {
    var thehash = getHash();
    updateHash();
    map.setCenter( panorama.getPosition());   
    var address = $('#address span').html();
    var permurl = 'https://showmystreet.com/#'+thehash;
    var permurl2 = 'https%3A%2F%2Fshowmystreet.com%2F%23'+thehash;
   // permurl2 = '';
    $('#sharelink').val(permurl); 
    $('#permalink').attr('href', permurl);
    $('#twitterurl').attr('href', 'https://twitter.com/share?url='+permurl2+'&text='+encodeURIComponent('#map #streetview of ' + address.truncleft(72, true)) + '&via=ShowMyStreet');
    $('#facebookurl').attr('href', 'https://www.facebook.com/sharer.php?u='+permurl2+'&t='+encodeURIComponent('showmystreet.com: ' + address));
    $('#whatsappurl').attr('href', 'https://wa.me/?text='+permurl2);

    var subject = 'map streetview of ' + address;
    var emailBody = 'Hi,%0D%0A%0D%0AHave a look at this map %26 streetview of ' + encodeURIComponent(address) + ':%0D%0Ahttps%3A%2F%2Fshowmystreet.com%2F%23' + thehash + '%0D%0A%0D%0ACiao!';

    $('#emailurl').attr('href', 'mailto:?subject=' + subject + '&body=' + emailBody);
 // });



}


$('#switchmap').on('click', toggleStreetView).hover(function() {
  $('#switchmap_hover').show();
}, function () {
  $('#switchmap_hover').hide(); 
});


function toggleStreetView() {
    var centerBeforeMove = map.getCenter(); 
    if (mainview == 'map') {
        swap($("#map_canvas"), $("#pano_canvas"));
			$('#small').append( $('#loading') );
			mainview = 'pano';
			zoom('map','out');
        $('#switchmap_hover span').text('map');
    } else {
			swap($("#map_canvas"), $("#pano_canvas"));
			mainview = 'map';
			zoom('map','in');
			$('#big').append( $('#loading') );
			$('#switchmap_hover span').text('street');


    }
	triggerPan(function(){map.panTo(centerBeforeMove);});

//    setTimeout(triggerPan(function(){}), 5);
}



$('#switchToSms').on('click', function() {



});


$('#overlay_invisible').on('click', function(){
$('#countdown-inner').stop().css({'margin-top': '-150px'});
  $('autocomplete-suggestions').hide();
  $('#searchinput').blur();
  $(this).hide();
});



function setMode(modus) {
	var centerBeforeMove = map.getCenter(); 

	if (modus == 'sms') {
		$('body').addClass('sms');
		mainview = 'pano';
		$('#big').append( $('#pano_canvas') );
		$('#small').append( $('#map_canvas') );
		$('#small').append( $('#loading') );
		$('#ctlLower,#ctlUpper').hide();
		$('#menulist_splitscreen input').prop('checked', false);
	} else if (modus == 'split') {
		$('body').removeClass('sms')
		mainview = 'split';
		$('#ctlLower').append( $('#pano_canvas') ).show();
		$('#ctlUpper').append( $('#map_canvas') ).show();
		$('#ctlUpper').append( $('#loading') );
		$('#menulist_splitscreen input').prop('checked', true);
	}
	triggerPan(function(){map.panTo(centerBeforeMove);});

}

function initMode() {

// some if statement, media queries determine mobile? timing always good also cross-browser ?
	if (window.matchMedia('(max-width: 849px)').matches) {
        setMode('split');
	} else {
        setMode('split');
	}


}

initMode();

var centerBeforeMove;



$('#menulist_instantsearch, #menulist_instantsearch input').on('click', function(){
	if ($('#menulist_instantsearch input').is(':checked')) {
		instantsearch = false;
		instantdelay = 2500;

		$('#menulist_instantsearch input').prop('checked', false);
	} else {
		instantsearch = true;
		instantdelay = 600;



		$('#menulist_instantsearch input').prop('checked', true);

	}


});

$('#menulist_splitscreen, #menulist_splitscreen input').on('click', function(){

	centerBeforeMove = map.getCenter(); 
log (centerBeforeMove);
	$('#overlay').hide();
	$('#overlay_upper').show().addClass('transp');
	$('#overlay_lower').show();
	if ($('#menulist_splitscreen input').is(':checked')) {
		$('body').addClass('sms');
		mainview = 'pano';
		$('#big').append( $('#pano_canvas') );
		$('#small').append( $('#map_canvas') );
		$('#small').append( $('#loading') );
		$('#ctlLower,#ctlUpper').hide();
		$('#menulist_splitscreen input').prop('checked', false);
	} else {
		$('body').removeClass('sms')
		mainview = 'split';

		$('#ctlLower').append( $('#pano_canvas') ).show();
		$('#ctlUpper').append( $('#map_canvas') ).show();
		$('#ctlUpper').append( $('#loading') );

		$('#menulist_splitscreen input').prop('checked', true);
	}
   
    //updateHash();
   //setTimeout(triggerPan(updateHash), 5);
	triggerPan(function(){map.panTo(centerBeforeMove);});


}); 






function urlize() {
    var lat = panorama.getPosition().lat();
    var lng = panorama.getPosition().lng();
    var heading = panorama.getPov().heading;
    var pitch = panorama.getPov().pitch;
    var panzoom = panorama.getPov().zoom;
    var mapzoom = map.getZoom();
    var satmap = (map.getMapTypeId() == "roadmap") ? '.' : '_'; 
    lat = Math.round(lat*1000000).toString(36);             // 4-5
    lng = Math.round(lng*1000000).toString(36);                // 4-5
    heading = Math.round(heading).toString(36);                 // 1-2
    pitch = Math.round(pitch).toString(36);                     // 1-2
    panzoom = Math.round(panzoom*10).toString(36);             
    mapzoom = Math.round(mapzoom).toString(36);
    var splitpos = getPanePerc();
    var thehash = lat + '_' + lng + '_' + heading + satmap + panzoom + '_' + pitch + '' + mapzoom + '' + splitpos;
    //return url;
    //var thehash = urlize();
    //window.location.hash = thehash;

    if(history.pushState) {
        history.replaceState(null, null, '#'+thehash);
    } else {
        window.location.hash = thehash;
    }


    map.setCenter( panorama.getPosition());   
    var address = $('#address span').html();
    var permurl = 'https://showmystreet.com/#'+thehash;
    var permurl2 = 'http%3A%2F%2Fshowmystreet.com%2F%23'+thehash;
   // permurl2 = '';

    $('#sharelink').val(permurl); 
    $('#permalink').attr('href', permurl);
    $('#twitterurl').attr('href', 'https://twitter.com/share?url='+permurl2+'&text='+encodeURIComponent('#map #streetview of ' + address.truncleft(72, true)) + '&via=ShowMyStreet');
   
    $('#facebookurl').attr('href', 'https://www.facebook.com/sharer.php?u='+permurl2+'&t='+encodeURIComponent('showmystreet.com: ' + address));
    $('#whatsappurl').attr('href', 'https://wa.me/?text='+permurl2);
}


function deurlize(string) {
    var result = [];
    var countsc = (string.match(/\.|\_/g) || []).length;
    if (string)

    // MapStreetView Way
	if (countsc == 4) {
	    string = string.replace(/^#/g, '');


	    var splitpos = string.substr(string.length - 2);
	    result.splitpos = parseInt(splitpos);
	    
	    string = string.substring(0, string.length - 2);


	    var mapzoom = string.substr(string.length - 1);
	    result.mapzoom = parseInt(mapzoom, 36);
	    
	    string = string.substring(0, string.length - 1);

	    if(string.indexOf('.') === -1) {
	        result.maptype = google.maps.MapTypeId.HYBRID;
	     } else {
	        result.maptype = google.maps.MapTypeId.ROADMAP;
	     }
	    string = string.replace(".", "_");
	    var url_parts = string.split(/[_]+/);
	    result.lat  = parseInt(url_parts[0], 36) / 1000000;
	    result.lng = parseInt(url_parts[1], 36) / 1000000;
	    result.heading = parseInt(url_parts[2], 36);
	    result.panzoom = parseInt(url_parts[3], 36) / 10;
	    result.pitch = parseInt(url_parts[4], 36);

	    // ShowMy Street
	} else if (countsc == 3) {
			var url_parts = string.split('_');
			var result = new Array();

		if (url_parts.length == 3) {
			result['streetview'] = false;
			result['lat']  = parseInt(url_parts[0], 36) / 1000000;
			result['lng'] = parseInt(url_parts[1], 36) / 1000000;
			result['mapzoom'] = parseInt(url_parts[2], 36);
		} else if (url_parts.length == 4) {
			result['streetview'] = true;
			result['viewstate'] = (parseInt(url_parts[0].substr(0,1), 10) == 0) ? false : true;
			result['lat']  = parseInt(url_parts[0].substr(1), 36) / 1000000;
			result['lng'] = parseInt(url_parts[1], 36) / 1000000;
			result['mapzoom'] = parseInt(url_parts[2].substr(0,1), 36);	
			result['heading'] = parseInt(url_parts[2].substr(1), 36);
			result['panzoom'] = parseInt(url_parts[3].substr(0,1), 36);
			result['pitch'] = parseInt(url_parts[3].substr(1), 36);	
		} 

	}

    if (isNaN(result.lat) || isNaN(result.lng) || isNaN(result.heading) || isNaN(result.panzoom) || isNaN(result.pitch) || isNaN(result.mapzoom)) {
        return false;
    }  else {
        return result;
    }
}

// http://stackoverflow.com/questions/1538681/how-to-call-fromlatlngtodivpixel-in-google-maps-api-v3/12026134#12026134

function fromLatLngToPixel(position) {
  var scale = Math.pow(2, map.getZoom());
  var proj = map.getProjection();
  var bounds = map.getBounds();

  var nw = proj.fromLatLngToPoint(
    new google.maps.LatLng(
      bounds.getNorthEast().lat(),
      bounds.getSouthWest().lng()
    ));
  var point = proj.fromLatLngToPoint(position);

  return new google.maps.Point(
    Math.floor((point.x - nw.x) * scale),
    Math.floor((point.y - nw.y) * scale));
}

function fromPixelToLatLng(pixel) {
  var scale = Math.pow(2, map.getZoom());
  var proj = map.getProjection();
  var bounds = map.getBounds();

  var nw = proj.fromLatLngToPoint(
    new google.maps.LatLng(
      bounds.getNorthEast().lat(),
      bounds.getSouthWest().lng()
    ));
  var point = new google.maps.Point();

  point.x = pixel.x / scale + nw.x;
  point.y = pixel.y / scale + nw.y;

  return proj.fromPointToLatLng(point);
}


// inits 


//    splitter = new splitScreen($("#ctlSplitter"), $("#ctlUpper"), $("#ctlLower"));
    splitPane('v2');
      
    // START TIMEOUTS
    if (Cookies.get('dragged') === undefined) {
        $('#ctlSplitter p').fadeIn();
    }


    setTimeout(function() {
    	if (!($('body').hasClass('sms'))){
        $('div.splitter').show();
     }
    }, 3800);



var mobileVersion = false;

$(window).on('breakpoint-change', function(e, breakpoint) {




    if(breakpoint === 'bp-small') {
        mobileVersion = true;
      //  panorama.set('addressControl', false);
//alert (mobileVersion);
    
        $('#up, #down').css('visibility','hidden');
    }

    /*if(breakpoint === 'bp-medium') {
    //    alert ('Medium');
    }*/

    if(breakpoint === 'bp-large') {
        mobileVersion = false;
        //panorama.set('addressControl', true);

        $('#up, #down').css('visibility','visible');


    }

});




}

// http://zerosixthree.se/detecting-media-queries-with-javascript/
var Z63 = (function (parent, $) {

    var MediaQueryListener = function() {
        this.afterElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
        this.currentBreakpoint = '';
        this.lastBreakpoint = '';
        this.init();
    };

    MediaQueryListener.prototype = {

        init: function () {
            var self = this;
            
            if(!self.afterElement) {
                return;
            }

            self._resizeListener();

        },
        _resizeListener: function () {
            var self = this;

            $(window).on('resize orientationchange load', function() {
                // Regexp for removing quotes added by various browsers
                self.currentBreakpoint = self.afterElement.getPropertyValue('content').replace(/^["']|["']$/g, '');
                
                if (self.currentBreakpoint !== self.lastBreakpoint) {
                    $(window).trigger('breakpoint-change', self.currentBreakpoint);
                    self.lastBreakpoint = self.currentBreakpoint;
                }
                
            });
        }

    };

    parent.mediaqueryListener = parent.mediaqueryListener || new MediaQueryListener();

    return parent;

}(Z63 || {}, jQuery));
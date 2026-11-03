Clazz.declarePackage("JSV.appletjs");
Clazz.load(["javajs.api.JSInterface", "JSV.api.AppletFrame", "$.JSVAppletInterface"], "JSV.appletjs.JSVApplet", ["java.net.URL", "java.util.Hashtable", "JU.PT", "JSV.app.JSVApp", "JSV.js2d.JsMainPanel", "$.JsPanel", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.app = null;
this.viewer = null;
this.isStandalone = false;
this.viewerOptions = null;
this.htParams = null;
Clazz.instantialize(this, arguments);}, JSV.appletjs, "JSVApplet", null, [JSV.api.JSVAppletInterface, JSV.api.AppletFrame, javajs.api.JSInterface]);
Clazz.makeConstructor(c$, 
function(viewerOptions){
if (viewerOptions == null) viewerOptions =  new java.util.Hashtable();
this.viewerOptions = viewerOptions;
this.htParams =  new java.util.Hashtable();
for (var entry, $entry = viewerOptions.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) this.htParams.put(entry.getKey().toLowerCase(), entry.getValue());

this.init();
}, "java.util.Map");
Clazz.defineMethod(c$, "init", 
function(){
this.app =  new JSV.app.JSVApp(this, true);
this.initViewer();
if (this.app.appletReadyCallbackFunctionName != null && this.viewer.fullName != null) this.callToJavaScript(this.app.appletReadyCallbackFunctionName,  Clazz.newArray(-1, [this.viewer.appletName, this.viewer.fullName, Boolean.TRUE, this]));
});
Clazz.defineMethod(c$, "initViewer", 
function(){
this.viewer = this.app.vwr;
this.setLogging();
this.viewerOptions.remove("debug");
var o = this.viewerOptions.get("display");
{
o = document.getElementById(o);
}this.viewer.setDisplay(o);
JU.Logger.info(this.getAppletInfo());
});
Clazz.defineMethod(c$, "setLogging", 
function(){
var iLevel = ((this.getValue("logLevel", (this.getBooleanValue("debug", false) ? "5" : "4"))).charAt(0)).charCodeAt(0) - 48;
if (iLevel != 4) System.out.println("setting logLevel=" + iLevel + " -- To change, use script \"set logLevel [0-5]\"");
JU.Logger.setLogLevel(iLevel);
});
Clazz.defineMethod(c$, "getParameter", 
function(paramName){
var o = this.htParams.get(paramName.toLowerCase());
return (o == null ? null : o.toString());
}, "~S");
Clazz.defineMethod(c$, "getBooleanValue", 
function(propertyName, defaultValue){
var value = this.getValue(propertyName, defaultValue ? "true" : "");
return (value.equalsIgnoreCase("true") || value.equalsIgnoreCase("on") || value.equalsIgnoreCase("yes"));
}, "~S,~B");
Clazz.defineMethod(c$, "getValue", 
function(propertyName, defaultValue){
var stringValue = this.getParameter(propertyName);
System.out.println("getValue " + propertyName + " = " + stringValue);
if (stringValue != null) return stringValue;
return defaultValue;
}, "~S,~S");
Clazz.overrideMethod(c$, "isPro", 
function(){
return this.app.isPro();
});
Clazz.overrideMethod(c$, "isSigned", 
function(){
return this.app.isSigned();
});
Clazz.overrideMethod(c$, "destroy", 
function(){
this.app.dispose();
this.app = null;
});
Clazz.defineMethod(c$, "getParameter", 
function(key, def){
return this.isStandalone ? System.getProperty(key, def) : (this.getParameter(key) != null ? this.getParameter(key) : def);
}, "~S,~S");
Clazz.overrideMethod(c$, "getAppletInfo", 
function(){
return JSV.app.JSVApp.getAppletInfo();
});
Clazz.overrideMethod(c$, "getSolnColour", 
function(){
return this.app.getSolnColour();
});
Clazz.overrideMethod(c$, "getCoordinate", 
function(){
return this.app.getCoordinate();
});
Clazz.overrideMethod(c$, "loadInline", 
function(data){
this.app.loadInline(data);
}, "~S");
Clazz.defineMethod(c$, "$export", 
function(type, n){
return this.app.exportSpectrum(type, n);
}, "~S,~N");
Clazz.overrideMethod(c$, "exportSpectrum", 
function(type, n){
return this.app.exportSpectrum(type, n);
}, "~S,~N");
Clazz.overrideMethod(c$, "setFilePath", 
function(tmpFilePath){
this.app.setFilePath(tmpFilePath);
}, "~S");
Clazz.overrideMethod(c$, "setSpectrumNumber", 
function(i){
this.app.setSpectrumNumber(i);
}, "~N");
Clazz.overrideMethod(c$, "toggleGrid", 
function(){
this.app.toggleGrid();
});
Clazz.overrideMethod(c$, "toggleCoordinate", 
function(){
this.app.toggleCoordinate();
});
Clazz.overrideMethod(c$, "togglePointsOnly", 
function(){
this.app.togglePointsOnly();
});
Clazz.overrideMethod(c$, "toggleIntegration", 
function(){
this.app.toggleIntegration();
});
Clazz.overrideMethod(c$, "addHighlight", 
function(x1, x2, r, g, b, a){
this.app.addHighlight(x1, x2, r, g, b, a);
}, "~N,~N,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "removeAllHighlights", 
function(){
this.app.removeAllHighlights();
});
Clazz.overrideMethod(c$, "removeHighlight", 
function(x1, x2){
this.app.removeHighlight(x1, x2);
}, "~N,~N");
Clazz.overrideMethod(c$, "reversePlot", 
function(){
this.app.reversePlot();
});
Clazz.defineMethod(c$, "script", 
function(script){
this.app.initParams(script);
}, "~S");
Clazz.overrideMethod(c$, "runScript", 
function(script){
this.app.runScript(script);
}, "~S");
Clazz.overrideMethod(c$, "syncScript", 
function(peakScript){
this.app.syncScript(peakScript);
}, "~S");
Clazz.overrideMethod(c$, "writeStatus", 
function(msg){
this.app.writeStatus(msg);
}, "~S");
Clazz.overrideMethod(c$, "getPropertyAsJavaObject", 
function(key){
return this.app.getPropertyAsJavaObject(key);
}, "~S");
Clazz.overrideMethod(c$, "getPropertyAsJSON", 
function(key){
return this.app.getPropertyAsJSON(key);
}, "~S");
Clazz.overrideMethod(c$, "runScriptNow", 
function(script){
return this.app.runScriptNow(script);
}, "~S");
Clazz.overrideMethod(c$, "print", 
function(fileName){
return this.app.print(fileName);
}, "~S");
Clazz.overrideMethod(c$, "setDropTargetListener", 
function(isSigned, viewer){
}, "~B,JSV.common.JSViewer");
Clazz.overrideMethod(c$, "validateContent", 
function(mode){
}, "~N");
Clazz.overrideMethod(c$, "createMainPanel", 
function(viewer){
viewer.mainPanel =  new JSV.js2d.JsMainPanel();
}, "JSV.common.JSViewer");
Clazz.overrideMethod(c$, "newWindow", 
function(isSelected){
}, "~B");
Clazz.overrideMethod(c$, "callToJavaScript", 
function(callback, data){
var tokens = JU.PT.split(callback, ".");
{
try{
var o = window[tokens[0]]
for (var i = 1; i < tokens.length; i++){
o = o[tokens[i]]
}
return o(data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9]);
} catch (e) {
System.out.println(callback + " failed " + e);
}
}}, "~S,~A");
Clazz.overrideMethod(c$, "setPanelVisible", 
function(b){
}, "~B");
Clazz.overrideMethod(c$, "getJSVPanel", 
function(viewer, specs){
return (specs == null ? JSV.js2d.JsPanel.getEmptyPanel(viewer) : JSV.js2d.JsPanel.getPanelMany(viewer, specs));
}, "JSV.common.JSViewer,JU.Lst");
Clazz.overrideMethod(c$, "getDocumentBase", 
function(){
try {
return  new java.net.URL(Clazz.castNullAs("java.net.URL"), this.viewerOptions.get("documentBase"), null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});
Clazz.overrideMethod(c$, "repaint", 
function(){
});
Clazz.overrideMethod(c$, "validate", 
function(){
});
Clazz.overrideMethod(c$, "doExitJmol", 
function(){
});
Clazz.overrideMethod(c$, "getApp", 
function(){
return this.app;
});
Clazz.overrideMethod(c$, "setStatusDragDropped", 
function(mode, x, y, fileName, retType){
return true;
}, "~N,~N,~N,~S,~A");
Clazz.overrideMethod(c$, "cacheFileByName", 
function(fileName, isAdd){
return 0;
}, "~S,~B");
Clazz.overrideMethod(c$, "cachePut", 
function(key, data){
}, "~S,~O");
Clazz.overrideMethod(c$, "getFullName", 
function(){
return this.app.vwr.fullName;
});
Clazz.overrideMethod(c$, "processMouseEvent", 
function(id, x, y, modifiers, time){
return this.app.vwr.processMouseEvent(id, x, y, modifiers, time);
}, "~N,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "setDisplay", 
function(canvas){
this.app.vwr.setDisplay(canvas);
}, "~O");
Clazz.overrideMethod(c$, "startHoverWatcher", 
function(enable){
}, "~B");
Clazz.overrideMethod(c$, "update", 
function(){
this.app.vwr.updateJS();
});
Clazz.defineMethod(c$, "openFile", 
function(fileName){
this.app.vwr.openFile(fileName, true);
return null;
}, "~S");
Clazz.overrideMethod(c$, "openFileAsyncSpecial", 
function(fileName, flags){
this.app.vwr.openFileAsyncSpecial(fileName, flags);
}, "~S,~N");
Clazz.overrideMethod(c$, "openFileAsyncSpecialType", 
function(fileName, flags, type){
this.openFileAsyncSpecial(fileName, flags);
}, "~S,~N,~S");
Clazz.overrideMethod(c$, "processTwoPointGesture", 
function(touches){
this.app.vwr.processTwoPointGesture(touches);
}, "~A");
Clazz.overrideMethod(c$, "setScreenDimension", 
function(width, height){
this.app.vwr.setScreenDimension(width, height);
}, "~N,~N");
Clazz.overrideMethod(c$, "checkScript", 
function(script){
var s = this.app.checkScript(script);
if (s != null) System.out.println(s);
return s;
}, "~S");
Clazz.overrideMethod(c$, "processKeyEvent", 
function(event){
}, "~O");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVAppletInterface");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "AppletFrame");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("javajs.api");
Clazz.declareInterface(javajs.api, "JSInterface");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("java.net");
Clazz.load(["java.util.Hashtable"], "java.net.URL", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.protocol = null;
this.host = null;
this.port = -1;
this.file = null;
this.query = null;
this.authority = null;
this.path = null;
this.userInfo = null;
this.ref = null;
this.handler = null;
this.$hashCode = -1;
Clazz.instantialize(this, arguments);}, java.net, "URL", null);
Clazz.makeConstructor(c$, 
function(context, spec, handler){
{
switch (arguments.length) {
case 1:
spec = context;context = handler = null;
break;
case 2:
handler = null;
break;
case 3:
if (context == null || Clazz.instanceOf(context, java.net.URL))
break;
default:
alert("java.net.URL constructor format not supported");
break;
}
context && context.valueOf && context.valueOf() == null && (context = null);
}var original = spec;
var i;
var limit;
var c;
var start = 0;
var newProtocol = null;
var aRef = false;
var isRelative = false;
try {
limit = spec.length;
while ((limit > 0) && (spec.charAt(limit - 1) <= ' ')) {
limit--;
}
while ((start < limit) && (spec.charAt(start) <= ' ')) {
start++;
}
if (spec.regionMatches(true, start, "url:", 0, 4)) {
start += 4;
}if (start < spec.length && spec.charAt(start) == '#') {
aRef = true;
}for (i = start; !aRef && (i < limit) && ((c = (spec.charAt(i)).charCodeAt(0)) != 47); i++) {
if (c == 58) {
var s = spec.substring(start, i).toLowerCase();
if (this.isValidProtocol(s)) {
newProtocol = s;
start = i + 1;
}break;
}}
this.protocol = newProtocol;
if ((context != null) && ((newProtocol == null) || newProtocol.equalsIgnoreCase(context.protocol))) {
if (handler == null) {
handler = context.handler;
}if (context.path != null && context.path.startsWith("/")) newProtocol = null;
if (newProtocol == null) {
this.protocol = context.protocol;
this.authority = context.authority;
this.userInfo = context.userInfo;
this.host = context.host;
this.port = context.port;
this.file = context.file;
this.path = context.path;
isRelative = true;
}}if (this.protocol == null) {
throw  new java.net.MalformedURLException("no protocol: " + original);
}if (handler == null && (handler = java.net.URL.getURLStreamHandler(this.protocol)) == null) {
throw  new java.net.MalformedURLException("unknown protocol: " + this.protocol);
}this.handler = handler;
i = spec.indexOf('#', start);
if (i >= 0) {
this.ref = spec.substring(i + 1, limit);
limit = i;
}if (isRelative && start == limit) {
this.query = context.query;
if (this.ref == null) {
this.ref = context.ref;
}}handler.parseURL(this, spec, start, limit);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
throw e;
}
} else if (Clazz.exceptionOf(e$$, Exception)){
var e = e$$;
{
var exception =  new java.net.MalformedURLException(e.getMessage());
exception.initCause(e);
throw exception;
}
} else {
throw e$$;
}
}
}, "java.net.URL,~S,java.net.URLStreamHandler");
Clazz.defineMethod(c$, "isValidProtocol", 
function(protocol){
var len = protocol.length;
if (len < 1) return false;
var c = protocol.charAt(0);
if (!Character.isLetter(c)) return false;
for (var i = 1; i < len; i++) {
c = protocol.charAt(i);
if (!Character.isLetterOrDigit(c) && c != '.' && c != '+' && c != '-') {
return false;
}}
return true;
}, "~S");
Clazz.defineMethod(c$, "set5", 
function(protocol, host, port, file, ref){
{
this.protocol = protocol;
this.host = host;
this.authority = port == -1 ? host : host + ":" + port;
this.port = port;
this.file = file;
this.ref = ref;
this.$hashCode = -1;
var q = file.lastIndexOf('?');
if (q != -1) {
this.query = file.substring(q + 1);
this.path = file.substring(0, q);
} else this.path = file;
}}, "~S,~S,~N,~S,~S");
Clazz.defineMethod(c$, "set", 
function(protocol, host, port, authority, userInfo, path, query, ref){
{
this.protocol = protocol;
this.host = host;
this.port = port;
this.file = query == null ? path : path + "?" + query;
this.userInfo = userInfo;
this.path = path;
this.ref = ref;
this.$hashCode = -1;
this.query = query;
this.authority = authority;
}}, "~S,~S,~N,~S,~S,~S,~S,~S");
Clazz.defineMethod(c$, "getQuery", 
function(){
return this.query;
});
Clazz.defineMethod(c$, "getPath", 
function(){
return this.path;
});
Clazz.defineMethod(c$, "getUserInfo", 
function(){
return this.userInfo;
});
Clazz.defineMethod(c$, "getAuthority", 
function(){
return this.authority;
});
Clazz.defineMethod(c$, "getPort", 
function(){
return this.port;
});
Clazz.defineMethod(c$, "getDefaultPort", 
function(){
return this.handler.getDefaultPort();
});
Clazz.defineMethod(c$, "getProtocol", 
function(){
return this.protocol;
});
Clazz.defineMethod(c$, "getHost", 
function(){
return this.host;
});
Clazz.defineMethod(c$, "getFile", 
function(){
return this.file;
});
Clazz.defineMethod(c$, "getRef", 
function(){
return this.ref;
});
Clazz.overrideMethod(c$, "equals", 
function(obj){
if (!(Clazz.instanceOf(obj,"java.net.URL"))) return false;
var u2 = obj;
return this.handler.equals2(this, u2);
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
if (this.$hashCode != -1) return this.$hashCode;
this.$hashCode = this.handler.hashCode(this);
return this.$hashCode;
});
Clazz.defineMethod(c$, "sameFile", 
function(other){
return this.handler.sameFile(this, other);
}, "java.net.URL");
Clazz.overrideMethod(c$, "toString", 
function(){
return this.toExternalForm();
});
Clazz.defineMethod(c$, "toExternalForm", 
function(){
return this.handler.toExternalForm(this);
});
Clazz.defineMethod(c$, "openConnection", 
function(){
return this.handler.openConnection(this);
});
Clazz.defineMethod(c$, "openStream", 
function(){
return this.openConnection().getInputStream();
});
Clazz.defineMethod(c$, "getContent", 
function(){
return this.openConnection().getInputStream();
});
c$.setURLStreamHandlerFactory = Clazz.defineMethod(c$, "setURLStreamHandlerFactory", 
function(fac){
{
if (java.net.URL.factory != null) {
throw  new Error("factory already defined");
}var security = System.getSecurityManager();
if (security != null) {
security.checkSetFactory();
}java.net.URL.handlers.clear();
java.net.URL.factory = fac;
}}, "java.net.URLStreamHandlerFactory");
c$.getURLStreamHandler = Clazz.defineMethod(c$, "getURLStreamHandler", 
function(protocol){
var handler = java.net.URL.handlers.get(protocol);
if (handler == null) {
if (java.net.URL.factory != null) {
handler = java.net.URL.factory.createURLStreamHandler(protocol);
}}return handler;
}, "~S");
c$.factory = null;
c$.handlers =  new java.util.Hashtable();
c$.streamHandlerLock =  new Clazz._O();
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.AbstractCollection", "$.AbstractSet", "$.Dictionary", "$.Enumeration", "$.Iterator", "$.Map"], "java.util.Hashtable", ["java.util.Collections"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.table = null;
this.count = 0;
this.threshold = 0;
this.loadFactor = 0;
this.modCount = 0;
this.$keySet = null;
this.$entrySet = null;
this.$values = null;
this.__m = null;
this.__allowJS = false;
Clazz.instantialize(this, arguments);}, java.util, "Hashtable", java.util.Dictionary, [java.util.Map, Cloneable]);
Clazz.makeConstructor(c$, 
function(){
this.initHT();
});
Clazz.defineMethod(c$, "initHT", 
function(){
var map = null;
var capacity = 11;
var loadFactor = 0.75;
{
capacity = arguments[0];
loadFactor = arguments[1];
if (typeof capacity == "object") {
map = capacity;
capacity = Math.max(2*t.size(), 11);
this.__allowJS = map.__allowJS;
} else {
this.__allowJS = true;
}
capacity = (capacity || 11);
loadFactor = (loadFactor || 0.75);
}if (capacity < 0) throw  new IllegalArgumentException("Illegal Capacity: " + capacity);
if (loadFactor <= 0 || Float.isNaN(loadFactor)) throw  new IllegalArgumentException("Illegal Load: " + loadFactor);
if (capacity == 0) capacity = 1;
this.loadFactor = loadFactor;
this.table =  new Array(capacity);
this.threshold = Clazz.floatToInt(Math.min(capacity * loadFactor, 2147483640));
this.__setJS();
if (map != null) this.putAll(map);
});
Clazz.overrideMethod(c$, "size", 
function(){
var c = this.count;
{
c = this.__m && this.__m.size || c;
}return c;
});
Clazz.overrideMethod(c$, "isEmpty", 
function(){
return this.size() == 0;
});
Clazz.overrideMethod(c$, "keys", 
function(){
return this.getEnumeration(0);
});
Clazz.overrideMethod(c$, "elements", 
function(){
return this.getEnumeration(1);
});
Clazz.defineMethod(c$, "contains", 
function(value){
if (value == null) {
throw  new NullPointerException();
}if (this.size() == 0) return false;
if (java.util.Hashtable.__isSimple(this)) {
var m = this.__m;
{
var iter = m.values();
for (var n = iter.next(); !n.done; n = iter.next()) {
if (n.value == value || n.value.equals(value)) {
return true;
}
}
}} else {
var tab = this.table;
for (var i = tab.length; i-- > 0; ) {
for (var e = tab[i]; e != null; e = e.next_) {
if (e.value.equals(value)) {
return true;
}}
}
}return false;
}, "~O");
Clazz.overrideMethod(c$, "containsValue", 
function(value){
return this.contains(value);
}, "~O");
Clazz.overrideMethod(c$, "containsKey", 
function(key){
switch (java.util.Hashtable.__hasKey(this, key)) {
case 0:
break;
case 1:
java.util.Hashtable.__ensureJavaMap(this);
break;
case 2:
return false;
case 3:
return true;
}
var tab = this.table;
var hash = key.hashCode();
var index = (hash & 0x7FFFFFFF) % tab.length;
for (var e = tab[index]; e != null; e = e.next_) {
if ((e.hash == hash) && e.key.equals(key)) {
return true;
}}
return false;
}, "~O");
Clazz.overrideMethod(c$, "get", 
function(key){
if (key == null) return null;
switch (java.util.Hashtable.__hasKey(this, key)) {
case 0:
break;
case 1:
java.util.Hashtable.__ensureJavaMap(this);
break;
case 2:
return null;
case 3:
var v = null;
{
v = this.__m.get(key);
}return v;
}
var tab = this.table;
var hash = key.hashCode();
var index = (hash & 0x7FFFFFFF) % tab.length;
for (var e = tab[index]; e != null; e = e.next_) {
if ((e.hash == hash) && e.key.equals(key)) {
return e.value;
}}
return null;
}, "~O");
Clazz.defineMethod(c$, "rehash", 
function(){
var oldCapacity = this.table.length;
var oldMap = this.table;
var newCapacity = (oldCapacity << 1) + 1;
if (newCapacity - 2147483639 > 0) {
if (oldCapacity == 2147483639) return;
newCapacity = 2147483639;
}var newMap =  new Array(newCapacity);
this.modCount++;
this.threshold = Clazz.floatToInt(Math.min(newCapacity * this.loadFactor, 2147483640));
this.table = newMap;
for (var i = oldCapacity; i-- > 0; ) {
for (var old = oldMap[i]; old != null; ) {
var e = old;
old = old.next_;
var index = (e.hash & 0x7FFFFFFF) % newCapacity;
e.next_ = newMap[index];
newMap[index] = e;
}
}
});
Clazz.defineMethod(c$, "addEntry", 
function(hash, key, value, index){
this.modCount++;
var tab = this.table;
if (this.count >= this.threshold) {
this.rehash();
tab = this.table;
hash = key.hashCode();
index = (hash & 0x7FFFFFFF) % tab.length;
}var e = tab[index];
tab[index] =  new java.util.Hashtable.Entry(hash, key, value, e);
this.count++;
}, "~N,~O,~O,~N");
Clazz.overrideMethod(c$, "put", 
function(key, value){
if (value == null) {
throw  new NullPointerException();
}switch (java.util.Hashtable.__hasKey(this, key)) {
case 0:
break;
case 1:
java.util.Hashtable.__ensureJavaMap(this);
break;
case 2:
{
this.__m.set(key, value);
}++this.modCount;
return null;
case 3:
var v0 = null;
{
v0 = this.__m.get(key);
this.__m.set(key, value);
}++this.modCount;
return v0;
}
var tab = this.table;
var hash = key.hashCode();
var index = (hash & 0x7FFFFFFF) % tab.length;
var entry = tab[index];
for (; entry != null; entry = entry.next_) {
if ((entry.hash == hash) && entry.key.equals(key)) {
var old = entry.value;
entry.value = value;
return old;
}}
this.addEntry(hash, key, value, index);
return null;
}, "~O,~O");
Clazz.overrideMethod(c$, "remove", 
function(key){
if (key == null) throw  new NullPointerException("Hashtable key may not be null");
switch (java.util.Hashtable.__hasKey(this, key)) {
case 0:
break;
case 1:
java.util.Hashtable.__ensureJavaMap(this);
break;
case 2:
return null;
case 3:
var v0 = null;
{
v0 = this.__m.get(key); this.__m["delete"](key);
}++this.modCount;
return v0;
}
var tab = this.table;
var hash = key.hashCode();
var index = (hash & 0x7FFFFFFF) % tab.length;
var e = tab[index];
for (var prev = null; e != null; prev = e, e = e.next_) {
if ((e.hash == hash) && e.key.equals(key)) {
this.modCount++;
if (prev != null) {
prev.next_ = e.next_;
} else {
tab[index] = e.next_;
}this.count--;
var oldValue = e.value;
e.value = null;
return oldValue;
}}
return null;
}, "~O");
Clazz.overrideMethod(c$, "putAll", 
function(t){
var key = null;
var value = null;
if (java.util.Hashtable.__isSimple(t)) {
var me = this;
{
t.__m.forEach(function(value, key) { me.put(key, value); })
}return;
}for (var e, $e = t.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) this.put(e.getKey(), e.getValue());

}, "java.util.Map");
Clazz.overrideMethod(c$, "clear", 
function(){
var tab = this.table;
this.modCount++;
if (java.util.Hashtable.__isSimple(this)) {
{
this.__m.clear();
}}this.__setJS();
for (var index = tab.length; --index >= 0; ) tab[index] = null;

this.count = 0;
});
Clazz.defineMethod(c$, "clone", 
function(){
try {
var t = Clazz.superCall(this, java.util.Hashtable, "clone", []);
t.table =  new Array(this.table.length);
for (var i = this.table.length; i-- > 0; ) {
t.table[i] = (this.table[i] != null) ? this.table[i].clone() : null;
}
t.$keySet = null;
t.$entrySet = null;
t.$values = null;
t.modCount = 0;
if (java.util.Hashtable.__isSimple(this)) {
t.__setJS();
var me = this;
{
me.__m.forEach(function(value, key) {
t.__m.set(key, value); t.modCount++;
});
}} else {
t.__m = null;
}return t;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw  new InternalError(e);
} else {
throw e;
}
}
});
Clazz.overrideMethod(c$, "toString", 
function(){
var max = this.size() - 1;
if (max == -1) return "{}";
var it = this.entrySet().iterator();
var sb = "{";
for (var i = 0; ; i++) {
var e = it.next();
var key = e.getKey();
var value = e.getValue();
sb += (key === this ? "(this Map)" : key.toString());
sb += "=";
sb += (value === this ? "(this Map)" : value.toString());
if (i == max) return sb + '}';
sb += ", ";
}
});
Clazz.overrideMethod(c$, "equals", 
function(o){
if (o === this) return true;
if (!(Clazz.instanceOf(o,"java.util.Map"))) return false;
var t = o;
if (t.size() != this.size()) return false;
try {
var i = this.entrySet().iterator();
while (i.hasNext()) {
var e = i.next();
var key = e.getKey();
var value = e.getValue();
if (value == null) {
if (!(t.get(key) == null && t.containsKey(key))) return false;
} else {
if (!value.equals(t.get(key))) return false;
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var unused = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$, NullPointerException)){
var unused = e$$;
{
return false;
}
} else {
throw e$$;
}
}
return true;
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
var h = 0;
if (this.count == 0 || this.loadFactor < 0) return h;
this.loadFactor = -this.loadFactor;
var tab = this.table;
for (var entry, $entry = 0, $$entry = tab; $entry < $$entry.length && ((entry = $$entry[$entry]) || true); $entry++) {
while (entry != null) {
h += entry.hashCode();
entry = entry.next_;
}
}
this.loadFactor = -this.loadFactor;
return h;
});
Clazz.defineMethod(c$, "getEnumeration", 
function(type){
if (this.size() == 0) {
return java.util.Collections.emptyEnumeration();
} else {
return  new java.util.Hashtable.Enumerator(this, type, false);
}}, "~N");
Clazz.defineMethod(c$, "getIterator", 
function(type){
if (this.size() == 0) {
return java.util.Collections.emptyIterator();
} else {
return  new java.util.Hashtable.Enumerator(this, type, true);
}}, "~N");
Clazz.overrideMethod(c$, "keySet", 
function(){
if (this.$keySet == null) this.$keySet =  new java.util.Hashtable.KeySet(this);
return this.$keySet;
});
Clazz.overrideMethod(c$, "entrySet", 
function(){
if (this.$entrySet == null) this.$entrySet =  new java.util.Hashtable.EntrySet(this);
return this.$entrySet;
});
Clazz.overrideMethod(c$, "values", 
function(){
if (this.$values == null) this.$values =  new java.util.Hashtable.ValueCollection(this);
return this.$values;
});
Clazz.defineMethod(c$, "__setJS", 
function(){
if (this.__allowJS && java.util.Hashtable.USE_SIMPLE) {
var m = null;
{
m = new Map();
}this.__m = m;
} else {
this.__m = null;
}});
c$.__get = Clazz.defineMethod(c$, "__get", 
function(map, key){
{
return map.__m.get(key == null ? null : key + "")
}}, "~O,~O");
c$.__set = Clazz.defineMethod(c$, "__set", 
function(map, key, value){
{
map.__m.set(key == null ? null : key + "", value)
}}, "java.util.Map,~O,~O");
c$.__hasKey = Clazz.defineMethod(c$, "__hasKey", 
function(map, key){
{
return (!map.__m ? 0 : key != null && typeof key != "string"
? 1 : map.__m.has(key) ? 3 : 2);
}}, "java.util.Map,~O");
c$.__isSimple = Clazz.defineMethod(c$, "__isSimple", 
function(map){
{
return !!map.__m;
}}, "java.util.Map");
c$.__ensureJavaMap = Clazz.defineMethod(c$, "__ensureJavaMap", 
function(map){
{
if (map.__m) {
var m = map.__m;
map.__m = null;
m.forEach(function(value, key){map.put(key, value);});
m.clear();
}
}}, "java.util.Map");
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.hash = 0;
this.key = null;
this.value = null;
this.next_ = null;
Clazz.instantialize(this, arguments);}, java.util.Hashtable, "Entry", null, java.util.Map.Entry);
Clazz.makeConstructor(c$, 
function(hash, key, value, next){
this.hash = hash;
this.key = key;
this.value = value;
this.next_ = next;
}, "~N,~O,~O,java.util.Hashtable.Entry");
Clazz.overrideMethod(c$, "clone", 
function(){
return  new java.util.Hashtable.Entry(this.hash, this.key, this.value, (this.next_ == null ? null : this.next_.clone()));
});
Clazz.overrideMethod(c$, "getKey", 
function(){
return this.key;
});
Clazz.overrideMethod(c$, "getValue", 
function(){
return this.value;
});
Clazz.overrideMethod(c$, "setValue", 
function(value){
if (value == null) throw  new NullPointerException();
var oldValue = this.value;
this.value = value;
return oldValue;
}, "~O");
Clazz.overrideMethod(c$, "equals", 
function(o){
if (!(Clazz.instanceOf(o,"java.util.Map.Entry"))) return false;
var e = o;
return (this.key == null ? e.getKey() == null : this.key.equals(e.getKey())) && (this.value == null ? e.getValue() == null : this.value.equals(e.getValue()));
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
return this.hash ^ (this.value == null ? 0 : this.value.hashCode());
});
Clazz.defineMethod(c$, "toString", 
function(){
return this.key.toString() + "=" + this.value.toString();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.ht = null;
Clazz.instantialize(this, arguments);}, java.util.Hashtable, "KeySet", java.util.AbstractSet);
Clazz.makeConstructor(c$, 
function(ht){
Clazz.superConstructor (this, java.util.Hashtable.KeySet, []);
this.ht = ht;
}, "java.util.Hashtable");
Clazz.overrideMethod(c$, "iterator", 
function(){
return this.ht.getIterator(0);
});
Clazz.overrideMethod(c$, "size", 
function(){
return this.ht.size();
});
Clazz.overrideMethod(c$, "contains", 
function(o){
return this.ht.containsKey(o);
}, "~O");
Clazz.overrideMethod(c$, "remove", 
function(o){
return this.ht.remove(o) != null;
}, "~O");
Clazz.overrideMethod(c$, "clear", 
function(){
this.ht.clear();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.ht = null;
Clazz.instantialize(this, arguments);}, java.util.Hashtable, "EntrySet", java.util.AbstractSet);
Clazz.makeConstructor(c$, 
function(ht){
Clazz.superConstructor (this, java.util.Hashtable.EntrySet, []);
this.ht = ht;
}, "java.util.Hashtable");
Clazz.overrideMethod(c$, "iterator", 
function(){
return this.ht.getIterator(2);
});
Clazz.overrideMethod(c$, "contains", 
function(o){
if (!(Clazz.instanceOf(o,"java.util.Map.Entry"))) return false;
var entry = o;
var key = entry.getKey();
switch (java.util.Hashtable.__hasKey(this.ht, key)) {
case 0:
break;
case 1:
java.util.Hashtable.__ensureJavaMap(this.ht);
break;
case 3:
var value = entry.getValue();
var v = this.ht.get(key);
return (value === v || value != null && value.equals(key));
case 2:
return false;
}
var tab = this.ht.table;
var hash = key.hashCode();
var index = (hash & 0x7FFFFFFF) % tab.length;
for (var e = tab[index]; e != null; e = e.next_) if (e.hash == hash && e.equals(entry)) return true;

return false;
}, "~O");
Clazz.overrideMethod(c$, "remove", 
function(o){
if (!(Clazz.instanceOf(o,"java.util.Map.Entry"))) return false;
var entry = o;
var key = entry.getKey();
switch (java.util.Hashtable.__hasKey(this.ht, key)) {
case 0:
break;
case 1:
java.util.Hashtable.__ensureJavaMap(this.ht);
break;
case 3:
var value = entry.getValue();
if (value == null) return false;
var v = this.ht.get(key);
if (v === value || v.equals(value)) {
this.ht.remove(key);
return true;
}return false;
case 2:
return false;
}
var tab = this.ht.table;
var hash = key.hashCode();
var index = (hash & 0x7FFFFFFF) % tab.length;
var e = tab[index];
for (var prev = null; e != null; prev = e, e = e.next_) {
if (e.hash == hash && e.equals(entry)) {
this.ht.modCount++;
if (prev != null) prev.next_ = e.next_;
 else tab[index] = e.next_;
this.ht.count--;
e.value = null;
return true;
}}
return false;
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.ht.size();
});
Clazz.overrideMethod(c$, "clear", 
function(){
this.ht.clear();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.ht = null;
Clazz.instantialize(this, arguments);}, java.util.Hashtable, "ValueCollection", java.util.AbstractCollection);
Clazz.makeConstructor(c$, 
function(ht){
Clazz.superConstructor (this, java.util.Hashtable.ValueCollection, []);
this.ht = ht;
}, "java.util.Hashtable");
Clazz.overrideMethod(c$, "iterator", 
function(){
return this.ht.getIterator(1);
});
Clazz.overrideMethod(c$, "size", 
function(){
return this.ht.size();
});
Clazz.overrideMethod(c$, "contains", 
function(o){
return this.ht.containsValue(o);
}, "~O");
Clazz.overrideMethod(c$, "clear", 
function(){
this.ht.clear();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.table = null;
this.index = 0;
this.next_ = null;
this.current = null;
this.type = 0;
this.jsMapIterator = null;
this.ht = null;
this.isIterator = false;
this.expectedModCount = 0;
Clazz.instantialize(this, arguments);}, java.util.Hashtable, "Enumerator", null, [java.util.Enumeration, java.util.Iterator]);
Clazz.makeConstructor(c$, 
function(ht, type, iterator){
this.ht = ht;
this.table = ht.table;
this.index = ht.table.length;
this.type = type;
this.isIterator = iterator;
this.expectedModCount = ht.modCount;
if (java.util.Hashtable.__isSimple(ht)) {
var m = ht.__m;
{
this.jsMapIterator = m.entries();
this.next_ = this.jsMapIterator.next();
}}}, "java.util.Hashtable,~N,~B");
Clazz.overrideMethod(c$, "hasMoreElements", 
function(){
if (java.util.Hashtable.__isSimple(this.ht)) {
var b = false;
{
b = this.next_ && !this.next_.done
}return b;
} else {
var e = this.next_;
var i = this.index;
var t = this.table;
while (e == null && i > 0) {
e = t[--i];
}
this.next_ = e;
this.index = i;
return e != null;
}});
Clazz.overrideMethod(c$, "nextElement", 
function(){
var node = this.next_;
if (java.util.Hashtable.__isSimple(this.ht)) {
var t = this.type;
this.current = node;
var n = null;
{
n = this.jsMapIterator.next() || null;
}this.next_ = n;
if (node != null) {
var k = null;
var v = null;
var done = false;
{
done = node.done;
if (!done) {
if (t < 2) return node.value[t];
k = node.value[0];
v = node.value[1];
}
}if (!done) {
return ((Clazz.isClassDefined("java.util.Hashtable$Enumerator$1") ? 0 : java.util.Hashtable.Enumerator.$Hashtable$Enumerator$1$ ()), Clazz.innerTypeInstance(java.util.Hashtable$Enumerator$1, this, null, 0, k, v, null));
}}} else {
var i = this.index;
var t = this.table;
while (node == null && i > 0) {
node = t[--i];
}
this.next_ = node;
this.index = i;
if (node != null) {
var e = this.current = this.next_;
this.next_ = e.next_;
return this.type == 0 ? e.key : (this.type == 1 ? e.value : e);
}}throw  new java.util.NoSuchElementException("Hashtable Enumerator");
});
Clazz.overrideMethod(c$, "hasNext", 
function(){
return this.hasMoreElements();
});
Clazz.overrideMethod(c$, "next", 
function(){
if (this.ht.modCount != this.expectedModCount) throw  new java.util.ConcurrentModificationException();
return this.nextElement();
});
Clazz.overrideMethod(c$, "remove", 
function(){
if (!this.isIterator) throw  new UnsupportedOperationException();
var p = this.current;
if (p == null) throw  new IllegalStateException("Hashtable Enumerator");
if (this.ht.modCount != this.expectedModCount) throw  new java.util.ConcurrentModificationException();
if (java.util.Hashtable.__isSimple(this.ht)) {
var key = null;
{
key = p.value[0];
}this.ht.remove(key);
this.expectedModCount++;
} else {
{
var tab = this.ht.table;
var index = (this.current.hash & 0x7FFFFFFF) % tab.length;
var e = tab[index];
for (var prev = null; e != null; prev = e, e = e.next_) {
if (e === this.current) {
this.ht.modCount++;
this.expectedModCount++;
if (prev == null) tab[index] = e.next_;
 else prev.next_ = e.next_;
this.ht.count--;
this.current = null;
return;
}}
throw  new java.util.ConcurrentModificationException();
}}});
c$.$Hashtable$Enumerator$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "Hashtable$Enumerator$1", java.util.Hashtable.Entry);
Clazz.overrideMethod(c$, "setValue", 
function(value){
var m = this.b$["java.util.Hashtable.Enumerator"].ht.modCount;
var v = this.b$["java.util.Hashtable.Enumerator"].ht.put(this.getKey(), value);
this.b$["java.util.Hashtable.Enumerator"].ht.modCount = m;
return v;
}, "~O");
/*eoif5*/})();
};
/*eoif3*/})();
c$.USE_SIMPLE = true;
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.Collection"], "java.util.AbstractCollection", ["java.lang.reflect.Array"], function(){
var c$ = Clazz.declareType(java.util, "AbstractCollection", null, java.util.Collection);
/*LV!1824 unnec constructor*/Clazz.overrideMethod(c$, "add", 
function(object){
throw  new UnsupportedOperationException();
}, "~O");
Clazz.overrideMethod(c$, "addAll", 
function(collection){
var result = false;
var it = collection.iterator();
while (it.hasNext()) {
if (this.add(it.next())) {
result = true;
}}
return result;
}, "java.util.Collection");
Clazz.overrideMethod(c$, "clear", 
function(){
var it = this.iterator();
while (it.hasNext()) {
it.next();
it.remove();
}
});
Clazz.overrideMethod(c$, "contains", 
function(object){
var it = this.iterator();
if (object != null) {
while (it.hasNext()) {
if (object.equals(it.next())) {
return true;
}}
} else {
while (it.hasNext()) {
if (it.next() == null) {
return true;
}}
}return false;
}, "~O");
Clazz.overrideMethod(c$, "containsAll", 
function(collection){
var it = collection.iterator();
while (it.hasNext()) {
if (!this.contains(it.next())) {
return false;
}}
return true;
}, "java.util.Collection");
Clazz.overrideMethod(c$, "isEmpty", 
function(){
return this.size() == 0;
});
Clazz.overrideMethod(c$, "remove", 
function(object){
var it = this.iterator();
if (object != null) {
while (it.hasNext()) {
if (object.equals(it.next())) {
it.remove();
return true;
}}
} else {
while (it.hasNext()) {
if (it.next() == null) {
it.remove();
return true;
}}
}return false;
}, "~O");
Clazz.overrideMethod(c$, "removeAll", 
function(collection){
var result = false;
var it = this.iterator();
while (it.hasNext()) {
if (collection.contains(it.next())) {
it.remove();
result = true;
}}
return result;
}, "java.util.Collection");
Clazz.overrideMethod(c$, "retainAll", 
function(collection){
var result = false;
var it = this.iterator();
while (it.hasNext()) {
if (!collection.contains(it.next())) {
it.remove();
result = true;
}}
return result;
}, "java.util.Collection");
Clazz.defineMethod(c$, "toArray", 
function(){
var size = this.size();
var index = 0;
var it = this.iterator();
var array =  new Array(size);
while (index < size) {
array[index++] = it.next();
}
return array;
});
Clazz.defineMethod(c$, "toArray", 
function(contents){
var size = this.size();
var index = 0;
if (size > contents.length) {
var ct = contents.getClass().getComponentType();
contents = java.lang.reflect.Array.newInstance(ct, size);
}for (var entry, $entry = this.iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) {
contents[index++] = entry;
}
if (index < contents.length) {
contents[index] = null;
}return contents;
}, "~A");
Clazz.overrideMethod(c$, "toString", 
function(){
if (this.isEmpty()) {
return "[]";
}var buffer = "[";
var it = this.iterator();
while (it.hasNext()) {
var next = it.next();
if (next !== this) {
buffer += next;
} else {
buffer += ("(this Collection)");
}if (it.hasNext()) {
buffer += (", ");
}}
buffer += (']');
return buffer;
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.AbstractCollection", "$.Set"], "java.util.AbstractSet", null, function(){
var c$ = Clazz.declareType(java.util, "AbstractSet", java.util.AbstractCollection, java.util.Set);
Clazz.overrideMethod(c$, "equals", 
function(object){
if (this === object) {
return true;
}if (Clazz.instanceOf(object,"java.util.Set")) {
var s = object;
return this.size() == s.size() && this.containsAll(s);
}return false;
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
var result = 0;
var it = this.iterator();
while (it.hasNext()) {
var next = it.next();
result += next == null ? 0 : next.hashCode();
}
return result;
});
Clazz.overrideMethod(c$, "removeAll", 
function(collection){
var result = false;
if (this.size() <= collection.size()) {
var it = this.iterator();
while (it.hasNext()) {
if (collection.contains(it.next())) {
it.remove();
result = true;
}}
} else {
var it = collection.iterator();
while (it.hasNext()) {
result = this.remove(it.next()) || result;
}
}return result;
}, "java.util.Collection");
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

(function(){
var c$ = Clazz.declareType(java.util, "Dictionary", null);
})();
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.AbstractList", "$.AbstractMap", "$.AbstractSet", "$.Collection", "$.Enumeration", "$.Iterator", "$.List", "$.ListIterator", "$.Map", "$.RandomAccess", "$.Set", "$.SortedMap", "$.SortedSet", "java.lang.reflect.Array"], "java.util.Collections", ["java.util.ArrayList", "$.Arrays", "java.util.Map.Entry", "java.util.Random"], function(){
var c$ = Clazz.declareType(java.util, "Collections", null);
c$.emptyEnumeration = Clazz.defineMethod(c$, "emptyEnumeration", 
function(){
if (java.util.Collections.EMPTY_ENUMERATION == null) java.util.Collections.EMPTY_ENUMERATION =  new java.util.Collections.EmptyEnumeration();
return java.util.Collections.EMPTY_ENUMERATION;
});
c$.emptyIterator = Clazz.defineMethod(c$, "emptyIterator", 
function(){
if (java.util.Collections.EMPTY_ITERATOR == null) {
java.util.Collections.EMPTY_ITERATOR =  new java.util.Collections.EmptyIterator();
}return java.util.Collections.EMPTY_ITERATOR;
});
c$.binarySearch = Clazz.defineMethod(c$, "binarySearch", 
function(list, object){
if (list == null) {
throw  new NullPointerException();
}if (list.isEmpty()) {
return -1;
}var key = object;
if (!(Clazz.instanceOf(list,"java.util.RandomAccess"))) {
var it = list.listIterator();
while (it.hasNext()) {
var result;
if ((result = key.compareTo(it.next())) <= 0) {
if (result == 0) {
return it.previousIndex();
}return -it.previousIndex() - 1;
}}
return -list.size() - 1;
}var low = 0;
var mid = list.size();
var high = mid - 1;
var result = -1;
while (low <= high) {
mid = (low + high) >> 1;
if ((result = key.compareTo(list.get(mid))) > 0) {
low = mid + 1;
} else if (result == 0) {
return mid;
} else {
high = mid - 1;
}}
return -mid - (result < 0 ? 1 : 2);
}, "java.util.List,~O");
c$.binarySearch = Clazz.defineMethod(c$, "binarySearch", 
function(list, object, comparator){
if (comparator == null) {
return java.util.Collections.binarySearch(list, object);
}if (!(Clazz.instanceOf(list,"java.util.RandomAccess"))) {
var it = list.listIterator();
while (it.hasNext()) {
var result;
if ((result = comparator.compare(object, it.next())) <= 0) {
if (result == 0) {
return it.previousIndex();
}return -it.previousIndex() - 1;
}}
return -list.size() - 1;
}var low = 0;
var mid = list.size();
var high = mid - 1;
var result = -1;
while (low <= high) {
mid = (low + high) >> 1;
if ((result = comparator.compare(object, list.get(mid))) > 0) {
low = mid + 1;
} else if (result == 0) {
return mid;
} else {
high = mid - 1;
}}
return -mid - (result < 0 ? 1 : 2);
}, "java.util.List,~O,java.util.Comparator");
c$.copy = Clazz.defineMethod(c$, "copy", 
function(destination, source){
if (destination.size() < source.size()) {
throw  new ArrayIndexOutOfBoundsException();
}var srcIt = source.iterator();
var destIt = destination.listIterator();
while (srcIt.hasNext()) {
try {
destIt.next();
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
throw  new ArrayIndexOutOfBoundsException();
} else {
throw e;
}
}
destIt.set(srcIt.next());
}
}, "java.util.List,java.util.List");
c$.enumeration = Clazz.defineMethod(c$, "enumeration", 
function(collection){
var c = collection;
return ((Clazz.isClassDefined("java.util.Collections$1") ? 0 : java.util.Collections.$Collections$1$ ()), Clazz.innerTypeInstance(java.util.Collections$1, this, Clazz.cloneFinals("c", c)));
}, "java.util.Collection");
c$.fill = Clazz.defineMethod(c$, "fill", 
function(list, object){
var it = list.listIterator();
while (it.hasNext()) {
it.next();
it.set(object);
}
}, "java.util.List,~O");
c$.max = Clazz.defineMethod(c$, "max", 
function(collection){
var it = collection.iterator();
var max = it.next();
while (it.hasNext()) {
var next = it.next();
if (max.compareTo(next) < 0) {
max = next;
}}
return max;
}, "java.util.Collection");
c$.max = Clazz.defineMethod(c$, "max", 
function(collection, comparator){
var it = collection.iterator();
var max = it.next();
while (it.hasNext()) {
var next = it.next();
if (comparator.compare(max, next) < 0) {
max = next;
}}
return max;
}, "java.util.Collection,java.util.Comparator");
c$.min = Clazz.defineMethod(c$, "min", 
function(collection){
var it = collection.iterator();
var min = it.next();
while (it.hasNext()) {
var next = it.next();
if (min.compareTo(next) > 0) {
min = next;
}}
return min;
}, "java.util.Collection");
c$.min = Clazz.defineMethod(c$, "min", 
function(collection, comparator){
var it = collection.iterator();
var min = it.next();
while (it.hasNext()) {
var next = it.next();
if (comparator.compare(min, next) > 0) {
min = next;
}}
return min;
}, "java.util.Collection,java.util.Comparator");
c$.nCopies = Clazz.defineMethod(c$, "nCopies", 
function(length, object){
return  new java.util.Collections.CopiesList(length, object);
}, "~N,~O");
c$.reverse = Clazz.defineMethod(c$, "reverse", 
function(list){
var size = list.size();
var front = list.listIterator();
var back = list.listIterator(size);
for (var i = 0; i < Clazz.doubleToInt(size / 2); i++) {
var frontNext = front.next();
var backPrev = back.previous();
front.set(backPrev);
back.set(frontNext);
}
}, "java.util.List");
c$.reverseOrder = Clazz.defineMethod(c$, "reverseOrder", 
function(){
return  new java.util.Collections.ReverseComparator();
});
c$.reverseOrder = Clazz.defineMethod(c$, "reverseOrder", 
function(c){
if (c == null) {
return java.util.Collections.reverseOrder();
}return  new java.util.Collections.ReverseComparatorWithComparator(c);
}, "java.util.Comparator");
c$.shuffle = Clazz.defineMethod(c$, "shuffle", 
function(list){
java.util.Collections.shuffle(list,  new java.util.Random());
}, "java.util.List");
c$.shuffle = Clazz.defineMethod(c$, "shuffle", 
function(list, random){
if (!(Clazz.instanceOf(list,"java.util.RandomAccess"))) {
var array = list.toArray();
for (var i = array.length - 1; i > 0; i--) {
var index = random.nextInt() % (i + 1);
if (index < 0) {
index = -index;
}var temp = array[i];
array[i] = array[index];
array[index] = temp;
}
var i = 0;
var it = list.listIterator();
while (it.hasNext()) {
it.next();
it.set(array[i++]);
}
} else {
var rawList = list;
for (var i = rawList.size() - 1; i > 0; i--) {
var index = random.nextInt() % (i + 1);
if (index < 0) {
index = -index;
}rawList.set(index, rawList.set(i, rawList.get(index)));
}
}}, "java.util.List,java.util.Random");
c$.singleton = Clazz.defineMethod(c$, "singleton", 
function(object){
return  new java.util.Collections.SingletonSet(object);
}, "~O");
c$.singletonList = Clazz.defineMethod(c$, "singletonList", 
function(object){
return  new java.util.Collections.SingletonList(object);
}, "~O");
c$.singletonMap = Clazz.defineMethod(c$, "singletonMap", 
function(key, value){
return  new java.util.Collections.SingletonMap(key, value);
}, "~O,~O");
c$.sort = Clazz.defineMethod(c$, "sort", 
function(list){
var array = list.toArray();
java.util.Arrays.sort(array);
var i = 0;
var it = list.listIterator();
while (it.hasNext()) {
it.next();
it.set(array[i++]);
}
}, "java.util.List");
c$.sort = Clazz.defineMethod(c$, "sort", 
function(list, comparator){
var array = list.toArray( new Array(list.size()));
java.util.Arrays.sort(array, comparator);
var i = 0;
var it = list.listIterator();
while (it.hasNext()) {
it.next();
it.set(array[i++]);
}
}, "java.util.List,java.util.Comparator");
c$.swap = Clazz.defineMethod(c$, "swap", 
function(list, index1, index2){
if (list == null) {
throw  new NullPointerException();
}if (index1 == index2) {
return;
}var rawList = list;
rawList.set(index2, rawList.set(index1, rawList.get(index2)));
}, "java.util.List,~N,~N");
c$.replaceAll = Clazz.defineMethod(c$, "replaceAll", 
function(list, obj, obj2){
var index;
var found = false;
while ((index = list.indexOf(obj)) > -1) {
found = true;
list.set(index, obj2);
}
return found;
}, "java.util.List,~O,~O");
c$.rotate = Clazz.defineMethod(c$, "rotate", 
function(lst, dist){
var list = lst;
var size = list.size();
if (size == 0) {
return;
}var normdist;
if (dist > 0) {
normdist = dist % size;
} else {
normdist = size - ((dist % size) * (-1));
}if (normdist == 0 || normdist == size) {
return;
}if (Clazz.instanceOf(list,"java.util.RandomAccess")) {
var temp = list.get(0);
var index = 0;
var beginIndex = 0;
for (var i = 0; i < size; i++) {
index = (index + normdist) % size;
temp = list.set(index, temp);
if (index == beginIndex) {
index = ++beginIndex;
temp = list.get(beginIndex);
}}
} else {
var divideIndex = (size - normdist) % size;
var sublist1 = list.subList(0, divideIndex);
var sublist2 = list.subList(divideIndex, size);
java.util.Collections.reverse(sublist1);
java.util.Collections.reverse(sublist2);
java.util.Collections.reverse(list);
}}, "java.util.List,~N");
c$.indexOfSubList = Clazz.defineMethod(c$, "indexOfSubList", 
function(list, sublist){
var size = list.size();
var sublistSize = sublist.size();
if (sublistSize > size) {
return -1;
}if (sublistSize == 0) {
return 0;
}var firstObj = sublist.get(0);
var index = list.indexOf(firstObj);
if (index == -1) {
return -1;
}while (index < size && (size - index >= sublistSize)) {
var listIt = list.listIterator(index);
if ((firstObj == null) ? listIt.next() == null : firstObj.equals(listIt.next())) {
var sublistIt = sublist.listIterator(1);
var difFound = false;
while (sublistIt.hasNext()) {
var element = sublistIt.next();
if (!listIt.hasNext()) {
return -1;
}if ((element == null) ? listIt.next() != null : !element.equals(listIt.next())) {
difFound = true;
break;
}}
if (!difFound) {
return index;
}}index++;
}
return -1;
}, "java.util.List,java.util.List");
c$.lastIndexOfSubList = Clazz.defineMethod(c$, "lastIndexOfSubList", 
function(list, sublist){
var sublistSize = sublist.size();
var size = list.size();
if (sublistSize > size) {
return -1;
}if (sublistSize == 0) {
return size;
}var lastObj = sublist.get(sublistSize - 1);
var index = list.lastIndexOf(lastObj);
while ((index > -1) && (index + 1 >= sublistSize)) {
var listIt = list.listIterator(index + 1);
if ((lastObj == null) ? listIt.previous() == null : lastObj.equals(listIt.previous())) {
var sublistIt = sublist.listIterator(sublistSize - 1);
var difFound = false;
while (sublistIt.hasPrevious()) {
var element = sublistIt.previous();
if (!listIt.hasPrevious()) {
return -1;
}if ((element == null) ? listIt.previous() != null : !element.equals(listIt.previous())) {
difFound = true;
break;
}}
if (!difFound) {
return listIt.nextIndex();
}}index--;
}
return -1;
}, "java.util.List,java.util.List");
c$.list = Clazz.defineMethod(c$, "list", 
function(enumeration){
var list =  new java.util.ArrayList();
while (enumeration.hasMoreElements()) {
list.add(enumeration.nextElement());
}
return list;
}, "java.util.Enumeration");
c$.synchronizedCollection = Clazz.defineMethod(c$, "synchronizedCollection", 
function(collection){
if (collection == null) {
throw  new NullPointerException();
}return  new java.util.Collections.SynchronizedCollection(collection);
}, "java.util.Collection");
c$.synchronizedList = Clazz.defineMethod(c$, "synchronizedList", 
function(list){
if (list == null) {
throw  new NullPointerException();
}if (Clazz.instanceOf(list,"java.util.RandomAccess")) {
return  new java.util.Collections.SynchronizedRandomAccessList(list);
}return  new java.util.Collections.SynchronizedList(list);
}, "java.util.List");
c$.synchronizedMap = Clazz.defineMethod(c$, "synchronizedMap", 
function(map){
if (map == null) {
throw  new NullPointerException();
}return  new java.util.Collections.SynchronizedMap(map);
}, "java.util.Map");
c$.synchronizedSet = Clazz.defineMethod(c$, "synchronizedSet", 
function(set){
if (set == null) {
throw  new NullPointerException();
}return  new java.util.Collections.SynchronizedSet(set);
}, "java.util.Set");
c$.synchronizedSortedMap = Clazz.defineMethod(c$, "synchronizedSortedMap", 
function(map){
if (map == null) {
throw  new NullPointerException();
}return  new java.util.Collections.SynchronizedSortedMap(map);
}, "java.util.SortedMap");
c$.synchronizedSortedSet = Clazz.defineMethod(c$, "synchronizedSortedSet", 
function(set){
if (set == null) {
throw  new NullPointerException();
}return  new java.util.Collections.SynchronizedSortedSet(set);
}, "java.util.SortedSet");
c$.unmodifiableCollection = Clazz.defineMethod(c$, "unmodifiableCollection", 
function(collection){
if (collection == null) {
throw  new NullPointerException();
}return  new java.util.Collections.UnmodifiableCollection(collection);
}, "java.util.Collection");
c$.unmodifiableList = Clazz.defineMethod(c$, "unmodifiableList", 
function(list){
if (list == null) {
throw  new NullPointerException();
}if (Clazz.instanceOf(list,"java.util.RandomAccess")) {
return  new java.util.Collections.UnmodifiableRandomAccessList(list);
}return  new java.util.Collections.UnmodifiableList(list);
}, "java.util.List");
c$.unmodifiableMap = Clazz.defineMethod(c$, "unmodifiableMap", 
function(map){
if (map == null) {
throw  new NullPointerException();
}return  new java.util.Collections.UnmodifiableMap(map);
}, "java.util.Map");
c$.unmodifiableSet = Clazz.defineMethod(c$, "unmodifiableSet", 
function(set){
if (set == null) {
throw  new NullPointerException();
}return  new java.util.Collections.UnmodifiableSet(set);
}, "java.util.Set");
c$.unmodifiableSortedMap = Clazz.defineMethod(c$, "unmodifiableSortedMap", 
function(map){
if (map == null) {
throw  new NullPointerException();
}return  new java.util.Collections.UnmodifiableSortedMap(map);
}, "java.util.SortedMap");
c$.unmodifiableSortedSet = Clazz.defineMethod(c$, "unmodifiableSortedSet", 
function(set){
if (set == null) {
throw  new NullPointerException();
}return  new java.util.Collections.UnmodifiableSortedSet(set);
}, "java.util.SortedSet");
c$.frequency = Clazz.defineMethod(c$, "frequency", 
function(c, o){
if (c == null) {
throw  new NullPointerException();
}if (c.isEmpty()) {
return 0;
}var result = 0;
var itr = c.iterator();
while (itr.hasNext()) {
var e = itr.next();
if (o == null ? e == null : o.equals(e)) {
result++;
}}
return result;
}, "java.util.Collection,~O");
c$.emptyList = Clazz.defineMethod(c$, "emptyList", 
function(){
return java.util.Collections.EMPTY_LIST;
});
c$.emptySet = Clazz.defineMethod(c$, "emptySet", 
function(){
return java.util.Collections.EMPTY_SET;
});
c$.emptyMap = Clazz.defineMethod(c$, "emptyMap", 
function(){
return java.util.Collections.EMPTY_MAP;
});
c$.checkedCollection = Clazz.defineMethod(c$, "checkedCollection", 
function(c, type){
return  new java.util.Collections.CheckedCollection(c, type);
}, "java.util.Collection,Class");
c$.checkedMap = Clazz.defineMethod(c$, "checkedMap", 
function(m, keyType, valueType){
return  new java.util.Collections.CheckedMap(m, keyType, valueType);
}, "java.util.Map,Class,Class");
c$.checkedList = Clazz.defineMethod(c$, "checkedList", 
function(list, type){
if (Clazz.instanceOf(list,"java.util.RandomAccess")) {
return  new java.util.Collections.CheckedRandomAccessList(list, type);
}return  new java.util.Collections.CheckedList(list, type);
}, "java.util.List,Class");
c$.checkedSet = Clazz.defineMethod(c$, "checkedSet", 
function(s, type){
return  new java.util.Collections.CheckedSet(s, type);
}, "java.util.Set,Class");
c$.checkedSortedMap = Clazz.defineMethod(c$, "checkedSortedMap", 
function(m, keyType, valueType){
return  new java.util.Collections.CheckedSortedMap(m, keyType, valueType);
}, "java.util.SortedMap,Class,Class");
c$.checkedSortedSet = Clazz.defineMethod(c$, "checkedSortedSet", 
function(s, type){
return  new java.util.Collections.CheckedSortedSet(s, type);
}, "java.util.SortedSet,Class");
c$.addAll = Clazz.defineMethod(c$, "addAll", 
function(c, a){
var modified = false;
for (var i = 0; i < a.length; i++) {
modified = new Boolean (modified | c.add(a[i])).valueOf();
}
return modified;
}, "java.util.Collection,~A");
c$.disjoint = Clazz.defineMethod(c$, "disjoint", 
function(c1, c2){
if ((Clazz.instanceOf(c1,"java.util.Set")) && !(Clazz.instanceOf(c2,"java.util.Set")) || (c2.size()) > c1.size()) {
var tmp = c1;
c1 = c2;
c2 = tmp;
}var it = c1.iterator();
while (it.hasNext()) {
if (c2.contains(it.next())) {
return false;
}}
return true;
}, "java.util.Collection,java.util.Collection");
c$.checkType = Clazz.defineMethod(c$, "checkType", 
function(obj, type){
if (!type.isInstance(obj)) {
throw  new ClassCastException("Attempt to insert " + obj.getClass() + " element into collection with element type " + type);
}return obj;
}, "~O,Class");
c$.$Collections$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.it = null;
Clazz.instantialize(this, arguments);}, java.util, "Collections$1", null, java.util.Enumeration);
Clazz.prepareFields (c$, function(){
this.it = this.f$.c.iterator();
});
Clazz.defineMethod(c$, "hasMoreElements", 
function(){
return this.it.hasNext();
});
Clazz.defineMethod(c$, "nextElement", 
function(){
return this.it.next();
});
/*eoif5*/})();
};
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "EmptyEnumeration", null, java.util.Enumeration);
Clazz.overrideMethod(c$, "hasMoreElements", 
function(){
return false;
});
Clazz.overrideMethod(c$, "nextElement", 
function(){
throw  new java.util.NoSuchElementException();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "EmptyIterator", null, java.util.Iterator);
Clazz.overrideMethod(c$, "hasNext", 
function(){
return false;
});
Clazz.overrideMethod(c$, "next", 
function(){
throw  new java.util.NoSuchElementException();
});
Clazz.overrideMethod(c$, "remove", 
function(){
throw  new IllegalStateException();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.n = 0;
this.element = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "CopiesList", java.util.AbstractList, java.io.Serializable);
Clazz.makeConstructor(c$, 
function(length, object){
Clazz.superConstructor (this, java.util.Collections.CopiesList, []);
if (length < 0) {
throw  new IllegalArgumentException();
}this.n = length;
this.element = object;
}, "~N,~O");
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.element == null ? object == null : this.element.equals(object);
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.n;
});
Clazz.overrideMethod(c$, "get", 
function(location){
if (0 <= location && location < this.n) {
return this.element;
}throw  new IndexOutOfBoundsException();
}, "~N");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "EmptyList", java.util.AbstractList, java.io.Serializable);
Clazz.overrideMethod(c$, "contains", 
function(object){
return false;
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return 0;
});
Clazz.overrideMethod(c$, "get", 
function(location){
throw  new IndexOutOfBoundsException();
}, "~N");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "EmptySet", java.util.AbstractSet, java.io.Serializable);
Clazz.overrideMethod(c$, "contains", 
function(object){
return false;
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return 0;
});
Clazz.overrideMethod(c$, "iterator", 
function(){
return ((Clazz.isClassDefined("java.util.Collections$EmptySet$1") ? 0 : java.util.Collections.EmptySet.$Collections$EmptySet$1$ ()), Clazz.innerTypeInstance(java.util.Collections$EmptySet$1, this, null));
});
c$.$Collections$EmptySet$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "Collections$EmptySet$1", null, java.util.Iterator);
Clazz.overrideMethod(c$, "hasNext", 
function(){
return false;
});
Clazz.overrideMethod(c$, "next", 
function(){
throw  new java.util.NoSuchElementException();
});
Clazz.overrideMethod(c$, "remove", 
function(){
throw  new UnsupportedOperationException();
});
/*eoif5*/})();
};
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "EmptyMap", java.util.AbstractMap, java.io.Serializable);
Clazz.overrideMethod(c$, "containsKey", 
function(key){
return false;
}, "~O");
Clazz.overrideMethod(c$, "containsValue", 
function(value){
return false;
}, "~O");
Clazz.overrideMethod(c$, "entrySet", 
function(){
return java.util.Collections.EMPTY_SET;
});
Clazz.overrideMethod(c$, "get", 
function(key){
return null;
}, "~O");
Clazz.overrideMethod(c$, "keySet", 
function(){
return java.util.Collections.EMPTY_SET;
});
Clazz.overrideMethod(c$, "values", 
function(){
return java.util.Collections.EMPTY_LIST;
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "ReverseComparator", null, [java.util.Comparator, java.io.Serializable]);
Clazz.overrideMethod(c$, "compare", 
function(o1, o2){
var c2 = o2;
return c2.compareTo(o1);
}, "~O,~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.comparator = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "ReverseComparatorWithComparator", null, [java.util.Comparator, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(comparator){
this.comparator = comparator;
}, "java.util.Comparator");
Clazz.defineMethod(c$, "compare", 
function(o1, o2){
return this.comparator.compare(o2, o1);
}, "~O,~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.element = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SingletonSet", java.util.AbstractSet, java.io.Serializable);
Clazz.makeConstructor(c$, 
function(object){
Clazz.superConstructor (this, java.util.Collections.SingletonSet, []);
this.element = object;
}, "~O");
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.element == null ? object == null : this.element.equals(object);
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return 1;
});
Clazz.overrideMethod(c$, "iterator", 
function(){
return ((Clazz.isClassDefined("java.util.Collections$SingletonSet$1") ? 0 : java.util.Collections.SingletonSet.$Collections$SingletonSet$1$ ()), Clazz.innerTypeInstance(java.util.Collections$SingletonSet$1, this, null));
});
c$.$Collections$SingletonSet$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.$hasNext = true;
Clazz.instantialize(this, arguments);}, java.util, "Collections$SingletonSet$1", null, java.util.Iterator);
Clazz.overrideMethod(c$, "hasNext", 
function(){
return this.$hasNext;
});
Clazz.overrideMethod(c$, "next", 
function(){
if (this.$hasNext) {
this.$hasNext = false;
return this.b$["java.util.Collections.SingletonSet"].element;
}throw  new java.util.NoSuchElementException();
});
Clazz.overrideMethod(c$, "remove", 
function(){
throw  new UnsupportedOperationException();
});
/*eoif5*/})();
};
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.element = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SingletonList", java.util.AbstractList, java.io.Serializable);
Clazz.makeConstructor(c$, 
function(object){
Clazz.superConstructor (this, java.util.Collections.SingletonList, []);
this.element = object;
}, "~O");
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.element == null ? object == null : this.element.equals(object);
}, "~O");
Clazz.overrideMethod(c$, "get", 
function(location){
if (location == 0) {
return this.element;
}throw  new IndexOutOfBoundsException();
}, "~N");
Clazz.overrideMethod(c$, "size", 
function(){
return 1;
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.k = null;
this.v = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SingletonMap", java.util.AbstractMap, java.io.Serializable);
Clazz.makeConstructor(c$, 
function(key, value){
Clazz.superConstructor (this, java.util.Collections.SingletonMap, []);
this.k = key;
this.v = value;
}, "~O,~O");
Clazz.overrideMethod(c$, "containsKey", 
function(key){
return this.k == null ? key == null : this.k.equals(key);
}, "~O");
Clazz.overrideMethod(c$, "containsValue", 
function(value){
return this.v == null ? value == null : this.v.equals(value);
}, "~O");
Clazz.overrideMethod(c$, "get", 
function(key){
if (this.containsKey(key)) {
return this.v;
}return null;
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return 1;
});
Clazz.overrideMethod(c$, "entrySet", 
function(){
return ((Clazz.isClassDefined("java.util.Collections$SingletonMap$1") ? 0 : java.util.Collections.SingletonMap.$Collections$SingletonMap$1$ ()), Clazz.innerTypeInstance(java.util.Collections$SingletonMap$1, this, null));
});
c$.$Collections$SingletonMap$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "Collections$SingletonMap$1", java.util.AbstractSet);
Clazz.overrideMethod(c$, "contains", 
function(object){
if (Clazz.instanceOf(object,"java.util.Map.Entry")) {
var entry = object;
return this.b$["java.util.Collections.SingletonMap"].containsKey(entry.getKey()) && this.b$["java.util.Collections.SingletonMap"].containsValue(entry.getValue());
}return false;
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return 1;
});
Clazz.overrideMethod(c$, "iterator", 
function(){
return ((Clazz.isClassDefined("java.util.Collections$SingletonMap$1$1") ? 0 : java.util.Collections.$Collections$SingletonMap$1$1$ ()), Clazz.innerTypeInstance(java.util.Collections$SingletonMap$1$1, this, null));
});
/*eoif5*/})();
};
c$.$Collections$SingletonMap$1$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.$hasNext = true;
Clazz.instantialize(this, arguments);}, java.util, "Collections$SingletonMap$1$1", null, java.util.Iterator);
Clazz.overrideMethod(c$, "hasNext", 
function(){
return this.$hasNext;
});
Clazz.overrideMethod(c$, "next", 
function(){
if (this.$hasNext) {
this.$hasNext = false;
return ((Clazz.isClassDefined("java.util.Collections$SingletonMap$1$1$1") ? 0 : java.util.Collections.$Collections$SingletonMap$1$1$1$ ()), Clazz.innerTypeInstance(java.util.Collections$SingletonMap$1$1$1, this, null));
}throw  new java.util.NoSuchElementException();
});
Clazz.overrideMethod(c$, "remove", 
function(){
throw  new UnsupportedOperationException();
});
/*eoif5*/})();
};
c$.$Collections$SingletonMap$1$1$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "Collections$SingletonMap$1$1$1", null, java.util.Map.Entry);
Clazz.overrideMethod(c$, "equals", 
function(object){
return this.b$["java.util.Collections$SingletonMap$1"].contains(object);
}, "~O");
Clazz.overrideMethod(c$, "getKey", 
function(){
return this.b$["java.util.Collections.SingletonMap"].k;
});
Clazz.overrideMethod(c$, "getValue", 
function(){
return this.b$["java.util.Collections.SingletonMap"].v;
});
Clazz.overrideMethod(c$, "hashCode", 
function(){
return (this.b$["java.util.Collections.SingletonMap"].k == null ? 0 : this.b$["java.util.Collections.SingletonMap"].k.hashCode()) ^ (this.b$["java.util.Collections.SingletonMap"].v == null ? 0 : this.b$["java.util.Collections.SingletonMap"].v.hashCode());
});
Clazz.overrideMethod(c$, "setValue", 
function(value){
throw  new UnsupportedOperationException();
}, "~O");
/*eoif5*/})();
};
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.c = null;
this.mutex = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SynchronizedCollection", null, [java.util.Collection, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(collection){
this.c = collection;
this.mutex = this;
}, "java.util.Collection");
Clazz.makeConstructor(c$, 
function(collection, mutex){
this.c = collection;
this.mutex = mutex;
}, "java.util.Collection,~O");
Clazz.defineMethod(c$, "add", 
function(object){
{
return this.c.add(object);
}}, "~O");
Clazz.defineMethod(c$, "addAll", 
function(collection){
{
return this.c.addAll(collection);
}}, "java.util.Collection");
Clazz.defineMethod(c$, "clear", 
function(){
{
this.c.clear();
}});
Clazz.defineMethod(c$, "contains", 
function(object){
{
return this.c.contains(object);
}}, "~O");
Clazz.defineMethod(c$, "containsAll", 
function(collection){
{
return this.c.containsAll(collection);
}}, "java.util.Collection");
Clazz.defineMethod(c$, "isEmpty", 
function(){
{
return this.c.isEmpty();
}});
Clazz.defineMethod(c$, "iterator", 
function(){
{
return this.c.iterator();
}});
Clazz.defineMethod(c$, "remove", 
function(object){
{
return this.c.remove(object);
}}, "~O");
Clazz.defineMethod(c$, "removeAll", 
function(collection){
{
return this.c.removeAll(collection);
}}, "java.util.Collection");
Clazz.defineMethod(c$, "retainAll", 
function(collection){
{
return this.c.retainAll(collection);
}}, "java.util.Collection");
Clazz.defineMethod(c$, "size", 
function(){
{
return this.c.size();
}});
Clazz.defineMethod(c$, "toArray", 
function(){
{
return this.c.toArray();
}});
Clazz.defineMethod(c$, "toString", 
function(){
{
return this.c.toString();
}});
Clazz.defineMethod(c$, "toArray", 
function(array){
{
return this.c.toArray(array);
}}, "~A");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "SynchronizedRandomAccessList", java.util.Collections.SynchronizedList, java.util.RandomAccess);
Clazz.overrideMethod(c$, "subList", 
function(start, end){
{
return  new java.util.Collections.SynchronizedRandomAccessList(this.list.subList(start, end), this.mutex);
}}, "~N,~N");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.list = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SynchronizedList", java.util.Collections.SynchronizedCollection, java.util.List);
Clazz.makeConstructor(c$, 
function(l){
Clazz.superConstructor(this, java.util.Collections.SynchronizedList, [l]);
this.list = l;
}, "java.util.List");
Clazz.makeConstructor(c$, 
function(l, mutex){
Clazz.superConstructor(this, java.util.Collections.SynchronizedList, [l, mutex]);
this.list = l;
}, "java.util.List,~O");
Clazz.defineMethod(c$, "add", 
function(location, object){
{
this.list.add(location, object);
}}, "~N,~O");
Clazz.defineMethod(c$, "addAll", 
function(location, collection){
{
return this.list.addAll(location, collection);
}}, "~N,java.util.Collection");
Clazz.defineMethod(c$, "equals", 
function(object){
{
return this.list.equals(object);
}}, "~O");
Clazz.defineMethod(c$, "get", 
function(location){
{
return this.list.get(location);
}}, "~N");
Clazz.defineMethod(c$, "hashCode", 
function(){
{
return this.list.hashCode();
}});
Clazz.defineMethod(c$, "indexOf", 
function(object){
{
return this.list.indexOf(object);
}}, "~O");
Clazz.defineMethod(c$, "lastIndexOf", 
function(object){
{
return this.list.lastIndexOf(object);
}}, "~O");
Clazz.defineMethod(c$, "listIterator", 
function(){
{
return this.list.listIterator();
}});
Clazz.defineMethod(c$, "listIterator", 
function(location){
{
return this.list.listIterator(location);
}}, "~N");
Clazz.defineMethod(c$, "remove", 
function(location){
{
return this.list.remove(location);
}}, "~N");
Clazz.defineMethod(c$, "set", 
function(location, object){
{
return this.list.set(location, object);
}}, "~N,~O");
Clazz.defineMethod(c$, "subList", 
function(start, end){
{
return  new java.util.Collections.SynchronizedList(this.list.subList(start, end), this.mutex);
}}, "~N,~N");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.m = null;
this.mutex = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SynchronizedMap", null, [java.util.Map, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(map){
this.m = map;
this.mutex = this;
}, "java.util.Map");
Clazz.makeConstructor(c$, 
function(map, mutex){
this.m = map;
this.mutex = mutex;
}, "java.util.Map,~O");
Clazz.defineMethod(c$, "clear", 
function(){
{
this.m.clear();
}});
Clazz.defineMethod(c$, "containsKey", 
function(key){
{
return this.m.containsKey(key);
}}, "~O");
Clazz.defineMethod(c$, "containsValue", 
function(value){
{
return this.m.containsValue(value);
}}, "~O");
Clazz.defineMethod(c$, "entrySet", 
function(){
{
return  new java.util.Collections.SynchronizedSet(this.m.entrySet(), this.mutex);
}});
Clazz.defineMethod(c$, "equals", 
function(object){
{
return this.m.equals(object);
}}, "~O");
Clazz.defineMethod(c$, "get", 
function(key){
{
return this.m.get(key);
}}, "~O");
Clazz.defineMethod(c$, "hashCode", 
function(){
{
return this.m.hashCode();
}});
Clazz.defineMethod(c$, "isEmpty", 
function(){
{
return this.m.isEmpty();
}});
Clazz.defineMethod(c$, "keySet", 
function(){
{
return  new java.util.Collections.SynchronizedSet(this.m.keySet(), this.mutex);
}});
Clazz.defineMethod(c$, "put", 
function(key, value){
{
return this.m.put(key, value);
}}, "~O,~O");
Clazz.defineMethod(c$, "putAll", 
function(map){
{
this.m.putAll(map);
}}, "java.util.Map");
Clazz.defineMethod(c$, "remove", 
function(key){
{
return this.m.remove(key);
}}, "~O");
Clazz.defineMethod(c$, "size", 
function(){
{
return this.m.size();
}});
Clazz.defineMethod(c$, "values", 
function(){
{
return  new java.util.Collections.SynchronizedCollection(this.m.values(), this.mutex);
}});
Clazz.defineMethod(c$, "toString", 
function(){
{
return this.m.toString();
}});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "SynchronizedSet", java.util.Collections.SynchronizedCollection, java.util.Set);
Clazz.overrideMethod(c$, "equals", 
function(object){
{
return this.c.equals(object);
}}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
{
return this.c.hashCode();
}});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.sm = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SynchronizedSortedMap", java.util.Collections.SynchronizedMap, java.util.SortedMap);
Clazz.makeConstructor(c$, 
function(map){
Clazz.superConstructor(this, java.util.Collections.SynchronizedSortedMap, [map]);
this.sm = map;
}, "java.util.SortedMap");
Clazz.makeConstructor(c$, 
function(map, mutex){
Clazz.superConstructor(this, java.util.Collections.SynchronizedSortedMap, [map, mutex]);
this.sm = map;
}, "java.util.SortedMap,~O");
Clazz.defineMethod(c$, "comparator", 
function(){
{
return this.sm.comparator();
}});
Clazz.defineMethod(c$, "firstKey", 
function(){
{
return this.sm.firstKey();
}});
Clazz.defineMethod(c$, "headMap", 
function(endKey){
{
return  new java.util.Collections.SynchronizedSortedMap(this.sm.headMap(endKey), this.mutex);
}}, "~O");
Clazz.defineMethod(c$, "lastKey", 
function(){
{
return this.sm.lastKey();
}});
Clazz.defineMethod(c$, "subMap", 
function(startKey, endKey){
{
return  new java.util.Collections.SynchronizedSortedMap(this.sm.subMap(startKey, endKey), this.mutex);
}}, "~O,~O");
Clazz.defineMethod(c$, "tailMap", 
function(startKey){
{
return  new java.util.Collections.SynchronizedSortedMap(this.sm.tailMap(startKey), this.mutex);
}}, "~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.ss = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "SynchronizedSortedSet", java.util.Collections.SynchronizedSet, java.util.SortedSet);
Clazz.makeConstructor(c$, 
function(set){
Clazz.superConstructor(this, java.util.Collections.SynchronizedSortedSet, [set]);
this.ss = set;
}, "java.util.SortedSet");
Clazz.makeConstructor(c$, 
function(set, mutex){
Clazz.superConstructor(this, java.util.Collections.SynchronizedSortedSet, [set, mutex]);
this.ss = set;
}, "java.util.SortedSet,~O");
Clazz.defineMethod(c$, "comparator", 
function(){
{
return this.ss.comparator();
}});
Clazz.defineMethod(c$, "first", 
function(){
{
return this.ss.first();
}});
Clazz.defineMethod(c$, "headSet", 
function(end){
{
return  new java.util.Collections.SynchronizedSortedSet(this.ss.headSet(end), this.mutex);
}}, "~O");
Clazz.defineMethod(c$, "last", 
function(){
{
return this.ss.last();
}});
Clazz.defineMethod(c$, "subSet", 
function(start, end){
{
return  new java.util.Collections.SynchronizedSortedSet(this.ss.subSet(start, end), this.mutex);
}}, "~O,~O");
Clazz.defineMethod(c$, "tailSet", 
function(start){
{
return  new java.util.Collections.SynchronizedSortedSet(this.ss.tailSet(start), this.mutex);
}}, "~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.c = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "UnmodifiableCollection", null, [java.util.Collection, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(collection){
this.c = collection;
}, "java.util.Collection");
Clazz.overrideMethod(c$, "add", 
function(object){
throw  new UnsupportedOperationException();
}, "~O");
Clazz.overrideMethod(c$, "addAll", 
function(collection){
throw  new UnsupportedOperationException();
}, "java.util.Collection");
Clazz.overrideMethod(c$, "clear", 
function(){
throw  new UnsupportedOperationException();
});
Clazz.defineMethod(c$, "contains", 
function(object){
return this.c.contains(object);
}, "~O");
Clazz.defineMethod(c$, "containsAll", 
function(collection){
return this.c.containsAll(collection);
}, "java.util.Collection");
Clazz.defineMethod(c$, "isEmpty", 
function(){
return this.c.isEmpty();
});
Clazz.defineMethod(c$, "iterator", 
function(){
return ((Clazz.isClassDefined("java.util.Collections$UnmodifiableCollection$1") ? 0 : java.util.Collections.UnmodifiableCollection.$Collections$UnmodifiableCollection$1$ ()), Clazz.innerTypeInstance(java.util.Collections$UnmodifiableCollection$1, this, null));
});
Clazz.overrideMethod(c$, "remove", 
function(object){
throw  new UnsupportedOperationException();
}, "~O");
Clazz.overrideMethod(c$, "removeAll", 
function(collection){
throw  new UnsupportedOperationException();
}, "java.util.Collection");
Clazz.overrideMethod(c$, "retainAll", 
function(collection){
throw  new UnsupportedOperationException();
}, "java.util.Collection");
Clazz.defineMethod(c$, "size", 
function(){
return this.c.size();
});
Clazz.defineMethod(c$, "toArray", 
function(){
return this.c.toArray();
});
Clazz.defineMethod(c$, "toArray", 
function(array){
return this.c.toArray(array);
}, "~A");
Clazz.defineMethod(c$, "toString", 
function(){
return this.c.toString();
});
c$.$Collections$UnmodifiableCollection$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.iterator = null;
Clazz.instantialize(this, arguments);}, java.util, "Collections$UnmodifiableCollection$1", null, java.util.Iterator);
Clazz.prepareFields (c$, function(){
this.iterator = this.b$["java.util.Collections.UnmodifiableCollection"].c.iterator();
});
Clazz.defineMethod(c$, "hasNext", 
function(){
return this.iterator.hasNext();
});
Clazz.defineMethod(c$, "next", 
function(){
return this.iterator.next();
});
Clazz.overrideMethod(c$, "remove", 
function(){
throw  new UnsupportedOperationException();
});
/*eoif5*/})();
};
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "UnmodifiableRandomAccessList", java.util.Collections.UnmodifiableList, java.util.RandomAccess);
Clazz.overrideMethod(c$, "subList", 
function(start, end){
return  new java.util.Collections.UnmodifiableRandomAccessList(this.list.subList(start, end));
}, "~N,~N");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.list = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "UnmodifiableList", java.util.Collections.UnmodifiableCollection, java.util.List);
Clazz.makeConstructor(c$, 
function(l){
Clazz.superConstructor(this, java.util.Collections.UnmodifiableList, [l]);
this.list = l;
}, "java.util.List");
Clazz.defineMethod(c$, "add", 
function(location, object){
throw  new UnsupportedOperationException();
}, "~N,~O");
Clazz.defineMethod(c$, "addAll", 
function(location, collection){
throw  new UnsupportedOperationException();
}, "~N,java.util.Collection");
Clazz.defineMethod(c$, "equals", 
function(object){
return this.list.equals(object);
}, "~O");
Clazz.defineMethod(c$, "get", 
function(location){
return this.list.get(location);
}, "~N");
Clazz.defineMethod(c$, "hashCode", 
function(){
return this.list.hashCode();
});
Clazz.defineMethod(c$, "indexOf", 
function(object){
return this.list.indexOf(object);
}, "~O");
Clazz.defineMethod(c$, "lastIndexOf", 
function(object){
return this.list.lastIndexOf(object);
}, "~O");
Clazz.defineMethod(c$, "listIterator", 
function(){
return this.listIterator(0);
});
Clazz.defineMethod(c$, "listIterator", 
function(location){
return ((Clazz.isClassDefined("java.util.Collections$UnmodifiableList$1") ? 0 : java.util.Collections.UnmodifiableList.$Collections$UnmodifiableList$1$ ()), Clazz.innerTypeInstance(java.util.Collections$UnmodifiableList$1, this, Clazz.cloneFinals("location", location)));
}, "~N");
Clazz.defineMethod(c$, "remove", 
function(location){
throw  new UnsupportedOperationException();
}, "~N");
Clazz.overrideMethod(c$, "set", 
function(location, object){
throw  new UnsupportedOperationException();
}, "~N,~O");
Clazz.defineMethod(c$, "subList", 
function(start, end){
return  new java.util.Collections.UnmodifiableList(this.list.subList(start, end));
}, "~N,~N");
c$.$Collections$UnmodifiableList$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.iterator = null;
Clazz.instantialize(this, arguments);}, java.util, "Collections$UnmodifiableList$1", null, java.util.ListIterator);
Clazz.prepareFields (c$, function(){
this.iterator = this.b$["java.util.Collections.UnmodifiableList"].list.listIterator(this.f$.location);
});
Clazz.overrideMethod(c$, "add", 
function(object){
throw  new UnsupportedOperationException();
}, "~O");
Clazz.defineMethod(c$, "hasNext", 
function(){
return this.iterator.hasNext();
});
Clazz.defineMethod(c$, "hasPrevious", 
function(){
return this.iterator.hasPrevious();
});
Clazz.defineMethod(c$, "next", 
function(){
return this.iterator.next();
});
Clazz.defineMethod(c$, "nextIndex", 
function(){
return this.iterator.nextIndex();
});
Clazz.defineMethod(c$, "previous", 
function(){
return this.iterator.previous();
});
Clazz.defineMethod(c$, "previousIndex", 
function(){
return this.iterator.previousIndex();
});
Clazz.overrideMethod(c$, "remove", 
function(){
throw  new UnsupportedOperationException();
});
Clazz.overrideMethod(c$, "set", 
function(object){
throw  new UnsupportedOperationException();
}, "~O");
/*eoif5*/})();
};
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.m = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "UnmodifiableMap", null, [java.util.Map, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(map){
this.m = map;
}, "java.util.Map");
Clazz.overrideMethod(c$, "clear", 
function(){
throw  new UnsupportedOperationException();
});
Clazz.defineMethod(c$, "containsKey", 
function(key){
return this.m.containsKey(key);
}, "~O");
Clazz.defineMethod(c$, "containsValue", 
function(value){
return this.m.containsValue(value);
}, "~O");
Clazz.defineMethod(c$, "entrySet", 
function(){
return  new java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet(this.m.entrySet());
});
Clazz.defineMethod(c$, "equals", 
function(object){
return this.m.equals(object);
}, "~O");
Clazz.defineMethod(c$, "get", 
function(key){
return this.m.get(key);
}, "~O");
Clazz.defineMethod(c$, "hashCode", 
function(){
return this.m.hashCode();
});
Clazz.defineMethod(c$, "isEmpty", 
function(){
return this.m.isEmpty();
});
Clazz.defineMethod(c$, "keySet", 
function(){
return  new java.util.Collections.UnmodifiableSet(this.m.keySet());
});
Clazz.overrideMethod(c$, "put", 
function(key, value){
throw  new UnsupportedOperationException();
}, "~O,~O");
Clazz.overrideMethod(c$, "putAll", 
function(map){
throw  new UnsupportedOperationException();
}, "java.util.Map");
Clazz.overrideMethod(c$, "remove", 
function(key){
throw  new UnsupportedOperationException();
}, "~O");
Clazz.defineMethod(c$, "size", 
function(){
return this.m.size();
});
Clazz.defineMethod(c$, "values", 
function(){
return  new java.util.Collections.UnmodifiableCollection(this.m.values());
});
Clazz.defineMethod(c$, "toString", 
function(){
return this.m.toString();
});
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections.UnmodifiableMap, "UnmodifiableEntrySet", java.util.Collections.UnmodifiableSet);
Clazz.overrideMethod(c$, "iterator", 
function(){
return ((Clazz.isClassDefined("java.util.Collections$UnmodifiableMap$UnmodifiableEntrySet$1") ? 0 : java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.$Collections$UnmodifiableMap$UnmodifiableEntrySet$1$ ()), Clazz.innerTypeInstance(java.util.Collections$UnmodifiableMap$UnmodifiableEntrySet$1, this, null));
});
Clazz.defineMethod(c$, "toArray", 
function(){
var length = this.c.size();
var result =  new Array(length);
var it = this.iterator();
for (var i = length; --i >= 0; ) {
result[i] = it.next();
}
return result;
});
Clazz.defineMethod(c$, "toArray", 
function(contents){
var size = this.c.size();
var index = 0;
var it = this.iterator();
if (size > contents.length) {
var ct = contents.getClass().getComponentType();
contents = java.lang.reflect.Array.newInstance(ct, size);
}while (index < size) {
contents[index++] = it.next();
}
if (index < contents.length) {
contents[index] = null;
}return contents;
}, "~A");
c$.$Collections$UnmodifiableMap$UnmodifiableEntrySet$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.iterator = null;
Clazz.instantialize(this, arguments);}, java.util, "Collections$UnmodifiableMap$UnmodifiableEntrySet$1", null, java.util.Iterator);
Clazz.prepareFields (c$, function(){
this.iterator = this.b$["java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet"].c.iterator();
});
Clazz.defineMethod(c$, "hasNext", 
function(){
return this.iterator.hasNext();
});
Clazz.defineMethod(c$, "next", 
function(){
return  new java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.UnmodifiableMapEntry(this.iterator.next());
});
Clazz.overrideMethod(c$, "remove", 
function(){
throw  new UnsupportedOperationException();
});
/*eoif5*/})();
};
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.mapEntry = null;
Clazz.instantialize(this, arguments);}, java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet, "UnmodifiableMapEntry", null, java.util.Map.Entry);
Clazz.makeConstructor(c$, 
function(entry){
this.mapEntry = entry;
}, "java.util.Map.Entry");
Clazz.defineMethod(c$, "equals", 
function(object){
return this.mapEntry.equals(object);
}, "~O");
Clazz.defineMethod(c$, "getKey", 
function(){
return this.mapEntry.getKey();
});
Clazz.defineMethod(c$, "getValue", 
function(){
return this.mapEntry.getValue();
});
Clazz.defineMethod(c$, "hashCode", 
function(){
return this.mapEntry.hashCode();
});
Clazz.overrideMethod(c$, "setValue", 
function(object){
throw  new UnsupportedOperationException();
}, "~O");
Clazz.defineMethod(c$, "toString", 
function(){
return this.mapEntry.toString();
});
/*eoif3*/})();
/*eoif3*/})();
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "UnmodifiableSet", java.util.Collections.UnmodifiableCollection, java.util.Set);
Clazz.overrideMethod(c$, "equals", 
function(object){
return this.c.equals(object);
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
return this.c.hashCode();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.sm = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "UnmodifiableSortedMap", java.util.Collections.UnmodifiableMap, java.util.SortedMap);
Clazz.makeConstructor(c$, 
function(map){
Clazz.superConstructor(this, java.util.Collections.UnmodifiableSortedMap, [map]);
this.sm = map;
}, "java.util.SortedMap");
Clazz.defineMethod(c$, "comparator", 
function(){
return this.sm.comparator();
});
Clazz.defineMethod(c$, "firstKey", 
function(){
return this.sm.firstKey();
});
Clazz.defineMethod(c$, "headMap", 
function(before){
return  new java.util.Collections.UnmodifiableSortedMap(this.sm.headMap(before));
}, "~O");
Clazz.defineMethod(c$, "lastKey", 
function(){
return this.sm.lastKey();
});
Clazz.defineMethod(c$, "subMap", 
function(start, end){
return  new java.util.Collections.UnmodifiableSortedMap(this.sm.subMap(start, end));
}, "~O,~O");
Clazz.defineMethod(c$, "tailMap", 
function(after){
return  new java.util.Collections.UnmodifiableSortedMap(this.sm.tailMap(after));
}, "~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.ss = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "UnmodifiableSortedSet", java.util.Collections.UnmodifiableSet, java.util.SortedSet);
Clazz.makeConstructor(c$, 
function(set){
Clazz.superConstructor(this, java.util.Collections.UnmodifiableSortedSet, [set]);
this.ss = set;
}, "java.util.SortedSet");
Clazz.defineMethod(c$, "comparator", 
function(){
return this.ss.comparator();
});
Clazz.defineMethod(c$, "first", 
function(){
return this.ss.first();
});
Clazz.defineMethod(c$, "headSet", 
function(before){
return  new java.util.Collections.UnmodifiableSortedSet(this.ss.headSet(before));
}, "~O");
Clazz.defineMethod(c$, "last", 
function(){
return this.ss.last();
});
Clazz.defineMethod(c$, "subSet", 
function(start, end){
return  new java.util.Collections.UnmodifiableSortedSet(this.ss.subSet(start, end));
}, "~O,~O");
Clazz.defineMethod(c$, "tailSet", 
function(after){
return  new java.util.Collections.UnmodifiableSortedSet(this.ss.tailSet(after));
}, "~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.c = null;
this.type = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "CheckedCollection", null, [java.util.Collection, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(c, type){
if (c == null || type == null) {
throw  new NullPointerException();
}this.c = c;
this.type = type;
}, "java.util.Collection,Class");
Clazz.defineMethod(c$, "size", 
function(){
return this.c.size();
});
Clazz.defineMethod(c$, "isEmpty", 
function(){
return this.c.isEmpty();
});
Clazz.defineMethod(c$, "contains", 
function(obj){
return this.c.contains(obj);
}, "~O");
Clazz.defineMethod(c$, "iterator", 
function(){
var i = this.c.iterator();
if (Clazz.instanceOf(i,"java.util.ListIterator")) {
i =  new java.util.Collections.CheckedListIterator(i, this.type);
}return i;
});
Clazz.defineMethod(c$, "toArray", 
function(){
return this.c.toArray();
});
Clazz.defineMethod(c$, "toArray", 
function(arr){
return this.c.toArray(arr);
}, "~A");
Clazz.defineMethod(c$, "add", 
function(obj){
return this.c.add(java.util.Collections.checkType(obj, this.type));
}, "~O");
Clazz.defineMethod(c$, "remove", 
function(obj){
return this.c.remove(obj);
}, "~O");
Clazz.defineMethod(c$, "containsAll", 
function(c1){
return this.c.containsAll(c1);
}, "java.util.Collection");
Clazz.overrideMethod(c$, "addAll", 
function(c1){
var size = c1.size();
if (size == 0) {
return false;
}var arr =  new Array(size);
var it = c1.iterator();
for (var i = 0; i < size; i++) {
arr[i] = java.util.Collections.checkType(it.next(), this.type);
}
var added = false;
for (var i = 0; i < size; i++) {
added = new Boolean (added | this.c.add(arr[i])).valueOf();
}
return added;
}, "java.util.Collection");
Clazz.defineMethod(c$, "removeAll", 
function(c1){
return this.c.removeAll(c1);
}, "java.util.Collection");
Clazz.defineMethod(c$, "retainAll", 
function(c1){
return this.c.retainAll(c1);
}, "java.util.Collection");
Clazz.defineMethod(c$, "clear", 
function(){
this.c.clear();
});
Clazz.defineMethod(c$, "toString", 
function(){
return this.c.toString();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.i = null;
this.type = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "CheckedListIterator", null, java.util.ListIterator);
Clazz.makeConstructor(c$, 
function(i, type){
this.i = i;
this.type = type;
}, "java.util.ListIterator,Class");
Clazz.defineMethod(c$, "hasNext", 
function(){
return this.i.hasNext();
});
Clazz.defineMethod(c$, "next", 
function(){
return this.i.next();
});
Clazz.defineMethod(c$, "remove", 
function(){
this.i.remove();
});
Clazz.defineMethod(c$, "hasPrevious", 
function(){
return this.i.hasPrevious();
});
Clazz.defineMethod(c$, "previous", 
function(){
return this.i.previous();
});
Clazz.defineMethod(c$, "nextIndex", 
function(){
return this.i.nextIndex();
});
Clazz.defineMethod(c$, "previousIndex", 
function(){
return this.i.previousIndex();
});
Clazz.defineMethod(c$, "set", 
function(obj){
this.i.set(java.util.Collections.checkType(obj, this.type));
}, "~O");
Clazz.defineMethod(c$, "add", 
function(obj){
this.i.add(java.util.Collections.checkType(obj, this.type));
}, "~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.l = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "CheckedList", java.util.Collections.CheckedCollection, java.util.List);
Clazz.makeConstructor(c$, 
function(l, type){
Clazz.superConstructor(this, java.util.Collections.CheckedList, [l, type]);
this.l = l;
}, "java.util.List,Class");
Clazz.defineMethod(c$, "addAll", 
function(index, c1){
var size = c1.size();
if (size == 0) {
return false;
}var arr =  new Array(size);
var it = c1.iterator();
for (var i = 0; i < size; i++) {
arr[i] = java.util.Collections.checkType(it.next(), this.type);
}
return this.l.addAll(index, java.util.Arrays.asList(arr));
}, "~N,java.util.Collection");
Clazz.defineMethod(c$, "get", 
function(index){
return this.l.get(index);
}, "~N");
Clazz.defineMethod(c$, "set", 
function(index, obj){
return this.l.set(index, java.util.Collections.checkType(obj, this.type));
}, "~N,~O");
Clazz.defineMethod(c$, "add", 
function(index, obj){
this.l.add(index, java.util.Collections.checkType(obj, this.type));
}, "~N,~O");
Clazz.defineMethod(c$, "remove", 
function(index){
return this.l.remove(index);
}, "~N");
Clazz.defineMethod(c$, "indexOf", 
function(obj){
return this.l.indexOf(obj);
}, "~O");
Clazz.defineMethod(c$, "lastIndexOf", 
function(obj){
return this.l.lastIndexOf(obj);
}, "~O");
Clazz.defineMethod(c$, "listIterator", 
function(){
return  new java.util.Collections.CheckedListIterator(this.l.listIterator(), this.type);
});
Clazz.defineMethod(c$, "listIterator", 
function(index){
return  new java.util.Collections.CheckedListIterator(this.l.listIterator(index), this.type);
}, "~N");
Clazz.defineMethod(c$, "subList", 
function(fromIndex, toIndex){
return java.util.Collections.checkedList(this.l.subList(fromIndex, toIndex), this.type);
}, "~N,~N");
Clazz.defineMethod(c$, "equals", 
function(obj){
return this.l.equals(obj);
}, "~O");
Clazz.defineMethod(c$, "hashCode", 
function(){
return this.l.hashCode();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "CheckedRandomAccessList", java.util.Collections.CheckedList, java.util.RandomAccess);
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.Collections, "CheckedSet", java.util.Collections.CheckedCollection, java.util.Set);
Clazz.overrideMethod(c$, "equals", 
function(obj){
return this.c.equals(obj);
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
return this.c.hashCode();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.m = null;
this.keyType = null;
this.valueType = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "CheckedMap", null, [java.util.Map, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(m, keyType, valueType){
if (m == null || keyType == null || valueType == null) {
throw  new NullPointerException();
}this.m = m;
this.keyType = keyType;
this.valueType = valueType;
}, "java.util.Map,Class,Class");
Clazz.defineMethod(c$, "size", 
function(){
return this.m.size();
});
Clazz.defineMethod(c$, "isEmpty", 
function(){
return this.m.isEmpty();
});
Clazz.defineMethod(c$, "containsKey", 
function(key){
return this.m.containsKey(key);
}, "~O");
Clazz.defineMethod(c$, "containsValue", 
function(value){
return this.m.containsValue(value);
}, "~O");
Clazz.defineMethod(c$, "get", 
function(key){
return this.m.get(key);
}, "~O");
Clazz.defineMethod(c$, "put", 
function(key, value){
return this.m.put(java.util.Collections.checkType(key, this.keyType), java.util.Collections.checkType(value, this.valueType));
}, "~O,~O");
Clazz.defineMethod(c$, "remove", 
function(key){
return this.m.remove(key);
}, "~O");
Clazz.overrideMethod(c$, "putAll", 
function(map){
var size = map.size();
if (size == 0) {
return;
}var entries =  new Array(size);
var it = map.entrySet().iterator();
for (var i = 0; i < size; i++) {
var e = it.next();
java.util.Collections.checkType(e.getKey(), this.keyType);
java.util.Collections.checkType(e.getValue(), this.valueType);
entries[i] = e;
}
for (var i = 0; i < size; i++) {
this.m.put(entries[i].getKey(), entries[i].getValue());
}
}, "java.util.Map");
Clazz.defineMethod(c$, "clear", 
function(){
this.m.clear();
});
Clazz.defineMethod(c$, "keySet", 
function(){
return this.m.keySet();
});
Clazz.defineMethod(c$, "values", 
function(){
return this.m.values();
});
Clazz.defineMethod(c$, "entrySet", 
function(){
return  new java.util.Collections.CheckedMap.CheckedEntrySet(this.m.entrySet(), this.valueType);
});
Clazz.defineMethod(c$, "equals", 
function(obj){
return this.m.equals(obj);
}, "~O");
Clazz.defineMethod(c$, "hashCode", 
function(){
return this.m.hashCode();
});
Clazz.defineMethod(c$, "toString", 
function(){
return this.m.toString();
});
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.e = null;
this.valueType = null;
Clazz.instantialize(this, arguments);}, java.util.Collections.CheckedMap, "CheckedEntry", null, java.util.Map.Entry);
Clazz.makeConstructor(c$, 
function(e, valueType){
if (e == null) {
throw  new NullPointerException();
}this.e = e;
this.valueType = valueType;
}, "java.util.Map.Entry,Class");
Clazz.defineMethod(c$, "getKey", 
function(){
return this.e.getKey();
});
Clazz.defineMethod(c$, "getValue", 
function(){
return this.e.getValue();
});
Clazz.defineMethod(c$, "setValue", 
function(obj){
return this.e.setValue(java.util.Collections.checkType(obj, this.valueType));
}, "~O");
Clazz.defineMethod(c$, "equals", 
function(obj){
return this.e.equals(obj);
}, "~O");
Clazz.defineMethod(c$, "hashCode", 
function(){
return this.e.hashCode();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.s = null;
this.valueType = null;
Clazz.instantialize(this, arguments);}, java.util.Collections.CheckedMap, "CheckedEntrySet", null, java.util.Set);
Clazz.makeConstructor(c$, 
function(s, valueType){
this.s = s;
this.valueType = valueType;
}, "java.util.Set,Class");
Clazz.defineMethod(c$, "iterator", 
function(){
return  new java.util.Collections.CheckedMap.CheckedEntrySet.CheckedEntryIterator(this.s.iterator(), this.valueType);
});
Clazz.defineMethod(c$, "toArray", 
function(){
var thisSize = this.size();
var array =  new Array(thisSize);
var it = this.iterator();
for (var i = 0; i < thisSize; i++) {
array[i] = it.next();
}
return array;
});
Clazz.defineMethod(c$, "toArray", 
function(array){
var thisSize = this.size();
if (array.length < thisSize) {
var ct = array.getClass().getComponentType();
array = java.lang.reflect.Array.newInstance(ct, thisSize);
}var it = this.iterator();
for (var i = 0; i < thisSize; i++) {
array[i] = it.next();
}
if (thisSize < array.length) {
array[thisSize] = null;
}return array;
}, "~A");
Clazz.defineMethod(c$, "retainAll", 
function(c){
return this.s.retainAll(c);
}, "java.util.Collection");
Clazz.defineMethod(c$, "removeAll", 
function(c){
return this.s.removeAll(c);
}, "java.util.Collection");
Clazz.defineMethod(c$, "containsAll", 
function(c){
return this.s.containsAll(c);
}, "java.util.Collection");
Clazz.overrideMethod(c$, "addAll", 
function(c){
throw  new UnsupportedOperationException();
}, "java.util.Collection");
Clazz.defineMethod(c$, "remove", 
function(o){
return this.s.remove(o);
}, "~O");
Clazz.defineMethod(c$, "contains", 
function(o){
return this.s.contains(o);
}, "~O");
Clazz.overrideMethod(c$, "add", 
function(o){
throw  new UnsupportedOperationException();
}, "java.util.Map.Entry");
Clazz.defineMethod(c$, "isEmpty", 
function(){
return this.s.isEmpty();
});
Clazz.defineMethod(c$, "clear", 
function(){
this.s.clear();
});
Clazz.defineMethod(c$, "size", 
function(){
return this.s.size();
});
Clazz.defineMethod(c$, "hashCode", 
function(){
return this.s.hashCode();
});
Clazz.defineMethod(c$, "equals", 
function(object){
return this.s.equals(object);
}, "~O");
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.i = null;
this.valueType = null;
Clazz.instantialize(this, arguments);}, java.util.Collections.CheckedMap.CheckedEntrySet, "CheckedEntryIterator", null, java.util.Iterator);
Clazz.makeConstructor(c$, 
function(i, valueType){
this.i = i;
this.valueType = valueType;
}, "java.util.Iterator,Class");
Clazz.defineMethod(c$, "hasNext", 
function(){
return this.i.hasNext();
});
Clazz.defineMethod(c$, "remove", 
function(){
this.i.remove();
});
Clazz.defineMethod(c$, "next", 
function(){
return  new java.util.Collections.CheckedMap.CheckedEntry(this.i.next(), this.valueType);
});
/*eoif3*/})();
/*eoif3*/})();
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.ss = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "CheckedSortedSet", java.util.Collections.CheckedSet, java.util.SortedSet);
Clazz.makeConstructor(c$, 
function(s, type){
Clazz.superConstructor(this, java.util.Collections.CheckedSortedSet, [s, type]);
this.ss = s;
}, "java.util.SortedSet,Class");
Clazz.defineMethod(c$, "comparator", 
function(){
return this.ss.comparator();
});
Clazz.defineMethod(c$, "subSet", 
function(fromElement, toElement){
return  new java.util.Collections.CheckedSortedSet(this.ss.subSet(fromElement, toElement), this.type);
}, "~O,~O");
Clazz.defineMethod(c$, "headSet", 
function(toElement){
return  new java.util.Collections.CheckedSortedSet(this.ss.headSet(toElement), this.type);
}, "~O");
Clazz.defineMethod(c$, "tailSet", 
function(fromElement){
return  new java.util.Collections.CheckedSortedSet(this.ss.tailSet(fromElement), this.type);
}, "~O");
Clazz.defineMethod(c$, "first", 
function(){
return this.ss.first();
});
Clazz.defineMethod(c$, "last", 
function(){
return this.ss.last();
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.sm = null;
Clazz.instantialize(this, arguments);}, java.util.Collections, "CheckedSortedMap", java.util.Collections.CheckedMap, java.util.SortedMap);
Clazz.makeConstructor(c$, 
function(m, keyType, valueType){
Clazz.superConstructor(this, java.util.Collections.CheckedSortedMap, [m, keyType, valueType]);
this.sm = m;
}, "java.util.SortedMap,Class,Class");
Clazz.defineMethod(c$, "comparator", 
function(){
return this.sm.comparator();
});
Clazz.defineMethod(c$, "subMap", 
function(fromKey, toKey){
return  new java.util.Collections.CheckedSortedMap(this.sm.subMap(fromKey, toKey), this.keyType, this.valueType);
}, "~O,~O");
Clazz.defineMethod(c$, "headMap", 
function(toKey){
return  new java.util.Collections.CheckedSortedMap(this.sm.headMap(toKey), this.keyType, this.valueType);
}, "~O");
Clazz.defineMethod(c$, "tailMap", 
function(fromKey){
return  new java.util.Collections.CheckedSortedMap(this.sm.tailMap(fromKey), this.keyType, this.valueType);
}, "~O");
Clazz.defineMethod(c$, "firstKey", 
function(){
return this.sm.firstKey();
});
Clazz.defineMethod(c$, "lastKey", 
function(){
return this.sm.lastKey();
});
/*eoif3*/})();
c$.EMPTY_ENUMERATION = null;
c$.EMPTY_ITERATOR = null;
c$.EMPTY_LIST =  new java.util.Collections.EmptyList();
c$.EMPTY_SET =  new java.util.Collections.EmptySet();
c$.EMPTY_MAP =  new java.util.Collections.EmptyMap();
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.AbstractCollection", "$.Iterator", "$.List", "$.ListIterator", "$.RandomAccess"], "java.util.AbstractList", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.modCount = 0;
Clazz.instantialize(this, arguments);}, java.util, "AbstractList", java.util.AbstractCollection, java.util.List);
Clazz.defineMethod(c$, "add", 
function(location, object){
throw  new UnsupportedOperationException();
}, "~N,~O");
Clazz.defineMethod(c$, "add", 
function(object){
this.add(this.size(), object);
return true;
}, "~O");
Clazz.defineMethod(c$, "addAll", 
function(location, collection){
var it = collection.iterator();
while (it.hasNext()) {
this.add(location++, it.next());
}
return !collection.isEmpty();
}, "~N,java.util.Collection");
Clazz.overrideMethod(c$, "clear", 
function(){
this.removeRange(0, this.size());
});
Clazz.overrideMethod(c$, "equals", 
function(object){
if (this === object) {
return true;
}if (Clazz.instanceOf(object,"java.util.List")) {
var list = object;
if (list.size() != this.size()) {
return false;
}var it1 = this.iterator();
var it2 = list.iterator();
while (it1.hasNext()) {
var e1 = it1.next();
var e2 = it2.next();
if (!(e1 == null ? e2 == null : e1.equals(e2))) {
return false;
}}
return true;
}return false;
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
var result = 1;
var it = this.iterator();
while (it.hasNext()) {
var object = it.next();
result = (31 * result) + (object == null ? 0 : object.hashCode());
}
return result;
});
Clazz.overrideMethod(c$, "indexOf", 
function(object){
var it = this.listIterator();
if (object != null) {
while (it.hasNext()) {
if (object.equals(it.next())) {
return it.previousIndex();
}}
} else {
while (it.hasNext()) {
if (it.next() == null) {
return it.previousIndex();
}}
}return -1;
}, "~O");
Clazz.overrideMethod(c$, "iterator", 
function(){
return  new java.util.AbstractList.SimpleListIterator(this);
});
Clazz.overrideMethod(c$, "lastIndexOf", 
function(object){
var it = this.listIterator(this.size());
if (object != null) {
while (it.hasPrevious()) {
if (object.equals(it.previous())) {
return it.nextIndex();
}}
} else {
while (it.hasPrevious()) {
if (it.previous() == null) {
return it.nextIndex();
}}
}return -1;
}, "~O");
Clazz.defineMethod(c$, "listIterator", 
function(){
return this.listIterator(0);
});
Clazz.defineMethod(c$, "listIterator", 
function(location){
return  new java.util.AbstractList.FullListIterator(this, location);
}, "~N");
Clazz.defineMethod(c$, "remove", 
function(location){
throw  new UnsupportedOperationException();
}, "~N");
Clazz.defineMethod(c$, "removeRange", 
function(start, end){
var it = this.listIterator(start);
for (var i = start; i < end; i++) {
it.next();
it.remove();
}
}, "~N,~N");
Clazz.overrideMethod(c$, "set", 
function(location, object){
throw  new UnsupportedOperationException();
}, "~N,~O");
Clazz.overrideMethod(c$, "subList", 
function(start, end){
if (0 <= start && end <= this.size()) {
if (start <= end) {
if (Clazz.instanceOf(this,"java.util.RandomAccess")) {
return  new java.util.AbstractList.SubAbstractListRandomAccess(this, start, end);
}return  new java.util.AbstractList.SubAbstractList(this, start, end);
}throw  new IllegalArgumentException();
}throw  new IndexOutOfBoundsException();
}, "~N,~N");
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.pos = -1;
this.expectedModCount = 0;
this.lastPosition = -1;
this.list = null;
Clazz.instantialize(this, arguments);}, java.util.AbstractList, "SimpleListIterator", null, java.util.Iterator);
Clazz.makeConstructor(c$, 
function(l){
this.list = l;
this.expectedModCount = l.modCount;
}, "java.util.AbstractList");
Clazz.overrideMethod(c$, "hasNext", 
function(){
return this.pos + 1 < this.list.size();
});
Clazz.overrideMethod(c$, "next", 
function(){
if (this.expectedModCount == this.list.modCount) {
try {
var result = this.list.get(this.pos + 1);
this.lastPosition = ++this.pos;
return result;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw  new java.util.NoSuchElementException();
} else {
throw e;
}
}
}throw  new java.util.ConcurrentModificationException();
});
Clazz.overrideMethod(c$, "remove", 
function(){
if (this.expectedModCount == this.list.modCount) {
try {
this.list.remove(this.lastPosition);
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw  new IllegalStateException();
} else {
throw e;
}
}
if (this.list.modCount != this.expectedModCount) {
this.expectedModCount++;
}if (this.pos == this.lastPosition) {
this.pos--;
}this.lastPosition = -1;
} else {
throw  new java.util.ConcurrentModificationException();
}});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.AbstractList, "FullListIterator", java.util.AbstractList.SimpleListIterator, java.util.ListIterator);
Clazz.makeConstructor(c$, 
function(list, start){
Clazz.superConstructor(this, java.util.AbstractList.FullListIterator, [list]);
if (0 <= start && start <= list.size()) {
this.pos = start - 1;
} else {
throw  new IndexOutOfBoundsException();
}}, "java.util.AbstractList,~N");
Clazz.overrideMethod(c$, "add", 
function(object){
if (this.expectedModCount == this.list.modCount) {
try {
this.list.add(this.pos + 1, object);
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw  new java.util.NoSuchElementException();
} else {
throw e;
}
}
this.pos++;
this.lastPosition = -1;
if (this.list.modCount != this.expectedModCount) {
this.expectedModCount++;
}} else {
throw  new java.util.ConcurrentModificationException();
}}, "~O");
Clazz.overrideMethod(c$, "hasPrevious", 
function(){
return this.pos >= 0;
});
Clazz.overrideMethod(c$, "nextIndex", 
function(){
return this.pos + 1;
});
Clazz.overrideMethod(c$, "previous", 
function(){
if (this.expectedModCount == this.list.modCount) {
try {
var result = this.list.get(this.pos);
this.lastPosition = this.pos;
this.pos--;
return result;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw  new java.util.NoSuchElementException();
} else {
throw e;
}
}
}throw  new java.util.ConcurrentModificationException();
});
Clazz.overrideMethod(c$, "previousIndex", 
function(){
return this.pos;
});
Clazz.overrideMethod(c$, "set", 
function(object){
if (this.expectedModCount == this.list.modCount) {
try {
this.list.set(this.lastPosition, object);
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw  new IllegalStateException();
} else {
throw e;
}
}
} else {
throw  new java.util.ConcurrentModificationException();
}}, "~O");
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.AbstractList, "SubAbstractListRandomAccess", java.util.AbstractList.SubAbstractList, java.util.RandomAccess);
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.fullList = null;
this.offset = 0;
this.$size = 0;
Clazz.instantialize(this, arguments);}, java.util.AbstractList, "SubAbstractList", java.util.AbstractList);
Clazz.makeConstructor(c$, 
function(list, start, end){
Clazz.superConstructor(this, java.util.AbstractList.SubAbstractList);
this.fullList = list;
this.modCount = this.fullList.modCount;
this.offset = start;
this.$size = end - start;
}, "java.util.AbstractList,~N,~N");
Clazz.defineMethod(c$, "add", 
function(location, object){
if (this.modCount == this.fullList.modCount) {
if (0 <= location && location <= this.$size) {
this.fullList.add(location + this.offset, object);
this.$size++;
this.modCount = this.fullList.modCount;
} else {
throw  new IndexOutOfBoundsException();
}} else {
throw  new java.util.ConcurrentModificationException();
}}, "~N,~O");
Clazz.defineMethod(c$, "addAll", 
function(location, collection){
if (this.modCount == this.fullList.modCount) {
if (0 <= location && location <= this.$size) {
var result = this.fullList.addAll(location + this.offset, collection);
if (result) {
this.$size += collection.size();
this.modCount = this.fullList.modCount;
}return result;
}throw  new IndexOutOfBoundsException();
}throw  new java.util.ConcurrentModificationException();
}, "~N,java.util.Collection");
Clazz.defineMethod(c$, "addAll", 
function(collection){
if (this.modCount == this.fullList.modCount) {
var result = this.fullList.addAll(this.offset + this.$size, collection);
if (result) {
this.$size += collection.size();
this.modCount = this.fullList.modCount;
}return result;
}throw  new java.util.ConcurrentModificationException();
}, "java.util.Collection");
Clazz.defineMethod(c$, "get", 
function(location){
if (this.modCount == this.fullList.modCount) {
if (0 <= location && location < this.$size) {
return this.fullList.get(location + this.offset);
}throw  new IndexOutOfBoundsException();
}throw  new java.util.ConcurrentModificationException();
}, "~N");
Clazz.overrideMethod(c$, "iterator", 
function(){
return this.listIterator(0);
});
Clazz.defineMethod(c$, "listIterator", 
function(location){
if (this.modCount == this.fullList.modCount) {
if (0 <= location && location <= this.$size) {
return  new java.util.AbstractList.SubAbstractList.SubAbstractListIterator(this.fullList.listIterator(location + this.offset), this, this.offset, this.$size);
}throw  new IndexOutOfBoundsException();
}throw  new java.util.ConcurrentModificationException();
}, "~N");
Clazz.defineMethod(c$, "remove", 
function(location){
if (this.modCount == this.fullList.modCount) {
if (0 <= location && location < this.$size) {
var result = this.fullList.remove(location + this.offset);
this.$size--;
this.modCount = this.fullList.modCount;
return result;
}throw  new IndexOutOfBoundsException();
}throw  new java.util.ConcurrentModificationException();
}, "~N");
Clazz.defineMethod(c$, "removeRange", 
function(start, end){
if (start != end) {
if (this.modCount == this.fullList.modCount) {
this.fullList.removeRange(start + this.offset, end + this.offset);
this.$size -= end - start;
this.modCount = this.fullList.modCount;
} else {
throw  new java.util.ConcurrentModificationException();
}}}, "~N,~N");
Clazz.defineMethod(c$, "set", 
function(location, object){
if (this.modCount == this.fullList.modCount) {
if (0 <= location && location < this.$size) {
return this.fullList.set(location + this.offset, object);
}throw  new IndexOutOfBoundsException();
}throw  new java.util.ConcurrentModificationException();
}, "~N,~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.$size;
});
Clazz.defineMethod(c$, "sizeChanged", 
function(increment){
if (increment) {
this.$size++;
} else {
this.$size--;
}this.modCount = this.fullList.modCount;
}, "~B");
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.subList = null;
this.iterator = null;
this.start = 0;
this.end = 0;
Clazz.instantialize(this, arguments);}, java.util.AbstractList.SubAbstractList, "SubAbstractListIterator", null, java.util.ListIterator);
Clazz.makeConstructor(c$, 
function(it, list, offset, length){
this.iterator = it;
this.subList = list;
this.start = offset;
this.end = this.start + length;
}, "java.util.ListIterator,java.util.AbstractList.SubAbstractList,~N,~N");
Clazz.defineMethod(c$, "add", 
function(object){
this.iterator.add(object);
this.subList.sizeChanged(true);
this.end++;
}, "~O");
Clazz.overrideMethod(c$, "hasNext", 
function(){
return this.iterator.nextIndex() < this.end;
});
Clazz.overrideMethod(c$, "hasPrevious", 
function(){
return this.iterator.previousIndex() >= this.start;
});
Clazz.defineMethod(c$, "next", 
function(){
if (this.iterator.nextIndex() < this.end) {
return this.iterator.next();
}throw  new java.util.NoSuchElementException();
});
Clazz.defineMethod(c$, "nextIndex", 
function(){
return this.iterator.nextIndex() - this.start;
});
Clazz.defineMethod(c$, "previous", 
function(){
if (this.iterator.previousIndex() >= this.start) {
return this.iterator.previous();
}throw  new java.util.NoSuchElementException();
});
Clazz.defineMethod(c$, "previousIndex", 
function(){
var previous = this.iterator.previousIndex();
if (previous >= this.start) {
return previous - this.start;
}return -1;
});
Clazz.defineMethod(c$, "remove", 
function(){
this.iterator.remove();
this.subList.sizeChanged(false);
this.end--;
});
Clazz.defineMethod(c$, "set", 
function(object){
this.iterator.set(object);
}, "~O");
/*eoif3*/})();
/*eoif3*/})();
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.Map"], "java.util.AbstractMap", ["java.util.AbstractCollection", "$.AbstractSet", "$.Iterator"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.$keySet = null;
this.$values = null;
Clazz.instantialize(this, arguments);}, java.util, "AbstractMap", null, java.util.Map);
Clazz.overrideMethod(c$, "clear", 
function(){
this.entrySet().clear();
});
Clazz.overrideMethod(c$, "containsKey", 
function(key){
var it = this.entrySet().iterator();
if (key != null) {
while (it.hasNext()) {
if (key.equals(it.next().getKey())) {
return true;
}}
} else {
while (it.hasNext()) {
if (it.next().getKey() == null) {
return true;
}}
}return false;
}, "~O");
Clazz.overrideMethod(c$, "containsValue", 
function(value){
var it = this.entrySet().iterator();
if (value != null) {
while (it.hasNext()) {
if (value.equals(it.next().getValue())) {
return true;
}}
} else {
while (it.hasNext()) {
if (it.next().getValue() == null) {
return true;
}}
}return false;
}, "~O");
Clazz.overrideMethod(c$, "equals", 
function(object){
if (this === object) {
return true;
}if (Clazz.instanceOf(object,"java.util.Map")) {
var map = object;
if (this.size() != map.size()) {
return false;
}var objectSet = map.entrySet();
var it = this.entrySet().iterator();
while (it.hasNext()) {
if (!objectSet.contains(it.next())) {
return false;
}}
return true;
}return false;
}, "~O");
Clazz.overrideMethod(c$, "get", 
function(key){
var it = this.entrySet().iterator();
if (key != null) {
while (it.hasNext()) {
var entry = it.next();
if (key.equals(entry.getKey())) {
return entry.getValue();
}}
} else {
while (it.hasNext()) {
var entry = it.next();
if (entry.getKey() == null) {
return entry.getValue();
}}
}return null;
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
var result = 0;
var it = this.entrySet().iterator();
while (it.hasNext()) {
result += it.next().hashCode();
}
return result;
});
Clazz.overrideMethod(c$, "isEmpty", 
function(){
return this.size() == 0;
});
Clazz.overrideMethod(c$, "keySet", 
function(){
if (this.$keySet == null) {
this.$keySet = ((Clazz.isClassDefined("java.util.AbstractMap$1") ? 0 : java.util.AbstractMap.$AbstractMap$1$ ()), Clazz.innerTypeInstance(java.util.AbstractMap$1, this, null));
}return this.$keySet;
});
Clazz.overrideMethod(c$, "put", 
function(key, value){
throw  new UnsupportedOperationException();
}, "~O,~O");
Clazz.overrideMethod(c$, "putAll", 
function(map){
this.putAllAM(map);
}, "java.util.Map");
Clazz.defineMethod(c$, "putAllAM", 
function(map){
if (!map.isEmpty()) for (var entry, $entry = map.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) {
this.put(entry.getKey(), entry.getValue());
}
}, "java.util.Map");
Clazz.overrideMethod(c$, "remove", 
function(key){
var it = this.entrySet().iterator();
if (key != null) {
while (it.hasNext()) {
var entry = it.next();
if (key.equals(entry.getKey())) {
it.remove();
return entry.getValue();
}}
} else {
while (it.hasNext()) {
var entry = it.next();
if (entry.getKey() == null) {
it.remove();
return entry.getValue();
}}
}return null;
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.entrySet().size();
});
Clazz.overrideMethod(c$, "toString", 
function(){
if (this.isEmpty()) {
return "{}";
}var buffer = "{";
var it = this.entrySet().iterator();
while (it.hasNext()) {
var entry = it.next();
var key = entry.getKey();
if (key !== this) {
buffer += (key);
} else {
buffer += ("(this Map)");
}buffer += ('=');
var value = entry.getValue();
if (value !== this) {
buffer += (value);
} else {
buffer += ("(this Map)");
}if (it.hasNext()) {
buffer += (", ");
}}
buffer += ('}');
return buffer;
});
Clazz.overrideMethod(c$, "values", 
function(){
if (this.$values == null) {
this.$values = ((Clazz.isClassDefined("java.util.AbstractMap$2") ? 0 : java.util.AbstractMap.$AbstractMap$2$ ()), Clazz.innerTypeInstance(java.util.AbstractMap$2, this, null));
}return this.$values;
});
Clazz.defineMethod(c$, "clone", 
function(){
return this.cloneAM();
});
Clazz.defineMethod(c$, "cloneAM", 
function(){
var result;
{
result = Clazz.clone(this);
}result.$keySet = null;
result.$values = null;
return result;
});
c$.$AbstractMap$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "AbstractMap$1", java.util.AbstractSet);
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.b$["java.util.AbstractMap"].containsKey(object);
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.b$["java.util.AbstractMap"].size();
});
Clazz.overrideMethod(c$, "iterator", 
function(){
return ((Clazz.isClassDefined("java.util.AbstractMap$1$1") ? 0 : java.util.AbstractMap.$AbstractMap$1$1$ ()), Clazz.innerTypeInstance(java.util.AbstractMap$1$1, this, null));
});
/*eoif5*/})();
};
c$.$AbstractMap$1$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.setIterator = null;
Clazz.instantialize(this, arguments);}, java.util, "AbstractMap$1$1", null, java.util.Iterator);
Clazz.prepareFields (c$, function(){
this.setIterator = this.b$["java.util.AbstractMap"].entrySet().iterator();
});
Clazz.overrideMethod(c$, "hasNext", 
function(){
return this.setIterator.hasNext();
});
Clazz.overrideMethod(c$, "next", 
function(){
return this.setIterator.next().getKey();
});
Clazz.overrideMethod(c$, "remove", 
function(){
this.setIterator.remove();
});
/*eoif5*/})();
};
c$.$AbstractMap$2$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "AbstractMap$2", java.util.AbstractCollection);
Clazz.overrideMethod(c$, "size", 
function(){
return this.b$["java.util.AbstractMap"].size();
});
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.b$["java.util.AbstractMap"].containsValue(object);
}, "~O");
Clazz.overrideMethod(c$, "iterator", 
function(){
return ((Clazz.isClassDefined("java.util.AbstractMap$2$1") ? 0 : java.util.AbstractMap.$AbstractMap$2$1$ ()), Clazz.innerTypeInstance(java.util.AbstractMap$2$1, this, null));
});
/*eoif5*/})();
};
c$.$AbstractMap$2$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.setIterator = null;
Clazz.instantialize(this, arguments);}, java.util, "AbstractMap$2$1", null, java.util.Iterator);
Clazz.prepareFields (c$, function(){
this.setIterator = this.b$["java.util.AbstractMap"].entrySet().iterator();
});
Clazz.overrideMethod(c$, "hasNext", 
function(){
return this.setIterator.hasNext();
});
Clazz.overrideMethod(c$, "next", 
function(){
return this.setIterator.next().getValue();
});
Clazz.overrideMethod(c$, "remove", 
function(){
this.setIterator.remove();
});
/*eoif5*/})();
};
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declareInterface(java.util, "SortedMap", java.util.Map);
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declareInterface(java.util, "SortedSet", java.util.Set);
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.AbstractList", "$.List", "$.RandomAccess"], "java.util.ArrayList", ["java.util.Arrays"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.firstIndex = 0;
this.lastIndex = 0;
this.array = null;
Clazz.instantialize(this, arguments);}, java.util, "ArrayList", java.util.AbstractList, [java.util.List, Cloneable, java.io.Serializable, java.util.RandomAccess]);
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, java.util.ArrayList, []);
this.setCapacity(0);
});
Clazz.makeConstructor(c$, 
function(capacity){
Clazz.superConstructor (this, java.util.ArrayList, []);
this.setCapacity(capacity);
}, "~N");
Clazz.makeConstructor(c$, 
function(collection){
this.firstIndex = this.lastIndex = 0;
var n = -1;
{
if (!collection) {
n = 0;
} else if (typeof collection == "number") {
n = collection;
}
}if (n >= 0) {
this.setCapacity(n);
return;
}var size = collection.size();
this.array = this.newElementArray(size + (Clazz.doubleToInt(size / 10)));
this.addAll(collection);
}, "java.util.Collection");
Clazz.defineMethod(c$, "setCapacity", 
function(capacity){
try {
this.array = this.newElementArray(capacity);
} catch (e) {
if (Clazz.exceptionOf(e,"NegativeArraySizeException")){
throw  new IllegalArgumentException();
} else {
throw e;
}
}
}, "~N");
Clazz.defineMethod(c$, "newElementArray", 
function(size){
return  new Array(size);
}, "~N");
Clazz.defineMethod(c$, "add", 
function(location, object){
this.add2(location, object);
}, "~N,~O");
Clazz.defineMethod(c$, "add2", 
function(location, object){
var size = this.size();
if (0 < location && location < size) {
if (this.firstIndex == 0 && this.lastIndex == this.array.length) {
this.growForInsert(location, 1);
} else if ((location < Clazz.doubleToInt(size / 2) && this.firstIndex > 0) || this.lastIndex == this.array.length) {
System.arraycopy(this.array, this.firstIndex, this.array, --this.firstIndex, location);
} else {
var index = location + this.firstIndex;
System.arraycopy(this.array, index, this.array, index + 1, size - location);
this.lastIndex++;
}this.array[location + this.firstIndex] = object;
} else if (location == 0) {
if (this.firstIndex == 0) {
this.growAtFront(1);
}this.array[--this.firstIndex] = object;
} else if (location == size) {
if (this.lastIndex == this.array.length) {
this.growAtEnd(1);
}this.array[this.lastIndex++] = object;
} else {
throw  new IndexOutOfBoundsException();
}this.modCount++;
}, "~N,~O");
Clazz.defineMethod(c$, "add", 
function(object){
return this.add1(object);
}, "~O");
Clazz.defineMethod(c$, "add1", 
function(object){
if (this.lastIndex == this.array.length) {
this.growAtEnd(1);
}this.array[this.lastIndex++] = object;
this.modCount++;
return true;
}, "~O");
Clazz.defineMethod(c$, "addAll", 
function(location, collection){
var size = this.size();
if (location < 0 || location > size) {
throw  new IndexOutOfBoundsException();
}var growSize = collection.size();
if (0 < location && location < size) {
if (this.array.length - size < growSize) {
this.growForInsert(location, growSize);
} else if ((location < Clazz.doubleToInt(size / 2) && this.firstIndex > 0) || this.lastIndex > this.array.length - growSize) {
var newFirst = this.firstIndex - growSize;
if (newFirst < 0) {
var index = location + this.firstIndex;
System.arraycopy(this.array, index, this.array, index - newFirst, size - location);
this.lastIndex -= newFirst;
newFirst = 0;
}System.arraycopy(this.array, this.firstIndex, this.array, newFirst, location);
this.firstIndex = newFirst;
} else {
var index = location + this.firstIndex;
System.arraycopy(this.array, index, this.array, index + growSize, size - location);
this.lastIndex += growSize;
}} else if (location == 0) {
this.growAtFront(growSize);
this.firstIndex -= growSize;
} else if (location == size) {
if (this.lastIndex > this.array.length - growSize) {
this.growAtEnd(growSize);
}this.lastIndex += growSize;
}if (growSize > 0) {
var it = collection.iterator();
var index = location + this.firstIndex;
var end = index + growSize;
while (index < end) {
this.array[index++] = it.next();
}
this.modCount++;
return true;
}return false;
}, "~N,java.util.Collection");
Clazz.defineMethod(c$, "addAll", 
function(collection){
var growSize = collection.size();
if (growSize > 0) {
if (this.lastIndex > this.array.length - growSize) {
this.growAtEnd(growSize);
}var it = collection.iterator();
var end = this.lastIndex + growSize;
while (this.lastIndex < end) {
this.array[this.lastIndex++] = it.next();
}
this.modCount++;
return true;
}return false;
}, "java.util.Collection");
Clazz.overrideMethod(c$, "clear", 
function(){
if (this.firstIndex != this.lastIndex) {
java.util.Arrays.fill(this.array, this.firstIndex, this.lastIndex, null);
this.firstIndex = this.lastIndex = 0;
this.modCount++;
}});
Clazz.defineMethod(c$, "clone", 
function(){
try {
var newList = Clazz.superCall(this, java.util.ArrayList, "clone", []);
newList.array = this.array.clone();
return newList;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});
Clazz.overrideMethod(c$, "contains", 
function(object){
if (object != null) {
for (var i = this.firstIndex; i < this.lastIndex; i++) {
if (object.equals(this.array[i])) {
return true;
}}
} else {
for (var i = this.firstIndex; i < this.lastIndex; i++) {
if (this.array[i] == null) {
return true;
}}
}return false;
}, "~O");
Clazz.defineMethod(c$, "ensureCapacity", 
function(minimumCapacity){
if (this.array.length < minimumCapacity) {
if (this.firstIndex > 0) {
this.growAtFront(minimumCapacity - this.array.length);
} else {
this.growAtEnd(minimumCapacity - this.array.length);
}}}, "~N");
Clazz.overrideMethod(c$, "get", 
function(location){
if (0 <= location && location < this.size()) {
return this.array[this.firstIndex + location];
}throw  new IndexOutOfBoundsException();
}, "~N");
Clazz.defineMethod(c$, "growAtEnd", 
function(required){
var size = this.size();
if (this.firstIndex >= required - (this.array.length - this.lastIndex)) {
var newLast = this.lastIndex - this.firstIndex;
if (size > 0) {
System.arraycopy(this.array, this.firstIndex, this.array, 0, size);
var start = newLast < this.firstIndex ? this.firstIndex : newLast;
java.util.Arrays.fill(this.array, start, this.array.length, null);
}this.firstIndex = 0;
this.lastIndex = newLast;
} else {
var increment = Clazz.doubleToInt(size / 2);
if (required > increment) {
increment = required;
}if (increment < 12) {
increment = 12;
}var newArray = this.newElementArray(size + increment);
if (size > 0) {
System.arraycopy(this.array, this.firstIndex, newArray, this.firstIndex, size);
}this.array = newArray;
}}, "~N");
Clazz.defineMethod(c$, "growAtFront", 
function(required){
var size = this.size();
if (this.array.length - this.lastIndex >= required) {
var newFirst = this.array.length - size;
if (size > 0) {
System.arraycopy(this.array, this.firstIndex, this.array, newFirst, size);
var length = this.firstIndex + size > newFirst ? newFirst : this.firstIndex + size;
java.util.Arrays.fill(this.array, this.firstIndex, length, null);
}this.firstIndex = newFirst;
this.lastIndex = this.array.length;
} else {
var increment = Clazz.doubleToInt(size / 2);
if (required > increment) {
increment = required;
}if (increment < 12) {
increment = 12;
}var newArray = this.newElementArray(size + increment);
if (size > 0) {
System.arraycopy(this.array, this.firstIndex, newArray, newArray.length - size, size);
}this.firstIndex = newArray.length - size;
this.lastIndex = newArray.length;
this.array = newArray;
}}, "~N");
Clazz.defineMethod(c$, "growForInsert", 
function(location, required){
var size = this.size();
var increment = Clazz.doubleToInt(size / 2);
if (required > increment) {
increment = required;
}if (increment < 12) {
increment = 12;
}var newArray = this.newElementArray(size + increment);
if (location < Clazz.doubleToInt(size / 2)) {
var newFirst = newArray.length - (size + required);
System.arraycopy(this.array, location, newArray, location + increment, size - location);
System.arraycopy(this.array, this.firstIndex, newArray, newFirst, location);
this.firstIndex = newFirst;
this.lastIndex = newArray.length;
} else {
System.arraycopy(this.array, this.firstIndex, newArray, 0, location);
System.arraycopy(this.array, location, newArray, location + required, size - location);
this.firstIndex = 0;
this.lastIndex += required;
}this.array = newArray;
}, "~N,~N");
Clazz.overrideMethod(c$, "indexOf", 
function(object){
if (object != null) {
for (var i = this.firstIndex; i < this.lastIndex; i++) {
if (object.equals(this.array[i])) {
return i - this.firstIndex;
}}
} else {
for (var i = this.firstIndex; i < this.lastIndex; i++) {
if (this.array[i] == null) {
return i - this.firstIndex;
}}
}return -1;
}, "~O");
Clazz.overrideMethod(c$, "isEmpty", 
function(){
return this.lastIndex == this.firstIndex;
});
Clazz.overrideMethod(c$, "lastIndexOf", 
function(object){
if (object != null) {
for (var i = this.lastIndex - 1; i >= this.firstIndex; i--) {
if (object.equals(this.array[i])) {
return i - this.firstIndex;
}}
} else {
for (var i = this.lastIndex - 1; i >= this.firstIndex; i--) {
if (this.array[i] == null) {
return i - this.firstIndex;
}}
}return -1;
}, "~O");
Clazz.defineMethod(c$, "remove", 
function(location){
{
}return this._removeItemAt(location);
}, "~N");
Clazz.defineMethod(c$, "_removeObject", 
function(o){
var i = this.indexOf(o);
if (i < 0) return false;
this._removeItemAt(i);
return true;
}, "~O");
Clazz.defineMethod(c$, "_removeItemAt", 
function(location){
var result;
var size = this.size();
if (0 <= location && location < size) {
if (location == size - 1) {
result = this.array[--this.lastIndex];
this.array[this.lastIndex] = null;
} else if (location == 0) {
result = this.array[this.firstIndex];
this.array[this.firstIndex++] = null;
} else {
var elementIndex = this.firstIndex + location;
result = this.array[elementIndex];
if (location < Clazz.doubleToInt(size / 2)) {
System.arraycopy(this.array, this.firstIndex, this.array, this.firstIndex + 1, location);
this.array[this.firstIndex++] = null;
} else {
System.arraycopy(this.array, elementIndex + 1, this.array, elementIndex, size - location - 1);
this.array[--this.lastIndex] = null;
}}} else {
throw  new IndexOutOfBoundsException();
}this.modCount++;
return result;
}, "~N");
Clazz.overrideMethod(c$, "removeRange", 
function(start, end){
if (start >= 0 && start <= end && end <= this.size()) {
if (start == end) {
return;
}var size = this.size();
if (end == size) {
java.util.Arrays.fill(this.array, this.firstIndex + start, this.lastIndex, null);
this.lastIndex = this.firstIndex + start;
} else if (start == 0) {
java.util.Arrays.fill(this.array, this.firstIndex, this.firstIndex + end, null);
this.firstIndex += end;
} else {
System.arraycopy(this.array, this.firstIndex + end, this.array, this.firstIndex + start, size - end);
var newLast = this.lastIndex + start - end;
java.util.Arrays.fill(this.array, newLast, this.lastIndex, null);
this.lastIndex = newLast;
}this.modCount++;
} else {
throw  new IndexOutOfBoundsException();
}}, "~N,~N");
Clazz.overrideMethod(c$, "set", 
function(location, object){
if (0 <= location && location < this.size()) {
var result = this.array[this.firstIndex + location];
this.array[this.firstIndex + location] = object;
return result;
}throw  new IndexOutOfBoundsException();
}, "~N,~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.lastIndex - this.firstIndex;
});
Clazz.overrideMethod(c$, "toArray", 
function(contents){
var size = this.size();
if (contents == null || size > contents.length) {
{
return this.array.slice(this.firstIndex, this.firstIndex + size);
}}System.arraycopy(this.array, this.firstIndex, contents, 0, size);
if (size < contents.length) {
contents[size] = null;
}return contents;
}, "~A");
Clazz.defineMethod(c$, "trimToSize", 
function(){
var size = this.size();
var newArray = this.newElementArray(size);
System.arraycopy(this.array, this.firstIndex, newArray, 0, size);
this.array = newArray;
this.firstIndex = 0;
this.lastIndex = this.array.length;
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.AbstractList", "$.RandomAccess"], "java.util.Arrays", null, function(){
var c$ = Clazz.declareType(java.util, "Arrays", null);
c$.fill = Clazz.defineMethod(c$, "fill", 
function(a, fromIndex, toIndex, val){
{
if (arguments.length == 2) {
val = arguments[1];
fromIndex = 0;
toIndex = a.length;
}
}java.util.Arrays.rangeCheck(a.length, fromIndex, toIndex);
for (var i = fromIndex; i < toIndex; i++) a[i] = val;

}, "~A,~N,~N,~O");
c$.asList = Clazz.defineMethod(c$, "asList", 
function(a){
return  new java.util.Arrays.ArrayList(a);
}, "~A");
c$.rangeCheck = Clazz.defineMethod(c$, "rangeCheck", 
function(arrayLen, fromIndex, toIndex){
if (fromIndex > toIndex) throw  new IllegalArgumentException("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")");
if (fromIndex < 0) throw  new ArrayIndexOutOfBoundsException(fromIndex);
if (toIndex > arrayLen) throw  new ArrayIndexOutOfBoundsException(toIndex);
}, "~N,~N,~N");
c$.binarySearch = Clazz.defineMethod(c$, "binarySearch", 
function(a, key){
var low = 0;
var high = a.length - 1;
while (low <= high) {
var mid = (low + high) >> 1;
var midVal = a[mid];
if (midVal < key) low = mid + 1;
 else if (midVal > key) high = mid - 1;
 else return mid;
}
return -(low + 1);
}, "~A,~N");
c$.binarySearch = Clazz.defineMethod(c$, "binarySearch", 
function(a, key){
var low = 0;
var high = a.length - 1;
while (low <= high) {
var mid = (low + high) >> 1;
var midVal = a[mid];
var cmp = (midVal).compareTo(key);
if (cmp < 0) low = mid + 1;
 else if (cmp > 0) high = mid - 1;
 else return mid;
}
return -(low + 1);
}, "~A,~O");
c$.binarySearch = Clazz.defineMethod(c$, "binarySearch", 
function(a, key, c){
if (c == null) return java.util.Arrays.binarySearch(a, key);
var low = 0;
var high = a.length - 1;
while (low <= high) {
var mid = (low + high) >> 1;
var midVal = a[mid];
var cmp = c.compare(midVal, key);
if (cmp < 0) low = mid + 1;
 else if (cmp > 0) high = mid - 1;
 else return mid;
}
return -(low + 1);
}, "~A,~O,java.util.Comparator");
c$.equals = Clazz.defineMethod(c$, "equals", 
function(a, a2){
if (a === a2) return true;
if (a == null || a2 == null) return false;
var length = a.length;
if (a2.length != length) return false;
for (var i = 0; i < length; i++) {
var o1 = a[i];
var o2 = a2[i];
{
if(!(o1==null?o2==null:(o1.equals==null?o1==o2:o1.equals(o2))))return false;
}}
return true;
}, "~A,~A");
c$.sort = Clazz.defineMethod(c$, "sort", 
function(a, fromIndex, toIndex, c){
if (a.length < 2) return;
var n = 0;
var p = null;
{
n = arguments.length; p = fromIndex;
}var temp = a;
var ret = null;
switch (n) {
case 1:
p = null;
case 2:
fromIndex = 0;
toIndex = a.length;
break;
case 3:
c = null;
case 4:
p = c;
if (fromIndex == 0 && toIndex == a.length) {
temp = a;
} else {
{
temp = a.slice(fromIndex, toIndex);
}ret = a;
}break;
}
java.util.Arrays.rangeCheck(a.length, fromIndex, toIndex);
if (p == null) p = java.util.Arrays.comp;
c = p;
{
temp.sort(function(a,b){return c.compare(a,b)});
}if (ret != null) {
System.arraycopy(temp, 0, ret, fromIndex, toIndex);
}}, "~A,~N,~N,java.util.Comparator");
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.a = null;
Clazz.instantialize(this, arguments);}, java.util.Arrays, "ArrayList", java.util.AbstractList, [java.util.RandomAccess, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(array){
Clazz.superConstructor (this, java.util.Arrays.ArrayList, []);
if (array == null) throw  new NullPointerException();
this.a = array;
}, "~A");
Clazz.overrideMethod(c$, "size", 
function(){
return this.a.length;
});
Clazz.defineMethod(c$, "toArray", 
function(){
return this.a.clone();
});
Clazz.overrideMethod(c$, "get", 
function(index){
return this.a[index];
}, "~N");
Clazz.overrideMethod(c$, "set", 
function(index, element){
var oldValue = this.a[index];
this.a[index] = element;
return oldValue;
}, "~N,~O");
Clazz.overrideMethod(c$, "indexOf", 
function(o){
if (o == null) {
for (var i = 0; i < this.a.length; i++) if (this.a[i] == null) return i;

} else {
for (var i = 0; i < this.a.length; i++) if (o.equals(this.a[i])) return i;

}return -1;
}, "~O");
Clazz.overrideMethod(c$, "contains", 
function(o){
return this.indexOf(o) != -1;
}, "~O");
/*eoif3*/})();
c$.comp = null;
{
c$.comp = {compare: function (o1, o2) {
return (o1 == null ? (o2 == null ? 0 : -1) : o2 == null ? 1
: typeof o1 == "number" ? o1 - o2 : o1.compareTo(o2))}};
}});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

(function(){
var c$ = Clazz.decorateAsClass(function(){
this.haveNextNextGaussian = false;
this.seed = 0;
this.nextNextGaussian = 0;
Clazz.instantialize(this, arguments);}, java.util, "Random", null, java.io.Serializable);
Clazz.makeConstructor(c$, 
function(){
var seed = -2147483648;
{
arguments.length == 1 && (seed = arguments[0]);
}if (seed == -2147483648) seed = System.currentTimeMillis();
this.setSeed(seed);
});
Clazz.defineMethod(c$, "next", 
function(bits){
this.seed = (this.seed * 25214903917 + 0xb) & (281474976710655);
return (this.seed >>> (48 - bits));
}, "~N");
Clazz.defineMethod(c$, "nextBoolean", 
function(){
{
return Math.random () > 0.5;
}});
Clazz.defineMethod(c$, "nextBytes", 
function(buf){
{
var rand = 0;
var count = 0;
var loop = 0;
while (count < buf.length) {
if (loop == 0) {
rand = this.nextInt();
loop = 3;
} else {
loop--;
}buf[count++] = rand;
rand >>= 8;
}
}}, "~A");
Clazz.defineMethod(c$, "nextDouble", 
function(){
{
return Math.random ();
}});
Clazz.defineMethod(c$, "nextFloat", 
function(){
{
return Math.random ();
}});
Clazz.defineMethod(c$, "nextGaussian", 
function(){
if (this.haveNextNextGaussian) {
this.haveNextNextGaussian = false;
return this.nextNextGaussian;
}var v1;
var v2;
var s;
do {
v1 = 2 * this.nextDouble() - 1;
v2 = 2 * this.nextDouble() - 1;
s = v1 * v1 + v2 * v2;
} while (s >= 1);
var norm = Math.sqrt(-2 * Math.log(s) / s);
this.nextNextGaussian = v2 * norm;
this.haveNextNextGaussian = true;
return v1 * norm;
});
Clazz.defineMethod(c$, "nextInt", 
function(n){
{
if (arguments.length == 0)
return Math.random()*0x100000000 | 0;
}if (n <= 0) {
throw  new IllegalArgumentException();
}{
return Math.random() * n|0
}}, "~N");
Clazz.defineMethod(c$, "nextLong", 
function(){
return (this.next(32) << 32) + this.next(32);
});
Clazz.defineMethod(c$, "setSeed", 
function(seed){
{
Math.seedrandom(seed);
}}, "~N");
{
{
(function (pool, math, width, chunks, significance, overflow, startdenom) {
var copyright = "Copyright 2010 David Bau, all rights reserved. (BSD)"
//
// seedrandom()
// This is the seedrandom function described above.
//
math['seedrandom'] = function seedrandom(seed, use_entropy) {
var key = [];
var arc4;
// Flatten the seed string or build one from local entropy if needed.
seed = mixkey(flatten(
use_entropy ? [seed, pool] :
arguments.length ? seed :
[new Date().getTime(), pool, window], 3), key);
// Use the seed to initialize an ARC4 generator.
arc4 = new ARC4(key);
// Mix the randomness into accumulated entropy.
mixkey(arc4.S, pool);
// Override Math.random
// This function returns a random double in [0, 1) that contains
// randomness in every bit of the mantissa of the IEEE 754 value.
math['random'] = function random() {  // Closure to return a random double:
var n = arc4.g(chunks);             // Start with a numerator n < 2 ^ 48
var d = startdenom;                 //   and denominator d = 2 ^ 48.
var x = 0;                          //   and no 'extra last byte'.
while (n < significance) {          // Fill up all significant digits by
n = (n + x) * width;              //   shifting numerator and
d *= width;                       //   denominator and generating a
x = arc4.g(1);                    //   new least-significant-byte.
}
while (n >= overflow) {             // To avoid rounding up, before adding
n /= 2;                           //   last byte, shift everything
d /= 2;                           //   right using integer math until
x >>>= 1;                         //   we have exactly the desired bits.
}
return (n + x) / d;                 // Form the number within [0, 1).
};
// Return the seed that was used
return seed;
};
//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
var t, u, me = this, keylen = key.length;
var i = 0, j = me.i = me.j = me.m = 0;
me.S = [];
me.c = [];
// The empty key [] is treated as [0].
if (!keylen) { key = [keylen++]; }
// Set up S using the standard key scheduling algorithm.
while (i < width) { me.S[i] = i++; }
for (i = 0; i < width; i++) {
t = me.S[i];
j = lowbits(j + t + key[i % keylen]);
u = me.S[j];
me.S[i] = u;
me.S[j] = t;
}
// The "g" method returns the next (count) outputs as one number.
me.g = function getnext(count) {
var s = me.S;
var i = lowbits(me.i + 1); var t = s[i];
var j = lowbits(me.j + t); var u = s[j];
s[i] = u;
s[j] = t;
var r = s[lowbits(t + u)];
while (--count) {
i = lowbits(i + 1); t = s[i];
j = lowbits(j + t); u = s[j];
s[i] = u;
s[j] = t;
r = r * width + s[lowbits(t + u)];
}
me.i = i;
me.j = j;
return r;
};
// For robust unpredictability discard an initial batch of values.
// See http://www.rsa.com/rsalabs/node.asp?id=2009
me.g(width);
}
//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth, result, prop) {
result = [];
if (depth && typeof(obj) == 'object') {
for (prop in obj) {
if (prop.indexOf('S') < 5) {    // Avoid FF3 bug (local/sessionStorage)
try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
}
}
}
return result.length ? result : '' + obj;
}
//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key, smear, j) {
seed += '';                         // Ensure the seed is a string
smear = 0;
for (j = 0; j < seed.length; j++) {
key[lowbits(j)] =
lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
}
seed = '';
for (j in key) { seed += String.fromCharCode(key[j]); }
return seed;
}
//
// lowbits()
// A quick "n mod width" for width a power of 2.
//
function lowbits(n) { return n & (width - 1); }
//
// The following constants are related to IEEE 754 limits.
//
startdenom = math.pow(width, chunks);
significance = math.pow(2, significance);
overflow = significance * 2;
//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to intefere with determinstic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);
// End anonymous scope, and pass initial values.
})(
[],   // pool: entropy pool starts empty
Math, // math: package containing random, pow, and seedrandom
256,  // width: each RC4 output is 0 <= x < 256
6,    // chunks: at least six RC4 outputs for each double
52    // significance: there are 52 significant digits in a double
);
}}})();
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JU");
Clazz.load(null, "JU.PT", ["java.util.Arrays", "JU.AU", "$.DF", "$.SB"], function(){
var c$ = Clazz.declareType(JU, "PT", null);
c$.parseInt = Clazz.defineMethod(c$, "parseInt", 
function(str){
return JU.PT.parseIntNext(str,  Clazz.newIntArray(-1, [0]));
}, "~S");
c$.parseIntNext = Clazz.defineMethod(c$, "parseIntNext", 
function(str, next){
var cch = str.length;
if (next[0] < 0 || next[0] >= cch) return -2147483648;
return JU.PT.parseIntChecked(str, cch, next);
}, "~S,~A");
c$.parseIntChecked = Clazz.defineMethod(c$, "parseIntChecked", 
function(str, ichMax, next){
var digitSeen = false;
var value = 0;
var ich = next[0];
if (ich < 0) return -2147483648;
var ch;
while (ich < ichMax && JU.PT.isWhiteSpace(str, ich)) ++ich;

var negative = false;
if (ich < ichMax && (str.charAt(ich)).charCodeAt(0) == 45) {
negative = true;
++ich;
}while (ich < ichMax && (ch = (str.charAt(ich)).charCodeAt(0)) >= 48 && ch <= 57) {
value = value * 10 + (ch - 48);
digitSeen = true;
++ich;
}
if (!digitSeen) value = -2147483648;
 else if (negative) value = -value;
next[0] = ich;
return value;
}, "~S,~N,~A");
c$.isWhiteSpace = Clazz.defineMethod(c$, "isWhiteSpace", 
function(str, ich){
var ch;
return (ich >= 0 && ((ch = str.charAt(ich)) == ' ' || ch == '\t' || ch == '\n'));
}, "~S,~N");
c$.parseFloatChecked = Clazz.defineMethod(c$, "parseFloatChecked", 
function(str, ichMax, next, isStrict){
var digitSeen = false;
var ich = next[0];
if (isStrict && str.indexOf('\n') != str.lastIndexOf('\n')) return NaN;
while (ich < ichMax && JU.PT.isWhiteSpace(str, ich)) ++ich;

var negative = false;
if (ich < ichMax && str.charAt(ich) == '-') {
++ich;
negative = true;
}var ch = 0;
var ival = 0;
var ival2 = 0;
while (ich < ichMax && (ch = (str.charAt(ich)).charCodeAt(0)) >= 48 && ch <= 57) {
ival = (ival * 10) + (ch - 48) * 1;
++ich;
digitSeen = true;
}
var isDecimal = false;
var iscale = 0;
var nzero = (ival == 0 ? -1 : 0);
if (ch == 46) {
isDecimal = true;
while (++ich < ichMax && (ch = (str.charAt(ich)).charCodeAt(0)) >= 48 && ch <= 57) {
digitSeen = true;
if (nzero < 0) {
if (ch == 48) {
nzero--;
continue;
}nzero = -nzero;
}if (iscale < JU.PT.decimalScale.length) {
ival2 = (ival2 * 10) + (ch - 48) * 1;
iscale++;
}}
}var value;
if (!digitSeen) {
value = NaN;
} else if (ival2 > 0) {
value = ival2 * JU.PT.decimalScale[iscale - 1];
if (nzero > 1) {
if (nzero - 2 < JU.PT.decimalScale.length) {
value *= JU.PT.decimalScale[nzero - 2];
} else {
value *= Math.pow(10, 1 - nzero);
}} else {
value += ival;
}} else {
value = ival;
}var isExponent = false;
if (ich < ichMax && (ch == 69 || ch == 101 || ch == 68)) {
isExponent = true;
if (++ich >= ichMax) return NaN;
ch = (str.charAt(ich)).charCodeAt(0);
if ((ch == 43) && (++ich >= ichMax)) return NaN;
next[0] = ich;
var exponent = JU.PT.parseIntChecked(str, ichMax, next);
if (exponent == -2147483648) return NaN;
if (exponent > 0 && exponent <= JU.PT.tensScale.length) value *= JU.PT.tensScale[exponent - 1];
 else if (exponent < 0 && -exponent <= JU.PT.decimalScale.length) value *= JU.PT.decimalScale[-exponent - 1];
 else if (exponent != 0) value *= Math.pow(10, exponent);
} else {
next[0] = ich;
}if (negative) value = -value;
if (value == Infinity) value = 3.4028235E38;
return (!isStrict || (!isExponent || isDecimal) && JU.PT.checkTrailingText(str, next[0], ichMax) ? value : NaN);
}, "~S,~N,~A,~B");
c$.checkTrailingText = Clazz.defineMethod(c$, "checkTrailingText", 
function(str, ich, ichMax){
var ch;
while (ich < ichMax && (JU.PT.isWhitespace(ch = str.charAt(ich)) || ch == ';')) ++ich;

return (ich == ichMax);
}, "~S,~N,~N");
c$.parseFloatArray = Clazz.defineMethod(c$, "parseFloatArray", 
function(str){
return JU.PT.parseFloatArrayNext(str,  Clazz.newIntArray (1, 0), null, null, null);
}, "~S");
c$.parseFloatArrayInfested = Clazz.defineMethod(c$, "parseFloatArrayInfested", 
function(tokens, data){
var len = data.length;
var nTokens = tokens.length;
var n = 0;
var max = 0;
for (var i = 0; i >= 0 && i < len && n < nTokens; i++) {
var f;
while (Float.isNaN(f = JU.PT.parseFloat(tokens[n++])) && n < nTokens) {
}
if (!Float.isNaN(f)) data[(max = i)] = f;
if (n == nTokens) break;
}
return max + 1;
}, "~A,~A");
c$.parseFloatArrayNext = Clazz.defineMethod(c$, "parseFloatArrayNext", 
function(str, next, f, strStart, strEnd){
var n = 0;
var pt = next[0];
if (pt >= 0) {
if (strStart != null) {
var p = str.indexOf(strStart, pt);
if (p >= 0) next[0] = p + strStart.length;
}str = str.substring(next[0]);
pt = (strEnd == null ? -1 : str.indexOf(strEnd));
if (pt < 0) pt = str.length;
 else str = str.substring(0, pt);
next[0] += pt + 1;
var tokens = JU.PT.getTokens(str);
if (f == null) f =  Clazz.newFloatArray (tokens.length, 0);
n = JU.PT.parseFloatArrayInfested(tokens, f);
}if (f == null) return  Clazz.newFloatArray (0, 0);
for (var i = n; i < f.length; i++) f[i] = NaN;

return f;
}, "~S,~A,~A,~S,~S");
c$.parseFloatRange = Clazz.defineMethod(c$, "parseFloatRange", 
function(str, ichMax, next){
var cch = str.length;
if (ichMax > cch) ichMax = cch;
if (next[0] < 0 || next[0] >= ichMax) return NaN;
return JU.PT.parseFloatChecked(str, ichMax, next, false);
}, "~S,~N,~A");
c$.parseFloatNext = Clazz.defineMethod(c$, "parseFloatNext", 
function(str, next){
var cch = (str == null ? -1 : str.length);
return (next[0] < 0 || next[0] >= cch ? NaN : JU.PT.parseFloatChecked(str, cch, next, false));
}, "~S,~A");
c$.parseFloatStrict = Clazz.defineMethod(c$, "parseFloatStrict", 
function(str){
var cch = str.length;
if (cch == 0) return NaN;
return JU.PT.parseFloatChecked(str, cch,  Clazz.newIntArray(-1, [0]), true);
}, "~S");
c$.parseFloat = Clazz.defineMethod(c$, "parseFloat", 
function(str){
return JU.PT.parseFloatNext(str,  Clazz.newIntArray(-1, [0]));
}, "~S");
c$.parseIntRadix = Clazz.defineMethod(c$, "parseIntRadix", 
function(s, i){
{
return Integer.parseIntRadix(s, i);
}}, "~S,~N");
c$.getTokens = Clazz.defineMethod(c$, "getTokens", 
function(line){
return JU.PT.getTokensAt(line, 0);
}, "~S");
c$.parseToken = Clazz.defineMethod(c$, "parseToken", 
function(str){
return JU.PT.parseTokenNext(str,  Clazz.newIntArray(-1, [0]));
}, "~S");
c$.parseTrimmed = Clazz.defineMethod(c$, "parseTrimmed", 
function(str){
return JU.PT.parseTrimmedRange(str, 0, str.length);
}, "~S");
c$.parseTrimmedAt = Clazz.defineMethod(c$, "parseTrimmedAt", 
function(str, ichStart){
return JU.PT.parseTrimmedRange(str, ichStart, str.length);
}, "~S,~N");
c$.parseTrimmedRange = Clazz.defineMethod(c$, "parseTrimmedRange", 
function(str, ichStart, ichMax){
var cch = str.length;
if (ichMax < cch) cch = ichMax;
if (cch < ichStart) return "";
return JU.PT.parseTrimmedChecked(str, ichStart, cch);
}, "~S,~N,~N");
c$.getTokensAt = Clazz.defineMethod(c$, "getTokensAt", 
function(line, ich){
if (line == null) return null;
var cchLine = line.length;
if (ich < 0 || ich > cchLine) return null;
var tokenCount = JU.PT.countTokens(line, ich);
var tokens =  new Array(tokenCount);
var next =  Clazz.newIntArray (1, 0);
next[0] = ich;
for (var i = 0; i < tokenCount; ++i) tokens[i] = JU.PT.parseTokenChecked(line, cchLine, next);

return tokens;
}, "~S,~N");
c$.countChar = Clazz.defineMethod(c$, "countChar", 
function(line, c){
var n = 0;
for (var i = line.lastIndexOf(c) + 1; --i >= 0; ) if (line.charAt(i) == c) n++;

return n;
}, "~S,~S");
c$.countTokens = Clazz.defineMethod(c$, "countTokens", 
function(line, ich){
var tokenCount = 0;
if (line != null) {
var ichMax = line.length;
while (true) {
while (ich < ichMax && JU.PT.isWhiteSpace(line, ich)) ++ich;

if (ich == ichMax) break;
++tokenCount;
do {
++ich;
} while (ich < ichMax && !JU.PT.isWhiteSpace(line, ich));
}
}return tokenCount;
}, "~S,~N");
c$.parseTokenNext = Clazz.defineMethod(c$, "parseTokenNext", 
function(str, next){
var cch = str.length;
return (next[0] < 0 || next[0] >= cch ? null : JU.PT.parseTokenChecked(str, cch, next));
}, "~S,~A");
c$.parseTokenRange = Clazz.defineMethod(c$, "parseTokenRange", 
function(str, ichMax, next){
var cch = str.length;
if (ichMax > cch) ichMax = cch;
return (next[0] < 0 || next[0] >= ichMax ? null : JU.PT.parseTokenChecked(str, ichMax, next));
}, "~S,~N,~A");
c$.parseTokenChecked = Clazz.defineMethod(c$, "parseTokenChecked", 
function(str, ichMax, next){
var ich = next[0];
while (ich < ichMax && JU.PT.isWhiteSpace(str, ich)) ++ich;

var ichNonWhite = ich;
while (ich < ichMax && !JU.PT.isWhiteSpace(str, ich)) ++ich;

next[0] = ich;
return (ichNonWhite == ich ? null : str.substring(ichNonWhite, ich));
}, "~S,~N,~A");
c$.parseTrimmedChecked = Clazz.defineMethod(c$, "parseTrimmedChecked", 
function(str, ich, ichMax){
while (ich < ichMax && JU.PT.isWhiteSpace(str, ich)) ++ich;

var ichLast = ichMax - 1;
while (ichLast >= ich && JU.PT.isWhiteSpace(str, ichLast)) --ichLast;

return (ichLast < ich ? "" : str.substring(ich, ichLast + 1));
}, "~S,~N,~N");
c$.dVal = Clazz.defineMethod(c$, "dVal", 
function(s){
{
if(s==null)
throw new NumberFormatException("null");
var d=parseFloat(s);
if(isNaN(d))
throw new NumberFormatException("Not a Number : "+s);
return d
}}, "~S");
c$.fVal = Clazz.defineMethod(c$, "fVal", 
function(s){
{
return this.dVal(s);
}}, "~S");
c$.parseIntRange = Clazz.defineMethod(c$, "parseIntRange", 
function(str, ichMax, next){
var cch = str.length;
if (ichMax > cch) ichMax = cch;
return (next[0] < 0 || next[0] >= ichMax ? -2147483648 : JU.PT.parseIntChecked(str, ichMax, next));
}, "~S,~N,~A");
c$.parseFloatArrayData = Clazz.defineMethod(c$, "parseFloatArrayData", 
function(tokens, data){
JU.PT.parseFloatArrayDataN(tokens, data, data.length);
}, "~A,~A");
c$.parseFloatArrayDataN = Clazz.defineMethod(c$, "parseFloatArrayDataN", 
function(tokens, data, nData){
for (var i = nData; --i >= 0; ) data[i] = (i >= tokens.length ? NaN : JU.PT.parseFloat(tokens[i]));

}, "~A,~A,~N");
c$.split = Clazz.defineMethod(c$, "split", 
function(text, run){
if (text.length == 0) return  new Array(0);
var n = 1;
var i = text.indexOf(run);
var lines;
var runLen = run.length;
if (i < 0 || runLen == 0) {
lines =  new Array(1);
lines[0] = text;
return lines;
}var len = text.length - runLen;
for (; i >= 0 && i < len; n++) i = text.indexOf(run, i + runLen);

lines =  new Array(n);
i = 0;
var ipt = 0;
var pt = 0;
for (; (ipt = text.indexOf(run, i)) >= 0 && pt + 1 < n; ) {
lines[pt++] = text.substring(i, ipt);
i = ipt + runLen;
}
if (text.indexOf(run, len) != len) len += runLen;
lines[pt] = text.substring(i, len);
return lines;
}, "~S,~S");
c$.getQuotedStringAt = Clazz.defineMethod(c$, "getQuotedStringAt", 
function(line, ipt0){
var next =  Clazz.newIntArray(-1, [ipt0]);
return JU.PT.getQuotedStringNext(line, next);
}, "~S,~N");
c$.getQuotedStringNext = Clazz.defineMethod(c$, "getQuotedStringNext", 
function(line, next){
var i = next[0];
if (i < 0 || (i = line.indexOf("\"", i)) < 0) return "";
var pt = i + 1;
var len = line.length;
while (++i < len && line.charAt(i) != '"') if (line.charAt(i) == '\\') i++;

next[0] = i + 1;
return line.substring(pt, i);
}, "~S,~A");
c$.getQuotedOrUnquotedAttribute = Clazz.defineMethod(c$, "getQuotedOrUnquotedAttribute", 
function(line, key){
if (line == null || key == null) return null;
var pt = line.toLowerCase().indexOf(key.toLowerCase() + "=");
if (pt < 0 || (pt = pt + key.length + 1) >= line.length) return "";
var c = line.charAt(pt);
switch ((c).charCodeAt(0)) {
case 39:
case 34:
pt++;
break;
default:
c = ' ';
line += " ";
}
var pt1 = line.indexOf(c, pt);
return (pt1 < 0 ? null : line.substring(pt, pt1));
}, "~S,~S");
c$.getCSVString = Clazz.defineMethod(c$, "getCSVString", 
function(line, next){
var i = next[1];
if (i < 0 || (i = line.indexOf("\"", i)) < 0) return null;
var pt = next[0] = i;
var len = line.length;
var escaped = false;
var haveEscape = false;
while (++i < len && (line.charAt(i) != '"' || (escaped = (i + 1 < len && line.charAt(i + 1) == '"')))) if (escaped) {
escaped = false;
haveEscape = true;
i++;
}
if (i >= len) {
next[1] = -1;
return null;
}next[1] = i + 1;
var s = line.substring(pt + 1, i);
return (haveEscape ? JU.PT.rep(JU.PT.rep(s, "\"\"", "\0"), "\0", "\"") : s);
}, "~S,~A");
c$.isOneOf = Clazz.defineMethod(c$, "isOneOf", 
function(key, semiList){
if (semiList.length == 0 || key.indexOf(";") >= 0) return false;
if (semiList.charAt(0) != ';') semiList = ";" + semiList + ";";
return semiList.indexOf(';' + key + ';') >= 0;
}, "~S,~S");
c$.getQuotedAttribute = Clazz.defineMethod(c$, "getQuotedAttribute", 
function(info, name){
var i = info.indexOf(name + "=");
return (i < 0 ? null : JU.PT.getQuotedStringAt(info, i));
}, "~S,~S");
c$.approx = Clazz.defineMethod(c$, "approx", 
function(f, n){
return Math.round(f * n) / n;
}, "~N,~N");
c$.rep = Clazz.defineMethod(c$, "rep", 
function(str, strFrom, strTo){
if (str == null || strFrom.length == 0 || str.indexOf(strFrom) < 0) return str;
var isOnce = (strTo.indexOf(strFrom) >= 0);
do {
str = str.$replace(strFrom, strTo);
} while (!isOnce && str.indexOf(strFrom) >= 0);
return str;
}, "~S,~S,~S");
c$.formatF = Clazz.defineMethod(c$, "formatF", 
function(value, width, precision, alignLeft, zeroPad){
return JU.PT.formatS(JU.DF.formatDecimal(value, precision), width, 0, alignLeft, zeroPad);
}, "~N,~N,~N,~B,~B");
c$.formatD = Clazz.defineMethod(c$, "formatD", 
function(value, width, precision, alignLeft, zeroPad){
return JU.PT.formatS(JU.DF.formatDecimal(value, -1 - precision), width, 0, alignLeft, zeroPad);
}, "~N,~N,~N,~B,~B");
c$.formatS = Clazz.defineMethod(c$, "formatS", 
function(value, width, precision, alignLeft, zeroPad){
if (value == null) return "";
var len = value.length;
if (precision != 2147483647 && precision > 0 && precision < len) value = value.substring(0, precision);
 else if (precision < 0 && len + precision >= 0) value = value.substring(len + precision + 1);
var padLength = width - value.length;
if (padLength <= 0) return value;
var isNeg = (zeroPad && !alignLeft && value.charAt(0) == '-');
var padChar = (zeroPad ? '0' : ' ');
var padChar0 = (isNeg ? '-' : padChar);
var sb =  new JU.SB();
if (alignLeft) sb.append(value);
sb.appendC(padChar0);
for (var i = padLength; --i > 0; ) sb.appendC(padChar);

if (!alignLeft) sb.append(isNeg ? padChar + value.substring(1) : value);
return sb.toString();
}, "~S,~N,~N,~B,~B");
c$.replaceWithCharacter = Clazz.defineMethod(c$, "replaceWithCharacter", 
function(str, strFrom, chTo){
if (str == null) return null;
for (var i = strFrom.length; --i >= 0; ) str = str.$replace(strFrom.charAt(i), chTo);

return str;
}, "~S,~S,~S");
c$.replaceAllCharacters = Clazz.defineMethod(c$, "replaceAllCharacters", 
function(str, strFrom, strTo){
for (var i = strFrom.length; --i >= 0; ) {
var chFrom = strFrom.substring(i, i + 1);
str = JU.PT.rep(str, chFrom, strTo);
}
return str;
}, "~S,~S,~S");
c$.trim = Clazz.defineMethod(c$, "trim", 
function(str, chars){
if (str == null || str.length == 0) return str;
if (chars.length == 0) return str.trim();
var len = str.length;
var k = 0;
while (k < len && chars.indexOf(str.charAt(k)) >= 0) k++;

var m = str.length - 1;
while (m > k && chars.indexOf(str.charAt(m)) >= 0) m--;

return str.substring(k, m + 1);
}, "~S,~S");
c$.trimQuotes = Clazz.defineMethod(c$, "trimQuotes", 
function(value){
return (value != null && value.length > 1 && value.startsWith("\"") && value.endsWith("\"") ? value.substring(1, value.length - 1) : value);
}, "~S");
c$.isNonStringPrimitive = Clazz.defineMethod(c$, "isNonStringPrimitive", 
function(info){
{
if(typeof info == "number" || typeof info == "boolean") {
return true;
}
}return Clazz.instanceOf(info, Number) || Clazz.instanceOf(info, Boolean);
}, "~O");
c$.toJSON = Clazz.defineMethod(c$, "toJSON", 
function(infoType, info){
if (info == null) return JU.PT.packageJSON(infoType, null);
if (JU.PT.isNonStringPrimitive(info)) return JU.PT.packageJSON(infoType, info.toString());
var s = null;
var sb = null;
while (true) {
if ((typeof(info)=='string')) {
s = info;
{
if (typeof s == "undefined") s = "null"
}if (s.indexOf("{\"") != 0) {
s = JU.PT.esc(s);
}break;
}if (Clazz.instanceOf(info,"javajs.api.JSONEncodable")) {
if ((s = (info).toJSON()) == null) s = "null";
break;
}sb =  new JU.SB();
if (Clazz.instanceOf(info,"java.util.Map")) {
sb.append("{ ");
var sep = "";
var keys = (info).keySet();
var skeys = keys.toArray( new Array(keys.size()));
java.util.Arrays.sort(skeys);
for (var i = 0, n = skeys.length; i < n; i++) {
var key = skeys[i];
if (key == null) key = "null";
sb.append(sep).append(JU.PT.packageJSON(key, JU.PT.toJSON(null, (info).get(key))));
sep = ",";
}
sb.append(" }");
break;
}if (Clazz.instanceOf(info,"JU.Lst")) {
sb.append("[ ");
var n = (info).size();
for (var i = 0; i < n; i++) {
if (i > 0) sb.appendC(',');
sb.append(JU.PT.toJSON(null, (info).get(i)));
}
sb.append(" ]");
break;
}if (Clazz.instanceOf(info,"JU.M34")) {
var len = (Clazz.instanceOf(info,"JU.M4") ? 4 : 3);
var x =  Clazz.newFloatArray (len, 0);
var m = info;
sb.appendC('[');
for (var i = 0; i < len; i++) {
if (i > 0) sb.appendC(',');
m.getRow(i, x);
sb.append(JU.PT.toJSON(null, x));
}
sb.appendC(']');
break;
}s = JU.PT.nonArrayString(info);
if (s == null) {
sb.append("[");
var n = JU.AU.getLength(info);
var o = null;
{
o = info[0];
typeof o != "number" && typeof 0 != "boolean" && (o = null);
}if (o != null) {
sb.appendO(info);
} else {
for (var i = 0; i < n; i++) {
if (i > 0) sb.appendC(',');
sb.append(JU.PT.toJSON(null, JU.PT.arrayGet(info, i)));
}
}sb.append("]");
break;
}info = info.toString();
}
return JU.PT.packageJSON(infoType, (s == null ? sb.toString() : s));
}, "~S,~O");
c$.arrayGet = Clazz.defineMethod(c$, "arrayGet", 
function(info, i){
{
return info[i];
}}, "~O,~N");
c$.nonArrayString = Clazz.defineMethod(c$, "nonArrayString", 
function(x){
{
return (x.constructor == Array || x.BYTES_PER_ELEMENT ? null : x.toString());
}}, "~O");
c$.byteArrayToJSON = Clazz.defineMethod(c$, "byteArrayToJSON", 
function(data){
var sb =  new JU.SB();
sb.append("[");
var n = data.length;
for (var i = 0; i < n; i++) {
if (i > 0) sb.appendC(',');
sb.appendI(data[i] & 0xFF);
}
sb.append("]");
return sb.toString();
}, "~A");
c$.packageJSON = Clazz.defineMethod(c$, "packageJSON", 
function(infoType, info){
return (infoType == null ? info : "\"" + infoType + "\": " + info);
}, "~S,~S");
c$.escapeUrl = Clazz.defineMethod(c$, "escapeUrl", 
function(url){
url = JU.PT.rep(url, "\n", "");
url = JU.PT.rep(url, "%", "%25");
url = JU.PT.rep(url, "#", "%23");
url = JU.PT.rep(url, "[", "%5B");
url = JU.PT.rep(url, "\\", "%5C");
url = JU.PT.rep(url, "]", "%5D");
url = JU.PT.rep(url, " ", "%20");
return url;
}, "~S");
c$.esc = Clazz.defineMethod(c$, "esc", 
function(str){
if (str == null || str.length == 0) return "\"\"";
var haveEscape = false;
var i = 0;
for (; i < "\\\\\tt\rr\nn\"\"".length; i += 2) if (str.indexOf("\\\\\tt\rr\nn\"\"".charAt(i)) >= 0) {
haveEscape = true;
break;
}
if (haveEscape) while (i < "\\\\\tt\rr\nn\"\"".length) {
var pt = -1;
var ch = "\\\\\tt\rr\nn\"\"".charAt(i++);
var ch2 = "\\\\\tt\rr\nn\"\"".charAt(i++);
var sb =  new JU.SB();
var pt0 = 0;
while ((pt = str.indexOf(ch, pt + 1)) >= 0) {
sb.append(str.substring(pt0, pt)).appendC('\\').appendC(ch2);
pt0 = pt + 1;
}
sb.append(str.substring(pt0, str.length));
str = sb.toString();
}
return "\"" + JU.PT.escUnicode(str) + "\"";
}, "~S");
c$.escUnicode = Clazz.defineMethod(c$, "escUnicode", 
function(str){
for (var i = str.length; --i >= 0; ) if ((str.charAt(i)).charCodeAt(0) > 0x7F) {
var s = "0000" + Integer.toHexString(str.charAt(i).charCodeAt(0));
str = str.substring(0, i) + "\\u" + s.substring(s.length - 4) + str.substring(i + 1);
}
return str;
}, "~S");
c$.escF = Clazz.defineMethod(c$, "escF", 
function(f){
var sf = "" + f;
{
if (sf.indexOf(".") < 0 && sf.indexOf("e") < 0 && sf.indexOf("N") < 0 && sf.indexOf("n") < 0)
sf += ".0";
}return sf;
}, "~N");
c$.join = Clazz.defineMethod(c$, "join", 
function(s, c, i0){
if (s.length < i0) return null;
var sb =  new JU.SB();
sb.append(s[i0++]);
for (var i = i0; i < s.length; i++) sb.appendC(c).append(s[i]);

return sb.toString();
}, "~A,~S,~N");
c$.isLike = Clazz.defineMethod(c$, "isLike", 
function(a, b){
var areEqual = a.equals(b);
if (areEqual) return true;
var isStart = b.startsWith("*");
var isEnd = b.endsWith("*");
return (!isStart && !isEnd) ? areEqual : isStart && isEnd ? b.length == 1 || a.contains(b.substring(1, b.length - 1)) : isStart ? a.endsWith(b.substring(1)) : a.startsWith(b.substring(0, b.length - 1));
}, "~S,~S");
c$.getMapValueNoCase = Clazz.defineMethod(c$, "getMapValueNoCase", 
function(h, key){
if ("this".equals(key)) return h;
var val = h.get(key);
if (val == null) for (var e, $e = h.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) if (e.getKey().equalsIgnoreCase(key)) return e.getValue();

return val;
}, "java.util.Map,~S");
c$.clean = Clazz.defineMethod(c$, "clean", 
function(s){
return JU.PT.rep(JU.PT.replaceAllCharacters(s, " \t\n\r", " "), "  ", " ").trim();
}, "~S");
c$.fdup = Clazz.defineMethod(c$, "fdup", 
function(f, pt, n){
var ch;
var count = 0;
for (var i = pt; --i >= 1; ) {
if (JU.PT.isDigit(ch = f.charAt(i))) continue;
switch ((ch).charCodeAt(0)) {
case 46:
if (count++ != 0) return f;
continue;
case 45:
if (i != 1 && f.charAt(i - 1) != '.') return f;
continue;
default:
return f;
}
}
var s = f.substring(0, pt + 1);
var sb =  new JU.SB();
for (var i = 0; i < n; i++) sb.append(s);

sb.append(f.substring(pt + 1));
return sb.toString();
}, "~S,~N,~N");
c$.formatString = Clazz.defineMethod(c$, "formatString", 
function(strFormat, key, strT, floatT, doubleT, doOne){
if (strFormat == null) return null;
if ("".equals(strFormat)) return "";
var len = key.length;
if (strFormat.indexOf("%") < 0 || len == 0 || strFormat.indexOf(key) < 0) return strFormat;
var strLabel = "";
var ich;
var ichPercent;
var ichKey;
for (ich = 0; (ichPercent = strFormat.indexOf('%', ich)) >= 0 && (ichKey = strFormat.indexOf(key, ichPercent + 1)) >= 0; ) {
if (ich != ichPercent) strLabel += strFormat.substring(ich, ichPercent);
ich = ichPercent + 1;
if (ichKey > ichPercent + 6) {
strLabel += '%';
continue;
}try {
var alignLeft = false;
if (strFormat.charAt(ich) == '-') {
alignLeft = true;
++ich;
}var zeroPad = false;
if (strFormat.charAt(ich) == '0') {
zeroPad = true;
++ich;
}var ch;
var width = 0;
while ((ch = strFormat.charAt(ich)) >= '0' && (ch <= '9')) {
width = (10 * width) + (ch.charCodeAt(0) - 48);
++ich;
}
var precision = 2147483647;
var isExponential = false;
if (strFormat.charAt(ich) == '.') {
++ich;
if ((ch = strFormat.charAt(ich)) == '-') {
isExponential = true;
++ich;
}if ((ch = strFormat.charAt(ich)) >= '0' && ch <= '9') {
precision = ch.charCodeAt(0) - 48;
++ich;
if ((ch = strFormat.charAt(ich)) >= '0' && ch <= '9') {
precision = 10 * precision + (ch.charCodeAt(0) - 48);
++ich;
}}if (isExponential) precision = -precision;
}var st = strFormat.substring(ich, ich + len);
if (!st.equals(key)) {
ich = ichPercent + 1;
strLabel += '%';
continue;
}ich += len;
if (!Float.isNaN(floatT)) strLabel += JU.PT.formatF(floatT, width, precision, alignLeft, zeroPad);
 else if (strT != null) strLabel += JU.PT.formatS(strT, width, precision < 0 ? precision - 1 : precision, alignLeft, zeroPad);
 else if (!Double.isNaN(doubleT)) strLabel += JU.PT.formatD(doubleT, width, precision - 1, alignLeft, zeroPad);
if (doOne) break;
} catch (ioobe) {
if (Clazz.exceptionOf(ioobe,"IndexOutOfBoundsException")){
ich = ichPercent;
break;
} else {
throw ioobe;
}
}
}
strLabel += strFormat.substring(ich);
return strLabel;
}, "~S,~S,~S,~N,~N,~B");
c$.formatStringS = Clazz.defineMethod(c$, "formatStringS", 
function(strFormat, key, strT){
return JU.PT.formatString(strFormat, key, strT, NaN, NaN, false);
}, "~S,~S,~S");
c$.formatStringF = Clazz.defineMethod(c$, "formatStringF", 
function(strFormat, key, floatT){
return JU.PT.formatString(strFormat, key, null, floatT, NaN, false);
}, "~S,~S,~N");
c$.formatStringI = Clazz.defineMethod(c$, "formatStringI", 
function(strFormat, key, intT){
return JU.PT.formatString(strFormat, key, "" + intT, NaN, NaN, false);
}, "~S,~S,~N");
c$.sprintf = Clazz.defineMethod(c$, "sprintf", 
function(strFormat, list, values){
if (values == null) return strFormat;
var n = list.length;
if (n == values.length) try {
for (var o = 0; o < n; o++) {
if (values[o] == null) continue;
switch ((list.charAt(o)).charCodeAt(0)) {
case 115:
strFormat = JU.PT.formatString(strFormat, "s", values[o], NaN, NaN, true);
break;
case 102:
strFormat = JU.PT.formatString(strFormat, "f", null, (values[o]).floatValue(), NaN, true);
break;
case 105:
strFormat = JU.PT.formatString(strFormat, "d", "" + values[o], NaN, NaN, true);
strFormat = JU.PT.formatString(strFormat, "i", "" + values[o], NaN, NaN, true);
break;
case 100:
strFormat = JU.PT.formatString(strFormat, "e", null, NaN, (values[o]).doubleValue(), true);
break;
case 112:
var pVal = values[o];
strFormat = JU.PT.formatString(strFormat, "p", null, pVal.x, NaN, true);
strFormat = JU.PT.formatString(strFormat, "p", null, pVal.y, NaN, true);
strFormat = JU.PT.formatString(strFormat, "p", null, pVal.z, NaN, true);
break;
case 113:
var qVal = values[o];
strFormat = JU.PT.formatString(strFormat, "q", null, qVal.x, NaN, true);
strFormat = JU.PT.formatString(strFormat, "q", null, qVal.y, NaN, true);
strFormat = JU.PT.formatString(strFormat, "q", null, qVal.z, NaN, true);
strFormat = JU.PT.formatString(strFormat, "q", null, qVal.w, NaN, true);
break;
case 83:
var sVal = values[o];
for (var i = 0; i < sVal.length; i++) strFormat = JU.PT.formatString(strFormat, "s", sVal[i], NaN, NaN, true);

break;
case 70:
var fVal = values[o];
for (var i = 0; i < fVal.length; i++) strFormat = JU.PT.formatString(strFormat, "f", null, fVal[i], NaN, true);

break;
case 73:
var iVal = values[o];
for (var i = 0; i < iVal.length; i++) strFormat = JU.PT.formatString(strFormat, "d", "" + iVal[i], NaN, NaN, true);

for (var i = 0; i < iVal.length; i++) strFormat = JU.PT.formatString(strFormat, "i", "" + iVal[i], NaN, NaN, true);

break;
case 68:
var dVal = values[o];
for (var i = 0; i < dVal.length; i++) strFormat = JU.PT.formatString(strFormat, "e", null, NaN, dVal[i], true);

}
}
return JU.PT.rep(strFormat, "%%", "%");
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
System.out.println("TextFormat.sprintf error " + list + " " + strFormat);
return JU.PT.rep(strFormat, "%", "?");
}, "~S,~S,~A");
c$.formatCheck = Clazz.defineMethod(c$, "formatCheck", 
function(strFormat){
if (strFormat == null || strFormat.indexOf('p') < 0 && strFormat.indexOf('q') < 0) return strFormat;
strFormat = JU.PT.rep(strFormat, "%%", "\1");
strFormat = JU.PT.rep(strFormat, "%p", "%6.2p");
strFormat = JU.PT.rep(strFormat, "%q", "%6.2q");
var format = JU.PT.split(strFormat, "%");
var sb =  new JU.SB();
sb.append(format[0]);
for (var i = 1; i < format.length; i++) {
var f = "%" + format[i];
var pt;
if (f.length >= 3) {
if ((pt = f.indexOf('p')) >= 0) f = JU.PT.fdup(f, pt, 3);
if ((pt = f.indexOf('q')) >= 0) f = JU.PT.fdup(f, pt, 4);
}sb.append(f);
}
return sb.toString().$replace('\1', '%');
}, "~S");
c$.leftJustify = Clazz.defineMethod(c$, "leftJustify", 
function(s, s1, s2){
s.append(s2);
var n = s1.length - s2.length;
if (n > 0) s.append(s1.substring(0, n));
}, "JU.SB,~S,~S");
c$.rightJustify = Clazz.defineMethod(c$, "rightJustify", 
function(s, s1, s2){
var n = s1.length - s2.length;
if (n > 0) s.append(s1.substring(0, n));
s.append(s2);
}, "JU.SB,~S,~S");
c$.safeTruncate = Clazz.defineMethod(c$, "safeTruncate", 
function(f, n){
if (f > -0.001 && f < 0.001) f = 0;
return (f + "         ").substring(0, n);
}, "~N,~N");
c$.isWild = Clazz.defineMethod(c$, "isWild", 
function(s){
return s != null && (s.indexOf("*") >= 0 || s.indexOf("?") >= 0);
}, "~S");
c$.isMatch = Clazz.defineMethod(c$, "isMatch", 
function(search, match, checkStar, allowInitialStar){
if (search.equals(match)) return true;
var mLen = match.length;
if (mLen == 0) return false;
var isStar0 = (checkStar && allowInitialStar ? match.charAt(0) == '*' : false);
if (mLen == 1 && isStar0) return true;
var isStar1 = (checkStar && match.endsWith("*"));
var haveQ = (match.indexOf('?') >= 0);
if (!haveQ) {
if (isStar0) return (isStar1 ? (mLen < 3 || search.indexOf(match.substring(1, mLen - 1)) >= 0) : search.endsWith(match.substring(1)));
 else if (isStar1) return search.startsWith(match.substring(0, mLen - 1));
}var sLen = search.length;
var qqqq = "????";
var nq = 4;
while (nq < sLen) {
qqqq += qqqq;
nq *= 2;
}
if (checkStar) {
if (isStar0) {
match = qqqq + match.substring(1);
mLen += nq - 1;
}if (isStar1) {
match = match.substring(0, mLen - 1) + qqqq;
mLen += nq - 1;
}}if (mLen < sLen) return false;
var ich = 0;
while (mLen > sLen) {
if (allowInitialStar && match.charAt(ich) == '?') {
++ich;
} else if (match.charAt(ich + mLen - 1) != '?') {
return false;
}--mLen;
}
for (var i = sLen; --i >= 0; ) {
var chm = match.charAt(ich + i);
if (chm == '?') continue;
var chs = search.charAt(i);
if (chm != chs && (chm != '\1' || chs != '?')) return false;
}
return true;
}, "~S,~S,~B,~B");
c$.replaceQuotedStrings = Clazz.defineMethod(c$, "replaceQuotedStrings", 
function(s, list, newList){
var n = list.size();
for (var i = 0; i < n; i++) {
var name = list.get(i);
var newName = newList.get(i);
if (!newName.equals(name)) s = JU.PT.rep(s, "\"" + name + "\"", "\"" + newName + "\"");
}
return s;
}, "~S,JU.Lst,JU.Lst");
c$.replaceStrings = Clazz.defineMethod(c$, "replaceStrings", 
function(s, list, newList){
var n = list.size();
for (var i = 0; i < n; i++) {
var name = list.get(i);
var newName = newList.get(i);
if (!newName.equals(name)) s = JU.PT.rep(s, name, newName);
}
return s;
}, "~S,JU.Lst,JU.Lst");
c$.isDigit = Clazz.defineMethod(c$, "isDigit", 
function(ch){
var c = (ch).charCodeAt(0);
return (48 <= c && c <= 57);
}, "~S");
c$.isUpperCase = Clazz.defineMethod(c$, "isUpperCase", 
function(ch){
var c = (ch).charCodeAt(0);
return (65 <= c && c <= 90);
}, "~S");
c$.isLowerCase = Clazz.defineMethod(c$, "isLowerCase", 
function(ch){
var c = (ch).charCodeAt(0);
return (97 <= c && c <= 122);
}, "~S");
c$.isLetter = Clazz.defineMethod(c$, "isLetter", 
function(ch){
var c = (ch).charCodeAt(0);
return (65 <= c && c <= 90 || 97 <= c && c <= 122);
}, "~S");
c$.isLetterOrDigit = Clazz.defineMethod(c$, "isLetterOrDigit", 
function(ch){
var c = (ch).charCodeAt(0);
return (65 <= c && c <= 90 || 97 <= c && c <= 122 || 48 <= c && c <= 57);
}, "~S");
c$.isWhitespace = Clazz.defineMethod(c$, "isWhitespace", 
function(ch){
var c = (ch).charCodeAt(0);
return (c >= 0x1c && c <= 0x20 || c >= 0x9 && c <= 0xd);
}, "~S");
c$.fixPtFloats = Clazz.defineMethod(c$, "fixPtFloats", 
function(pt, f){
pt.x = Math.round(pt.x * f) / f;
pt.y = Math.round(pt.y * f) / f;
pt.z = Math.round(pt.z * f) / f;
}, "JU.T3,~N");
c$.fixFloat = Clazz.defineMethod(c$, "fixFloat", 
function(d, f){
return (Math.round(d * f) / f);
}, "~N,~N");
c$.fixDouble = Clazz.defineMethod(c$, "fixDouble", 
function(d, f){
return Math.round((d * f)) / f;
}, "~N,~N");
c$.parseFloatFraction = Clazz.defineMethod(c$, "parseFloatFraction", 
function(s){
var pt = s.indexOf("/");
return (pt < 0 ? JU.PT.parseFloat(s) : JU.PT.parseFloat(s.substring(0, pt)) / JU.PT.parseFloat(s.substring(pt + 1)));
}, "~S");
c$.tensScale =  Clazz.newFloatArray(-1, [10, 100, 1000, 10000, 100000, 1000000]);
c$.decimalScale =  Clazz.newFloatArray(-1, [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001, 0.0000001, 0.00000001, 0.000000001, 0.0000000001, 0.00000000001, 0.000000000001, 0.0000000000001, 0.00000000000001, 0.000000000000001]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(null, "JU.AU", ["java.lang.reflect.Array", "java.util.Arrays", "JU.Lst"], function(){
var c$ = Clazz.declareType(JU, "AU", null);
c$.ensureLength = Clazz.defineMethod(c$, "ensureLength", 
function(array, minimumLength){
return (array != null && JU.AU.getLength(array) >= minimumLength ? array : JU.AU.arrayCopyObject(array, minimumLength));
}, "~O,~N");
c$.ensureLengthS = Clazz.defineMethod(c$, "ensureLengthS", 
function(array, minimumLength){
return (array != null && array.length >= minimumLength ? array : JU.AU.arrayCopyS(array, minimumLength));
}, "~A,~N");
c$.ensureLengthA = Clazz.defineMethod(c$, "ensureLengthA", 
function(array, minimumLength){
return (array != null && array.length >= minimumLength ? array : JU.AU.arrayCopyF(array, minimumLength));
}, "~A,~N");
c$.ensureLengthI = Clazz.defineMethod(c$, "ensureLengthI", 
function(array, minimumLength){
return (array != null && array.length >= minimumLength ? array : JU.AU.arrayCopyI(array, minimumLength));
}, "~A,~N");
c$.ensureLengthShort = Clazz.defineMethod(c$, "ensureLengthShort", 
function(array, minimumLength){
return (array != null && array.length >= minimumLength ? array : JU.AU.arrayCopyShort(array, minimumLength));
}, "~A,~N");
c$.ensureLengthByte = Clazz.defineMethod(c$, "ensureLengthByte", 
function(array, minimumLength){
return (array != null && array.length >= minimumLength ? array : JU.AU.arrayCopyByte(array, minimumLength));
}, "~A,~N");
c$.doubleLength = Clazz.defineMethod(c$, "doubleLength", 
function(array){
return JU.AU.arrayCopyObject(array, (array == null ? 16 : 2 * JU.AU.getLength(array)));
}, "~O");
c$.doubleLengthS = Clazz.defineMethod(c$, "doubleLengthS", 
function(array){
return JU.AU.arrayCopyS(array, (array == null ? 16 : 2 * array.length));
}, "~A");
c$.doubleLengthF = Clazz.defineMethod(c$, "doubleLengthF", 
function(array){
return JU.AU.arrayCopyF(array, (array == null ? 16 : 2 * array.length));
}, "~A");
c$.doubleLengthI = Clazz.defineMethod(c$, "doubleLengthI", 
function(array){
return JU.AU.arrayCopyI(array, (array == null ? 16 : 2 * array.length));
}, "~A");
c$.doubleLengthShort = Clazz.defineMethod(c$, "doubleLengthShort", 
function(array){
return JU.AU.arrayCopyShort(array, (array == null ? 16 : 2 * array.length));
}, "~A");
c$.doubleLengthByte = Clazz.defineMethod(c$, "doubleLengthByte", 
function(array){
return JU.AU.arrayCopyByte(array, (array == null ? 16 : 2 * array.length));
}, "~A");
c$.doubleLengthBool = Clazz.defineMethod(c$, "doubleLengthBool", 
function(array){
return JU.AU.arrayCopyBool(array, (array == null ? 16 : 2 * array.length));
}, "~A");
c$.deleteElements = Clazz.defineMethod(c$, "deleteElements", 
function(array, firstElement, nElements){
if (nElements == 0 || array == null) return array;
var oldLength = JU.AU.getLength(array);
if (firstElement >= oldLength) return array;
var n = oldLength - (firstElement + nElements);
if (n < 0) n = 0;
var t = JU.AU.newInstanceO(array, firstElement + n);
if (firstElement > 0) System.arraycopy(array, 0, t, 0, firstElement);
if (n > 0) System.arraycopy(array, firstElement + nElements, t, firstElement, n);
return t;
}, "~O,~N,~N");
c$.arrayCopyObject = Clazz.defineMethod(c$, "arrayCopyObject", 
function(array, newLength){
var oldLength = (array == null ? -1 : JU.AU.getLength(array));
if (newLength < 0) newLength = oldLength;
if (newLength == oldLength) return array;
{
if (newLength < oldLength) return Clazz.newArray(-1, array, 0, newLength);
}var t = JU.AU.newInstanceO(array, newLength);
if (oldLength > 0) System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
return t;
}, "~O,~N");
c$.newInstanceO = Clazz.defineMethod(c$, "newInstanceO", 
function(array, n){
if (JU.AU.isAI(array)) return  Clazz.newIntArray (n, 0);
{
if (!array.getClass || !array.getClass().getComponentType)
return new Array(n);
}return java.lang.reflect.Array.newInstance(array.getClass().getComponentType(), n);
}, "~O,~N");
c$.getLength = Clazz.defineMethod(c$, "getLength", 
function(array){
{
return array.length
}}, "~O");
c$.arrayCopyS = Clazz.defineMethod(c$, "arrayCopyS", 
function(array, newLength){
var oldLength = (array == null ? -1 : array.length);
if (newLength < 0) newLength = oldLength;
{
if (newLength < oldLength) return Clazz.newArray(-1, array, 0, newLength);
}var t =  new Array(newLength);
if (array != null) {
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.arrayCopyII = Clazz.defineMethod(c$, "arrayCopyII", 
function(array, newLength){
var t = JU.AU.newInt2(newLength);
if (array != null) {
var oldLength = array.length;
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.arrayCopyPt = Clazz.defineMethod(c$, "arrayCopyPt", 
function(array, newLength){
if (newLength < 0) newLength = array.length;
var t =  new Array(newLength);
if (array != null) {
var oldLength = array.length;
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.arrayCopyF = Clazz.defineMethod(c$, "arrayCopyF", 
function(array, newLength){
var oldLength = (array == null ? -1 : array.length);
if (newLength < 0) newLength = oldLength;
{
if (newLength < oldLength) return Clazz.newArray(-1, array, 0, newLength);
}var t =  Clazz.newFloatArray (newLength, 0);
if (array != null) {
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.arrayCopyI = Clazz.defineMethod(c$, "arrayCopyI", 
function(array, newLength){
var oldLength = (array == null ? -1 : array.length);
if (newLength < 0) newLength = oldLength;
{
if (newLength < oldLength) return Clazz.newArray(-1, array, 0, newLength);
}var t =  Clazz.newIntArray (newLength, 0);
if (array != null) {
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.arrayCopyRangeI = Clazz.defineMethod(c$, "arrayCopyRangeI", 
function(array, i0, n){
if (array == null) return null;
var oldLength = array.length;
if (n == -1) n = oldLength;
if (n == -2) n = Clazz.doubleToInt(oldLength / 2);
{
return Clazz.newArray(-1, array, i0, n);
}}, "~A,~N,~N");
c$.arrayCopyRangeRevI = Clazz.defineMethod(c$, "arrayCopyRangeRevI", 
function(array, i0, n){
if (array == null) return null;
{
return Clazz.newArray(-1, array, i0, n).reverse();
}}, "~A,~N,~N");
c$.arrayCopyShort = Clazz.defineMethod(c$, "arrayCopyShort", 
function(array, newLength){
var oldLength = (array == null ? -1 : array.length);
if (newLength < 0) newLength = oldLength;
{
if (newLength < oldLength) return Clazz.newArray(-1, array, 0, newLength);
}var t =  Clazz.newShortArray (newLength, 0);
if (array != null) {
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.arrayCopyByte = Clazz.defineMethod(c$, "arrayCopyByte", 
function(array, newLength){
var oldLength = (array == null ? -1 : array.length);
if (newLength < 0) newLength = oldLength;
{
if (newLength < oldLength) return Clazz.newArray(-1, array, 0, newLength);
}var t =  Clazz.newByteArray (newLength, 0);
if (array != null) {
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.arrayCopyBool = Clazz.defineMethod(c$, "arrayCopyBool", 
function(array, newLength){
var oldLength = (array == null ? -1 : array.length);
if (newLength < 0) newLength = oldLength;
{
if (newLength < oldLength) return Clazz.newArray(-1, array, 0, newLength);
}var t =  Clazz.newBooleanArray(newLength, false);
if (array != null) {
System.arraycopy(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, "~A,~N");
c$.swapInt = Clazz.defineMethod(c$, "swapInt", 
function(array, indexA, indexB){
var t = array[indexA];
array[indexA] = array[indexB];
array[indexB] = t;
}, "~A,~N,~N");
c$.dumpArray = Clazz.defineMethod(c$, "dumpArray", 
function(msg, A, x1, x2, y1, y2){
var s = "dumpArray: " + msg + "\n";
for (var x = x1; x <= x2; x++) s += "\t*" + x + "*";

for (var y = y2; y >= y1; y--) {
s += "\n*" + y + "*";
for (var x = x1; x <= x2; x++) s += "\t" + (x < A.length && y < A[x].length ? A[x][y] : NaN);

}
return s;
}, "~S,~A,~N,~N,~N,~N");
c$.dumpIntArray = Clazz.defineMethod(c$, "dumpIntArray", 
function(A, n){
var str = "";
for (var i = 0; i < n; i++) str += " " + A[i];

return str;
}, "~A,~N");
c$.sortedItem = Clazz.defineMethod(c$, "sortedItem", 
function(v, n){
if (v.size() == 0) return null;
if (v.size() == 1) return v.get(0);
var keys = v.toArray( new Array(v.size()));
java.util.Arrays.sort(keys);
return keys[n % keys.length];
}, "JU.Lst,~N");
c$.createArrayOfArrayList = Clazz.defineMethod(c$, "createArrayOfArrayList", 
function(size){
return  new Array(size);
}, "~N");
c$.createArrayOfHashtable = Clazz.defineMethod(c$, "createArrayOfHashtable", 
function(size){
return  new Array(size);
}, "~N");
c$.swap = Clazz.defineMethod(c$, "swap", 
function(o, i, j){
var oi = o[i];
o[i] = o[j];
o[j] = oi;
}, "~A,~N,~N");
c$.newFloat2 = Clazz.defineMethod(c$, "newFloat2", 
function(n){
{
return Clazz.newArray(n, null);
}}, "~N");
c$.newInt2 = Clazz.defineMethod(c$, "newInt2", 
function(n){
{
return Clazz.newArray(n, null);
}}, "~N");
c$.newInt3 = Clazz.defineMethod(c$, "newInt3", 
function(nx, ny){
{
return Clazz.newArray(nx, null);
}}, "~N,~N");
c$.newFloat3 = Clazz.defineMethod(c$, "newFloat3", 
function(nx, ny){
{
return Clazz.newArray(nx, null);
}}, "~N,~N");
c$.newInt4 = Clazz.defineMethod(c$, "newInt4", 
function(n){
{
return Clazz.newArray(n, null);
}}, "~N");
c$.newShort2 = Clazz.defineMethod(c$, "newShort2", 
function(n){
{
return Clazz.newArray(n, null);
}}, "~N");
c$.newByte2 = Clazz.defineMethod(c$, "newByte2", 
function(n){
{
return Clazz.newArray(n, null);
}}, "~N");
c$.newDouble2 = Clazz.defineMethod(c$, "newDouble2", 
function(n){
{
return Clazz.newArray(n, null);
}}, "~N");
c$.newDouble3n = Clazz.defineMethod(c$, "newDouble3n", 
function(n){
return  Clazz.newDoubleArray (n, 0);
}, "~N");
c$.removeMapKeys = Clazz.defineMethod(c$, "removeMapKeys", 
function(map, root){
var list =  new JU.Lst();
for (var key, $key = map.keySet().iterator (); $key.hasNext()&& ((key = $key.next ()) || true);) if (key.startsWith(root)) list.addLast(key);

for (var i = list.size(); --i >= 0; ) map.remove(list.get(i));

return list.size();
}, "java.util.Map,~S");
c$.isAS = Clazz.defineMethod(c$, "isAS", 
function(x){
{
return Clazz.isAS(x);
}}, "~O");
c$.isASS = Clazz.defineMethod(c$, "isASS", 
function(x){
{
return Clazz.isASS(x);
}}, "~O");
c$.isAP = Clazz.defineMethod(c$, "isAP", 
function(x){
{
return Clazz.isAP(x);
}}, "~O");
c$.isAF = Clazz.defineMethod(c$, "isAF", 
function(x){
{
return Clazz.isAF(x);
}}, "~O");
c$.isAFloat = Clazz.defineMethod(c$, "isAFloat", 
function(x){
{
return Clazz.isAFloat(x);
}}, "~O");
c$.isAD = Clazz.defineMethod(c$, "isAD", 
function(x){
{
return Clazz.isAF(x);
}}, "~O");
c$.isADD = Clazz.defineMethod(c$, "isADD", 
function(x){
{
return Clazz.isAFF(x);
}}, "~O");
c$.isADDD = Clazz.defineMethod(c$, "isADDD", 
function(x){
{
return Clazz.isAFFF(x);
}}, "~O");
c$.isAB = Clazz.defineMethod(c$, "isAB", 
function(x){
{
return Clazz.isAB(x);
}}, "~O");
c$.isAI = Clazz.defineMethod(c$, "isAI", 
function(x){
{
return Clazz.isAI(x);
}}, "~O");
c$.isAII = Clazz.defineMethod(c$, "isAII", 
function(x){
{
return Clazz.isAII(x);
}}, "~O");
c$.isAFF = Clazz.defineMethod(c$, "isAFF", 
function(x){
{
return Clazz.isAFF(x);
}}, "~O");
c$.isAFFF = Clazz.defineMethod(c$, "isAFFF", 
function(x){
{
return Clazz.isAFFF(x);
}}, "~O");
c$.ensureSignedBytes = Clazz.defineMethod(c$, "ensureSignedBytes", 
function(b){
if (b != null) {
{
for (var i = b.length; --i >= 0;) { var j = b[i] & 0xFF; if
(j >= 0x80) j -= 0x100; b[i] = j; }
}}return b;
}, "~A");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.util.ArrayList"], "JU.Lst", null, function(){
var c$ = Clazz.declareType(JU, "Lst", java.util.ArrayList);
Clazz.defineMethod(c$, "addLast", 
function(v){
{
return this.add1(v);
}}, "~O");
Clazz.overrideMethod(c$, "add", 
function(pos, v){
{
return this.add2(pos, v);
}}, "~N,~O");
Clazz.defineMethod(c$, "removeItemAt", 
function(location){
{
return this._removeItemAt(location);
}}, "~N");
Clazz.defineMethod(c$, "removeObj", 
function(v){
{
return this._removeObject(v);
}}, "~O");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(null, "JU.DF", ["JU.PT", "$.SB"], function(){
var c$ = Clazz.declareType(JU, "DF", null);
c$.setUseNumberLocalization = Clazz.defineMethod(c$, "setUseNumberLocalization", 
function(TF){
JU.DF.useNumberLocalization[0] = (TF ? Boolean.TRUE : Boolean.FALSE);
}, "~B");
c$.formatDecimalDbl = Clazz.defineMethod(c$, "formatDecimalDbl", 
function(value, decimalDigits){
if (decimalDigits == 2147483647 || value == -Infinity || value == Infinity || Double.isNaN(value)) return "" + value;
return JU.DF.formatDecimal(value, decimalDigits);
}, "~N,~N");
c$.formatDecimal = Clazz.defineMethod(c$, "formatDecimal", 
function(value, decimalDigits){
if (value == -Infinity || value == Infinity || Double.isNaN(value)) return "" + value;
if (decimalDigits == 2147483647) return "" + value;
var isNeg = (value < 0);
if (isNeg) value = -value;
var n;
if (decimalDigits < 0) {
decimalDigits = -decimalDigits;
if (decimalDigits > JU.DF.formattingStrings.length) decimalDigits = JU.DF.formattingStrings.length;
if (value == 0) return JU.DF.formattingStrings[decimalDigits - 1] + "E+0";
n = 0;
var d;
if (Math.abs(value) < 1) {
n = 100;
d = value * 1e-100;
} else {
n = -100;
d = value * 1e100;
}var s = ("" + d).toUpperCase();
var i1 = s.indexOf("E");
var sf;
if (i1 < 0) {
sf = "" + value;
} else {
n = JU.PT.parseInt(s.substring(i1 + (s.indexOf("E+") == i1 ? 2 : 1))) + n;
var f = JU.PT.parseFloat(s.substring(0, i1));
sf = JU.DF.formatDecimal(f, decimalDigits - 1);
if (sf.startsWith("10.")) {
sf = JU.DF.formatDecimal(1, decimalDigits - 1);
n++;
}}return (isNeg ? "-" : "") + sf + "E" + (n >= 0 ? "+" : "") + n;
}if (decimalDigits >= JU.DF.formattingStrings.length) decimalDigits = JU.DF.formattingStrings.length - 1;
var s1 = ("" + value).toUpperCase();
var pt = s1.indexOf(".");
if (pt < 0) return (isNeg ? "-" : "") + s1 + JU.DF.formattingStrings[decimalDigits].substring(1);
var pt1 = s1.indexOf("E-");
if (pt1 > 0) {
n = JU.PT.parseInt(s1.substring(pt1 + 1));
s1 = "0." + "0000000000000000000000000000000000000000".substring(0, -n - 1) + s1.substring(0, 1) + s1.substring(2, pt1);
pt = 1;
}pt1 = s1.indexOf("E");
if (pt1 > 0) {
n = JU.PT.parseInt(s1.substring(pt1 + 1));
s1 = s1.substring(0, 1) + s1.substring(2, pt1) + "0000000000000000000000000000000000000000";
s1 = s1.substring(0, n + 1) + "." + s1.substring(n + 1);
pt = s1.indexOf(".");
}var len = s1.length;
var pt2 = decimalDigits + pt + 1;
if (pt2 < len && s1.charAt(pt2) >= '5') {
return JU.DF.formatDecimal((isNeg ? -1 : 1) * (value + JU.DF.formatAdds[decimalDigits]), decimalDigits);
}var s0 = s1.substring(0, (decimalDigits == 0 ? pt : ++pt));
var sb = JU.SB.newS(s0);
if (isNeg && s0.equals("0.") && decimalDigits + 2 <= len && s1.substring(2, 2 + decimalDigits).equals("0000000000000000000000000000000000000000".substring(0, decimalDigits))) isNeg = false;
for (var i = 0; i < decimalDigits; i++, pt++) {
if (pt < len) sb.appendC(s1.charAt(pt));
 else sb.appendC('0');
}
s1 = (isNeg ? "-" : "") + sb;
return (Boolean.TRUE.equals(JU.DF.useNumberLocalization[0]) ? s1 : s1.$replace(',', '.'));
}, "~N,~N");
c$.formatDecimalTrimmed = Clazz.defineMethod(c$, "formatDecimalTrimmed", 
function(x, precision){
var str = JU.DF.formatDecimalDbl(x, precision);
var m = str.length - 1;
var zero = '0';
while (m >= 0 && str.charAt(m) == zero) m--;

return str.substring(0, m + 1);
}, "~N,~N");
c$.formatDecimalTrimmed0 = Clazz.defineMethod(c$, "formatDecimalTrimmed0", 
function(x, precision){
var str = JU.DF.formatDecimalDbl(x, precision);
var m = str.length - 1;
var pt = str.indexOf(".") + 1;
while (m > pt && str.charAt(m) == '0') m--;

return str.substring(0, m + 1);
}, "~N,~N");
c$.formattingStrings =  Clazz.newArray(-1, ["0", "0.0", "0.00", "0.000", "0.0000", "0.00000", "0.000000", "0.0000000", "0.00000000", "0.000000000", "0.0000000000", "0.00000000000", "0.000000000000"]);
c$.formatAdds =  Clazz.newDoubleArray(-1, [0.5, 0.05, 0.005, 0.0005, 0.00005, 0.000005, 0.0000005, 0.00000005, 0.000000005, 0.0000000005, 0.00000000005, 0.000000000005, 0.0000000000005]);
c$.useNumberLocalization =  Clazz.newArray(-1, [Boolean.TRUE]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
(function(){
var c$ = Clazz.decorateAsClass(function(){
this.sb = null;
this.s = null;
Clazz.instantialize(this, arguments);}, JU, "SB", null);
Clazz.makeConstructor(c$, 
function(){
{
this.s = "";
}});
c$.newN = Clazz.defineMethod(c$, "newN", 
function(n){
{
return new JU.SB();
}}, "~N");
c$.newS = Clazz.defineMethod(c$, "newS", 
function(s){
{
var sb = new JU.SB();
sb.s = s;
return sb;
}}, "~S");
Clazz.defineMethod(c$, "append", 
function(s){
{
this.s += s
}return this;
}, "~S");
Clazz.defineMethod(c$, "appendC", 
function(c){
{
this.s += c;
}return this;
}, "~S");
Clazz.defineMethod(c$, "appendI", 
function(i){
{
this.s += i
}return this;
}, "~N");
Clazz.defineMethod(c$, "appendB", 
function(b){
{
this.s += b
}return this;
}, "~B");
Clazz.defineMethod(c$, "appendF", 
function(f){
{
var sf = "" + f;
if (sf.indexOf(".") < 0 && sf.indexOf("e") < 0)
sf += ".0" ;
this.s += sf;
}return this;
}, "~N");
Clazz.defineMethod(c$, "appendD", 
function(d){
{
var sf = "" + d;
if (sf.indexOf(".") < 0 && sf.indexOf("e") < 0)
sf += ".0" ;
this.s += sf;
}return this;
}, "~N");
Clazz.defineMethod(c$, "appendSB", 
function(buf){
{
this.s += buf.s;
}return this;
}, "JU.SB");
Clazz.defineMethod(c$, "appendO", 
function(data){
if (data != null) {
{
this.s += data.toString();
}}return this;
}, "~O");
Clazz.defineMethod(c$, "appendCB", 
function(cb, off, len){
{
this.s += cb.slice(off,off+len).join("");
}}, "~A,~N,~N");
Clazz.overrideMethod(c$, "toString", 
function(){
{
return this.s;
}});
Clazz.defineMethod(c$, "length", 
function(){
{
return this.s.length;
}});
Clazz.defineMethod(c$, "indexOf", 
function(s){
{
return this.s.indexOf(s);
}}, "~S");
Clazz.defineMethod(c$, "charAt", 
function(i){
{
return this.s.charAt(i);
}}, "~N");
Clazz.defineMethod(c$, "charCodeAt", 
function(i){
{
return this.s.charCodeAt(i);
}}, "~N");
Clazz.defineMethod(c$, "setLength", 
function(n){
{
this.s = this.s.substring(0, n);
}}, "~N");
Clazz.defineMethod(c$, "lastIndexOf", 
function(s){
{
return this.s.lastIndexOf(s);
}}, "~S");
Clazz.defineMethod(c$, "indexOf2", 
function(s, i){
{
return this.s.indexOf(s, i);
}}, "~S,~N");
Clazz.defineMethod(c$, "substring", 
function(i){
{
return this.s.substring(i);
}}, "~N");
Clazz.defineMethod(c$, "substring2", 
function(i, j){
{
return this.s.substring(i, j);
}}, "~N,~N");
Clazz.defineMethod(c$, "toBytes", 
function(off, len){
if (len == 0) return  Clazz.newByteArray (0, 0);
var cs;
{
cs = "UTF-8";
}return (len > 0 ? this.substring2(off, off + len) : off == 0 ? this.toString() : this.substring2(off, this.length() - off)).getBytes(cs);
}, "~N,~N");
Clazz.defineMethod(c$, "replace", 
function(start, end, str){
{
this.s = this.s.substring(0, start) + str + this.s.substring(end);
}}, "~N,~N,~S");
Clazz.defineMethod(c$, "insert", 
function(offset, str){
this.replace(offset, offset, str);
}, "~N,~S");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.app");
Clazz.load(["JSV.api.JSVAppInterface", "$.PanelListener", "$.ScriptInterface"], "JSV.app.JSVApp", ["JU.Lst", "$.PT", "JSV.common.Coordinate", "$.JSVFileManager", "$.JSVersion", "$.JSViewer", "$.ScriptToken", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.appletFrame = null;
this.isNewWindow = false;
this.appletReadyCallbackFunctionName = null;
this.coordCallbackFunctionName = null;
this.loadFileCallbackFunctionName = null;
this.peakCallbackFunctionName = null;
this.syncCallbackFunctionName = null;
this.vwr = null;
this.prevPanel = null;
Clazz.instantialize(this, arguments);}, JSV.app, "JSVApp", null, [JSV.api.PanelListener, JSV.api.JSVAppInterface, JSV.api.ScriptInterface]);
Clazz.makeConstructor(c$, 
function(appletFrame, isJS){
this.appletFrame = appletFrame;
this.vwr =  new JSV.common.JSViewer(this, true, isJS, true);
appletFrame.setDropTargetListener(this.isSigned(), this.vwr);
var path = appletFrame.getDocumentBase();
JSV.common.JSVFileManager.setDocumentBase(this.vwr, path);
this.initParams(appletFrame.getParameter("script"));
}, "JSV.api.AppletFrame,~B");
Clazz.overrideMethod(c$, "isPro", 
function(){
return this.isSigned();
});
Clazz.overrideMethod(c$, "isSigned", 
function(){
{
return true;
}});
Clazz.defineMethod(c$, "getAppletFrame", 
function(){
return this.appletFrame;
});
Clazz.defineMethod(c$, "dispose", 
function(){
try {
this.vwr.dispose();
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
e.printStackTrace();
} else {
throw e;
}
}
});
Clazz.overrideMethod(c$, "getPropertyAsJavaObject", 
function(key){
return this.vwr.getPropertyAsJavaObject(key);
}, "~S");
Clazz.overrideMethod(c$, "getPropertyAsJSON", 
function(key){
return JU.PT.toJSON(null, this.getPropertyAsJavaObject(key));
}, "~S");
Clazz.overrideMethod(c$, "getCoordinate", 
function(){
return this.vwr.getCoordinate();
});
Clazz.overrideMethod(c$, "loadInline", 
function(data){
this.siOpenDataOrFile(data, "[inline]", null, null, -1, -1, true, null, null);
this.appletFrame.validateContent(3);
}, "~S");
Clazz.overrideMethod(c$, "exportSpectrum", 
function(type, n){
return this.vwr.$export(type, n);
}, "~S,~N");
Clazz.overrideMethod(c$, "setFilePath", 
function(tmpFilePath){
this.runScript("load " + JU.PT.esc(tmpFilePath));
}, "~S");
Clazz.overrideMethod(c$, "setSpectrumNumber", 
function(n){
this.runScript(JSV.common.ScriptToken.SPECTRUMNUMBER + " " + n);
}, "~N");
Clazz.overrideMethod(c$, "reversePlot", 
function(){
this.toggle(JSV.common.ScriptToken.REVERSEPLOT);
});
Clazz.overrideMethod(c$, "toggleGrid", 
function(){
this.toggle(JSV.common.ScriptToken.GRIDON);
});
Clazz.overrideMethod(c$, "toggleCoordinate", 
function(){
this.toggle(JSV.common.ScriptToken.COORDINATESON);
});
Clazz.overrideMethod(c$, "togglePointsOnly", 
function(){
this.toggle(JSV.common.ScriptToken.POINTSONLY);
});
Clazz.overrideMethod(c$, "toggleIntegration", 
function(){
this.toggle(JSV.common.ScriptToken.INTEGRATE);
});
Clazz.defineMethod(c$, "toggle", 
function(st){
if (this.vwr.selectedPanel != null) this.runScript(st + " TOGGLE");
}, "JSV.common.ScriptToken");
Clazz.overrideMethod(c$, "addHighlight", 
function(x1, x2, r, g, b, a){
this.runScript("HIGHLIGHT " + x1 + " " + x2 + " " + r + " " + g + " " + b + " " + a);
}, "~N,~N,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "removeHighlight", 
function(x1, x2){
this.runScript("HIGHLIGHT " + x1 + " " + x2 + " OFF");
}, "~N,~N");
Clazz.overrideMethod(c$, "removeAllHighlights", 
function(){
this.runScript("HIGHLIGHT OFF");
});
Clazz.overrideMethod(c$, "syncScript", 
function(peakScript){
this.vwr.syncScript(peakScript);
}, "~S");
Clazz.overrideMethod(c$, "writeStatus", 
function(msg){
JU.Logger.info(msg);
}, "~S");
Clazz.defineMethod(c$, "initParams", 
function(params){
this.vwr.parseInitScript(params);
this.newAppletPanel();
this.vwr.setPopupMenu(this.vwr.allowMenu, this.vwr.parameters.getBoolean(JSV.common.ScriptToken.ENABLEZOOM));
if (this.vwr.allowMenu) {
this.vwr.closeSource(null);
}this.runScriptNow(params);
}, "~S");
Clazz.defineMethod(c$, "newAppletPanel", 
function(){
JU.Logger.info("newAppletPanel");
this.appletFrame.createMainPanel(this.vwr);
});
Clazz.overrideMethod(c$, "repaint", 
function(){
var applet = (this.vwr == null ? null : this.vwr.html5Applet);
if (JSV.common.JSViewer.jsmolObject == null) {
this.appletFrame.repaint();
} else if (applet != null) {
JSV.common.JSViewer.jsmolObject.repaint(applet, true);
}});
Clazz.defineMethod(c$, "updateJS", 
function(width, height){
}, "~N,~N");
Clazz.overrideMethod(c$, "runScriptNow", 
function(params){
return this.vwr.runScriptNow(params);
}, "~S");
Clazz.defineMethod(c$, "checkCallbacks", 
function(){
if (this.coordCallbackFunctionName == null && this.peakCallbackFunctionName == null) return;
var coord =  new JSV.common.Coordinate();
var actualCoord = (this.peakCallbackFunctionName == null ? null :  new JSV.common.Coordinate());
if (!this.vwr.pd().getPickedCoordinates(coord, actualCoord)) return;
var iSpec = this.vwr.mainPanel.getCurrentPanelIndex();
if (actualCoord == null) this.appletFrame.callToJavaScript(this.coordCallbackFunctionName,  Clazz.newArray(-1, [Double.$valueOf(coord.getXVal()), Double.$valueOf(coord.getYVal()), Integer.$valueOf(iSpec + 1)]));
 else this.appletFrame.callToJavaScript(this.peakCallbackFunctionName,  Clazz.newArray(-1, [Double.$valueOf(coord.getXVal()), Double.$valueOf(coord.getYVal()), Double.$valueOf(actualCoord.getXVal()), Double.$valueOf(actualCoord.getYVal()), Integer.$valueOf(iSpec + 1)]));
});
Clazz.defineMethod(c$, "doAdvanced", 
function(filePath){
}, "~S");
Clazz.overrideMethod(c$, "panelEvent", 
function(eventObj){
if (Clazz.instanceOf(eventObj,"JSV.common.PeakPickEvent")) {
this.vwr.processPeakPickEvent(eventObj, false);
} else if (Clazz.instanceOf(eventObj,"JSV.common.ZoomEvent")) {
} else if (Clazz.instanceOf(eventObj,"JSV.common.SubSpecChangeEvent")) {
}}, "~O");
Clazz.overrideMethod(c$, "getSolnColour", 
function(){
return this.vwr.getSolutionColorStr(true);
});
Clazz.defineMethod(c$, "updateJSView", 
function(msg){
var applet = this.vwr.html5Applet;
var panel = (applet == null ? null : this.vwr.selectedPanel);
{
if (!applet || applet._viewSet == null) return;
}applet._updateView(panel, msg);
}, "~S");
Clazz.overrideMethod(c$, "syncToJmol", 
function(msg){
this.updateJSView(msg);
if (this.syncCallbackFunctionName == null) return;
JU.Logger.info("JSVApp.syncToJmol JSV>Jmol " + msg);
this.appletFrame.callToJavaScript(this.syncCallbackFunctionName,  Clazz.newArray(-1, [this.vwr.fullName, msg]));
}, "~S");
Clazz.overrideMethod(c$, "setVisible", 
function(b){
this.appletFrame.setPanelVisible(b);
}, "~B");
Clazz.overrideMethod(c$, "setCursor", 
function(id){
this.vwr.apiPlatform.setCursor(id, this.appletFrame);
}, "~N");
Clazz.overrideMethod(c$, "runScript", 
function(script){
this.vwr.runScript(script);
}, "~S");
Clazz.overrideMethod(c$, "getScriptQueue", 
function(){
return this.vwr.scriptQueue;
});
Clazz.overrideMethod(c$, "siSetCurrentSource", 
function(source){
this.vwr.currentSource = source;
}, "JSV.source.JDXSource");
Clazz.overrideMethod(c$, "siSendPanelChange", 
function(){
if (this.vwr.selectedPanel === this.prevPanel) return;
this.prevPanel = this.vwr.selectedPanel;
this.vwr.sendPanelChange();
});
Clazz.overrideMethod(c$, "siNewWindow", 
function(isSelected, fromFrame){
this.isNewWindow = isSelected;
if (fromFrame) {
if (this.vwr.jsvpPopupMenu != null) this.vwr.jsvpPopupMenu.setSelected("Window", false);
} else {
this.appletFrame.newWindow(isSelected);
}}, "~B,~B");
Clazz.overrideMethod(c$, "siValidateAndRepaint", 
function(isAll){
var pd = this.vwr.pd();
if (pd != null) pd.setTaintedAll();
this.appletFrame.validate();
this.repaint();
}, "~B");
Clazz.overrideMethod(c$, "siSyncLoad", 
function(filePath){
this.newAppletPanel();
JU.Logger.info("JSVP syncLoad reading " + filePath);
this.siOpenDataOrFile(null, null, null, filePath, -1, -1, false, null, null);
this.appletFrame.validateContent(3);
}, "~S");
Clazz.overrideMethod(c$, "siOpenDataOrFile", 
function(data, name, specs, url, firstSpec, lastSpec, isAppend, script, id){
switch (this.vwr.openDataOrFile(data, name, specs, url, firstSpec, lastSpec, isAppend, id)) {
case 0:
if (script != null) this.runScript(script);
break;
case -1:
return;
default:
this.siSetSelectedPanel(null);
return;
}
JU.Logger.info(this.appletFrame.getAppletInfo() + " File " + this.vwr.currentSource.getFilePath() + " Loaded Successfully");
}, "~O,~S,JU.Lst,~S,~N,~N,~B,~S,~S");
Clazz.overrideMethod(c$, "siProcessCommand", 
function(scriptItem){
this.vwr.runScriptNow(scriptItem);
}, "~S");
Clazz.overrideMethod(c$, "siSetSelectedPanel", 
function(jsvp){
this.vwr.mainPanel.setSelectedPanel(this.vwr, jsvp, this.vwr.panelNodes);
this.vwr.spectraTree.setSelectedPanel(this, jsvp);
if (jsvp == null) {
jsvp = this.appletFrame.getJSVPanel(this.vwr, null);
this.vwr.mainPanel.setSelectedPanel(this.vwr, jsvp, null);
}this.appletFrame.validate();
if (jsvp != null) {
jsvp.setEnabled(true);
jsvp.setFocusable(true);
}}, "JSV.api.JSVPanel");
Clazz.overrideMethod(c$, "siExecSetCallback", 
function(st, value){
switch (st) {
case JSV.common.ScriptToken.APPLETREADYCALLBACKFUNCTIONNAME:
this.appletReadyCallbackFunctionName = value;
break;
case JSV.common.ScriptToken.LOADFILECALLBACKFUNCTIONNAME:
this.loadFileCallbackFunctionName = value;
break;
case JSV.common.ScriptToken.PEAKCALLBACKFUNCTIONNAME:
this.peakCallbackFunctionName = value;
break;
case JSV.common.ScriptToken.SYNCCALLBACKFUNCTIONNAME:
this.syncCallbackFunctionName = value;
break;
case JSV.common.ScriptToken.COORDCALLBACKFUNCTIONNAME:
this.coordCallbackFunctionName = value;
break;
}
}, "JSV.common.ScriptToken,~S");
Clazz.overrideMethod(c$, "siLoaded", 
function(value){
if (this.loadFileCallbackFunctionName != null) this.appletFrame.callToJavaScript(this.loadFileCallbackFunctionName,  Clazz.newArray(-1, [this.vwr.appletName, value]));
this.updateJSView(null);
return null;
}, "~S");
Clazz.overrideMethod(c$, "siExecHidden", 
function(b){
}, "~B");
Clazz.overrideMethod(c$, "siExecScriptComplete", 
function(msg, isOK){
if (!isOK) this.vwr.showMessage(msg);
this.siValidateAndRepaint(false);
}, "~S,~B");
Clazz.overrideMethod(c$, "siUpdateBoolean", 
function(st, TF){
}, "JSV.common.ScriptToken,~B");
Clazz.overrideMethod(c$, "siCheckCallbacks", 
function(title){
this.checkCallbacks();
}, "~S");
Clazz.overrideMethod(c$, "siNodeSet", 
function(panelNode){
this.appletFrame.validateContent(2);
this.siValidateAndRepaint(false);
}, "JSV.common.PanelNode");
Clazz.overrideMethod(c$, "siSourceClosed", 
function(source){
}, "JSV.source.JDXSource");
Clazz.overrideMethod(c$, "siGetNewJSVPanel", 
function(spec){
if (spec == null) {
this.vwr.initialEndIndex = this.vwr.initialStartIndex = -1;
return null;
}var specs =  new JU.Lst();
specs.addLast(spec);
var jsvp = this.appletFrame.getJSVPanel(this.vwr, specs);
jsvp.getPanelData().addListener(this);
this.vwr.parameters.setFor(jsvp, null, true);
return jsvp;
}, "JSV.common.Spectrum");
Clazz.overrideMethod(c$, "siGetNewJSVPanel2", 
function(specs){
if (specs == null) {
this.vwr.initialEndIndex = this.vwr.initialStartIndex = -1;
return this.appletFrame.getJSVPanel(this.vwr, null);
}var jsvp = this.appletFrame.getJSVPanel(this.vwr, specs);
this.vwr.initialEndIndex = this.vwr.initialStartIndex = -1;
jsvp.getPanelData().addListener(this);
this.vwr.parameters.setFor(jsvp, null, true);
return jsvp;
}, "JU.Lst");
Clazz.overrideMethod(c$, "siSetPropertiesFromPreferences", 
function(jsvp, includeMeasures){
this.vwr.checkAutoIntegrate();
}, "JSV.api.JSVPanel,~B");
Clazz.overrideMethod(c$, "siSetLoaded", 
function(fileName, filePath){
}, "~S,~S");
Clazz.overrideMethod(c$, "siSetMenuEnables", 
function(node, isSplit){
}, "JSV.common.PanelNode,~B");
Clazz.overrideMethod(c$, "siUpdateRecentMenus", 
function(filePath){
}, "~S");
Clazz.overrideMethod(c$, "siExecTest", 
function(value){
var data = "";
this.loadInline(data);
}, "~S");
Clazz.overrideMethod(c$, "print", 
function(fileName){
return this.vwr.print(fileName);
}, "~S");
Clazz.overrideMethod(c$, "checkScript", 
function(script){
return this.vwr.checkScript(script);
}, "~S");
c$.getAppletInfo = Clazz.defineMethod(c$, "getAppletInfo", 
function(){
return "JSpecView Applet " + JSV.common.JSVersion.VERSION + "\n\n" + "Authors:\nProf. Robert M. Hanson,\nD. Facey, K. Bryan, C. Walters, Prof. Robert J. Lancashire and\nvolunteer developers through sourceforge.";
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVAppInterface", JSV.api.JSVAppletInterface);
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "PanelListener");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "ScriptInterface");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.CoordComparator"], "JSV.common.Coordinate", ["java.util.Arrays", "$.StringTokenizer", "JU.Lst"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.xVal = 0;
this.yVal = 0;
Clazz.instantialize(this, arguments);}, JSV.common, "Coordinate", null);
/*LV!1824 unnec constructor*/Clazz.defineMethod(c$, "set", 
function(x, y){
this.xVal = x;
this.yVal = y;
return this;
}, "~N,~N");
Clazz.defineMethod(c$, "getXVal", 
function(){
return this.xVal;
});
Clazz.defineMethod(c$, "getYVal", 
function(){
return this.yVal;
});
Clazz.defineMethod(c$, "setXVal", 
function(val){
this.xVal = val;
}, "~N");
Clazz.defineMethod(c$, "setYVal", 
function(val){
this.yVal = val;
}, "~N");
Clazz.defineMethod(c$, "copy", 
function(){
return  new JSV.common.Coordinate().set(this.xVal, this.yVal);
});
Clazz.defineMethod(c$, "equals", 
function(coord){
return (coord.xVal == this.xVal && coord.yVal == this.yVal);
}, "JSV.common.Coordinate");
Clazz.overrideMethod(c$, "toString", 
function(){
return "[" + this.xVal + ", " + this.yVal + "]";
});
c$.isYInRange = Clazz.defineMethod(c$, "isYInRange", 
function(xyCoords, min, max){
return (JSV.common.Coordinate.getMinY(xyCoords, 0, xyCoords.length - 1) >= min && JSV.common.Coordinate.getMaxY(xyCoords, 0, xyCoords.length - 1) >= max);
}, "~A,~N,~N");
c$.normalise = Clazz.defineMethod(c$, "normalise", 
function(xyCoords, min, max){
var newXYCoords =  new Array(xyCoords.length);
var minY = JSV.common.Coordinate.getMinY(xyCoords, 0, xyCoords.length - 1);
var maxY = JSV.common.Coordinate.getMaxY(xyCoords, 0, xyCoords.length - 1);
var factor = (maxY - minY) / (max - min);
for (var i = 0; i < xyCoords.length; i++) newXYCoords[i] =  new JSV.common.Coordinate().set(xyCoords[i].getXVal(), ((xyCoords[i].getYVal() - minY) / factor) - min);

return newXYCoords;
}, "~A,~N,~N");
c$.reverse = Clazz.defineMethod(c$, "reverse", 
function(x){
var n = x.length;
for (var i = 0; i < n; i++) {
var v = x[i];
x[i] = x[--n];
x[n] = v;
}
return x;
}, "~A");
c$.parseDSV = Clazz.defineMethod(c$, "parseDSV", 
function(dataPoints, xFactor, yFactor){
var point;
var xval = 0;
var yval = 0;
var xyCoords =  new JU.Lst();
if (dataPoints.indexOf('(') >= 0) {
dataPoints = dataPoints.$replace('(', ' ').$replace(')', ' ').$replace(',', ' ');
}var delim = " \t\n\r\f,;";
var st =  new java.util.StringTokenizer(dataPoints, delim);
var tmp1;
var tmp2;
while (st.hasMoreTokens()) {
tmp1 = st.nextToken().trim();
tmp2 = st.nextToken().trim();
xval = Double.parseDouble(tmp1);
yval = Double.parseDouble(tmp2);
point =  new JSV.common.Coordinate().set(xval * xFactor, yval * yFactor);
xyCoords.addLast(point);
}
var coord =  new Array(xyCoords.size());
return xyCoords.toArray(coord);
}, "~S,~N,~N");
c$.deltaX = Clazz.defineMethod(c$, "deltaX", 
function(last, first, numPoints){
return (last - first) / (numPoints - 1);
}, "~N,~N,~N");
c$.removeScale = Clazz.defineMethod(c$, "removeScale", 
function(xyCoords, xScale, yScale){
JSV.common.Coordinate.applyScale(xyCoords, (1 / xScale), (1 / yScale));
}, "~A,~N,~N");
c$.applyScale = Clazz.defineMethod(c$, "applyScale", 
function(xyCoords, xScale, yScale){
if (xScale != 1 || yScale != 1) {
for (var i = 0; i < xyCoords.length; i++) {
xyCoords[i].setXVal(xyCoords[i].getXVal() * xScale);
xyCoords[i].setYVal(xyCoords[i].getYVal() * yScale);
}
}}, "~A,~N,~N");
c$.getMinX = Clazz.defineMethod(c$, "getMinX", 
function(coords, start, end){
var min = 1.7976931348623157E308;
for (var index = start; index <= end; index++) {
var tmp = coords[index].getXVal();
if (tmp < min) min = tmp;
}
return min;
}, "~A,~N,~N");
c$.getMinX = Clazz.defineMethod(c$, "getMinX", 
function(spectra, vd){
var min = 1.7976931348623157E308;
for (var i = 0; i < spectra.size(); i++) {
var xyCoords = spectra.get(i).getXYCoords();
var tmp = JSV.common.Coordinate.getMinX(xyCoords, vd.getStartingPointIndex(i), vd.getEndingPointIndex(i));
if (tmp < min) min = tmp;
}
return min;
}, "JU.Lst,JSV.common.ViewData");
c$.getMaxX = Clazz.defineMethod(c$, "getMaxX", 
function(coords, start, end){
var max = -1.7976931348623157E308;
for (var index = start; index <= end; index++) {
var tmp = coords[index].getXVal();
if (tmp > max) max = tmp;
}
return max;
}, "~A,~N,~N");
c$.getMaxX = Clazz.defineMethod(c$, "getMaxX", 
function(spectra, vd){
var max = -1.7976931348623157E308;
for (var i = 0; i < spectra.size(); i++) {
var xyCoords = spectra.get(i).getXYCoords();
var tmp = JSV.common.Coordinate.getMaxX(xyCoords, vd.getStartingPointIndex(i), vd.getEndingPointIndex(i));
if (tmp > max) max = tmp;
}
return max;
}, "JU.Lst,JSV.common.ViewData");
c$.getMinY = Clazz.defineMethod(c$, "getMinY", 
function(coords, start, end){
var min = 1.7976931348623157E308;
for (var index = start; index <= end; index++) {
var tmp = coords[index].getYVal();
if (tmp < min) min = tmp;
}
return min;
}, "~A,~N,~N");
c$.getMinYUser = Clazz.defineMethod(c$, "getMinYUser", 
function(spectra, vd){
var min = 1.7976931348623157E308;
for (var i = 0; i < spectra.size(); i++) {
var u = spectra.get(i).getUserYFactor();
var yref = spectra.get(i).getYRef();
var xyCoords = spectra.get(i).getXYCoords();
var tmp = (JSV.common.Coordinate.getMinY(xyCoords, vd.getStartingPointIndex(i), vd.getEndingPointIndex(i)) - yref) * u + yref;
if (tmp < min) min = tmp;
}
return min;
}, "JU.Lst,JSV.common.ViewData");
c$.getMaxY = Clazz.defineMethod(c$, "getMaxY", 
function(coords, start, end){
var max = -1.7976931348623157E308;
for (var index = start; index <= end; index++) {
var tmp = coords[index].getYVal();
if (tmp > max) max = tmp;
}
return max;
}, "~A,~N,~N");
c$.getMaxYUser = Clazz.defineMethod(c$, "getMaxYUser", 
function(spectra, vd){
var max = -1.7976931348623157E308;
for (var i = 0; i < spectra.size(); i++) {
var u = spectra.get(i).getUserYFactor();
var yref = spectra.get(i).getYRef();
var xyCoords = spectra.get(i).getXYCoords();
var tmp = (JSV.common.Coordinate.getMaxY(xyCoords, vd.getStartingPointIndex(i), vd.getEndingPointIndex(i)) - yref) * u + yref;
if (tmp > max) max = tmp;
}
return max;
}, "JU.Lst,JSV.common.ViewData");
c$.getYValueAt = Clazz.defineMethod(c$, "getYValueAt", 
function(xyCoords, xPt){
var i = JSV.common.Coordinate.getNearestIndexForX(xyCoords, xPt);
if (i == 0 || i == xyCoords.length) return NaN;
var x1 = xyCoords[i].getXVal();
var x0 = xyCoords[i - 1].getXVal();
var y1 = xyCoords[i].getYVal();
var y0 = xyCoords[i - 1].getYVal();
if (x1 == x0) return y1;
return y0 + (y1 - y0) / (x1 - x0) * (xPt - x0);
}, "~A,~N");
c$.intoRange = Clazz.defineMethod(c$, "intoRange", 
function(i, i0, i1){
return Math.max(Math.min(i, i1), i0);
}, "~N,~N,~N");
c$.getNearestIndexForX = Clazz.defineMethod(c$, "getNearestIndexForX", 
function(xyCoords, xPt){
var x =  new JSV.common.Coordinate().set(xPt, 0);
var i = java.util.Arrays.binarySearch(xyCoords, x, JSV.common.Coordinate.c);
if (i < 0) i = -1 - i;
if (i < 0) return 0;
if (i > xyCoords.length - 1) return xyCoords.length - 1;
return i;
}, "~A,~N");
c$.findXForPeakNearest = Clazz.defineMethod(c$, "findXForPeakNearest", 
function(xyCoords, x, isMin){
var pt = JSV.common.Coordinate.getNearestIndexForX(xyCoords, x);
var f = (isMin ? -1 : 1);
while (pt < xyCoords.length - 1 && f * (xyCoords[pt + 1].yVal - xyCoords[pt].yVal) > 0) pt++;

while (pt >= 1 && f * (xyCoords[pt - 1].yVal - xyCoords[pt].yVal) > 0) pt--;

if (pt == 0 || pt == xyCoords.length - 1) return xyCoords[pt].xVal;
return JSV.common.Coordinate.parabolicInterpolation(xyCoords, pt);
}, "~A,~N,~B");
c$.parabolicInterpolation = Clazz.defineMethod(c$, "parabolicInterpolation", 
function(xyCoords, pt){
var alpha = xyCoords[pt - 1].yVal;
var beta = xyCoords[pt].yVal;
var gamma = xyCoords[pt + 1].yVal;
var p = (alpha - gamma) / 2 / (alpha - 2 * beta + gamma);
return xyCoords[pt].xVal + p * (xyCoords[pt + 1].xVal - xyCoords[pt].xVal);
}, "~A,~N");
c$.getPickedCoordinates = Clazz.defineMethod(c$, "getPickedCoordinates", 
function(coordsClicked, coordClicked, coord, actualCoord){
if (coordClicked == null) return false;
var x = coordClicked.getXVal();
coord.setXVal(x);
coord.setYVal(coordClicked.getYVal());
if (actualCoord == null) return true;
var pt = JSV.common.Coordinate.getNearestIndexForX(coordsClicked, x);
actualCoord.setXVal(coordsClicked[pt].getXVal());
actualCoord.setYVal(coordsClicked[pt].getYVal());
return true;
}, "~A,JSV.common.Coordinate,JSV.common.Coordinate,JSV.common.Coordinate");
c$.shiftX = Clazz.defineMethod(c$, "shiftX", 
function(xyCoords, dx){
for (var i = xyCoords.length; --i >= 0; ) xyCoords[i].xVal += dx;

}, "~A,~N");
c$.getNearestXWithYAbove = Clazz.defineMethod(c$, "getNearestXWithYAbove", 
function(xyCoords, x, y, inverted, andGreaterThanX){
var pt = JSV.common.Coordinate.getNearestIndexForX(xyCoords, x);
var f = (inverted ? -1 : 1);
if (andGreaterThanX) while (pt < xyCoords.length && f * (xyCoords[pt].yVal - y) < 0) pt++;

 else while (pt >= 0 && f * (xyCoords[pt].yVal - y) < 0) pt--;

if (pt == -1 || pt == xyCoords.length) return NaN;
return JSV.common.Coordinate.findXForPeakNearest(xyCoords, xyCoords[pt].getXVal(), inverted);
}, "~A,~N,~N,~B,~B");
c$.c =  new JSV.common.CoordComparator();
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
(function(){
var c$ = Clazz.declareType(JSV.common, "CoordComparator", null, java.util.Comparator);
Clazz.overrideMethod(c$, "compare", 
function(c1, c2){
return (c1.getXVal() > c2.getXVal() ? 1 : c1.getXVal() < c2.getXVal() ? -1 : 0);
}, "JSV.common.Coordinate,JSV.common.Coordinate");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.load(["java.util.Enumeration"], "java.util.StringTokenizer", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.string = null;
this.delimiters = null;
this.returnDelimiters = false;
this.position = 0;
Clazz.instantialize(this, arguments);}, java.util, "StringTokenizer", null, java.util.Enumeration);
Clazz.makeConstructor(c$, 
function(string, delimiters, returnDelimiters){
{
switch (arguments.length) {
case 1: delimiters = " \t\n\r\f";
case 2: returnDelimiters = false;
}
}if (string == null) throw  new NullPointerException();
this.string = string;
this.delimiters = delimiters;
this.returnDelimiters = returnDelimiters;
this.position = 0;
}, "~S,~S,~B");
Clazz.defineMethod(c$, "countTokens", 
function(){
var count = 0;
var inToken = false;
for (var i = this.position, length = this.string.length; i < length; i++) {
if (this.delimiters.indexOf(this.string.charAt(i), 0) >= 0) {
if (this.returnDelimiters) count++;
if (inToken) {
count++;
inToken = false;
}} else {
inToken = true;
}}
if (inToken) count++;
return count;
});
Clazz.overrideMethod(c$, "hasMoreElements", 
function(){
return this.hasMoreTokens();
});
Clazz.defineMethod(c$, "hasMoreTokens", 
function(){
var length = this.string.length;
if (this.position < length) {
if (this.returnDelimiters) return true;
for (var i = this.position; i < length; i++) if (this.delimiters.indexOf(this.string.charAt(i), 0) == -1) return true;

}return false;
});
Clazz.overrideMethod(c$, "nextElement", 
function(){
return this.nextToken();
});
Clazz.defineMethod(c$, "nextToken", 
function(){
{
(arguments.length == 1) && (this.delimiters = arguments[0]);
}var i = this.position;
var length = this.string.length;
if (i < length) {
if (this.returnDelimiters) {
if (this.delimiters.indexOf(this.string.charAt(this.position), 0) >= 0) return String.valueOf(this.string.charAt(this.position++));
for (this.position++; this.position < length; this.position++) if (this.delimiters.indexOf(this.string.charAt(this.position), 0) >= 0) return this.string.substring(i, this.position);

return this.string.substring(i);
}while (i < length && this.delimiters.indexOf(this.string.charAt(i), 0) >= 0) i++;

this.position = i;
if (i < length) {
for (this.position++; this.position < length; this.position++) if (this.delimiters.indexOf(this.string.charAt(this.position), 0) >= 0) return this.string.substring(i, this.position);

return this.string.substring(i);
}}throw  new java.util.NoSuchElementException();
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JSV.common");
Clazz.load(["java.util.Hashtable"], "JSV.common.JSVFileManager", ["java.io.BufferedInputStream", "$.BufferedReader", "$.File", "$.InputStreamReader", "$.StringReader", "java.net.URL", "JU.AU", "$.BS", "$.Encoding", "$.JSJSONParser", "$.P3", "$.PT", "$.SB", "JSV.common.JSVersion", "$.JSViewer", "JSV.exception.JSVException", "JU.Logger"], function(){
var c$ = Clazz.declareType(JSV.common, "JSVFileManager", null);
Clazz.defineMethod(c$, "isApplet", 
function(){
return (JSV.common.JSVFileManager.appletDocumentBase != null);
});
c$.getFileAsString = Clazz.defineMethod(c$, "getFileAsString", 
function(name){
if (name == null) return null;
var br;
var sb =  new JU.SB();
try {
br = JSV.common.JSVFileManager.getBufferedReaderFromName(name);
var line;
while ((line = br.readLine()) != null) {
sb.append(line);
sb.appendC('\n');
}
br.close();
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return null;
} else {
throw e;
}
}
return sb.toString();
}, "~S");
c$.getBufferedReaderForInputStream = Clazz.defineMethod(c$, "getBufferedReaderForInputStream", 
function($in){
try {
return  new java.io.BufferedReader( new java.io.InputStreamReader($in, "UTF-8"));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return null;
} else {
throw e;
}
}
}, "java.io.InputStream");
c$.getBufferedReaderForStringOrBytes = Clazz.defineMethod(c$, "getBufferedReaderForStringOrBytes", 
function(stringOrBytes){
return (stringOrBytes == null ? null :  new java.io.BufferedReader( new java.io.StringReader((typeof(stringOrBytes)=='string') ? stringOrBytes :  String.instantialize(stringOrBytes))));
}, "~O");
c$.getBufferedReaderFromName = Clazz.defineMethod(c$, "getBufferedReaderFromName", 
function(name){
if (name == null) throw  new JSV.exception.JSVException("Cannot find " + name);
JU.Logger.info("JSVFileManager getBufferedReaderFromName " + name);
var path = JSV.common.JSVFileManager.getFullPathName(name);
if (!path.equals(name)) JU.Logger.info("JSVFileManager getBufferedReaderFromName " + path);
return JSV.common.JSVFileManager.getUnzippedBufferedReaderFromName(path);
}, "~S");
c$.getFullPathName = Clazz.defineMethod(c$, "getFullPathName", 
function(name){
try {
if (JSV.common.JSVFileManager.appletDocumentBase == null) {
if (JSV.common.JSVFileManager.isURL(name)) {
var url =  new java.net.URL(Clazz.castNullAs("java.net.URL"), name, null);
return url.toString();
}return JSV.common.JSVFileManager.newFile(name).getFullPath();
}if (name.indexOf(":\\") == 1 || name.indexOf(":/") == 1) name = "file:///" + name;
 else if (name.startsWith("cache://")) return name;
var url =  new java.net.URL(JSV.common.JSVFileManager.appletDocumentBase, name, null);
return url.toString();
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw  new JSV.exception.JSVException("Cannot create path for " + name);
} else {
throw e;
}
}
}, "~S");
c$.isURL = Clazz.defineMethod(c$, "isURL", 
function(name){
for (var i = JSV.common.JSVFileManager.urlPrefixes.length; --i >= 0; ) if (name.startsWith(JSV.common.JSVFileManager.urlPrefixes[i])) return true;

return false;
}, "~S");
c$.urlTypeIndex = Clazz.defineMethod(c$, "urlTypeIndex", 
function(name){
for (var i = 0; i < JSV.common.JSVFileManager.urlPrefixes.length; ++i) {
if (name.startsWith(JSV.common.JSVFileManager.urlPrefixes[i])) {
return i;
}}
return -1;
}, "~S");
c$.isLocal = Clazz.defineMethod(c$, "isLocal", 
function(fileName){
if (fileName == null) return false;
var itype = JSV.common.JSVFileManager.urlTypeIndex(fileName);
return (itype < 0 || itype == 4);
}, "~S");
c$.getUnzippedBufferedReaderFromName = Clazz.defineMethod(c$, "getUnzippedBufferedReaderFromName", 
function(name){
var subFileList = null;
if (name.indexOf("|") >= 0) {
subFileList = JU.PT.split(name, "|");
if (subFileList != null && subFileList.length > 0) name = subFileList[0];
}if (name.startsWith("http://SIMULATION/")) return JSV.common.JSVFileManager.getSimulationReader(name);
try {
var ret = JSV.common.JSVFileManager.getInputStream(name, true, null);
if (Clazz.instanceOf(ret,"JU.SB") || (typeof(ret)=='string')) return  new java.io.BufferedReader( new java.io.StringReader(ret.toString()));
if (JSV.common.JSVFileManager.isAB(ret)) return  new java.io.BufferedReader( new java.io.StringReader( String.instantialize(ret)));
var bis =  new java.io.BufferedInputStream(ret);
var $in = bis;
if (JSV.common.JSVFileManager.isGzip(bis)) $in = (JSV.common.JSViewer.getInterface("JSV.common.JSVZipUtil")).newGZIPInputStream($in);
return  new java.io.BufferedReader( new java.io.InputStreamReader($in, "UTF-8"));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw e;
} else {
throw e;
}
}
}, "~S");
c$.getAbbrSimulationFileName = Clazz.defineMethod(c$, "getAbbrSimulationFileName", 
function(name){
var type = JSV.common.JSVFileManager.getSimulationType(name);
var filename = JSV.common.JSVFileManager.getAbbreviatedSimulationName(name, type, true);
return filename;
}, "~S");
c$.getAbbreviatedSimulationName = Clazz.defineMethod(c$, "getAbbreviatedSimulationName", 
function(name, type, addProtocol){
return (name.indexOf("MOL=") >= 0 ? (addProtocol ? "http://SIMULATION/" : "") + "MOL=" + JSV.common.JSVFileManager.getSimulationHash(name, type) : name);
}, "~S,~S,~B");
c$.getSimulationHash = Clazz.defineMethod(c$, "getSimulationHash", 
function(name, type){
var code = type + Math.abs(name.substring(name.indexOf("V2000") + 1).hashCode());
if (JU.Logger.debugging) System.out.println("JSVFileManager hash for " + name + " = " + code);
return code;
}, "~S,~S");
c$.getSimulationFileData = Clazz.defineMethod(c$, "getSimulationFileData", 
function(name, type){
return JSV.common.JSVFileManager.cacheGet(name.startsWith("MOL=") ? name.substring(4) : JSV.common.JSVFileManager.getAbbreviatedSimulationName(name, type, false));
}, "~S,~S");
c$.cachePut = Clazz.defineMethod(c$, "cachePut", 
function(name, data){
if (JU.Logger.debugging) JU.Logger.debug("JSVFileManager cachePut " + data + " for " + name);
if (data != null) {
JSV.common.JSVFileManager.htCorrelationCache.put(name, data);
if (JSV.common.JSVFileManager.cacheDir != null && name.indexOf(":") < 0) {
try {
 new java.io.File(JSV.common.JSVFileManager.cacheDir).mkdirs();
var f =  new java.io.File(JSV.common.JSVFileManager.cacheDir, name);
var fos =  new java.io.FileOutputStream(f);
fos.write(data.getBytes());
fos.close();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace();
} else {
throw e;
}
}
}}}, "~S,~S");
c$.cacheGet = Clazz.defineMethod(c$, "cacheGet", 
function(key){
var data = JSV.common.JSVFileManager.htCorrelationCache.get(key);
if (JU.Logger.debugging) JU.Logger.info("JSVFileManager cacheGet " + data + " for " + key);
return data;
}, "~S");
c$.getSimulationReader = Clazz.defineMethod(c$, "getSimulationReader", 
function(name){
var data = JSV.common.JSVFileManager.cacheGet(name);
if (data == null) JSV.common.JSVFileManager.cachePut(name, data = JSV.common.JSVFileManager.getNMRSimulationJCampDX(name.substring("http://SIMULATION/".length)));
return JSV.common.JSVFileManager.getBufferedReaderForStringOrBytes(data);
}, "~S");
c$.isAB = Clazz.defineMethod(c$, "isAB", 
function(x){
return JU.AU.isAB(x);
}, "~O");
c$.isZipFile = Clazz.defineMethod(c$, "isZipFile", 
function(is){
try {
var abMagic =  Clazz.newByteArray (4, 0);
is.mark(5);
var countRead = is.read(abMagic, 0, 4);
is.reset();
return (countRead == 4 && abMagic[0] == 0x50 && abMagic[1] == 0x4B && abMagic[2] == 0x03 && abMagic[3] == 0x04);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw  new JSV.exception.JSVException(e.toString());
} else {
throw e;
}
}
}, "java.io.InputStream");
c$.isGzip = Clazz.defineMethod(c$, "isGzip", 
function(is){
try {
var abMagic =  Clazz.newByteArray (4, 0);
is.mark(5);
var countRead = is.read(abMagic, 0, 4);
is.reset();
return (countRead == 4 && abMagic[0] == 0x1F && abMagic[1] == 0x8B);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw  new JSV.exception.JSVException(e.toString());
} else {
throw e;
}
}
}, "java.io.InputStream");
c$.getStreamAsBytes = Clazz.defineMethod(c$, "getStreamAsBytes", 
function(bis, out){
try {
var buf =  Clazz.newByteArray (1024, 0);
var bytes = (out == null ?  Clazz.newByteArray (4096, 0) : null);
var len = 0;
var totalLen = 0;
while ((len = bis.read(buf, 0, 1024)) > 0) {
totalLen += len;
if (out == null) {
if (totalLen >= bytes.length) bytes = JU.AU.ensureLengthByte(bytes, totalLen * 2);
System.arraycopy(buf, 0, bytes, totalLen - len, len);
} else {
out.write(buf, 0, len);
}}
bis.close();
if (out == null) {
return JU.AU.arrayCopyByte(bytes, totalLen);
}return totalLen + " bytes";
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw  new JSV.exception.JSVException(e.toString());
} else {
throw e;
}
}
}, "java.io.BufferedInputStream,JU.OC");
c$.postByteArray = Clazz.defineMethod(c$, "postByteArray", 
function(fileName, bytes){
var ret = null;
try {
ret = JSV.common.JSVFileManager.getInputStream(fileName, false, bytes);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
ret = e.toString();
} else {
throw e;
}
}
if ((typeof(ret)=='string')) return ret;
try {
ret = JSV.common.JSVFileManager.getStreamAsBytes(ret, null);
} catch (e) {
if (Clazz.exceptionOf(e,"JSV.exception.JSVException")){
try {
(ret).close();
} catch (e1) {
if (Clazz.exceptionOf(e1, Exception)){
} else {
throw e1;
}
}
} else {
throw e;
}
}
return (ret == null ? "" : JSV.common.JSVFileManager.fixUTF(ret));
}, "~S,~A");
c$.getUTFEncoding = Clazz.defineMethod(c$, "getUTFEncoding", 
function(bytes){
if (bytes.length >= 3 && bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF) return JU.Encoding.UTF8;
if (bytes.length >= 4 && bytes[0] == 0 && bytes[1] == 0 && bytes[2] == 0xFE && bytes[3] == 0xFF) return JU.Encoding.UTF_32BE;
if (bytes.length >= 4 && bytes[0] == 0xFF && bytes[1] == 0xFE && bytes[2] == 0 && bytes[3] == 0) return JU.Encoding.UTF_32LE;
if (bytes.length >= 2 && bytes[0] == 0xFF && bytes[1] == 0xFE) return JU.Encoding.UTF_16LE;
if (bytes.length >= 2 && bytes[0] == 0xFE && bytes[1] == 0xFF) return JU.Encoding.UTF_16BE;
return JU.Encoding.NONE;
}, "~A");
c$.fixUTF = Clazz.defineMethod(c$, "fixUTF", 
function(bytes){
var encoding = JSV.common.JSVFileManager.getUTFEncoding(bytes);
if (encoding !== JU.Encoding.NONE) try {
var s =  String.instantialize(bytes, encoding.name().$replace('_', '-'));
switch (encoding) {
case JU.Encoding.UTF8:
case JU.Encoding.UTF_16BE:
case JU.Encoding.UTF_16LE:
s = s.substring(1);
break;
default:
break;
}
return s;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
JU.Logger.error("fixUTF error " + e);
} else {
throw e;
}
}
return  String.instantialize(bytes);
}, "~A");
c$.getInputStream = Clazz.defineMethod(c$, "getInputStream", 
function(name, showMsg, postBytes){
var isURL = JSV.common.JSVFileManager.isURL(name);
var isApplet = (JSV.common.JSVFileManager.appletDocumentBase != null);
var $in = null;
var post = null;
var iurl;
if (isURL && (iurl = name.indexOf("?POST?")) >= 0) {
post = name.substring(iurl + 6);
name = name.substring(0, iurl);
}if (isApplet || isURL) {
var url;
try {
url =  new java.net.URL(JSV.common.JSVFileManager.appletDocumentBase, name, null);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw  new JSV.exception.JSVException("Cannot read " + name);
} else {
throw e;
}
}
JU.Logger.info("JSVFileManager opening URL " + url + (post == null ? "" : " with POST of " + post.length + " bytes"));
$in = JSV.common.JSVFileManager.viewer.apiPlatform.getURLContents(url, postBytes, post, false);
} else {
if (showMsg) JU.Logger.info("JSVFileManager opening file " + name);
$in = JSV.common.JSVFileManager.viewer.apiPlatform.getBufferedFileInputStream(name);
}if ((typeof($in)=='string')) throw  new JSV.exception.JSVException("\n" + $in);
return $in;
}, "~S,~B,~A");
c$.getNMRSimulationJCampDX = Clazz.defineMethod(c$, "getNMRSimulationJCampDX", 
function(name){
var pt = 0;
var molFile = null;
var type = JSV.common.JSVFileManager.getSimulationType(name);
if (name.startsWith(type)) name = name.substring(type.length + 1);
var isInline = name.startsWith("MOL=");
if (isInline) {
name = name.substring(4);
pt = name.indexOf("/n__Jmol");
if (pt > 0) name = name.substring(0, pt) + JU.PT.rep(name.substring(pt), "/n", "\n");
molFile = name = JU.PT.rep(name, "\\n", "\n");
}var key = "" + JSV.common.JSVFileManager.getSimulationHash(name, type);
if (JU.Logger.debugging) JU.Logger.info("JSVFileManager type=" + type + " key=" + key + " name=" + name);
var jcamp = JSV.common.JSVFileManager.cacheGet(key);
if (jcamp != null) return jcamp;
var src = (isInline ? null : JU.PT.rep(JSV.common.JSVFileManager.nciResolver, "%FILE", JU.PT.escapeUrl(name)));
if (!isInline && (molFile = JSV.common.JSVFileManager.getFileAsString(src)) == null || molFile.indexOf("<html") >= 0) {
JU.Logger.error("no MOL data returned by NCI");
return null;
}var is13C = type.equals("C13");
var url;
url = (is13C ? JSV.common.JSVFileManager.nmrdbServerC13 : JSV.common.JSVFileManager.nmrdbServerH1);
url = url.$replace("$MOLFILE", molFile);
JSV.common.JSVFileManager.cachePut("url", url);
var json = JSV.common.JSVFileManager.getFileAsString(url);
if ((json == null ? (json = "Error: Error fetching simulation") : json).indexOf("Error:") >= 0) {
return json;
}var map = ( new JU.JSJSONParser()).parseMap(json, true);
JSV.common.JSVFileManager.cachePut("json", json);
return JSV.common.JSVFileManager.processJSON(key, src, url, name, type, molFile, map, is13C, isInline);
}, "~S");
c$.processJSON = Clazz.defineMethod(c$, "processJSON", 
function(key, src, url, name, type, molFile, json, is13C, isInline){
var map = json.get("data");
var jsonMolFile = map.get("molfile");
if (jsonMolFile == null) {
System.out.println("JSVFileManager: no MOL file returned from EPFL");
jsonMolFile = molFile;
}var atomMap = JSV.common.JSVFileManager.getAtomMap(jsonMolFile, molFile);
JSV.common.JSVFileManager.cachePut("mol", molFile);
var bytes = (isInline || !JSV.common.JSViewer.isJS ? null : molFile.getBytes());
{
if (bytes) Jmol.Cache.put("http://SIMULATION/" + type +
"/" + name + "#molfile", bytes);
}var xml = "<Signals src=" + JU.PT.esc(url.substring(0, url.indexOf('?'))) + ">\n";
var jcamp;
type = (is13C ? "13C" : "1HNMR");
jcamp = map.get("jcamp");
jcamp = JSV.common.JSVFileManager.hackNewNmriumSimulationJCAMP(jcamp);
var signals = map.get("signals");
var bf1 = JSV.common.JSVFileManager.getval(jcamp, "##$BF1");
var freq = (bf1 == null ? (is13C ? 100 : 400) : Float.parseFloat(bf1));
var sb =  new JU.SB();
for (var i = signals.size(); --i >= 0; ) {
var signal = signals.get(i);
sb.append("<Signal ");
JSV.common.JSVFileManager.setAttr(sb, "type", type, null);
var index = (signal.get("atoms")).get(0);
if (atomMap == null) {
JSV.common.JSVFileManager.setAttr(sb, "atoms", index, null);
} else {
sb.append("atoms=\"").appendI(atomMap[index.intValue()]).append("\" ");
}JSV.common.JSVFileManager.setAttr(sb, "multiplicity", "multiplicity", signal);
var delta = signal.get("delta");
var minmax = JSV.common.JSVFileManager.getSignalMinMax(signal, delta.floatValue(), freq, is13C);
JSV.common.JSVFileManager.setAttr(sb, "xMin", "" + minmax[0], null);
JSV.common.JSVFileManager.setAttr(sb, "xMax", "" + minmax[1], null);
JSV.common.JSVFileManager.setAttr(sb, "integral", "nbAtoms", signal);
sb.append("></Signal>\n");
}
sb.append("</Signals>");
xml += sb.toString();
if (JU.Logger.debugging) JU.Logger.info(xml);
JSV.common.JSVFileManager.cachePut("xml", xml);
jcamp = "##TITLE=" + (isInline ? "JMOL SIMULATION/" + type : name) + "\n" + jcamp.substring(jcamp.indexOf("\n##") + 1);
var pt = molFile.indexOf("\n");
pt = molFile.indexOf("\n", pt + 1);
if (pt > 0 && pt == molFile.indexOf("\n \n")) molFile = molFile.substring(0, pt + 1) + "Created " + JSV.common.JSVFileManager.viewer.apiPlatform.getDateFormat("8824") + " by JSpecView " + JSV.common.JSVersion.VERSION + molFile.substring(pt + 1);
pt = 0;
pt = jcamp.indexOf("##.");
var id = JSV.common.JSVFileManager.getAbbreviatedSimulationName(name, type, false);
var pt1 = id.indexOf("id='");
if (isInline && pt1 > 0) id = id.substring(pt1 + 4, (id + "'").indexOf("'", pt1 + 4));
JSV.common.JSVFileManager.cachePut(type + "-json.jcamp", jcamp);
jcamp = jcamp.substring(0, pt) + "##$MODELS=\n<Models>\n" + "<ModelData id=" + JU.PT.esc(id) + " type=\"MOL\" src=" + JU.PT.esc(src) + ">\n" + molFile + "</ModelData>\n</Models>\n" + "##$SIGNALS=\n" + xml + "\n" + jcamp.substring(pt);
JSV.common.JSVFileManager.cachePut("jcamp", jcamp);
JSV.common.JSVFileManager.cachePut(key, jcamp);
return jcamp;
}, "~S,~S,~S,~S,~S,~S,java.util.Map,~B,~B");
c$.getSignalMinMax = Clazz.defineMethod(c$, "getSignalMinMax", 
function(signal, delta, freq, is13C){
var minmax =  Clazz.newFloatArray (2, 0);
if (is13C) {
minmax[0] = delta - 0.5;
minmax[1] = delta + 0.5;
} else {
var js = signal.get("js");
var d = 1;
for (var i = js.size(); --i >= 0; ) {
var j = js.get(i);
var c = (j.get("coupling")).floatValue();
switch (j.get("multiplicity")) {
case "d":
d += c / 2;
break;
default:
case "t":
d += c;
break;
}
}
minmax[0] = delta - d / freq;
minmax[1] = delta + d / freq;
}return minmax;
}, "java.util.Map,~N,~N,~B");
c$.hackNewNmriumSimulationJCAMP = Clazz.defineMethod(c$, "hackNewNmriumSimulationJCAMP", 
function(jcamp){
var shift = JSV.common.JSVFileManager.getline(jcamp, "##.SHIFT REFERENCE=INTERNAL");
var offset = JSV.common.JSVFileManager.getval(jcamp, "##$OFFSET");
if (shift != null && offset != null) {
shift = shift.substring(0, shift.lastIndexOf(", ") + 2) + offset;
jcamp = JSV.common.JSVFileManager.setline(jcamp, "##$OFFSET", null);
jcamp = JSV.common.JSVFileManager.setline(jcamp, "##.SHIFT REFERENCE=INTERNAL", shift);
}return jcamp;
}, "~S");
c$.getline = Clazz.defineMethod(c$, "getline", 
function(jcamp, record){
var pt = jcamp.indexOf(record);
if (pt < 0) return null;
return jcamp.substring(pt, jcamp.indexOf("\n", pt));
}, "~S,~S");
c$.getval = Clazz.defineMethod(c$, "getval", 
function(jcamp, record){
var pt = jcamp.indexOf(record);
if (pt < 0) return null;
var val = jcamp.substring(jcamp.indexOf("=", pt) + 1, jcamp.indexOf("\n", pt));
pt = val.indexOf("$$");
if (pt >= 0) val = val.substring(pt);
return val.trim();
}, "~S,~S");
c$.setline = Clazz.defineMethod(c$, "setline", 
function(jcamp, record, replacement){
var pt = jcamp.indexOf(record);
if (pt < 0) return jcamp;
if (replacement == null) return jcamp.substring(0, pt) + jcamp.substring(jcamp.indexOf("\n", pt) + 1);
return jcamp.substring(0, pt) + replacement + jcamp.substring(jcamp.indexOf("\n", pt));
}, "~S,~S,~S");
c$.getAtomMap = Clazz.defineMethod(c$, "getAtomMap", 
function(jsonMolFile, jmolMolFile){
var acJson = JSV.common.JSVFileManager.getCoord(jsonMolFile);
var acJmol = JSV.common.JSVFileManager.getCoord(jmolMolFile);
var n = acJson.length;
if (n != acJmol.length) return null;
var map =  Clazz.newIntArray (n, 0);
var bs =  new JU.BS();
bs.setBits(0, n);
var haveMap = false;
for (var i = 0; i < n; i++) {
var a = acJson[i];
for (var j = bs.nextSetBit(0); j >= 0; j = bs.nextSetBit(j + 1)) {
if (a.distanceSquared(acJmol[j]) < 0.1) {
bs.clear(j);
map[i] = j;
if (i != j) haveMap = true;
break;
}}
}
return (haveMap ? map : null);
}, "~S,~S");
c$.getCoord = Clazz.defineMethod(c$, "getCoord", 
function(mol){
var lines = JU.PT.split(mol, "\n");
var data =  Clazz.newFloatArray (3, 0);
var n = Integer.parseInt(lines[3].substring(0, 3).trim());
var pts =  new Array(n);
for (var i = 0; i < n; i++) {
var line = lines[4 + i];
JU.PT.parseFloatArrayInfested(JU.PT.getTokens(line.substring(0, 31)), data);
pts[i] = JU.P3.new3(data[0], data[1], data[2]);
}
return pts;
}, "~S");
c$.setAttr = Clazz.defineMethod(c$, "setAttr", 
function(sb, mykey, lucsKeyOrVal, map){
sb.append(mykey + "=\"").appendO((map == null ? lucsKeyOrVal : map.get(lucsKeyOrVal))).append("\" ");
}, "JU.SB,~S,~O,java.util.Map");
c$.getResource = Clazz.defineMethod(c$, "getResource", 
function(object, fileName, error){
var url = null;
try {
if ((url = object.getClass().getResource(fileName)) == null) error[0] = "Couldn't find file: " + fileName;
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
error[0] = "Exception " + e + " in getResource " + fileName;
} else {
throw e;
}
}
return url;
}, "~O,~S,~A");
c$.getResourceString = Clazz.defineMethod(c$, "getResourceString", 
function(object, name, error){
var url = JSV.common.JSVFileManager.getResource(object, name, error);
if (url == null) {
error[0] = "Error loading resource " + name;
return null;
}if ((typeof(url)=='string')) {
return JSV.common.JSVFileManager.getFileAsString(url);
}var sb =  new JU.SB();
try {
var br =  new java.io.BufferedReader( new java.io.InputStreamReader((url).getContent(), "UTF-8"));
var line;
while ((line = br.readLine()) != null) sb.append(line).append("\n");

br.close();
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
error[0] = e.toString();
} else {
throw e;
}
}
return sb.toString();
}, "~O,~S,~A");
c$.getJmolFilePath = Clazz.defineMethod(c$, "getJmolFilePath", 
function(filePath){
try {
filePath = JSV.common.JSVFileManager.getFullPathName(filePath);
} catch (e) {
if (Clazz.exceptionOf(e,"JSV.exception.JSVException")){
return null;
} else {
throw e;
}
}
return (JSV.common.JSVFileManager.appletDocumentBase == null ? filePath.$replace('\\', '/') : filePath);
}, "~S");
c$.getTagName = Clazz.defineMethod(c$, "getTagName", 
function(fileName){
if (fileName == null) return "String" + (++JSV.common.JSVFileManager.stringCount);
if (JSV.common.JSVFileManager.isURL(fileName)) {
try {
if (fileName.startsWith("http://SIMULATION/")) return JSV.common.JSVFileManager.getAbbrSimulationFileName(fileName);
var name = ( new java.net.URL(Clazz.castNullAs("java.net.URL"), fileName, null)).getFile();
return name.substring(name.lastIndexOf('/') + 1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
}return JSV.common.JSVFileManager.newFile(fileName).getName();
}, "~S");
c$.newFile = Clazz.defineMethod(c$, "newFile", 
function(fileName){
return JSV.common.JSVFileManager.viewer.apiPlatform.newFile(fileName);
}, "~S");
c$.setDocumentBase = Clazz.defineMethod(c$, "setDocumentBase", 
function(v, documentBase){
JSV.common.JSVFileManager.viewer = v;
JSV.common.JSVFileManager.appletDocumentBase = documentBase;
}, "JSV.common.JSViewer,java.net.URL");
c$.getSimulationType = Clazz.defineMethod(c$, "getSimulationType", 
function(filePath){
return (filePath.indexOf("C13/") >= 0 ? "C13" : "H1");
}, "~S");
c$.appletDocumentBase = null;
c$.viewer = null;
c$.jsDocumentBase = "";
c$.urlPrefixes =  Clazz.newArray(-1, ["http:", "https:", "ftp:", "http://SIMULATION/", "file:"]);
c$.htCorrelationCache =  new java.util.Hashtable();
c$.cacheDir = null;
c$.nciResolver = "https://cactus.nci.nih.gov/chemical/structure/%FILE/file?format=sdf&get3d=True";
c$.nmrdbServerH1 = "https://nmr-prediction.service.zakodium.com/v1/predict/proton?POST?{\"molfile\":\"$MOLFILE\",\"includeJDX\":true}";
c$.nmrdbServerC13 = "https://nmr-prediction.service.zakodium.com/v1/predict/carbon?POST?{\"molfile\":\"$MOLFILE\",\"includeJDX\":true}";
c$.stringCount = 0;
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.load(["java.io.FilterInputStream"], "java.io.BufferedInputStream", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.buf = null;
this.count = 0;
this.pos = 0;
this.markpos = -1;
this.marklimit = 0;
Clazz.instantialize(this, arguments);}, java.io, "BufferedInputStream", java.io.FilterInputStream);
Clazz.makeConstructor(c$, 
function($in){
Clazz.superConstructor(this, java.io.BufferedInputStream, [$in]);
this.buf =  Clazz.newByteArray (8192, 0);
}, "java.io.InputStream");
Clazz.defineMethod(c$, "getInIfOpen", 
function(){
var input = this.$in;
if (input == null) throw  new java.io.IOException("Stream closed");
return input;
});
Clazz.defineMethod(c$, "getBufIfOpen", 
function(){
var buffer = this.buf;
if (buffer == null) throw  new java.io.IOException("Stream closed");
return buffer;
});
Clazz.overrideMethod(c$, "resetStream", 
function(){
});
Clazz.defineMethod(c$, "fill", 
function(){
var buffer = this.getBufIfOpen();
if (this.markpos < 0) this.pos = 0;
 else if (this.pos >= buffer.length) if (this.markpos > 0) {
var sz = this.pos - this.markpos;
System.arraycopy(buffer, this.markpos, buffer, 0, sz);
this.pos = sz;
this.markpos = 0;
} else if (buffer.length >= this.marklimit) {
this.markpos = -1;
this.pos = 0;
} else {
var nsz = this.pos * 2;
if (nsz > this.marklimit) nsz = this.marklimit;
var nbuf =  Clazz.newByteArray (nsz, 0);
System.arraycopy(buffer, 0, nbuf, 0, this.pos);
buffer = this.buf = nbuf;
}this.count = this.pos;
var n = this.isRead(buffer, this.pos, buffer.length - this.pos);
if (n > 0) this.count = n + this.pos;
});
Clazz.overrideMethod(c$, "readByteAsInt", 
function(){
if (this.pos >= this.count) {
this.fill();
if (this.pos >= this.count) return -1;
}return this.getBufIfOpen()[this.pos++] & 0xff;
});
Clazz.defineMethod(c$, "read1", 
function(b, off, len){
var avail = this.count - this.pos;
if (avail <= 0) {
if (len >= this.getBufIfOpen().length && this.markpos < 0) {
return this.isRead(b, off, len);
}this.fill();
avail = this.count - this.pos;
if (avail <= 0) return -1;
}var cnt = (avail < len) ? avail : len;
System.arraycopy(this.getBufIfOpen(), this.pos, b, off, cnt);
this.pos += cnt;
return cnt;
}, "~A,~N,~N");
Clazz.defineMethod(c$, "isRead", 
function(b, off, len){
var is = this.getInIfOpen();
{
if (is.readBAIS) return is.readBAIS(b, off, len);
}return is.read(b, off, len);
}, "~A,~N,~N");
Clazz.overrideMethod(c$, "read", 
function(b, off, len){
return this.readBIS(b, off, len);
}, "~A,~N,~N");
Clazz.defineMethod(c$, "readBIS", 
function(b, off, len){
this.getBufIfOpen();
if ((off | len | (off + len) | (b.length - (off + len))) < 0) {
throw  new IndexOutOfBoundsException();
} else if (len == 0) {
return 0;
}var n = 0;
for (; ; ) {
var nread = this.read1(b, off + n, len - n);
if (nread <= 0) return (n == 0) ? nread : n;
n += nread;
if (n >= len) return n;
var input = this.$in;
if (input != null && input.available() <= 0) return n;
}
}, "~A,~N,~N");
Clazz.overrideMethod(c$, "skip", 
function(n){
this.getBufIfOpen();
if (n <= 0) {
return 0;
}var avail = this.count - this.pos;
if (avail <= 0) {
if (this.markpos < 0) return this.getInIfOpen().skip(n);
this.fill();
avail = this.count - this.pos;
if (avail <= 0) return 0;
}var skipped = (avail < n) ? avail : n;
this.pos += skipped;
return skipped;
}, "~N");
Clazz.overrideMethod(c$, "available", 
function(){
var n = this.count - this.pos;
var avail = this.getInIfOpen().available();
return n > (2147483647 - avail) ? 2147483647 : n + avail;
});
Clazz.overrideMethod(c$, "mark", 
function(readlimit){
this.marklimit = readlimit;
this.markpos = this.pos;
}, "~N");
Clazz.overrideMethod(c$, "reset", 
function(){
this.getBufIfOpen();
if (this.markpos < 0) throw  new java.io.IOException("Resetting to invalid mark");
this.pos = this.markpos;
});
Clazz.overrideMethod(c$, "markSupported", 
function(){
return true;
});
Clazz.overrideMethod(c$, "close", 
function(){
var input = this.$in;
this.$in = null;
if (input != null) input.close();
return;
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.InputStream"], "java.io.FilterInputStream", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.$in = null;
Clazz.instantialize(this, arguments);}, java.io, "FilterInputStream", java.io.InputStream);
Clazz.makeConstructor(c$, 
function($in){
Clazz.superConstructor (this, java.io.FilterInputStream, []);
this.$in = $in;
}, "java.io.InputStream");
Clazz.defineMethod(c$, "readByteAsInt", 
function(){
return this.$in.readByteAsInt();
});
Clazz.overrideMethod(c$, "read", 
function(b, off, len){
return this.$in.read(b, off, len);
}, "~A,~N,~N");
Clazz.defineMethod(c$, "skip", 
function(n){
return this.$in.skip(n);
}, "~N");
Clazz.defineMethod(c$, "available", 
function(){
return this.$in.available();
});
Clazz.defineMethod(c$, "close", 
function(){
this.$in.close();
});
Clazz.defineMethod(c$, "mark", 
function(readlimit){
this.$in.mark(readlimit);
}, "~N");
Clazz.defineMethod(c$, "reset", 
function(){
this.$in.reset();
});
Clazz.defineMethod(c$, "markSupported", 
function(){
return this.$in.markSupported();
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.Closeable"], "java.io.InputStream", null, function(){
var c$ = Clazz.declareType(java.io, "InputStream", null, java.io.Closeable);
Clazz.defineMethod(c$, "read", 
function(b, off, len){
if (b == null) {
throw  new NullPointerException();
} else if (off < 0 || len < 0 || len > b.length - off) {
throw  new IndexOutOfBoundsException();
} else if (len == 0) {
return 0;
}var c = this.readByteAsInt();
if (c == -1) {
return -1;
}b[off] = c;
var i = 1;
try {
for (; i < len; i++) {
c = this.readByteAsInt();
if (c == -1) {
break;
}b[off + i] = c;
}
} catch (ee) {
if (Clazz.exceptionOf(ee,"java.io.IOException")){
} else {
throw ee;
}
}
return i;
}, "~A,~N,~N");
Clazz.defineMethod(c$, "skip", 
function(n){
var remaining = n;
var nr;
if (java.io.InputStream.skipBuffer == null) java.io.InputStream.skipBuffer =  Clazz.newByteArray (2048, 0);
var localSkipBuffer = java.io.InputStream.skipBuffer;
if (n <= 0) {
return 0;
}while (remaining > 0) {
nr = this.read(localSkipBuffer, 0, Math.min(2048, remaining));
if (nr < 0) {
break;
}remaining -= nr;
}
return n - remaining;
}, "~N");
Clazz.defineMethod(c$, "available", 
function(){
return 0;
});
Clazz.overrideMethod(c$, "close", 
function(){
});
Clazz.defineMethod(c$, "mark", 
function(readlimit){
}, "~N");
Clazz.defineMethod(c$, "reset", 
function(){
throw  new java.io.IOException("mark/reset not supported");
});
Clazz.defineMethod(c$, "markSupported", 
function(){
return false;
});
Clazz.defineMethod(c$, "resetStream", 
function(){
});
c$.skipBuffer = null;
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.Reader"], "java.io.BufferedReader", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.$in = null;
this.cb = null;
this.nChars = 0;
this.nextChar = 0;
this.markedChar = -1;
this.readAheadLimit = 0;
this.skipLF = false;
this.markedSkipLF = false;
Clazz.instantialize(this, arguments);}, java.io, "BufferedReader", java.io.Reader);
Clazz.makeConstructor(c$, 
function($in){
Clazz.superConstructor(this, java.io.BufferedReader, [$in]);
this.$in = $in;
this.setSize(8192);
}, "java.io.Reader");
Clazz.defineMethod(c$, "setSize", 
function(sz){
if (sz <= 0) throw  new IllegalArgumentException("Buffer size <= 0");
this.cb =  Clazz.newCharArray (sz, '\0');
this.nextChar = this.nChars = 0;
}, "~N");
Clazz.defineMethod(c$, "ensureOpen", 
function(){
if (this.$in == null) throw  new java.io.IOException("Stream closed");
});
Clazz.defineMethod(c$, "fill", 
function(){
var dst;
if (this.markedChar <= -1) {
dst = 0;
} else {
var delta = this.nextChar - this.markedChar;
if (delta >= this.readAheadLimit) {
this.markedChar = -2;
this.readAheadLimit = 0;
dst = 0;
} else {
if (this.readAheadLimit <= this.cb.length) {
System.arraycopy(this.cb, this.markedChar, this.cb, 0, delta);
this.markedChar = 0;
dst = delta;
} else {
var ncb =  Clazz.newCharArray (this.readAheadLimit, '\0');
System.arraycopy(this.cb, this.markedChar, ncb, 0, delta);
this.cb = ncb;
this.markedChar = 0;
dst = delta;
}this.nextChar = this.nChars = delta;
}}var n;
do {
n = this.$in.read(this.cb, dst, this.cb.length - dst);
} while (n == 0);
if (n > 0) {
this.nChars = dst + n;
this.nextChar = dst;
}});
Clazz.defineMethod(c$, "read1", 
function(cbuf, off, len){
if (this.nextChar >= this.nChars) {
if (len >= this.cb.length && this.markedChar <= -1 && !this.skipLF) {
return this.$in.read(cbuf, off, len);
}this.fill();
}if (this.nextChar >= this.nChars) return -1;
if (this.skipLF) {
this.skipLF = false;
if (this.cb[this.nextChar] == '\n') {
this.nextChar++;
if (this.nextChar >= this.nChars) this.fill();
if (this.nextChar >= this.nChars) return -1;
}}var n = Math.min(len, this.nChars - this.nextChar);
System.arraycopy(this.cb, this.nextChar, cbuf, off, n);
this.nextChar += n;
return n;
}, "~A,~N,~N");
Clazz.defineMethod(c$, "read", 
function(cbuf, off, len){
{
this.ensureOpen();
if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)) {
throw  new IndexOutOfBoundsException();
} else if (len == 0) {
return 0;
}var n = this.read1(cbuf, off, len);
if (n <= 0) return n;
while ((n < len) && this.$in.ready()) {
var n1 = this.read1(cbuf, off + n, len - n);
if (n1 <= 0) break;
n += n1;
}
return n;
}}, "~A,~N,~N");
Clazz.defineMethod(c$, "readLine1", 
function(ignoreLF){
var s = null;
var startChar;
{
this.ensureOpen();
var omitLF = ignoreLF || this.skipLF;
for (; ; ) {
if (this.nextChar >= this.nChars) this.fill();
if (this.nextChar >= this.nChars) {
if (s != null && s.length > 0) return s.toString();
return null;
}var eol = false;
var c = String.fromCharCode(0);
var i;
if (omitLF && (this.cb[this.nextChar] == '\n')) this.nextChar++;
this.skipLF = false;
omitLF = false;
charLoop : for (i = this.nextChar; i < this.nChars; i++) {
c = this.cb[i];
if ((c == '\n') || (c == '\r')) {
eol = true;
break charLoop;
}}
startChar = this.nextChar;
this.nextChar = i;
var str =  String.instantialize(this.cb, startChar, i - startChar);
if (eol) {
if (s != null) {
s += str;
str = s;
}this.nextChar++;
if (c == '\r') {
this.skipLF = true;
}return str;
}if (s == null) s = "";
s += str;
}
}}, "~B");
Clazz.defineMethod(c$, "readLine", 
function(){
return this.readLine1(false);
});
Clazz.overrideMethod(c$, "skip", 
function(n){
if (n < 0) {
throw  new IllegalArgumentException("skip value is negative");
}{
this.ensureOpen();
var r = n;
while (r > 0) {
if (this.nextChar >= this.nChars) this.fill();
if (this.nextChar >= this.nChars) break;
if (this.skipLF) {
this.skipLF = false;
if (this.cb[this.nextChar] == '\n') {
this.nextChar++;
}}var d = this.nChars - this.nextChar;
if (r <= d) {
this.nextChar += r;
r = 0;
break;
}r -= d;
this.nextChar = this.nChars;
}
return n - r;
}}, "~N");
Clazz.defineMethod(c$, "ready", 
function(){
{
this.ensureOpen();
if (this.skipLF) {
if (this.nextChar >= this.nChars && this.$in.ready()) {
this.fill();
}if (this.nextChar < this.nChars) {
if (this.cb[this.nextChar] == '\n') this.nextChar++;
this.skipLF = false;
}}return (this.nextChar < this.nChars) || this.$in.ready();
}});
Clazz.overrideMethod(c$, "markSupported", 
function(){
return true;
});
Clazz.overrideMethod(c$, "mark", 
function(readAheadLimit){
if (readAheadLimit < 0) {
throw  new IllegalArgumentException("Read-ahead limit < 0");
}{
this.ensureOpen();
this.readAheadLimit = readAheadLimit;
this.markedChar = this.nextChar;
this.markedSkipLF = this.skipLF;
}}, "~N");
Clazz.overrideMethod(c$, "reset", 
function(){
{
this.ensureOpen();
if (this.markedChar < 0) throw  new java.io.IOException((this.markedChar == -2) ? "Mark invalid" : "Stream not marked");
this.nextChar = this.markedChar;
this.skipLF = this.markedSkipLF;
}});
Clazz.defineMethod(c$, "close", 
function(){
{
if (this.$in == null) return;
this.$in.close();
this.$in = null;
this.cb = null;
}});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.Closeable"], "java.io.Reader", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.lock = null;
this.skipBuffer = String.fromCharCode(null);
Clazz.instantialize(this, arguments);}, java.io, "Reader", null, java.io.Closeable);
Clazz.makeConstructor(c$, 
function(lock){
if (lock == null) {
throw  new NullPointerException();
}this.lock = lock;
}, "~O");
Clazz.defineMethod(c$, "skip", 
function(n){
if (n < 0) throw  new IllegalArgumentException("skip value is negative");
var nn = Math.min(n, 8192);
{
if ((this.skipBuffer == null) || (this.skipBuffer.length < nn)) this.skipBuffer =  Clazz.newCharArray (nn, '\0');
var r = n;
while (r > 0) {
var nc = this.read(this.skipBuffer, 0, Math.min(r, nn));
if (nc == -1) break;
r -= nc;
}
return n - r;
}}, "~N");
Clazz.defineMethod(c$, "ready", 
function(){
return false;
});
Clazz.defineMethod(c$, "markSupported", 
function(){
return false;
});
Clazz.defineMethod(c$, "mark", 
function(readAheadLimit){
throw  new java.io.IOException("mark() not supported");
}, "~N");
Clazz.defineMethod(c$, "reset", 
function(){
throw  new java.io.IOException("reset() not supported");
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.Reader"], "java.io.InputStreamReader", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.$in = null;
this.isOpen = true;
this.charsetName = null;
this.isUTF8 = false;
this.bytearr = null;
this.pos = 0;
Clazz.instantialize(this, arguments);}, java.io, "InputStreamReader", java.io.Reader);
Clazz.makeConstructor(c$, 
function($in, charsetName){
Clazz.superConstructor(this, java.io.InputStreamReader, [$in]);
this.$in = $in;
this.charsetName = charsetName;
if (!(this.isUTF8 = "UTF-8".equals(charsetName)) && !"ISO-8859-1".equals(charsetName)) throw  new NullPointerException("charsetName");
}, "java.io.InputStream,~S");
Clazz.defineMethod(c$, "getEncoding", 
function(){
return this.charsetName;
});
Clazz.overrideMethod(c$, "read", 
function(cbuf, offset, length){
if (this.bytearr == null || this.bytearr.length < length) this.bytearr =  Clazz.newByteArray (length, 0);
var c;
var char2;
var char3;
var byteCount = 0;
var charCount = offset;
var byteLen = this.$in.read(this.bytearr, this.pos, length - this.pos);
var nAvail = this.$in.available();
if (byteLen < 0) return -1;
var nMax = byteLen;
while (byteCount < nMax) {
c = this.bytearr[byteCount] & 0xff;
if (this.isUTF8) switch (c >> 4) {
case 0xC:
case 0xD:
if (byteCount + 1 >= byteLen) {
if (nAvail >= 1) {
nMax = byteCount;
continue;
}} else if (((char2 = this.bytearr[byteCount + 1]) & 0xC0) == 0x80) {
cbuf[charCount++] = String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
byteCount += 2;
continue;
}this.isUTF8 = false;
break;
case 0xE:
if (byteCount + 2 >= byteLen) {
if (nAvail >= 2) {
nMax = byteCount;
continue;
}} else if (((char2 = this.bytearr[byteCount + 1]) & 0xC0) == 0x80 && ((char3 = this.bytearr[byteCount + 2]) & 0xC0) == 0x80) {
cbuf[charCount++] = String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | (char3 & 0x3F));
byteCount += 3;
continue;
}this.isUTF8 = false;
break;
}
byteCount++;
cbuf[charCount++] = String.fromCharCode(c);
}
this.pos = byteLen - byteCount;
for (var i = 0; i < this.pos; i++) {
this.bytearr[i] = this.bytearr[byteCount++];
}
return charCount - offset;
}, "~A,~N,~N");
Clazz.overrideMethod(c$, "ready", 
function(){
return this.isOpen;
});
Clazz.overrideMethod(c$, "close", 
function(){
this.$in.close();
this.isOpen = false;
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.Reader"], "java.io.StringReader", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.str = null;
this.length = 0;
this.next = 0;
this.$mark = 0;
Clazz.instantialize(this, arguments);}, java.io, "StringReader", java.io.Reader);
Clazz.makeConstructor(c$, 
function(s){
Clazz.superConstructor(this, java.io.StringReader, [s]);
this.str = s;
this.length = s.length;
}, "~S");
Clazz.defineMethod(c$, "ensureOpen", 
function(){
if (this.str == null) throw  new java.io.IOException("Stream closed");
});
Clazz.overrideMethod(c$, "read", 
function(cbuf, off, len){
{
this.ensureOpen();
if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)) {
throw  new IndexOutOfBoundsException();
} else if (len == 0) {
return 0;
}if (this.next >= this.length) return -1;
var n = Math.min(this.length - this.next, len);
this.str.getChars(this.next, this.next + n, cbuf, off);
this.next += n;
return n;
}}, "~A,~N,~N");
Clazz.overrideMethod(c$, "skip", 
function(ns){
{
this.ensureOpen();
if (this.next >= this.length) return 0;
var n = Math.min(this.length - this.next, ns);
n = Math.max(-this.next, n);
this.next += n;
return n;
}}, "~N");
Clazz.overrideMethod(c$, "ready", 
function(){
{
this.ensureOpen();
return true;
}});
Clazz.overrideMethod(c$, "markSupported", 
function(){
return true;
});
Clazz.overrideMethod(c$, "mark", 
function(readAheadLimit){
if (readAheadLimit < 0) {
throw  new IllegalArgumentException("Read-ahead limit < 0");
}{
this.ensureOpen();
this.$mark = this.next;
}}, "~N");
Clazz.overrideMethod(c$, "reset", 
function(){
{
this.ensureOpen();
this.next = this.$mark;
}});
Clazz.overrideMethod(c$, "close", 
function(){
this.str = null;
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JU");
Clazz.load(["javajs.api.JSONEncodable"], "JU.BS", ["JU.PT", "$.SB"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.words = null;
this.wordsInUse = 0;
this.sizeIsSticky = false;
Clazz.instantialize(this, arguments);}, JU, "BS", null, [Cloneable, javajs.api.JSONEncodable]);
Clazz.makeConstructor(c$, 
function(){
this.initWords(32);
this.sizeIsSticky = false;
});
c$.wordIndex = Clazz.defineMethod(c$, "wordIndex", 
function(bitIndex){
return bitIndex >> 5;
}, "~N");
Clazz.defineMethod(c$, "recalculateWordsInUse", 
function(){
var i;
for (i = this.wordsInUse - 1; i >= 0; i--) if (this.words[i] != 0) break;

this.wordsInUse = i + 1;
});
c$.newN = Clazz.defineMethod(c$, "newN", 
function(nbits){
var bs =  new JU.BS();
bs.init(nbits);
return bs;
}, "~N");
Clazz.defineMethod(c$, "init", 
function(nbits){
if (nbits < 0) throw  new NegativeArraySizeException("nbits < 0: " + nbits);
this.initWords(nbits);
this.sizeIsSticky = true;
}, "~N");
Clazz.defineMethod(c$, "initWords", 
function(nbits){
this.words =  Clazz.newIntArray (JU.BS.wordIndex(nbits - 1) + 1, 0);
}, "~N");
Clazz.defineMethod(c$, "ensureCapacity", 
function(wordsRequired){
if (this.words.length < wordsRequired) {
var request = Math.max(2 * this.words.length, wordsRequired);
this.setLength(request);
this.sizeIsSticky = false;
}}, "~N");
Clazz.defineMethod(c$, "expandTo", 
function(wordIndex){
var wordsRequired = wordIndex + 1;
if (this.wordsInUse < wordsRequired) {
this.ensureCapacity(wordsRequired);
this.wordsInUse = wordsRequired;
}}, "~N");
Clazz.defineMethod(c$, "set", 
function(bitIndex){
if (bitIndex < 0) throw  new IndexOutOfBoundsException("bitIndex < 0: " + bitIndex);
var wordIndex = JU.BS.wordIndex(bitIndex);
this.expandTo(wordIndex);
this.words[wordIndex] |= (1 << bitIndex);
}, "~N");
Clazz.defineMethod(c$, "setBitTo", 
function(bitIndex, value){
if (value) this.set(bitIndex);
 else this.clear(bitIndex);
}, "~N,~B");
Clazz.defineMethod(c$, "setBits", 
function(fromIndex, toIndex){
if (fromIndex == toIndex) return;
var startWordIndex = JU.BS.wordIndex(fromIndex);
var endWordIndex = JU.BS.wordIndex(toIndex - 1);
this.expandTo(endWordIndex);
var firstWordMask = -1 << fromIndex;
var lastWordMask = -1 >>> -toIndex;
if (startWordIndex == endWordIndex) {
this.words[startWordIndex] |= (firstWordMask & lastWordMask);
} else {
this.words[startWordIndex] |= firstWordMask;
for (var i = startWordIndex + 1; i < endWordIndex; i++) this.words[i] = -1;

this.words[endWordIndex] |= lastWordMask;
}}, "~N,~N");
Clazz.defineMethod(c$, "clear", 
function(bitIndex){
if (bitIndex < 0) throw  new IndexOutOfBoundsException("bitIndex < 0: " + bitIndex);
var wordIndex = JU.BS.wordIndex(bitIndex);
if (wordIndex >= this.wordsInUse) return;
this.words[wordIndex] &= ~(1 << bitIndex);
this.recalculateWordsInUse();
}, "~N");
Clazz.defineMethod(c$, "clearBits", 
function(fromIndex, toIndex){
if (fromIndex == toIndex) return;
var startWordIndex = JU.BS.wordIndex(fromIndex);
if (startWordIndex >= this.wordsInUse) return;
var endWordIndex = JU.BS.wordIndex(toIndex - 1);
if (endWordIndex >= this.wordsInUse) {
toIndex = this.length();
endWordIndex = this.wordsInUse - 1;
}var firstWordMask = -1 << fromIndex;
var lastWordMask = -1 >>> -toIndex;
if (startWordIndex == endWordIndex) {
this.words[startWordIndex] &= ~(firstWordMask & lastWordMask);
} else {
this.words[startWordIndex] &= ~firstWordMask;
for (var i = startWordIndex + 1; i < endWordIndex; i++) this.words[i] = 0;

this.words[endWordIndex] &= ~lastWordMask;
}this.recalculateWordsInUse();
}, "~N,~N");
Clazz.defineMethod(c$, "clearAll", 
function(){
while (this.wordsInUse > 0) this.words[--this.wordsInUse] = 0;

});
Clazz.defineMethod(c$, "get", 
function(bitIndex){
if (bitIndex < 0) throw  new IndexOutOfBoundsException("bitIndex < 0: " + bitIndex);
var wordIndex = JU.BS.wordIndex(bitIndex);
return (wordIndex < this.wordsInUse) && ((this.words[wordIndex] & (1 << bitIndex)) != 0);
}, "~N");
Clazz.defineMethod(c$, "nextSetBit", 
function(fromIndex){
if (fromIndex < 0) throw  new IndexOutOfBoundsException("fromIndex < 0: " + fromIndex);
var u = JU.BS.wordIndex(fromIndex);
if (u >= this.wordsInUse) return -1;
var word = this.words[u] & (-1 << fromIndex);
while (true) {
if (word != 0) return (u * 32) + Integer.numberOfTrailingZeros(word);
if (++u == this.wordsInUse) return -1;
word = this.words[u];
}
}, "~N");
Clazz.defineMethod(c$, "nextClearBit", 
function(fromIndex){
if (fromIndex < 0) throw  new IndexOutOfBoundsException("fromIndex < 0: " + fromIndex);
var u = JU.BS.wordIndex(fromIndex);
if (u >= this.wordsInUse) return fromIndex;
var word = ~this.words[u] & (-1 << fromIndex);
while (true) {
if (word != 0) return (u * 32) + Integer.numberOfTrailingZeros(word);
if (++u == this.wordsInUse) return this.wordsInUse * 32;
word = ~this.words[u];
}
}, "~N");
Clazz.defineMethod(c$, "length", 
function(){
if (this.wordsInUse == 0) return 0;
return 32 * (this.wordsInUse - 1) + (32 - Integer.numberOfLeadingZeros(this.words[this.wordsInUse - 1]));
});
Clazz.defineMethod(c$, "isEmpty", 
function(){
return this.wordsInUse == 0;
});
Clazz.defineMethod(c$, "intersects", 
function(set){
for (var i = Math.min(this.wordsInUse, set.wordsInUse) - 1; i >= 0; i--) if ((this.words[i] & set.words[i]) != 0) return true;

return false;
}, "JU.BS");
Clazz.defineMethod(c$, "cardinality", 
function(){
var sum = 0;
for (var i = 0; i < this.wordsInUse; i++) sum += Integer.bitCount(this.words[i]);

return sum;
});
Clazz.defineMethod(c$, "and", 
function(set){
if (this === set) return;
while (this.wordsInUse > set.wordsInUse) this.words[--this.wordsInUse] = 0;

for (var i = 0; i < this.wordsInUse; i++) this.words[i] &= set.words[i];

this.recalculateWordsInUse();
}, "JU.BS");
Clazz.defineMethod(c$, "or", 
function(set){
if (this === set) return;
var wordsInCommon = Math.min(this.wordsInUse, set.wordsInUse);
if (this.wordsInUse < set.wordsInUse) {
this.ensureCapacity(set.wordsInUse);
this.wordsInUse = set.wordsInUse;
}for (var i = 0; i < wordsInCommon; i++) this.words[i] |= set.words[i];

if (wordsInCommon < set.wordsInUse) System.arraycopy(set.words, wordsInCommon, this.words, wordsInCommon, this.wordsInUse - wordsInCommon);
}, "JU.BS");
Clazz.defineMethod(c$, "xor", 
function(set){
var wordsInCommon = Math.min(this.wordsInUse, set.wordsInUse);
if (this.wordsInUse < set.wordsInUse) {
this.ensureCapacity(set.wordsInUse);
this.wordsInUse = set.wordsInUse;
}for (var i = 0; i < wordsInCommon; i++) this.words[i] ^= set.words[i];

if (wordsInCommon < set.wordsInUse) System.arraycopy(set.words, wordsInCommon, this.words, wordsInCommon, set.wordsInUse - wordsInCommon);
this.recalculateWordsInUse();
}, "JU.BS");
Clazz.defineMethod(c$, "andNot", 
function(set){
for (var i = Math.min(this.wordsInUse, set.wordsInUse) - 1; i >= 0; i--) this.words[i] &= ~set.words[i];

this.recalculateWordsInUse();
}, "JU.BS");
Clazz.overrideMethod(c$, "hashCode", 
function(){
var h = 1234;
for (var i = this.wordsInUse; --i >= 0; ) h ^= this.words[i] * (i + 1);

return ((h >> 32) ^ h);
});
Clazz.defineMethod(c$, "size", 
function(){
return this.words.length * 32;
});
Clazz.overrideMethod(c$, "equals", 
function(obj){
if (!(Clazz.instanceOf(obj,"JU.BS"))) return false;
if (this === obj) return true;
var set = obj;
if (this.wordsInUse != set.wordsInUse) return false;
for (var i = 0; i < this.wordsInUse; i++) if (this.words[i] != set.words[i]) return false;

return true;
}, "~O");
Clazz.overrideMethod(c$, "clone", 
function(){
if (!this.sizeIsSticky && this.wordsInUse != this.words.length) this.setLength(this.wordsInUse);
return JU.BS.copy(this);
});
Clazz.defineMethod(c$, "setLength", 
function(n){
{
if (n == this.words.length) return;
if (n == this.wordsInUse) {
this.words = Clazz.newArray(-1, this.words, 0, n);
return;
}
}var a =  Clazz.newIntArray (n, 0);
System.arraycopy(this.words, 0, a, 0, this.wordsInUse);
this.words = a;
}, "~N");
Clazz.overrideMethod(c$, "toString", 
function(){
return JU.BS.escape(this, '(', ')');
});
c$.copy = Clazz.defineMethod(c$, "copy", 
function(bitsetToCopy){
var bs;
{
bs = Clazz.clone(bitsetToCopy);
}var wordCount = bitsetToCopy.wordsInUse;
if (wordCount == 0) {
bs.words = JU.BS.emptyBitmap;
} else {
{
bs.words = Clazz.newArray(-1, bitsetToCopy.words, 0, bs.wordsInUse = wordCount);
}}return bs;
}, "JU.BS");
Clazz.defineMethod(c$, "cardinalityN", 
function(max){
var n = this.cardinality();
for (var i = this.length(); --i >= max; ) if (this.get(i)) n--;

return n;
}, "~N");
Clazz.overrideMethod(c$, "toJSON", 
function(){
var numBits = (this.wordsInUse > 128 ? this.cardinality() : this.wordsInUse * 32);
var b = JU.SB.newN(6 * numBits + 2);
b.appendC('[');
var i = this.nextSetBit(0);
if (i != -1) {
b.appendI(i);
for (i = this.nextSetBit(i + 1); i >= 0; i = this.nextSetBit(i + 1)) {
var endOfRun = this.nextClearBit(i);
do {
b.append(", ").appendI(i);
} while (++i < endOfRun);
}
}b.appendC(']');
return b.toString();
});
c$.escape = Clazz.defineMethod(c$, "escape", 
function(bs, chOpen, chClose){
if (bs == null) return chOpen + "{}" + chClose;
var s =  new JU.SB();
s.append(chOpen + "{");
var imax = bs.length();
var iLast = -1;
var iFirst = -2;
var i = -1;
while (++i <= imax) {
var isSet = bs.get(i);
if (i == imax || iLast >= 0 && !isSet) {
if (iLast >= 0 && iFirst != iLast) s.append((iFirst == iLast - 1 ? " " : ":") + iLast);
if (i == imax) break;
iLast = -1;
}if (bs.get(i)) {
if (iLast < 0) {
s.append((iFirst == -2 ? "" : " ") + i);
iFirst = i;
}iLast = i;
}}
s.append("}").appendC(chClose);
return s.toString();
}, "JU.BS,~S,~S");
c$.unescape = Clazz.defineMethod(c$, "unescape", 
function(str){
var ch;
var len;
if (str == null || (len = (str = str.trim()).length) < 4 || str.equalsIgnoreCase("({null})") || (ch = str.charAt(0)) != '(' && ch != '[' || str.charAt(len - 1) != (ch == '(' ? ')' : ']') || str.charAt(1) != '{' || str.indexOf('}') != len - 2) return null;
len -= 2;
for (var i = len; --i >= 2; ) if (!JU.PT.isDigit(ch = str.charAt(i)) && ch != ' ' && ch != '\t' && ch != ':') return null;

var lastN = len;
while (JU.PT.isDigit(str.charAt(--lastN))) {
}
if (++lastN == len) lastN = 0;
 else try {
lastN = Integer.parseInt(str.substring(lastN, len));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return null;
} else {
throw e;
}
}
var bs = JU.BS.newN(lastN);
lastN = -1;
var iPrev = -1;
var iThis = -2;
for (var i = 2; i <= len; i++) {
switch ((ch = str.charAt(i)).charCodeAt(0)) {
case 9:
case 32:
case 125:
if (iThis < 0) break;
if (iThis < lastN) return null;
lastN = iThis;
if (iPrev < 0) iPrev = iThis;
bs.setBits(iPrev, iThis + 1);
iPrev = -1;
iThis = -2;
break;
case 58:
iPrev = lastN = iThis;
iThis = -2;
break;
default:
if (JU.PT.isDigit(ch)) {
if (iThis < 0) iThis = 0;
iThis = (iThis * 10) + (ch.charCodeAt(0) - 48);
}}
}
return (iPrev >= 0 ? null : bs);
}, "~S");
c$.emptyBitmap =  Clazz.newIntArray (0, 0);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("javajs.api");
Clazz.declareInterface(javajs.api, "JSONEncodable");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.lang.Enum"], "JU.Encoding", null, function(){
var c$ = Clazz.declareType(JU, "Encoding", Enum);
Clazz.defineEnumConstant(c$, "NONE", 0, []);
Clazz.defineEnumConstant(c$, "UTF8", 1, []);
Clazz.defineEnumConstant(c$, "UTF_16BE", 2, []);
Clazz.defineEnumConstant(c$, "UTF_16LE", 3, []);
Clazz.defineEnumConstant(c$, "UTF_32BE", 4, []);
Clazz.defineEnumConstant(c$, "UTF_32LE", 5, []);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

(function(){
var c$ = Clazz.decorateAsClass(function(){
this.$name = null;
this.$ordinal = 0;
Clazz.instantialize(this, arguments);}, java.lang, "Enum", null, [Comparable, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(name, ordinal){
this.$name = name;
this.$ordinal = ordinal;
}, "~S,~N");
Clazz.defineMethod(c$, "name", 
function(){
return this.$name;
});
Clazz.defineMethod(c$, "ordinal", 
function(){
return this.$ordinal;
});
Clazz.overrideMethod(c$, "toString", 
function(){
return this.$name;
});
Clazz.overrideMethod(c$, "equals", 
function(other){
return this === other;
}, "~O");
Clazz.overrideMethod(c$, "clone", 
function(){
throw  new CloneNotSupportedException();
});
Clazz.overrideMethod(c$, "compareTo", 
function(o){
var other = o;
var self = this;
if (self.getClass() !== other.getClass() && self.getDeclaringClass() !== other.getDeclaringClass()) throw  new ClassCastException();
return self.$ordinal - other.$ordinal;
}, "~O");
Clazz.defineMethod(c$, "getDeclaringClass", 
function(){
var clazz = this.getClass();
var zuper = clazz.getSuperclass();
return ((zuper === Enum) ? clazz : zuper);
});
c$.$valueOf = Clazz.defineMethod(c$, "$valueOf", 
function(enumType, name){
var result = null;
{
result = enumType.$clazz$[name];
}if (result != null) return result;
if (name == null) throw  new NullPointerException("Name is null");
throw  new IllegalArgumentException("No enum const " + enumType + "." + name);
}, "Class,~S");
Clazz.overrideMethod(c$, "finalize", 
function(){
});
})();
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JU");
Clazz.load(null, "JU.JSJSONParser", ["java.util.Hashtable", "JU.JSONException", "$.Lst", "$.SB"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.str = null;
this.index = 0;
this.len = 0;
this.asHashTable = false;
Clazz.instantialize(this, arguments);}, JU, "JSJSONParser", null);
/*LV!1824 unnec constructor*/Clazz.defineMethod(c$, "parseMap", 
function(str, asHashTable){
this.index = 0;
this.asHashTable = asHashTable;
this.str = str;
this.len = str.length;
if (this.getChar() != '{') return null;
this.returnChar();
return this.getValue(false);
}, "~S,~B");
Clazz.defineMethod(c$, "parse", 
function(str, asHashTable){
this.index = 0;
this.asHashTable = asHashTable;
this.str = str;
this.len = str.length;
return this.getValue(false);
}, "~S,~B");
Clazz.defineMethod(c$, "next", 
function(){
return (this.index < this.len ? this.str.charAt(this.index++) : '\0');
});
Clazz.defineMethod(c$, "returnChar", 
function(){
this.index--;
});
Clazz.defineMethod(c$, "getChar", 
function(){
for (; ; ) {
var c = this.next();
if (c.charCodeAt(0) == 0 || c > ' ') {
return c;
}}
});
Clazz.defineMethod(c$, "getValue", 
function(isKey){
var i = this.index;
var c = this.getChar();
switch ((c).charCodeAt(0)) {
case 0:
return null;
case 34:
case 39:
return this.getString(c);
case 123:
if (!isKey) return this.getObject();
c = String.fromCharCode( 0);
break;
case 91:
if (!isKey) return this.getArray();
c = String.fromCharCode( 0);
break;
default:
this.returnChar();
while (c >= ' ' && "[,]{:}'\"".indexOf(c) < 0) c = this.next();

this.returnChar();
if (isKey && c != ':') c = String.fromCharCode( 0);
break;
}
if (isKey && c.charCodeAt(0) == 0) throw  new JU.JSONException("invalid key");
var string = this.str.substring(i, this.index).trim();
if (!isKey) {
if (string.equals("true")) {
return Boolean.TRUE;
}if (string.equals("false")) {
return Boolean.FALSE;
}if (string.equals("null")) {
return (this.asHashTable ? string : null);
}}c = string.charAt(0);
if (c >= '0' && c <= '9' || c == '-') try {
if (string.indexOf('.') < 0 && string.indexOf('e') < 0 && string.indexOf('E') < 0) return  new Integer(string);
var d = Float.$valueOf(string);
if (!d.isInfinite() && !d.isNaN()) return d;
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
System.out.println("JSON parser cannot parse " + string);
throw  new JU.JSONException("invalid value");
}, "~B");
Clazz.defineMethod(c$, "getString", 
function(quote){
var c;
var sb = null;
var i0 = this.index;
for (; ; ) {
var i1 = this.index;
switch ((c = this.next()).charCodeAt(0)) {
case 0:
case 10:
case 13:
throw this.syntaxError("Unterminated string");
case 92:
switch ((c = this.next()).charCodeAt(0)) {
case 34:
case 39:
case 92:
case 47:
break;
case 98:
c = '\b';
break;
case 116:
c = '\t';
break;
case 110:
c = '\n';
break;
case 102:
c = '\f';
break;
case 114:
c = '\r';
break;
case 117:
var i = this.index;
this.index += 4;
try {
c = String.fromCharCode(Integer.parseInt(this.str.substring(i, this.index), 16));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw this.syntaxError("Substring bounds error");
} else {
throw e;
}
}
break;
default:
throw this.syntaxError("Illegal escape.");
}
break;
default:
if (c == quote) return (sb == null ? this.str.substring(i0, i1) : sb.toString());
break;
}
if (this.index > i1 + 1) {
if (sb == null) {
sb =  new JU.SB();
sb.append(this.str.substring(i0, i1));
}}if (sb != null) sb.appendC(c);
}
}, "~S");
Clazz.defineMethod(c$, "getObject", 
function(){
var map = (this.asHashTable ?  new java.util.Hashtable() :  new java.util.HashMap());
var key = null;
switch ((this.getChar()).charCodeAt(0)) {
case 125:
return map;
case 0:
throw  new JU.JSONException("invalid object");
}
this.returnChar();
var isKey = false;
for (; ; ) {
if ((isKey = !isKey) == true) key = this.getValue(true).toString();
 else map.put(key, this.getValue(false));
switch ((this.getChar()).charCodeAt(0)) {
case 125:
return map;
case 58:
if (isKey) continue;
isKey = true;
case 44:
if (!isKey) continue;
default:
throw this.syntaxError("Expected ',' or ':' or '}'");
}
}
});
Clazz.defineMethod(c$, "getArray", 
function(){
var l =  new JU.Lst();
switch ((this.getChar()).charCodeAt(0)) {
case 93:
return l;
case 0:
throw  new JU.JSONException("invalid array");
}
this.returnChar();
var isNull = false;
for (; ; ) {
if (isNull) {
l.addLast(null);
isNull = false;
} else {
l.addLast(this.getValue(false));
}switch ((this.getChar()).charCodeAt(0)) {
case 44:
switch ((this.getChar()).charCodeAt(0)) {
case 93:
return l;
case 44:
isNull = true;
default:
this.returnChar();
}
continue;
case 93:
return l;
default:
throw this.syntaxError("Expected ',' or ']'");
}
}
});
Clazz.defineMethod(c$, "syntaxError", 
function(message){
return  new JU.JSONException(message + " for " + this.str.substring(0, Math.min(this.index, this.len)));
}, "~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.lang.RuntimeException"], "JU.JSONException", null, function(){
var c$ = Clazz.declareType(JU, "JSONException", RuntimeException);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["JU.T3"], "JU.P3", null, function(){
var c$ = Clazz.declareType(JU, "P3", JU.T3);
c$.newP = Clazz.defineMethod(c$, "newP", 
function(t){
var p =  new JU.P3();
p.x = t.x;
p.y = t.y;
p.z = t.z;
return p;
}, "JU.T3");
c$.getUnlikely = Clazz.defineMethod(c$, "getUnlikely", 
function(){
return (JU.P3.unlikely == null ? JU.P3.unlikely = JU.P3.new3(3.141592653589793, 2.718281828459045, (8.539734222673566)) : JU.P3.unlikely);
});
c$.new3 = Clazz.defineMethod(c$, "new3", 
function(x, y, z){
var p =  new JU.P3();
p.x = x;
p.y = y;
p.z = z;
return p;
}, "~N,~N,~N");
c$.newA = Clazz.defineMethod(c$, "newA", 
function(a){
return JU.P3.new3(a[0], a[1], a[2]);
}, "~A");
c$.unlikely = null;
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["javajs.api.JSONEncodable"], "JU.T3", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.x = 0;
this.y = 0;
this.z = 0;
Clazz.instantialize(this, arguments);}, JU, "T3", null, [javajs.api.JSONEncodable, java.io.Serializable]);
Clazz.defineMethod(c$, "set", 
function(x, y, z){
this.x = x;
this.y = y;
this.z = z;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "setA", 
function(t){
this.x = t[0];
this.y = t[1];
this.z = t[2];
}, "~A");
Clazz.defineMethod(c$, "setT", 
function(t1){
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
}, "JU.T3");
Clazz.defineMethod(c$, "add2", 
function(t1, t2){
this.x = t1.x + t2.x;
this.y = t1.y + t2.y;
this.z = t1.z + t2.z;
}, "JU.T3,JU.T3");
Clazz.defineMethod(c$, "add", 
function(t1){
this.x += t1.x;
this.y += t1.y;
this.z += t1.z;
}, "JU.T3");
Clazz.defineMethod(c$, "distanceSquared", 
function(p1){
var dx = this.x - p1.x;
var dy = this.y - p1.y;
var dz = this.z - p1.z;
return (dx * dx + dy * dy + dz * dz);
}, "JU.T3");
Clazz.defineMethod(c$, "distance", 
function(p1){
return Math.sqrt(this.distanceSquared(p1));
}, "JU.T3");
Clazz.defineMethod(c$, "sub2", 
function(t1, t2){
this.x = t1.x - t2.x;
this.y = t1.y - t2.y;
this.z = t1.z - t2.z;
}, "JU.T3,JU.T3");
Clazz.defineMethod(c$, "sub", 
function(t1){
this.x -= t1.x;
this.y -= t1.y;
this.z -= t1.z;
}, "JU.T3");
Clazz.defineMethod(c$, "scale", 
function(s){
this.x *= s;
this.y *= s;
this.z *= s;
}, "~N");
Clazz.defineMethod(c$, "add3", 
function(a, b, c){
this.x += a;
this.y += b;
this.z += c;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "scaleT", 
function(p){
this.x *= p.x;
this.y *= p.y;
this.z *= p.z;
}, "JU.T3");
Clazz.defineMethod(c$, "scaleAdd2", 
function(s, t1, t2){
this.x = s * t1.x + t2.x;
this.y = s * t1.y + t2.y;
this.z = s * t1.z + t2.z;
}, "~N,JU.T3,JU.T3");
Clazz.defineMethod(c$, "ave", 
function(a, b){
this.x = (a.x + b.x) / 2;
this.y = (a.y + b.y) / 2;
this.z = (a.z + b.z) / 2;
}, "JU.T3,JU.T3");
Clazz.defineMethod(c$, "dot", 
function(v){
return this.x * v.x + this.y * v.y + this.z * v.z;
}, "JU.T3");
Clazz.defineMethod(c$, "lengthSquared", 
function(){
return this.x * this.x + this.y * this.y + this.z * this.z;
});
Clazz.defineMethod(c$, "length", 
function(){
return Math.sqrt(this.lengthSquared());
});
Clazz.defineMethod(c$, "normalize", 
function(){
var d = this.length();
this.x /= d;
this.y /= d;
this.z /= d;
});
Clazz.defineMethod(c$, "cross", 
function(v1, v2){
this.set(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
}, "JU.T3,JU.T3");
Clazz.overrideMethod(c$, "hashCode", 
function(){
var bits = 1;
bits = 31 * bits + JU.T3.floatToIntBits(this.x);
bits = 31 * bits + JU.T3.floatToIntBits(this.y);
bits = 31 * bits + JU.T3.floatToIntBits(this.z);
return (bits ^ (bits >> 32));
});
c$.floatToIntBits = Clazz.defineMethod(c$, "floatToIntBits", 
function(x){
return (x == 0 ? 0 : Float.floatToIntBits(x));
}, "~N");
Clazz.overrideMethod(c$, "equals", 
function(t1){
if (!(Clazz.instanceOf(t1,"JU.T3"))) return false;
var t2 = t1;
return (this.x == t2.x && this.y == t2.y && this.z == t2.z);
}, "~O");
Clazz.overrideMethod(c$, "toString", 
function(){
return "{" + this.x + ", " + this.y + ", " + this.z + "}";
});
Clazz.overrideMethod(c$, "toJSON", 
function(){
return "[" + this.x + "," + this.y + "," + this.z + "]";
});
Clazz.defineMethod(c$, "setP", 
function(t){
this.set(t.x, t.y, t.z);
return this;
}, "JU.T3");
Clazz.defineMethod(c$, "putP", 
function(t){
t.set(this.x, this.y, this.z);
return t;
}, "JU.T3");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
(function(){
var c$ = Clazz.declareType(JSV.common, "JSVersion", null);
{
var tmpVersion = null;
var tmpDate = null;
{
tmpVersion = Jmol.___JmolVersion; tmpDate = Jmol.___JmolDate;
}if (tmpDate != null) {
tmpDate = tmpDate.substring(7, 23);
}JSV.common.JSVersion.VERSION_SHORT = (tmpVersion != null ? tmpVersion : "(Unknown_version)");
var mv = (tmpVersion != null ? tmpVersion : "(Unknown_version)");
JSV.common.JSVersion.date = (tmpDate != null ? tmpDate : "");
JSV.common.JSVersion.VERSION = JSV.common.JSVersion.VERSION_SHORT + (JSV.common.JSVersion.date == null ? "" : " " + JSV.common.JSVersion.date);
var v = -1;
if (tmpVersion != null) try {
var s = JSV.common.JSVersion.VERSION_SHORT;
var major = "";
var i = s.indexOf(".");
if (i < 0) {
v = 100000 * Integer.parseInt(s);
s = null;
}if (s != null) {
v = 100000 * Integer.parseInt(major = s.substring(0, i));
s = s.substring(i + 1);
i = s.indexOf(".");
if (i < 0) {
v += 1000 * Integer.parseInt(s);
s = null;
}if (s != null) {
var m = s.substring(0, i);
major += "." + m;
mv = major;
v += 1000 * Integer.parseInt(m);
s = s.substring(i + 1);
i = s.indexOf("_");
if (i >= 0) s = s.substring(0, i);
i = s.indexOf(" ");
if (i >= 0) s = s.substring(0, i);
v += Integer.parseInt(s);
}}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
JSV.common.JSVersion.majorVersion = mv;
JSV.common.JSVersion.versionInt = v;
}})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["javajs.api.BytePoster", "J.api.PlatformViewer", "JSV.common.Spectrum"], "JSV.common.JSViewer", ["java.io.File", "java.net.URL", "java.util.Arrays", "$.Hashtable", "JU.CU", "$.Lst", "$.OC", "$.PT", "$.SB", "JSV.common.Annotation", "$.ExportType", "$.JSVFileManager", "$.PanelData", "$.PanelNode", "$.Parameters", "$.PeakInfo", "$.PrintLayout", "$.RepaintManager", "$.ScriptToken", "$.ScriptTokenizer", "$.SyncManager", "JSV.source.JDXReader", "$.JDXSource", "JSV.tree.SimpleTree", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.parentFrame = null;
this.si = null;
this.g2d = null;
this.spectraTree = null;
this.currentSource = null;
this.panelNodes = null;
this.parameters = null;
this.repaintManager = null;
this.selectedPanel = null;
this.mainPanel = null;
this.properties = null;
this.scriptQueue = null;
this.fileHelper = null;
this.jsvpPopupMenu = null;
this.dialogManager = null;
this.viewDialog = null;
this.overlayLegendDialog = null;
this.irMode = null;
this.isEmbedded = false;
this.loadImaginary = false;
this.interfaceOverlaid = false;
this.autoIntegrate = false;
this.autoShowLegend = false;
this.obscureTitleFromUser = null;
this.allowMenu = true;
this.initialStartIndex = -1;
this.initialEndIndex = -1;
this.isSingleThreaded = false;
this.isApplet = false;
this.isSigned = false;
this.recentScript = "";
this.appletName = null;
this.fullName = null;
this.syncID = null;
this.html5Applet = null;
this.display = null;
this.maximumSize = 2147483647;
this.screenHeight = 0;
this.screenWidth = 0;
this.fileCount = 0;
this.nViews = 0;
this.scriptLevelCount = 0;
this.integrationRatios = null;
this.apiPlatform = null;
this.hasDisplay = false;
this.peakInfoModelSentToJmol = null;
this.popupAllowMenu = true;
this.popupZoomEnabled = true;
this.defaultLoadScript = null;
this.nmrMaxY = NaN;
this.recentStackPercent = 5;
this.lastPrintLayout = null;
this.recentOpenURL = "http://";
this.recentURL = null;
this.recentSimulation = "tylenol";
Clazz.instantialize(this, arguments);}, JSV.common, "JSViewer", null, [J.api.PlatformViewer, javajs.api.BytePoster]);
Clazz.prepareFields (c$, function(){
this.irMode = JSV.common.Spectrum.IRMode.NO_CONVERT;
});
Clazz.makeConstructor(c$, 
function(si, isApplet, isJSApplet, hasDisplay){
this.si = si;
this.isApplet = isApplet;
this.hasDisplay = hasDisplay;
JSV.common.JSViewer.isJS = isApplet && isJSApplet;
var jmol = null;
{
self.Jmol && (jmol = Jmol);
}JSV.common.JSViewer.jsmolObject = jmol;
this.isSigned = si.isSigned();
this.apiPlatform = this.getPlatformInterface("Platform");
this.apiPlatform.setViewer(this, this.display);
this.g2d = this.getPlatformInterface("G2D");
this.spectraTree =  new JSV.tree.SimpleTree(this);
this.parameters = this.getPlatformInterface("Parameters");
this.parameters.setName("applet");
this.fileHelper = (this.getPlatformInterface("FileHelper")).set(this);
this.isSingleThreaded = this.apiPlatform.isSingleThreaded();
this.panelNodes =  new JU.Lst();
this.repaintManager =  new JSV.common.RepaintManager(this);
if (!isApplet) this.setPopupMenu(true, true);
}, "JSV.api.ScriptInterface,~B,~B,~B");
Clazz.defineMethod(c$, "setParentFrame", 
function(parentFrame){
this.parentFrame = parentFrame;
}, "javax.swing.JFrame");
Clazz.defineMethod(c$, "setProperty", 
function(key, value){
if (this.properties != null) this.properties.setProperty(key, value);
}, "~S,~S");
Clazz.defineMethod(c$, "setNode", 
function(node){
if (node.jsvp !== this.selectedPanel) this.si.siSetSelectedPanel(node.jsvp);
this.si.siSendPanelChange();
this.si.siNodeSet(node);
}, "JSV.common.PanelNode");
Clazz.defineMethod(c$, "setPopupMenu", 
function(allowMenu, zoomEnabled){
this.popupAllowMenu = allowMenu;
this.popupZoomEnabled = zoomEnabled;
}, "~B,~B");
Clazz.defineMethod(c$, "showMenu", 
function(x, y){
if (!this.popupAllowMenu) return;
if (this.jsvpPopupMenu == null) {
try {
this.jsvpPopupMenu = this.getPlatformInterface("Popup");
this.jsvpPopupMenu.jpiInitialize(this, this.isApplet ? "appletMenu" : "appMenu");
this.jsvpPopupMenu.setEnabled(this.popupAllowMenu, this.popupZoomEnabled);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
JU.Logger.error(e + " initializing popup menu");
return;
} else {
throw e;
}
}
}this.jsvpPopupMenu.jpiShow(x, y);
}, "~N,~N");
Clazz.defineMethod(c$, "runScriptNow", 
function(script){
System.out.println(this.checkScript(script));
var pt = script.indexOf("JSpecView:");
if (pt >= 0) script = script.substring(pt + 10);
this.scriptLevelCount++;
if (script == null) script = "";
script = script.trim();
if (script.startsWith("!")) script = script.substring(1).trim();
 else if (script.startsWith(">")) {
JU.Logger.error(script);
return true;
}if (script.indexOf("<PeakData") >= 0) {
this.syncScript(script);
return true;
}JU.Logger.info("RUNSCRIPT " + script);
var isOK = true;
var nErrorsLeft = 10;
var commandTokens =  new JSV.common.ScriptTokenizer(script, true);
var msg = null;
while (commandTokens != null && commandTokens.hasMoreTokens() && nErrorsLeft > 0 && isOK) {
var token = commandTokens.nextToken();
var eachParam =  new JSV.common.ScriptTokenizer(token, false);
var key = JSV.common.ScriptToken.getKey(eachParam);
if (key == null) continue;
var st = JSV.common.ScriptToken.getScriptToken(key);
var value = JSV.common.ScriptToken.getValue(st, eachParam, token);
try {
switch (st) {
case JSV.common.ScriptToken.UNKNOWN:
JU.Logger.info("Unrecognized parameter: " + key);
--nErrorsLeft;
break;
default:
if (this.selectedPanel == null) break;
this.parameters.set(this.pd(), st, value);
this.si.siUpdateBoolean(st, JSV.common.Parameters.isTrue(value));
break;
case JSV.common.ScriptToken.PEAKCALLBACKFUNCTIONNAME:
case JSV.common.ScriptToken.SYNCCALLBACKFUNCTIONNAME:
case JSV.common.ScriptToken.COORDCALLBACKFUNCTIONNAME:
case JSV.common.ScriptToken.LOADFILECALLBACKFUNCTIONNAME:
this.si.siExecSetCallback(st, value);
break;
case JSV.common.ScriptToken.DEFAULTLOADSCRIPT:
value = JU.PT.rep(value, "''", "\"");
this.defaultLoadScript = (value.length > 0 ? value : null);
break;
case JSV.common.ScriptToken.DEFAULTNMRNORMALIZATION:
this.nmrMaxY = JU.PT.parseFloat(value);
break;
case JSV.common.ScriptToken.AUTOINTEGRATE:
this.autoIntegrate = JSV.common.Parameters.isTrue(value);
break;
case JSV.common.ScriptToken.CLOSE:
this.execClose(value);
break;
case JSV.common.ScriptToken.DEBUG:
JU.Logger.setLogLevel(value.toLowerCase().equals("high") ? 6 : JSV.common.Parameters.isTrue(value) ? 5 : 4);
break;
case JSV.common.ScriptToken.GETPROPERTY:
var info = (this.selectedPanel == null ? null : this.getPropertyAsJavaObject(value));
if (info != null) this.selectedPanel.showMessage(JU.PT.toJSON(null, info), value);
break;
case JSV.common.ScriptToken.HELP:
this.execHelp(value);
break;
case JSV.common.ScriptToken.HIDDEN:
this.si.siExecHidden(JSV.common.Parameters.isTrue(value));
break;
case JSV.common.ScriptToken.INTEGRATIONRATIOS:
this.integrationRatios = value;
this.execIntegrate(null);
break;
case JSV.common.ScriptToken.INTERFACE:
this.interfaceOverlaid = this.checkOvelayInterface(value);
break;
case JSV.common.ScriptToken.INTEGRALOFFSET:
case JSV.common.ScriptToken.INTEGRALRANGE:
this.execSetIntegralParameter(st, Double.parseDouble(value));
break;
case JSV.common.ScriptToken.INVERTY:
this.execZoom("invertY");
break;
case JSV.common.ScriptToken.JMOL:
this.syncToJmol(value);
break;
case JSV.common.ScriptToken.JSV:
this.syncScript(JU.PT.trimQuotes(value));
break;
case JSV.common.ScriptToken.LOAD:
if (value.length == 0) {
if (this.defaultLoadScript != null) this.runScriptNow(this.defaultLoadScript);
break;
}this.execLoad(value, (this.defaultLoadScript == null ? "" : this.defaultLoadScript + ";") + commandTokens.getRemainingScript());
msg = (this.selectedPanel == null ? null : this.si.siLoaded(value));
commandTokens = null;
break;
case JSV.common.ScriptToken.LOADIMAGINARY:
this.loadImaginary = JSV.common.Parameters.isTrue(value);
break;
case JSV.common.ScriptToken.PEAK:
this.execPeak(value);
break;
case JSV.common.ScriptToken.PEAKLIST:
this.execPeakList(value);
break;
case JSV.common.ScriptToken.SCALEBY:
this.scaleSelectedBy(this.panelNodes, value);
break;
case JSV.common.ScriptToken.SCRIPT:
if (value.equals("") || value.toLowerCase().startsWith("inline")) {
this.execScriptInline(value);
} else {
var s = JSV.common.JSVFileManager.getFileAsString(value);
if (s != null && this.scriptLevelCount < 100) this.runScriptNow(s);
}break;
case JSV.common.ScriptToken.SELECT:
this.execSelect(value);
break;
case JSV.common.ScriptToken.SPECTRUM:
case JSV.common.ScriptToken.SPECTRUMNUMBER:
if (!this.setSpectrum(value)) isOK = false;
break;
case JSV.common.ScriptToken.STACKOFFSETY:
this.execOverlayOffsetY(JU.PT.parseInt("" + JU.PT.parseFloat(value)));
break;
case JSV.common.ScriptToken.TEST:
this.si.siExecTest(value);
break;
case JSV.common.ScriptToken.OVERLAY:
case JSV.common.ScriptToken.VIEW:
this.execView(value, true);
break;
case JSV.common.ScriptToken.HIGHLIGHT:
isOK = this.highlight(token);
break;
case JSV.common.ScriptToken.FINDX:
case JSV.common.ScriptToken.GETSOLUTIONCOLOR:
case JSV.common.ScriptToken.INTEGRATION:
case JSV.common.ScriptToken.INTEGRATE:
case JSV.common.ScriptToken.IRMODE:
case JSV.common.ScriptToken.LABEL:
case JSV.common.ScriptToken.LINK:
case JSV.common.ScriptToken.OVERLAYSTACKED:
case JSV.common.ScriptToken.PRINT:
case JSV.common.ScriptToken.SETPEAK:
case JSV.common.ScriptToken.SETX:
case JSV.common.ScriptToken.SHIFTX:
case JSV.common.ScriptToken.SHOWERRORS:
case JSV.common.ScriptToken.SHOWMEASUREMENTS:
case JSV.common.ScriptToken.SHOWMENU:
case JSV.common.ScriptToken.SHOWPEAKLIST:
case JSV.common.ScriptToken.SHOWINTEGRATION:
case JSV.common.ScriptToken.SHOWPROPERTIES:
case JSV.common.ScriptToken.SHOWSOURCE:
case JSV.common.ScriptToken.YSCALE:
case JSV.common.ScriptToken.WRITE:
case JSV.common.ScriptToken.ZOOM:
if (this.isClosed()) {
isOK = false;
break;
}switch (st) {
default:
break;
case JSV.common.ScriptToken.FINDX:
this.pd().findX(null, Double.parseDouble(value));
break;
case JSV.common.ScriptToken.GETSOLUTIONCOLOR:
this.show("solutioncolor" + value.toLowerCase());
break;
case JSV.common.ScriptToken.INTEGRATION:
case JSV.common.ScriptToken.INTEGRATE:
this.execIntegrate(value);
break;
case JSV.common.ScriptToken.IRMODE:
this.execIRMode(value);
break;
case JSV.common.ScriptToken.LABEL:
this.pd().addAnnotation(JSV.common.ScriptToken.getTokens(value));
break;
case JSV.common.ScriptToken.LINK:
this.pd().linkSpectra(JSV.common.PanelData.LinkMode.getMode(value));
break;
case JSV.common.ScriptToken.OVERLAYSTACKED:
this.pd().splitStack(!JSV.common.Parameters.isTrue(value));
break;
case JSV.common.ScriptToken.PRINT:
msg = this.execWrite(null);
break;
case JSV.common.ScriptToken.SETPEAK:
case JSV.common.ScriptToken.SETX:
case JSV.common.ScriptToken.SHIFTX:
this.execShiftSpectrum(st, token);
break;
case JSV.common.ScriptToken.SHOWERRORS:
this.show("errors");
break;
case JSV.common.ScriptToken.SHOWINTEGRATION:
this.pd().showAnnotation(JSV.common.Annotation.AType.Integration, JSV.common.Parameters.getTFToggle(value));
break;
case JSV.common.ScriptToken.SHOWMEASUREMENTS:
this.pd().showAnnotation(JSV.common.Annotation.AType.Measurements, JSV.common.Parameters.getTFToggle(value));
break;
case JSV.common.ScriptToken.SHOWMENU:
this.showMenu(-2147483648, 0);
break;
case JSV.common.ScriptToken.SHOWPEAKLIST:
this.pd().showAnnotation(JSV.common.Annotation.AType.PeakList, JSV.common.Parameters.getTFToggle(value));
break;
case JSV.common.ScriptToken.SHOWPROPERTIES:
this.show("properties");
break;
case JSV.common.ScriptToken.SHOWSOURCE:
this.show("source");
break;
case JSV.common.ScriptToken.YSCALE:
this.setYScale(value);
break;
case JSV.common.ScriptToken.WINDOW:
this.si.siNewWindow(JSV.common.Parameters.isTrue(value), false);
break;
case JSV.common.ScriptToken.WRITE:
msg = this.execWrite(value);
break;
case JSV.common.ScriptToken.ZOOM:
isOK = this.execZoom(value);
break;
}
break;
}
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
msg = e.toString();
JU.Logger.error(e.toString());
isOK = false;
--nErrorsLeft;
} else {
throw e;
}
}
}
this.scriptLevelCount--;
this.si.siExecScriptComplete(msg, true);
return isOK;
}, "~S");
Clazz.defineMethod(c$, "execShiftSpectrum", 
function(st, script){
var tokens = JSV.common.ScriptToken.getTokens(script);
var xOld = NaN;
var xNew = NaN;
switch (tokens.size()) {
case 2:
var value = tokens.get(1);
if (value.equals("")) value = "?";
xNew = value.equalsIgnoreCase("NONE") ? 1.7976931348623157E308 : value.equalsIgnoreCase("?") ? NaN : Double.parseDouble(value);
break;
case 3:
xOld = Double.parseDouble(tokens.get(1));
xNew = Double.parseDouble(tokens.get(2));
break;
default:
Double.parseDouble("");
}
var mode = 0;
switch (st) {
case JSV.common.ScriptToken.SETPEAK:
mode = 1;
break;
case JSV.common.ScriptToken.SETX:
mode = 2;
break;
case JSV.common.ScriptToken.SHIFTX:
mode = 3;
if (Double.isNaN(xNew)) Double.parseDouble("");
break;
default:
return;
}
this.pd().shiftSpectrum(mode, xOld, xNew);
}, "JSV.common.ScriptToken,~S");
Clazz.defineMethod(c$, "execClose", 
function(value){
var fromScript = (!value.startsWith("!"));
if (!fromScript) value = value.substring(1);
this.close(JU.PT.trimQuotes(value));
if (!fromScript || this.panelNodes.size() == 0) this.si.siValidateAndRepaint(true);
}, "~S");
Clazz.defineMethod(c$, "checkOvelayInterface", 
function(value){
return (value.equalsIgnoreCase("single") || value.equalsIgnoreCase("overlay"));
}, "~S");
Clazz.defineMethod(c$, "execPeak", 
function(value){
try {
var tokens = JSV.common.ScriptToken.getTokens(JU.PT.rep(value, "#", "INDEX="));
value = " type=\"" + tokens.get(0).toUpperCase() + "\" _match=\"" + JU.PT.trimQuotes(tokens.get(1).toUpperCase()) + "\"";
if (tokens.size() > 2 && tokens.get(2).equalsIgnoreCase("all")) value += " title=\"ALL\"";
this.processPeakPickEvent( new JSV.common.PeakInfo(value), false);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}, "~S");
Clazz.defineMethod(c$, "execPeakList", 
function(value){
var p = this.parameters;
var b = JSV.common.Parameters.getTFToggle(value);
if (value.indexOf("=") < 0) {
if (!this.isClosed()) this.pd().getPeakListing(null, b);
} else {
var tokens = JSV.common.ScriptToken.getTokens(value);
var threshold = p.peakListThreshold;
var interp = p.peakListInterpolation;
try {
for (var i = tokens.size(); --i >= 0; ) {
var token = tokens.get(i);
var pt = token.indexOf("=");
if (pt <= 0) continue;
var key = token.substring(0, pt);
value = token.substring(pt + 1);
if (key.startsWith("thr")) {
threshold = Double.$valueOf(value).doubleValue();
} else if (key.startsWith("int")) {
interp = (value.equalsIgnoreCase("none") ? "NONE" : "parabolic");
}}
p.peakListThreshold = threshold;
p.peakListInterpolation = interp;
if (!this.isClosed()) this.pd().getPeakListing(p, Boolean.TRUE);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}}, "~S");
Clazz.defineMethod(c$, "highlight", 
function(value){
var tokens = JSV.common.ScriptToken.getTokens(value);
var n = tokens.size();
switch (n) {
case 3:
case 5:
case 6:
case 7:
break;
case 2:
case 4:
if (tokens.get(n - 1).equalsIgnoreCase("OFF")) break;
default:
return false;
}
if (!this.isClosed()) {
var x1 = JU.PT.parseFloat(n > 1 ? tokens.get(1) : "");
var x2 = JU.PT.parseFloat(n > 2 ? tokens.get(2) : "");
var r = this.getRGB(n > 3 ? tokens.get(3) : "100");
var g = this.getRGB(n > 4 ? tokens.get(4) : "100");
var b = this.getRGB(n > 5 ? tokens.get(5) : "100");
var a = this.getRGB(n > 6 ? tokens.get(6) : "100");
if (Float.isNaN(x1) || Float.isNaN(x2)) {
this.pd().removeAllHighlights();
} else {
this.pd().removeHighlight(x1, x2);
if (a < 0) a = 150;
if (r >= 0 && g >= 0 && b >= 0) this.pd().addHighlight(null, x1, x2, null, r, g, b, a);
}this.repaint(true);
}return true;
}, "~S");
Clazz.defineMethod(c$, "getRGB", 
function(s){
var f = JU.PT.parseFloat(s);
return Clazz.floatToInt(Float.isNaN(f) ? -1 : f > 1 ? f : f * 255);
}, "~S");
Clazz.defineMethod(c$, "execZoom", 
function(value){
var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;
value = JU.PT.rep(value, " - ", " ").$replace(',', ' ');
var tokens = JSV.common.ScriptToken.getTokens(value);
switch (tokens.size()) {
default:
return false;
case 0:
var v = this.pd().getCurrentGraphSet().getCurrentView();
value = Math.round(v.minXOnScale * 100) / 100 + "," + Math.round(v.maxXOnScale * 100) / 100;
value = this.selectedPanel.getInput("Enter zoom range x1 x2", "Zoom", value);
return (value == null || this.execZoom(value));
case 1:
value = tokens.get(0);
if (value.equalsIgnoreCase("next")) {
this.pd().nextView();
} else if (value.toLowerCase().startsWith("prev")) {
this.pd().previousView();
} else if (value.equalsIgnoreCase("out")) {
this.pd().resetView();
} else if (value.equalsIgnoreCase("clear")) {
this.pd().clearAllView();
} else if (value.equalsIgnoreCase("invertY")) {
this.pd().getCurrentGraphSet().invertYAxis();
}return true;
case 2:
x1 = Double.parseDouble(tokens.get(0));
x2 = Double.parseDouble(tokens.get(1));
break;
case 3:
var xy = tokens.get(0);
if (xy.equalsIgnoreCase("X")) {
x1 = Double.parseDouble(tokens.get(1));
x2 = Double.parseDouble(tokens.get(2));
} else if (xy.equalsIgnoreCase("Y")) {
y1 = Double.parseDouble(tokens.get(1));
y2 = Double.parseDouble(tokens.get(2));
}break;
case 4:
x1 = Double.parseDouble(tokens.get(0));
y1 = Double.parseDouble(tokens.get(1));
x2 = Double.parseDouble(tokens.get(2));
y2 = Double.parseDouble(tokens.get(3));
}
this.pd().setZoom(x1, y1, x2, y2);
return true;
}, "~S");
Clazz.defineMethod(c$, "scaleSelectedBy", 
function(nodes, value){
try {
var f = Double.parseDouble(value);
for (var i = nodes.size(); --i >= 0; ) nodes.get(i).pd().scaleSelectedBy(f);

} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}, "JU.Lst,~S");
Clazz.defineMethod(c$, "pd", 
function(){
return (this.selectedPanel == null ? null : this.selectedPanel.getPanelData());
});
Clazz.defineMethod(c$, "isClosed", 
function(){
return (this.pd() == null);
});
Clazz.defineMethod(c$, "execSelect", 
function(value){
if (value.startsWith("ID ")) {
if (!this.isClosed()) try {
this.pd().selectSpectrum(null, "ID", JU.PT.trimQuotes(value.substring(3)), true);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
return;
}var isFirst = value.equalsIgnoreCase("first");
var isLast = value.equalsIgnoreCase("last");
if (isFirst || isLast) {
var pd = this.selectedPanel.getPanelData();
var gsets = pd.graphSets;
if (gsets == null || gsets.size() == 0) return;
var gs = gsets.get(isFirst ? 0 : gsets.size() - 1);
pd.setCurrentGraphSet(gs, -1);
return;
}var nodes = this.panelNodes;
for (var i = nodes.size(); --i >= 0; ) nodes.get(i).pd().selectFromEntireSet(-2147483648);

var speclist =  new JU.Lst();
this.fillSpecList(value, speclist, false);
}, "~S");
Clazz.defineMethod(c$, "execView", 
function(value, fromScript){
if (value.equals("")) {
this.checkOverlay();
return;
}var speclist =  new JU.Lst();
var strlist = this.fillSpecList(value, speclist, true);
if (speclist.size() > 0) this.si.siOpenDataOrFile(null, strlist, speclist, strlist, -1, -1, false, null, null);
if (!fromScript) {
this.si.siValidateAndRepaint(false);
}}, "~S,~B");
Clazz.defineMethod(c$, "execIRMode", 
function(value){
var mode = JSV.common.Spectrum.IRMode.getMode(value);
var type = this.pd().getSpectrum().dataType;
for (var i = this.panelNodes.size(); --i >= 0; ) this.panelNodes.get(i).pd().setIRMode(mode, type);

this.setIRmode(value);
}, "~S");
Clazz.defineMethod(c$, "execIntegrate", 
function(value){
if (this.isClosed()) return;
this.pd().checkIntegral(this.parameters, value);
if (this.integrationRatios != null) this.pd().setIntegrationRatios(this.integrationRatios);
this.integrationRatios = null;
this.repaint(true);
}, "~S");
Clazz.defineMethod(c$, "repaint", 
function(andTaintAll){
this.selectedPanel.doRepaint(andTaintAll);
}, "~B");
Clazz.defineMethod(c$, "execSetIntegralParameter", 
function(st, value){
var p = this.parameters;
switch (st) {
case JSV.common.ScriptToken.INTEGRALRANGE:
p.integralRange = value;
break;
case JSV.common.ScriptToken.INTEGRALOFFSET:
p.integralOffset = value;
break;
}
if (!this.isClosed()) this.pd().checkIntegral(this.parameters, "update");
}, "JSV.common.ScriptToken,~N");
Clazz.defineMethod(c$, "setYScale", 
function(value){
var tokens = JSV.common.ScriptToken.getTokens(value);
var pt = 0;
var isAll = false;
if (tokens.size() > 1 && tokens.get(0).equalsIgnoreCase("ALL")) {
isAll = true;
pt++;
}var y1 = Double.parseDouble(tokens.get(pt++));
var y2 = Double.parseDouble(tokens.get(pt));
if (isAll) {
var spec = this.pd().getSpectrum();
for (var i = this.panelNodes.size(); --i >= 0; ) {
var node = this.panelNodes.get(i);
if (node.source !== this.currentSource) continue;
if (JSV.common.Spectrum.areXScalesCompatible(spec, node.getSpectrum(), false, false)) node.pd().setZoom(0, y1, 0, y2);
}
} else {
this.pd().setZoom(0, y1, 0, y2);
}}, "~S");
Clazz.defineMethod(c$, "newStructToJmol", 
function(data){
JU.Logger.info("sending new structure to Jmol:\n" + data);
this.syncToJmol("struct:" + data);
}, "~S");
Clazz.defineMethod(c$, "sendPanelChange", 
function(){
var pd = this.pd();
var spec = pd.getSpectrum();
var pi = spec.getSelectedPeak();
if (pi == null) pi = spec.getModelPeakInfoForAutoSelectOnLoad();
if (pi == null) pi = spec.getBasePeakInfo();
pd.addPeakHighlight(pi);
JU.Logger.info(Thread.currentThread() + "JSViewer sendFrameChange " + this.selectedPanel);
this.notifyJmol(pi);
});
Clazz.defineMethod(c$, "getPropertyAsJavaObject", 
function(key){
var map =  new java.util.Hashtable();
if ("SOURCEID".equalsIgnoreCase(key)) {
map.put(key, (this.pd() == null ? "" : this.pd().getSpectrum().sourceID));
return map;
}if (key != null && key.startsWith("DATA_")) {
map.put(key, "" + JSV.common.JSVFileManager.cacheGet(key.substring(5)));
return map;
}var isAll = false;
if (key != null && key.toUpperCase().startsWith("ALL ") || "all".equalsIgnoreCase(key)) {
key = key.substring(3).trim();
isAll = true;
}if ("".equals(key)) key = null;
if ("NAMES".equalsIgnoreCase(key) || "KEYS".equalsIgnoreCase(key)) key = "";
var map0 = this.pd().getInfo(true, key);
if (!isAll && map0 != null) return map0;
if (map0 != null) map.put("current", map0);
var info =  new JU.Lst();
for (var i = 0; i < this.panelNodes.size(); i++) {
var jsvp = this.panelNodes.get(i).jsvp;
if (jsvp == null) continue;
info.addLast(this.panelNodes.get(i).getInfo(key));
}
map.put("items", info);
return map;
}, "~S");
Clazz.defineMethod(c$, "getCoordinate", 
function(){
if (!this.isClosed()) {
var coord = this.pd().getClickedCoordinate();
if (coord != null) return coord.getXVal() + " " + coord.getYVal();
}return "";
});
Clazz.defineMethod(c$, "fillSpecList", 
function(value, speclist, isView){
var prefix = "1.";
var list;
var list0 = null;
var isNone = (value.equalsIgnoreCase("NONE"));
if (isNone || value.equalsIgnoreCase("all")) value = "*";
if (value.indexOf("*") < 0) {
var tokens = value.$plit(" ");
var sb =  new JU.SB();
for (var i = 0; i < tokens.length; i++) {
var pt = tokens[i].indexOf('.');
if (pt != tokens[i].lastIndexOf('.')) tokens[i] = tokens[i].substring(0, pt + 1) + tokens[i].substring(pt + 1).$replace('.', '_');
sb.append(tokens[i]).append(" ");
}
value = sb.toString().trim();
}if (value.equals("*")) {
list = JSV.common.ScriptToken.getTokens(JSV.common.PanelNode.getSpectrumListAsString(this.panelNodes));
} else if (value.startsWith("\"") || value.startsWith("'")) {
list = JSV.common.ScriptToken.getTokens(value);
} else {
value = JU.PT.rep(value, "_", " _ ");
value = JU.PT.rep(value, "-", " - ");
list = JSV.common.ScriptToken.getTokens(value);
list0 = JSV.common.ScriptToken.getTokens(JSV.common.PanelNode.getSpectrumListAsString(this.panelNodes));
if (list0.size() == 0) return null;
}var id0 = (this.isClosed() ? prefix : JSV.common.PanelNode.findNode(this.selectedPanel, this.panelNodes).id);
id0 = id0.substring(0, id0.indexOf(".") + 1);
var sb =  new JU.SB();
var n = list.size();
var idLast = null;
for (var i = 0; i < n; i++) {
var id = list.get(i);
var userYFactor = NaN;
var isubspec = -1;
if (i + 1 < n && list.get(i + 1).equals("*")) {
i += 2;
userYFactor = Double.parseDouble(list.get(i));
} else if (i + 1 < n && list.get(i + 1).equals("_")) {
i += 2;
isubspec = Integer.parseInt(list.get(i));
}if (id.equals("-")) {
if (idLast == null) idLast = list0.get(0);
id = (i + 1 == n ? list0.get(list0.size() - 1) : list.get(++i));
if (!id.contains(".")) id = id0 + id;
var pt = 0;
while (pt < list0.size() && !list0.get(pt).equals(idLast)) pt++;

pt++;
while (pt < list0.size() && !idLast.equals(id)) {
var node = JSV.common.PanelNode.findNodeById((idLast = list0.get(pt++)), this.panelNodes);
speclist.addLast(node.pd().getSpectrumAt(0));
sb.append(",").append(idLast);
}
continue;
}var node;
if (id.startsWith("'") && id.endsWith("'")) id = "\"" + JU.PT.trim(id, "'") + "\"";
if (id.startsWith("\"")) {
id = JU.PT.trim(id, "\"");
var pn = this.panelNodes.size();
for (var j = 0; j < pn; j++) {
node = this.panelNodes.get(j);
if (node.fileName != null && node.fileName.startsWith(id) || node.frameTitle != null && node.frameTitle.startsWith(id)) {
this.addSpecToList(node.pd(), userYFactor, -1, speclist, isView);
sb.append(",").append(node.id);
}}
continue;
}if (!id.contains(".")) id = id0 + id;
node = JSV.common.PanelNode.findNodeById(id, this.panelNodes);
if (node == null) continue;
idLast = id;
this.addSpecToList(node.pd(), userYFactor, isubspec, speclist, isView);
sb.append(",").append(id);
if (isubspec > 0) sb.append(".").appendI(isubspec);
}
if (isView && speclist.size() > 0) {
var node = JSV.common.PanelNode.findNodeById(sb.substring(1), this.panelNodes);
if (node != null) {
this.setNode(node);
speclist.clear();
}}return (isNone ? "NONE" : sb.length() > 0 ? sb.toString().substring(1) : null);
}, "~S,JU.Lst,~B");
Clazz.defineMethod(c$, "addSpecToList", 
function(pd, userYFactor, isubspec, list, isView){
if (isView) {
var spec = pd.getSpectrumAt(0);
spec.setUserYFactor(Double.isNaN(userYFactor) ? 1 : userYFactor);
pd.addToList(isubspec - 1, list);
} else {
pd.selectFromEntireSet(isubspec - 1);
}}, "JSV.common.PanelData,~N,~N,JU.Lst,~B");
Clazz.defineMethod(c$, "getSolutionColor", 
function(asFitted){
var spectrum = this.pd().getSpectrum();
var vi = (spectrum.canShowSolutionColor() ? JSV.common.JSViewer.getInterface("JSV.common.Visible") : null);
return (vi == null ? -1 : vi.getColour(spectrum, asFitted));
}, "~B");
Clazz.defineMethod(c$, "openDataOrFile", 
function(data, name, specs, strUrl, firstSpec, lastSpec, isAppend, id){
if ("NONE".equals(name)) {
this.close("View*");
return 0;
}this.si.writeStatus("");
var filePath = null;
var newPath = null;
var fileName = null;
var isView = false;
if (strUrl != null && strUrl.startsWith("cache://")) {
{
data = Jmol.Cache.get(name = strUrl);
}}var file = null;
if (data != null) {
try {
fileName = name;
newPath = filePath = JSV.common.JSVFileManager.getFullPathName(name);
} catch (e) {
if (Clazz.exceptionOf(e,"JSV.exception.JSVException")){
} else {
throw e;
}
}
} else if (specs != null) {
isView = true;
newPath = fileName = filePath = "View" + (++this.nViews);
} else if (strUrl != null) {
try {
file = this.apiPlatform.newFile(strUrl);
var u =  new java.net.URL(JSV.common.JSVFileManager.appletDocumentBase, strUrl, null);
filePath = u.toString();
this.recentURL = filePath;
fileName = JSV.common.JSVFileManager.getTagName(filePath);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
fileName = file.getName();
newPath = filePath = file.getFullPath();
this.recentURL = null;
} else {
throw e;
}
}
}var pt = -1;
if ((pt = JSV.common.PanelNode.isOpen(this.panelNodes, filePath)) >= 0 || (pt = JSV.common.PanelNode.isOpen(this.panelNodes, strUrl)) >= 0) {
if (isView) {
--this.nViews;
this.setNode(this.panelNodes.get(pt));
} else {
this.si.writeStatus(filePath + " is already open");
}return -1;
}if (!isAppend && !isView) this.close("all");
this.si.setCursor(3);
try {
this.si.siSetCurrentSource(isView ? JSV.source.JDXSource.createView(specs) : JSV.source.JDXReader.createJDXSource(file, data, filePath, this.obscureTitleFromUser === Boolean.TRUE, this.loadImaginary, firstSpec, lastSpec, this.nmrMaxY));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
{
alert(e.toString())
}this.si.setCursor(0);
if (this.isApplet) {
this.selectedPanel.showMessage(e.toString(), "Error Opening File");
}return -3;
} else {
throw e;
}
}
this.si.setCursor(0);
System.gc();
if (newPath == null) {
newPath = this.currentSource.getFilePath();
if (newPath != null) fileName = newPath.substring(newPath.lastIndexOf("/") + 1);
} else {
this.currentSource.setFilePath(newPath);
}if (id == null && !isView) id = newPath;
if (id != null) this.currentSource.setID(id);
this.si.siSetLoaded(fileName, newPath);
var spec = this.currentSource.getJDXSpectrum(0);
if (spec == null) {
return -4;
}specs = this.currentSource.getSpectra();
JSV.common.Spectrum.process(specs, this.irMode);
var autoOverlay = this.interfaceOverlaid || spec.isAutoOverlayFromJmolClick();
var combine = isView || autoOverlay && this.currentSource.isCompoundSource;
if (combine) {
this.combineSpectra((isView ? strUrl : null));
} else {
this.splitSpectra();
}this.pd().setTaintedAll();
if (!isView) this.si.siUpdateRecentMenus(filePath);
return 0;
}, "~O,~S,JU.Lst,~S,~N,~N,~B,~S");
Clazz.defineMethod(c$, "close", 
function(value){
var n0 = 0;
var pt = (value == null ? -2 : value.indexOf(">"));
if (pt > 0) {
n0 = JU.PT.parseInt(value.substring(pt + 1).trim());
value = value.substring(0, pt).trim();
}if ("*".equals(value)) value = "all";
var isAll = (value === "all");
if (value == null || n0 == 0 && value.equalsIgnoreCase("all")) {
this.closeSource(null);
return;
}var isViews = value.equalsIgnoreCase("views");
var list =  new JU.Lst();
var source;
value = value.$replace('\\', '/');
var n = this.panelNodes.size();
var nMax = n - n0;
if (value.endsWith("*")) {
value = value.substring(0, value.length - 1);
for (var i = n; --i >= 0; ) if (this.panelNodes.get(i).fileName.startsWith(value)) list.addLast(this.panelNodes.get(i).source);

} else if (value.equalsIgnoreCase("selected")) {
var lastSource = null;
for (var i = n; --i >= 0; ) {
source = this.panelNodes.get(i).source;
if (this.panelNodes.get(i).isSelected && (lastSource == null || lastSource !== source)) list.addLast(source);
lastSource = source;
}
} else if (isAll || isViews || value.equalsIgnoreCase("simulations")) {
for (var n1 = 0, i = n; --i >= 0 && n1 < nMax; ) if (isAll ? true : isViews ? this.panelNodes.get(i).isView : this.panelNodes.get(i).isSimulation) {
list.addLast(this.panelNodes.get(i).source);
n1++;
}
} else {
source = (value.length == 0 ? this.currentSource : JSV.common.PanelNode.findSourceByNameOrId(value, this.panelNodes));
if (source != null) list.addLast(source);
}for (var i = list.size(); --i >= 0; ) this.closeSource(list.get(i));

if (this.selectedPanel == null && this.panelNodes.size() > 0) this.si.siSetSelectedPanel(JSV.common.PanelNode.getLastFileFirstNode(this.panelNodes));
}, "~S");
Clazz.defineMethod(c$, "execLoad", 
function(value, script){
var applet = this.html5Applet;
var isID = false;
if (isID) {
applet._search(value);
return;
}var tokens = JSV.common.ScriptToken.getTokens(value);
var filename = tokens.get(0);
var id = null;
var pt = 0;
if (filename.equalsIgnoreCase("ID")) {
id = JU.PT.trimQuotes(tokens.get(1));
filename = tokens.get(2);
pt = 2;
}var isAppend = filename.equalsIgnoreCase("APPEND");
if (isAppend) {
pt++;
if (pt > 0) filename = tokens.get(pt);
}var isCheck = filename.equalsIgnoreCase("CHECK");
if (isCheck) pt++;
if (pt > 0) filename = tokens.get(pt);
if (script == null) script = this.defaultLoadScript;
if (filename.equals("?")) {
this.openFileFromDialog(isAppend, false, null, script);
return;
}if (filename.equals("http://?")) {
this.openFileFromDialog(isAppend, true, null, null);
return;
}if (filename.equals("$?") || filename.equals("$H1?")) {
this.openFileFromDialog(isAppend, true, "H1", null);
return;
}if (filename.equals("$C13?")) {
this.openFileFromDialog(isAppend, true, "C13", null);
return;
}var isH1 = filename.equalsIgnoreCase("MOL") || filename.equalsIgnoreCase("H1");
var isC13 = filename.equalsIgnoreCase("C13");
if (isH1 || isC13) filename = "http://SIMULATION/" + (isH1 ? "H1/" : "C13/") + "MOL=" + JU.PT.trimQuotes(tokens.get(++pt));
if (!isCheck && !isAppend) {
if (filename.equals("\"\"") && this.currentSource != null) filename = this.currentSource.getFilePath();
this.close("all");
}filename = JU.PT.trimQuotes(filename);
var isSimulation = filename.startsWith("$");
if (isSimulation) {
if (!filename.startsWith("$H1") && !filename.startsWith("$C13")) filename = "$H1/" + filename.substring(1);
filename = "http://SIMULATION/" + filename.substring(1);
}var firstSpec = (pt + 1 < tokens.size() ? Integer.$valueOf(tokens.get(++pt)).intValue() : -1);
var lastSpec = (pt + 1 < tokens.size() ? Integer.$valueOf(tokens.get(++pt)).intValue() : firstSpec);
this.si.siOpenDataOrFile(null, null, null, filename, firstSpec, lastSpec, isAppend, script, id);
if (isSimulation) {
this.close("views");
this.execView("*", true);
}}, "~S,~S");
Clazz.defineMethod(c$, "combineSpectra", 
function(name){
var source = this.currentSource;
var specs = source.getSpectra();
var haveSimulation = false;
for (var i = specs.size(); --i >= 0; ) if (specs.get(i).isSimulation) {
haveSimulation = true;
break;
}
var jsvp = this.si.siGetNewJSVPanel2(specs);
jsvp.setTitle(source.getTitle());
if (jsvp.getTitle().equals("")) {
jsvp.getPanelData().setViewTitle("");
jsvp.setTitle(name);
}this.si.siSetPropertiesFromPreferences(jsvp, true);
this.spectraTree.createTree(++this.fileCount, source,  Clazz.newArray(-1, [jsvp])).getPanelNode().isView = true;
var node = JSV.common.PanelNode.findNode(this.selectedPanel, this.panelNodes);
node.setFrameTitle(name);
node.isView = true;
if (this.autoShowLegend && this.pd().getNumberOfGraphSets() == 1) node.setLegend(this.getDialog(JSV.common.Annotation.AType.OverlayLegend, null));
this.si.siSetMenuEnables(node, false);
if (haveSimulation) this.pd().splitStack(true);
}, "~S");
Clazz.defineMethod(c$, "closeSource", 
function(source){
var rootNode = this.spectraTree.getRootNode();
var fileName = (source == null ? null : source.getFilePath());
var toDelete =  new JU.Lst();
var enume = rootNode.children();
while (enume.hasMoreElements()) {
var node = enume.nextElement();
if (fileName == null || node.getPanelNode().source.matchesFilePath(fileName)) {
JU.Logger.info("Closing " + node.getPanelNode().source.getFilePath());
for (var e = node.children(); e.hasMoreElements(); ) {
var childNode = e.nextElement();
toDelete.addLast(childNode);
this.panelNodes.removeObj(childNode.getPanelNode());
}
toDelete.addLast(node);
if (fileName != null) break;
}}
this.spectraTree.deleteNodes(toDelete);
if (source == null) {
if (this.currentSource != null) this.currentSource.dispose();
this.currentSource = null;
if (this.selectedPanel != null) this.selectedPanel.dispose();
} else {
}if (this.currentSource === source) {
this.si.siSetSelectedPanel(null);
this.si.siSetCurrentSource(null);
}var max = 0;
for (var i = 0; i < this.panelNodes.size(); i++) {
var f = JU.PT.parseFloat(this.panelNodes.get(i).id);
if (f >= max + 1) max = Clazz.doubleToInt(Math.floor(f));
}
this.fileCount = max;
System.gc();
if (JU.Logger.debugging) JU.Logger.checkMemory();
this.si.siSourceClosed(source);
}, "JSV.source.JDXSource");
Clazz.defineMethod(c$, "setFrameAndTreeNode", 
function(i){
if (this.panelNodes == null || i < 0 || i >= this.panelNodes.size()) return;
this.setNode(this.panelNodes.get(i));
}, "~N");
Clazz.defineMethod(c$, "selectFrameNode", 
function(jsvp){
var node = JSV.common.PanelNode.findNode(jsvp, this.panelNodes);
if (node == null) return null;
this.spectraTree.setPath(this.spectraTree.newTreePath(node.treeNode.getPath()));
return node;
}, "JSV.api.JSVPanel");
Clazz.defineMethod(c$, "setSpectrum", 
function(value){
if (value.indexOf('.') >= 0) {
var node = JSV.common.PanelNode.findNodeById(value, this.panelNodes);
if (node == null) return false;
this.setNode(node);
} else {
var n = JU.PT.parseInt(value);
if (n <= 0) {
this.checkOverlay();
return false;
}this.setFrameAndTreeNode(n - 1);
}return true;
}, "~S");
Clazz.defineMethod(c$, "splitSpectra", 
function(){
var source = this.currentSource;
var specs = source.getSpectra();
var panels =  new Array(specs.size());
var jsvp = null;
for (var i = 0; i < specs.size(); i++) {
var spec = specs.get(i);
jsvp = this.si.siGetNewJSVPanel(spec);
this.si.siSetPropertiesFromPreferences(jsvp, true);
panels[i] = jsvp;
}
this.spectraTree.createTree(++this.fileCount, source, panels);
this.si.siGetNewJSVPanel(null);
var node = JSV.common.PanelNode.findNode(this.selectedPanel, this.panelNodes);
this.si.siSetMenuEnables(node, true);
});
Clazz.defineMethod(c$, "selectedTreeNode", 
function(node){
if (node == null) {
return;
}if (node.isLeaf()) {
this.setNode(node.getPanelNode());
} else {
System.out.println("not a leaf");
}this.si.siSetCurrentSource(node.getPanelNode().source);
}, "JSV.api.JSVTreeNode");
Clazz.defineMethod(c$, "dispose", 
function(){
this.fileHelper = null;
if (this.viewDialog != null) this.viewDialog.dispose();
this.viewDialog = null;
if (this.overlayLegendDialog != null) this.overlayLegendDialog.dispose();
this.overlayLegendDialog = null;
if (this.jsvpPopupMenu != null) {
this.jsvpPopupMenu.jpiDispose();
this.jsvpPopupMenu = null;
}if (this.panelNodes != null) for (var i = this.panelNodes.size(); --i >= 0; ) {
this.panelNodes.get(i).dispose();
this.panelNodes.removeItemAt(i);
}
});
Clazz.defineMethod(c$, "runScript", 
function(script){
if (this.scriptQueue == null) this.si.siProcessCommand(script);
 else this.scriptQueue.addLast(script);
}, "~S");
Clazz.defineMethod(c$, "requestRepaint", 
function(){
if (this.selectedPanel != null) this.repaintManager.refresh();
});
Clazz.defineMethod(c$, "repaintDone", 
function(){
this.repaintManager.repaintDone();
});
Clazz.defineMethod(c$, "checkOverlay", 
function(){
if (this.mainPanel != null) this.markSelectedPanels(this.panelNodes, this.mainPanel.getCurrentPanelIndex());
this.viewDialog = this.getDialog(JSV.common.Annotation.AType.Views, null);
});
Clazz.defineMethod(c$, "markSelectedPanels", 
function(panelNodes, ip){
for (var i = panelNodes.size(); --i >= 0; ) panelNodes.get(i).isSelected = (ip == i);

}, "JU.Lst,~N");
Clazz.defineMethod(c$, "execOverlayOffsetY", 
function(offset){
if (offset == -2147483648) {
if (this.selectedPanel == null) return;
var soffset = this.selectedPanel.getInput("Enter a vertical offset in percent for stacked plots", "Overlay", "" + this.recentStackPercent);
var f = JU.PT.parseFloat(soffset);
if (Float.isNaN(f)) return;
offset = Clazz.floatToInt(f);
}this.recentStackPercent = offset;
this.parameters.viewOffset = offset;
if (this.isClosed()) this.pd().setYStackOffsetPercent(offset);
}, "~N");
Clazz.defineMethod(c$, "execScriptInline", 
function(script){
if (script.length > 0) script = script.substring(6).trim();
if (script.length == 0) script = this.selectedPanel.getInput("Enter a JSpecView script", "Script", this.recentScript);
if (script == null) return;
this.recentScript = script;
this.runScriptNow(script);
}, "~S");
Clazz.defineMethod(c$, "setDisplay", 
function(canvas){
this.apiPlatform.setViewer(this, this.display = canvas);
var wh =  Clazz.newIntArray (2, 0);
this.apiPlatform.getFullScreenDimensions(canvas, wh);
this.setScreenDimension(wh[0], wh[1]);
}, "~O");
Clazz.defineMethod(c$, "setScreenDimension", 
function(width, height){
height = Math.min(height, this.maximumSize);
width = Math.min(width, this.maximumSize);
if (this.screenWidth == width && this.screenHeight == height) return;
this.resizeImage(width, height);
}, "~N,~N");
Clazz.defineMethod(c$, "resizeImage", 
function(width, height){
if (width > 0) {
this.screenWidth = width;
this.screenHeight = height;
} else {
width = (this.screenWidth == 0 ? this.screenWidth = 500 : this.screenWidth);
height = (this.screenHeight == 0 ? this.screenHeight = 500 : this.screenHeight);
}this.g2d.setWindowParameters(width, height);
}, "~N,~N");
Clazz.defineMethod(c$, "updateJS", 
function(){
if (this.selectedPanel != null) this.selectedPanel.paintComponent(this.apiPlatform.getGraphics(null));
});
Clazz.defineMethod(c$, "processMouseEvent", 
function(id, x, y, modifiers, time){
return (this.selectedPanel != null && this.selectedPanel.processMouseEvent(id, x, y, modifiers, time));
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod(c$, "processTwoPointGesture", 
function(touches){
if (!this.isClosed()) this.selectedPanel.processTwoPointGesture(touches);
}, "~A");
Clazz.defineMethod(c$, "processKeyEvent", 
function(event){
if (!this.isClosed()) this.selectedPanel.processKeyEvent(event);
}, "~O");
Clazz.defineMethod(c$, "getApplet", 
function(){
return this.html5Applet;
});
Clazz.defineMethod(c$, "openFileAsyncSpecial", 
function(fileName, flags){
var ans = (this.currentSource == null ? "NO" : this.getDialogManager().getDialogInput(this, "Do you want to append this file? (Answer NO to replace.)", "Drag/Drop Action", 3, null, null, "YES"));
if (ans == null) return;
var pre = (ans.toLowerCase().startsWith("y") ? "append" : "");
var post = (pre === "" ? "" : "; view *");
this.runScript("load " + pre + " \"" + fileName + "\"" + post);
}, "~S,~N");
Clazz.defineMethod(c$, "getHeight", 
function(){
return this.screenHeight;
});
Clazz.defineMethod(c$, "getWidth", 
function(){
return this.screenWidth;
});
Clazz.defineMethod(c$, "getPlatformInterface", 
function(type){
return JSV.common.JSViewer.getInterface("JSV." + (JSV.common.JSViewer.isJS ? "js2d.Js" : "java.Awt") + type);
}, "~S");
Clazz.defineMethod(c$, "getDialogManager", 
function(){
if (this.dialogManager != null) return this.dialogManager;
this.dialogManager = this.getPlatformInterface("DialogManager");
return this.dialogManager.set(this);
});
Clazz.defineMethod(c$, "getDialog", 
function(type, spec){
var root = "JSV.dialog.";
switch (type) {
case JSV.common.Annotation.AType.Integration:
return (JSV.common.JSViewer.getInterface(root + "IntegrationDialog")).setParams("Integration for " + spec, this, spec);
case JSV.common.Annotation.AType.Measurements:
return (JSV.common.JSViewer.getInterface(root + "MeasurementsDialog")).setParams("Measurements for " + spec, this, spec);
case JSV.common.Annotation.AType.PeakList:
return (JSV.common.JSViewer.getInterface(root + "PeakListDialog")).setParams("Peak List for " + spec, this, spec);
case JSV.common.Annotation.AType.OverlayLegend:
return this.overlayLegendDialog = (JSV.common.JSViewer.getInterface(root + "OverlayLegendDialog")).setParams(this.pd().getViewTitle(), this, null);
case JSV.common.Annotation.AType.Views:
return this.viewDialog = (JSV.common.JSViewer.getInterface(root + "ViewsDialog")).setParams("View/Combine/Close Spectra", this, null);
default:
return null;
}
}, "JSV.common.Annotation.AType,JSV.common.Spectrum");
Clazz.defineMethod(c$, "show", 
function(what){
this.getDialogManager();
if (what.equals("properties")) {
this.dialogManager.showProperties(null, this.pd().getSpectrum());
} else if (what.equals("errors")) {
this.dialogManager.showSourceErrors(null, this.currentSource);
} else if (what.equals("source")) {
if (this.currentSource == null) {
if (this.panelNodes.size() > 0) this.dialogManager.showMessageDialog(null, "Please Select a Spectrum", "Select Spectrum", 0);
return;
}this.dialogManager.showSource(this, this.pd().getSpectrum());
} else if (what.startsWith("solutioncolorfill")) {
if (what.indexOf("all") >= 0) {
for (var i = this.panelNodes.size(); --i >= 0; ) this.panelNodes.get(i).pd().setSolutionColor(what);

} else {
this.pd().setSolutionColor(what);
}} else if (what.startsWith("solutioncolor")) {
var msg = this.getSolutionColorStr(what.indexOf("false") < 0);
msg = "background-color:rgb(" + msg + ")'><br />Predicted Solution Colour- RGB(" + msg + ")<br /><br />";
if (JSV.common.JSViewer.isJS) {
this.dialogManager.showMessage(this, "<div style='width:100%;height:100%;" + msg + "</div>", "Predicted Colour");
} else {
this.selectedPanel.showMessage("<html><body style='" + msg + "</body></html>", "Predicted Colour");
}}}, "~S");
Clazz.defineMethod(c$, "getPrintLayout", 
function(isJob){
if (!JSV.common.JSViewer.isJS && this.hasDisplay) try {
var pl = (this.getPlatformInterface("PrintDialog")).set(this.parentFrame, this.lastPrintLayout, isJob).getPrintLayout();
if (pl != null) this.lastPrintLayout = pl;
return pl;
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
return  new JSV.common.PrintLayout(this.pd());
}, "~B");
Clazz.defineMethod(c$, "setIRmode", 
function(mode){
if (mode.equals("AtoT")) {
this.irMode = JSV.common.Spectrum.IRMode.TO_TRANS;
} else if (mode.equals("TtoA")) {
this.irMode = JSV.common.Spectrum.IRMode.TO_ABS;
} else {
this.irMode = JSV.common.Spectrum.IRMode.getMode(mode);
}}, "~S");
Clazz.defineMethod(c$, "getOptionFromDialog", 
function(items, title, label){
return this.getDialogManager().getOptionFromDialog(null, items, this.selectedPanel, title, label);
}, "~A,~S,~S");
Clazz.defineMethod(c$, "print", 
function(fileName){
return this.execWrite("PDF \"" + fileName + "\"");
}, "~S");
Clazz.defineMethod(c$, "execWrite", 
function(value){
if (JSV.common.JSViewer.isJS && value == null) value = "PDF";
var msg = (JSV.common.JSViewer.getInterface("JSV.export.Exporter")).write(this, value == null ? null : JSV.common.ScriptToken.getTokens(value), false);
this.si.writeStatus(msg);
return msg;
}, "~S");
Clazz.defineMethod(c$, "$export", 
function(type, n){
if (type == null) type = "XY";
var pd = this.pd();
var nMax = pd.getNumberOfSpectraInCurrentSet();
if (n < -1 || n >= nMax) return "Maximum spectrum index (0-based) is " + (nMax - 1) + ".";
var spec = (n < 0 ? pd.getSpectrum() : pd.getSpectrumAt(n));
try {
return (JSV.common.JSViewer.getInterface("JSV.export.Exporter")).exportTheSpectrum(this, JSV.common.ExportType.getType(type), null, spec, 0, spec.getXYCoords().length - 1, null, type.equalsIgnoreCase("PDF"));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
JU.Logger.error(e.toString());
return null;
} else {
throw e;
}
}
}, "~S,~N");
Clazz.overrideMethod(c$, "postByteArray", 
function(fileName, bytes){
return JSV.common.JSVFileManager.postByteArray(fileName, bytes);
}, "~S,~A");
Clazz.defineMethod(c$, "getOutputChannel", 
function(fileName, isBinary){
var os = null;
{
while (fileName.startsWith("/")) fileName =
fileName.substring(1);
}return  new JU.OC().setParams(this, fileName, !isBinary, os);
}, "~S,~B");
c$.getInterface = Clazz.defineMethod(c$, "getInterface", 
function(name){
try {
var x = Clazz._4Name(name);
return (x == null ? null : x.newInstance());
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
JU.Logger.error("Interface.java Error creating instance for " + name + ": \n" + e);
return null;
} else {
throw e;
}
}
}, "~S");
Clazz.defineMethod(c$, "showMessage", 
function(msg){
if (this.selectedPanel != null && msg != null) this.selectedPanel.showMessage(msg, null);
}, "~S");
Clazz.defineMethod(c$, "openFileFromDialog", 
function(isAppend, isURL, simulationType, script){
var url = null;
if (simulationType != null) {
url = this.fileHelper.getUrlFromDialog("Enter the name or identifier of a compound", this.recentSimulation);
if (url == null) return false;
this.recentSimulation = url;
if (url.equals("<this structure>")) {
if (this.isEmbedded) {
this.syncToJmol("sync . \"" + simulationType + "Simulate:\";");
return true;
}return false;
}url = "$" + simulationType + "/" + url;
} else if (isURL) {
url = this.fileHelper.getUrlFromDialog("Enter the URL of a JCAMP-DX File", this.recentURL == null ? this.recentOpenURL : this.recentURL);
if (url == null) return false;
this.recentOpenURL = url;
} else {
var userData =  Clazz.newArray(-1, [Boolean.$valueOf(isAppend), script]);
var file = (this.hasDisplay ? this.fileHelper.showFileOpenDialog(this.mainPanel, userData) : null);
if (file != null) url = file.getFullPath();
}if (url != null) {
this.runScriptNow("load " + (isAppend ? "APPEND " : "") + "\"" + url + "\"" + (script == null ? "" : ";" + script));
return true;
}return false;
}, "~B,~B,~S,~S");
Clazz.defineMethod(c$, "openFile", 
function(fileName, closeFirst){
if (closeFirst && this.panelNodes != null) {
var source = JSV.common.PanelNode.findSourceByNameOrId(( new java.io.File(fileName)).getAbsolutePath(), this.panelNodes);
if (source != null) this.closeSource(source);
}this.si.siOpenDataOrFile(null, null, null, fileName, -1, -1, true, this.defaultLoadScript, null);
}, "~S,~B");
Clazz.defineMethod(c$, "selectPanel", 
function(jsvp, panelNodes){
var iPanel = -1;
if (panelNodes != null) {
for (var i = panelNodes.size(); --i >= 0; ) {
var j = panelNodes.get(i).jsvp;
if (j === jsvp) {
iPanel = i;
} else {
j.setEnabled(false);
j.setFocusable(false);
j.getPanelData().closeAllDialogsExcept(JSV.common.Annotation.AType.NONE);
}}
this.markSelectedPanels(panelNodes, iPanel);
this.selectedPanel = jsvp;
if (jsvp != null) jsvp.getPanelData().clearMouseSet(null);
}return iPanel;
}, "JSV.api.JSVPanel,JU.Lst");
Clazz.defineMethod(c$, "checkAutoIntegrate", 
function(){
if (this.autoIntegrate) this.pd().integrateAll(this.parameters);
});
Clazz.defineMethod(c$, "parseInitScript", 
function(params){
if (params == null) params = "";
var allParamTokens =  new JSV.common.ScriptTokenizer(params, true);
if (JU.Logger.debugging) {
JU.Logger.info("Running in DEBUG mode");
}while (allParamTokens.hasMoreTokens()) {
var token = allParamTokens.nextToken();
var eachParam =  new JSV.common.ScriptTokenizer(token, false);
var key = eachParam.nextToken();
if (key.equalsIgnoreCase("SET")) key = eachParam.nextToken();
key = key.toUpperCase();
var st = JSV.common.ScriptToken.getScriptToken(key);
var value = JSV.common.ScriptToken.getValue(st, eachParam, token);
JU.Logger.info("KEY-> " + key + " VALUE-> " + value + " : " + st);
try {
switch (st) {
default:
this.parameters.set(null, st, value);
break;
case JSV.common.ScriptToken.UNKNOWN:
break;
case JSV.common.ScriptToken.APPLETID:
this.fullName = this.appletName + "__" + (this.appletName = value) + "__";
var applet = null;
{
self.Jmol && (applet = Jmol._applets[value]);
}this.html5Applet = applet;
break;
case JSV.common.ScriptToken.AUTOINTEGRATE:
this.autoIntegrate = JSV.common.Parameters.isTrue(value);
break;
case JSV.common.ScriptToken.COMPOUNDMENUON:
break;
case JSV.common.ScriptToken.APPLETREADYCALLBACKFUNCTIONNAME:
case JSV.common.ScriptToken.COORDCALLBACKFUNCTIONNAME:
case JSV.common.ScriptToken.LOADFILECALLBACKFUNCTIONNAME:
case JSV.common.ScriptToken.PEAKCALLBACKFUNCTIONNAME:
case JSV.common.ScriptToken.SYNCCALLBACKFUNCTIONNAME:
this.si.siExecSetCallback(st, value);
break;
case JSV.common.ScriptToken.ENDINDEX:
this.initialEndIndex = Integer.parseInt(value);
break;
case JSV.common.ScriptToken.INTERFACE:
this.checkOvelayInterface(value);
break;
case JSV.common.ScriptToken.IRMODE:
this.setIRmode(value);
break;
case JSV.common.ScriptToken.MENUON:
this.allowMenu = Boolean.parseBoolean(value);
break;
case JSV.common.ScriptToken.OBSCURE:
if (this.obscureTitleFromUser == null) this.obscureTitleFromUser = Boolean.$valueOf(value);
break;
case JSV.common.ScriptToken.STARTINDEX:
this.initialStartIndex = Integer.parseInt(value);
break;
case JSV.common.ScriptToken.SYNCID:
this.fullName = this.appletName + "__" + (this.syncID = value) + "__";
break;
}
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}
}, "~S");
Clazz.defineMethod(c$, "getSolutionColorStr", 
function(asFit){
var pt = JU.CU.colorPtFromInt(this.getSolutionColor(asFit), null);
return Clazz.floatToInt(pt.x) + "," + Clazz.floatToInt(pt.y) + "," + Clazz.floatToInt(pt.z);
}, "~B");
Clazz.defineMethod(c$, "checkCommandLineForTip", 
function(c, cmd, oneLineOnly){
var isHelp = (c == '\1');
if (!isHelp && c != '\0') {
if (c != '\t' && (c == '\n' || c.charCodeAt(0) < 32 || c.charCodeAt(0) > 126)) return null;
cmd += (Character.isISOControl(c) ? "" : "" + c);
}var tip;
if (cmd.indexOf(";") >= 0) cmd = cmd.substring(cmd.lastIndexOf(";") + 1);
var ret = null;
while (cmd.startsWith(" ")) cmd = cmd.substring(1);

if (cmd.length == 0 && !isHelp) {
tip = "";
} else {
var tokens = JSV.common.ScriptToken.getTokens(cmd);
if (tokens.size() == 0 && !isHelp) return "";
var isExact = (cmd.endsWith(" ") || tokens.size() > 1 && oneLineOnly);
var list = JSV.common.ScriptToken.getScriptTokenList(tokens.size() == 0 ? null : tokens.get(0), isExact);
switch (list.size()) {
case 0:
tip = "?";
break;
case 1:
var st = list.get(0);
tip = st.getTip();
try {
if (tip.indexOf("TRUE") >= 0) tip = " (" + this.parameters.getBoolean(st) + ")";
 else if (st.name().indexOf("COLOR") >= 0) tip = " (" + JU.CU.toRGBHexString(this.parameters.getElementColor(st)) + ")";
 else tip = "";
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return null;
} else {
throw e;
}
}
if (c == '\t' || isExact || !oneLineOnly) {
tip = st.name() + " " + st.getTip() + tip + " " + st.getDescription();
if (c == '\t') ret = st.name() + " ";
break;
}tip = st.name() + " " + tip;
break;
default:
tip = JSV.common.ScriptToken.getNameList(list);
}
}if (oneLineOnly) {
this.si.writeStatus(tip);
} else {
ret = tip;
}return ret;
}, "~S,~S,~B");
Clazz.defineMethod(c$, "checkScript", 
function(script){
return this.checkCommandLineForTip('\0', script, false);
}, "~S");
Clazz.defineMethod(c$, "execHelp", 
function(value){
var s = this.checkCommandLineForTip('\1', value, false);
if (s.indexOf(" ") < 0 && s.indexOf(",") > 0) {
var tokens = JU.PT.split(s, ",");
java.util.Arrays.sort(tokens);
s = "";
for (var i = 0; i < tokens.length; i++) {
var st = JSV.common.ScriptToken.getScriptToken(tokens[i]);
s += tokens[i] + " " + st.getTip() + "\n  " + st.getDescription() + "\n\n";
}
this.getDialogManager().showMessage(null, s, "HELP " + value);
} else {
this.selectedPanel.showMessage(s, "Help " + value);
}System.out.println(s);
}, "~S");
Clazz.defineMethod(c$, "setRecentSimulation", 
function(name){
if (name == null) name = "<this structure>";
this.recentSimulation = name;
}, "~S");
Clazz.defineMethod(c$, "setCreatingImage", 
function(isSaving){
this.pd().creatingImage = isSaving;
}, "~B");
Clazz.defineMethod(c$, "checkFileAlreadyLoaded", 
function(fileName){
if (this.isClosed()) return false;
if (this.pd().hasFileLoaded(fileName)) return true;
for (var i = this.panelNodes.size(); --i >= 0; ) if (this.panelNodes.get(i).pd().hasFileLoaded(fileName)) {
this.si.siSetSelectedPanel(this.panelNodes.get(i).jsvp);
return true;
}
return false;
}, "~S");
Clazz.defineMethod(c$, "advanceSpectrumBy", 
function(n){
var i = this.panelNodes.size();
for (; --i >= 0; ) if (this.panelNodes.get(i).jsvp === this.selectedPanel) break;

this.setFrameAndTreeNode(i + n);
this.selectedPanel.getFocusNow(false);
}, "~N");
Clazz.defineMethod(c$, "processPeakPickEvent", 
function(eventObj, isApp){
var pi;
if (Clazz.instanceOf(eventObj,"JSV.common.PeakInfo")) {
pi = eventObj;
var pi2 = this.pd().findMatchingPeakInfo(pi);
if (pi2 == null) {
if (!"ALL".equals(pi.getTitle())) return;
var node = null;
for (var i = 0; i < this.panelNodes.size(); i++) if ((pi2 = this.panelNodes.get(i).pd().findMatchingPeakInfo(pi)) != null) {
node = this.panelNodes.get(i);
break;
}
if (node == null) return;
this.setNode(node);
}pi = pi2;
} else {
var e = (eventObj);
this.si.siSetSelectedPanel(e.getSource());
pi = e.getPeakInfo();
}this.pd().addPeakHighlight(pi);
this.notifyJmol(pi);
if (pi.isClearAll()) this.repaint(false);
 else this.pd().selectSpectrum(pi.getFilePath(), pi.getType(), pi.getModel(), true);
this.si.siCheckCallbacks(pi.getTitle());
}, "~O,~B");
Clazz.defineMethod(c$, "syncScript", 
function(peakScript){
JSV.common.SyncManager.syncFromJmol(this, peakScript);
}, "~S");
Clazz.defineMethod(c$, "syncToJmol", 
function(msg){
this.si.syncToJmol(msg);
}, "~S");
Clazz.defineMethod(c$, "notifyJmol", 
function(pi){
this.repaint(true);
JSV.common.SyncManager.syncToJmol(this, pi);
}, "JSV.common.PeakInfo");
c$.isJS = false;
c$.isSwingJS = false;
c$.jsmolObject = null;
});
;//5.0.1-v7 Tue Oct 20 20:01:41 CDT 2026

Clazz.declarePackage("javajs.api");
Clazz.declareInterface(javajs.api, "BytePoster");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.declareInterface(J.api, "PlatformViewer");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["java.lang.Enum", "JSV.source.JDXDataObject", "JU.Lst"], "JSV.common.Spectrum", ["java.util.Hashtable", "JU.PT", "JSV.common.Coordinate", "$.Parameters", "$.PeakInfo", "JSV.source.JDXSourceStreamTokenizer", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.id = "";
this.fillColor = null;
this.subSpectra = null;
this.peakList = null;
this.peakXLabel = null;
this.peakYLabel = null;
this.selectedPeak = null;
this.highlightedPeak = null;
this.convertedSpectrum = null;
this.specShift = 0;
this.userYFactor = 1;
this.currentSubSpectrumIndex = 0;
this.$isForcedSubset = false;
this.exportXAxisLeftToRight = false;
this.titleLabel = null;
Clazz.instantialize(this, arguments);}, JSV.common, "Spectrum", JSV.source.JDXDataObject);
Clazz.prepareFields (c$, function(){
this.peakList =  new JU.Lst();
});
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, JSV.common.Spectrum, []);
this.headerTable =  new JU.Lst();
this.xyCoords =  new Array(0);
this.parent = this;
});
Clazz.defineMethod(c$, "dispose", 
function(){
});
Clazz.defineMethod(c$, "isForcedSubset", 
function(){
return this.$isForcedSubset;
});
Clazz.defineMethod(c$, "setId", 
function(id){
this.id = id;
}, "~S");
Clazz.defineMethod(c$, "copy", 
function(){
var newSpectrum =  new JSV.common.Spectrum();
this.copyTo(newSpectrum);
newSpectrum.setPeakList(this.peakList, this.peakXLabel, null);
newSpectrum.fillColor = this.fillColor;
return newSpectrum;
});
Clazz.defineMethod(c$, "getXYCoords", 
function(){
return this.getCurrentSubSpectrum().xyCoords;
});
Clazz.defineMethod(c$, "getPeakList", 
function(){
return this.peakList;
});
Clazz.defineMethod(c$, "setPeakList", 
function(list, peakXLabel, peakYLabel){
this.peakList = list;
this.peakXLabel = peakXLabel;
this.peakYLabel = peakYLabel;
for (var i = list.size(); --i >= 0; ) this.peakList.get(i).spectrum = this;

if (JU.Logger.debugging) JU.Logger.info("Spectrum " + this.getTitle() + " peaks: " + list.size());
return list.size();
}, "JU.Lst,~S,~S");
Clazz.defineMethod(c$, "selectPeakByFileIndex", 
function(filePath, index, atomKey){
if (this.peakList != null && this.peakList.size() > 0 && (atomKey == null || this.sourceID.equals(index))) for (var i = 0; i < this.peakList.size(); i++) if (this.peakList.get(i).checkFileIndex(filePath, index, atomKey)) {
System.out.println("JSV.Spectrum selecting peak by FileIndex " + this + " " + this.peakList.get(i));
return (this.selectedPeak = this.peakList.get(i));
}
return null;
}, "~S,~S,~S");
Clazz.defineMethod(c$, "selectPeakByFilePathTypeModel", 
function(filePath, type, model){
if (this.peakList != null && this.peakList.size() > 0) for (var i = 0; i < this.peakList.size(); i++) if (this.peakList.get(i).checkFileTypeModel(filePath, type, model)) {
System.out.println("JSV.Spectrum selecting peak byFilePathTypeModel " + this + " " + this.peakList.get(i));
return (this.selectedPeak = this.peakList.get(i));
}
return null;
}, "~S,~S,~S");
Clazz.defineMethod(c$, "matchesPeakTypeModel", 
function(type, model){
if (type.equals("ID")) return (this.sourceID.equalsIgnoreCase(model));
if (this.peakList != null && this.peakList.size() > 0) for (var i = 0; i < this.peakList.size(); i++) if (this.peakList.get(i).checkTypeModel(type, model)) return true;

return false;
}, "~S,~S");
Clazz.defineMethod(c$, "setSelectedPeak", 
function(peak){
this.selectedPeak = peak;
}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "setHighlightedPeak", 
function(peak){
this.highlightedPeak = peak;
}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "getSelectedPeak", 
function(){
return this.selectedPeak;
});
Clazz.defineMethod(c$, "getModelPeakInfoForAutoSelectOnLoad", 
function(){
if (this.peakList != null) for (var i = 0; i < this.peakList.size(); i++) if (this.peakList.get(i).autoSelectOnLoad()) return this.peakList.get(i);

return null;
});
Clazz.defineMethod(c$, "getAssociatedPeakInfo", 
function(xPixel, coord){
this.selectedPeak = this.findPeakByCoord(xPixel, coord);
return (this.selectedPeak == null ? this.getBasePeakInfo() : this.selectedPeak);
}, "~N,JSV.common.Coordinate");
Clazz.defineMethod(c$, "findPeakByCoord", 
function(xPixel, coord){
if (coord != null && this.peakList != null && this.peakList.size() > 0) {
var xVal = coord.getXVal();
var iBest = -1;
var dBest = 1e100;
for (var i = 0; i < this.peakList.size(); i++) {
var d = this.peakList.get(i).checkRange(xPixel, xVal);
if (d < dBest) {
dBest = d;
iBest = i;
}}
if (iBest >= 0) return this.peakList.get(iBest);
}return null;
}, "~N,JSV.common.Coordinate");
Clazz.defineMethod(c$, "getPeakTitle", 
function(){
var s = null;
if (this.highlightedPeak != null) s = this.highlightedPeak.getTitle();
if ((s == null || s.length == 0) && this.selectedPeak != null) s = this.selectedPeak.getTitle();
if (s == null || s.length == 0) s = this.getTitleLabel();
return s;
});
Clazz.defineMethod(c$, "getTitleLabel", 
function(){
if (this.titleLabel != null) return this.titleLabel;
var type = (this.peakList == null || this.peakList.size() == 0 ? this.getQualifiedDataType() : this.peakList.get(0).getType());
if (type != null && type.startsWith("NMR")) {
if (this.nucleusY != null && !this.nucleusY.equals("?")) {
type = "2D" + type;
} else {
type = JSV.source.JDXDataObject.getNominalSpecFreq(this.nucleusX, this.getObservedFreq()) + " MHz " + this.nucleusX + " " + type;
}}return this.titleLabel = (type != null && type.length > 0 ? type + " " : "") + this.getTitle();
});
Clazz.defineMethod(c$, "setNextPeak", 
function(coord, istep){
if (this.peakList == null || this.peakList.size() == 0) return -1;
var x0 = coord.getXVal() + istep * 0.000001;
var ipt1 = -1;
var ipt2 = -1;
var dmin1 = 1.7976931348623157E308 * istep;
var dmin2 = 0;
for (var i = this.peakList.size(); --i >= 0; ) {
var x = this.peakList.get(i).getX();
if (istep > 0) {
if (x > x0 && x < dmin1) {
ipt1 = i;
dmin1 = x;
} else if (x < x0 && x - x0 < dmin2) {
ipt2 = i;
dmin2 = x - x0;
}} else {
if (x < x0 && x > dmin1) {
ipt1 = i;
dmin1 = x;
} else if (x > x0 && x - x0 > dmin2) {
ipt2 = i;
dmin2 = x - x0;
}}}
if (ipt1 < 0) {
if (ipt2 < 0) return -1;
ipt1 = ipt2;
}return ipt1;
}, "JSV.common.Coordinate,~N");
Clazz.defineMethod(c$, "getPercentYValueAt", 
function(x){
if (!this.isContinuous()) return NaN;
return this.getYValueAt(x);
}, "~N");
Clazz.defineMethod(c$, "getYValueAt", 
function(x){
return JSV.common.Coordinate.getYValueAt(this.xyCoords, x);
}, "~N");
Clazz.defineMethod(c$, "setUserYFactor", 
function(userYFactor){
this.userYFactor = userYFactor;
}, "~N");
Clazz.defineMethod(c$, "getUserYFactor", 
function(){
return this.userYFactor;
});
Clazz.defineMethod(c$, "getConvertedSpectrum", 
function(){
return this.convertedSpectrum;
});
Clazz.defineMethod(c$, "setConvertedSpectrum", 
function(spectrum){
this.convertedSpectrum = spectrum;
}, "JSV.common.Spectrum");
c$.taConvert = Clazz.defineMethod(c$, "taConvert", 
function(spectrum, mode){
if (!spectrum.isContinuous()) return spectrum;
switch (mode) {
case JSV.common.Spectrum.IRMode.NO_CONVERT:
return spectrum;
case JSV.common.Spectrum.IRMode.TO_ABS:
if (!spectrum.isTransmittance()) return spectrum;
break;
case JSV.common.Spectrum.IRMode.TO_TRANS:
if (!spectrum.isAbsorbance()) return spectrum;
break;
case JSV.common.Spectrum.IRMode.TOGGLE:
break;
}
var spec = spectrum.getConvertedSpectrum();
return (spec != null ? spec : spectrum.isAbsorbance() ? JSV.common.Spectrum.toT(spectrum) : JSV.common.Spectrum.toA(spectrum));
}, "JSV.common.Spectrum,JSV.common.Spectrum.IRMode");
c$.toT = Clazz.defineMethod(c$, "toT", 
function(spectrum){
if (!spectrum.isAbsorbance()) return null;
var xyCoords = spectrum.getXYCoords();
var newXYCoords =  new Array(xyCoords.length);
if (!JSV.common.Coordinate.isYInRange(xyCoords, 0, 4.0)) xyCoords = JSV.common.Coordinate.normalise(xyCoords, 0, 4.0);
for (var i = 0; i < xyCoords.length; i++) newXYCoords[i] =  new JSV.common.Coordinate().set(xyCoords[i].getXVal(), JSV.common.Spectrum.toTransmittance(xyCoords[i].getYVal()));

return JSV.common.Spectrum.newSpectrum(spectrum, newXYCoords, "TRANSMITTANCE");
}, "JSV.common.Spectrum");
c$.toA = Clazz.defineMethod(c$, "toA", 
function(spectrum){
if (!spectrum.isTransmittance()) return null;
var xyCoords = spectrum.getXYCoords();
var newXYCoords =  new Array(xyCoords.length);
var isPercent = JSV.common.Coordinate.isYInRange(xyCoords, -2, 2);
for (var i = 0; i < xyCoords.length; i++) newXYCoords[i] =  new JSV.common.Coordinate().set(xyCoords[i].getXVal(), JSV.common.Spectrum.toAbsorbance(xyCoords[i].getYVal(), isPercent));

return JSV.common.Spectrum.newSpectrum(spectrum, newXYCoords, "ABSORBANCE");
}, "JSV.common.Spectrum");
c$.newSpectrum = Clazz.defineMethod(c$, "newSpectrum", 
function(spectrum, newXYCoords, units){
var specNew = spectrum.copy();
specNew.setOrigin("JSpecView Converted");
specNew.setOwner("JSpecView Generated");
specNew.setXYCoords(newXYCoords);
specNew.setYUnits(units);
spectrum.setConvertedSpectrum(specNew);
specNew.setConvertedSpectrum(spectrum);
return specNew;
}, "JSV.common.Spectrum,~A,~S");
c$.toAbsorbance = Clazz.defineMethod(c$, "toAbsorbance", 
function(x, isPercent){
return (Math.min(4.0, isPercent ? 2 - JSV.common.Spectrum.log10(x) : -JSV.common.Spectrum.log10(x)));
}, "~N,~B");
c$.toTransmittance = Clazz.defineMethod(c$, "toTransmittance", 
function(x){
return (x <= 0 ? 1 : Math.pow(10, -x));
}, "~N");
c$.log10 = Clazz.defineMethod(c$, "log10", 
function(value){
return Math.log(value) / Math.log(10);
}, "~N");
c$.process = Clazz.defineMethod(c$, "process", 
function(specs, irMode){
if (irMode === JSV.common.Spectrum.IRMode.TO_ABS || irMode === JSV.common.Spectrum.IRMode.TO_TRANS) for (var i = 0; i < specs.size(); i++) specs.set(i, JSV.common.Spectrum.taConvert(specs.get(i), irMode));

return true;
}, "JU.Lst,JSV.common.Spectrum.IRMode");
Clazz.defineMethod(c$, "getSubSpectra", 
function(){
return this.subSpectra;
});
Clazz.defineMethod(c$, "getCurrentSubSpectrum", 
function(){
return (this.subSpectra == null ? this : this.subSpectra.get(this.currentSubSpectrumIndex));
});
Clazz.defineMethod(c$, "advanceSubSpectrum", 
function(dir){
return this.setCurrentSubSpectrum(this.currentSubSpectrumIndex + dir);
}, "~N");
Clazz.defineMethod(c$, "setCurrentSubSpectrum", 
function(n){
return (this.currentSubSpectrumIndex = JSV.common.Coordinate.intoRange(n, 0, this.subSpectra.size() - 1));
}, "~N");
Clazz.defineMethod(c$, "addSubSpectrum", 
function(spectrum, forceSub){
if (!forceSub && (this.is1D() || this.blockID != spectrum.blockID) || !JSV.common.Spectrum.allowSubSpec(this, spectrum)) return false;
this.$isForcedSubset = forceSub;
if (this.subSpectra == null) {
this.subSpectra =  new JU.Lst();
this.addSubSpectrum(this, true);
}this.subSpectra.addLast(spectrum);
spectrum.parent = this;
return true;
}, "JSV.common.Spectrum,~B");
Clazz.defineMethod(c$, "getSubIndex", 
function(){
return (this.subSpectra == null ? -1 : this.currentSubSpectrumIndex);
});
Clazz.defineMethod(c$, "setExportXAxisDirection", 
function(leftToRight){
this.exportXAxisLeftToRight = leftToRight;
}, "~B");
Clazz.defineMethod(c$, "isExportXAxisLeftToRight", 
function(){
return this.exportXAxisLeftToRight;
});
Clazz.defineMethod(c$, "getInfo", 
function(key){
var info =  new java.util.Hashtable();
if ("id".equalsIgnoreCase(key)) {
info.put(key, this.id);
return info;
}var keys = null;
if ("".equals(key)) {
keys = "id specShift header";
}info.put("id", this.id);
JSV.common.Parameters.putInfo(key, info, "specShift", Double.$valueOf(this.specShift));
var justHeader = ("header".equals(key));
if (!justHeader && key != null && keys == null) {
for (var i = this.headerTable.size(); --i >= 0; ) {
var entry = this.headerTable.get(i);
if (entry[0].equalsIgnoreCase(key) || entry[2].equalsIgnoreCase(key)) {
info.put(key, entry[1]);
return info;
}}
}var head =  new java.util.Hashtable();
var list = this.getHeaderRowDataAsArray();
for (var i = 0; i < list.length; i++) {
var label = JSV.source.JDXSourceStreamTokenizer.cleanLabel(list[i][0]);
if (keys != null) {
keys += " " + label;
continue;
}if (key != null && !justHeader && !label.equals(key)) continue;
var val = JSV.common.Spectrum.fixInfoValue(list[i][1]);
if (key == null) {
var data =  new java.util.Hashtable();
data.put("value", val);
data.put("index", Integer.$valueOf(i + 1));
info.put(label, data);
} else {
info.put(label, val);
}}
if (head.size() > 0) info.put("header", head);
if (!justHeader) {
if (keys != null) {
keys += "  titleLabel type isHZToPPM subSpectrumCount";
} else {
JSV.common.Parameters.putInfo(key, info, "titleLabel", this.getTitleLabel());
JSV.common.Parameters.putInfo(key, info, "type", this.getDataType());
JSV.common.Parameters.putInfo(key, info, "isHZToPPM", Boolean.$valueOf(this.isHZtoPPM()));
JSV.common.Parameters.putInfo(key, info, "subSpectrumCount", Integer.$valueOf(this.subSpectra == null ? 0 : this.subSpectra.size()));
}}if (keys != null) info.put("KEYS", keys);
return info;
}, "~S");
c$.fixInfoValue = Clazz.defineMethod(c$, "fixInfoValue", 
function(info){
try {
return (Integer.$valueOf(info));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
try {
return (Double.$valueOf(info));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
return info;
}, "~S");
Clazz.defineMethod(c$, "findMatchingPeakInfo", 
function(pi){
for (var i = 0; i < this.peakList.size(); i++) if (this.peakList.get(i).checkTypeMatch(pi)) return this.peakList.get(i);

return null;
}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "getBasePeakInfo", 
function(){
return (this.peakList.size() == 0 ?  new JSV.common.PeakInfo() :  new JSV.common.PeakInfo(" baseModel=\"\" " + this.peakList.get(0)));
});
Clazz.defineMethod(c$, "getAxisLabel", 
function(isX){
var label = (isX ? this.peakXLabel : this.peakYLabel);
if (label == null) label = (isX ? this.xLabel : this.yLabel);
if (label == null) label = (isX ? this.xUnits : this.yUnits);
return (label == null ? "" : label.equalsIgnoreCase("WAVENUMBERS") ? "1/cm" : label.equalsIgnoreCase("nanometers") ? "nm" : label);
}, "~B");
Clazz.defineMethod(c$, "findXForPeakNearest", 
function(x){
return JSV.common.Coordinate.findXForPeakNearest(this.xyCoords, x, this.isInverted());
}, "~N");
Clazz.defineMethod(c$, "addSpecShift", 
function(dx){
if (dx != 0) {
this.specShift += dx;
JSV.common.Coordinate.shiftX(this.xyCoords, dx);
if (this.subSpectra != null) for (var i = this.subSpectra.size(); --i >= 0; ) {
var spec = this.subSpectra.get(i);
if (spec !== this && spec !== this.parent) spec.addSpecShift(dx);
}
}return this.specShift;
}, "~N");
c$.allowSubSpec = Clazz.defineMethod(c$, "allowSubSpec", 
function(s1, s2){
return (s1.is1D() == s2.is1D() && s1.xUnits.equalsIgnoreCase(s2.xUnits) && s1.isHNMR() == s2.isHNMR());
}, "JSV.common.Spectrum,JSV.common.Spectrum");
c$.areXScalesCompatible = Clazz.defineMethod(c$, "areXScalesCompatible", 
function(s1, s2, isSubspecCheck, isLinkCheck){
var isNMR1 = s1.isNMR();
if (isNMR1 != s2.isNMR() || s1.isContinuous() != s2.isContinuous() || !isLinkCheck && !JSV.common.Spectrum.areUnitsCompatible(s1.xUnits, s2.xUnits)) return false;
if (isSubspecCheck) {
if (s1.is1D() != s2.is1D()) return false;
} else if (isLinkCheck) {
if (!isNMR1) return true;
} else if (!s1.is1D() || !s2.is1D()) {
return false;
}return (!isNMR1 || s2.is1D() && s1.parent.nucleusX.equals(s2.parent.nucleusX));
}, "JSV.common.Spectrum,JSV.common.Spectrum,~B,~B");
c$.areUnitsCompatible = Clazz.defineMethod(c$, "areUnitsCompatible", 
function(u1, u2){
if (u1.equalsIgnoreCase(u2)) return true;
u1 = u1.toUpperCase();
u2 = u2.toUpperCase();
return (u1.equals("HZ") && u2.equals("PPM") || u1.equals("PPM") && u2.equals("HZ"));
}, "~S,~S");
c$.areLinkableX = Clazz.defineMethod(c$, "areLinkableX", 
function(s1, s2){
return (s1.isNMR() && s2.isNMR() && s1.nucleusX.equals(s2.nucleusX));
}, "JSV.common.Spectrum,JSV.common.Spectrum");
c$.areLinkableY = Clazz.defineMethod(c$, "areLinkableY", 
function(s1, s2){
return (s1.isNMR() && s2.isNMR() && s1.nucleusX.equals(s2.nucleusY));
}, "JSV.common.Spectrum,JSV.common.Spectrum");
Clazz.defineMethod(c$, "getPeakWidth", 
function(){
var w = this.getLastX() - this.getFirstX();
return (w / 100);
});
Clazz.defineMethod(c$, "setSimulated", 
function(filePath){
this.isSimulation = true;
var s = this.sourceID;
if (s.length == 0) s = JU.PT.rep(filePath, "http://SIMULATION/", "");
if (s.indexOf("MOL=") >= 0) s = "";
this.title = "SIMULATED " + JU.PT.rep(s, "$", "");
}, "~S");
Clazz.defineMethod(c$, "setFillColor", 
function(color){
this.fillColor = color;
if (this.convertedSpectrum != null) this.convertedSpectrum.fillColor = color;
}, "javajs.api.GenericColor");
Clazz.overrideMethod(c$, "toString", 
function(){
return this.getTitleLabel() + (this.xyCoords == null ? "" : " xyCoords.length=" + this.xyCoords.length);
});
/*if2*/;(function(){
var c$ = Clazz.declareType(JSV.common.Spectrum, "IRMode", Enum);
c$.getMode = Clazz.defineMethod(c$, "getMode", 
function(value){
switch ((value == null ? 'I' : value.toUpperCase().charAt(0)).charCodeAt(0)) {
case 65:
return JSV.common.Spectrum.IRMode.TO_ABS;
case 84:
return (value.equalsIgnoreCase("TOGGLE") ? JSV.common.Spectrum.IRMode.TOGGLE : JSV.common.Spectrum.IRMode.TO_TRANS);
case 78:
return JSV.common.Spectrum.IRMode.NO_CONVERT;
default:
return JSV.common.Spectrum.IRMode.TOGGLE;
}
}, "~S");
Clazz.defineEnumConstant(c$, "NO_CONVERT", 0, []);
Clazz.defineEnumConstant(c$, "TO_TRANS", 1, []);
Clazz.defineEnumConstant(c$, "TO_ABS", 2, []);
Clazz.defineEnumConstant(c$, "TOGGLE", 3, []);
/*eoif2*/})();
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.source");
Clazz.load(["JSV.source.JDXHeader", "java.util.Hashtable"], "JSV.source.JDXDataObject", ["JU.DF", "$.PT", "JSV.common.Annotation", "$.Coordinate", "JSV.exception.JSVException", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.sourceID = "";
this.isSimulation = false;
this.blockID = 0;
this.filePath = null;
this.filePathForwardSlash = null;
this.inlineData = null;
this.fileShiftRef = 1.7976931348623157E308;
this.fileShiftRefType = -1;
this.fileShiftRefDataPt = -1;
this.minX = NaN;
this.minY = NaN;
this.maxX = NaN;
this.maxY = NaN;
this.deltaX = NaN;
this.xyCoords = null;
this.continuous = false;
this.$isHZtoPPM = false;
this.xIncreases = true;
this.fileFirstX = 1.7976931348623157E308;
this.fileLastX = 1.7976931348623157E308;
this.fileNPoints = -1;
this.xFactor = 1.7976931348623157E308;
this.yFactor = 1.7976931348623157E308;
this.nucleusX = null;
this.nucleusY = "?";
this.freq2dX = NaN;
this.freq2dY = NaN;
this.y2DUnits = "";
this.parent = null;
this.xUnits = "";
this.yUnits = "";
this.xLabel = null;
this.yLabel = null;
this.varName = "";
this.observedNucl = "";
this.observedFreq = 1.7976931348623157E308;
this.numDim = 1;
this.nH = 0;
this.y2D = NaN;
Clazz.instantialize(this, arguments);}, JSV.source, "JDXDataObject", JSV.source.JDXHeader);
Clazz.defineMethod(c$, "setInlineData", 
function(data){
this.inlineData = data;
}, "~S");
Clazz.defineMethod(c$, "getInlineData", 
function(){
return this.inlineData;
});
Clazz.defineMethod(c$, "setFilePath", 
function(filePath){
if (filePath != null) this.filePathForwardSlash = (this.filePath = filePath.trim()).$replace('\\', '/');
}, "~S");
Clazz.defineMethod(c$, "getFilePath", 
function(){
return this.filePath;
});
Clazz.defineMethod(c$, "getFilePathForwardSlash", 
function(){
return this.filePathForwardSlash;
});
Clazz.defineMethod(c$, "setBlockID", 
function(id){
this.blockID = id;
}, "~N");
Clazz.defineMethod(c$, "checkJDXRequiredTokens", 
function(){
var missingTag = (this.fileFirstX == 1.7976931348623157E308 ? "##FIRSTX" : this.fileLastX == 1.7976931348623157E308 ? "##LASTX" : this.fileNPoints == -1 ? "##NPOINTS" : this.xFactor == 1.7976931348623157E308 ? "##XFACTOR" : this.yFactor == 1.7976931348623157E308 ? "##YFACTOR" : null);
if (missingTag != null) throw  new JSV.exception.JSVException("Error Reading Data Set: " + missingTag + " not found");
});
Clazz.defineMethod(c$, "setXFactor", 
function(xFactor){
this.xFactor = xFactor;
}, "~N");
Clazz.defineMethod(c$, "getXFactor", 
function(){
return this.xFactor;
});
Clazz.defineMethod(c$, "setYFactor", 
function(yFactor){
this.yFactor = yFactor;
}, "~N");
Clazz.defineMethod(c$, "getYFactor", 
function(){
return this.yFactor;
});
Clazz.defineMethod(c$, "setVarName", 
function(name){
this.varName = name;
}, "~S");
Clazz.defineMethod(c$, "isImaginary", 
function(){
return this.varName.contains("IMAG");
});
Clazz.defineMethod(c$, "setXUnits", 
function(xUnits){
this.xUnits = xUnits;
}, "~S");
Clazz.defineMethod(c$, "getXUnits", 
function(){
return this.xUnits;
});
Clazz.defineMethod(c$, "setYUnits", 
function(yUnits){
if (yUnits.equals("PPM")) yUnits = "ARBITRARY UNITS";
this.yUnits = yUnits;
}, "~S");
Clazz.defineMethod(c$, "getYUnits", 
function(){
return this.yUnits;
});
Clazz.defineMethod(c$, "setXLabel", 
function(value){
this.xLabel = value;
}, "~S");
Clazz.defineMethod(c$, "setYLabel", 
function(value){
this.yLabel = value;
}, "~S");
Clazz.defineMethod(c$, "setObservedNucleus", 
function(value){
this.observedNucl = value;
if (this.is1D()) this.parent.nucleusX = this.nucleusX = this.fixNucleus(value);
}, "~S");
Clazz.defineMethod(c$, "getObservedNucleus", 
function(){
return this.observedNucl;
});
Clazz.defineMethod(c$, "setObservedFreq", 
function(observedFreq){
this.observedFreq = observedFreq;
}, "~N");
Clazz.defineMethod(c$, "getObservedFreq", 
function(){
return this.observedFreq;
});
Clazz.defineMethod(c$, "setHydrogenCount", 
function(nH){
this.nH = nH;
}, "~N");
Clazz.defineMethod(c$, "getHydrogenCount", 
function(){
return this.nH;
});
Clazz.defineMethod(c$, "is1D", 
function(){
return this.numDim == 1;
});
Clazz.defineMethod(c$, "getNumDim", 
function(){
return this.numDim;
});
Clazz.defineMethod(c$, "setNumDim", 
function(n){
this.numDim = n;
}, "~N");
Clazz.defineMethod(c$, "setY2D", 
function(d){
this.y2D = d;
}, "~N");
Clazz.defineMethod(c$, "getY2D", 
function(){
return this.y2D;
});
Clazz.defineMethod(c$, "setY2DUnits", 
function(units){
this.y2DUnits = units;
}, "~S");
Clazz.defineMethod(c$, "getY2DPPM", 
function(){
var d = this.y2D;
if (this.y2DUnits.equals("HZ")) d /= this.freq2dY;
return d;
});
Clazz.defineMethod(c$, "setNucleusAndFreq", 
function(nuc, isX){
nuc = this.fixNucleus(nuc);
if (isX) this.nucleusX = nuc;
 else this.nucleusY = nuc;
var freq;
if (this.observedNucl.indexOf(nuc) >= 0) {
freq = this.observedFreq;
} else {
var g1 = JSV.source.JDXDataObject.getGyromagneticRatio(this.fixNucleus(this.observedNucl));
var g2 = JSV.source.JDXDataObject.getGyromagneticRatio(nuc);
freq = this.observedFreq * g2 / g1;
}if (isX) this.freq2dX = freq;
 else this.freq2dY = freq;
JU.Logger.info("Freq for " + nuc + " = " + freq);
}, "~S,~B");
Clazz.defineMethod(c$, "fixNucleus", 
function(nuc){
return JU.PT.rep(JU.PT.trim(nuc, "[]^<>"), "NUC_", "");
}, "~S");
c$.getNominalSpecFreq = Clazz.defineMethod(c$, "getNominalSpecFreq", 
function(nuc, freq){
var d = JSV.source.JDXDataObject.getSpecFreq(nuc, freq);
var century = Math.round(d / 100) * 100;
return (Double.isNaN(d) ? -1 : Math.abs(d - century) < 2 ? century : Math.round(d));
}, "~S,~N");
c$.getSpecFreq = Clazz.defineMethod(c$, "getSpecFreq", 
function(nuc, freq){
return freq * JSV.source.JDXDataObject.getGyromagneticRatio("1H") / JSV.source.JDXDataObject.getGyromagneticRatio(nuc);
}, "~S,~N");
c$.getGyromagneticRatio = Clazz.defineMethod(c$, "getGyromagneticRatio", 
function(nuc){
var v = null;
try {
v = JSV.source.JDXDataObject.gyroMap.get(nuc);
if (v != null) return v.doubleValue();
var pt = 0;
while (pt < nuc.length && Character.isDigit(nuc.charAt(pt))) pt++;

v = JSV.source.JDXDataObject.gyroMap.get(nuc.substring(0, pt));
if (v != null) JSV.source.JDXDataObject.gyroMap.put(nuc, v);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
return (v == null ? NaN : v.doubleValue());
}, "~S");
Clazz.defineMethod(c$, "isTransmittance", 
function(){
var s = this.yUnits.toLowerCase();
return (s.equals("transmittance") || s.contains("trans") || s.equals("t"));
});
Clazz.defineMethod(c$, "isAbsorbance", 
function(){
var s = this.yUnits.toLowerCase();
return (s.equals("absorbance") || s.contains("abs") || s.equals("a"));
});
Clazz.defineMethod(c$, "canSaveAsJDX", 
function(){
return this.getDataClass().equals("XYDATA");
});
Clazz.defineMethod(c$, "canIntegrate", 
function(){
return (this.continuous && (this.isHNMR() || this.isGC()) && this.is1D());
});
Clazz.defineMethod(c$, "isAutoOverlayFromJmolClick", 
function(){
return (this.isGC());
});
Clazz.defineMethod(c$, "isGC", 
function(){
return this.dataType.startsWith("GC") || this.dataType.startsWith("GAS");
});
Clazz.defineMethod(c$, "isMS", 
function(){
return this.dataType.startsWith("MASS") || this.dataType.startsWith("MS");
});
Clazz.defineMethod(c$, "isStackable", 
function(){
return !this.isMS();
});
Clazz.defineMethod(c$, "isScalable", 
function(){
return true;
});
Clazz.defineMethod(c$, "getYRef", 
function(){
return (!this.isTransmittance() ? 0.0 : JSV.common.Coordinate.getMaxY(this.xyCoords, 0, this.xyCoords.length - 1) < 2 ? 1.0 : 100.0);
});
Clazz.defineMethod(c$, "isInverted", 
function(){
return this.isTransmittance();
});
Clazz.defineMethod(c$, "canConvertTransAbs", 
function(){
return (this.continuous && (this.yUnits.toLowerCase().contains("abs")) || this.yUnits.toLowerCase().contains("trans"));
});
Clazz.defineMethod(c$, "canShowSolutionColor", 
function(){
return (this.isContinuous() && this.canConvertTransAbs() && (this.xUnits.toLowerCase().contains("nanometer") || this.xUnits.equalsIgnoreCase("nm")) && this.getFirstX() < 401 && this.getLastX() > 699 && this.xyCoords.length >= 30);
});
Clazz.defineMethod(c$, "isHZtoPPM", 
function(){
return this.$isHZtoPPM;
});
Clazz.defineMethod(c$, "setHZtoPPM", 
function(val){
this.$isHZtoPPM = val;
}, "~B");
Clazz.defineMethod(c$, "setIncreasing", 
function(val){
this.xIncreases = val;
}, "~B");
Clazz.defineMethod(c$, "isXIncreasing", 
function(){
return this.xIncreases;
});
Clazz.defineMethod(c$, "shouldDisplayXAxisIncreasing", 
function(){
var dt = this.dataType.toUpperCase();
var xu = this.xUnits.toUpperCase();
if (dt.contains("NMR") && !dt.contains("FID")) {
return false;
} else if (dt.contains("LINK") && xu.contains("CM")) {
return false;
} else if (dt.startsWith("IR") || dt.contains("INFRA") && xu.contains("CM")) {
return false;
} else if (dt.contains("RAMAN") && xu.contains("CM")) {
return false;
} else if (dt.contains("VIS") && xu.contains("NANOMETERS")) {
return true;
}return this.xIncreases;
});
Clazz.defineMethod(c$, "setContinuous", 
function(val){
this.continuous = val;
}, "~B");
Clazz.defineMethod(c$, "isContinuous", 
function(){
return this.continuous;
});
Clazz.defineMethod(c$, "getHeaderRowDataAsArray", 
function(){
var n = 8;
if (this.observedFreq != 1.7976931348623157E308) n++;
if (this.observedNucl !== "") n++;
var rowData = this.getHeaderRowDataAsArray(true, n);
var i = rowData.length - n;
if (this.observedFreq != 1.7976931348623157E308) rowData[i++] =  Clazz.newArray(-1, ["##.OBSERVE FREQUENCY", "" + this.observedFreq]);
if (this.observedNucl !== "") rowData[i++] =  Clazz.newArray(-1, ["##.OBSERVE NUCLEUS", this.observedNucl]);
rowData[i++] =  Clazz.newArray(-1, ["##XUNITS", this.$isHZtoPPM ? "HZ" : this.xUnits]);
rowData[i++] =  Clazz.newArray(-1, ["##YUNITS", this.yUnits]);
var x = (this.xIncreases ? this.getFirstX() : this.getLastX());
rowData[i++] =  Clazz.newArray(-1, ["##FIRSTX", String.valueOf(this.isHZtoPPM() ? x * this.observedFreq : x)]);
x = (this.xIncreases ? this.getLastX() : this.getFirstX());
rowData[i++] =  Clazz.newArray(-1, ["##FIRSTY", String.valueOf(this.xIncreases ? this.getFirstY() : this.getLastY())]);
rowData[i++] =  Clazz.newArray(-1, ["##LASTX", String.valueOf(this.isHZtoPPM() ? x * this.observedFreq : x)]);
rowData[i++] =  Clazz.newArray(-1, ["##XFACTOR", String.valueOf(this.getXFactor())]);
rowData[i++] =  Clazz.newArray(-1, ["##YFACTOR", String.valueOf(this.getYFactor())]);
rowData[i++] =  Clazz.newArray(-1, ["##NPOINTS", String.valueOf(this.xyCoords.length)]);
return rowData;
});
Clazz.defineMethod(c$, "getDefaultUnitPrecision", 
function(){
return 2;
});
Clazz.defineMethod(c$, "setMeasurementText", 
function(m){
var dx = m.getValue();
if (Double.isNaN(dx)) return "";
var precision = 1;
var units = "";
if (this.isNMR()) {
if (this.is1D()) {
var isIntegral = (Clazz.instanceOf(m,"JSV.common.Integral"));
if (this.isHNMR() || isIntegral) {
if (!isIntegral) {
dx *= this.observedFreq;
units = " Hz";
}} else {
units = " ppm";
precision = 2;
}} else {
return "";
}}return (dx < 0.1 ? "" : JU.DF.formatDecimalDbl(dx, precision) + units);
}, "JSV.common.Measurement");
Clazz.defineMethod(c$, "isNMR", 
function(){
return (this.dataType.toUpperCase().indexOf("NMR") >= 0);
});
Clazz.defineMethod(c$, "isHNMR", 
function(){
return (this.isNMR() && this.observedNucl.toUpperCase().indexOf("H") >= 0);
});
Clazz.defineMethod(c$, "setXYCoords", 
function(coords){
this.xyCoords = coords;
}, "~A");
Clazz.defineMethod(c$, "invertYAxis", 
function(){
for (var i = this.xyCoords.length; --i >= 0; ) {
this.xyCoords[i].setYVal(-this.xyCoords[i].getYVal());
}
var d = this.minY;
this.minY = -this.maxY;
this.maxY = -d;
return this;
});
Clazz.defineMethod(c$, "getFirstX", 
function(){
return this.xyCoords[0].getXVal();
});
Clazz.defineMethod(c$, "getFirstY", 
function(){
return this.xyCoords[0].getYVal();
});
Clazz.defineMethod(c$, "getLastX", 
function(){
return this.xyCoords[this.xyCoords.length - 1].getXVal();
});
Clazz.defineMethod(c$, "getLastY", 
function(){
return this.xyCoords[this.xyCoords.length - 1].getYVal();
});
Clazz.defineMethod(c$, "getMinX", 
function(){
return (Double.isNaN(this.minX) ? (this.minX = JSV.common.Coordinate.getMinX(this.xyCoords, 0, this.xyCoords.length - 1)) : this.minX);
});
Clazz.defineMethod(c$, "getMinY", 
function(){
return (Double.isNaN(this.minY) ? (this.minY = JSV.common.Coordinate.getMinY(this.xyCoords, 0, this.xyCoords.length - 1)) : this.minY);
});
Clazz.defineMethod(c$, "getMaxX", 
function(){
return (Double.isNaN(this.maxX) ? (this.maxX = JSV.common.Coordinate.getMaxX(this.xyCoords, 0, this.xyCoords.length - 1)) : this.maxX);
});
Clazz.defineMethod(c$, "getMaxY", 
function(){
return (Double.isNaN(this.maxY) ? (this.maxY = JSV.common.Coordinate.getMaxY(this.xyCoords, 0, this.xyCoords.length - 1)) : this.maxY);
});
Clazz.defineMethod(c$, "normalizeSimulation", 
function(max){
if (!this.isNMR() || !this.is1D()) return;
var f = max / this.getMaxY();
this.maxY = NaN;
JSV.common.Coordinate.applyScale(this.xyCoords, 1, f);
JU.Logger.info("Y values have been scaled by a factor of " + f);
}, "~N");
Clazz.defineMethod(c$, "getDeltaX", 
function(){
return (Double.isNaN(this.deltaX) ? (this.deltaX = JSV.common.Coordinate.deltaX(this.getLastX(), this.getFirstX(), this.xyCoords.length)) : this.deltaX);
});
Clazz.defineMethod(c$, "copyTo", 
function(newObj){
newObj.setTitle(this.title);
newObj.setJcampdx(this.jcampdx);
newObj.setOrigin(this.origin);
newObj.setOwner(this.owner);
newObj.setDataClass(this.dataClass);
newObj.setDataType(this.dataType);
newObj.setHeaderTable(this.headerTable);
newObj.setXFactor(this.xFactor);
newObj.setYFactor(this.yFactor);
newObj.setXUnits(this.xUnits);
newObj.setYUnits(this.yUnits);
newObj.setXLabel(this.xLabel);
newObj.setYLabel(this.yLabel);
newObj.setXYCoords(this.xyCoords);
newObj.setContinuous(this.continuous);
newObj.setIncreasing(this.xIncreases);
newObj.observedFreq = this.observedFreq;
newObj.observedNucl = this.observedNucl;
newObj.fileShiftRef = this.fileShiftRef;
newObj.fileShiftRefDataPt = this.fileShiftRefDataPt;
newObj.fileShiftRefType = this.fileShiftRefType;
newObj.$isHZtoPPM = this.$isHZtoPPM;
newObj.numDim = this.numDim;
newObj.nucleusX = this.nucleusX;
newObj.nucleusY = this.nucleusY;
newObj.freq2dX = this.freq2dX;
newObj.freq2dY = this.freq2dY;
newObj.setFilePath(this.filePath);
newObj.nH = this.nH;
}, "JSV.source.JDXDataObject");
Clazz.defineMethod(c$, "getTypeLabel", 
function(){
return (this.isNMR() ? this.nucleusX + "NMR" : this.dataType);
});
Clazz.defineMethod(c$, "getDefaultAnnotationInfo", 
function(type){
var s1;
var s2;
var isNMR = this.isNMR();
switch (type) {
case JSV.common.Annotation.AType.Integration:
return  Clazz.newArray(-1, [null,  Clazz.newIntArray(-1, [1]), null]);
case JSV.common.Annotation.AType.Measurements:
s1 = (isNMR ?  Clazz.newArray(-1, ["Hz", "ppm"]) :  Clazz.newArray(-1, [""]));
s2 = (this.isHNMR() ?  Clazz.newIntArray(-1, [1, 4]) :  Clazz.newIntArray(-1, [1, 3]));
return  Clazz.newArray(-1, [s1, s2, Integer.$valueOf(0)]);
case JSV.common.Annotation.AType.PeakList:
s1 = (isNMR ?  Clazz.newArray(-1, ["Hz", "ppm"]) :  Clazz.newArray(-1, [""]));
s2 = (this.isHNMR() ?  Clazz.newIntArray(-1, [1, 2]) :  Clazz.newIntArray(-1, [1, 1]));
return  Clazz.newArray(-1, [s1, s2, Integer.$valueOf(isNMR ? 1 : 0)]);
case JSV.common.Annotation.AType.NONE:
case JSV.common.Annotation.AType.OverlayLegend:
break;
case JSV.common.Annotation.AType.Views:
break;
}
return null;
}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "getPeakListArray", 
function(m, last, maxY){
var x = m.getXVal();
var y = m.getYVal();
if (this.isNMR()) y /= maxY;
var dx = Math.abs(x - last[0]);
last[0] = x;
var ddx = dx + last[1];
last[1] = dx;
var dddx = ddx + last[2];
last[2] = ddx;
if (this.isNMR()) {
return  Clazz.newDoubleArray(-1, [x, y, x * this.observedFreq, (dx * this.observedFreq > 20 ? 0 : dx * this.observedFreq), (ddx * this.observedFreq > 20 ? 0 : ddx * this.observedFreq), (dddx * this.observedFreq > 20 ? 0 : dddx * this.observedFreq)]);
}return  Clazz.newDoubleArray(-1, [x, y]);
}, "JSV.common.Measurement,~A,~N");
Clazz.defineMethod(c$, "finalizeCoordinates", 
function(){
var freq = (Double.isNaN(this.freq2dX) ? this.observedFreq : this.freq2dX);
var isHz = (freq != 1.7976931348623157E308 && this.getXUnits().toUpperCase().equals("HZ"));
if (this.fileShiftRef != 1.7976931348623157E308 && freq != 1.7976931348623157E308 && this.dataType.toUpperCase().contains("SPECTRUM") && this.jcampdx.indexOf("JEOL") < 0) {
this.applyShiftReference(isHz ? freq : 1, this.fileShiftRef);
}if (this.fileFirstX > this.fileLastX) JSV.common.Coordinate.reverse(this.xyCoords);
if (isHz) {
JSV.common.Coordinate.applyScale(this.xyCoords, (1.0 / freq), 1);
this.setXUnits("PPM");
this.setHZtoPPM(true);
}});
Clazz.defineMethod(c$, "setShiftReference", 
function(shift, pt, type){
this.fileShiftRef = shift;
this.fileShiftRefDataPt = (pt > 0 ? pt : 1);
this.fileShiftRefType = type;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "isShiftTypeSpecified", 
function(){
return (this.fileShiftRefType != -1);
});
Clazz.defineMethod(c$, "applyShiftReference", 
function(referenceFreq, shift){
if (this.fileShiftRefDataPt > this.xyCoords.length || this.fileShiftRefDataPt < 0) return;
var coord;
switch (this.fileShiftRefType) {
case 0:
shift = this.xyCoords[this.fileShiftRefDataPt - 1].getXVal() - shift * referenceFreq;
break;
case 1:
shift = this.fileFirstX - shift * referenceFreq;
break;
case 2:
shift = this.fileLastX + shift;
break;
}
for (var index = 0; index < this.xyCoords.length; index++) {
coord = this.xyCoords[index];
coord.setXVal(coord.getXVal() - shift);
this.xyCoords[index] = coord;
}
}, "~N,~N");
c$.gyroData =  Clazz.newDoubleArray(-1, [1, 42.5774806, 2, 6.53590131, 3, 45.4148, 3, 32.436, 6, 6.2661, 7, 16.5483, 9, 5.9842, 10, 4.5752, 11, 13.663, 13, 10.70839657, 14, 3.07770646, 15, 4.31726570, 17, 5.7742, 19, 40.07757016, 21, 3.3631, 23, 11.26952167, 25, 2.6083, 27, 11.1031, 29, 8.4655, 31, 17.25144090, 33, 3.2717, 35, 4.1765, 37, 3.4765, 37, 5.819, 39, 3.46, 39, 1.9893, 40, 2.4737, 41, 1.0919, 43, 2.8688, 45, 10.3591, 47, 2.4041, 49, 2.4048, 50, 4.2505, 51, 11.2133, 53, 2.4115, 55, 10.5763, 57, 1.3816, 59, 10.077, 61, 3.8114, 63, 11.2982, 65, 12.103, 67, 2.6694, 69, 10.2478, 71, 13.0208, 73, 1.4897, 75, 7.315, 77, 8.1571, 79, 10.7042, 81, 11.5384, 83, 1.6442, 85, 4.1254, 87, 13.9811, 87, 1.8525, 89, 2.0949, 91, 3.9748, 93, 10.4523, 95, 2.7874, 97, 2.8463, 99, 9.6294, 99, 1.9553, 101, 2.1916, 103, 1.3477, 105, 1.957, 107, 1.7331, 109, 1.9924, 111, 9.0692, 113, 9.4871, 113, 9.3655, 115, 9.3856, 115, 14.0077, 117, 15.261, 119, 15.966, 121, 10.2551, 123, 5.5532, 123, 11.2349, 125, 13.5454, 127, 8.5778, 129, 11.8604, 131, 3.5159, 133, 5.6234, 135, 4.2582, 137, 4.7634, 138, 5.6615, 139, 6.0612, 137, 4.88, 139, 5.39, 141, 2.37, 141, 13.0359, 143, 2.319, 145, 1.429, 143, 11.59, 147, 5.62, 147, 1.7748, 149, 14631, 151, 10.5856, 153, 4.6745, 155, 1.312, 157, 1.72, 159, 10.23, 161, 1.4654, 163, 2.0508, 165, 9.0883, 167, 1.2281, 169, 3.531, 171, 7.5261, 173, 2.073, 175, 4.8626, 176, 3.451, 177, 1.7282, 179, 1.0856, 180, 4.087, 181, 5.1627, 183, 1.7957, 185, 9.7176, 187, 9.817, 187, 0.9856, 189, 3.3536, 191, 0.7658, 191, 0.8319, 195, 9.2922, 197, 0.7406, 199, 7.7123, 201, 2.8469, 203, 24.7316, 205, 24.9749, 207, 9.034, 209, 6.963, 209, 11.7, 211, 9.16, 223, 5.95, 223, 1.3746, 225, 11.187, 227, 5.6, 229, 1.4, 231, 10.2, 235, 0.83, 237, 9.57, 239, 3.09, 243, 4.6, 1E100]);
c$.gyroMap =  new java.util.Hashtable();
{
for (var i = 0, n = JSV.source.JDXDataObject.gyroData.length - 1; i < n; i += 2) JSV.source.JDXDataObject.gyroMap.put("" + Clazz.doubleToInt(JSV.source.JDXDataObject.gyroData[i]), Double.$valueOf(JSV.source.JDXDataObject.gyroData[i + 1]));

}});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.source");
Clazz.load(["JU.Lst"], "JSV.source.JDXHeader", ["java.util.Hashtable", "JSV.source.JDXSourceStreamTokenizer"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.title = "";
this.jcampdx = "5.01";
this.dataType = "";
this.dataClass = "";
this.origin = "";
this.owner = "PUBLIC DOMAIN";
this.longDate = "";
this.date = "";
this.time = "";
this.qualifiedType = null;
this.headerTable = null;
Clazz.instantialize(this, arguments);}, JSV.source, "JDXHeader", null);
Clazz.prepareFields (c$, function(){
this.headerTable =  new JU.Lst();
});
Clazz.defineMethod(c$, "setTitle", 
function(title){
this.title = title;
}, "~S");
Clazz.defineMethod(c$, "setJcampdx", 
function(versionNum){
this.jcampdx = versionNum;
}, "~S");
Clazz.defineMethod(c$, "setDataType", 
function(dataType){
this.dataType = dataType;
}, "~S");
Clazz.defineMethod(c$, "setDataClass", 
function(dataClass){
this.dataClass = dataClass;
}, "~S");
Clazz.defineMethod(c$, "setOrigin", 
function(origin){
this.origin = origin;
}, "~S");
Clazz.defineMethod(c$, "setOwner", 
function(owner){
this.owner = owner;
}, "~S");
Clazz.defineMethod(c$, "setLongDate", 
function(longDate){
this.longDate = longDate;
}, "~S");
Clazz.defineMethod(c$, "setDate", 
function(date){
this.date = date;
}, "~S");
Clazz.defineMethod(c$, "setTime", 
function(time){
this.time = time;
}, "~S");
Clazz.defineMethod(c$, "getTitle", 
function(){
return this.title;
});
c$.getTypeName = Clazz.defineMethod(c$, "getTypeName", 
function(type){
type = type.toUpperCase();
for (var i = 0; i < JSV.source.JDXHeader.typeNames.length; i++) if (JSV.source.JDXHeader.typeNames[i].startsWith(type)) {
return JSV.source.JDXHeader.typeNames[i].substring(18);
}
return type;
}, "~S");
Clazz.defineMethod(c$, "getQualifiedDataType", 
function(){
return (this.qualifiedType == null ? (this.qualifiedType = JSV.source.JDXHeader.getTypeName(this.dataType)) : this.qualifiedType);
});
Clazz.defineMethod(c$, "getJcampdx", 
function(){
return this.jcampdx;
});
Clazz.defineMethod(c$, "getDataType", 
function(){
return this.dataType;
});
Clazz.defineMethod(c$, "getOrigin", 
function(){
return this.origin;
});
Clazz.defineMethod(c$, "getOwner", 
function(){
return this.owner;
});
Clazz.defineMethod(c$, "getLongDate", 
function(){
return this.longDate;
});
Clazz.defineMethod(c$, "getDate", 
function(){
return this.date;
});
Clazz.defineMethod(c$, "getTime", 
function(){
return this.time;
});
Clazz.defineMethod(c$, "getDataClass", 
function(){
return this.dataClass;
});
Clazz.defineMethod(c$, "setHeaderTable", 
function(table){
this.headerTable = table;
}, "JU.Lst");
Clazz.defineMethod(c$, "getHeaderTable", 
function(){
return this.headerTable;
});
Clazz.defineMethod(c$, "getHeaderRowDataAsArray", 
function(addDataClass, nMore){
var rowData =  new Array((addDataClass ? 6 : 5) + this.headerTable.size() + nMore);
var i = 0;
rowData[i++] =  Clazz.newArray(-1, ["##TITLE", this.title]);
rowData[i++] =  Clazz.newArray(-1, ["##JCAMP-DX", this.jcampdx]);
rowData[i++] =  Clazz.newArray(-1, ["##DATA TYPE", this.dataType]);
if (addDataClass) rowData[i++] =  Clazz.newArray(-1, ["##DATA CLASS", this.dataClass]);
rowData[i++] =  Clazz.newArray(-1, ["##ORIGIN", this.origin]);
rowData[i++] =  Clazz.newArray(-1, ["##OWNER", this.owner]);
for (var j = 0; j < this.headerTable.size(); j++) rowData[i++] = this.getRow(j);

return rowData;
}, "~B,~N");
Clazz.defineMethod(c$, "getRow", 
function(j){
var s = this.headerTable.get(j);
{
return [s[0], JU.PT.rep(s[1], "<", "&lt;")];
}}, "~N");
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.table = null;
this.map = null;
Clazz.instantialize(this, arguments);}, JSV.source.JDXHeader, "DataLDRTable", null);
Clazz.makeConstructor(c$, 
function(){
this.table =  new JU.Lst();
this.map =  new java.util.Hashtable();
});
Clazz.defineMethod(c$, "addHeader", 
function(label, value){
var pt = this.map.get(label);
if (pt == null) {
pt = Integer.$valueOf(this.table.size());
this.table.addLast( Clazz.newArray(-1, [label, value, JSV.source.JDXSourceStreamTokenizer.cleanLabel(label)]));
this.map.put(label, pt);
} else {
var entry = this.table.get(pt.intValue());
entry[1] = value;
}}, "~S,~S");
/*eoif3*/})();
c$.typeNames =  Clazz.newArray(-1, ["ND NMR SPECTRUM   NMR", "NMR SPECTRUM      NMR", "INFRARED SPECTRUM IR", "MASS SPECTRUM     MS", "RAMAN SPECTRUM    RAMAN", "GAS CHROMATOGRAM  GC", "UV/VIS SPECTRUM   UV/VIS"]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.source");
Clazz.load(null, "JSV.source.JDXSourceStreamTokenizer", ["JU.SB", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.br = null;
this.rawLabel = null;
this.value = null;
this.labelLineNo = 0;
this.line = null;
this.lineNo = 0;
this.rawLine = null;
Clazz.instantialize(this, arguments);}, JSV.source, "JDXSourceStreamTokenizer", null);
Clazz.makeConstructor(c$, 
function(br){
this.br = br;
}, "java.io.BufferedReader");
Clazz.defineMethod(c$, "peakLabel", 
function(){
return this.nextLabel(false);
});
Clazz.defineMethod(c$, "getLabel", 
function(){
return this.nextLabel(true);
});
Clazz.defineMethod(c$, "nextLabel", 
function(isGet){
this.rawLabel = null;
this.value = null;
while (this.line == null || this.line.length == 0) {
try {
this.readLine();
if (this.line == null) {
this.line = "";
return null;
}this.line = this.line.trim();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.line = "";
return null;
} else {
throw e;
}
}
if (this.line.startsWith("##")) break;
this.line = null;
}
this.rawLine = this.line;
var pt = this.line.indexOf("=");
if (pt < 0) {
if (isGet) JU.Logger.info("BAD JDX LINE -- no '=' (line " + this.lineNo + "): " + this.line);
this.rawLabel = this.line;
if (!isGet) this.line = "";
} else {
this.rawLabel = this.line.substring(0, pt).trim();
if (isGet) this.line = this.line.substring(pt + 1);
}this.labelLineNo = this.lineNo;
if (JU.Logger.debugging) JU.Logger.info(this.rawLabel);
return JSV.source.JDXSourceStreamTokenizer.cleanLabel(this.rawLabel);
}, "~B");
c$.cleanLabel = Clazz.defineMethod(c$, "cleanLabel", 
function(label){
if (label == null) return null;
if (!label.startsWith("#")) return label;
var i;
var str =  new JU.SB();
for (i = 0; i < label.length; i++) {
switch ((label.charAt(i)).charCodeAt(0)) {
case 47:
case 92:
case 32:
case 45:
case 95:
break;
default:
str.appendC(label.charAt(i));
break;
}
}
return str.toString().toUpperCase();
}, "~S");
Clazz.defineMethod(c$, "getValue", 
function(){
if (this.value != null) return this.value;
var sb =  new JU.SB().append(this.line);
if (sb.length() > 0) sb.appendC('\n');
try {
while (this.readLine() != null) {
if (this.line.indexOf("##") >= 0 && this.line.trim().startsWith("##")) break;
sb.append(this.line).appendC('\n');
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
JU.Logger.info(e.toString());
} else {
throw e;
}
}
this.value = (this.rawLabel.startsWith("##$") ? sb.toString().trim() : JSV.source.JDXSourceStreamTokenizer.trimLines(sb));
if (JU.Logger.debugging) JU.Logger.info(this.value);
return this.value;
});
Clazz.defineMethod(c$, "readLineTrimmed", 
function(){
this.readLine();
if (this.line == null) return null;
if (this.line.indexOf("$$") < 0) return this.line.trim();
var sb =  new JU.SB().append(this.line);
return JSV.source.JDXSourceStreamTokenizer.trimLines(sb);
});
Clazz.defineMethod(c$, "flushLine", 
function(){
var sb =  new JU.SB().append(this.line);
this.line = null;
return JSV.source.JDXSourceStreamTokenizer.trimLines(sb);
});
Clazz.defineMethod(c$, "readLine", 
function(){
this.line = this.br.readLine();
this.lineNo++;
return this.line;
});
c$.trimLines = Clazz.defineMethod(c$, "trimLines", 
function(v){
var n = v.length();
var ilast = n - 1;
var vpt = JSV.source.JDXSourceStreamTokenizer.ptNonWhite(v, 0, n);
if (vpt >= n) return "";
var buffer =  Clazz.newCharArray (n - vpt, '\0');
var pt = 0;
for (; vpt < n; vpt++) {
var ch;
switch ((ch = v.charAt(vpt)).charCodeAt(0)) {
case 13:
if (vpt < ilast && v.charAt(vpt + 1) == '\n') continue;
ch = '\n';
break;
case 10:
if (pt > 0 && buffer[pt - 1] != '\n') pt -= vpt - JSV.source.JDXSourceStreamTokenizer.ptNonSpaceRev(v, vpt) - 1;
vpt = JSV.source.JDXSourceStreamTokenizer.ptNonSpace(v, ++vpt, n) - 1;
break;
case 36:
if (vpt < ilast && v.charAt(vpt + 1) == '$') {
vpt++;
while (++vpt < n && "\n\r".indexOf(v.charAt(vpt)) < 0) {
}
continue;
}break;
}
if (ch == '\n' && pt > 0 && buffer[pt - 1] == '\n') continue;
buffer[pt++] = ch;
}
if (pt > 0 && buffer[pt - 1] == '\n') --pt;
return ( String.instantialize(buffer)).substring(0, pt).trim();
}, "JU.SB");
c$.ptNonWhite = Clazz.defineMethod(c$, "ptNonWhite", 
function(v, pt, n){
while (pt < n && Character.isWhitespace(v.charAt(pt))) pt++;

return pt;
}, "JU.SB,~N,~N");
c$.ptNonSpace = Clazz.defineMethod(c$, "ptNonSpace", 
function(v, pt, n){
while (pt < n && (v.charAt(pt) == ' ' || v.charAt(pt) == '\t')) pt++;

return pt;
}, "JU.SB,~N,~N");
c$.ptNonSpaceRev = Clazz.defineMethod(c$, "ptNonSpaceRev", 
function(v, pt){
while (--pt >= 0 && (v.charAt(pt) == ' ' || v.charAt(pt) == '\t')) {
}
return pt;
}, "JU.SB,~N");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.util.Hashtable", "JU.DefaultLogger"], "JU.Logger", null, function(){
var c$ = Clazz.declareType(JU, "Logger", null);
c$.getProperty = Clazz.defineMethod(c$, "getProperty", 
function(level, defaultValue){
try {
var property = System.getProperty("jmol.logger." + level, null);
if (property != null) {
return (property.equalsIgnoreCase("true"));
}} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
return defaultValue;
}, "~S,~B");
c$.setLogger = Clazz.defineMethod(c$, "setLogger", 
function(logger){
JU.Logger._logger = logger;
JU.Logger.debugging = JU.Logger.isActiveLevel(5) || JU.Logger.isActiveLevel(6);
JU.Logger.debuggingHigh = (JU.Logger.debugging && JU.Logger._activeLevels[6]);
}, "JU.LoggerInterface");
c$.isActiveLevel = Clazz.defineMethod(c$, "isActiveLevel", 
function(level){
return JU.Logger._logger != null && level >= 0 && level < 7 && JU.Logger._activeLevels[level];
}, "~N");
c$.setActiveLevel = Clazz.defineMethod(c$, "setActiveLevel", 
function(level, active){
if (level < 0) level = 0;
if (level >= 7) level = 6;
JU.Logger._activeLevels[level] = active;
JU.Logger.debugging = JU.Logger.isActiveLevel(5) || JU.Logger.isActiveLevel(6);
JU.Logger.debuggingHigh = (JU.Logger.debugging && JU.Logger._activeLevels[6]);
}, "~N,~B");
c$.setLogLevel = Clazz.defineMethod(c$, "setLogLevel", 
function(level){
for (var i = 7; --i >= 0; ) JU.Logger.setActiveLevel(i, i <= level);

}, "~N");
c$.getLevel = Clazz.defineMethod(c$, "getLevel", 
function(level){
switch (level) {
case 6:
return "DEBUGHIGH";
case 5:
return "DEBUG";
case 4:
return "INFO";
case 3:
return "WARN";
case 2:
return "ERROR";
case 1:
return "FATAL";
}
return "????";
}, "~N");
c$.logLevel = Clazz.defineMethod(c$, "logLevel", 
function(){
return JU.Logger._logLevel;
});
c$.doLogLevel = Clazz.defineMethod(c$, "doLogLevel", 
function(log){
JU.Logger._logLevel = log;
}, "~B");
c$.debug = Clazz.defineMethod(c$, "debug", 
function(txt){
if (!JU.Logger.debugging) return;
try {
JU.Logger._logger.debug(txt);
} catch (t) {
}
}, "~S");
c$.info = Clazz.defineMethod(c$, "info", 
function(txt){
try {
if (JU.Logger.isActiveLevel(4)) {
JU.Logger._logger.info(txt);
}} catch (t) {
}
}, "~S");
c$.warn = Clazz.defineMethod(c$, "warn", 
function(txt){
try {
if (JU.Logger.isActiveLevel(3)) {
JU.Logger._logger.warn(txt);
}} catch (t) {
}
}, "~S");
c$.warnEx = Clazz.defineMethod(c$, "warnEx", 
function(txt, e){
try {
if (JU.Logger.isActiveLevel(3)) {
JU.Logger._logger.warnEx(txt, e);
}} catch (t) {
}
}, "~S,Throwable");
c$.error = Clazz.defineMethod(c$, "error", 
function(txt){
try {
if (JU.Logger.isActiveLevel(2)) {
JU.Logger._logger.error(txt);
}} catch (t) {
}
}, "~S");
c$.errorEx = Clazz.defineMethod(c$, "errorEx", 
function(txt, e){
try {
if (JU.Logger.isActiveLevel(2)) {
JU.Logger._logger.errorEx(txt, e);
}} catch (t) {
}
}, "~S,Throwable");
c$.getLogLevel = Clazz.defineMethod(c$, "getLogLevel", 
function(){
for (var i = 7; --i >= 0; ) if (JU.Logger.isActiveLevel(i)) return i;

return 0;
});
c$.fatal = Clazz.defineMethod(c$, "fatal", 
function(txt){
try {
if (JU.Logger.isActiveLevel(1)) {
JU.Logger._logger.fatal(txt);
}} catch (t) {
}
}, "~S");
c$.fatalEx = Clazz.defineMethod(c$, "fatalEx", 
function(txt, e){
try {
if (JU.Logger.isActiveLevel(1)) {
JU.Logger._logger.fatalEx(txt, e);
}} catch (t) {
}
}, "~S,Throwable");
c$.startTimer = Clazz.defineMethod(c$, "startTimer", 
function(msg){
if (msg != null) JU.Logger.htTiming.put(msg, Long.$valueOf(System.currentTimeMillis()));
}, "~S");
c$.getTimerMsg = Clazz.defineMethod(c$, "getTimerMsg", 
function(msg, time){
if (time == 0) time = JU.Logger.getTimeFrom(msg);
return "Time for " + msg + ": " + (time) + " ms";
}, "~S,~N");
c$.getTimeFrom = Clazz.defineMethod(c$, "getTimeFrom", 
function(msg){
var t;
return (msg == null || (t = JU.Logger.htTiming.get(msg)) == null ? -1 : System.currentTimeMillis() - t.longValue());
}, "~S");
c$.checkTimer = Clazz.defineMethod(c$, "checkTimer", 
function(msg, andReset){
var time = JU.Logger.getTimeFrom(msg);
if (time >= 0 && !msg.startsWith("(")) JU.Logger.info(JU.Logger.getTimerMsg(msg, time));
if (andReset) JU.Logger.startTimer(msg);
return time;
}, "~S,~B");
c$.checkMemory = Clazz.defineMethod(c$, "checkMemory", 
function(){
var bTotal = 0;
var bFree = 0;
var bMax = 0;
{
}JU.Logger.info("Memory: Total-Free=" + (bTotal - bFree) + "; Total=" + bTotal + "; Free=" + bFree + "; Max=" + bMax);
});
c$._logger =  new JU.DefaultLogger();
c$._activeLevels =  Clazz.newBooleanArray(7, false);
c$._logLevel = false;
c$.debugging = false;
c$.debuggingHigh = false;
{
JU.Logger._activeLevels[6] = JU.Logger.getProperty("debugHigh", false);
JU.Logger._activeLevels[5] = JU.Logger.getProperty("debug", false);
JU.Logger._activeLevels[4] = JU.Logger.getProperty("info", true);
JU.Logger._activeLevels[3] = JU.Logger.getProperty("warn", true);
JU.Logger._activeLevels[2] = JU.Logger.getProperty("error", true);
JU.Logger._activeLevels[1] = JU.Logger.getProperty("fatal", true);
JU.Logger._logLevel = JU.Logger.getProperty("logLevel", false);
JU.Logger.debugging = (JU.Logger._logger != null && (JU.Logger._activeLevels[5] || JU.Logger._activeLevels[6]));
JU.Logger.debuggingHigh = (JU.Logger.debugging && JU.Logger._activeLevels[6]);
}c$.htTiming =  new java.util.Hashtable();
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["JU.LoggerInterface"], "JU.DefaultLogger", ["JU.Logger"], function(){
var c$ = Clazz.declareType(JU, "DefaultLogger", null, JU.LoggerInterface);
Clazz.defineMethod(c$, "log", 
function(out, level, txt, e){
if (out === System.err) System.out.flush();
if ((out != null) && ((txt != null) || (e != null))) {
txt = (txt != null ? txt : "");
txt = (JU.Logger.logLevel() ? "[" + JU.Logger.getLevel(level) + "] " : "") + txt + (e != null ? ": " + e.toString() : "");
out.println(txt);
if (e != null) {
var elements = e.getStackTrace();
if (elements != null) {
for (var i = 0; i < elements.length; i++) {
out.println(elements[i].getClassName() + " - " + elements[i].getLineNumber() + " - " + elements[i].getMethodName());
}
}}}if (out === System.err) System.err.flush();
return txt;
}, "java.io.PrintStream,~N,~S,Throwable");
Clazz.overrideMethod(c$, "debug", 
function(txt){
this.log(System.out, 5, txt, null);
}, "~S");
Clazz.overrideMethod(c$, "info", 
function(txt){
this.log(System.out, 4, txt, null);
}, "~S");
Clazz.overrideMethod(c$, "warn", 
function(txt){
this.log(System.out, 3, txt, null);
}, "~S");
Clazz.overrideMethod(c$, "warnEx", 
function(txt, e){
this.log(System.out, 3, txt, e);
}, "~S,Throwable");
Clazz.overrideMethod(c$, "error", 
function(txt){
this.log(System.err, 2, txt, null);
}, "~S");
Clazz.overrideMethod(c$, "errorEx", 
function(txt, e){
this.log(System.err, 2, txt, e);
}, "~S,Throwable");
Clazz.overrideMethod(c$, "fatal", 
function(txt){
this.log(System.err, 1, txt, null);
}, "~S");
Clazz.overrideMethod(c$, "fatalEx", 
function(txt, e){
this.log(System.err, 1, txt, e);
}, "~S,Throwable");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.declareInterface(JU, "LoggerInterface");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["java.lang.Enum", "JSV.common.Coordinate"], "JSV.common.Annotation", ["JU.CU"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.text = "";
this.$isPixels = false;
this.is2D = false;
this.offsetX = 0;
this.offsetY = 0;
this.spec = null;
Clazz.instantialize(this, arguments);}, JSV.common, "Annotation", JSV.common.Coordinate);
Clazz.defineMethod(c$, "setA", 
function(x, y, spec, text, isPixels, is2D, offsetX, offsetY){
this.set(x, y);
this.spec = spec;
this.text = text;
this.$isPixels = isPixels;
this.is2D = is2D;
this.offsetX = offsetX;
this.offsetY = offsetY;
return this;
}, "~N,~N,JSV.common.Spectrum,~S,~B,~B,~N,~N");
Clazz.defineMethod(c$, "setSpec", 
function(spec){
this.spec = spec;
return this;
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "addSpecShift", 
function(dx){
this.setXVal(this.getXVal() + dx);
}, "~N");
Clazz.defineMethod(c$, "isPixels", 
function(){
return this.$isPixels;
});
Clazz.overrideMethod(c$, "toString", 
function(){
return "[" + this.getXVal() + ", " + this.getYVal() + "," + this.text + "]";
});
c$.getColoredAnnotation = Clazz.defineMethod(c$, "getColoredAnnotation", 
function(g2d, spec, args, lastAnnotation){
var arg;
var xPt = 0;
var yPt = 1;
var colorPt = 2;
var textPt = 3;
var nArgs = args.size();
try {
switch (nArgs) {
default:
return null;
case 1:
arg = args.get(0);
xPt = yPt = -1;
if (arg.charAt(0) == '\"') {
textPt = 0;
colorPt = -1;
} else {
colorPt = 0;
textPt = -1;
}break;
case 2:
xPt = yPt = -1;
arg = args.get(0);
if (arg.charAt(0) == '\"') {
textPt = 0;
colorPt = 1;
} else {
colorPt = 0;
textPt = 1;
}break;
case 3:
case 4:
arg = args.get(2);
if (arg.charAt(0) == '\"') {
textPt = 2;
colorPt = (nArgs == 4 ? 3 : -1);
} else {
colorPt = 2;
textPt = (nArgs == 4 ? 3 : -1);
}arg = args.get(2);
if (arg.charAt(0) == '\"') {
textPt = 2;
colorPt = -1;
} else {
colorPt = 2;
textPt = -1;
}}
if (lastAnnotation == null && (xPt < 0 || yPt < 0 || textPt < 0 || colorPt < 0)) return null;
var x = (xPt < 0 ? lastAnnotation.getXVal() : Double.$valueOf(args.get(xPt)).doubleValue());
var y = (yPt < 0 ? lastAnnotation.getYVal() : Double.$valueOf(args.get(yPt)).doubleValue());
var color = (colorPt < 0 ? (lastAnnotation).getColor() : g2d.getColor1(JU.CU.getArgbFromString(args.get(colorPt))));
var text;
if (textPt < 0) {
text = lastAnnotation.text;
} else {
text = args.get(textPt);
if (text.charAt(0) == '\"') text = text.substring(1, text.length - 1);
}return  new JSV.common.ColoredAnnotation().setCA(x, y, spec, text, color, false, false, 0, 0);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return null;
} else {
throw e;
}
}
}, "J.api.GenericGraphics,JSV.common.Spectrum,JU.Lst,JSV.common.Annotation");
/*if2*/;(function(){
var c$ = Clazz.declareType(JSV.common.Annotation, "AType", Enum);
Clazz.defineEnumConstant(c$, "Integration", 0, []);
Clazz.defineEnumConstant(c$, "PeakList", 1, []);
Clazz.defineEnumConstant(c$, "Measurements", 2, []);
Clazz.defineEnumConstant(c$, "OverlayLegend", 3, []);
Clazz.defineEnumConstant(c$, "Views", 4, []);
Clazz.defineEnumConstant(c$, "NONE", 5, []);
/*eoif2*/})();
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.util.Hashtable"], "JU.CU", ["JU.P3", "$.PT"], function(){
var c$ = Clazz.declareType(JU, "CU", null);
c$.toRGBHexString = Clazz.defineMethod(c$, "toRGBHexString", 
function(c){
var rgb = c.getRGB();
if (rgb == 0) return "000000";
var r = "00" + Integer.toHexString((rgb >> 16) & 0xFF);
r = r.substring(r.length - 2);
var g = "00" + Integer.toHexString((rgb >> 8) & 0xFF);
g = g.substring(g.length - 2);
var b = "00" + Integer.toHexString(rgb & 0xFF);
b = b.substring(b.length - 2);
return r + g + b;
}, "javajs.api.GenericColor");
c$.toCSSString = Clazz.defineMethod(c$, "toCSSString", 
function(c){
var opacity = c.getOpacity255();
if (opacity == 255) return "#" + JU.CU.toRGBHexString(c);
var rgb = c.getRGB();
return "rgba(" + ((rgb >> 16) & 0xFF) + "," + ((rgb >> 8) & 0xff) + "," + (rgb & 0xff) + "," + opacity / 255 + ")";
}, "javajs.api.GenericColor");
c$.getArgbFromString = Clazz.defineMethod(c$, "getArgbFromString", 
function(strColor){
var len = 0;
if (strColor == null || (len = strColor.length) == 0) return 0;
strColor = strColor.toLowerCase();
if (strColor.charAt(0) == '[' && strColor.charAt(len - 1) == ']') {
var check;
if (strColor.indexOf(",") >= 0) {
var tokens = JU.PT.split(strColor.substring(1, strColor.length - 1), ",");
if (tokens.length != 3) return 0;
var red = JU.PT.parseFloat(tokens[0]);
var grn = JU.PT.parseFloat(tokens[1]);
var blu = JU.PT.parseFloat(tokens[2]);
return JU.CU.colorTriadToFFRGB(red, grn, blu);
}switch (len) {
case 9:
check = "x";
break;
case 10:
check = "0x";
break;
default:
return 0;
}
if (strColor.indexOf(check) != 1) return 0;
strColor = "#" + strColor.substring(len - 7, len - 1);
len = 7;
}if (len == 7 && strColor.charAt(0) == '#') {
try {
return JU.PT.parseIntRadix(strColor.substring(1, 7), 16) | 0xFF000000;
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return 0;
} else {
throw e;
}
}
}var boxedArgb = JU.CU.mapJavaScriptColors.get(strColor);
return (boxedArgb == null ? 0 : boxedArgb.intValue());
}, "~S");
c$.colorTriadToFFRGB = Clazz.defineMethod(c$, "colorTriadToFFRGB", 
function(x, y, z){
if (x <= 1 && y <= 1 && z <= 1) {
if (x > 0) x = x * 256 - 1;
if (y > 0) y = y * 256 - 1;
if (z > 0) z = z * 256 - 1;
}return JU.CU.rgb(Clazz.floatToInt(x), Clazz.floatToInt(y), Clazz.floatToInt(z));
}, "~N,~N,~N");
c$.rgb = Clazz.defineMethod(c$, "rgb", 
function(red, grn, blu){
return 0xFF000000 | (red << 16) | (grn << 8) | blu;
}, "~N,~N,~N");
c$.colorPtFromString = Clazz.defineMethod(c$, "colorPtFromString", 
function(colorName){
return JU.CU.colorPtFromInt(JU.CU.getArgbFromString(colorName), null);
}, "~S");
c$.colorPtFromInt = Clazz.defineMethod(c$, "colorPtFromInt", 
function(color, pt){
if (pt == null) pt =  new JU.P3();
pt.set((color >> 16) & 0xFF, (color >> 8) & 0xFF, color & 0xFF);
return pt;
}, "~N,JU.P3");
c$.colorPtToFFRGB = Clazz.defineMethod(c$, "colorPtToFFRGB", 
function(pt){
return JU.CU.colorTriadToFFRGB(pt.x, pt.y, pt.z);
}, "JU.T3");
c$.toRGB3f = Clazz.defineMethod(c$, "toRGB3f", 
function(c, f){
f[0] = ((c >> 16) & 0xFF) / 255;
f[1] = ((c >> 8) & 0xFF) / 255;
f[2] = (c & 0xFF) / 255;
}, "~N,~A");
c$.toFFGGGfromRGB = Clazz.defineMethod(c$, "toFFGGGfromRGB", 
function(rgb){
var grey = (Clazz.doubleToInt(((2989 * ((rgb >> 16) & 0xFF)) + (5870 * ((rgb >> 8) & 0xFF)) + (1140 * (rgb & 0xFF)) + 5000) / 10000)) & 0xFFFFFF;
return JU.CU.rgb(grey, grey, grey);
}, "~N");
c$.rgbToHSL = Clazz.defineMethod(c$, "rgbToHSL", 
function(rgb, doRound){
var r = rgb.x / 255;
var g = rgb.y / 255;
var b = rgb.z / 255;
var min = Math.min(r, Math.min(g, b));
var max = Math.max(r, Math.max(g, b));
var p = (max + min);
var q = (max - min);
var h = (60 * ((q == 0 ? 0 : max == r ? ((g - b) / q + 6) : max == g ? (b - r) / q + 2 : (r - g) / q + 4))) % 360;
var s = q / (q == 0 ? 1 : p <= 1 ? p : 2 - p);
return (doRound ? JU.P3.new3(Math.round(h * 10) / 10, Math.round(s * 1000) / 10, Math.round(p * 500) / 10) : JU.P3.new3(h, s * 100, p * 50));
}, "JU.P3,~B");
c$.hslToRGB = Clazz.defineMethod(c$, "hslToRGB", 
function(hsl){
var h = Math.max(0, Math.min(360, hsl.x)) / 60;
var s = Math.max(0, Math.min(100, hsl.y)) / 100;
var l = Math.max(0, Math.min(100, hsl.z)) / 100;
var p = l - (l < 0.5 ? l : 1 - l) * s;
var q = 2 * (l - p);
var r = JU.CU.toRGB(p, q, h + 2);
var g = JU.CU.toRGB(p, q, h);
var b = JU.CU.toRGB(p, q, h - 2);
return JU.P3.new3(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}, "JU.P3");
c$.toRGB = Clazz.defineMethod(c$, "toRGB", 
function(p, q, h){
return ((h = (h + (h < 0 ? 6 : h > 6 ? -6 : 0))) < 1 ? p + q * h : h < 3 ? p + q : h < 4 ? p + q * (4 - h) : p);
}, "~N,~N,~N");
c$.colorNames =  Clazz.newArray(-1, ["contrast", "black", "pewhite", "pecyan", "pepurple", "pegreen", "peblue", "peviolet", "pebrown", "pepink", "peyellow", "pedarkgreen", "peorange", "pelightblue", "pedarkcyan", "pedarkgray", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightgray", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "bluetint", "greenblue", "greentint", "grey", "gray", "pinktint", "redorange", "yellowtint"]);
c$.colorArgbs =  Clazz.newIntArray(-1, [0xFFfedcba, 0xFF000000, 0xFFffffff, 0xFF00ffff, 0xFFd020ff, 0xFF00ff00, 0xFF6060ff, 0xFFff80c0, 0xFFa42028, 0xFFffd8d8, 0xFFffff00, 0xFF00c000, 0xFFffb000, 0xFFb0b0ff, 0xFF00a0a0, 0xFF606060, 0xFFF0F8FF, 0xFFFAEBD7, 0xFF00FFFF, 0xFF7FFFD4, 0xFFF0FFFF, 0xFFF5F5DC, 0xFFFFE4C4, 0xFFFFEBCD, 0xFF0000FF, 0xFF8A2BE2, 0xFFA52A2A, 0xFFDEB887, 0xFF5F9EA0, 0xFF7FFF00, 0xFFD2691E, 0xFFFF7F50, 0xFF6495ED, 0xFFFFF8DC, 0xFFDC143C, 0xFF00FFFF, 0xFF00008B, 0xFF008B8B, 0xFFB8860B, 0xFFA9A9A9, 0xFF006400, 0xFFBDB76B, 0xFF8B008B, 0xFF556B2F, 0xFFFF8C00, 0xFF9932CC, 0xFF8B0000, 0xFFE9967A, 0xFF8FBC8F, 0xFF483D8B, 0xFF2F4F4F, 0xFF00CED1, 0xFF9400D3, 0xFFFF1493, 0xFF00BFFF, 0xFF696969, 0xFF1E90FF, 0xFFB22222, 0xFFFFFAF0, 0xFF228B22, 0xFFFF00FF, 0xFFDCDCDC, 0xFFF8F8FF, 0xFFFFD700, 0xFFDAA520, 0xFF808080, 0xFF008000, 0xFFADFF2F, 0xFFF0FFF0, 0xFFFF69B4, 0xFFCD5C5C, 0xFF4B0082, 0xFFFFFFF0, 0xFFF0E68C, 0xFFE6E6FA, 0xFFFFF0F5, 0xFF7CFC00, 0xFFFFFACD, 0xFFADD8E6, 0xFFF08080, 0xFFE0FFFF, 0xFFFAFAD2, 0xFF90EE90, 0xFFD3D3D3, 0xFFD3D3D3, 0xFFFFB6C1, 0xFFFFA07A, 0xFF20B2AA, 0xFF87CEFA, 0xFF778899, 0xFFB0C4DE, 0xFFFFFFE0, 0xFF00FF00, 0xFF32CD32, 0xFFFAF0E6, 0xFFFF00FF, 0xFF800000, 0xFF66CDAA, 0xFF0000CD, 0xFFBA55D3, 0xFF9370DB, 0xFF3CB371, 0xFF7B68EE, 0xFF00FA9A, 0xFF48D1CC, 0xFFC71585, 0xFF191970, 0xFFF5FFFA, 0xFFFFE4E1, 0xFFFFE4B5, 0xFFFFDEAD, 0xFF000080, 0xFFFDF5E6, 0xFF808000, 0xFF6B8E23, 0xFFFFA500, 0xFFFF4500, 0xFFDA70D6, 0xFFEEE8AA, 0xFF98FB98, 0xFFAFEEEE, 0xFFDB7093, 0xFFFFEFD5, 0xFFFFDAB9, 0xFFCD853F, 0xFFFFC0CB, 0xFFDDA0DD, 0xFFB0E0E6, 0xFF800080, 0xFFFF0000, 0xFFBC8F8F, 0xFF4169E1, 0xFF8B4513, 0xFFFA8072, 0xFFF4A460, 0xFF2E8B57, 0xFFFFF5EE, 0xFFA0522D, 0xFFC0C0C0, 0xFF87CEEB, 0xFF6A5ACD, 0xFF708090, 0xFFFFFAFA, 0xFF00FF7F, 0xFF4682B4, 0xFFD2B48C, 0xFF008080, 0xFFD8BFD8, 0xFFFF6347, 0xFF40E0D0, 0xFFEE82EE, 0xFFF5DEB3, 0xFFFFFFFF, 0xFFF5F5F5, 0xFFFFFF00, 0xFF9ACD32, 0xFFAFD7FF, 0xFF2E8B57, 0xFF98FFB3, 0xFF808080, 0xFF808080, 0xFFFFABBB, 0xFFFF4500, 0xFFF6F675]);
c$.mapJavaScriptColors =  new java.util.Hashtable();
{
for (var i = JU.CU.colorNames.length; --i >= 0; ) JU.CU.mapJavaScriptColors.put(JU.CU.colorNames[i], Integer.$valueOf(JU.CU.colorArgbs[i]));

}});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.exception");
Clazz.load(["java.lang.Exception"], "JSV.exception.JSVException", null, function(){
var c$ = Clazz.declareType(JSV.exception, "JSVException", Exception);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.Parameters", ["java.util.Hashtable", "JSV.common.ScriptToken"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.name = null;
this.integralMinY = 0.1;
this.integralRange = 50.0;
this.integralOffset = 30.0;
this.integralDrawAll = false;
this.viewOffset = 0;
this.peakListThreshold = NaN;
this.peakListInterpolation = "parabolic";
this.precision = 2;
this.htBooleans = null;
Clazz.instantialize(this, arguments);}, JSV.common, "Parameters", null);
Clazz.makeConstructor(c$, 
function(){
this.htBooleans =  new java.util.Hashtable();
this.setBoolean(JSV.common.ScriptToken.TITLEON, true);
this.setBoolean(JSV.common.ScriptToken.ENABLEZOOM, true);
this.setBoolean(JSV.common.ScriptToken.DISPLAY2D, true);
this.setBoolean(JSV.common.ScriptToken.COORDINATESON, true);
this.setBoolean(JSV.common.ScriptToken.PEAKTABSON, true);
this.setBoolean(JSV.common.ScriptToken.POINTSONLY, false);
this.setBoolean(JSV.common.ScriptToken.GRIDON, true);
this.setBoolean(JSV.common.ScriptToken.XSCALEON, true);
this.setBoolean(JSV.common.ScriptToken.YSCALEON, true);
this.setBoolean(JSV.common.ScriptToken.XUNITSON, true);
this.setBoolean(JSV.common.ScriptToken.YUNITSON, true);
});
Clazz.defineMethod(c$, "setName", 
function(name){
this.name = name;
return this;
}, "~S");
Clazz.defineMethod(c$, "getBooleans", 
function(){
return this.htBooleans;
});
Clazz.defineMethod(c$, "setBoolean", 
function(st, val){
this.htBooleans.put(st, Boolean.$valueOf(val));
return val;
}, "JSV.common.ScriptToken,~B");
Clazz.defineMethod(c$, "getBoolean", 
function(t){
return Boolean.TRUE === this.htBooleans.get(t);
}, "JSV.common.ScriptToken");
c$.isTrue = Clazz.defineMethod(c$, "isTrue", 
function(value){
return (value.length == 0 || Boolean.parseBoolean(value));
}, "~S");
c$.getTFToggle = Clazz.defineMethod(c$, "getTFToggle", 
function(value){
return (value.equalsIgnoreCase("TOGGLE") ? null : JSV.common.Parameters.isTrue(value) ? Boolean.TRUE : Boolean.FALSE);
}, "~S");
Clazz.defineMethod(c$, "setP", 
function(pd, st, value){
switch (st) {
default:
return;
case JSV.common.ScriptToken.COORDINATESON:
case JSV.common.ScriptToken.DISPLAY1D:
case JSV.common.ScriptToken.DISPLAY2D:
case JSV.common.ScriptToken.ENABLEZOOM:
case JSV.common.ScriptToken.GRIDON:
case JSV.common.ScriptToken.POINTSONLY:
case JSV.common.ScriptToken.PEAKTABSON:
case JSV.common.ScriptToken.REVERSEPLOT:
case JSV.common.ScriptToken.TITLEON:
case JSV.common.ScriptToken.TITLEBOLDON:
case JSV.common.ScriptToken.XSCALEON:
case JSV.common.ScriptToken.XUNITSON:
case JSV.common.ScriptToken.YSCALEON:
case JSV.common.ScriptToken.YUNITSON:
var tfToggle = JSV.common.Parameters.getTFToggle(value);
if (tfToggle != null) {
this.setBoolean(st, tfToggle.booleanValue());
break;
}if (pd == null) return;
var b = !pd.getBoolean(st);
switch (st) {
default:
break;
case JSV.common.ScriptToken.XSCALEON:
this.setBoolean(JSV.common.ScriptToken.XUNITSON, b);
pd.setBoolean(JSV.common.ScriptToken.XUNITSON, b);
break;
case JSV.common.ScriptToken.YSCALEON:
this.setBoolean(JSV.common.ScriptToken.YUNITSON, b);
pd.setBoolean(JSV.common.ScriptToken.YUNITSON, b);
break;
}
this.setBoolean(st, b);
break;
}
if (pd == null) return;
pd.setBooleans(this, st);
}, "JSV.common.PanelData,JSV.common.ScriptToken,~S");
c$.isMatch = Clazz.defineMethod(c$, "isMatch", 
function(match, key){
return match == null || key.equalsIgnoreCase(match);
}, "~S,~S");
c$.putInfo = Clazz.defineMethod(c$, "putInfo", 
function(match, info, key, value){
if (value != null && JSV.common.Parameters.isMatch(match, key)) info.put(match == null ? key : match, value);
}, "~S,java.util.Map,~S,~O");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["java.lang.Enum"], "JSV.common.ScriptToken", ["java.util.Hashtable", "JU.Lst", "$.PT", "$.SB", "JSV.common.ScriptTokenizer"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.tip = null;
this.description = null;
Clazz.instantialize(this, arguments);}, JSV.common, "ScriptToken", Enum);
Clazz.defineMethod(c$, "getTip", 
function(){
return "  " + (this.tip === "T" ? "TRUE/FALSE/TOGGLE" : this.tip === "TF" ? "TRUE or FALSE" : this.tip === "C" ? "COLOR" : this.tip);
});
Clazz.makeConstructor(c$, 
function(){
});
Clazz.makeConstructor(c$, 
function(tip){
this.tip = tip;
this.description = "";
}, "~S");
Clazz.makeConstructor(c$, 
function(tip, description){
this.tip = tip;
this.description = "-- " + description;
}, "~S,~S");
c$.getParams = Clazz.defineMethod(c$, "getParams", 
function(){
if (JSV.common.ScriptToken.htParams == null) {
JSV.common.ScriptToken.htParams =  new java.util.Hashtable();
for (var item, $item = 0, $$item = JSV.common.ScriptToken.values(); $item < $$item.length && ((item = $$item[$item]) || true); $item++) JSV.common.ScriptToken.htParams.put(item.name(), item);

}return JSV.common.ScriptToken.htParams;
});
c$.getScriptToken = Clazz.defineMethod(c$, "getScriptToken", 
function(name){
var st = JSV.common.ScriptToken.getParams().get(name.toUpperCase());
return (st == null ? JSV.common.ScriptToken.UNKNOWN : st);
}, "~S");
c$.getScriptTokenList = Clazz.defineMethod(c$, "getScriptTokenList", 
function(name, isExact){
if (name != null) name = name.toUpperCase();
var list =  new JU.Lst();
if (isExact) {
var st = JSV.common.ScriptToken.getScriptToken(name);
if (st != null) list.addLast(st);
} else {
for (var entry, $entry = JSV.common.ScriptToken.getParams().entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) if ((name == null || entry.getKey().startsWith(name)) && entry.getValue().tip != null) list.addLast(entry.getValue());

}return list;
}, "~S,~B");
c$.getValue = Clazz.defineMethod(c$, "getValue", 
function(st, params, cmd){
if (!params.hasMoreTokens()) return "";
switch (st) {
default:
return JSV.common.ScriptTokenizer.nextStringToken(params, true);
case JSV.common.ScriptToken.CLOSE:
case JSV.common.ScriptToken.GETPROPERTY:
case JSV.common.ScriptToken.INTEGRATION:
case JSV.common.ScriptToken.INTEGRATE:
case JSV.common.ScriptToken.JMOL:
case JSV.common.ScriptToken.LABEL:
case JSV.common.ScriptToken.LOAD:
case JSV.common.ScriptToken.PEAK:
case JSV.common.ScriptToken.PLOTCOLORS:
case JSV.common.ScriptToken.YSCALE:
case JSV.common.ScriptToken.WRITE:
return JSV.common.ScriptToken.removeCommandName(cmd);
case JSV.common.ScriptToken.SELECT:
case JSV.common.ScriptToken.OVERLAY:
case JSV.common.ScriptToken.VIEW:
case JSV.common.ScriptToken.ZOOM:
return JSV.common.ScriptToken.removeCommandName(cmd).$replace(',', ' ').trim();
}
}, "JSV.common.ScriptToken,JSV.common.ScriptTokenizer,~S");
c$.removeCommandName = Clazz.defineMethod(c$, "removeCommandName", 
function(cmd){
var pt = cmd.indexOf(" ");
if (pt < 0) return "";
return cmd.substring(pt).trim();
}, "~S");
c$.getKey = Clazz.defineMethod(c$, "getKey", 
function(eachParam){
var key = eachParam.nextToken();
if (key.startsWith("#") || key.startsWith("//")) return null;
if (key.equalsIgnoreCase("SET")) key = eachParam.nextToken();
return key.toUpperCase();
}, "JSV.common.ScriptTokenizer");
c$.getTokens = Clazz.defineMethod(c$, "getTokens", 
function(value){
if (value.startsWith("'") && value.endsWith("'")) value = "\"" + JU.PT.trim(value, "'") + "\"";
var tokens =  new JU.Lst();
var st =  new JSV.common.ScriptTokenizer(value, false);
while (st.hasMoreTokens()) {
var s = JSV.common.ScriptTokenizer.nextStringToken(st, false);
if (s.startsWith("//") || s.startsWith("#")) break;
tokens.addLast(s);
}
return tokens;
}, "~S");
c$.getNameList = Clazz.defineMethod(c$, "getNameList", 
function(list){
if (list.size() == 0) return "";
var sb =  new JU.SB();
for (var i = 0; i < list.size(); i++) sb.append(",").append(list.get(i).toString());

return sb.toString().substring(1);
}, "JU.Lst");
Clazz.defineMethod(c$, "getDescription", 
function(){
return this.description;
});
c$.htParams = null;
Clazz.defineEnumConstant(c$, "UNKNOWN", 0, []);
Clazz.defineEnumConstant(c$, "APPLETID", 1, []);
Clazz.defineEnumConstant(c$, "APPLETREADYCALLBACKFUNCTIONNAME", 2, []);
Clazz.defineEnumConstant(c$, "AUTOINTEGRATE", 3, ["TF", "automatically integrate an NMR spectrum"]);
Clazz.defineEnumConstant(c$, "BACKGROUNDCOLOR", 4, ["C", "set the background color"]);
Clazz.defineEnumConstant(c$, "CLOSE", 5, ["spectrumId or fileName or ALL or VIEWS or SIMULATIONS", "close one or more views or simulations"]);
Clazz.defineEnumConstant(c$, "COMPOUNDMENUON", 6, []);
Clazz.defineEnumConstant(c$, "COORDCALLBACKFUNCTIONNAME", 7, []);
Clazz.defineEnumConstant(c$, "COORDINATESCOLOR", 8, ["C", "set the color of the coordinates shown in the upper right-hand corner"]);
Clazz.defineEnumConstant(c$, "COORDINATESON", 9, ["T", "turn on or off the coordinates shown in the upper right-hand corner"]);
Clazz.defineEnumConstant(c$, "DEBUG", 10, ["TF", "turn debugging on and off"]);
Clazz.defineEnumConstant(c$, "DEFAULTLOADSCRIPT", 11, ["\"script...\"", "set the script to be run after each file is loaded"]);
Clazz.defineEnumConstant(c$, "DEFAULTNMRNORMALIZATION", 12, ["maxYvalue", "set the value to be given the largest peak in an HMR spectrum"]);
Clazz.defineEnumConstant(c$, "DISPLAYFONTNAME", 13, []);
Clazz.defineEnumConstant(c$, "DISPLAY1D", 14, ["T", "turn on or off display of 1D spectra when 1D and 2D spectra are loaded"]);
Clazz.defineEnumConstant(c$, "DISPLAY2D", 15, ["T", "turn on or off display of the 2D spectrum when 1D and 2D spectra are loaded"]);
Clazz.defineEnumConstant(c$, "ENABLEZOOM", 16, ["T", "allow or disallow zooming"]);
Clazz.defineEnumConstant(c$, "ENDINDEX", 17, []);
Clazz.defineEnumConstant(c$, "FINDX", 18, ["value", "move the vertical-line cursor to a specific x-axis value"]);
Clazz.defineEnumConstant(c$, "GETPROPERTY", 19, ["[propertyName] or ALL or NAMES", "get a property value or all property values as key/value pairs, or a list of names"]);
Clazz.defineEnumConstant(c$, "GETSOLUTIONCOLOR", 20, [" FILL or FILLNONE or FILLALL or FILLALLNONE", "estimate the solution color for UV/VIS spectra"]);
Clazz.defineEnumConstant(c$, "GRIDCOLOR", 21, ["C", "color of the grid"]);
Clazz.defineEnumConstant(c$, "GRIDON", 22, ["T", "turn the grid lines on or off"]);
Clazz.defineEnumConstant(c$, "HELP", 23, ["[command]", "get this listing or help for a specific command"]);
Clazz.defineEnumConstant(c$, "HIDDEN", 24, []);
Clazz.defineEnumConstant(c$, "HIGHLIGHTCOLOR", 25, ["C", "set the highlight color"]);
Clazz.defineEnumConstant(c$, "HIGHLIGHT", 26, ["OFF or X1 X2 [OFF] or X1 X2 r g b [a]", "turns on or off a highlight color, possibily setting its color, where r g b a are 0-255 or 0.0-1.0"]);
Clazz.defineEnumConstant(c$, "INTEGRALOFFSET", 27, ["percent", "sets the integral offset from baseline"]);
Clazz.defineEnumConstant(c$, "INTEGRALRANGE", 28, ["percent", "sets the height of the total integration"]);
Clazz.defineEnumConstant(c$, "INTEGRATE", 29, ["", "see INTEGRATION"]);
Clazz.defineEnumConstant(c$, "INTEGRATION", 30, ["ON/OFF/TOGGLE/AUTO/CLEAR/MIN value/MARK ppm1-ppm2:norm,ppm3-ppm4,...", "show/hide integration or set integrals (1D 1H NMR only)"]);
Clazz.defineEnumConstant(c$, "INTEGRALPLOTCOLOR", 31, ["C", "color of the integration line"]);
Clazz.defineEnumConstant(c$, "INTEGRATIONRATIOS", 32, ["'x:value,x:value,..'", "annotate the spectrum with numbers or text at specific x values"]);
Clazz.defineEnumConstant(c$, "INTERFACE", 33, ["SINGLE or OVERLAY", "set how multiple spectra are displayed"]);
Clazz.defineEnumConstant(c$, "INVERTY", 34, ["", "invert the Y axis"]);
Clazz.defineEnumConstant(c$, "IRMODE", 35, ["A or T or TOGGLE", "set the IR mode to absorption or transmission"]);
Clazz.defineEnumConstant(c$, "JMOL", 36, ["...Jmol command...", "send a command to Jmol (if present)"]);
Clazz.defineEnumConstant(c$, "JSV", 37, []);
Clazz.defineEnumConstant(c$, "LABEL", 38, ["x y [color and/or \"text\"]", "add a text label"]);
Clazz.defineEnumConstant(c$, "LINK", 39, ["AB or ABC or NONE or ALL", "synchronize the crosshair of a 2D spectrum with 1D cursors"]);
Clazz.defineEnumConstant(c$, "LOAD", 40, ["[APPEND] \"fileName\" [first] [last]; use \"\" for current file; $H1/name or $C13/name for simulation", "load a specturm"]);
Clazz.defineEnumConstant(c$, "LOADFILECALLBACKFUNCTIONNAME", 41, []);
Clazz.defineEnumConstant(c$, "LOADIMAGINARY", 42, ["TF", "set TRUE to load imaginary NMR component"]);
Clazz.defineEnumConstant(c$, "MENUON", 43, []);
Clazz.defineEnumConstant(c$, "OBSCURE", 44, []);
Clazz.defineEnumConstant(c$, "OVERLAY", 45, []);
Clazz.defineEnumConstant(c$, "OVERLAYSTACKED", 46, ["TF", "whether viewed spectra are shown separately, in a stack"]);
Clazz.defineEnumConstant(c$, "PEAK", 47, ["[IR,CNMR,HNMR,MS] [#nnn or ID=xxx or text] [ALL], for example: PEAK HNMR #3", "highlights a peak based on its number or title text, optionally checking all loade spectra"]);
Clazz.defineEnumConstant(c$, "PEAKCALLBACKFUNCTIONNAME", 48, []);
Clazz.defineEnumConstant(c$, "PEAKLIST", 49, ["[THRESHOLD=n] [INTERPOLATE=PARABOLIC or NONE]", "creates a peak list based on a threshold value and parabolic or no interpolation"]);
Clazz.defineEnumConstant(c$, "PEAKOVERCOLOR", 50, ["C", "sets the color of peak backgrounds when moused over"]);
Clazz.defineEnumConstant(c$, "PEAKTABCOLOR", 51, ["C", "sets the color of peak marks for a peak listing"]);
Clazz.defineEnumConstant(c$, "PEAKTABSON", 52, ["T", "show peak tabs for simulated spectra"]);
Clazz.defineEnumConstant(c$, "PLOTAREACOLOR", 53, ["C", "sets the color of the plot background"]);
Clazz.defineEnumConstant(c$, "PLOTCOLOR", 54, ["C", "sets the color of the graph line"]);
Clazz.defineEnumConstant(c$, "PLOTCOLORS", 55, ["color,color,color,...", "sets the colors of multiple plots"]);
Clazz.defineEnumConstant(c$, "POINTSONLY", 56, ["TF", "show points only for all data"]);
Clazz.defineEnumConstant(c$, "PRINT", 57, ["", "prints the current spectrum"]);
Clazz.defineEnumConstant(c$, "REVERSEPLOT", 58, ["T", "reverses the x-axis of a spectrum"]);
Clazz.defineEnumConstant(c$, "SCALEBY", 59, ["factor", "multiplies the y-scale of the spectrum by a factor"]);
Clazz.defineEnumConstant(c$, "SCALECOLOR", 60, ["C", "sets the color of the x-axis and y-axis scales"]);
Clazz.defineEnumConstant(c$, "SCRIPT", 61, ["filename.jsv", "runs a script from a file"]);
Clazz.defineEnumConstant(c$, "SELECT", 62, ["spectrumID, spectrumID,...", "selects one or more spectra based on IDs"]);
Clazz.defineEnumConstant(c$, "SETPEAK", 63, ["xNew, xOld xNew, ?, or NONE", "sets nearest peak to xOld ppm to a new value; NONE resets (1D NMR only)"]);
Clazz.defineEnumConstant(c$, "SETX", 64, ["xNew, xOld xNew, ?, or NONE", "sets an old ppm position in the spectrum to a new value; NONE resets (1D NMR only)"]);
Clazz.defineEnumConstant(c$, "SHIFTX", 65, ["dx or NONE", "shifts the x-axis of a 1D NMR spectrum by the given ppm; NONE resets (1D NMR only)"]);
Clazz.defineEnumConstant(c$, "SHOWERRORS", 66, ["shows recent errors"]);
Clazz.defineEnumConstant(c$, "SHOWINTEGRATION", 67, ["T", "shows an integration listing"]);
Clazz.defineEnumConstant(c$, "SHOWMEASUREMENTS", 68, ["T", "shows a listing of measurements"]);
Clazz.defineEnumConstant(c$, "SHOWMENU", 69, ["displays the popup menu"]);
Clazz.defineEnumConstant(c$, "SHOWPEAKLIST", 70, ["T", "shows a listing for peak picking"]);
Clazz.defineEnumConstant(c$, "SHOWPROPERTIES", 71, ["displays the header information of a JDX file"]);
Clazz.defineEnumConstant(c$, "SHOWSOURCE", 72, ["displays the source JDX file associated with the selected data"]);
Clazz.defineEnumConstant(c$, "SPECTRUM", 73, ["id", "displays a specific spectrum, where id is a number 1, 2, 3... or a file.spectrum number such as 2.1"]);
Clazz.defineEnumConstant(c$, "SPECTRUMNUMBER", 74, ["n", "displays the nth spectrum loaded"]);
Clazz.defineEnumConstant(c$, "STACKOFFSETY", 75, ["percent", "sets the y-axis offset of stacked spectra"]);
Clazz.defineEnumConstant(c$, "STARTINDEX", 76, []);
Clazz.defineEnumConstant(c$, "SYNCCALLBACKFUNCTIONNAME", 77, []);
Clazz.defineEnumConstant(c$, "SYNCID", 78, []);
Clazz.defineEnumConstant(c$, "TEST", 79, []);
Clazz.defineEnumConstant(c$, "TITLEON", 80, ["T", "turns the title in the bottom left corner on or off"]);
Clazz.defineEnumConstant(c$, "TITLEBOLDON", 81, ["T", "makes the title bold"]);
Clazz.defineEnumConstant(c$, "TITLECOLOR", 82, ["C", "sets the color of the title"]);
Clazz.defineEnumConstant(c$, "TITLEFONTNAME", 83, ["fontName", "sets the title font"]);
Clazz.defineEnumConstant(c$, "UNITSCOLOR", 84, ["C", "sets the color of the x-axis and y-axis units"]);
Clazz.defineEnumConstant(c$, "VERSION", 85, []);
Clazz.defineEnumConstant(c$, "VIEW", 86, ["spectrumID, spectrumID, ... Example: VIEW 3.1, 3.2  or  VIEW \"acetophenone\"", "creates a view of one or more spectra"]);
Clazz.defineEnumConstant(c$, "XSCALEON", 87, ["T", "set FALSE to turn off the x-axis scale"]);
Clazz.defineEnumConstant(c$, "XUNITSON", 88, ["T", "set FALSE to turn off the x-axis units"]);
Clazz.defineEnumConstant(c$, "YSCALE", 89, ["[ALL] lowValue highValue"]);
Clazz.defineEnumConstant(c$, "YSCALEON", 90, ["T", "set FALSE to turn off the y-axis scale"]);
Clazz.defineEnumConstant(c$, "YUNITSON", 91, ["T", "set FALSE to turn off the y-axis units"]);
Clazz.defineEnumConstant(c$, "WINDOW", 92, []);
Clazz.defineEnumConstant(c$, "WRITE", 93, ["[XY,DIF,DIFDUP,PAC,FIX,SQZ,AML,CML,JPG,PDF,PNG,SVG] \"filename\"", "writes a file in the specified format"]);
Clazz.defineEnumConstant(c$, "ZOOM", 94, ["OUT or PREVIOUS or NEXT or x1,x2 or x1,y1 x2,y2", "sets the zoom"]);
Clazz.defineEnumConstant(c$, "ZOOMBOXCOLOR", 95, []);
Clazz.defineEnumConstant(c$, "ZOOMBOXCOLOR2", 96, []);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.ScriptTokenizer", ["JU.PT"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.str = null;
this.pt = -1;
this.len = 0;
this.isCmd = false;
this.doCheck = true;
Clazz.instantialize(this, arguments);}, JSV.common, "ScriptTokenizer", null);
Clazz.makeConstructor(c$, 
function(str, isCmd){
this.str = str;
this.len = str.length;
this.isCmd = isCmd;
}, "~S,~B");
c$.nextStringToken = Clazz.defineMethod(c$, "nextStringToken", 
function(eachParam, removeQuotes){
var s = eachParam.nextToken();
return (removeQuotes && s.charAt(0) == '"' && s.endsWith("\"") && s.length > 1 ? JU.PT.trimQuotes(s) : s);
}, "JSV.common.ScriptTokenizer,~B");
Clazz.defineMethod(c$, "nextToken", 
function(){
if (this.doCheck) this.hasMoreTokens();
var pt0 = this.pt;
var inQuote = (this.str.charAt(this.pt) == '"');
while (++this.pt < this.len) {
switch ((this.str.charAt(this.pt)).charCodeAt(0)) {
case 34:
if (inQuote) {
if (this.isCmd) {
inQuote = false;
continue;
}this.pt++;
break;
}if (this.isCmd) inQuote = true;
continue;
case 32:
if (!this.isCmd && !inQuote) break;
continue;
case 59:
case 10:
if (this.isCmd && !inQuote) break;
continue;
default:
continue;
}
break;
}
this.doCheck = true;
return this.str.substring(pt0, this.pt);
});
Clazz.defineMethod(c$, "hasMoreTokens", 
function(){
while (++this.pt < this.len) {
switch ((this.str.charAt(this.pt)).charCodeAt(0)) {
case 32:
case 59:
case 10:
continue;
}
break;
}
this.doCheck = false;
return (this.pt < this.len);
});
Clazz.defineMethod(c$, "getRemainingScript", 
function(){
return this.str.substring(this.pt);
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.PeakInfo", ["JU.PT"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.xMin = 0;
this.xMax = 0;
this.yMin = 0;
this.yMax = 0;
this.px0 = 0;
this.px1 = 0;
this.stringInfo = null;
this.type = null;
this.type2 = null;
this.index = null;
this.file = null;
this.filePathForwardSlash = null;
this.title = null;
this.model = null;
this.atoms = null;
this.id = null;
this.spectrum = null;
this._match = null;
this.atomKey = null;
Clazz.instantialize(this, arguments);}, JSV.common, "PeakInfo", null);
/*LV!1824 unnec constructor*/Clazz.makeConstructor(c$, 
function(s){
if (s == null) return;
this.stringInfo = s;
this.type = JU.PT.getQuotedAttribute(s, "type");
if (this.type == null) this.type = "";
this.type = this.type.toUpperCase();
var pt = this.type.indexOf('/');
this.type2 = (pt < 0 ? "" : JSV.common.PeakInfo.fixType(this.type.substring(this.type.indexOf('/') + 1)));
if (pt >= 0) this.type = JSV.common.PeakInfo.fixType(this.type.substring(0, pt)) + "/" + this.type2;
 else this.type = JSV.common.PeakInfo.fixType(this.type);
this.id = JU.PT.getQuotedAttribute(s, "id");
this.index = JU.PT.getQuotedAttribute(s, "index");
this.file = JU.PT.getQuotedAttribute(s, "file");
System.out.println("PeakInfo file=" + this.file);
this.filePathForwardSlash = (this.file == null ? null : this.file.$replace('\\', '/'));
this.model = JU.PT.getQuotedAttribute(s, "model");
var isBaseModel = s.contains("baseModel=\"\"");
if (!isBaseModel) this.atoms = JU.PT.getQuotedAttribute(s, "atoms");
this.atomKey = "," + this.atoms + ",";
this.title = JU.PT.getQuotedAttribute(s, "title");
this._match = JU.PT.getQuotedAttribute(s, "_match");
this.xMax = JU.PT.parseFloat(JU.PT.getQuotedAttribute(s, "xMax"));
this.xMin = JU.PT.parseFloat(JU.PT.getQuotedAttribute(s, "xMin"));
this.yMax = JU.PT.parseFloat(JU.PT.getQuotedAttribute(s, "yMax"));
this.yMin = JU.PT.parseFloat(JU.PT.getQuotedAttribute(s, "yMin"));
}, "~S");
Clazz.defineMethod(c$, "isClearAll", 
function(){
return (this.spectrum == null);
});
Clazz.defineMethod(c$, "getType", 
function(){
return this.type;
});
Clazz.defineMethod(c$, "getAtoms", 
function(){
return this.atoms;
});
Clazz.defineMethod(c$, "getXMax", 
function(){
return this.xMax;
});
Clazz.defineMethod(c$, "getXMin", 
function(){
return this.xMin;
});
Clazz.defineMethod(c$, "getYMin", 
function(){
return this.yMin;
});
Clazz.defineMethod(c$, "getYMax", 
function(){
return this.yMax;
});
Clazz.defineMethod(c$, "getX", 
function(){
return (this.xMax + this.xMin) / 2;
});
Clazz.defineMethod(c$, "getMatch", 
function(){
return this._match;
});
c$.fixType = Clazz.defineMethod(c$, "fixType", 
function(type){
return (type.equals("HNMR") ? "1HNMR" : type.equals("CNMR") ? "13CNMR" : type);
}, "~S");
Clazz.overrideMethod(c$, "toString", 
function(){
return this.stringInfo;
});
Clazz.defineMethod(c$, "getIndex", 
function(){
return this.index;
});
Clazz.defineMethod(c$, "getTitle", 
function(){
return this.title;
});
Clazz.defineMethod(c$, "checkFileIndex", 
function(filePath, sIndex, sAtomKey){
return (sAtomKey != null ? this.atomKey.indexOf(sAtomKey) >= 0 : sIndex.equals(this.index) && (filePath.equals(this.file) || filePath.equals(this.filePathForwardSlash)));
}, "~S,~S,~S");
Clazz.defineMethod(c$, "checkFileTypeModel", 
function(filePath, type, model){
return filePath.equals(this.file) && this.checkModel(model) && this.type.endsWith(type);
}, "~S,~S,~S");
Clazz.defineMethod(c$, "checkTypeModel", 
function(type, model){
return this.checkType(type) && this.checkModel(model);
}, "~S,~S");
Clazz.defineMethod(c$, "checkModel", 
function(model){
return (model != null && model.equals(this.model));
}, "~S");
Clazz.defineMethod(c$, "checkType", 
function(type){
return (type.endsWith(this.type));
}, "~S");
Clazz.defineMethod(c$, "checkTypeMatch", 
function(pi){
return (this.checkType(pi.type) && (this.checkId(pi._match) || this.checkModel(pi._match) || this.title.toUpperCase().indexOf(pi._match) >= 0));
}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "checkId", 
function(match){
if (match == null) return false;
return (this.id != null && match.toUpperCase().startsWith("ID=") && match.substring(3).equals(this.id) || (match = match.toUpperCase()).startsWith("INDEX=") && match.equals("INDEX=" + this.index) || match.startsWith("#=") && match.equals("#=" + this.index));
}, "~S");
Clazz.defineMethod(c$, "getModel", 
function(){
return this.model;
});
Clazz.defineMethod(c$, "getFilePath", 
function(){
return this.file;
});
Clazz.defineMethod(c$, "autoSelectOnLoad", 
function(){
return (this.type.startsWith("GC"));
});
Clazz.defineMethod(c$, "setPixelRange", 
function(x0, x1){
this.px0 = x0;
this.px1 = x1;
}, "~N,~N");
Clazz.defineMethod(c$, "checkRange", 
function(xPixel, xVal){
if (xPixel != 2147483647 ? (this.px0 <= xPixel && this.px1 >= xPixel) : xVal >= this.xMin && xVal <= this.xMax) {
return Math.abs(xVal - this.getX());
}return 1e100;
}, "~N,~N");
Clazz.defineMethod(c$, "getXPixel", 
function(){
return Clazz.doubleToInt((this.px0 + this.px1) / 2);
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.io.OutputStream", "javajs.api.GenericOutputChannel"], "JU.OC", ["java.io.BufferedWriter", "$.ByteArrayOutputStream", "$.OutputStreamWriter", "JU.Base64", "$.SB"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.bytePoster = null;
this.fileName = null;
this.bw = null;
this.isLocalFile = false;
this.byteCount = 0;
this.isCanceled = false;
this.closed = false;
this.os = null;
this.sb = null;
this.type = null;
this.$isBase64 = false;
this.os0 = null;
this.bytes = null;
this.bigEndian = true;
Clazz.instantialize(this, arguments);}, JU, "OC", java.io.OutputStream, javajs.api.GenericOutputChannel);
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, JU.OC, []);
});
Clazz.makeConstructor(c$, 
function(fileName){
Clazz.superConstructor (this, JU.OC, []);
this.setParams(null, fileName, false, null);
}, "~S");
Clazz.defineMethod(c$, "setParams", 
function(bytePoster, fileName, asWriter, os){
this.bytePoster = bytePoster;
this.$isBase64 = ";base64,".equals(fileName);
if (this.$isBase64) {
fileName = null;
this.os0 = os;
os = null;
}this.fileName = fileName;
this.os = os;
this.isLocalFile = (fileName != null && !JU.OC.isRemote(fileName));
if (asWriter && !this.$isBase64 && os != null) this.bw =  new java.io.BufferedWriter( new java.io.OutputStreamWriter(os));
return this;
}, "javajs.api.BytePoster,~S,~B,java.io.OutputStream");
Clazz.overrideMethod(c$, "isBigEndian", 
function(){
return this.bigEndian;
});
Clazz.defineMethod(c$, "setBigEndian", 
function(TF){
this.bigEndian = TF;
}, "~B");
Clazz.defineMethod(c$, "setBytes", 
function(b){
this.bytes = b;
return this;
}, "~A");
Clazz.defineMethod(c$, "getFileName", 
function(){
return this.fileName;
});
Clazz.defineMethod(c$, "getName", 
function(){
return (this.fileName == null ? null : this.fileName.substring(this.fileName.lastIndexOf("/") + 1));
});
Clazz.defineMethod(c$, "getByteCount", 
function(){
return this.byteCount;
});
Clazz.defineMethod(c$, "setType", 
function(type){
this.type = type;
}, "~S");
Clazz.defineMethod(c$, "getType", 
function(){
return this.type;
});
Clazz.defineMethod(c$, "append", 
function(s){
try {
if (this.bw != null) {
this.bw.write(s);
} else if (this.os == null) {
if (this.sb == null) this.sb =  new JU.SB();
this.sb.append(s);
} else {
var b = s.getBytes();
this.os.write(b, 0, b.length);
this.byteCount += b.length;
return this;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.byteCount += s.length;
return this;
}, "~S");
Clazz.overrideMethod(c$, "reset", 
function(){
this.sb = null;
this.initOS();
});
Clazz.defineMethod(c$, "initOS", 
function(){
if (this.sb != null) {
var s = this.sb.toString();
this.reset();
this.append(s);
return;
}try {
{
this.os = null;
}if (this.os == null) this.os =  new java.io.ByteArrayOutputStream();
if (this.bw != null) {
this.bw.close();
this.bw =  new java.io.BufferedWriter( new java.io.OutputStreamWriter(this.os));
}} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
System.out.println(e.toString());
} else {
throw e;
}
}
this.byteCount = 0;
});
Clazz.overrideMethod(c$, "writeByteAsInt", 
function(b){
if (this.os == null) this.initOS();
{
this.os.writeByteAsInt(b);
}this.byteCount++;
}, "~N");
Clazz.overrideMethod(c$, "write", 
function(buf, i, len){
if (this.os == null) this.initOS();
if (len < 0) len = buf.length - i;
try {
this.os.write(buf, i, len);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.byteCount += len;
}, "~A,~N,~N");
Clazz.overrideMethod(c$, "writeShort", 
function(i){
if (this.isBigEndian()) {
this.writeByteAsInt(i >> 8);
this.writeByteAsInt(i);
} else {
this.writeByteAsInt(i);
this.writeByteAsInt(i >> 8);
}}, "~N");
Clazz.overrideMethod(c$, "writeLong", 
function(b){
if (this.isBigEndian()) {
this.writeInt(((b >> 32) & 0xFFFFFFFF));
this.writeInt((b & 0xFFFFFFFF));
} else {
this.writeByteAsInt((b >> 56));
this.writeByteAsInt((b >> 48));
this.writeByteAsInt((b >> 40));
this.writeByteAsInt((b >> 32));
this.writeByteAsInt((b >> 24));
this.writeByteAsInt((b >> 16));
this.writeByteAsInt((b >> 8));
this.writeByteAsInt(b);
}}, "~N");
Clazz.defineMethod(c$, "write", 
function(b){
this.write(b, 0, b.length);
}, "~A");
Clazz.defineMethod(c$, "cancel", 
function(){
this.isCanceled = true;
this.closeChannel();
});
Clazz.overrideMethod(c$, "closeChannel", 
function(){
if (this.closed) return null;
try {
if (this.bw != null) {
this.bw.flush();
this.bw.close();
} else if (this.os != null) {
this.os.flush();
this.os.close();
}if (this.os0 != null && this.isCanceled) {
this.os0.flush();
this.os0.close();
}} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
if (this.isCanceled) {
this.closed = true;
return null;
}if (this.fileName == null) {
if (this.$isBase64) {
var s = this.getBase64();
if (this.os0 != null) {
this.os = this.os0;
this.append(s);
}this.sb =  new JU.SB();
this.sb.append(s);
this.$isBase64 = false;
return this.closeChannel();
}return (this.sb == null ? null : this.sb.toString());
}this.closed = true;
if (!this.isLocalFile) {
var ret = this.postByteArray();
if (ret == null || ret.startsWith("java.net")) this.byteCount = -1;
return ret;
}var jmol = null;
var _function = null;
{
jmol = self.J2S || Jmol; _function = (typeof this.fileName ==
"function" ? this.fileName : null);
}if (jmol != null) {
var data = (this.sb == null ? this.toByteArray() : this.sb.toString());
if (_function == null) jmol.doAjax(this.fileName, null, data, this.sb == null);
 else jmol.applyFunc(this.fileName, data);
}return null;
});
Clazz.defineMethod(c$, "isBase64", 
function(){
return this.$isBase64;
});
Clazz.defineMethod(c$, "getBase64", 
function(){
return JU.Base64.getBase64(this.toByteArray()).toString();
});
Clazz.defineMethod(c$, "toByteArray", 
function(){
return (this.bytes != null ? this.bytes : Clazz.instanceOf(this.os,"java.io.ByteArrayOutputStream") ? (this.os).toByteArray() : null);
});
Clazz.defineMethod(c$, "close", 
function(){
this.closeChannel();
});
Clazz.overrideMethod(c$, "toString", 
function(){
if (this.bw != null) try {
this.bw.flush();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (this.sb != null) return this.closeChannel();
return this.byteCount + " bytes";
});
Clazz.defineMethod(c$, "postByteArray", 
function(){
var bytes = (this.sb == null ? this.toByteArray() : this.sb.toString().getBytes());
return this.bytePoster.postByteArray(this.fileName, bytes);
});
c$.isRemote = Clazz.defineMethod(c$, "isRemote", 
function(fileName){
if (fileName == null) return false;
var itype = JU.OC.urlTypeIndex(fileName);
return (itype >= 0 && itype < 4);
}, "~S");
c$.isLocal = Clazz.defineMethod(c$, "isLocal", 
function(fileName){
return (fileName != null && !JU.OC.isRemote(fileName));
}, "~S");
c$.urlTypeIndex = Clazz.defineMethod(c$, "urlTypeIndex", 
function(name){
if (name == null) return -2;
for (var i = 0; i < JU.OC.urlPrefixes.length; ++i) {
if (name.startsWith(JU.OC.urlPrefixes[i])) {
return i;
}}
return -1;
}, "~S");
Clazz.overrideMethod(c$, "writeInt", 
function(i){
if (this.bigEndian) {
this.writeByteAsInt(i >> 24);
this.writeByteAsInt(i >> 16);
this.writeByteAsInt(i >> 8);
this.writeByteAsInt(i);
} else {
this.writeByteAsInt(i);
this.writeByteAsInt(i >> 8);
this.writeByteAsInt(i >> 16);
this.writeByteAsInt(i >> 24);
}}, "~N");
Clazz.defineMethod(c$, "writeFloat", 
function(x){
this.writeInt(x == 0 ? 0 : Float.floatToIntBits(x));
}, "~N");
c$.urlPrefixes =  Clazz.newArray(-1, ["http:", "https:", "sftp:", "ftp:", "file:", "cache:"]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.load(["java.io.Closeable", "$.Flushable"], "java.io.OutputStream", null, function(){
var c$ = Clazz.declareType(java.io, "OutputStream", null, [java.io.Closeable, java.io.Flushable]);
Clazz.defineMethod(c$, "write", 
function(b, off, len){
if (b == null) {
throw  new NullPointerException();
} else if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) > b.length) || ((off + len) < 0)) {
throw  new IndexOutOfBoundsException();
} else if (len == 0) {
return;
}for (var i = 0; i < len; i++) {
this.writeByteAsInt(b[off + i]);
}
}, "~A,~N,~N");
Clazz.overrideMethod(c$, "flush", 
function(){
});
Clazz.overrideMethod(c$, "close", 
function(){
});
});
;//5.0.1-v7 Fri Dec 19 08:21:45 CST 2025

Clazz.declarePackage("javajs.api");
Clazz.declareInterface(javajs.api, "GenericOutputChannel");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.load(["java.io.Writer"], "java.io.BufferedWriter", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.out = null;
this.buf = null;
this.pos = 0;
this.lineSeparator = "\r\n";
Clazz.instantialize(this, arguments);}, java.io, "BufferedWriter", java.io.Writer);
Clazz.makeConstructor(c$, 
function(out){
Clazz.superConstructor(this, java.io.BufferedWriter, [out]);
this.out = out;
this.buf =  Clazz.newCharArray (8192, '\0');
}, "java.io.Writer");
Clazz.makeConstructor(c$, 
function(out, size){
Clazz.superConstructor(this, java.io.BufferedWriter, [out]);
if (size > 0) {
this.out = out;
this.buf =  Clazz.newCharArray (size, '\0');
} else {
throw  new IllegalArgumentException(("K0058"));
}}, "java.io.Writer,~N");
Clazz.defineMethod(c$, "close", 
function(){
{
if (this.isOpen()) {
this.flush();
this.out.close();
this.buf = null;
this.out = null;
}}});
Clazz.defineMethod(c$, "flush", 
function(){
{
if (this.isOpen()) {
if (this.pos > 0) {
this.out.write(this.buf, 0, this.pos);
}this.pos = 0;
this.out.flush();
} else {
throw  new java.io.IOException(("K005d"));
}}});
Clazz.defineMethod(c$, "isOpen", 
function(){
return this.out != null;
});
Clazz.defineMethod(c$, "newLine", 
function(){
this.write("\r\n", 0, "\r\n".length);
});
Clazz.defineMethod(c$, "write", 
function(cbuf, offset, count){
{
if (!this.isOpen()) {
throw  new java.io.IOException(("K005d"));
}if (offset < 0 || offset > cbuf.length - count || count < 0) {
throw  new IndexOutOfBoundsException();
}if (this.pos == 0 && count >= this.buf.length) {
this.out.write(cbuf, offset, count);
return;
}var available = this.buf.length - this.pos;
if (count < available) {
available = count;
}if (available > 0) {
System.arraycopy(cbuf, offset, this.buf, this.pos, available);
this.pos += available;
}if (this.pos == this.buf.length) {
this.out.write(this.buf, 0, this.buf.length);
this.pos = 0;
if (count > available) {
offset += available;
available = count - available;
if (available >= this.buf.length) {
this.out.write(cbuf, offset, available);
return;
}System.arraycopy(cbuf, offset, this.buf, this.pos, available);
this.pos += available;
}}}}, "~A,~N,~N");
Clazz.defineMethod(c$, "write", 
function(oneChar){
{
if (this.isOpen()) {
if (this.pos >= this.buf.length) {
this.out.write(this.buf, 0, this.buf.length);
this.pos = 0;
}this.buf[this.pos++] = String.fromCharCode(oneChar);
} else {
throw  new java.io.IOException(("K005d"));
}}}, "~N");
Clazz.defineMethod(c$, "write", 
function(str, offset, count){
{
if (!this.isOpen()) {
throw  new java.io.IOException(("K005d"));
}if (count <= 0) {
return;
}if (offset > str.length - count || offset < 0) {
throw  new StringIndexOutOfBoundsException();
}if (this.pos == 0 && count >= this.buf.length) {
var chars =  Clazz.newCharArray (count, '\0');
str.getChars(offset, offset + count, chars, 0);
this.out.write(chars, 0, count);
return;
}var available = this.buf.length - this.pos;
if (count < available) {
available = count;
}if (available > 0) {
str.getChars(offset, offset + available, this.buf, this.pos);
this.pos += available;
}if (this.pos == this.buf.length) {
this.out.write(this.buf, 0, this.buf.length);
this.pos = 0;
if (count > available) {
offset += available;
available = count - available;
if (available >= this.buf.length) {
var chars =  Clazz.newCharArray (count, '\0');
str.getChars(offset, offset + available, chars, 0);
this.out.write(chars, 0, available);
return;
}str.getChars(offset, offset + available, this.buf, this.pos);
this.pos += available;
}}}}, "~S,~N,~N");
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.Closeable", "$.Flushable", "java.lang.Appendable"], "java.io.Writer", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.lock = null;
Clazz.instantialize(this, arguments);}, java.io, "Writer", null, [Appendable, java.io.Closeable, java.io.Flushable]);
Clazz.makeConstructor(c$, 
function(){
this.lock = this;
});
Clazz.makeConstructor(c$, 
function(lock){
if (lock != null) {
this.lock = lock;
} else {
throw  new NullPointerException();
}}, "~O");
Clazz.defineMethod(c$, "write", 
function(buf){
this.write(buf, 0, buf.length);
}, "~A");
Clazz.defineMethod(c$, "write", 
function(oneChar){
{
var oneCharArray =  Clazz.newCharArray (1, '\0');
oneCharArray[0] = String.fromCharCode(oneChar);
this.write(oneCharArray);
}}, "~N");
Clazz.defineMethod(c$, "write", 
function(str){
var buf =  Clazz.newCharArray (str.length, '\0');
str.getChars(0, buf.length, buf, 0);
{
this.write(buf);
}}, "~S");
Clazz.defineMethod(c$, "write", 
function(str, offset, count){
if (count >= 0) {
var buf =  Clazz.newCharArray (count, '\0');
str.getChars(offset, offset + count, buf, 0);
{
this.write(buf);
}} else {
throw  new StringIndexOutOfBoundsException();
}}, "~S,~N,~N");
Clazz.defineMethod(c$, "append", 
function(c){
this.write(c.charCodeAt(0));
return this;
}, "~S");
Clazz.defineMethod(c$, "append", 
function(csq){
if (null == csq) {
this.write("null");
} else {
this.write(csq.toString());
}return this;
}, "CharSequence");
Clazz.defineMethod(c$, "append", 
function(csq, start, end){
if (null == csq) {
this.write("null".substring(start, end));
} else {
this.write(csq.subSequence(start, end).toString());
}return this;
}, "CharSequence,~N,~N");
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.io.OutputStream"], "java.io.ByteArrayOutputStream", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.buf = null;
this.count = 0;
Clazz.instantialize(this, arguments);}, java.io, "ByteArrayOutputStream", java.io.OutputStream);
Clazz.makeConstructor(c$, 
function(){
this.construct (32);
});
Clazz.makeConstructor(c$, 
function(size){
Clazz.superConstructor (this, java.io.ByteArrayOutputStream, []);
if (size < 0) {
throw  new IllegalArgumentException("Negative initial size: " + size);
}this.buf =  Clazz.newByteArray (size, 0);
}, "~N");
Clazz.defineMethod(c$, "ensureCapacity", 
function(minCapacity){
if (minCapacity - this.buf.length > 0) this.grow(minCapacity);
}, "~N");
Clazz.defineMethod(c$, "grow", 
function(minCapacity){
var oldCapacity = this.buf.length;
var newCapacity = oldCapacity << 1;
if (newCapacity - minCapacity < 0) newCapacity = minCapacity;
if (newCapacity < 0) {
if (minCapacity < 0) throw  new OutOfMemoryError();
newCapacity = minCapacity;
}this.buf = java.io.ByteArrayOutputStream.arrayCopyByte(this.buf, newCapacity);
}, "~N");
c$.arrayCopyByte = Clazz.defineMethod(c$, "arrayCopyByte", 
function(array, newLength){
var t =  Clazz.newByteArray (newLength, 0);
System.arraycopy(array, 0, t, 0, array.length < newLength ? array.length : newLength);
return t;
}, "~A,~N");
Clazz.overrideMethod(c$, "writeByteAsInt", 
function(b){
this.ensureCapacity(this.count + 1);
this.buf[this.count] = b;
this.count += 1;
}, "~N");
Clazz.defineMethod(c$, "write", 
function(b, off, len){
if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) - b.length > 0)) {
throw  new IndexOutOfBoundsException();
}this.ensureCapacity(this.count + len);
System.arraycopy(b, off, this.buf, this.count, len);
this.count += len;
}, "~A,~N,~N");
Clazz.defineMethod(c$, "writeTo", 
function(out){
out.write(this.buf, 0, this.count);
}, "java.io.OutputStream");
Clazz.defineMethod(c$, "reset", 
function(){
this.count = 0;
});
Clazz.defineMethod(c$, "toByteArray", 
function(){
return (this.count == this.buf.length ? this.buf : java.io.ByteArrayOutputStream.arrayCopyByte(this.buf, this.count));
});
Clazz.defineMethod(c$, "size", 
function(){
return this.count;
});
Clazz.overrideMethod(c$, "toString", 
function(){
return  String.instantialize(this.buf, 0, this.count);
});
Clazz.overrideMethod(c$, "close", 
function(){
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JU");
Clazz.load(null, "JU.Base64", ["JU.SB"], function(){
var c$ = Clazz.declareType(JU, "Base64", null);
c$.getBytes64 = Clazz.defineMethod(c$, "getBytes64", 
function(bytes){
return JU.Base64.getBase64(bytes).toBytes(0, -1);
}, "~A");
c$.getBase64 = Clazz.defineMethod(c$, "getBase64", 
function(bytes){
var nBytes = bytes.length;
var sout =  new JU.SB();
if (nBytes == 0) return sout;
for (var i = 0, nPad = 0; i < nBytes && nPad == 0; ) {
if (i % 75 == 0 && i != 0) sout.append("\r\n");
nPad = (i + 2 == nBytes ? 1 : i + 1 == nBytes ? 2 : 0);
var outbytes = ((bytes[i++] << 16) & 0xFF0000) | ((nPad == 2 ? 0 : bytes[i++] << 8) & 0x00FF00) | ((nPad >= 1 ? 0 : bytes[i++]) & 0x0000FF);
sout.appendC(JU.Base64.base64.charAt((outbytes >> 18) & 0x3F));
sout.appendC(JU.Base64.base64.charAt((outbytes >> 12) & 0x3F));
sout.appendC(nPad == 2 ? '=' : JU.Base64.base64.charAt((outbytes >> 6) & 0x3F));
sout.appendC(nPad >= 1 ? '=' : JU.Base64.base64.charAt(outbytes & 0x3F));
}
return sout;
}, "~A");
c$.decodeBase64 = Clazz.defineMethod(c$, "decodeBase64", 
function(strBase64){
var nBytes = 0;
var ch;
var pt0 = strBase64.indexOf(";base64,") + 1;
if (pt0 > 0) pt0 += 7;
var chars64 = strBase64.toCharArray();
var len64 = chars64.length;
if (len64 == 0) return  Clazz.newByteArray (0, 0);
for (var i = len64; --i >= pt0; ) nBytes += ((ch = (chars64[i]).charCodeAt(0) & 0x7F) == 65 || JU.Base64.decode64[ch] > 0 ? 3 : 0);

nBytes = nBytes >> 2;
var bytes =  Clazz.newByteArray (nBytes, 0);
var offset = 18;
for (var i = pt0, pt = 0, b = 0; i < len64; i++) {
if (JU.Base64.decode64[ch = (chars64[i]).charCodeAt(0) & 0x7F] > 0 || ch == 65 || ch == 61) {
b |= JU.Base64.decode64[ch] << offset;
offset -= 6;
if (offset < 0) {
bytes[pt++] = ((b & 0xFF0000) >> 16);
if (pt < nBytes) bytes[pt++] = ((b & 0xFF00) >> 8);
if (pt < nBytes) bytes[pt++] = (b & 0xFF);
offset = 18;
b = 0;
}}}
return bytes;
}, "~S");
c$.base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
c$.decode64 =  Clazz.newIntArray(-1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 62, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 63, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 0, 0, 0, 0, 0]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["java.lang.Enum"], "JSV.common.ExportType", null, function(){
var c$ = Clazz.declareType(JSV.common, "ExportType", Enum);
c$.getType = Clazz.defineMethod(c$, "getType", 
function(type){
type = type.toUpperCase();
if (type.equalsIgnoreCase("Original...")) return JSV.common.ExportType.SOURCE;
if (type.startsWith("XML")) return JSV.common.ExportType.AML;
for (var mode, $mode = 0, $$mode = JSV.common.ExportType.values(); $mode < $$mode.length && ((mode = $$mode[$mode]) || true); $mode++) if (mode.name().equals(type)) return mode;

return JSV.common.ExportType.UNK;
}, "~S");
c$.isExportMode = Clazz.defineMethod(c$, "isExportMode", 
function(ext){
return (JSV.common.ExportType.getType(ext) !== JSV.common.ExportType.UNK);
}, "~S");
Clazz.defineEnumConstant(c$, "UNK", 0, []);
Clazz.defineEnumConstant(c$, "SOURCE", 1, []);
Clazz.defineEnumConstant(c$, "DIF", 2, []);
Clazz.defineEnumConstant(c$, "FIX", 3, []);
Clazz.defineEnumConstant(c$, "SQZ", 4, []);
Clazz.defineEnumConstant(c$, "PAC", 5, []);
Clazz.defineEnumConstant(c$, "XY", 6, []);
Clazz.defineEnumConstant(c$, "DIFDUP", 7, []);
Clazz.defineEnumConstant(c$, "PNG", 8, []);
Clazz.defineEnumConstant(c$, "JPG", 9, []);
Clazz.defineEnumConstant(c$, "SVG", 10, []);
Clazz.defineEnumConstant(c$, "SVGI", 11, []);
Clazz.defineEnumConstant(c$, "CML", 12, []);
Clazz.defineEnumConstant(c$, "AML", 13, []);
Clazz.defineEnumConstant(c$, "PDF", 14, []);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["java.lang.Enum", "J.api.EventManager", "java.util.Hashtable", "JU.Lst"], "JSV.common.PanelData", ["JU.CU", "JSV.common.Annotation", "$.Coordinate", "$.GraphSet", "$.JSVFileManager", "$.JSVersion", "$.JSViewer", "$.MeasurementData", "$.Parameters", "$.PeakPickEvent", "$.ScriptToken", "$.Spectrum", "$.SubSpecChangeEvent", "$.ZoomEvent", "JU.Font", "$.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.g2d = null;
this.g2d0 = null;
this.vwr = null;
this.listeners = null;
this.currentGraphSet = null;
this.options = null;
this.jsvp = null;
this.graphSets = null;
this.currentSplitPoint = 0;
this.thisWidget = null;
this.coordClicked = null;
this.coordsClicked = null;
this.ctrlPressed = false;
this.shiftPressed = false;
this.drawXAxisLeftToRight = false;
this.isIntegralDrag = false;
this.xAxisLeftToRight = true;
this.scalingFactor = 1;
this.integralShiftMode = 0;
this.left = 60;
this.right = 50;
this.coordStr = "";
this.startupPinTip = "Click to set.";
this.title = null;
this.clickCount = 0;
this.nSpectra = 0;
this.thisWidth = 0;
this.thisHeight = 0;
this.startIndex = 0;
this.endIndex = 0;
this.commonFilePath = null;
this.viewTitle = null;
this.displayFontName = null;
this.titleFontName = null;
this.isPrinting = false;
this.creatingImage = false;
this.doReset = true;
this.printingFontName = null;
this.printGraphPosition = "default";
this.titleDrawn = false;
this.display1D = false;
this.isLinked = false;
this.printJobTitle = null;
this.spectra = null;
this.taintedAll = true;
this.testingJavaScript = false;
this.currentFont = null;
this.mouseState = null;
this.gridOn = true;
this.titleOn = true;
this.peakTabsOn = true;
this.mouseX = 0;
this.mouseY = 0;
this.mouseSet = null;
this.mousePeak = null;
this.linking = false;
this.xPixelClicked = 0;
this.coordinatesColor = null;
this.gridColor = null;
this.integralPlotColor = null;
this.peakTabColor = null;
this.peakOverColor = null;
this.plotAreaColor = null;
this.scaleColor = null;
this.titleColor = null;
this.unitsColor = null;
this.highlightColor = null;
this.zoomBoxColor = null;
this.zoomBoxColor2 = null;
this.BLACK = null;
this.bgcolor = null;
this.optionsSaved = null;
this.gMain = null;
this.unitsDrawn = false;
Clazz.instantialize(this, arguments);}, JSV.common, "PanelData", null, J.api.EventManager);
Clazz.prepareFields (c$, function(){
this.listeners =  new JU.Lst();
this.options =  new java.util.Hashtable();
});
Clazz.makeConstructor(c$, 
function(panel, viewer){
this.vwr = viewer;
this.jsvp = panel;
this.g2d = this.g2d0 = viewer.g2d;
this.BLACK = this.g2d.getColor1(0);
this.highlightColor = this.g2d.getColor4(255, 0, 0, 200);
this.zoomBoxColor = this.g2d.getColor4(150, 150, 100, 130);
this.zoomBoxColor2 = this.g2d.getColor4(150, 100, 100, 130);
}, "JSV.api.JSVPanel,JSV.common.JSViewer");
Clazz.defineMethod(c$, "addListener", 
function(listener){
if (!this.listeners.contains(listener)) {
this.listeners.addLast(listener);
}}, "JSV.api.PanelListener");
Clazz.defineMethod(c$, "getCurrentGraphSet", 
function(){
return this.currentGraphSet;
});
Clazz.defineMethod(c$, "dispose", 
function(){
this.jsvp = null;
for (var i = 0; i < this.graphSets.size(); i++) this.graphSets.get(i).dispose();

this.graphSets = null;
this.currentFont = null;
this.currentGraphSet = null;
this.coordClicked = null;
this.coordsClicked = null;
this.thisWidget = null;
this.options = null;
this.listeners = null;
});
Clazz.defineMethod(c$, "setViewTitle", 
function(title){
this.viewTitle = title;
}, "~S");
Clazz.defineMethod(c$, "getViewTitle", 
function(){
return (this.viewTitle == null ? this.getTitle() : this.viewTitle);
});
Clazz.defineMethod(c$, "getInfo", 
function(selectedOnly, key){
var info =  new java.util.Hashtable();
var sets = null;
if (selectedOnly) return this.currentGraphSet.getInfo(key, this.getCurrentSpectrumIndex());
var entries = this.options.entrySet();
if ("".equals(key)) {
var val = "type title nSets ";
for (var entry, $entry = entries.iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) val += entry.getKey().name() + " ";

info.put("KEYS", val);
} else {
for (var entry, $entry = entries.iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) JSV.common.Parameters.putInfo(key, info, entry.getKey().name(), entry.getValue());

JSV.common.Parameters.putInfo(key, info, "type", this.getSpectrumAt(0).getDataType());
JSV.common.Parameters.putInfo(key, info, "title", this.title);
JSV.common.Parameters.putInfo(key, info, "nSets", Integer.$valueOf(this.graphSets.size()));
}sets =  new JU.Lst();
for (var i = this.graphSets.size(); --i >= 0; ) sets.addLast(this.graphSets.get(i).getInfo(key, -1));

info.put("sets", sets);
return info;
}, "~B,~S");
Clazz.defineMethod(c$, "setBooleans", 
function(parameters, st){
if (st == null) {
var booleans = parameters.getBooleans();
for (var entry, $entry = booleans.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) this.setBooleans(parameters, entry.getKey());

return;
}this.setBoolean(st, parameters.getBoolean(st));
}, "JSV.common.Parameters,JSV.common.ScriptToken");
Clazz.defineMethod(c$, "setBoolean", 
function(st, isTrue){
this.setTaintedAll();
if (st === JSV.common.ScriptToken.REVERSEPLOT) {
this.currentGraphSet.setReversePlot(isTrue);
return;
}this.options.put(st, Boolean.$valueOf(isTrue));
switch (st) {
case JSV.common.ScriptToken.DISPLAY1D:
case JSV.common.ScriptToken.DISPLAY2D:
this.doReset = true;
break;
}
}, "JSV.common.ScriptToken,~B");
Clazz.defineMethod(c$, "getBoolean", 
function(st){
if (st === JSV.common.ScriptToken.REVERSEPLOT) return this.currentGraphSet.reversePlot;
if (this.options == null) return false;
var b = this.options.get(st);
return (b != null && (Clazz.instanceOf(b, Boolean)) && (b) === Boolean.TRUE);
}, "JSV.common.ScriptToken");
Clazz.defineMethod(c$, "setFontName", 
function(st, fontName){
switch (st) {
case JSV.common.ScriptToken.DISPLAYFONTNAME:
this.displayFontName = fontName;
break;
case JSV.common.ScriptToken.TITLEFONTNAME:
this.titleFontName = fontName;
break;
}
if (fontName != null) this.options.put(st, fontName);
}, "JSV.common.ScriptToken,~S");
Clazz.defineMethod(c$, "getDisplay1D", 
function(){
return this.display1D;
});
Clazz.defineMethod(c$, "setTaintedAll", 
function(){
this.taintedAll = true;
});
Clazz.defineMethod(c$, "initOne", 
function(spectrum){
this.spectra =  new JU.Lst();
this.spectra.addLast(spectrum);
this.initMany(this.spectra, 0, 0);
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "initMany", 
function(spectra, startIndex, endIndex){
this.startIndex = startIndex;
this.endIndex = endIndex;
this.nSpectra = spectra.size();
this.spectra = spectra;
this.commonFilePath = spectra.get(0).getFilePath();
for (var i = 0; i < this.nSpectra; i++) if (!this.commonFilePath.equalsIgnoreCase(spectra.get(i).getFilePath())) {
this.commonFilePath = null;
break;
}
this.setGraphSets(JSV.common.PanelData.LinkMode.NONE);
}, "JU.Lst,~N,~N");
Clazz.defineMethod(c$, "setGraphSets", 
function(linkMode){
this.graphSets = JSV.common.GraphSet.createGraphSetsAndSetLinkMode(this, this.jsvp, this.spectra, this.startIndex, this.endIndex, linkMode);
this.currentGraphSet = this.graphSets.get(0);
this.setTitle(this.getSpectrum().getTitleLabel());
}, "JSV.common.PanelData.LinkMode");
Clazz.defineMethod(c$, "findMatchingPeakInfo", 
function(pi){
var pi2 = null;
for (var i = 0; i < this.graphSets.size(); i++) if ((pi2 = this.graphSets.get(i).findMatchingPeakInfo(pi)) != null) break;

return pi2;
}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "integrateAll", 
function(parameters){
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).integrate(-1, parameters);

}, "JSV.common.ColorParameters");
Clazz.defineMethod(c$, "getNumberOfGraphSets", 
function(){
return this.graphSets.size();
});
Clazz.defineMethod(c$, "getTitle", 
function(){
return this.title;
});
Clazz.defineMethod(c$, "refresh", 
function(){
this.doReset = true;
});
Clazz.defineMethod(c$, "setTitle", 
function(title){
this.title = title;
}, "~S");
Clazz.defineMethod(c$, "addAnnotation", 
function(tokens){
var title = this.currentGraphSet.addAnnotation(tokens, this.getTitle());
if (title != null) this.setTitle(title);
}, "JU.Lst");
Clazz.defineMethod(c$, "addPeakHighlight", 
function(peakInfo){
for (var i = 0; i < this.graphSets.size(); i++) this.graphSets.get(i).addPeakHighlight(peakInfo);

}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "selectPeakByFileIndex", 
function(filePath, index, atomKey){
var pi = this.currentGraphSet.selectPeakByFileIndex(filePath, index, atomKey);
if (pi == null) for (var i = this.graphSets.size(); --i >= 0; ) if (this.graphSets.get(i) !== this.currentGraphSet && (pi = this.graphSets.get(i).selectPeakByFileIndex(filePath, index, atomKey)) != null) break;

return pi;
}, "~S,~S,~S");
Clazz.defineMethod(c$, "setPlotColors", 
function(colors){
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).setPlotColors(colors);

}, "~A");
Clazz.defineMethod(c$, "selectSpectrum", 
function(filePath, type, model, andCurrent){
if (andCurrent) this.currentGraphSet.selectSpectrum(filePath, type, model);
if ("ID".equals(type)) {
this.jumpToSpectrumIndex(this.getCurrentSpectrumIndex(), true);
return;
}for (var i = 0; i < this.graphSets.size(); i++) if (this.graphSets.get(i) !== this.currentGraphSet) this.graphSets.get(i).selectSpectrum(filePath, type, model);

}, "~S,~S,~S,~B");
Clazz.defineMethod(c$, "hasFileLoaded", 
function(filePath){
for (var i = this.graphSets.size(); --i >= 0; ) if (this.graphSets.get(i).hasFileLoaded(filePath)) return true;

return false;
}, "~S");
Clazz.defineMethod(c$, "clearAllView", 
function(){
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).resetViewCompletely();

});
Clazz.defineMethod(c$, "drawGraph", 
function(gMain, gFront, gRear, width, height, addFilePath, addBorder){
var withCoords;
this.gMain = gMain;
this.display1D = !this.isLinked && this.getBoolean(JSV.common.ScriptToken.DISPLAY1D);
var top = 40;
var bottom = 50;
var isResized = (this.isPrinting || this.doReset || this.thisWidth != width || this.thisHeight != height);
if (isResized) this.setTaintedAll();
if (this.taintedAll) this.g2d.fillBackground(gRear, this.bgcolor);
if (gFront !== gMain) {
this.g2d.fillBackground(gFront, null);
if (gMain !== gRear) this.g2d.fillBackground(gMain, null);
this.g2d.setStrokeBold(gMain, false);
}this.scalingFactor = 1;
if (this.isPrinting) {
this.scalingFactor = 10;
withCoords = false;
} else if (addBorder) {
bottom *= 2;
withCoords = false;
} else {
withCoords = !this.creatingImage && this.getBoolean(JSV.common.ScriptToken.COORDINATESON);
this.titleOn = this.getBoolean(JSV.common.ScriptToken.TITLEON);
this.gridOn = this.getBoolean(JSV.common.ScriptToken.GRIDON);
this.peakTabsOn = this.getBoolean(JSV.common.ScriptToken.PEAKTABSON);
}var pointsOnly = this.getBoolean(JSV.common.ScriptToken.POINTSONLY);
this.doReset = false;
this.titleDrawn = false;
this.unitsDrawn = false;
this.thisWidth = width;
this.thisHeight = height;
for (var i = this.graphSets.size(); --i >= 0; ) {
this.graphSets.get(i).drawGraphSet(gMain, gFront, gRear, width, height, this.left, this.right, top, bottom, isResized, this.taintedAll, pointsOnly);
}
if (this.isPrinting || this.creatingImage) this.titleDrawn = true;
if (this.isPrinting && this.titleOn && !this.titleDrawn && this.taintedAll) {
this.drawTitle(gMain, (height + 20) * this.scalingFactor, width * this.scalingFactor, this.getDrawTitle(true, -1));
}if (withCoords && this.coordStr != null) this.drawCoordinates(gFront, top, this.thisWidth - this.right, top - 20);
if (addFilePath && this.taintedAll) {
this.printFilePath(gMain, this.left, height, this.commonFilePath != null ? this.commonFilePath : this.graphSets.size() == 1 && this.currentGraphSet.getTitle(true) != null ? this.getSpectrum().getFilePath() : null);
}if (this.isPrinting) {
this.printVersion(gMain, height);
}if (!this.testingJavaScript && (this.isPrinting || gMain === gFront)) this.setTaintedAll();
 else this.taintedAll = false;
}, "~O,~O,~O,~N,~N,~B,~B");
Clazz.defineMethod(c$, "drawCoordinates", 
function(g, top, x, y){
this.g2d.setGraphicsColor(g, this.coordinatesColor);
var font = this.setFont(g, this.jsvp.getWidth(), 1, 14, true);
this.g2d.drawString(g, this.coordStr, x - font.stringWidth(this.coordStr), y);
}, "~O,~N,~N,~N");
Clazz.defineMethod(c$, "setFont", 
function(g, width, style, size, isLabel){
return this.g2d.setFont(g, this.getFont(g, width, style, size, isLabel));
}, "~O,~N,~N,~N,~B");
Clazz.defineMethod(c$, "printFilePath", 
function(g, x, y, s){
if (s == null) return;
x *= this.scalingFactor;
y *= this.scalingFactor;
if (s.indexOf("?") > 0) s = s.substring(s.indexOf("?") + 1);
s = s.substring(s.lastIndexOf("/") + 1);
s = s.substring(s.lastIndexOf("\\") + 1);
this.g2d.setGraphicsColor(g, this.BLACK);
var font = this.setFont(g, 1000, 0, 9, true);
if (x != this.left * this.scalingFactor) x -= font.stringWidth(s);
this.g2d.drawString(g, s, x, y - font.getHeight());
}, "~O,~N,~N,~S");
Clazz.defineMethod(c$, "printVersion", 
function(g, pageHeight){
this.g2d.setGraphicsColor(g, this.BLACK);
var font = this.setFont(g, 100, 0, 12, true);
var s = this.jsvp.getApiPlatform().getDateFormat(null) + " JSpecView " + JSV.common.JSVersion.VERSION_SHORT;
var w = font.stringWidth(s);
this.g2d.drawString(g, s, (this.thisWidth - this.right) * this.scalingFactor - w, pageHeight * this.scalingFactor + font.getHeight() * 3);
}, "~O,~N");
Clazz.defineMethod(c$, "drawTitle", 
function(g, y, pageWidth, title){
var font = this.getFont(g, pageWidth, this.isPrinting || this.getBoolean(JSV.common.ScriptToken.TITLEBOLDON) ? 1 : 0, 14, true);
var nPixels = font.stringWidth(title);
if (nPixels > pageWidth * 0.5) {
var size = Clazz.doubleToInt(14.0 * pageWidth * 0.5 / nPixels);
if (size < 10) size = 10;
font = this.getFont(g, pageWidth, this.isPrinting || this.getBoolean(JSV.common.ScriptToken.TITLEBOLDON) ? 1 : 0, size, true);
}this.g2d.setGraphicsColor(g, this.titleColor);
this.setCurrentFont(this.g2d.setFont(g, font));
y -= Clazz.doubleToInt(font.getHeight() * (this.isPrinting ? -0.2 : this.creatingImage ? 1.2 : 0.4));
this.g2d.drawString(g, title, (this.isPrinting ? this.left * this.scalingFactor : 5), y);
}, "~O,~N,~N,~S");
Clazz.defineMethod(c$, "setCurrentFont", 
function(font){
this.currentFont = font;
}, "JU.Font");
Clazz.defineMethod(c$, "getFontHeight", 
function(){
return this.currentFont.getAscent();
});
Clazz.defineMethod(c$, "getStringWidth", 
function(s){
return this.currentFont.stringWidth(s);
}, "~S");
Clazz.defineMethod(c$, "selectFromEntireSet", 
function(iSpec){
for (var i = 0, pt = 0; i < this.graphSets.size(); i++) {
if (iSpec == -2147483648) {
this.graphSets.get(i).setSelected(-1);
continue;
}var specs = this.graphSets.get(i).spectra;
for (var j = 0; j < specs.size(); j++, pt++) if (iSpec < 0 || iSpec == pt) this.graphSets.get(i).setSelected(j);

}
}, "~N");
Clazz.defineMethod(c$, "addToList", 
function(iSpec, list){
for (var i = 0; i < this.spectra.size(); i++) if (iSpec < 0 || i == iSpec) list.addLast(this.spectra.get(i));

}, "~N,JU.Lst");
Clazz.defineMethod(c$, "scaleSelectedBy", 
function(f){
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).scaleSelectedBy(f);

}, "~N");
Clazz.defineMethod(c$, "setCurrentGraphSet", 
function(gs, yPixel){
var splitPoint = (gs.nSplit > 1 ? gs.getSplitPoint(yPixel) : gs.getCurrentSpectrumIndex());
var isNewSet = (this.currentGraphSet !== gs);
var isNewSplitPoint = (isNewSet || this.currentSplitPoint != splitPoint);
this.currentGraphSet = gs;
this.currentSplitPoint = splitPoint;
if (isNewSet || gs.nSplit > 1 && isNewSplitPoint) this.setSpectrum(splitPoint, true);
if (!isNewSet) {
isNewSet = gs.checkSpectrumClickedEvent(this.mouseX, this.mouseY, this.clickCount);
if (!isNewSet) return false;
this.currentSplitPoint = splitPoint = gs.getCurrentSpectrumIndex();
this.setSpectrum(splitPoint, true);
}this.jumpToSpectrumIndex(splitPoint, isNewSet || gs.nSplit > 1 && isNewSplitPoint);
return isNewSet;
}, "JSV.common.GraphSet,~N");
Clazz.defineMethod(c$, "jumpToSpectrum", 
function(spec){
var index = this.currentGraphSet.getSpectrumIndex(spec);
this.jumpToSpectrumIndex(index, true);
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "jumpToSpectrumIndex", 
function(index, doSetSpec){
if (index < 0 || index >= this.currentGraphSet.nSpectra) return;
this.currentSplitPoint = index;
if (doSetSpec) this.setSpectrum(this.currentSplitPoint, this.currentGraphSet.nSplit > 1);
var spec = this.getSpectrum();
this.notifySubSpectrumChange(spec.getSubIndex(), spec);
}, "~N,~B");
Clazz.defineMethod(c$, "splitStack", 
function(doSplit){
this.currentGraphSet.splitStack(doSplit);
}, "~B");
Clazz.defineMethod(c$, "getNumberOfSpectraInCurrentSet", 
function(){
return this.currentGraphSet.nSpectra;
});
Clazz.defineMethod(c$, "getSourceID", 
function(){
var id = this.getSpectrum().sourceID;
return (id == null ? this.getSpectrumAt(0).sourceID : id);
});
Clazz.defineMethod(c$, "getStartingPointIndex", 
function(index){
return this.currentGraphSet.viewData.getStartingPointIndex(index);
}, "~N");
Clazz.defineMethod(c$, "getEndingPointIndex", 
function(index){
return this.currentGraphSet.viewData.getEndingPointIndex(index);
}, "~N");
Clazz.defineMethod(c$, "haveSelectedSpectrum", 
function(){
return this.currentGraphSet.haveSelectedSpectrum();
});
Clazz.defineMethod(c$, "getShowAnnotation", 
function(type){
return this.currentGraphSet.getShowAnnotation(type, -1);
}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "showAnnotation", 
function(type, tfToggle){
this.currentGraphSet.setShowAnnotation(type, tfToggle);
}, "JSV.common.Annotation.AType,Boolean");
Clazz.defineMethod(c$, "setYStackOffsetPercent", 
function(offset){
this.currentGraphSet.yStackOffsetPercent = offset;
}, "~N");
Clazz.defineMethod(c$, "setSpectrum", 
function(iSpec, isSplit){
this.currentGraphSet.setSpectrum(iSpec, isSplit);
}, "~N,~B");
Clazz.defineMethod(c$, "getSpectrum", 
function(){
return this.currentGraphSet.getSpectrum();
});
Clazz.defineMethod(c$, "setSpecForIRMode", 
function(spec){
this.setTaintedAll();
var spec0 = this.currentGraphSet.getSpectrum();
this.currentGraphSet.setSpectrumJDX(spec);
for (var i = 0; i < this.spectra.size(); i++) if (this.spectra.get(i) === spec0) this.spectra.set(i, spec);

}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "isShowAllStacked", 
function(){
return this.currentGraphSet.showAllStacked;
});
Clazz.defineMethod(c$, "getCurrentSpectrumIndex", 
function(){
return this.currentGraphSet.getCurrentSpectrumIndex();
});
Clazz.defineMethod(c$, "getSpectrumAt", 
function(index){
if (this.currentGraphSet == null) return null;
return this.currentGraphSet.getSpectrumAt(index);
}, "~N");
Clazz.defineMethod(c$, "addHighlight", 
function(gs, x1, x2, spec, r, g, b, a){
(gs == null ? this.currentGraphSet : gs).addHighlight(x1, x2, spec, this.g2d.getColor4(r, g, b, a));
}, "JSV.common.GraphSet,~N,~N,JSV.common.Spectrum,~N,~N,~N,~N");
Clazz.defineMethod(c$, "removeHighlight", 
function(x1, x2){
this.currentGraphSet.removeHighlight(x1, x2);
}, "~N,~N");
Clazz.defineMethod(c$, "removeAllHighlights", 
function(){
this.currentGraphSet.removeAllHighlights();
});
Clazz.defineMethod(c$, "setZoom", 
function(x1, y1, x2, y2){
this.currentGraphSet.setZoom(x1, y1, x2, y2);
this.doReset = true;
this.setTaintedAll();
this.notifyListeners( new JSV.common.ZoomEvent());
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "resetView", 
function(){
this.currentGraphSet.resetView();
});
Clazz.defineMethod(c$, "previousView", 
function(){
this.currentGraphSet.previousView();
});
Clazz.defineMethod(c$, "nextView", 
function(){
this.currentGraphSet.nextView();
});
Clazz.defineMethod(c$, "getSelectedIntegral", 
function(){
return this.currentGraphSet.getSelectedIntegral();
});
Clazz.defineMethod(c$, "advanceSubSpectrum", 
function(dir){
this.currentGraphSet.advanceSubSpectrum(dir);
}, "~N");
Clazz.defineMethod(c$, "setSelectedIntegral", 
function(val){
this.currentGraphSet.setSelectedIntegral(val);
}, "~N");
Clazz.defineMethod(c$, "scaleYBy", 
function(f){
this.currentGraphSet.scaleYBy(f);
}, "~N");
Clazz.defineMethod(c$, "toPeak", 
function(i){
this.currentGraphSet.toPeak(i);
}, "~N");
Clazz.defineMethod(c$, "getClickedCoordinate", 
function(){
return this.coordClicked;
});
Clazz.defineMethod(c$, "getPickedCoordinates", 
function(coord, actualCoord){
return JSV.common.Coordinate.getPickedCoordinates(this.coordsClicked, this.coordClicked, coord, actualCoord);
}, "JSV.common.Coordinate,JSV.common.Coordinate");
Clazz.defineMethod(c$, "shiftSpectrum", 
function(mode, xOld, xNew){
return this.currentGraphSet.shiftSpectrum(mode, xOld, xNew);
}, "~N,~N,~N");
Clazz.defineMethod(c$, "findX", 
function(spec, d){
this.currentGraphSet.setXPointer(spec, d);
}, "JSV.common.Spectrum,~N");
Clazz.defineMethod(c$, "setXPointers", 
function(spec, x1, spec2, x2){
this.currentGraphSet.setXPointer(spec, x1);
this.currentGraphSet.setXPointer2(spec2, x2);
}, "JSV.common.Spectrum,~N,JSV.common.Spectrum,~N");
Clazz.defineMethod(c$, "isCurrentGraphSet", 
function(graphSet){
return graphSet === this.currentGraphSet;
}, "JSV.common.GraphSet");
Clazz.defineMethod(c$, "repaint", 
function(){
this.jsvp.doRepaint(false);
});
Clazz.defineMethod(c$, "setToolTipText", 
function(s){
this.jsvp.setToolTipText(s);
}, "~S");
Clazz.defineMethod(c$, "setHighlightColor", 
function(color){
this.setColor(JSV.common.ScriptToken.HIGHLIGHTCOLOR, color);
}, "javajs.api.GenericColor");
Clazz.defineMethod(c$, "getInput", 
function(message, title, sval){
return this.jsvp.getInput(message, title, sval);
}, "~S,~S,~S");
Clazz.defineMethod(c$, "getFont", 
function(g, width, style, size, isLabel){
size *= this.scalingFactor;
if (isLabel) {
if (width < 400) size = ((width * size) / 400);
} else {
if (width < 250) size = ((width * size) / 250);
}var face = this.jsvp.getFontFaceID(this.isPrinting ? this.printingFontName : this.displayFontName);
return this.currentFont = JU.Font.createFont3D(face, style, size, size, 0, this.jsvp.getApiPlatform(), g);
}, "~O,~N,~N,~N,~B");
Clazz.defineMethod(c$, "notifySubSpectrumChange", 
function(isub, spec){
this.notifyListeners( new JSV.common.SubSpecChangeEvent(isub, (spec == null ? null : spec.getTitleLabel())));
}, "~N,JSV.common.Spectrum");
Clazz.defineMethod(c$, "notifyPeakPickedListeners", 
function(p){
if (p == null) {
p =  new JSV.common.PeakPickEvent(this.jsvp, this.coordClicked, this.getSpectrum().getAssociatedPeakInfo(this.xPixelClicked, this.coordClicked));
}this.notifyListeners(p);
}, "JSV.common.PeakPickEvent");
Clazz.defineMethod(c$, "notifyListeners", 
function(eventObj){
for (var i = 0; i < this.listeners.size(); i++) if (this.listeners.get(i) != null) this.listeners.get(i).panelEvent(eventObj);

}, "~O");
Clazz.defineMethod(c$, "escapeKeyPressed", 
function(isDEL){
this.currentGraphSet.escapeKeyPressed(isDEL);
}, "~B");
Clazz.defineMethod(c$, "hasFocus", 
function(){
return this.jsvp.hasFocus();
});
Clazz.defineMethod(c$, "isMouseUp", 
function(){
return (this.mouseState === JSV.common.PanelData.Mouse.UP);
});
Clazz.defineMethod(c$, "clearMouseSet", 
function(gs){
if (gs == null) {
this.mousePeak = null;
}if (this.mouseSet != null && this.mouseSet !== gs) {
this.mouseSet.mouseMovedEvent(2147483647, 0);
}this.mouseSet = gs;
if (gs == null && this.graphSets.size() > 0) {
(this.mouseSet = gs = this.graphSets.get(this.graphSets.size() - 1)).setSpectrumMovedTo(gs.nSpectra - 1);
}}, "JSV.common.GraphSet");
Clazz.defineMethod(c$, "doMouseMoved", 
function(xPixel, yPixel){
this.mouseX = xPixel;
this.mouseY = yPixel;
this.mouseState = JSV.common.PanelData.Mouse.UP;
this.clickCount = 0;
var gs = JSV.common.GraphSet.findGraphSet(this.graphSets, xPixel, yPixel);
if (gs == null) return;
this.clearMouseSet(gs);
var peak = gs.mouseMovedEvent(xPixel, yPixel);
if (this.mousePeak !== peak) {
this.mousePeak = peak;
this.setTaintedAll();
}}, "~N,~N");
Clazz.defineMethod(c$, "doMouseClicked", 
function(xPixel, yPixel, isControlDown){
var gs = JSV.common.GraphSet.findGraphSet(this.graphSets, xPixel, yPixel);
if (gs == null) return;
this.setCurrentGraphSet(gs, yPixel);
gs.mouseClickedEvent(xPixel, yPixel, this.clickCount, isControlDown);
this.setTaintedAll();
this.repaint();
}, "~N,~N,~B");
Clazz.defineMethod(c$, "doMousePressed", 
function(xPixel, yPixel){
this.mouseState = JSV.common.PanelData.Mouse.DOWN;
var gs = JSV.common.GraphSet.findGraphSet(this.graphSets, xPixel, yPixel);
if (gs == null) return;
this.clearMouseSet(gs);
this.setCurrentGraphSet(gs, yPixel);
this.clickCount = (++this.clickCount % 3);
this.currentGraphSet.mousePressedEvent(xPixel, yPixel, this.clickCount);
}, "~N,~N");
Clazz.defineMethod(c$, "doMouseDragged", 
function(xPixel, yPixel){
this.isIntegralDrag = new Boolean (this.isIntegralDrag | this.ctrlPressed).valueOf();
this.mouseState = JSV.common.PanelData.Mouse.DOWN;
if (JSV.common.GraphSet.findGraphSet(this.graphSets, xPixel, yPixel) !== this.currentGraphSet) return;
if (this.currentGraphSet.checkWidgetEvent(xPixel, yPixel, false)) this.setTaintedAll();
this.currentGraphSet.mouseMovedEvent(xPixel, yPixel);
}, "~N,~N");
Clazz.defineMethod(c$, "doMouseReleased", 
function(xPixel, yPixel, isButton1){
this.mouseState = JSV.common.PanelData.Mouse.UP;
if (this.thisWidget == null && this.currentGraphSet.pendingMeasurement == null || !isButton1) return;
this.currentGraphSet.mouseReleasedEvent(xPixel, yPixel);
this.thisWidget = null;
this.isIntegralDrag = false;
this.integralShiftMode = 0;
}, "~N,~N,~B");
Clazz.defineMethod(c$, "hasCurrentMeasurements", 
function(type){
return this.currentGraphSet.hasCurrentMeasurement(type);
}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "getDialog", 
function(type){
return this.currentGraphSet.getDialog(type, -1);
}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "addDialog", 
function(iSpec, type, dialog){
this.currentGraphSet.addDialog(iSpec, type, dialog);
}, "~N,JSV.common.Annotation.AType,JSV.api.AnnotationData");
Clazz.defineMethod(c$, "getPeakListing", 
function(p, tfToggle){
if (p != null) this.currentGraphSet.getPeakListing(-1, p, true);
this.currentGraphSet.setPeakListing(tfToggle);
}, "JSV.common.Parameters,Boolean");
Clazz.defineMethod(c$, "checkIntegral", 
function(parameters, value){
this.currentGraphSet.checkIntegralParams(parameters, value);
}, "JSV.common.Parameters,~S");
Clazz.defineMethod(c$, "setIntegrationRatios", 
function(value){
this.currentGraphSet.setIntegrationRatios(value);
}, "~S");
Clazz.defineMethod(c$, "getView", 
function(){
return this.currentGraphSet.getCurrentView();
});
Clazz.defineMethod(c$, "closeAllDialogsExcept", 
function(type){
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).closeDialogsExcept(type);

}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "removeDialog", 
function(dialog){
this.currentGraphSet.removeDialog(dialog);
}, "JSV.dialog.JSVDialog");
Clazz.defineMethod(c$, "normalizeIntegral", 
function(){
var integral = this.getSelectedIntegral();
if (integral == null) return;
var sValue = integral.text;
if (sValue.length == 0) sValue = "" + integral.getValue();
var newValue = this.getInput("Enter a new value for this integral", "Normalize Integral", sValue);
try {
this.setSelectedIntegral(Double.parseDouble(newValue));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
});
Clazz.defineMethod(c$, "getDrawTitle", 
function(isPrinting, iSpec){
var title = null;
if (isPrinting) {
title = this.printJobTitle;
} else if (this.nSpectra == 1) {
title = this.getSpectrum().getPeakTitle();
} else if (iSpec >= 0) {
title = this.getSpectrumAt(iSpec).getPeakTitle();
} else if (this.viewTitle != null) {
if (this.currentGraphSet.getTitle(false) != null) title = this.getSpectrum().getPeakTitle();
if (title == null) title = this.viewTitle;
} else {
title = this.jsvp.getTitle().trim();
}if (title.indexOf("\n") >= 0) title = title.substring(0, title.indexOf("\n")).trim();
return title;
}, "~B,~N");
Clazz.defineMethod(c$, "linkSpectra", 
function(mode){
if (mode === JSV.common.PanelData.LinkMode.ALL) mode = (this.nSpectra == 2 ? JSV.common.PanelData.LinkMode.AB : this.nSpectra == 3 ? JSV.common.PanelData.LinkMode.ABC : JSV.common.PanelData.LinkMode.NONE);
if (mode !== JSV.common.PanelData.LinkMode.NONE && mode.toString().length != this.nSpectra) return;
this.setGraphSets(mode);
}, "JSV.common.PanelData.LinkMode");
Clazz.defineMethod(c$, "doZoomLinked", 
function(graphSet, initX, finalX, addZoom, checkRange, is1d){
if (this.linking) return;
this.linking = true;
var spec = graphSet.getSpectrumAt(0);
for (var i = this.graphSets.size(); --i >= 0; ) {
var gs = this.graphSets.get(i);
if (gs !== graphSet && JSV.common.Spectrum.areXScalesCompatible(spec, this.graphSets.get(i).getSpectrumAt(0), false, true)) gs.doZoom(initX, 0, finalX, 0, is1d, false, checkRange, false, addZoom);
}
this.linking = false;
}, "JSV.common.GraphSet,~N,~N,~B,~B,~B");
Clazz.defineMethod(c$, "clearLinkViews", 
function(graphSet){
if (this.linking) return;
this.linking = true;
var spec = graphSet.getSpectrum();
for (var i = this.graphSets.size(); --i >= 0; ) {
var gs = this.graphSets.get(i);
if (gs !== graphSet && JSV.common.Spectrum.areXScalesCompatible(spec, this.graphSets.get(i).getSpectrum(), false, true)) gs.clearViews();
}
this.linking = false;
}, "JSV.common.GraphSet");
Clazz.defineMethod(c$, "setlinkedXMove", 
function(graphSet, x, isX2){
if (this.linking) return;
this.linking = true;
var spec = graphSet.getSpectrum();
for (var i = this.graphSets.size(); --i >= 0; ) {
var gs = this.graphSets.get(i);
if (gs !== graphSet && JSV.common.Spectrum.areXScalesCompatible(spec, this.graphSets.get(i).getSpectrum(), false, true)) {
if (gs.imageView == null) if (isX2) {
gs.setXPixelMovedTo(1.7976931348623157E308, x, 0, 0);
} else {
gs.setXPixelMovedTo(x, 1.7976931348623157E308, 0, 0);
}}}
this.linking = false;
}, "JSV.common.GraphSet,~N,~B");
Clazz.defineMethod(c$, "set2DCrossHairsLinked", 
function(graphSet, x, y, isLocked){
for (var i = this.graphSets.size(); --i >= 0; ) {
var gs = this.graphSets.get(i);
if (gs !== graphSet) gs.set2DXY(x, y, isLocked);
}
}, "JSV.common.GraphSet,~N,~N,~B");
Clazz.defineMethod(c$, "dialogsToFront", 
function(spec){
this.currentGraphSet.dialogsToFront(spec);
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "setColor", 
function(st, color){
if (color != null) this.options.put(st, JU.CU.toRGBHexString(color));
switch (st) {
case JSV.common.ScriptToken.COORDINATESCOLOR:
this.coordinatesColor = color;
return;
case JSV.common.ScriptToken.HIGHLIGHTCOLOR:
this.highlightColor = color.addAlpha(150);
return;
case JSV.common.ScriptToken.ZOOMBOXCOLOR:
this.zoomBoxColor = color;
return;
case JSV.common.ScriptToken.ZOOMBOXCOLOR2:
this.zoomBoxColor2 = color;
return;
case JSV.common.ScriptToken.BACKGROUNDCOLOR:
this.jsvp.setBackgroundColor(this.bgcolor = color);
break;
case JSV.common.ScriptToken.GRIDCOLOR:
this.gridColor = color;
break;
case JSV.common.ScriptToken.INTEGRALPLOTCOLOR:
this.integralPlotColor = color;
break;
case JSV.common.ScriptToken.PEAKOVERCOLOR:
this.peakOverColor = color.addAlpha(30);
break;
case JSV.common.ScriptToken.PEAKTABCOLOR:
this.peakTabColor = color;
break;
case JSV.common.ScriptToken.PLOTCOLOR:
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).setPlotColor0(color);

break;
case JSV.common.ScriptToken.PLOTAREACOLOR:
this.plotAreaColor = color;
break;
case JSV.common.ScriptToken.SCALECOLOR:
this.scaleColor = color;
break;
case JSV.common.ScriptToken.TITLECOLOR:
this.titleColor = color;
break;
case JSV.common.ScriptToken.UNITSCOLOR:
this.unitsColor = color;
break;
default:
JU.Logger.warn("AwtPanel --- unrecognized color: " + st);
return;
}
this.taintedAll = true;
}, "JSV.common.ScriptToken,javajs.api.GenericColor");
Clazz.defineMethod(c$, "getColor", 
function(whatColor){
switch (whatColor) {
default:
JU.Logger.error("awtgraphset missing color " + whatColor);
return this.BLACK;
case JSV.common.ScriptToken.ZOOMBOXCOLOR2:
return this.zoomBoxColor2;
case JSV.common.ScriptToken.ZOOMBOXCOLOR:
return this.zoomBoxColor;
case JSV.common.ScriptToken.HIGHLIGHTCOLOR:
return this.highlightColor;
case JSV.common.ScriptToken.INTEGRALPLOTCOLOR:
return this.integralPlotColor;
case JSV.common.ScriptToken.GRIDCOLOR:
return this.gridColor;
case JSV.common.ScriptToken.PEAKOVERCOLOR:
return this.peakOverColor;
case JSV.common.ScriptToken.PEAKTABCOLOR:
return this.peakTabColor;
case JSV.common.ScriptToken.PLOTAREACOLOR:
return this.plotAreaColor;
case JSV.common.ScriptToken.SCALECOLOR:
return this.scaleColor;
case JSV.common.ScriptToken.TITLECOLOR:
return this.titleColor;
case JSV.common.ScriptToken.UNITSCOLOR:
return this.unitsColor;
}
}, "JSV.common.ScriptToken");
Clazz.defineMethod(c$, "getOverlayLegendData", 
function(){
var numSpectra = this.currentGraphSet.nSpectra;
var data =  new Array(numSpectra);
var f1 = this.getSpectrumAt(0).getFilePath();
var f2 = this.getSpectrumAt(numSpectra - 1).getFilePath();
var useFileName = f1 != null && f2 != null && !f1.equals(f2);
for (var index = 0; index < numSpectra; index++) {
var cols =  new Array(3);
var spectrum = this.getSpectrumAt(index);
var title = spectrum.getTitle();
if (useFileName) title = JSV.common.JSVFileManager.getTagName(spectrum.getFilePath()) + " - " + title;
var plotColor = this.getCurrentPlotColor(index);
cols[0] =  new Integer(index + 1);
cols[1] = plotColor;
cols[2] = " " + title;
data[index] = cols;
}
return data;
});
Clazz.defineMethod(c$, "setColorOrFont", 
function(params, st){
if (st == null) {
var colors = params.elementColors;
for (var entry, $entry = colors.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) this.setColorOrFont(params, entry.getKey());

this.setColorOrFont(params, JSV.common.ScriptToken.DISPLAYFONTNAME);
this.setColorOrFont(params, JSV.common.ScriptToken.TITLEFONTNAME);
return;
}switch (st) {
case JSV.common.ScriptToken.DISPLAYFONTNAME:
this.setFontName(st, params.displayFontName);
return;
case JSV.common.ScriptToken.TITLEFONTNAME:
this.setFontName(st, params.titleFontName);
return;
}
this.setColor(st, params.getElementColor(st));
}, "JSV.common.ColorParameters,JSV.common.ScriptToken");
Clazz.defineMethod(c$, "getCurrentPlotColor", 
function(i){
return this.currentGraphSet.getPlotColor(i);
}, "~N");
Clazz.defineMethod(c$, "setPrint", 
function(pl, fontName){
if (pl == null) {
this.options.putAll(this.optionsSaved);
this.optionsSaved = null;
return;
}this.printJobTitle = pl.title;
this.printingFontName = fontName;
this.printGraphPosition = pl.position;
this.optionsSaved =  new java.util.Hashtable();
this.optionsSaved.putAll(this.options);
this.gridOn = pl.showGrid;
this.titleOn = pl.showTitles;
this.setBoolean(JSV.common.ScriptToken.XSCALEON, pl.showXScale);
this.setBoolean(JSV.common.ScriptToken.XUNITSON, pl.showXScale);
this.setBoolean(JSV.common.ScriptToken.YSCALEON, pl.showYScale);
this.setBoolean(JSV.common.ScriptToken.YUNITSON, pl.showYScale);
}, "JSV.common.PrintLayout,~S");
Clazz.defineMethod(c$, "setDefaultPrintOptions", 
function(pl){
pl.showGrid = this.gridOn;
pl.showXScale = this.getBoolean(JSV.common.ScriptToken.XSCALEON);
pl.showYScale = this.getBoolean(JSV.common.ScriptToken.YSCALEON);
pl.showTitles = this.titleOn;
}, "JSV.common.PrintLayout");
Clazz.defineMethod(c$, "showDialog", 
function(type){
var ad = this.getDialog(type);
this.closeAllDialogsExcept(type);
if (ad != null && Clazz.instanceOf(ad,"JSV.dialog.JSVDialog")) return (ad).reEnable();
var iSpec = this.getCurrentSpectrumIndex();
if (iSpec < 0) {
this.jsvp.showMessage("To enable " + type + " first select a spectrum by clicking on it.", "" + type);
return null;
}var spec = this.getSpectrum();
var dialog = this.vwr.getDialog(type, spec);
if (ad == null && type === JSV.common.Annotation.AType.Measurements) ad =  new JSV.common.MeasurementData(JSV.common.Annotation.AType.Measurements, spec);
if (ad != null) dialog.setData(ad);
this.addDialog(iSpec, type, dialog);
dialog.reEnable();
return dialog;
}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "printPdf", 
function(pdfCreator, pl){
var isPortrait = !pl.layout.equals("landscape");
this.print(pdfCreator, (isPortrait ? pl.imageableHeight : pl.imageableWidth), (isPortrait ? pl.imageableWidth : pl.imageableHeight), pl.imageableX, pl.imageableY, pl.paperHeight, pl.paperWidth, isPortrait, 0);
}, "J.api.GenericGraphics,JSV.common.PrintLayout");
Clazz.defineMethod(c$, "print", 
function(g, height, width, x, y, paperHeight, paperWidth, isPortrait, pageIndex){
if (pageIndex != 0) {
return 1;
}this.g2d = this.g2d0;
this.isPrinting = true;
var addFilePath = false;
if (Clazz.instanceOf(g,"J.api.GenericGraphics")) {
this.g2d = g;
g = this.gMain;
}if (this.printGraphPosition.equals("default")) {
if (isPortrait) {
height = 450;
width = 280;
} else {
height = 280;
width = 450;
}} else if (this.printGraphPosition.equals("fit to page")) {
} else {
if (isPortrait) {
height = 450;
width = 280;
x = Clazz.doubleToInt(Clazz.doubleToInt(paperWidth - width) / 2);
y = Clazz.doubleToInt(Clazz.doubleToInt(paperHeight - height) / 2);
} else {
height = 280;
width = 450;
y = Clazz.doubleToInt(Clazz.doubleToInt(paperWidth - 280) / 2);
x = Clazz.doubleToInt(Clazz.doubleToInt(paperHeight - 450) / 2);
}}this.setTaintedAll();
this.g2d.translateScale(null, x, y, 0.1);
if (g == null) g =  new java.awt.image.BufferedImage(Clazz.doubleToInt(width), Clazz.doubleToInt(height), 2).getGraphics();
this.drawGraph(g, g, g, Clazz.doubleToInt(width), Clazz.doubleToInt(height), addFilePath, false);
if (this.g2d !== this.g2d0 && g !== this.gMain) (g).dispose();
this.g2d = this.g2d0;
this.isPrinting = false;
return 0;
}, "~O,~N,~N,~N,~N,~N,~N,~B,~N");
Clazz.overrideMethod(c$, "keyPressed", 
function(code, modifiers){
if (this.isPrinting) return false;
this.checkKeyControl(code, true);
switch (code) {
case 27:
case 127:
case 8:
this.escapeKeyPressed(code != 27);
this.isIntegralDrag = false;
this.setTaintedAll();
this.repaint();
return true;
}
var scaleFactor = 0;
var doConsume = false;
if (modifiers == 0) {
switch (code) {
case 37:
case 39:
this.doMouseMoved((code == 39 ? ++this.mouseX : --this.mouseX), this.mouseY);
this.repaint();
doConsume = true;
break;
case 33:
case 34:
scaleFactor = (code == 33 ? JSV.common.GraphSet.RT2 : 1 / JSV.common.GraphSet.RT2);
doConsume = true;
break;
case 40:
case 38:
var dir = (code == 40 ? -1 : 1);
if (this.getSpectrumAt(0).getSubSpectra() == null) {
this.notifySubSpectrumChange(dir, null);
} else {
this.advanceSubSpectrum(dir);
this.setTaintedAll();
this.repaint();
}doConsume = true;
break;
}
} else if (this.checkMod(code, 2)) {
switch (code) {
case 40:
case 38:
case 45:
case 61:
scaleFactor = (code == 61 || code == 38 ? JSV.common.GraphSet.RT2 : 1 / JSV.common.GraphSet.RT2);
doConsume = true;
break;
case 37:
case 39:
this.toPeak(code == 39 ? 1 : -1);
doConsume = true;
break;
}
}if (scaleFactor != 0) {
this.scaleYBy(scaleFactor);
this.setTaintedAll();
this.repaint();
}return doConsume;
}, "~N,~N");
Clazz.overrideMethod(c$, "keyReleased", 
function(keyCode){
if (this.isPrinting) return;
this.checkKeyControl(keyCode, false);
}, "~N");
Clazz.overrideMethod(c$, "keyTyped", 
function(ch, mods){
if (this.isPrinting) return false;
switch (ch) {
case 110:
if (mods != 0) break;
this.normalizeIntegral();
return true;
case 26:
if (mods != 2) break;
this.previousView();
this.setTaintedAll();
this.repaint();
return true;
case 25:
if (mods != 2) break;
this.nextView();
this.setTaintedAll();
this.repaint();
return true;
}
return false;
}, "~N,~N");
Clazz.overrideMethod(c$, "mouseAction", 
function(mode, time, x, y, countIgnored, buttonMods){
if (this.isPrinting) return;
switch (mode) {
case 4:
if (!this.checkMod(buttonMods, 16)) return;
this.doMousePressed(x, y);
break;
case 5:
this.doMouseReleased(x, y, this.checkMod(buttonMods, 16));
this.setTaintedAll();
this.repaint();
break;
case 1:
this.doMouseDragged(x, y);
this.repaint();
break;
case 0:
this.jsvp.getFocusNow(false);
if ((buttonMods & 28) != 0) {
this.doMouseDragged(x, y);
this.repaint();
return;
}this.doMouseMoved(x, y);
if (this.coordStr != null) this.repaint();
break;
case 2:
if (this.checkMod(buttonMods, 4)) {
this.jsvp.showMenu(x, y);
return;
}this.ctrlPressed = false;
this.doMouseClicked(x, y, this.updateControlPressed(buttonMods));
break;
}
}, "~N,~N,~N,~N,~N,~N");
Clazz.defineMethod(c$, "checkMod", 
function(buttonMods, mask){
return ((buttonMods & mask) == mask);
}, "~N,~N");
Clazz.defineMethod(c$, "checkKeyControl", 
function(keyCode, isPressed){
switch (keyCode) {
case 17:
case 157:
this.ctrlPressed = isPressed;
break;
case 16:
this.shiftPressed = isPressed;
break;
}
}, "~N,~B");
Clazz.defineMethod(c$, "updateControlPressed", 
function(mods){
return (this.ctrlPressed = new Boolean (this.ctrlPressed |(this.checkMod(mods, 2) || this.checkMod(mods, 20))).valueOf());
}, "~N");
Clazz.overrideMethod(c$, "mouseEnterExit", 
function(time, x, y, isExit){
if (isExit) {
this.thisWidget = null;
this.isIntegralDrag = false;
this.integralShiftMode = 0;
} else {
try {
this.jsvp.getFocusNow(false);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
System.out.println("pd " + this + " cannot focus");
} else {
throw e;
}
}
}}, "~N,~N,~N,~B");
Clazz.defineMethod(c$, "setSolutionColor", 
function(what){
var isNone = (what.indexOf("none") >= 0);
var asFitted = (what.indexOf("false") < 0);
if (what.indexOf("all") < 0) {
var color = (isNone ? -1 : this.vwr.getSolutionColor(asFitted));
this.getSpectrum().setFillColor(color == -1 ? null : this.vwr.parameters.getColor1(color));
} else {
var vi = JSV.common.JSViewer.getInterface("JSV.common.Visible");
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).setSolutionColor(vi, isNone, asFitted);

}}, "~S");
Clazz.defineMethod(c$, "setIRMode", 
function(mode, type){
for (var i = this.graphSets.size(); --i >= 0; ) this.graphSets.get(i).setIRMode(mode, type);

}, "JSV.common.Spectrum.IRMode,~S");
Clazz.defineMethod(c$, "closeSpectrum", 
function(){
this.vwr.close("views");
this.vwr.close(this.getSourceID());
this.vwr.execView("*", true);
});
/*if2*/;(function(){
var c$ = Clazz.declareType(JSV.common.PanelData, "LinkMode", Enum);
c$.getMode = Clazz.defineMethod(c$, "getMode", 
function(abc){
if (abc.equals("*")) return JSV.common.PanelData.LinkMode.ALL;
for (var mode, $mode = 0, $$mode = JSV.common.PanelData.LinkMode.values(); $mode < $$mode.length && ((mode = $$mode[$mode]) || true); $mode++) if (mode.name().equalsIgnoreCase(abc)) return mode;

return JSV.common.PanelData.LinkMode.NONE;
}, "~S");
Clazz.defineEnumConstant(c$, "ALL", 0, []);
Clazz.defineEnumConstant(c$, "NONE", 1, []);
Clazz.defineEnumConstant(c$, "AB", 2, []);
Clazz.defineEnumConstant(c$, "ABC", 3, []);
/*eoif2*/})();
/*if2*/;(function(){
var c$ = Clazz.declareType(JSV.common.PanelData, "Mouse", Enum);
Clazz.defineEnumConstant(c$, "UP", 0, []);
Clazz.defineEnumConstant(c$, "DOWN", 1, []);
/*eoif2*/})();
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.declareInterface(J.api, "EventManager");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.XYScaleConverter", "java.util.Hashtable", "JU.BS", "$.Lst", "JSV.common.Coordinate"], "JSV.common.GraphSet", ["JU.DF", "$.PT", "JSV.common.Annotation", "$.ColorParameters", "$.ColoredAnnotation", "$.ImageView", "$.IntegralData", "$.Measurement", "$.MeasurementData", "$.PanelData", "$.Parameters", "$.PeakData", "$.PeakPickEvent", "$.PlotWidget", "$.ScaleData", "$.ScriptToken", "$.Spectrum", "$.ViewData", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.gs2dLinkedX = null;
this.gs2dLinkedY = null;
this.cur1D2Locked = false;
this.highlights = null;
this.spectra = null;
this.isSplittable = true;
this.allowStacking = true;
this.annotations = null;
this.selectedSpectrumMeasurements = null;
this.selectedSpectrumIntegrals = null;
this.lastAnnotation = null;
this.pendingMeasurement = null;
this.pendingIntegral = null;
this.graphsTemp = null;
this.widgets = null;
this.isLinked = false;
this.haveSingleYScale = false;
this.iSpectrumMovedTo = -1;
this.iSpectrumClicked = 0;
this.iSpectrumSelected = -1;
this.stackSelected = false;
this.bsSelected = null;
this.viewData = null;
this.reversePlot = false;
this.nSplit = 1;
this.yStackOffsetPercent = 0;
this.showAllStacked = true;
this.viewList = null;
this.imageView = null;
this.pd = null;
this.sticky2Dcursor = false;
this.nSpectra = 0;
this.fracX = 1;
this.fracY = 1;
this.fX0 = 0;
this.fY0 = 0;
this.zoomBox1D = null;
this.zoomBox2D = null;
this.pin1Dx0 = null;
this.pin1Dx1 = null;
this.pin1Dy0 = null;
this.pin1Dy1 = null;
this.pin1Dx01 = null;
this.pin1Dy01 = null;
this.pin2Dx0 = null;
this.pin2Dx1 = null;
this.pin2Dy0 = null;
this.pin2Dy1 = null;
this.pin2Dx01 = null;
this.pin2Dy01 = null;
this.cur2Dx0 = null;
this.cur2Dx1 = null;
this.cur1D2x1 = null;
this.cur1D2x2 = null;
this.cur2Dy = null;
this.xPixel0 = 0;
this.yPixel0 = 0;
this.xPixel1 = 0;
this.yPixel1 = 0;
this.xPixels = 0;
this.yPixels = 0;
this.xPixel00 = 0;
this.yPixel00 = 0;
this.xPixel11 = 0;
this.yPixel11 = 0;
this.yPixel000 = 0;
this.xPixel10 = 0;
this.xPixels0 = 0;
this.xVArrows = 0;
this.xHArrows = 0;
this.yHArrows = 0;
this.allowStackedYScale = true;
this.drawXAxisLeftToRight = false;
this.xAxisLeftToRight = true;
this.iPreviousSpectrumClicked = -1;
this.$haveSelectedSpectrum = false;
this.zoomEnabled = false;
this.currentZoomIndex = 0;
this.lastClickX = NaN;
this.lastPixelX = 2147483647;
this.height = 0;
this.width = 0;
this.right = 0;
this.top = 0;
this.left = 0;
this.bottom = 0;
this.piMouseOver = null;
this.coordTemp = null;
this.FONT_PLAIN = 0;
this.FONT_BOLD = 1;
this.FONT_ITALIC = 2;
this.is2DSpectrum = false;
this.selectedMeasurement = null;
this.selectedIntegral = null;
this.lastXMax = NaN;
this.lastSpecClicked = -1;
this.inPlotMove = false;
this.xPixelMovedTo = -1;
this.xPixelMovedTo2 = -1;
this.yValueMovedTo = 0;
this.xValueMovedTo = 0;
this.haveLeftRightArrows = false;
this.xPixelPlot1 = 0;
this.xPixelPlot0 = 0;
this.yPixelPlot0 = 0;
this.yPixelPlot1 = 0;
this.nextClickForSetPeak = null;
this.closerX = 0;
this.closerY = 0;
this.splitterX = 0;
this.splitterY = 0;
this.isPrintingOrSaving = false;
this.mapX = null;
if (!Clazz.isClassDefined("JSV.common.GraphSet.Highlight")) {
JSV.common.GraphSet.$GraphSet$Highlight$ ();
}
this.widgetsAreSet = true;
this.lastIntDragX = 0;
this.nextClickMode = 0;
this.dialogs = null;
this.aIntegrationRatios = null;
this.jsvp = null;
this.image2D = null;
this.plotColors = null;
this.g2d = null;
this.gMain = null;
this.COLOR_GREY = -3;
this.COLOR_BLACK = -2;
this.COLOR_INTEGRAL = -1;
Clazz.instantialize(this, arguments);}, JSV.common, "GraphSet", null, JSV.common.XYScaleConverter);
Clazz.prepareFields (c$, function(){
this.highlights =  new JU.Lst();
this.spectra =  new JU.Lst();
this.graphsTemp =  new JU.Lst();
this.bsSelected =  new JU.BS();
this.coordTemp =  new JSV.common.Coordinate();
this.mapX =  new java.util.Hashtable();
});
Clazz.makeConstructor(c$, 
function(pd){
this.pd = pd;
this.jsvp = pd.jsvp;
this.g2d = pd.g2d;
}, "JSV.common.PanelData");
Clazz.defineMethod(c$, "setSpectrumMovedTo", 
function(i){
return this.iSpectrumMovedTo = i;
}, "~N");
Clazz.defineMethod(c$, "setSpectrumClicked", 
function(i){
this.stackSelected = this.showAllStacked;
if (i < 0 || this.iSpectrumClicked != i) {
this.lastClickX = NaN;
this.lastPixelX = 2147483647;
}this.iSpectrumClicked = this.setSpectrumSelected(this.setSpectrumMovedTo(i));
}, "~N");
Clazz.defineMethod(c$, "setSpectrumSelected", 
function(i){
var isNew = (i != this.iSpectrumSelected);
this.iSpectrumSelected = i;
if (isNew) {
this.getCurrentView();
}return this.iSpectrumSelected;
}, "~N");
Clazz.defineMethod(c$, "closeDialogsExcept", 
function(type){
if (this.dialogs != null) for (var e, $e = this.dialogs.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
var ad = e.getValue();
if (JSV.common.GraphSet.isDialog(ad) && (type === JSV.common.Annotation.AType.NONE || ad.getAType() !== type)) (ad).setVisible(false);
}
}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "dispose", 
function(){
this.spectra = null;
this.viewData = null;
this.viewList = null;
this.annotations = null;
this.lastAnnotation = null;
this.pendingMeasurement = null;
this.imageView = null;
this.graphsTemp = null;
this.widgets = null;
this.disposeImage();
if (this.dialogs != null) for (var e, $e = this.dialogs.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
var ad = e.getValue();
if (JSV.common.GraphSet.isDialog(ad)) (ad).dispose();
}
this.dialogs = null;
});
Clazz.defineMethod(c$, "isDrawNoSpectra", 
function(){
return (this.iSpectrumSelected == -2147483648);
});
Clazz.defineMethod(c$, "getFixedSelectedSpectrumIndex", 
function(){
return Math.max(this.iSpectrumSelected, 0);
});
Clazz.defineMethod(c$, "getSpectrum", 
function(){
return this.getSpectrumAt(this.getFixedSelectedSpectrumIndex()).getCurrentSubSpectrum();
});
Clazz.defineMethod(c$, "getSpectrumAt", 
function(index){
return this.spectra.get(index);
}, "~N");
Clazz.defineMethod(c$, "getSpectrumIndex", 
function(spec){
for (var i = this.spectra.size(); --i >= 0; ) if (this.spectra.get(i) === spec) return i;

return -1;
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "addSpec", 
function(spec){
this.spectra.addLast(spec);
this.nSpectra++;
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "splitStack", 
function(doSplit){
if (doSplit && this.isSplittable) {
this.nSplit = this.nSpectra;
this.showAllStacked = false;
this.setSpectrumClicked(this.iSpectrumSelected);
this.pd.currentSplitPoint = this.iSpectrumSelected;
} else {
this.nSplit = 1;
this.showAllStacked = this.allowStacking && !doSplit;
this.setSpectrumClicked(this.iSpectrumSelected);
}this.stackSelected = false;
JSV.common.GraphSet.setFractionalPositions(this.pd, this.pd.graphSets, JSV.common.PanelData.LinkMode.NONE);
this.pd.setTaintedAll();
}, "~B");
Clazz.defineMethod(c$, "setPositionForFrame", 
function(iSplit){
if (iSplit < 0) iSplit = 0;
var marginalHeight = this.height - 50;
this.xPixel00 = Clazz.doubleToInt(this.width * this.fX0);
this.xPixel11 = Clazz.doubleToInt(this.xPixel00 + this.width * this.fracX - 1);
this.xHArrows = this.xPixel00 + 25;
this.xVArrows = this.xPixel11 - Clazz.doubleToInt(this.right / 2);
this.xPixel0 = this.xPixel00 + Clazz.doubleToInt(this.left * (1 - this.fX0));
this.xPixel10 = this.xPixel1 = this.xPixel11 - this.right;
this.xPixels0 = this.xPixels = this.xPixel1 - this.xPixel0 + 1;
this.yPixel000 = (this.pd.isPrinting ? 100 : !this.isPrintingOrSaving && this.fY0 == 0 ? 25 : 0) + Clazz.doubleToInt(this.height * this.fY0);
this.yPixel00 = this.yPixel000 + Clazz.doubleToInt(marginalHeight * this.fracY * iSplit);
this.yPixel11 = this.yPixel00 + Clazz.doubleToInt(marginalHeight * this.fracY) - 1;
this.yHArrows = this.yPixel11 - 12;
this.yPixel0 = this.yPixel00 + Clazz.doubleToInt(this.top / 2);
this.yPixel1 = this.yPixel11 - Clazz.doubleToInt(this.bottom / 2);
this.yPixels = this.yPixel1 - this.yPixel0 + 1;
if (this.imageView != null && this.is2DSpectrum) {
this.setImageWindow();
if (this.pd.display1D) {
var widthRatio = (this.pd.display1D ? 1.0 * (this.xPixels0 - this.imageView.xPixels) / this.xPixels0 : 1);
this.xPixels = Clazz.doubleToInt(Math.floor(widthRatio * this.xPixels0 * 0.8));
this.xPixel1 = this.xPixel0 + this.xPixels - 1;
} else {
this.xPixels = 0;
this.xPixel1 = this.imageView.xPixel0 - 30;
}}}, "~N");
Clazz.defineMethod(c$, "hasPoint", 
function(xPixel, yPixel){
return (xPixel >= this.xPixel00 && xPixel <= this.xPixel11 && yPixel >= this.yPixel000 && yPixel <= this.yPixel11 * this.nSplit);
}, "~N,~N");
Clazz.defineMethod(c$, "isInPlotRegion", 
function(xPixel, yPixel){
return (xPixel >= this.xPixel0 && xPixel <= this.xPixel1 && yPixel >= this.yPixel0 && yPixel <= this.yPixel1);
}, "~N,~N");
Clazz.defineMethod(c$, "getSplitPoint", 
function(yPixel){
return (this.yPixel1 == this.yPixel00 ? 0 : Math.max(0, Math.min(Clazz.doubleToInt((yPixel - this.yPixel000) / (this.yPixel11 - this.yPixel00)), this.nSplit - 1)));
}, "~N");
Clazz.defineMethod(c$, "isSplitWidget", 
function(xPixel, yPixel){
return this.isFrameBox(xPixel, yPixel, this.splitterX, this.splitterY);
}, "~N,~N");
Clazz.defineMethod(c$, "isCloserWidget", 
function(xPixel, yPixel){
return this.isFrameBox(xPixel, yPixel, this.closerX, this.closerY);
}, "~N,~N");
Clazz.defineMethod(c$, "initGraphSet", 
function(startIndex, endIndex){
if (JSV.common.GraphSet.veryLightGrey == null) JSV.common.GraphSet.veryLightGrey = this.g2d.getColor3(200, 200, 200);
this.setPlotColors(JSV.common.ColorParameters.defaultPlotColors);
this.xAxisLeftToRight = this.getSpectrumAt(0).shouldDisplayXAxisIncreasing();
this.setDrawXAxis();
var startIndices =  Clazz.newIntArray (this.nSpectra, 0);
var endIndices =  Clazz.newIntArray (this.nSpectra, 0);
this.bsSelected.setBits(0, this.nSpectra);
this.allowStackedYScale = true;
if (endIndex <= 0) endIndex = 2147483647;
this.isSplittable = (this.nSpectra > 1);
this.allowStacking = (this.spectra.get(0).isStackable());
this.showAllStacked = this.allowStacking && (this.nSpectra > 1);
for (var i = 0; i < this.nSpectra; i++) {
var iLast = this.spectra.get(i).getXYCoords().length - 1;
startIndices[i] = JSV.common.Coordinate.intoRange(startIndex, 0, iLast);
endIndices[i] = JSV.common.Coordinate.intoRange(endIndex, 0, iLast);
this.allowStackedYScale = new Boolean (this.allowStackedYScale & (this.spectra.get(i).getYUnits().equals(this.spectra.get(0).getYUnits()) && this.spectra.get(i).getUserYFactor() == this.spectra.get(0).getUserYFactor())).valueOf();
}
this.getView(0, 0, 0, 0, startIndices, endIndices, null, null);
this.viewList =  new JU.Lst();
this.viewList.addLast(this.viewData);
}, "~N,~N");
Clazz.defineMethod(c$, "getView", 
function(x1, x2, y1, y2, startIndices, endIndices, viewScales, yScales){
var graphs = (this.graphsTemp.size() == 0 ? this.spectra : this.graphsTemp);
var subspecs = this.getSpectrumAt(0).getSubSpectra();
var dontUseSubspecs = (subspecs == null || subspecs.size() == 2 && subspecs.get(1).isImaginary());
var is2D = !this.getSpectrumAt(0).is1D();
var useFirstSubSpecOnly = false;
if (is2D && useFirstSubSpecOnly || dontUseSubspecs && y1 == y2) {
graphs = this.spectra;
} else if (y1 == y2) {
this.viewData =  new JSV.common.ViewData(subspecs, y1, y2, this.getSpectrum().isContinuous());
graphs = null;
}if (graphs != null) {
this.viewData =  new JSV.common.ViewData(graphs, y1, y2, startIndices, endIndices, this.getSpectrumAt(0).isContinuous(), is2D);
if (x1 != x2) this.getScale().setXRange(x1, x2);
}if (viewScales != null) {
JSV.common.ScaleData.copyScaleFactors(viewScales, this.viewData.getScaleData());
if (yScales != null) JSV.common.ScaleData.copyYScales(yScales, this.viewData.getScaleData());
this.getCurrentView();
}}, "~N,~N,~N,~N,~A,~A,~A,~A");
Clazz.defineMethod(c$, "isNearby", 
function(a1, a2, c, range){
var x = a1.getXVal();
var xp1 = c.toPixelX(x);
var yp1 = this.toPixelY(a1.getYVal());
x = a2.getXVal();
var xp2 = c.toPixelX(x);
var yp2 = this.toPixelY(a2.getYVal());
return (Math.abs(xp1 - xp2) + Math.abs(yp1 - yp2) < range);
}, "JSV.common.Coordinate,JSV.common.Coordinate,JSV.common.XYScaleConverter,~N");
Clazz.defineMethod(c$, "setReversePlot", 
function(val){
this.reversePlot = val;
if (this.reversePlot) this.closeDialogsExcept(JSV.common.Annotation.AType.NONE);
this.setDrawXAxis();
}, "~B");
Clazz.defineMethod(c$, "setDrawXAxis", 
function(){
this.drawXAxisLeftToRight =  new Boolean (this.xAxisLeftToRight ^ this.reversePlot).valueOf();
for (var i = 0; i < this.spectra.size(); i++) (this.spectra.get(i)).setExportXAxisDirection(this.drawXAxisLeftToRight);

});
Clazz.defineMethod(c$, "isInTopBar", 
function(xPixel, yPixel){
return (xPixel == this.fixX(xPixel) && yPixel > this.pin1Dx0.yPixel0 - 2 && yPixel < this.pin1Dx0.yPixel1);
}, "~N,~N");
Clazz.defineMethod(c$, "isInTopBar2D", 
function(xPixel, yPixel){
return (this.imageView != null && xPixel == this.imageView.fixX(xPixel) && yPixel > this.pin2Dx0.yPixel0 - 2 && yPixel < this.pin2Dx0.yPixel1);
}, "~N,~N");
Clazz.defineMethod(c$, "isInRightBar", 
function(xPixel, yPixel){
return (yPixel == this.fixY(yPixel) && xPixel > this.pin1Dy0.xPixel1 && xPixel < this.pin1Dy0.xPixel0 + 2);
}, "~N,~N");
Clazz.defineMethod(c$, "isInRightBar2D", 
function(xPixel, yPixel){
return (this.imageView != null && yPixel == this.fixY(yPixel) && xPixel > this.pin2Dy0.xPixel1 && xPixel < this.pin2Dy0.xPixel0 + 2);
}, "~N,~N");
Clazz.defineMethod(c$, "toX0", 
function(xPixel){
return this.viewList.get(0).getScale().toX0(this.fixX(xPixel), this.xPixel0, this.xPixel1, this.drawXAxisLeftToRight);
}, "~N");
Clazz.defineMethod(c$, "toY0", 
function(yPixel){
return this.viewList.get(0).getScale().toY0(this.fixY(yPixel), this.yPixel0, this.yPixel1);
}, "~N");
Clazz.overrideMethod(c$, "toX", 
function(xPixel){
if (this.imageView != null && this.imageView.isXWithinRange(xPixel)) return this.imageView.toX(xPixel);
return this.getScale().toX(this.fixX(xPixel), this.xPixel1, this.drawXAxisLeftToRight);
}, "~N");
Clazz.overrideMethod(c$, "toY", 
function(yPixel){
return this.getScale().toY(yPixel, this.yPixel0);
}, "~N");
Clazz.defineMethod(c$, "toPixelX", 
function(dx){
return this.getScale().toPixelX(dx, this.xPixel0, this.xPixel1, this.drawXAxisLeftToRight);
}, "~N");
Clazz.defineMethod(c$, "toPixelY", 
function(yVal){
return this.getScale().toPixelY(yVal, this.yPixel1);
}, "~N");
Clazz.defineMethod(c$, "toPixelX0", 
function(x){
return this.viewList.get(0).getScale().toPixelX0(x, this.xPixel0, this.xPixel1, this.drawXAxisLeftToRight);
}, "~N");
Clazz.defineMethod(c$, "toPixelY0", 
function(y){
return this.fixY(this.viewList.get(0).getScale().toPixelY0(y, this.yPixel0, this.yPixel1));
}, "~N");
Clazz.defineMethod(c$, "fixX", 
function(xPixel){
return JSV.common.Coordinate.intoRange(xPixel, this.xPixel0, this.xPixel1);
}, "~N");
Clazz.defineMethod(c$, "fixY", 
function(yPixel){
return JSV.common.Coordinate.intoRange(yPixel, this.yPixel0, this.yPixel1);
}, "~N");
Clazz.defineMethod(c$, "getXPixel0", 
function(){
return this.xPixel0;
});
Clazz.defineMethod(c$, "getXPixels", 
function(){
return this.xPixels;
});
Clazz.overrideMethod(c$, "getYPixels", 
function(){
return this.yPixels;
});
Clazz.defineMethod(c$, "getScale", 
function(){
return this.viewData.getScale();
});
Clazz.defineMethod(c$, "toPixelYint", 
function(yVal){
return this.yPixel1 - Clazz.doubleToInt(Double.isNaN(yVal) ? -2147483648 : this.yPixels * yVal);
}, "~N");
Clazz.defineMethod(c$, "findAnnotation2D", 
function(xy){
for (var i = this.annotations.size(); --i >= 0; ) {
var a = this.annotations.get(i);
if (this.isNearby(a, xy, this.imageView, 10)) return a;
}
return null;
}, "JSV.common.Coordinate");
Clazz.defineMethod(c$, "addAnnotation", 
function(annotation, isToggle){
if (this.annotations == null) this.annotations =  new JU.Lst();
var removed = false;
for (var i = this.annotations.size(); --i >= 0; ) if (annotation.is2D ? this.isNearby(this.annotations.get(i), annotation, this.imageView, 10) : annotation.equals(this.annotations.get(i))) {
removed = true;
this.annotations.removeItemAt(i);
}
if (annotation.text.length > 0 && (!removed || !isToggle)) this.annotations.addLast(annotation);
}, "JSV.common.Annotation,~B");
Clazz.defineMethod(c$, "setImageWindow", 
function(){
this.imageView.setPixelWidthHeight(Clazz.doubleToInt((this.pd.display1D ? 0.6 : 1) * this.xPixels0), this.yPixels);
this.imageView.setXY0(this.getSpectrumAt(0), Clazz.doubleToInt(Math.floor(this.xPixel10 - this.imageView.xPixels)), this.yPixel0);
});
Clazz.defineMethod(c$, "findNearestMaxMin", 
function(){
if (this.nSpectra > 1 && this.iSpectrumClicked < 0) return false;
this.xValueMovedTo = this.getSpectrum().findXForPeakNearest(this.xValueMovedTo);
this.setXPixelMovedTo(this.xValueMovedTo, 1.7976931348623157E308, 0, 0);
return !Double.isNaN(this.xValueMovedTo);
});
Clazz.defineMethod(c$, "setXPixelMovedTo", 
function(x1, x2, xPixel1, xPixel2){
if (x1 == 1.7976931348623157E308 && x2 == 1.7976931348623157E308) {
this.xPixelMovedTo = xPixel1;
this.xPixelMovedTo2 = xPixel2;
if (this.isLinked && this.sticky2Dcursor) {
this.pd.setlinkedXMove(this, this.toX(this.xPixelMovedTo), false);
}return;
}if (x1 != 1.7976931348623157E308) {
this.xPixelMovedTo = this.toPixelX(x1);
if (this.fixX(this.xPixelMovedTo) != this.xPixelMovedTo) this.xPixelMovedTo = -1;
this.xPixelMovedTo2 = -1;
if (x1 != 1e10) this.setSpectrumClicked(this.getFixedSelectedSpectrumIndex());
}if (x2 != 1.7976931348623157E308) {
this.xPixelMovedTo2 = this.toPixelX(x2);
}}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "processPendingMeasurement", 
function(xPixel, yPixel, clickCount){
if (!this.isInPlotRegion(xPixel, yPixel) || this.is2dClick(xPixel, yPixel)) {
this.pendingMeasurement = null;
return;
}var x = this.toX(xPixel);
var y = this.toY(yPixel);
var x0 = x;
var m;
switch (clickCount) {
case 0:
this.pendingMeasurement.setPt2(this.toX(xPixel), this.toY(yPixel));
break;
case 3:
case 2:
if (this.iSpectrumClicked < 0) return;
var spec = this.spectra.get(this.iSpectrumClicked);
this.setScale(this.iSpectrumClicked);
if (clickCount == 3) {
} else {
m = this.findMeasurement(this.selectedSpectrumMeasurements, xPixel, yPixel, 1);
if (m != null) {
x = m.getXVal();
y = m.getYVal();
} else if ((m = this.findMeasurement(this.selectedSpectrumMeasurements, xPixel, yPixel, 2)) != null) {
x = m.getXVal2();
y = m.getYVal2();
} else {
x = this.getNearestPeak(spec, x, y);
}}this.pendingMeasurement =  new JSV.common.Measurement().setM1(x, y, spec);
this.pendingMeasurement.setPt2(x0, y);
this.pd.setTaintedAll();
this.pd.repaint();
break;
case 1:
case -2:
case -3:
var isOK = (this.pendingMeasurement != null && this.isVisible(this.getDialog(JSV.common.Annotation.AType.Measurements, -1)));
while (isOK) {
this.setScale(this.getSpectrumIndex(this.pendingMeasurement.spec));
if (clickCount != 3) {
if (!this.findNearestMaxMin()) {
isOK = false;
break;
}xPixel = this.xPixelMovedTo;
}x = this.toX(xPixel);
y = this.toY(yPixel);
this.pendingMeasurement.setPt2(x, y);
if (this.pendingMeasurement.text.length == 0) {
isOK = false;
break;
}this.setMeasurement(this.pendingMeasurement);
if (clickCount != 1) {
isOK = false;
break;
}this.setSpectrumClicked(this.getSpectrumIndex(this.pendingMeasurement.spec));
this.pendingMeasurement =  new JSV.common.Measurement().setM1(x, y, this.pendingMeasurement.spec);
break;
}
if (!isOK) this.pendingMeasurement = null;
this.pd.setTaintedAll();
this.pd.repaint();
break;
case 5:
if (this.findNearestMaxMin()) {
var iSpec = this.getFixedSelectedSpectrumIndex();
if (Double.isNaN(this.lastXMax) || this.lastSpecClicked != iSpec || this.pendingMeasurement == null) {
this.lastXMax = this.xValueMovedTo;
this.lastSpecClicked = iSpec;
this.pendingMeasurement =  new JSV.common.Measurement().setM1(this.xValueMovedTo, this.yValueMovedTo, this.spectra.get(iSpec));
} else {
this.pendingMeasurement.setPt2(this.xValueMovedTo, this.yValueMovedTo);
if (this.pendingMeasurement.text.length > 0) this.setMeasurement(this.pendingMeasurement);
this.pendingMeasurement = null;
this.lastXMax = NaN;
}} else {
this.lastXMax = NaN;
}break;
}
}, "~N,~N,~N");
Clazz.defineMethod(c$, "checkIntegralNormalizationClick", 
function(xPixel, yPixel){
if (this.selectedSpectrumIntegrals == null) return false;
var integral = this.findMeasurement(this.selectedSpectrumIntegrals, xPixel, yPixel, -5);
if (integral == null) return false;
this.selectedIntegral = integral;
this.pd.normalizeIntegral();
this.updateDialog(JSV.common.Annotation.AType.Integration, -1);
this.setSpectrumClicked(this.getSpectrumIndex(integral.spec));
return true;
}, "~N,~N");
Clazz.defineMethod(c$, "getNearestPeak", 
function(spec, x, y){
var x0 = JSV.common.Coordinate.getNearestXWithYAbove(spec.getXYCoords(), x, y, spec.isInverted(), false);
var x1 = JSV.common.Coordinate.getNearestXWithYAbove(spec.getXYCoords(), x, y, spec.isInverted(), true);
return (Double.isNaN(x0) ? x1 : Double.isNaN(x1) ? x0 : Math.abs(x0 - x) < Math.abs(x1 - x) ? x0 : x1);
}, "JSV.common.Spectrum,~N,~N");
Clazz.defineMethod(c$, "findMeasurement", 
function(measurements, xPixel, yPixel, iPt){
if (measurements == null || measurements.size() == 0) return null;
if (iPt == 0) {
var m = this.findMeasurement(measurements, xPixel, yPixel, -1);
if (m != null || Clazz.instanceOf(measurements.get(0),"JSV.common.Integral")) return m;
return this.findMeasurement(measurements, xPixel, yPixel, -2);
}for (var i = measurements.size(); --i >= 0; ) {
var m = measurements.get(i);
var x1;
var x2;
var y1;
var y2;
if (Clazz.instanceOf(m,"JSV.common.Integral")) {
x1 = x2 = this.toPixelX(m.getXVal2());
y1 = this.toPixelYint(m.getYVal());
y2 = this.toPixelYint(m.getYVal2());
} else {
x1 = this.toPixelX(m.getXVal());
x2 = this.toPixelX(m.getXVal2());
y1 = y2 = (iPt == -2 ? this.yPixel1 - 2 : this.toPixelY(m.getYVal()));
}switch (iPt) {
case 1:
if (Math.abs(xPixel - x1) + Math.abs(yPixel - y1) < 4) return m;
break;
case 2:
if (Math.abs(xPixel - x2) + Math.abs(yPixel - y2) < 4) return m;
break;
case -5:
y1 = y2 = Clazz.doubleToInt((y1 + y2) / 2);
x2 = x1 + 20;
default:
case -1:
case -2:
if (JSV.common.GraphSet.isOnLine(xPixel, yPixel, x1, y1, x2, y2)) return m;
break;
}
}
return null;
}, "JSV.common.MeasurementData,~N,~N,~N");
Clazz.defineMethod(c$, "setMeasurement", 
function(m){
var iSpec = this.getSpectrumIndex(m.spec);
var ad = this.getDialog(JSV.common.Annotation.AType.Measurements, iSpec);
if (ad == null) this.addDialog(iSpec, JSV.common.Annotation.AType.Measurements, ad =  new JSV.common.MeasurementData(JSV.common.Annotation.AType.Measurements, m.spec));
ad.getData().addLast(m.copyM());
this.updateDialog(JSV.common.Annotation.AType.Measurements, -1);
}, "JSV.common.Measurement");
Clazz.defineMethod(c$, "checkArrowUpDownClick", 
function(xPixel, yPixel){
var ok = false;
var f = (this.isArrowClick(xPixel, yPixel, 3) ? JSV.common.GraphSet.RT2 : this.isArrowClick(xPixel, yPixel, 4) ? 1 / JSV.common.GraphSet.RT2 : 0);
if (f != 0) {
if (this.nSplit > 1) this.setSpectrumSelected(this.iSpectrumMovedTo);
if ((this.nSpectra == 1 || this.iSpectrumSelected >= 0) && this.spectra.get(this.getFixedSelectedSpectrumIndex()).isTransmittance()) f = 1 / f;
this.viewData.scaleSpectrum(this.imageView == null ? this.iSpectrumSelected : -2, f);
ok = true;
} else if (this.isArrowClick(xPixel, yPixel, -1)) {
this.resetViewCompletely();
ok = true;
}if (ok) {
if (this.imageView != null) {
this.update2dImage(false);
this.resetPinsFromView();
}this.pd.setTaintedAll();
}return ok;
}, "~N,~N");
Clazz.defineMethod(c$, "resetViewCompletely", 
function(){
this.clearViews();
if (this.showAllStacked && !this.stackSelected) this.closeDialogsExcept(JSV.common.Annotation.AType.NONE);
this.viewData.resetScaleFactors();
this.updateDialogs();
});
Clazz.defineMethod(c$, "checkArrowLeftRightClick", 
function(xPixel, yPixel){
if (this.haveLeftRightArrows) {
var dx = (this.isArrowClick(xPixel, yPixel, 1) ? -1 : this.isArrowClick(xPixel, yPixel, 2) ? 1 : 0);
if (dx != 0) {
this.setSpectrumClicked((this.iSpectrumSelected + dx) % this.nSpectra);
return true;
}if (this.isArrowClick(xPixel, yPixel, 0)) {
if (this.showAllStacked) {
this.showAllStacked = false;
this.setSpectrumClicked(this.getFixedSelectedSpectrumIndex());
return true;
}this.showAllStacked = this.allowStacking;
this.setSpectrumSelected(-1);
this.stackSelected = false;
}}return false;
}, "~N,~N");
Clazz.defineMethod(c$, "isArrowClick", 
function(xPixel, yPixel, type){
var pt;
switch (type) {
case 3:
case 4:
case -1:
pt = Clazz.doubleToInt((this.yPixel00 + this.yPixel11) / 2) + (type == 3 ? -1 : type == 4 ? 1 : 0) * 15;
return (Math.abs(this.xVArrows - xPixel) < 10 && Math.abs(pt - yPixel) < 10);
case 1:
case 2:
case 0:
pt = this.xHArrows + (type == 1 ? -1 : type == 2 ? 1 : 0) * 15;
return (Math.abs(pt - xPixel) < 10 && Math.abs(this.yHArrows - yPixel) < 10);
}
return false;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "setWidgetValueByUser", 
function(pw){
var sval;
if (pw === this.cur2Dy) sval = "" + this.imageView.toSubspectrumIndex(pw.yPixel0);
 else if (pw === this.pin1Dx01) sval = "" + Math.min(this.pin1Dx0.getXVal(), this.pin1Dx1.getXVal()) + " - " + Math.max(this.pin1Dx0.getXVal(), this.pin1Dx1.getXVal());
 else if (pw === this.pin1Dy01) sval = "" + Math.min(this.pin1Dy0.getYVal(), this.pin1Dy1.getYVal()) + " - " + Math.max(this.pin1Dy0.getYVal(), this.pin1Dy1.getYVal());
 else if (pw === this.pin2Dx01) sval = "" + Math.min(this.pin2Dx0.getXVal(), this.pin2Dx1.getXVal()) + " - " + Math.max(this.pin2Dx0.getXVal(), this.pin2Dx1.getXVal());
 else if (pw === this.pin2Dy01) sval = "" + Clazz.doubleToInt(Math.min(this.pin2Dy0.getYVal(), this.pin2Dy1.getYVal())) + " - " + Clazz.doubleToInt(Math.max(this.pin2Dy0.getYVal(), this.pin2Dy1.getYVal()));
 else sval = "" + pw.getValue();
sval = this.pd.getInput("New value?", "Set Slider", sval);
if (sval == null) return;
sval = sval.trim();
try {
if (pw === this.pin1Dx01 || pw === this.pin1Dy01 || pw === this.pin2Dx01 || pw === this.pin2Dy01) {
var pt = sval.indexOf("-", 1);
if (pt < 0) return;
var val1 = Double.$valueOf(sval.substring(0, pt)).doubleValue();
var val2 = Double.$valueOf(sval.substring(pt + 1)).doubleValue();
if (pw === this.pin1Dx01) {
this.doZoom(val1, this.pin1Dy0.getYVal(), val2, this.pin1Dy1.getYVal(), true, false, false, true, true);
} else if (pw === this.pin1Dy01) {
this.doZoom(this.pin1Dx0.getXVal(), val1, this.pin1Dx1.getXVal(), val2, this.imageView == null, this.imageView == null, false, false, true);
} else if (pw === this.pin2Dx01) {
this.imageView.setView0(this.imageView.toPixelX0(val1), this.pin2Dy0.yPixel0, this.imageView.toPixelX0(val2), this.pin2Dy1.yPixel0);
this.doZoom(val1, this.pin1Dy0.getYVal(), val2, this.pin1Dy1.getYVal(), false, false, false, true, true);
} else if (pw === this.pin2Dy01) {
this.imageView.setView0(this.pin2Dx0.xPixel0, this.imageView.toPixelY0(val1), this.pin2Dx1.xPixel0, this.imageView.toPixelY0(val2));
this.doZoom(this.imageView.toX(this.imageView.xPixel0), this.getScale().minY, this.imageView.toX(this.imageView.xPixel0 + this.imageView.xPixels - 1), this.getScale().maxY, false, false, false, false, true);
}} else {
var val = Double.$valueOf(sval).doubleValue();
if (pw.isXtype) {
var val2 = (pw === this.pin1Dx0 || pw === this.cur2Dx0 || pw === this.pin2Dx0 ? this.pin1Dx1.getXVal() : this.pin1Dx0.getXVal());
this.doZoom(val, 0, val2, 0, !pw.is2D, false, false, true, true);
} else if (pw === this.cur2Dy) {
this.setCurrentSubSpectrum(Clazz.doubleToInt(val));
} else if (pw === this.pin2Dy0 || pw === this.pin2Dy1) {
var val2 = (pw === this.pin2Dy0 ? this.pin2Dy1.yPixel0 : this.pin2Dy0.yPixel0);
this.imageView.setView0(this.pin2Dx0.xPixel0, this.imageView.subIndexToPixelY(Clazz.doubleToInt(val)), this.pin2Dx1.xPixel0, val2);
} else {
var val2 = (pw === this.pin1Dy0 ? this.pin1Dy1.getYVal() : this.pin1Dy0.getYVal());
this.doZoom(this.pin1Dx0.getXVal(), val, this.pin1Dx1.getXVal(), val2, this.imageView == null, this.imageView == null, false, false, true);
}}} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}, "JSV.common.PlotWidget");
Clazz.defineMethod(c$, "removeAllHighlights", 
function(spec){
if (spec == null) this.highlights.clear();
 else for (var i = this.highlights.size(); --i >= 0; ) if (this.highlights.get(i).spectrum === spec) this.highlights.removeItemAt(i);

}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "setCoordClicked", 
function(xPixel, x, y){
if (y == 0) this.nextClickForSetPeak = null;
if (Double.isNaN(x)) {
this.pd.coordClicked = null;
this.pd.coordsClicked = null;
return null;
}this.pd.coordClicked =  new JSV.common.Coordinate().set(this.lastClickX = x, y);
this.pd.coordsClicked = this.getSpectrum().getXYCoords();
this.pd.xPixelClicked = (this.lastPixelX = xPixel);
return this.pd.coordClicked;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "setWidgets", 
function(needNewPins, subIndex, doDraw1DObjects){
if (needNewPins || this.pin1Dx0 == null) {
if (this.zoomBox1D == null) this.newPins();
 else this.resetPinPositions();
}this.setDerivedPins(subIndex);
this.setPinSliderPositions(doDraw1DObjects);
}, "~B,~N,~B");
Clazz.defineMethod(c$, "newPins", 
function(){
this.zoomBox1D =  new JSV.common.PlotWidget("zoomBox1D");
this.pin1Dx0 =  new JSV.common.PlotWidget("pin1Dx0");
this.pin1Dx1 =  new JSV.common.PlotWidget("pin1Dx1");
this.pin1Dy0 =  new JSV.common.PlotWidget("pin1Dy0");
this.pin1Dy1 =  new JSV.common.PlotWidget("pin1Dy1");
this.pin1Dx01 =  new JSV.common.PlotWidget("pin1Dx01");
this.pin1Dy01 =  new JSV.common.PlotWidget("pin1Dy01");
this.cur1D2x1 =  new JSV.common.PlotWidget("cur1D2x1");
this.cur1D2x1.color = JSV.common.ScriptToken.PEAKTABCOLOR;
this.cur1D2x2 =  new JSV.common.PlotWidget("cur1D2x2");
this.cur1D2x2.color = JSV.common.ScriptToken.PEAKTABCOLOR;
if (this.imageView != null) {
this.zoomBox2D =  new JSV.common.PlotWidget("zoomBox2D");
this.pin2Dx0 =  new JSV.common.PlotWidget("pin2Dx0");
this.pin2Dx1 =  new JSV.common.PlotWidget("pin2Dx1");
this.pin2Dy0 =  new JSV.common.PlotWidget("pin2Dy0");
this.pin2Dy1 =  new JSV.common.PlotWidget("pin2Dy1");
this.pin2Dx01 =  new JSV.common.PlotWidget("pin2Dx01");
this.pin2Dy01 =  new JSV.common.PlotWidget("pin2Dy01");
this.cur2Dx0 =  new JSV.common.PlotWidget("cur2Dx0");
this.cur2Dx1 =  new JSV.common.PlotWidget("cur2Dx1");
this.cur2Dy =  new JSV.common.PlotWidget("cur2Dy");
this.pin2Dy0.setY(0, this.imageView.toPixelY0(0));
var n = this.getSpectrumAt(0).getSubSpectra().size();
this.pin2Dy1.setY(n, this.imageView.toPixelY0(n));
}this.setWidgetX(this.pin1Dx0, this.getScale().minX);
this.setWidgetX(this.pin1Dx1, this.getScale().maxX);
this.setWidgetY(this.pin1Dy0, this.getScale().minY);
this.setWidgetY(this.pin1Dy1, this.getScale().maxY);
this.widgets =  Clazz.newArray(-1, [this.zoomBox1D, this.zoomBox2D, this.pin1Dx0, this.pin1Dx01, this.pin1Dx1, this.pin1Dy0, this.pin1Dy01, this.pin1Dy1, this.pin2Dx0, this.pin2Dx01, this.pin2Dx1, this.pin2Dy0, this.pin2Dy01, this.pin2Dy1, this.cur2Dx0, this.cur2Dx1, this.cur2Dy, this.cur1D2x1, this.cur1D2x2]);
});
Clazz.defineMethod(c$, "setWidgetX", 
function(pw, x){
pw.setX(x, this.toPixelX0(x));
}, "JSV.common.PlotWidget,~N");
Clazz.defineMethod(c$, "setWidgetY", 
function(pw, y){
pw.setY(y, this.toPixelY0(y));
}, "JSV.common.PlotWidget,~N");
Clazz.defineMethod(c$, "resetPinsFromView", 
function(){
if (this.pin1Dx0 == null) return;
this.setWidgetX(this.pin1Dx0, this.getScale().minXOnScale);
this.setWidgetX(this.pin1Dx1, this.getScale().maxXOnScale);
this.setWidgetY(this.pin1Dy0, this.getScale().minYOnScale);
this.setWidgetY(this.pin1Dy1, this.getScale().maxYOnScale);
});
Clazz.defineMethod(c$, "resetPinPositions", 
function(){
this.resetX(this.pin1Dx0);
this.resetY(this.pin1Dy0);
this.resetY(this.pin1Dy1);
if (this.imageView == null) {
if (this.gs2dLinkedX != null) this.resetX(this.cur1D2x1);
if (this.gs2dLinkedY != null) this.resetX(this.cur1D2x2);
} else {
this.pin2Dy0.setY(this.pin2Dy0.getYVal(), this.imageView.toPixelY0(this.pin2Dy0.getYVal()));
this.pin2Dy1.setY(this.pin2Dy1.getYVal(), this.imageView.toPixelY0(this.pin2Dy1.getYVal()));
}});
Clazz.defineMethod(c$, "resetX", 
function(p){
this.setWidgetX(p, p.getXVal());
}, "JSV.common.PlotWidget");
Clazz.defineMethod(c$, "resetY", 
function(p){
this.setWidgetY(p, p.getYVal());
}, "JSV.common.PlotWidget");
Clazz.defineMethod(c$, "setPinSliderPositions", 
function(doDraw1DObjects){
this.pin1Dx0.yPixel0 = this.pin1Dx1.yPixel0 = this.pin1Dx01.yPixel0 = this.yPixel0 - 5;
this.pin1Dx0.yPixel1 = this.pin1Dx1.yPixel1 = this.pin1Dx01.yPixel1 = this.yPixel0;
this.cur1D2x1.yPixel1 = this.cur1D2x2.yPixel1 = this.yPixel0 - 5;
this.cur1D2x1.yPixel0 = this.cur1D2x2.yPixel0 = this.yPixel1 + 6;
if (this.imageView == null) {
this.pin1Dy0.xPixel0 = this.pin1Dy1.xPixel0 = this.pin1Dy01.xPixel0 = this.xPixel1 + 5;
this.pin1Dy0.xPixel1 = this.pin1Dy1.xPixel1 = this.pin1Dy01.xPixel1 = this.xPixel1;
} else {
this.pin1Dy0.xPixel0 = this.pin1Dy1.xPixel0 = this.pin1Dy01.xPixel0 = this.imageView.xPixel1 + 15;
this.pin1Dy0.xPixel1 = this.pin1Dy1.xPixel1 = this.pin1Dy01.xPixel1 = this.imageView.xPixel1 + 10;
this.pin2Dx0.yPixel0 = this.pin2Dx1.yPixel0 = this.pin2Dx01.yPixel0 = this.yPixel0 - 5;
this.pin2Dx0.yPixel1 = this.pin2Dx1.yPixel1 = this.pin2Dx01.yPixel1 = this.yPixel0;
this.pin2Dy0.xPixel0 = this.pin2Dy1.xPixel0 = this.pin2Dy01.xPixel0 = this.imageView.xPixel1 + 5;
this.pin2Dy0.xPixel1 = this.pin2Dy1.xPixel1 = this.pin2Dy01.xPixel1 = this.imageView.xPixel1;
this.cur2Dx0.yPixel0 = this.cur2Dx1.yPixel0 = this.yPixel1 + 6;
this.cur2Dx0.yPixel1 = this.cur2Dx1.yPixel1 = this.yPixel0 - 5;
this.cur2Dx0.yPixel0 = this.cur2Dx1.yPixel0 = this.yPixel1 + 6;
this.cur2Dx1.yPixel1 = this.cur2Dx1.yPixel1 = this.yPixel0 - 5;
this.cur2Dy.xPixel0 = (doDraw1DObjects ? Clazz.doubleToInt((this.xPixel1 + this.imageView.xPixel0) / 2) : this.imageView.xPixel0 - 6);
this.cur2Dy.xPixel1 = this.imageView.xPixel1 + 5;
}}, "~B");
Clazz.defineMethod(c$, "setDerivedPins", 
function(subIndex){
if (this.gs2dLinkedX != null) this.cur1D2x1.setX(this.cur1D2x1.getXVal(), this.toPixelX(this.cur1D2x1.getXVal()));
if (this.gs2dLinkedY != null) this.cur1D2x2.setX(this.cur1D2x2.getXVal(), this.toPixelX(this.cur1D2x2.getXVal()));
this.pin1Dx01.setX(0, Clazz.doubleToInt((this.pin1Dx0.xPixel0 + this.pin1Dx1.xPixel0) / 2));
this.pin1Dy01.setY(0, Clazz.doubleToInt((this.pin1Dy0.yPixel0 + this.pin1Dy1.yPixel0) / 2));
this.pin1Dx01.setEnabled(Math.min(this.pin1Dx0.xPixel0, this.pin1Dx1.xPixel0) > this.xPixel0 || Math.max(this.pin1Dx0.xPixel0, this.pin1Dx1.xPixel0) < this.xPixel1);
this.pin1Dy01.setEnabled(Math.min(this.pin1Dy0.yPixel0, this.pin1Dy1.yPixel0) > Math.min(this.toPixelY(this.getScale().minY), this.toPixelY(this.getScale().maxY)) || Math.max(this.pin1Dy0.yPixel0, this.pin1Dy1.yPixel0) < Math.max(this.toPixelY(this.getScale().minY), this.toPixelY(this.getScale().maxY)));
if (this.imageView == null) return;
var x = this.pin1Dx0.getXVal();
this.cur2Dx0.setX(x, this.imageView.toPixelX(x));
x = this.pin1Dx1.getXVal();
this.cur2Dx1.setX(x, this.imageView.toPixelX(x));
x = this.imageView.toX(this.imageView.xPixel0);
this.pin2Dx0.setX(x, this.imageView.toPixelX0(x));
x = this.imageView.toX(this.imageView.xPixel1);
this.pin2Dx1.setX(x, this.imageView.toPixelX0(x));
this.pin2Dx01.setX(0, Clazz.doubleToInt((this.pin2Dx0.xPixel0 + this.pin2Dx1.xPixel0) / 2));
var y = this.imageView.imageHeight - 1 - this.imageView.yView1;
this.pin2Dy0.setY(y, this.imageView.toPixelY0(y));
y = this.imageView.imageHeight - 1 - this.imageView.yView2;
this.pin2Dy1.setY(y, this.imageView.toPixelY0(y));
this.pin2Dy01.setY(0, Clazz.doubleToInt((this.pin2Dy0.yPixel0 + this.pin2Dy1.yPixel0) / 2));
this.cur2Dy.yPixel0 = this.cur2Dy.yPixel1 = this.imageView.subIndexToPixelY(subIndex);
this.pin2Dx01.setEnabled(Math.min(this.pin2Dx0.xPixel0, this.pin2Dx1.xPixel0) != this.imageView.xPixel0 || Math.max(this.pin2Dx0.xPixel0, this.pin2Dx1.xPixel1) != this.imageView.xPixel1);
this.pin2Dy01.setEnabled(Math.min(this.pin2Dy0.yPixel0, this.pin2Dy1.yPixel0) != this.yPixel0 || Math.max(this.pin2Dy0.yPixel0, this.pin2Dy1.yPixel1) != this.yPixel1);
}, "~N");
Clazz.defineMethod(c$, "doZoom", 
function(initX, initY, finalX, finalY, is1D, is1DY, checkRange, checkLinked, addZoom){
if (initX == finalX) {
initX = this.getScale().minXOnScale;
finalX = this.getScale().maxXOnScale;
} else if (this.isLinked && checkLinked) this.pd.doZoomLinked(this, initX, finalX, addZoom, checkRange, is1D);
if (initX > finalX) {
var tempX = initX;
initX = finalX;
finalX = tempX;
}if (initY > finalY) {
var tempY = initY;
initY = finalY;
finalY = tempY;
}var is2DGrayScaleChange = (!is1D && this.imageView != null && (this.imageView.minZ != initY || this.imageView.maxZ != finalY));
if (!this.zoomEnabled && !is2DGrayScaleChange) return;
if (checkRange) {
if (!this.getScale().isInRangeX(initX) && !this.getScale().isInRangeX(finalX)) return;
if (!this.getScale().isInRangeX(initX)) {
initX = this.getScale().minX;
} else if (!this.getScale().isInRangeX(finalX)) {
finalX = this.getScale().maxX;
}} else {
}this.pd.setTaintedAll();
var viewScales = this.viewData.getScaleData();
var startIndices =  Clazz.newIntArray (this.nSpectra, 0);
var endIndices =  Clazz.newIntArray (this.nSpectra, 0);
this.graphsTemp.clear();
var subspecs = this.getSpectrumAt(0).getSubSpectra();
var dontUseSubspecs = (subspecs == null || subspecs.size() == 2);
var is2D = !this.getSpectrumAt(0).is1D();
if (!is2D && !dontUseSubspecs) {
this.graphsTemp.addLast(this.getSpectrum());
if (!JSV.common.ScaleData.setDataPointIndices(this.graphsTemp, initX, finalX, 3, startIndices, endIndices)) return;
} else {
if (!JSV.common.ScaleData.setDataPointIndices(this.spectra, initX, finalX, 3, startIndices, endIndices)) return;
}var y1 = initY;
var y2 = finalY;
var isXOnly = (y1 == y2);
if (isXOnly) {
var f = (!is2DGrayScaleChange && is1D ? f = this.getScale().spectrumScaleFactor : 1);
if (Math.abs(f - 1) < 0.0001) {
y1 = this.getScale().minYOnScale;
y2 = this.getScale().maxYOnScale;
}}var yScales = null;
if (isXOnly || is1DY) {
this.getCurrentView();
yScales = this.viewData.getNewScales(this.iSpectrumSelected, isXOnly, y1, y2);
}this.getView(initX, finalX, y1, y2, startIndices, endIndices, viewScales, yScales);
this.setXPixelMovedTo(1E10, 1.7976931348623157E308, 0, 0);
this.setWidgetX(this.pin1Dx0, initX);
this.setWidgetX(this.pin1Dx1, finalX);
this.setWidgetY(this.pin1Dy0, y1);
this.setWidgetY(this.pin1Dy1, y2);
if (this.imageView == null) {
this.updateDialogs();
} else {
var isub = this.getSpectrumAt(0).getSubIndex();
var ifix = this.imageView.fixSubIndex(isub);
if (ifix != isub) this.setCurrentSubSpectrum(ifix);
if (is2DGrayScaleChange) this.update2dImage(false);
}if (addZoom) this.addCurrentZoom();
}, "~N,~N,~N,~N,~B,~B,~B,~B,~B");
Clazz.defineMethod(c$, "updateDialogs", 
function(){
this.updateDialog(JSV.common.Annotation.AType.PeakList, -1);
this.updateDialog(JSV.common.Annotation.AType.Measurements, -1);
});
Clazz.defineMethod(c$, "setCurrentSubSpectrum", 
function(i){
var spec0 = this.getSpectrumAt(0);
i = spec0.setCurrentSubSpectrum(i);
if (spec0.isForcedSubset()) this.viewData.setXRangeForSubSpectrum(this.getSpectrum().getXYCoords());
this.pd.notifySubSpectrumChange(i, this.getSpectrum());
}, "~N");
Clazz.defineMethod(c$, "addCurrentZoom", 
function(){
if (this.viewList.size() > this.currentZoomIndex + 1) for (var i = this.viewList.size() - 1; i > this.currentZoomIndex; i--) this.viewList.removeItemAt(i);

this.viewList.addLast(this.viewData);
this.currentZoomIndex++;
});
Clazz.defineMethod(c$, "setZoomTo", 
function(i){
this.currentZoomIndex = i;
this.viewData = this.viewList.get(i);
this.resetPinsFromView();
}, "~N");
Clazz.defineMethod(c$, "clearViews", 
function(){
if (this.isLinked) {
this.pd.clearLinkViews(this);
}this.setZoom(0, 0, 0, 0);
for (var i = this.viewList.size(); --i >= 1; ) this.viewList.removeItemAt(i);

});
Clazz.defineMethod(c$, "drawAll", 
function(gMain, gFront, gBack, iSplit, needNewPins, doAll, pointsOnly){
this.setPositionForFrame(iSplit);
this.g2d = this.pd.g2d;
this.gMain = gMain;
var spec0 = this.getSpectrumAt(0);
var subIndex = spec0.getSubIndex();
this.is2DSpectrum = (!spec0.is1D() && (this.isLinked || this.pd.getBoolean(JSV.common.ScriptToken.DISPLAY2D)) && (this.imageView != null || this.get2DImage(spec0)));
if (this.imageView != null && doAll) {
if (this.isPrintingOrSaving) this.g2d.newGrayScaleImage(gMain, this.image2D, this.imageView.imageWidth, this.imageView.imageHeight, this.imageView.getBuffer());
if (this.is2DSpectrum) this.setPositionForFrame(iSplit);
this.draw2DImage();
}var iSelected = (this.stackSelected || !this.showAllStacked ? this.iSpectrumSelected : -1);
var doYScale = (!this.showAllStacked || this.nSpectra == 1 || iSelected >= 0);
var doDraw1DObjects = (this.imageView == null || this.pd.display1D);
var n = (iSelected >= 0 ? 1 : 0);
var iSpectrumForScale = this.getFixedSelectedSpectrumIndex();
if (doDraw1DObjects && doAll) {
this.fillBox(gMain, this.xPixel0, this.yPixel0, this.xPixel1, this.yPixel1, JSV.common.ScriptToken.PLOTAREACOLOR);
if (iSelected < 0) {
doYScale = true;
for (var i = 0; i < this.nSpectra; i++) if (this.doPlot(i, iSplit)) {
if (n++ == 0) continue;
doYScale = new Boolean (doYScale & this.viewData.areYScalesSame(i - 1, i)).valueOf();
}
}}var iSpecForFrame = (this.nSpectra == 1 ? 0 : !this.showAllStacked ? this.iSpectrumMovedTo : this.iSpectrumSelected);
var g2 = (gBack === gMain ? gFront : gBack);
if (doAll) {
var addCurrentBox = (this.pd.getCurrentGraphSet() === this && !this.isLinked && (!this.isSplittable || (this.nSplit == 1 || this.pd.currentSplitPoint == iSplit)));
var drawUpDownArrows = (this.zoomEnabled && !this.isPrintingOrSaving && !this.isDrawNoSpectra() && this.pd.isCurrentGraphSet(this) && this.spectra.get(0).isScalable() && (addCurrentBox || this.nSpectra == 1) && (this.nSplit == 1 || this.pd.currentSplitPoint == this.iSpectrumMovedTo));
var addSplitBox = this.isSplittable;
this.drawFrame(gMain, iSpecForFrame, addCurrentBox, addSplitBox, drawUpDownArrows);
}if (this.pd.isCurrentGraphSet(this) && iSplit == this.pd.currentSplitPoint && (n < 2 || this.iSpectrumSelected >= 0)) this.$haveSelectedSpectrum = true;
this.haveSingleYScale = (this.showAllStacked && this.nSpectra > 1 ? this.allowStackedYScale && doYScale : true);
if (doDraw1DObjects) {
var yOffsetPixels = Clazz.floatToInt(this.yPixels * (this.yStackOffsetPercent / 100));
this.haveLeftRightArrows = false;
for (var i = 0, offset = 0; i < this.nSpectra; i++) {
if (!this.doPlot(i, iSplit)) continue;
var spec = this.spectra.get(i);
var isContinuous = spec.isContinuous();
var onSpectrum = (!this.pd.isPrinting && this.iSpectrumMovedTo >= 0 && (this.nSplit > 1 ? i == this.iSpectrumMovedTo : this.isLinked || i == iSpectrumForScale));
var isGrey = (this.stackSelected && this.iSpectrumSelected >= 0 && this.iSpectrumSelected != i);
var ig = (!this.reversePlot && this.getShowAnnotation(JSV.common.Annotation.AType.Integration, i) && (!this.showAllStacked || this.iSpectrumSelected == i) ? this.getDialog(JSV.common.Annotation.AType.Integration, i).getData() : null);
this.setScale(i);
if (this.nSplit > 1) {
iSpectrumForScale = i;
}var doDrawWidgets = !isGrey && (this.nSplit == 1 || this.showAllStacked || this.iSpectrumSelected == iSplit);
var doDraw1DY = (doDrawWidgets && this.$haveSelectedSpectrum && i == iSpectrumForScale);
if (doDrawWidgets) {
this.widgetsAreSet = true;
this.resetPinsFromView();
this.drawWidgets(gFront, g2, subIndex, needNewPins, doDraw1DObjects, doDraw1DY, false);
}if (this.haveSingleYScale && i == iSpectrumForScale && doAll) {
this.drawGrid(gMain);
if (this.pd.isPrinting && this.nSplit == 1 && this.pd.graphSets.size() == 1) this.drawSpectrumSource(gMain, i);
}if (doDrawWidgets) this.drawWidgets(gFront, g2, subIndex, false, doDraw1DObjects, doDraw1DY, true);
if (!this.isDrawNoSpectra() && !this.isPrintingOrSaving && (this.nSpectra == 1 || this.iSpectrumSelected >= 0) && (this.haveSingleYScale && i == iSpectrumForScale || this.showAllStacked && this.stackSelected && i == this.iSpectrumSelected)) this.drawHighlightsAndPeakTabs(gFront, g2, i);
if (doAll) {
if ((onSpectrum || this.isPrintingOrSaving) && !this.is2DSpectrum) {
if (this.pd.titleOn && !this.pd.titleDrawn) {
this.drawTitle(i, gMain);
}}if (this.haveSingleYScale && i == iSpectrumForScale) {
if (this.pd.getBoolean(JSV.common.ScriptToken.YSCALEON)) this.drawYScale(gMain, this);
}if (this.haveSingleYScale && this.yPixel00 < 30) {
if (this.pd.getBoolean(JSV.common.ScriptToken.YUNITSON)) this.drawYUnits(gMain);
}}var hasPendingIntegral = (!isGrey && this.pendingIntegral != null && spec === this.pendingIntegral.spec);
if (doAll || hasPendingIntegral) {
this.drawPlot(hasPendingIntegral && !doAll ? gFront : gMain, i, spec, isContinuous, offset, isGrey, null, onSpectrum, hasPendingIntegral, pointsOnly);
}this.drawIntegration(gFront, i, offset, isGrey, ig, isContinuous && onSpectrum);
this.drawMeasurements(gFront, i);
if (this.pendingMeasurement != null && this.pendingMeasurement.spec === spec) this.drawMeasurement(gFront, this.pendingMeasurement);
if (isContinuous && onSpectrum && this.xPixelMovedTo >= 0) {
this.drawSpectrumPointer(gFront, spec, offset, ig);
}if (this.nSpectra > 1 && this.nSplit == 1 && this.pd.isCurrentGraphSet(this) && doAll) {
this.haveLeftRightArrows = true;
if (!this.isPrintingOrSaving) {
this.setScale(0);
iSpecForFrame = (this.iSpectrumSelected);
if (this.nSpectra != 2) {
this.setPlotColor(gMain, (iSpecForFrame + this.nSpectra - 1) % this.nSpectra);
this.fillArrow(gMain, 1, this.yHArrows, this.xHArrows - 9, true);
this.setCurrentBoxColor(gMain);
this.fillArrow(gMain, 1, this.yHArrows, this.xHArrows - 9, false);
}if (iSpecForFrame >= 0) {
this.setPlotColor(gMain, iSpecForFrame);
this.fillCircle(gMain, this.xHArrows, this.yHArrows, true);
}this.setCurrentBoxColor(gMain);
this.fillCircle(gMain, this.xHArrows, this.yHArrows, false);
this.setPlotColor(gMain, (iSpecForFrame + 1) % this.nSpectra);
this.fillArrow(gMain, 2, this.yHArrows, this.xHArrows + 9, true);
this.setCurrentBoxColor(gMain);
this.fillArrow(gMain, 2, this.yHArrows, this.xHArrows + 9, false);
}}offset -= yOffsetPixels;
}
if (doAll) {
if (this.pd.getBoolean(JSV.common.ScriptToken.XSCALEON)) this.drawXScale(gMain, this);
if (this.pd.getBoolean(JSV.common.ScriptToken.XUNITSON)) this.drawXUnits(gMain);
}} else {
if (doAll) {
if (this.pd.getBoolean(JSV.common.ScriptToken.XSCALEON)) this.drawXScale(gMain, this.imageView);
if (this.pd.getBoolean(JSV.common.ScriptToken.YSCALEON)) this.drawYScale(gMain, this.imageView);
if (subIndex >= 0) this.draw2DUnits(gMain);
}this.drawWidgets(gFront, g2, subIndex, needNewPins, doDraw1DObjects, true, false);
this.drawWidgets(gFront, g2, subIndex, needNewPins, doDraw1DObjects, true, true);
this.widgetsAreSet = true;
}if (this.annotations != null) this.drawAnnotations(gFront, this.annotations, null);
this.isPrintingOrSaving = false;
}, "~O,~O,~O,~N,~B,~B,~B");
Clazz.defineMethod(c$, "drawTitle", 
function(i, gMain){
var title = this.getSpectrumAt(i).getPeakTitle();
if (title.length > 0) {
var y = (this.isPrintingOrSaving ? this.yPixel11 + 20 : this.height);
this.pd.drawTitle(gMain, y, this.width, title);
this.pd.titleDrawn = !this.isPrintingOrSaving;
}}, "~N,~O");
Clazz.defineMethod(c$, "drawSpectrumSource", 
function(g, i){
this.pd.printFilePath(g, this.pd.thisWidth - this.pd.right, this.yPixel0 - 20, this.spectra.get(i).getFilePath());
}, "~O,~N");
Clazz.defineMethod(c$, "doPlot", 
function(i, iSplit){
var isGrey = (this.stackSelected && this.iSpectrumSelected >= 0 && this.iSpectrumSelected != i);
var ok = (this.showAllStacked || this.iSpectrumSelected == -1 || this.iSpectrumSelected == i);
return (this.nSplit > 1 ? i == iSplit : ok && (!this.pd.isPrinting || !isGrey));
}, "~N,~N");
Clazz.defineMethod(c$, "drawSpectrumPointer", 
function(gFront, spec, yOffset, ig){
if (this.isPrintingOrSaving) return;
this.setColorFromToken(gFront, JSV.common.ScriptToken.PEAKTABCOLOR);
var iHandle = this.pd.integralShiftMode;
if (ig != null) {
if ((!this.pd.ctrlPressed || this.pd.isIntegralDrag) && !this.isOnSpectrum(this.pd.mouseX, this.pd.mouseY, -1)) {
ig = null;
} else if (iHandle == 0) {
iHandle = this.getShiftMode(this.pd.mouseX, this.pd.mouseY);
if (iHandle == 0) iHandle = 2147483647;
}}var y0 = this.yValueMovedTo;
this.yValueMovedTo = (ig == null ? spec.getYValueAt(this.xValueMovedTo) : ig.getPercentYValueAt(this.xValueMovedTo));
this.setCoordStr(this.xValueMovedTo, this.yValueMovedTo);
if (iHandle != 0) {
this.setPlotColor(gFront, iHandle == 2147483647 ? -1 : 0);
if (iHandle < 0 || iHandle == 2147483647) {
this.drawHandle(gFront, this.xPixelPlot1, this.yPixelPlot0, 3, false);
}if (iHandle > 0) {
this.drawHandle(gFront, this.xPixelPlot0, this.yPixelPlot1, 3, false);
}if (iHandle != 2147483647) return;
}if (ig != null) this.g2d.setStrokeBold(gFront, true);
if (Double.isNaN(y0) || this.pendingMeasurement != null) {
this.g2d.drawLine(gFront, this.xPixelMovedTo, this.yPixel0, this.xPixelMovedTo, this.yPixel1);
if (this.xPixelMovedTo2 >= 0) this.g2d.drawLine(gFront, this.xPixelMovedTo2, this.yPixel0, this.xPixelMovedTo2, this.yPixel1);
this.yValueMovedTo = NaN;
} else {
var y = (ig == null ? yOffset + this.toPixelY(this.yValueMovedTo) : this.toPixelYint(this.yValueMovedTo / 100));
if (y == this.fixY(y)) this.g2d.drawLine(gFront, this.xPixelMovedTo, y - 10, this.xPixelMovedTo, y + 10);
}if (ig != null) this.g2d.setStrokeBold(gFront, false);
}, "~O,JSV.common.Spectrum,~N,JSV.common.IntegralData");
Clazz.defineMethod(c$, "setScale", 
function(i){
this.viewData.setScale(i, this.xPixels, this.yPixels, this.spectra.get(i).isInverted());
}, "~N");
Clazz.defineMethod(c$, "draw2DUnits", 
function(g){
var nucleusX = this.getSpectrumAt(0).nucleusX;
var nucleusY = this.getSpectrumAt(0).nucleusY;
this.setColorFromToken(g, JSV.common.ScriptToken.PLOTCOLOR);
this.drawUnits(g, nucleusX, this.imageView.xPixel1 + 5 * this.pd.scalingFactor, this.yPixel1, 1, 1.0);
this.drawUnits(g, nucleusY, this.imageView.xPixel0 - 5 * this.pd.scalingFactor, this.yPixel0, 1, 0);
}, "~O");
Clazz.defineMethod(c$, "drawPeakTabs", 
function(gFront, g2, spec){
if (this.isPrintingOrSaving) return;
var list = (this.nSpectra == 1 || this.iSpectrumSelected >= 0 ? spec.getPeakList() : null);
if (list != null && list.size() > 0) {
if (this.piMouseOver != null && this.piMouseOver.spectrum === spec && this.pd.isMouseUp()) {
this.setColorFromToken(g2, JSV.common.ScriptToken.PEAKOVERCOLOR);
this.drawPeak(g2, this.piMouseOver, 0);
spec.setHighlightedPeak(this.piMouseOver);
} else {
spec.setHighlightedPeak(null);
}this.setColorFromToken(gFront, JSV.common.ScriptToken.PEAKTABCOLOR);
for (var i = list.size(); --i >= 0; ) {
var p = list.get(i);
this.drawPeak(gFront, p, p === spec.getSelectedPeak() ? 14 : 7);
}
}}, "~O,~O,JSV.common.Spectrum");
Clazz.defineMethod(c$, "drawPeak", 
function(g, pi, tickSize){
if (this.isPrintingOrSaving) return;
var xMin = pi.getXMin();
var xMax = pi.getXMax();
if (xMin == xMax) return;
this.drawBar(g, pi, xMin, xMax, null, tickSize);
}, "~O,JSV.common.PeakInfo,~N");
Clazz.defineMethod(c$, "drawWidgets", 
function(gFront, gBack, subIndex, needNewPins, doDraw1DObjects, doDraw1DY, postGrid){
this.setWidgets(needNewPins, subIndex, doDraw1DObjects);
if (this.isPrintingOrSaving && (this.imageView == null ? !this.cur1D2Locked : this.sticky2Dcursor)) return;
if (!this.pd.isPrinting && !postGrid) {
if (doDraw1DObjects) {
this.fillBox(gFront, this.xPixel0, this.pin1Dx0.yPixel1, this.xPixel1, this.pin1Dx1.yPixel1 + 2, JSV.common.ScriptToken.GRIDCOLOR);
this.fillBox(gFront, this.pin1Dx0.xPixel0, this.pin1Dx0.yPixel1, this.pin1Dx1.xPixel0, this.pin1Dx1.yPixel1 + 2, JSV.common.ScriptToken.PLOTCOLOR);
} else {
this.fillBox(gFront, this.imageView.xPixel0, this.pin2Dx0.yPixel1, this.imageView.xPixel1, this.pin2Dx0.yPixel1 + 2, JSV.common.ScriptToken.GRIDCOLOR);
this.fillBox(gFront, this.pin2Dx0.xPixel0, this.pin2Dx0.yPixel1, this.pin2Dx1.xPixel0, this.pin2Dx1.yPixel1 + 2, JSV.common.ScriptToken.PLOTCOLOR);
this.fillBox(gFront, this.pin2Dy0.xPixel1, this.yPixel1, this.pin2Dy1.xPixel1 + 2, this.yPixel0, JSV.common.ScriptToken.GRIDCOLOR);
this.fillBox(gFront, this.pin2Dy0.xPixel1, this.pin2Dy0.yPixel1, this.pin2Dy1.xPixel1 + 2, this.pin2Dy1.yPixel0, JSV.common.ScriptToken.PLOTCOLOR);
}this.fillBox(gFront, this.pin1Dy0.xPixel1, this.yPixel1, this.pin1Dy1.xPixel1 + 2, this.yPixel0, JSV.common.ScriptToken.GRIDCOLOR);
if (doDraw1DY) this.fillBox(gFront, this.pin1Dy0.xPixel1, this.pin1Dy0.yPixel1, this.pin1Dy1.xPixel1 + 2, this.pin1Dy1.yPixel0, JSV.common.ScriptToken.PLOTCOLOR);
}for (var i = 0; i < this.widgets.length; i++) {
var pw = this.widgets[i];
if (pw == null || !pw.isPinOrCursor && !this.zoomEnabled) continue;
var isLockedCursor = (pw === this.cur1D2x1 || pw === this.cur1D2x2 || pw === this.cur2Dx0 || pw === this.cur2Dx1 || pw === this.cur2Dy);
if ((pw.isPin || !pw.isPinOrCursor) == postGrid) continue;
if (pw.is2D) {
if (pw === this.cur2Dx0 && !doDraw1DObjects) continue;
} else {
var isPin1Dy = (pw === this.pin1Dy0 || pw === this.pin1Dy1 || pw === this.pin1Dy01);
if ((this.imageView != null && doDraw1DObjects == isPin1Dy) || isPin1Dy && !doDraw1DY || pw === this.cur1D2x1 && this.gs2dLinkedX == null || pw === this.cur1D2x2 && this.gs2dLinkedY == null || pw === this.zoomBox1D && (this.pd.isIntegralDrag || this.pd.integralShiftMode != 0)) {
if (!this.isLinked || this.imageView != null) continue;
}}if (this.pd.isPrinting && !isLockedCursor) continue;
if (pw.isPinOrCursor) {
this.setColorFromToken(gFront, pw.color);
this.g2d.drawLine(gFront, pw.xPixel0, pw.yPixel0, pw.xPixel1, pw.yPixel1);
pw.isVisible = true;
if (pw.isPin) this.drawHandle(gFront, pw.xPixel0, pw.yPixel0, 2, !pw.isEnabled);
} else if (pw.xPixel1 != pw.xPixel0) {
this.fillBox(gBack, pw.xPixel0, pw.yPixel0, pw.xPixel1, pw.yPixel1, pw === this.zoomBox1D && this.pd.shiftPressed ? JSV.common.ScriptToken.ZOOMBOXCOLOR2 : JSV.common.ScriptToken.ZOOMBOXCOLOR);
}}
}, "~O,~O,~N,~B,~B,~B,~B");
Clazz.defineMethod(c$, "drawBar", 
function(g, pi, xMin, xMax, whatColor, tickSize){
var x1 = this.toPixelX(xMin);
var x2 = this.toPixelX(xMax);
if (x1 > x2) {
var tmp = x1;
x1 = x2;
x2 = tmp;
}x1 = this.fixX(x1);
x2 = this.fixX(x2);
if (x2 - x1 < 3) {
x1 -= 2;
x2 += 2;
}if (pi != null) pi.setPixelRange(x1, x2);
if (tickSize == 0) {
this.fillBox(g, x1, this.yPixel0, x2, this.yPixel0 + this.yPixels, whatColor);
} else {
this.fillBox(g, x1, this.yPixel0 + 2, x2, this.yPixel0 + 5, whatColor);
if (pi != null) {
x1 = Clazz.doubleToInt((x1 + x2) / 2);
this.fillBox(g, x1 - 1, this.yPixel0 + 2, x1 + 1, this.yPixel0 + 2 + tickSize, whatColor);
}}}, "~O,JSV.common.PeakInfo,~N,~N,JSV.common.ScriptToken,~N");
Clazz.defineMethod(c$, "drawIntegration", 
function(gFront, index, yOffset, isGrey, iData, isSelected){
if (iData != null) {
if (this.haveIntegralDisplayed(index)) this.drawPlot(gFront, index, this.spectra.get(index), true, yOffset, false, iData, true, false, false);
this.drawIntegralValues(gFront, index, yOffset);
}var ratios = this.getIntegrationRatios(index);
if (ratios != null) this.drawAnnotations(gFront, ratios, JSV.common.ScriptToken.INTEGRALPLOTCOLOR);
}, "~O,~N,~N,~B,JSV.common.IntegralData,~B");
Clazz.defineMethod(c$, "getMeasurements", 
function(type, iSpec){
var ad = this.getDialog(type, iSpec);
return (ad == null || ad.getData().size() == 0 || !ad.getState() ? null : ad.getData());
}, "JSV.common.Annotation.AType,~N");
Clazz.defineMethod(c$, "drawPlot", 
function(g, index, spec, isContinuous, yOffset, isGrey, ig, isSelected, hasPendingIntegral, pointsOnly){
var xyCoords = (ig == null ? spec.getXYCoords() : this.getIntegrationGraph(index).getXYCoords());
var isIntegral = (ig != null);
var bsDraw = (isIntegral ? ig.getBitSet() : null);
var fillPeaks = (hasPendingIntegral || spec.fillColor != null && isSelected);
var iColor = (isGrey ? -2 : isIntegral ? -1 : !this.allowStacking ? 0 : index);
this.setPlotColor(g, iColor);
var plotOn = true;
var y0 = this.toPixelY(0);
if (isIntegral) fillPeaks = new Boolean (fillPeaks & (y0 == this.fixY(y0))).valueOf();
 else y0 = this.fixY(y0);
var cInt = (isIntegral || fillPeaks ? this.pd.getColor(JSV.common.ScriptToken.INTEGRALPLOTCOLOR) : null);
var cFill = (cInt == null || spec.fillColor == null ? cInt : spec.fillColor);
var iFirst = this.viewData.getStartingPointIndex(index);
var iLast = this.viewData.getEndingPointIndex(index);
if (isContinuous && !pointsOnly) {
iLast--;
var doLineTo = (isIntegral || this.pendingIntegral != null) && this.g2d.canDoLineTo();
if (doLineTo) this.g2d.doStroke(g, true);
var isDown = false;
for (var i = iFirst; i <= iLast; i++) {
var point1 = xyCoords[i];
var point2 = xyCoords[i + 1];
var y1 = (isIntegral ? this.toPixelYint(point1.getYVal()) : this.toPixelY(point1.getYVal()));
if (y1 == -2147483648) continue;
var y2 = (isIntegral ? this.toPixelYint(point2.getYVal()) : this.toPixelY(point2.getYVal()));
if (y2 == -2147483648) continue;
var xv1 = point1.getXVal();
var xv2 = point2.getXVal();
var x1 = this.toPixelX(xv1);
var x2 = this.toPixelX(xv2);
y1 = this.fixY(yOffset + y1);
y2 = this.fixY(yOffset + y2);
if (isIntegral) {
if (i == iFirst) {
this.xPixelPlot1 = x1;
this.yPixelPlot0 = y1;
}this.xPixelPlot0 = x2;
this.yPixelPlot1 = y2;
}if (x2 == x1 && y1 == y2) continue;
if (fillPeaks && hasPendingIntegral && this.pendingIntegral.overlaps(xv1, xv2)) {
if (cFill != null) {
this.g2d.doStroke(g, false);
this.g2d.setGraphicsColor(g, cFill);
}this.g2d.fillRect(g, Math.min(x1, x2), Math.min(y0, y1), Math.max(1, Math.abs(x2 - x1)), Math.abs(y0 - y1));
if (cFill != null) {
this.g2d.doStroke(g, false);
this.g2d.doStroke(g, true);
isDown = false;
this.setPlotColor(g, iColor);
}continue;
}if (y1 == y2 && (y1 == this.yPixel0)) {
continue;
}if (bsDraw != null && bsDraw.get(i) != plotOn) {
plotOn = bsDraw.get(i);
if (doLineTo && isDown) {
this.g2d.doStroke(g, false);
this.g2d.doStroke(g, true);
isDown = false;
}if (!this.pd.isPrinting && this.pd.integralShiftMode != 0) this.setPlotColor(g, 0);
 else if (plotOn) this.setColorFromToken(g, JSV.common.ScriptToken.INTEGRALPLOTCOLOR);
 else this.setPlotColor(g, -3);
}if (this.pd.isPrinting && !plotOn) continue;
if (isDown) {
this.g2d.lineTo(g, x2, y2);
} else {
this.g2d.drawLine(g, x1, y1, x2, y2);
isDown = doLineTo;
}}
if (doLineTo) this.g2d.doStroke(g, false);
} else {
for (var i = iFirst; i <= iLast; i++) {
var point = xyCoords[i];
var y2 = this.toPixelY(point.getYVal());
if (y2 == -2147483648) continue;
var x1 = this.toPixelX(point.getXVal());
var y1 = this.toPixelY(Math.max(this.getScale().minYOnScale, 0));
y1 = this.fixY(yOffset + y1);
y2 = this.fixY(yOffset + y2);
if (y1 == y2 && (y1 == this.yPixel0 || y1 == this.yPixel1)) continue;
if (pointsOnly) this.g2d.fillRect(g, x1 - 1, y2 - 1, 3, 3);
 else this.g2d.drawLine(g, x1, y1, x1, y2);
}
if (!pointsOnly && this.getScale().isYZeroOnScale()) {
var y = yOffset + this.toPixelY(this.getScale().spectrumYRef);
if (y == this.fixY(y)) this.g2d.drawLine(g, this.xPixel1, y, this.xPixel0, y);
}}}, "~O,~N,JSV.common.Spectrum,~B,~N,~B,JSV.common.IntegralData,~B,~B,~B");
Clazz.defineMethod(c$, "drawFrame", 
function(g, iSpec, addCurrentBox, addSplitBox, drawUpDownArrows){
if (!this.pd.gridOn || this.isPrintingOrSaving) {
this.setColorFromToken(g, JSV.common.ScriptToken.GRIDCOLOR);
this.g2d.drawRect(g, this.xPixel0, this.yPixel0, this.xPixels, this.yPixels);
if (this.isPrintingOrSaving) return;
}this.setCurrentBoxColor(g);
if (drawUpDownArrows) {
if (iSpec >= 0) {
this.setPlotColor(g, iSpec);
this.fillArrow(g, 3, this.xVArrows, Clazz.doubleToInt((this.yPixel00 + this.yPixel11) / 2) - 9, true);
this.fillArrow(g, 4, this.xVArrows, Clazz.doubleToInt((this.yPixel00 + this.yPixel11) / 2) + 9, true);
this.setCurrentBoxColor(g);
}this.fillArrow(g, 3, this.xVArrows, Clazz.doubleToInt((this.yPixel00 + this.yPixel11) / 2) - 9, false);
this.fillCircle(g, this.xVArrows, Clazz.doubleToInt((this.yPixel00 + this.yPixel11) / 2), false);
this.fillArrow(g, 4, this.xVArrows, Clazz.doubleToInt((this.yPixel00 + this.yPixel11) / 2) + 9, false);
}if (this.imageView != null) return;
if (addCurrentBox) {
var x1 = this.xPixel00 + 10;
var x2 = this.xPixel11 - 10;
var y1 = this.yPixel00 + 1;
var y2 = this.yPixel11 - 2;
this.g2d.drawLine(g, x1, y1, x2, y1);
this.g2d.drawLine(g, x2, y1, x2, y2);
this.g2d.drawLine(g, x1, y2, x2, y2);
this.splitterX = this.closerX = -2147483648;
this.drawBox(g, x2 - 10, y1, x2, y1 + 10, null);
this.g2d.drawLine(g, x2 - 10, y1 + 10, x2, y1);
this.g2d.drawLine(g, x2, y1 + 10, x2 - 10, y1);
this.closerX = x2 - 10;
this.closerY = y1;
if (addSplitBox) {
x2 -= 10;
this.fillBox(g, x2 - 10, y1, x2, y1 + 10, null);
this.splitterX = x2 - 10;
this.splitterY = y1;
}}}, "~O,~N,~B,~B,~B");
Clazz.defineMethod(c$, "drawGrid", 
function(g){
if (!this.pd.gridOn || this.imageView != null) return;
this.setColorFromToken(g, JSV.common.ScriptToken.GRIDCOLOR);
var lastX;
if (Double.isNaN(this.getScale().firstX)) {
lastX = this.getScale().maxXOnScale + this.getScale().steps[0] / 2;
for (var val = this.getScale().minXOnScale; val < lastX; val += this.getScale().steps[0]) {
var x = this.toPixelX(val);
this.g2d.drawLine(g, x, this.yPixel0, x, this.yPixel1);
}
} else {
lastX = this.getScale().maxXOnScale * 1.0001;
for (var val = this.getScale().firstX; val <= lastX; val += this.getScale().steps[0]) {
var x = this.toPixelX(val);
this.g2d.drawLine(g, x, this.yPixel0, x, this.yPixel1);
}
}for (var val = this.getScale().firstY; val < this.getScale().maxYOnScale + this.getScale().steps[1] / 2; val += this.getScale().steps[1]) {
var y = this.toPixelY(val);
if (y == this.fixY(y)) this.g2d.drawLine(g, this.xPixel0, y, this.xPixel1, y);
}
}, "~O");
Clazz.defineMethod(c$, "drawXScale", 
function(g, c){
this.setColorFromToken(g, JSV.common.ScriptToken.SCALECOLOR);
if (this.pd.isPrinting) this.g2d.drawLine(g, c.getXPixel0(), this.yPixel1, c.getXPixel0() + c.getXPixels() - 1, this.yPixel1);
var precision = this.getScale().precision[0];
var font = this.pd.setFont(g, c.getXPixels(), 0, this.pd.isPrinting ? 10 : 12, false);
var y1 = this.yPixel1;
var y2 = this.yPixel1 + 4 * this.pd.scalingFactor;
var y3 = this.yPixel1 + 2 * this.pd.scalingFactor;
var h = font.getHeight();
var dx = c.toPixelX(this.getScale().steps[0]) - c.toPixelX(0);
var maxWidth = Math.abs(dx * 0.95);
var firstX = this.getScale().firstX - this.getScale().steps[0];
var lastX = (this.getScale().maxXOnScale + this.getScale().steps[0]) * 1.0001;
for (var pass = 0; pass < 2; pass++) {
if (pass == 1) JSV.common.ScaleData.fixScale(this.mapX);
var prevX = 1e10;
for (var val = firstX; val <= lastX; val += this.getScale().steps[0]) {
var x = c.toPixelX(val);
var d = Double.$valueOf(val);
var s;
switch (pass) {
case 0:
s = JU.DF.formatDecimalDbl(val, precision);
this.mapX.put(d, s);
this.drawTick(g, x, y1, y2, c);
dx = Math.abs(prevX - val);
var ntick = this.getScale().minorTickCounts[0];
if (ntick != 0) {
var step = dx / ntick;
for (var i = 1; i < ntick; i++) {
var x1 = val - i * step;
this.drawTick(g, c.toPixelX(x1), y1, y3, c);
}
}prevX = val;
continue;
case 1:
s = this.mapX.get(d);
if (s == null || x != c.fixX(x)) continue;
var w = this.pd.getStringWidth(s);
var n = (x + Clazz.doubleToInt(w / 2) == c.fixX(x + Clazz.doubleToInt(w / 2)) ? 2 : 0);
if (n > 0) this.g2d.drawString(g, s, x - Clazz.doubleToInt(w / n), y2 + h);
val += Math.floor(w / maxWidth) * this.getScale().steps[0];
break;
}
}
}
this.mapX.clear();
}, "~O,JSV.common.XYScaleConverter");
Clazz.defineMethod(c$, "drawTick", 
function(g, x, y1, y2, c){
if (x == c.fixX(x)) this.g2d.drawLine(g, x, y1, x, y2);
}, "~O,~N,~N,~N,JSV.common.XYScaleConverter");
Clazz.defineMethod(c$, "drawYScale", 
function(g, c){
var sd = c.getScale();
var precision = sd.precision[1];
var font = this.pd.setFont(g, c.getXPixels(), 0, this.pd.isPrinting ? 10 : 12, false);
var h = font.getHeight();
var max = sd.maxYOnScale + sd.steps[1] / 2;
var yLast = -2147483648;
this.setColorFromToken(g, JSV.common.ScriptToken.SCALECOLOR);
for (var pass = 0; pass < 2; pass++) {
if (pass == 1) JSV.common.ScaleData.fixScale(this.mapX);
for (var val = sd.firstY; val < max; val += sd.steps[1]) {
var d = Double.$valueOf(val);
var x1 = c.getXPixel0();
var y = c.toPixelY(val);
if (y != c.fixY(y)) continue;
var s;
if (pass == 0) this.g2d.drawLine(g, x1, y, x1 - 3 * this.pd.scalingFactor, y);
if (Math.abs(y - yLast) <= h) continue;
yLast = y;
switch (pass) {
case 0:
s = JU.DF.formatDecimalDbl(val, precision);
this.mapX.put(d, s);
break;
case 1:
s = this.mapX.get(d);
if (s == null) continue;
if (s.startsWith("0") && s.contains("E")) s = "0";
this.g2d.drawString(g, s, (x1 - 4 * this.pd.scalingFactor - this.pd.getStringWidth(s)), y + Clazz.doubleToInt(h / 3));
break;
}
}
}
this.mapX.clear();
}, "~O,JSV.common.XYScaleConverter");
Clazz.defineMethod(c$, "drawXUnits", 
function(g){
var units = this.spectra.get(0).getAxisLabel(true);
if (units != null) this.drawUnits(g, units, this.xPixel1 + 25 * this.pd.scalingFactor, this.yPixel1 + 5 * this.pd.scalingFactor, 1, 1);
}, "~O");
Clazz.defineMethod(c$, "drawUnits", 
function(g, s, x, y, hOff, vOff){
this.setColorFromToken(g, JSV.common.ScriptToken.UNITSCOLOR);
this.pd.setFont(g, (this.imageView == null ? this : this.imageView).getXPixels(), 3, 10, false);
this.g2d.drawString(g, s, Clazz.doubleToInt(x - this.pd.getStringWidth(s) * hOff), Clazz.doubleToInt(y + this.pd.getFontHeight() * vOff));
}, "~O,~S,~N,~N,~N,~N");
Clazz.defineMethod(c$, "drawYUnits", 
function(g){
var units = this.spectra.get(0).getAxisLabel(false);
if (units === "") units = "ARBITRARY UNITS";
if (units != null && !this.pd.unitsDrawn) {
this.drawUnits(g, units, (this.pd.isPrinting ? 30 : 5) * this.pd.scalingFactor, this.yPixel0 + (this.pd.isPrinting ? 0 : 5) * this.pd.scalingFactor, 0, -1);
}this.pd.unitsDrawn = true;
}, "~O");
Clazz.defineMethod(c$, "drawHighlightsAndPeakTabs", 
function(gFront, gBack, iSpec){
var md = this.getMeasurements(JSV.common.Annotation.AType.PeakList, iSpec);
var spec = this.spectra.get(iSpec);
if (this.isPrintingOrSaving) {
if (md != null) {
this.setColorFromToken(gFront, JSV.common.ScriptToken.PEAKTABCOLOR);
this.printPeakList(gFront, spec, md);
}return;
}if (md == null) {
for (var i = 0; i < this.highlights.size(); i++) {
var hl = this.highlights.get(i);
if (hl.spectrum === spec) {
this.pd.setHighlightColor(hl.color);
this.drawBar(gBack, null, hl.x1, hl.x2, JSV.common.ScriptToken.HIGHLIGHTCOLOR, 0);
}}
if (this.pd.peakTabsOn) this.drawPeakTabs(gFront, gBack, spec);
}var y;
if (md != null) {
y = (spec.isInverted() ? this.yPixel1 - 10 * this.pd.scalingFactor : this.yPixel0);
this.setColorFromToken(gFront, JSV.common.ScriptToken.PEAKTABCOLOR);
for (var i = md.size(); --i >= 0; ) {
var m = md.get(i);
var x = this.toPixelX(m.getXVal());
this.g2d.drawLine(gFront, x, y, x, y + 10 * this.pd.scalingFactor);
}
if (this.isVisible(this.getDialog(JSV.common.Annotation.AType.PeakList, iSpec))) {
y = this.toPixelY((md).getThresh());
if (y == this.fixY(y) && !this.pd.isPrinting) this.g2d.drawLine(gFront, this.xPixel0, y, this.xPixel1, y);
}}}, "~O,~O,~N");
Clazz.defineMethod(c$, "printPeakList", 
function(g, spec, data){
var sdata = data.getMeasurementListArray(null);
if (sdata.length == 0) return;
this.pd.setFont(g, this.xPixels, 0, 8, false);
var h = this.pd.getFontHeight();
var xs =  Clazz.newIntArray (data.size(), 0);
var xs0 =  Clazz.newIntArray (data.size(), 0);
var dx = 0;
var s5 = 5 * this.pd.scalingFactor;
var s10 = 10 * this.pd.scalingFactor;
var s15 = 15 * this.pd.scalingFactor;
var s25 = 25 * this.pd.scalingFactor;
for (var i = 0; i < sdata.length; i++) {
xs0[i] = this.toPixelX(Double.parseDouble(sdata[i][1]));
if (i == 0) {
xs[i] = xs0[i];
continue;
}xs[i] = Math.max(xs[i - 1] + h, xs0[i] + h);
dx += (xs[i] - xs0[i]);
}
dx /= 2 * sdata.length;
if (xs[0] - dx < this.xPixel0 + s25) dx = xs[0] - (this.xPixel0 + s25);
for (var i = 0; i < sdata.length; i++) xs[i] -= dx;

var inverted = spec.isInverted();
var y4 = this.pd.getStringWidth("99.9999");
var y2 = (sdata[0].length >= 6 ? this.pd.getStringWidth("99.99") : 0);
var f = (inverted ? -1 : 1);
var y = (inverted ? this.yPixel1 : this.yPixel0) + f * (y2 + y4 + s15);
for (var i = 0; i < sdata.length; i++) {
this.g2d.drawLine(g, xs[i], y, xs[i], y + s5 * f);
this.g2d.drawLine(g, xs[i], y + s5 * f, xs0[i], y + s10 * f);
this.g2d.drawLine(g, xs0[i], y + s10 * f, xs0[i], y + s15 * f);
if (y2 > 0 && sdata[i][4].length > 0) this.g2d.drawLine(g, Clazz.doubleToInt((xs[i] + xs[i - 1]) / 2), y - y4 + s5, Clazz.doubleToInt((xs[i] + xs[i - 1]) / 2), y - y4 - s5);
}
y -= f * 2 * this.pd.scalingFactor;
if (y2 > 0) {
this.drawStringRotated(g, -90, xs[0] - s15, y, "  ppm");
this.drawStringRotated(g, -90, xs[0] - s15, y - y4 - s5, " Hz");
}for (var i = data.size(); --i >= 0; ) {
this.drawStringRotated(g, -90 * f, xs[i] + Clazz.doubleToInt(f * h / 3), y, sdata[i][1]);
if (y2 > 0 && sdata[i][4].length > 0) {
var x = Clazz.doubleToInt((xs[i] + xs[i - 1]) / 2) + Clazz.doubleToInt(h / 3);
this.drawStringRotated(g, -90, x, y - y4 - s5, sdata[i][4]);
}}
}, "~O,JSV.common.Spectrum,JSV.common.PeakData");
Clazz.defineMethod(c$, "drawStringRotated", 
function(g, angle, x, y, s){
this.g2d.drawStringRotated(g, s, x, y, angle);
}, "~O,~N,~N,~N,~S");
Clazz.defineMethod(c$, "drawAnnotations", 
function(g, annotations, whatColor){
this.pd.setFont(g, this.xPixels, 1, 18, false);
for (var i = annotations.size(); --i >= 0; ) {
var note = annotations.get(i);
this.setAnnotationColor(g, note, whatColor);
var c = (note.is2D ? this.imageView : this);
var x = c.toPixelX(note.getXVal());
var y = (note.isPixels() ? Clazz.doubleToInt(this.yPixel0 + 10 + 10 * this.pd.scalingFactor - note.getYVal()) : note.is2D ? this.imageView.subIndexToPixelY(Clazz.doubleToInt(note.getYVal())) : this.toPixelY(note.getYVal()));
this.g2d.drawString(g, note.text, x + note.offsetX * this.pd.scalingFactor, y - note.offsetY * this.pd.scalingFactor);
}
}, "~O,JU.Lst,JSV.common.ScriptToken");
Clazz.defineMethod(c$, "drawIntegralValues", 
function(g, iSpec, yOffset){
var integrals = this.getMeasurements(JSV.common.Annotation.AType.Integration, iSpec);
if (integrals != null) {
if (this.pd.isPrinting) this.pd.setFont(g, this.xPixels, 0, 8, false);
 else this.pd.setFont(g, this.xPixels, 1, 12, false);
this.setColorFromToken(g, JSV.common.ScriptToken.INTEGRALPLOTCOLOR);
var h = this.pd.getFontHeight();
this.g2d.setStrokeBold(g, true);
for (var i = integrals.size(); --i >= 0; ) {
var $in = integrals.get(i);
if ($in.getValue() == 0) continue;
var x = this.toPixelX($in.getXVal2());
var y1 = yOffset * this.pd.scalingFactor + this.toPixelYint($in.getYVal());
var y2 = yOffset * this.pd.scalingFactor + this.toPixelYint($in.getYVal2());
if (x != this.fixX(x) || y1 != this.fixY(y1) || y2 != this.fixY(y2)) continue;
if (!this.pd.isPrinting) this.g2d.drawLine(g, x, y1, x, y2);
var s = "  " + $in.text;
this.g2d.drawString(g, s, x, Clazz.doubleToInt((y1 + y2) / 2) + Clazz.doubleToInt(h / 3));
}
this.g2d.setStrokeBold(g, false);
}if (iSpec == this.getFixedSelectedSpectrumIndex()) this.selectedSpectrumIntegrals = integrals;
}, "~O,~N,~N");
Clazz.defineMethod(c$, "drawMeasurements", 
function(g, iSpec){
var md = this.getMeasurements(JSV.common.Annotation.AType.Measurements, iSpec);
if (md != null) for (var i = md.size(); --i >= 0; ) this.drawMeasurement(g, md.get(i));

if (iSpec == this.getFixedSelectedSpectrumIndex()) this.selectedSpectrumMeasurements = md;
}, "~O,~N");
Clazz.defineMethod(c$, "drawMeasurement", 
function(g, m){
if (m.text.length == 0 && m !== this.pendingMeasurement) return;
this.pd.setFont(g, this.xPixels, 1, 12, false);
this.g2d.setGraphicsColor(g, (m === this.pendingMeasurement ? this.pd.getColor(JSV.common.ScriptToken.PEAKTABCOLOR) : this.pd.BLACK));
var x1 = this.toPixelX(m.getXVal());
var y1 = this.toPixelY(m.getYVal());
var x2 = this.toPixelX(m.getXVal2());
if (Double.isNaN(m.getXVal()) || x1 != this.fixX(x1) || x2 != this.fixX(x2)) return;
var drawString = (Math.abs(x1 - x2) >= 2);
var drawBaseLine = this.getScale().isYZeroOnScale() && m.spec.isHNMR();
var x = Clazz.doubleToInt((x1 + x2) / 2);
this.g2d.setStrokeBold(g, true);
if (drawString) this.g2d.drawLine(g, x1, y1, x2, y1);
if (drawBaseLine) this.g2d.drawLine(g, x1 + 1, this.yPixel1 - 1, x2, this.yPixel1 - 1);
this.g2d.setStrokeBold(g, false);
if (drawString) this.g2d.drawString(g, m.text, x + m.offsetX, y1 - m.offsetY);
if (drawBaseLine) {
this.g2d.drawLine(g, x1, this.yPixel1, x1, this.yPixel1 - 6 * this.pd.scalingFactor);
this.g2d.drawLine(g, x2, this.yPixel1, x2, this.yPixel1 - 6 * this.pd.scalingFactor);
}}, "~O,JSV.common.Measurement");
Clazz.defineMethod(c$, "getPinSelected", 
function(xPixel, yPixel){
if (this.widgets != null) for (var i = 0; i < this.widgets.length; i++) {
if (this.widgets[i] != null && this.widgets[i].isPinOrCursor && this.widgets[i].selected(xPixel, yPixel)) {
return this.widgets[i];
}}
return null;
}, "~N,~N");
Clazz.defineMethod(c$, "set2DCrossHairs", 
function(xPixel, yPixel){
var x;
if (xPixel == this.imageView.fixX(xPixel) && yPixel == this.fixY(yPixel)) {
this.pin1Dx1.setX(x = this.imageView.toX(xPixel), this.toPixelX(x));
this.cur2Dx1.setX(x, xPixel);
this.setCurrentSubSpectrum(this.imageView.toSubspectrumIndex(yPixel));
if (this.isLinked) {
var y = this.imageView.toY(yPixel);
this.pd.set2DCrossHairsLinked(this, x, y, !this.sticky2Dcursor);
}}}, "~N,~N");
Clazz.defineMethod(c$, "reset2D", 
function(isX){
if (isX) {
this.imageView.setView0(this.imageView.xPixel0, this.pin2Dy0.yPixel0, this.imageView.xPixel1, this.pin2Dy1.yPixel0);
this.doZoom(0, this.getScale().minY, 0, this.getScale().maxY, true, false, false, false, true);
} else {
this.imageView.setView0(this.pin2Dx0.xPixel0, this.imageView.yPixel0, this.pin2Dx1.xPixel0, this.imageView.yPixel1);
}}, "~B");
Clazz.defineMethod(c$, "setAnnotationText", 
function(a){
var sval = this.pd.getInput("New text?", "Set Label", a.text);
if (sval == null) return false;
if (sval.length == 0) this.annotations.removeObj(a);
 else a.text = sval;
return true;
}, "JSV.common.Annotation");
Clazz.defineMethod(c$, "checkIntegral", 
function(x1, x2, isFinal){
var ad = this.getDialog(JSV.common.Annotation.AType.Integration, -1);
if (ad == null) return false;
var integral = (ad.getData()).addIntegralRegion(x1, x2);
if (isFinal && JSV.common.GraphSet.isDialog(ad)) (ad).update(null, 0, 0);
if (Double.isNaN(x2)) return false;
this.pendingIntegral = (isFinal ? null : integral);
this.pd.isIntegralDrag = !isFinal;
this.selectedSpectrumIntegrals = null;
return true;
}, "~N,~N,~B");
Clazz.defineMethod(c$, "setToolTipForPixels", 
function(xPixel, yPixel){
if (this.iSpectrumMovedTo != this.iSpectrumClicked || this.pd.getCurrentGraphSet() !== this) {
this.pd.setToolTipText("click spectrum to activate");
return;
}if (this.isSplitWidget(xPixel, yPixel)) {
this.pd.setToolTipText("click to " + (this.nSplit > 1 ? "combine" : "split"));
return;
}if (this.isCloserWidget(xPixel, yPixel)) {
this.pd.setToolTipText("click to close");
return;
}var pw = this.getPinSelected(xPixel, yPixel);
var precisionX = this.getScale().precision[0];
var precisionY = this.getScale().precision[1];
if (pw != null) {
if (this.setStartupPinTip()) return;
var s;
if (pw === this.pin1Dx01 || pw === this.pin2Dx01) {
s = JU.DF.formatDecimalDbl(Math.min(this.pin1Dx0.getXVal(), this.pin1Dx1.getXVal()), precisionX) + " - " + JU.DF.formatDecimalDbl(Math.max(this.pin1Dx0.getXVal(), this.pin1Dx1.getXVal()), precisionX);
} else if (pw === this.pin1Dy01) {
s = JU.DF.formatDecimalDbl(Math.min(this.pin1Dy0.getYVal(), this.pin1Dy1.getYVal()), precisionY) + " - " + JU.DF.formatDecimalDbl(Math.max(this.pin1Dy0.getYVal(), this.pin1Dy1.getYVal()), precisionY);
} else if (pw === this.cur2Dy) {
var isub = this.imageView.toSubspectrumIndex(pw.yPixel0);
s = this.get2DYLabel(isub, precisionX);
} else if (pw === this.pin2Dy01) {
s = "" + Clazz.doubleToInt(Math.min(this.pin2Dy0.getYVal(), this.pin2Dy1.getYVal())) + " - " + Clazz.doubleToInt(Math.max(this.pin2Dy0.getYVal(), this.pin2Dy1.getYVal()));
} else if (pw.isXtype) {
s = JU.DF.formatDecimalDbl(pw.getXVal(), precisionX);
} else if (pw.is2D) {
s = "" + Clazz.doubleToInt(pw.getYVal());
} else {
s = JU.DF.formatDecimalDbl(pw.getYVal(), precisionY);
}this.pd.setToolTipText(s);
return;
}var yPt;
if (this.imageView != null) {
if (this.imageView.fixX(xPixel) == xPixel && this.fixY(yPixel) == yPixel) {
var isub = this.imageView.toSubspectrumIndex(yPixel);
var s = "y=" + this.get2DYLabel(isub, precisionX) + " / x=" + JU.DF.formatDecimalDbl(this.imageView.toX(xPixel), precisionX) + " " + this.getSpectrum().getAxisLabel(true);
this.pd.setToolTipText(s);
this.pd.coordStr = s;
return;
}if (!this.pd.display1D) {
this.pd.setToolTipText("");
this.pd.coordStr = "";
return;
}}var xPt = this.toX(this.fixX(xPixel));
yPt = (this.imageView != null && this.imageView.isXWithinRange(xPixel) ? this.imageView.toSubspectrumIndex(this.fixY(yPixel)) : this.toY(this.fixY(yPixel)));
var xx = this.setCoordStr(xPt, yPt);
var iSpec = this.getFixedSelectedSpectrumIndex();
if (!this.isInPlotRegion(xPixel, yPixel)) {
yPt = NaN;
} else if (this.nSpectra == 1) {
} else if (this.haveIntegralDisplayed(iSpec)) {
yPt = this.getIntegrationGraph(iSpec).getPercentYValueAt(xPt);
xx += ", " + JU.DF.formatDecimalDbl(yPt, 1);
}this.pd.setToolTipText((this.selectedIntegral != null ? "click to set value" : this.pendingMeasurement != null || this.selectedMeasurement != null ? (this.pd.hasFocus() ? "Press ESC to delete " + (this.selectedIntegral != null ? "integral, DEL to delete all visible, or N to normalize" : this.pendingMeasurement == null ? "\"" + this.selectedMeasurement.text + "\" or DEL to delete all visible" : "measurement") : "") : Double.isNaN(yPt) ? null : xx));
}, "~N,~N");
Clazz.defineMethod(c$, "isFrameBox", 
function(xPixel, yPixel, boxX, boxY){
return Math.abs(xPixel - (boxX + 5)) < 5 && Math.abs(yPixel - (boxY + 5)) < 5;
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "setCoordStr", 
function(xPt, yPt){
var xx = JU.DF.formatDecimalDbl(xPt, this.getScale().precision[0]);
this.pd.coordStr = "(" + xx + (this.haveSingleYScale || this.iSpectrumSelected >= 0 ? ", " + JU.DF.formatDecimalDbl(yPt, this.getScale().precision[1]) : "") + ")";
return xx;
}, "~N,~N");
Clazz.defineMethod(c$, "setStartupPinTip", 
function(){
if (this.pd.startupPinTip == null) return false;
this.pd.setToolTipText(this.pd.startupPinTip);
this.pd.startupPinTip = null;
return true;
});
Clazz.defineMethod(c$, "get2DYLabel", 
function(isub, precision){
var spec = this.getSpectrumAt(0).getSubSpectra().get(isub);
return JU.DF.formatDecimalDbl(spec.getY2DPPM(), precision) + " PPM" + (spec.y2DUnits.equals("HZ") ? " (" + JU.DF.formatDecimalDbl(spec.getY2D(), precision) + " HZ) " : "");
}, "~N,~N");
Clazz.defineMethod(c$, "isOnSpectrum", 
function(xPixel, yPixel, index){
var xyCoords = null;
var isContinuous = true;
var isIntegral = (index < 0);
if (isIntegral) {
var ad = this.getDialog(JSV.common.Annotation.AType.Integration, -1);
if (ad == null) return false;
xyCoords = (ad.getData()).getXYCoords();
index = this.getFixedSelectedSpectrumIndex();
} else {
this.setScale(index);
var spec = this.spectra.get(index);
xyCoords = spec.xyCoords;
isContinuous = spec.isContinuous();
}var yOffset = index * Clazz.floatToInt(this.yPixels * (this.yStackOffsetPercent / 100));
var ix0 = this.viewData.getStartingPointIndex(index);
var ix1 = this.viewData.getEndingPointIndex(index);
if (isContinuous) {
for (var i = ix0; i < ix1; i++) {
var point1 = xyCoords[i];
var point2 = xyCoords[i + 1];
var x1 = this.toPixelX(point1.getXVal());
var x2 = this.toPixelX(point2.getXVal());
var y1 = (isIntegral ? this.toPixelYint(point1.getYVal()) : this.toPixelY(point1.getYVal()));
var y2 = (isIntegral ? this.toPixelYint(point2.getYVal()) : this.toPixelY(point2.getYVal()));
if (y1 == -2147483648 || y2 == -2147483648) continue;
y1 = this.fixY(y1) - yOffset;
y2 = this.fixY(y2) - yOffset;
if (JSV.common.GraphSet.isOnLine(xPixel, yPixel, x1, y1, x2, y2)) return true;
}
} else {
for (var i = ix0; i <= ix1; i++) {
var point = xyCoords[i];
var y2 = this.toPixelY(point.getYVal());
if (y2 == -2147483648) continue;
var x1 = this.toPixelX(point.getXVal());
var y1 = this.toPixelY(Math.max(this.getScale().minYOnScale, 0));
y1 = this.fixY(y1);
y2 = this.fixY(y2);
if (y1 == y2 && (y1 == this.yPixel0 || y1 == this.yPixel1)) continue;
if (JSV.common.GraphSet.isOnLine(xPixel, yPixel, x1, y1, x1, y2)) return true;
}
}return false;
}, "~N,~N,~N");
c$.distance = Clazz.defineMethod(c$, "distance", 
function(dx, dy){
return Math.sqrt(dx * dx + dy * dy);
}, "~N,~N");
c$.findCompatibleGraphSet = Clazz.defineMethod(c$, "findCompatibleGraphSet", 
function(graphSets, spec){
for (var i = 0; i < graphSets.size(); i++) if (JSV.common.Spectrum.areXScalesCompatible(spec, graphSets.get(i).getSpectrum(), false, false)) return graphSets.get(i);

return null;
}, "JU.Lst,JSV.common.Spectrum");
c$.isGoodEvent = Clazz.defineMethod(c$, "isGoodEvent", 
function(zOrP, p, asX){
return (p == null ? (Math.abs(zOrP.xPixel1 - zOrP.xPixel0) > 5 && Math.abs(zOrP.yPixel1 - zOrP.yPixel0) > 5) : asX ? Math.abs(zOrP.xPixel0 - p.xPixel0) > 5 : Math.abs(zOrP.yPixel0 - p.yPixel0) > 5);
}, "JSV.common.PlotWidget,JSV.common.PlotWidget,~B");
c$.isOnLine = Clazz.defineMethod(c$, "isOnLine", 
function(xPixel, yPixel, x1, y1, x2, y2){
var dx1 = Math.abs(x1 - xPixel);
if (dx1 < 2 && Math.abs(y1 - yPixel) < 2) return true;
var dx2 = x2 - xPixel;
if (Math.abs(dx2) < 2 && Math.abs(y2 - yPixel) < 2) return true;
var dy12 = y1 - y2;
if (Math.abs(dy12) > 2 && (y1 < yPixel) == (y2 < yPixel)) return false;
var dx12 = x1 - x2;
if (Math.abs(dx12) > 2 && (x1 < xPixel) == (x2 < xPixel)) return false;
return (JSV.common.GraphSet.distance(dx1, y1 - yPixel) + JSV.common.GraphSet.distance(dx2, yPixel - y2) < JSV.common.GraphSet.distance(dx12, dy12) + 2);
}, "~N,~N,~N,~N,~N,~N");
c$.setFractionalPositions = Clazz.defineMethod(c$, "setFractionalPositions", 
function(pd, graphSets, linkMode){
var n = graphSets.size();
var f = 0;
var n2d = 1;
var gs;
var y = 0;
pd.isLinked = (linkMode !== JSV.common.PanelData.LinkMode.NONE);
if (linkMode === JSV.common.PanelData.LinkMode.NONE) {
for (var i = 0; i < n; i++) {
gs = graphSets.get(i);
f += (gs.getSpectrumAt(0).is1D() ? 1 : n2d) * gs.nSplit;
}
f = 1 / f;
for (var i = 0; i < n; i++) {
gs = graphSets.get(i);
gs.isLinked = false;
var g = (gs.getSpectrumAt(0).is1D() ? f : n2d * f);
gs.fX0 = 0;
gs.fY0 = y;
gs.fracX = 1;
gs.fracY = g;
y += g * gs.nSplit;
}
} else {
var gs2d = null;
var i2d = -1;
if (n == 2 || n == 3) for (var i = 0; i < n; i++) {
gs = graphSets.get(i);
if (!gs.getSpectrum().is1D()) {
gs2d = gs;
if (i2d >= 0) i = -2;
i2d = i;
break;
}}
if (i2d == -2 || i2d == -1 && n != 2) {
JSV.common.GraphSet.setFractionalPositions(pd, graphSets, JSV.common.PanelData.LinkMode.NONE);
return;
}for (var i = 0; i < n; i++) {
gs = graphSets.get(i);
gs.isLinked = true;
var s1 = gs.getSpectrumAt(0);
var is1D = s1.is1D();
if (is1D) {
if (gs2d != null) {
var s2 = gs2d.getSpectrumAt(0);
if (JSV.common.Spectrum.areLinkableX(s1, s2)) gs.gs2dLinkedX = gs2d;
if (JSV.common.Spectrum.areLinkableY(s1, s2)) gs.gs2dLinkedY = gs2d;
}gs.fX0 = 0;
gs.fY0 = y;
gs.fracX = (gs2d == null ? 1 : 0.5);
gs.fracY = (n == 3 || gs2d == null ? 0.5 : 1);
y += 0.5;
} else {
gs.fX0 = 0.5;
gs.fY0 = 0;
gs.fracX = 0.5;
gs.fracY = 1;
}}
}}, "JSV.common.PanelData,JU.Lst,JSV.common.PanelData.LinkMode");
Clazz.defineMethod(c$, "addAnnotation", 
function(args, title){
if (args.size() == 0 || args.size() == 1 && args.get(0).equalsIgnoreCase("none")) {
this.annotations = null;
this.lastAnnotation = null;
return null;
}if (args.size() < 4 && this.lastAnnotation == null) this.lastAnnotation = this.getAnnotation((this.getScale().maxXOnScale + this.getScale().minXOnScale) / 2, (this.getScale().maxYOnScale + this.getScale().minYOnScale) / 2, title, false, false, 0, 0);
var annotation = this.getAnnotation(args, this.lastAnnotation);
if (annotation == null) return null;
if (this.annotations == null && args.size() == 1 && args.get(0).charAt(0) == '\"') {
var s = annotation.text;
this.getSpectrum().setTitle(s);
return s;
}this.lastAnnotation = annotation;
this.addAnnotation(annotation, false);
return null;
}, "JU.Lst,~S");
Clazz.defineMethod(c$, "addHighlight", 
function(x1, x2, spec, color){
if (spec == null) spec = this.getSpectrumAt(0);
var hl = Clazz.innerTypeInstance(JSV.common.GraphSet.Highlight, this, null, x1, x2, spec, (color == null ? this.pd.getColor(JSV.common.ScriptToken.HIGHLIGHTCOLOR) : color));
if (!this.highlights.contains(hl)) this.highlights.addLast(hl);
}, "~N,~N,JSV.common.Spectrum,javajs.api.GenericColor");
Clazz.defineMethod(c$, "addPeakHighlight", 
function(peakInfo){
for (var i = this.spectra.size(); --i >= 0; ) {
var spec = this.spectra.get(i);
this.removeAllHighlights(spec);
if (peakInfo == null || peakInfo.isClearAll() || spec !== peakInfo.spectrum) continue;
var peak = peakInfo.toString();
if (peak == null) {
continue;
}var xMin = JU.PT.getQuotedAttribute(peak, "xMin");
var xMax = JU.PT.getQuotedAttribute(peak, "xMax");
if (xMin == null || xMax == null) return;
var x1 = JU.PT.parseFloat(xMin);
var x2 = JU.PT.parseFloat(xMax);
if (Float.isNaN(x1) || Float.isNaN(x2)) return;
this.pd.addHighlight(this, x1, x2, spec, 200, 140, 140, 100);
spec.setSelectedPeak(peakInfo);
if (this.getScale().isInRangeX(x1) || this.getScale().isInRangeX(x2) || x1 < this.getScale().minX && this.getScale().maxX < x2) {
} else {
this.setZoomTo(0);
}}
}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "advanceSubSpectrum", 
function(dir){
var spec0 = this.getSpectrumAt(0);
var i = spec0.advanceSubSpectrum(dir);
if (spec0.isForcedSubset()) this.viewData.setXRangeForSubSpectrum(this.getSpectrum().getXYCoords());
this.pd.notifySubSpectrumChange(i, this.getSpectrum());
}, "~N");
Clazz.defineMethod(c$, "checkSpectrumClickedEvent", 
function(xPixel, yPixel, clickCount){
if (this.nextClickForSetPeak != null) return false;
if (clickCount > 1 || this.pendingMeasurement != null || !this.isInPlotRegion(xPixel, yPixel)) return false;
if (clickCount == 0) {
var isOnIntegral = this.isOnSpectrum(xPixel, yPixel, -1);
this.pd.integralShiftMode = (isOnIntegral ? this.getShiftMode(xPixel, yPixel) : 0);
this.pd.isIntegralDrag = (this.pd.integralShiftMode == 0 && (isOnIntegral || this.haveIntegralDisplayed(-1) && this.findMeasurement(this.getIntegrationGraph(-1), xPixel, yPixel, 0) != null));
if (this.pd.integralShiftMode != 0) return false;
}if (!this.showAllStacked) return false;
this.stackSelected = false;
for (var i = 0; i < this.nSpectra; i++) {
if (!this.isOnSpectrum(xPixel, yPixel, i)) continue;
this.setSpectrumClicked(this.iPreviousSpectrumClicked = i);
return false;
}
if (this.isDialogOpen()) return false;
this.setSpectrumClicked(-1);
return this.stackSelected = false;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "getShiftMode", 
function(xPixel, yPixel){
return (this.isStartEndIntegral(xPixel, false) ? yPixel : this.isStartEndIntegral(xPixel, true) ? -yPixel : 0);
}, "~N,~N");
Clazz.defineMethod(c$, "isDialogOpen", 
function(){
return (this.isVisible(this.getDialog(JSV.common.Annotation.AType.Integration, -1)) || this.isVisible(this.getDialog(JSV.common.Annotation.AType.Measurements, -1)) || this.isVisible(this.getDialog(JSV.common.Annotation.AType.PeakList, -1)));
});
Clazz.defineMethod(c$, "isStartEndIntegral", 
function(xPixel, isEnd){
return (isEnd ? this.xPixelPlot1 - xPixel < 20 : xPixel - this.xPixelPlot0 < 20);
}, "~N,~B");
Clazz.defineMethod(c$, "checkWidgetEvent", 
function(xPixel, yPixel, isPress){
if (!this.widgetsAreSet) return false;
this.widgetsAreSet = false;
var widget;
if (isPress) {
if (this.pd.clickCount == 2 && this.lastIntDragX != xPixel && !this.is2dClick(xPixel, yPixel)) {
if (this.pendingMeasurement == null) {
if (this.iSpectrumClicked == -1 && this.iPreviousSpectrumClicked >= 0) {
this.setSpectrumClicked(this.iPreviousSpectrumClicked);
}this.processPendingMeasurement(xPixel, yPixel, 2);
return true;
}} else if (!this.is2dClick(xPixel, yPixel)) {
if (this.isOnSpectrum(xPixel, yPixel, -1)) {
this.checkIntegral(this.toX(xPixel), NaN, false);
}if (this.lastIntDragX == xPixel) {
this.pd.isIntegralDrag = true;
if (!this.checkIntegral(this.toX(xPixel), this.toX(xPixel), false)) return false;
}}if (this.pendingMeasurement != null) return true;
widget = this.getPinSelected(xPixel, yPixel);
if (widget == null) {
yPixel = this.fixY(yPixel);
if (xPixel < this.xPixel1) {
if (this.pd.shiftPressed) this.setSpectrumClicked(this.iPreviousSpectrumClicked);
xPixel = this.fixX(xPixel);
if (this.zoomBox1D == null) this.newPins();
this.zoomBox1D.setX(this.toX(xPixel), xPixel);
this.zoomBox1D.yPixel0 = yPixel;
widget = this.zoomBox1D;
} else if (this.imageView != null && xPixel < this.imageView.xPixel1) {
this.zoomBox2D.setX(this.imageView.toX(xPixel), this.imageView.fixX(xPixel));
this.zoomBox2D.yPixel0 = yPixel;
widget = this.zoomBox2D;
}}this.pd.thisWidget = widget;
return false;
}this.nextClickForSetPeak = null;
widget = this.pd.thisWidget;
if (widget == null) return false;
if (widget === this.zoomBox1D) {
this.zoomBox1D.xPixel1 = this.fixX(xPixel);
this.zoomBox1D.yPixel1 = this.fixY(yPixel);
if (this.pd.isIntegralDrag && this.zoomBox1D.xPixel0 != this.zoomBox1D.xPixel1) {
if ((this.lastIntDragX <= xPixel) != (this.zoomBox1D.xPixel0 <= xPixel)) {
this.zoomBox1D.xPixel0 = this.lastIntDragX;
this.zoomBox1D.xPixel1 = xPixel;
this.zoomBox1D.setXVal(this.toX(this.zoomBox1D.xPixel0));
}this.lastIntDragX = xPixel;
this.checkIntegral(this.zoomBox1D.getXVal(), this.toX(this.zoomBox1D.xPixel1), false);
}return false;
}if (!this.zoomEnabled) return false;
if (widget === this.zoomBox2D) {
this.zoomBox2D.xPixel1 = this.imageView.fixX(xPixel);
this.zoomBox2D.yPixel1 = this.fixY(yPixel);
return true;
}if (widget === this.cur2Dy) {
yPixel = this.fixY(yPixel);
this.cur2Dy.yPixel0 = this.cur2Dy.yPixel1 = yPixel;
this.setCurrentSubSpectrum(this.imageView.toSubspectrumIndex(yPixel));
return true;
}if (widget === this.cur2Dx0 || widget === this.cur2Dx1) {
return false;
}if (widget === this.pin1Dx0 || widget === this.pin1Dx1 || widget === this.pin1Dx01) {
xPixel = this.fixX(xPixel);
widget.setX(this.toX0(xPixel), xPixel);
if (widget === this.pin1Dx01) {
var dp = xPixel - (Clazz.doubleToInt((this.pin1Dx0.xPixel0 + this.pin1Dx1.xPixel0) / 2));
var dp1 = (dp < 0 ? dp : dp);
var dp2 = (dp < 0 ? dp : dp);
xPixel = this.pin1Dx0.xPixel0 + dp2;
var xPixel1 = this.pin1Dx1.xPixel0 + dp1;
if (dp == 0 || this.fixX(xPixel) != xPixel || this.fixX(xPixel1) != xPixel1) return true;
this.pin1Dx0.setX(this.toX0(xPixel), xPixel);
this.pin1Dx1.setX(this.toX0(xPixel1), xPixel1);
}this.doZoom(this.pin1Dx0.getXVal(), 0, this.pin1Dx1.getXVal(), 0, true, false, false, true, false);
return true;
}if (widget === this.pin1Dy0 || widget === this.pin1Dy1 || widget === this.pin1Dy01) {
yPixel = this.fixY(yPixel);
widget.setY(this.toY0(yPixel), yPixel);
if (widget === this.pin1Dy01) {
var dp = yPixel - Clazz.doubleToInt((this.pin1Dy0.yPixel0 + this.pin1Dy1.yPixel0) / 2) + 1;
yPixel = this.pin1Dy0.yPixel0 + dp;
var yPixel1 = this.pin1Dy1.yPixel0 + dp;
var y0 = this.toY0(yPixel);
var y1 = this.toY0(yPixel1);
if (Math.min(y0, y1) == this.getScale().minY || Math.max(y0, y1) == this.getScale().maxY) return true;
this.pin1Dy0.setY(y0, yPixel);
this.pin1Dy1.setY(y1, yPixel1);
}this.doZoom(0, this.pin1Dy0.getYVal(), 0, this.pin1Dy1.getYVal(), this.imageView == null, this.imageView == null, false, false, false);
return true;
}if (widget === this.pin2Dx0 || widget === this.pin2Dx1 || widget === this.pin2Dx01) {
xPixel = this.imageView.fixX(xPixel);
widget.setX(this.imageView.toX0(xPixel), xPixel);
if (widget === this.pin2Dx01) {
var dp = xPixel - Clazz.doubleToInt((this.pin2Dx0.xPixel0 + this.pin2Dx1.xPixel0) / 2) + 1;
xPixel = this.pin2Dx0.xPixel0 + dp;
var xPixel1 = this.pin2Dx1.xPixel0 + dp;
if (this.imageView.fixX(xPixel) != xPixel || this.imageView.fixX(xPixel1) != xPixel1) return true;
this.pin2Dx0.setX(this.imageView.toX0(xPixel), xPixel);
this.pin2Dx1.setX(this.imageView.toX0(xPixel1), xPixel1);
}if (!JSV.common.GraphSet.isGoodEvent(this.pin2Dx0, this.pin2Dx1, true)) {
this.reset2D(true);
return true;
}this.imageView.setView0(this.pin2Dx0.xPixel0, this.pin2Dy0.yPixel0, this.pin2Dx1.xPixel0, this.pin2Dy1.yPixel0);
this.doZoom(this.pin2Dx0.getXVal(), this.getScale().minY, this.pin2Dx1.getXVal(), this.getScale().maxY, false, false, false, true, false);
return true;
}if (widget === this.pin2Dy0 || widget === this.pin2Dy1 || widget === this.pin2Dy01) {
yPixel = this.fixY(yPixel);
widget.setY(this.imageView.toSubspectrumIndex(yPixel), yPixel);
if (widget === this.pin2Dy01) {
var dp = yPixel - Clazz.doubleToInt((this.pin2Dy0.yPixel0 + this.pin2Dy1.yPixel0) / 2) + 1;
yPixel = this.pin2Dy0.yPixel0 + dp;
var yPixel1 = this.pin2Dy1.yPixel0 + dp;
if (yPixel != this.fixY(yPixel) || yPixel1 != this.fixY(yPixel1)) return true;
this.pin2Dy0.setY(this.imageView.toSubspectrumIndex(yPixel), yPixel);
this.pin2Dy1.setY(this.imageView.toSubspectrumIndex(yPixel1), yPixel1);
}if (!JSV.common.GraphSet.isGoodEvent(this.pin2Dy0, this.pin2Dy1, false)) {
this.reset2D(false);
return true;
}this.imageView.setView0(this.pin2Dx0.xPixel0, this.pin2Dy0.yPixel0, this.pin2Dx1.xPixel1, this.pin2Dy1.yPixel1);
return true;
}return false;
}, "~N,~N,~B");
Clazz.defineMethod(c$, "clearIntegrals", 
function(){
this.checkIntegral(NaN, 0, false);
});
Clazz.defineMethod(c$, "clearMeasurements", 
function(){
this.removeDialog(this.getFixedSelectedSpectrumIndex(), JSV.common.Annotation.AType.Measurements);
});
c$.createGraphSetsAndSetLinkMode = Clazz.defineMethod(c$, "createGraphSetsAndSetLinkMode", 
function(pd, jsvp, spectra, startIndex, endIndex, linkMode){
var graphSets =  new JU.Lst();
for (var i = 0; i < spectra.size(); i++) {
var spec = spectra.get(i);
var graphSet = (linkMode === JSV.common.PanelData.LinkMode.NONE ? JSV.common.GraphSet.findCompatibleGraphSet(graphSets, spec) : null);
if (graphSet == null) graphSets.addLast(graphSet =  new JSV.common.GraphSet(jsvp.getPanelData()));
graphSet.addSpec(spec);
}
JSV.common.GraphSet.setFractionalPositions(pd, graphSets, linkMode);
for (var i = graphSets.size(); --i >= 0; ) {
graphSets.get(i).initGraphSet(startIndex, endIndex);
JU.Logger.info("JSVGraphSet " + (i + 1) + " nSpectra = " + graphSets.get(i).nSpectra);
}
return graphSets;
}, "JSV.common.PanelData,JSV.api.JSVPanel,JU.Lst,~N,~N,JSV.common.PanelData.LinkMode");
Clazz.defineMethod(c$, "drawGraphSet", 
function(gMain, gFront, gBack, width, height, left, right, top, bottom, isResized, taintedAll, pointsOnly){
this.zoomEnabled = this.pd.getBoolean(JSV.common.ScriptToken.ENABLEZOOM);
this.isPrintingOrSaving = this.pd.isPrinting || this.pd.creatingImage;
this.height = (height - (this.pd.isPrinting ? 20 : this.pd.creatingImage ? 0 : 0)) * this.pd.scalingFactor;
this.width = width * this.pd.scalingFactor;
this.left = left * this.pd.scalingFactor;
this.right = right * this.pd.scalingFactor;
this.top = top * this.pd.scalingFactor;
this.bottom = bottom * this.pd.scalingFactor;
this.$haveSelectedSpectrum = false;
this.selectedSpectrumIntegrals = null;
this.selectedSpectrumMeasurements = null;
if (!this.isPrintingOrSaving && this.widgets != null) for (var j = 0; j < this.widgets.length; j++) if (this.widgets[j] != null) this.widgets[j].isVisible = false;

for (var iSplit = 0; iSplit < this.nSplit; iSplit++) {
this.drawAll(gMain, gFront, gBack, iSplit, isResized || this.nSplit > 1, taintedAll, pointsOnly);
}
this.setPositionForFrame(this.nSplit > 1 ? this.pd.currentSplitPoint : 0);
}, "~O,~O,~O,~N,~N,~N,~N,~N,~N,~B,~B,~B");
Clazz.defineMethod(c$, "escapeKeyPressed", 
function(isDEL){
if (this.zoomBox1D != null) this.zoomBox1D.xPixel0 = this.zoomBox1D.xPixel1 = 0;
if (this.zoomBox2D != null) this.zoomBox2D.xPixel0 = this.zoomBox2D.xPixel1 = 0;
if (!this.inPlotMove) return;
if (this.pendingMeasurement != null) {
this.pendingMeasurement = null;
return;
}this.pd.thisWidget = null;
this.pendingMeasurement = null;
if (this.selectedSpectrumMeasurements != null && this.selectedMeasurement != null) {
if (isDEL) this.selectedSpectrumMeasurements.clear(this.getScale().minXOnScale, this.getScale().maxXOnScale);
 else this.selectedSpectrumMeasurements.removeObj(this.selectedMeasurement);
this.selectedMeasurement = null;
this.updateDialog(JSV.common.Annotation.AType.Measurements, -1);
}if (this.selectedSpectrumIntegrals != null && this.selectedIntegral != null) {
if (isDEL) this.selectedSpectrumIntegrals.clear(this.getScale().minXOnScale, this.getScale().maxXOnScale);
 else this.selectedSpectrumIntegrals.removeObj(this.selectedIntegral);
this.selectedIntegral = null;
this.updateDialog(JSV.common.Annotation.AType.Integration, -1);
}}, "~B");
c$.findGraphSet = Clazz.defineMethod(c$, "findGraphSet", 
function(graphSets, xPixel, yPixel){
for (var i = graphSets.size(); --i >= 0; ) if (graphSets.get(i).hasPoint(xPixel, yPixel)) return graphSets.get(i);

return null;
}, "JU.Lst,~N,~N");
Clazz.defineMethod(c$, "findMatchingPeakInfo", 
function(pi){
var pi2 = null;
for (var i = 0; i < this.spectra.size(); i++) if ((pi2 = (this.spectra.get(i)).findMatchingPeakInfo(pi)) != null) break;

return pi2;
}, "JSV.common.PeakInfo");
Clazz.defineMethod(c$, "getCurrentSpectrumIndex", 
function(){
return (this.nSpectra == 1 ? 0 : this.iSpectrumSelected);
});
Clazz.defineMethod(c$, "getSelectedIntegral", 
function(){
return this.selectedIntegral;
});
Clazz.defineMethod(c$, "getShowAnnotation", 
function(type, i){
var id = this.getDialog(type, i);
return (id != null && id.getState());
}, "JSV.common.Annotation.AType,~N");
Clazz.defineMethod(c$, "hasFileLoaded", 
function(filePath){
for (var i = this.spectra.size(); --i >= 0; ) if (this.spectra.get(i).getFilePathForwardSlash().equals(filePath)) return true;

return false;
}, "~S");
Clazz.defineMethod(c$, "haveSelectedSpectrum", 
function(){
return this.$haveSelectedSpectrum;
});
Clazz.defineMethod(c$, "mouseClickedEvent", 
function(xPixel, yPixel, clickCount, isControlDown){
this.selectedMeasurement = null;
this.selectedIntegral = null;
var isNextClick = this.nextClickForSetPeak;
this.nextClickForSetPeak = null;
if (this.checkArrowUpDownClick(xPixel, yPixel) || this.checkArrowLeftRightClick(xPixel, yPixel)) return;
this.lastClickX = NaN;
this.lastPixelX = 2147483647;
if (this.isSplitWidget(xPixel, yPixel)) {
this.splitStack(this.nSplit == 1);
return;
}if (this.isCloserWidget(xPixel, yPixel)) {
this.pd.closeSpectrum();
return;
}var pw = this.getPinSelected(xPixel, yPixel);
if (pw != null) {
this.setWidgetValueByUser(pw);
return;
}var is2D = this.is2dClick(xPixel, yPixel);
if (clickCount == 2 && this.iSpectrumClicked == -1 && this.iPreviousSpectrumClicked >= 0) {
this.setSpectrumClicked(this.iPreviousSpectrumClicked);
}if (!is2D && isControlDown) {
this.setSpectrumClicked(this.iPreviousSpectrumClicked);
if (this.pendingMeasurement != null) {
this.processPendingMeasurement(xPixel, yPixel, -3);
} else if (this.iSpectrumClicked >= 0) {
this.processPendingMeasurement(xPixel, yPixel, 3);
}return;
}this.lastXMax = NaN;
if (clickCount == 2) {
if (is2D) {
if (this.sticky2Dcursor) {
this.addAnnotation(this.getAnnotation(this.imageView.toX(xPixel), this.imageView.toSubspectrumIndex(yPixel), this.pd.coordStr, false, true, 5, 5), true);
}this.sticky2Dcursor = true;
this.set2DCrossHairs(xPixel, yPixel);
return;
}if (this.isInTopBar(xPixel, yPixel)) {
this.doZoom(this.toX0(this.xPixel0), 0, this.toX0(this.xPixel1), 0, true, false, false, true, true);
} else if (this.isInRightBar(xPixel, yPixel)) {
this.doZoom(this.getScale().minXOnScale, this.viewList.get(0).getScale().minYOnScale, this.getScale().maxXOnScale, this.viewList.get(0).getScale().maxYOnScale, true, true, false, false, false);
} else if (this.isInTopBar2D(xPixel, yPixel)) {
this.reset2D(true);
} else if (this.isInRightBar2D(xPixel, yPixel)) {
this.reset2D(false);
} else if (this.pendingMeasurement != null) {
this.processPendingMeasurement(xPixel, yPixel, -2);
} else if (this.iSpectrumClicked >= 0) {
this.processPendingMeasurement(xPixel, yPixel, 2);
}return;
}if (is2D) {
if (this.annotations != null) {
var xy =  new JSV.common.Coordinate().set(this.imageView.toX(xPixel), this.imageView.toSubspectrumIndex(yPixel));
var a = this.findAnnotation2D(xy);
if (a != null && this.setAnnotationText(a)) {
return;
}}if (clickCount == 1) this.sticky2Dcursor = false;
this.set2DCrossHairs(xPixel, yPixel);
return;
}if (this.isInPlotRegion(xPixel, yPixel)) {
if (this.selectedSpectrumIntegrals != null && this.checkIntegralNormalizationClick(xPixel, yPixel)) return;
if (this.pendingMeasurement != null) {
this.processPendingMeasurement(xPixel, yPixel, 1);
return;
}this.setCoordClicked(xPixel, this.toX(xPixel), this.toY(yPixel));
this.updateDialog(JSV.common.Annotation.AType.PeakList, -1);
if (isNextClick != null) {
this.nextClickForSetPeak = isNextClick;
this.shiftSpectrum(4, NaN, NaN);
this.nextClickForSetPeak = null;
return;
}} else {
this.setCoordClicked(0, NaN, 0);
}this.pd.notifyPeakPickedListeners(null);
}, "~N,~N,~N,~B");
Clazz.defineMethod(c$, "is2dClick", 
function(xPixel, yPixel){
return (this.imageView != null && xPixel == this.imageView.fixX(xPixel) && yPixel == this.fixY(yPixel));
}, "~N,~N");
Clazz.defineMethod(c$, "updateDialog", 
function(type, iSpec){
var ad = this.getDialog(type, iSpec);
if (ad == null || !this.isVisible(ad)) return;
var xRange = this.toX(this.xPixel1) - this.toX(this.xPixel0);
var yOffset = (this.getSpectrum().isInverted() ? this.yPixel1 - this.pd.mouseY : this.pd.mouseY - this.yPixel0);
(ad).update(this.pd.coordClicked, xRange, yOffset);
}, "JSV.common.Annotation.AType,~N");
Clazz.defineMethod(c$, "isVisible", 
function(ad){
return (JSV.common.GraphSet.isDialog(ad) && ad.isVisible());
}, "JSV.api.AnnotationData");
Clazz.defineMethod(c$, "mousePressedEvent", 
function(xPixel, yPixel, clickCount){
this.checkWidgetEvent(xPixel, yPixel, true);
}, "~N,~N,~N");
Clazz.defineMethod(c$, "mouseReleasedEvent", 
function(xPixel, yPixel){
if (this.pendingMeasurement != null) {
if (Math.abs(this.toPixelX(this.pendingMeasurement.getXVal()) - xPixel) < 2) this.pendingMeasurement = null;
this.processPendingMeasurement(xPixel, yPixel, -2);
this.setToolTipForPixels(xPixel, yPixel);
return;
}if (this.pd.integralShiftMode != 0) {
this.pd.integralShiftMode = 0;
this.zoomBox1D.xPixel1 = this.zoomBox1D.xPixel0;
return;
}if (this.iSpectrumMovedTo >= 0) this.setScale(this.iSpectrumMovedTo);
var thisWidget = this.pd.thisWidget;
if (this.pd.isIntegralDrag) {
if (JSV.common.GraphSet.isGoodEvent(this.zoomBox1D, null, true)) {
this.checkIntegral(this.toX(this.zoomBox1D.xPixel0), this.toX(this.zoomBox1D.xPixel1), true);
}this.zoomBox1D.xPixel1 = this.zoomBox1D.xPixel0 = 0;
this.pendingIntegral = null;
this.pd.isIntegralDrag = false;
} else if (thisWidget === this.zoomBox2D) {
if (!JSV.common.GraphSet.isGoodEvent(this.zoomBox2D, null, true)) return;
this.imageView.setZoom(this.zoomBox2D.xPixel0, this.zoomBox2D.yPixel0, this.zoomBox2D.xPixel1, this.zoomBox2D.yPixel1);
this.zoomBox2D.xPixel1 = this.zoomBox2D.xPixel0;
this.doZoom(this.imageView.toX(this.imageView.xPixel0), this.getScale().minY, this.imageView.toX(this.imageView.xPixel0 + this.imageView.xPixels - 1), this.getScale().maxY, false, false, false, true, true);
} else if (thisWidget === this.zoomBox1D) {
if (!JSV.common.GraphSet.isGoodEvent(this.zoomBox1D, null, true)) return;
var x1 = this.zoomBox1D.xPixel1;
var doY = (this.pd.shiftPressed);
this.doZoom(this.toX(this.zoomBox1D.xPixel0), (doY ? this.toY(this.zoomBox1D.yPixel0) : 0), this.toX(x1), (doY ? this.toY(this.zoomBox1D.yPixel1) : 0), true, doY, true, true, true);
this.zoomBox1D.xPixel1 = this.zoomBox1D.xPixel0;
} else if (thisWidget === this.pin1Dx0 || thisWidget === this.pin1Dx1 || thisWidget === this.cur2Dx0 || thisWidget === this.cur2Dx1) {
this.addCurrentZoom();
}}, "~N,~N");
Clazz.defineMethod(c$, "mouseMovedEvent", 
function(xPixel, yPixel){
if (xPixel == 2147483647) {
this.iSpectrumMovedTo = -1;
this.piMouseOver = null;
return null;
}if (this.nSpectra > 1) {
var iFrame = this.getSplitPoint(yPixel);
this.setPositionForFrame(iFrame);
this.setSpectrumMovedTo(this.nSplit > 1 ? iFrame : this.iSpectrumSelected);
if (this.iSpectrumMovedTo >= 0) this.setScale(this.iSpectrumMovedTo);
} else {
this.iSpectrumMovedTo = this.iSpectrumSelected = 0;
}this.inPlotMove = this.isInPlotRegion(xPixel, yPixel);
this.setXPixelMovedTo(1.7976931348623157E308, 1.7976931348623157E308, (this.inPlotMove ? xPixel : -1), -1);
if (this.inPlotMove) {
this.xValueMovedTo = this.toX(this.xPixelMovedTo);
this.yValueMovedTo = this.getSpectrum().getYValueAt(this.xValueMovedTo);
}if (this.pd.integralShiftMode != 0) {
var ad = this.getDialog(JSV.common.Annotation.AType.Integration, -1);
var xy = (ad.getData()).getXYCoords();
var y = xy[this.pd.integralShiftMode > 0 ? xy.length - 1 : 0].getYVal();
(ad.getData()).shiftY(this.pd.integralShiftMode, this.toPixelYint(y) + yPixel - (this.pd.integralShiftMode > 0 ? this.yPixelPlot1 : this.yPixelPlot0), this.yPixel0, this.yPixels);
} else if (this.pd.isIntegralDrag) {
} else if (this.pendingMeasurement != null) {
this.processPendingMeasurement(xPixel, yPixel, 0);
this.setToolTipForPixels(xPixel, yPixel);
} else {
this.selectedMeasurement = (this.inPlotMove && this.selectedSpectrumMeasurements != null ? this.findMeasurement(this.selectedSpectrumMeasurements, xPixel, yPixel, 0) : null);
this.selectedIntegral = null;
if (this.inPlotMove && this.selectedSpectrumIntegrals != null && this.selectedMeasurement == null) {
this.selectedIntegral = this.findMeasurement(this.selectedSpectrumIntegrals, xPixel, yPixel, 0);
if (this.selectedIntegral == null) this.selectedIntegral = this.findMeasurement(this.selectedSpectrumIntegrals, xPixel, yPixel, -5);
}this.setToolTipForPixels(xPixel, yPixel);
if (this.imageView == null) {
this.piMouseOver = null;
var iSpec = (this.nSplit > 1 ? this.iSpectrumMovedTo : this.iSpectrumClicked);
if (!this.isDrawNoSpectra() && iSpec >= 0) {
var spec = this.spectra.get(iSpec);
if (spec.getPeakList() != null) {
this.coordTemp.setXVal(this.toX(xPixel));
this.coordTemp.setYVal(this.toY(yPixel));
this.piMouseOver = spec.findPeakByCoord(xPixel, this.coordTemp);
}}} else {
if (!this.pd.display1D && this.sticky2Dcursor) {
this.set2DCrossHairs(xPixel, yPixel);
}}}return this.piMouseOver;
}, "~N,~N");
Clazz.defineMethod(c$, "nextView", 
function(){
if (this.currentZoomIndex + 1 < this.viewList.size()) this.setZoomTo(this.currentZoomIndex + 1);
});
Clazz.defineMethod(c$, "previousView", 
function(){
if (this.currentZoomIndex > 0) this.setZoomTo(this.currentZoomIndex - 1);
});
Clazz.defineMethod(c$, "resetView", 
function(){
this.setZoomTo(0);
});
Clazz.defineMethod(c$, "removeAllHighlights", 
function(){
this.removeAllHighlights(null);
});
Clazz.defineMethod(c$, "removeHighlight", 
function(index){
this.highlights.removeItemAt(index);
}, "~N");
Clazz.defineMethod(c$, "removeHighlight", 
function(x1, x2){
for (var i = this.highlights.size(); --i >= 0; ) {
var h = this.highlights.get(i);
if (h.x1 == x1 && h.x2 == x2) this.highlights.removeItemAt(i);
}
}, "~N,~N");
Clazz.defineMethod(c$, "scaleYBy", 
function(factor){
if (this.imageView == null && !this.zoomEnabled) return;
this.viewData.scaleSpectrum(this.imageView == null ? this.iSpectrumSelected : -2, factor);
if (this.imageView != null) {
this.update2dImage(false);
this.resetPinsFromView();
}this.pd.refresh();
}, "~N");
Clazz.defineMethod(c$, "selectSpectrum", 
function(filePath, type, model){
var haveFound = false;
for (var i = this.spectra.size(); --i >= 0; ) if ((filePath == null || this.getSpectrumAt(i).getFilePathForwardSlash().equals(filePath)) && (this.getSpectrumAt(i).matchesPeakTypeModel(type, model))) {
this.setSpectrumSelected(i);
if (this.nSplit > 1) this.splitStack(true);
haveFound = true;
}
if (this.nSpectra > 1 && !haveFound && this.iSpectrumSelected >= 0 && !this.pd.isCurrentGraphSet(this)) this.setSpectrumSelected(-2147483648);
return haveFound;
}, "~S,~S,~S");
Clazz.defineMethod(c$, "selectPeakByFileIndex", 
function(filePath, index, atomKey){
var pi;
for (var i = this.spectra.size(); --i >= 0; ) if ((pi = this.getSpectrumAt(i).selectPeakByFileIndex(filePath, index, atomKey)) != null) return pi;

return null;
}, "~S,~S,~S");
Clazz.defineMethod(c$, "setSelected", 
function(i){
if (i < 0) {
this.bsSelected.clearAll();
this.setSpectrumClicked(-1);
return;
}this.bsSelected.set(i);
this.setSpectrumClicked((this.bsSelected.cardinality() == 1 ? i : -1));
if (this.nSplit > 1 && i >= 0) this.pd.currentSplitPoint = i;
}, "~N");
Clazz.defineMethod(c$, "setSelectedIntegral", 
function(val){
var spec = this.selectedIntegral.getSpectrum();
this.getIntegrationGraph(this.getSpectrumIndex(spec)).setSelectedIntegral(this.selectedIntegral, val);
}, "~N");
Clazz.defineMethod(c$, "setShowAnnotation", 
function(type, tfToggle){
var ad = this.getDialog(type, -1);
if (ad == null) {
if (tfToggle != null && tfToggle !== Boolean.TRUE) return;
if (type === JSV.common.Annotation.AType.PeakList || type === JSV.common.Annotation.AType.Integration || type === JSV.common.Annotation.AType.Measurements) this.pd.showDialog(type);
return;
}if (tfToggle == null) {
if (JSV.common.GraphSet.isDialog(ad)) (ad).setVisible(!(ad).isVisible());
 else this.pd.showDialog(type);
return;
}var isON = tfToggle.booleanValue();
if (isON) ad.setState(isON);
if (isON || JSV.common.GraphSet.isDialog(ad)) this.pd.showDialog(type);
if (!isON && JSV.common.GraphSet.isDialog(ad)) (ad).setVisible(false);
}, "JSV.common.Annotation.AType,Boolean");
Clazz.defineMethod(c$, "checkIntegralParams", 
function(parameters, value){
var spec = this.getSpectrum();
if (!spec.canIntegrate() || this.reversePlot) return false;
var iSpec = this.getFixedSelectedSpectrumIndex();
var ad = this.getDialog(JSV.common.Annotation.AType.Integration, -1);
if (value == null) return true;
switch (JSV.common.IntegralData.IntMode.getMode(value.toUpperCase())) {
case JSV.common.IntegralData.IntMode.NA:
return false;
case JSV.common.IntegralData.IntMode.CLEAR:
this.integrate(iSpec, null);
this.integrate(iSpec, parameters);
break;
case JSV.common.IntegralData.IntMode.ON:
if (ad == null) this.integrate(iSpec, parameters);
 else ad.setState(true);
break;
case JSV.common.IntegralData.IntMode.OFF:
if (ad != null) ad.setState(false);
break;
case JSV.common.IntegralData.IntMode.TOGGLE:
if (ad == null) this.integrate(iSpec, parameters);
 else ad.setState(!ad.getState());
break;
case JSV.common.IntegralData.IntMode.AUTO:
if (ad == null) {
this.checkIntegralParams(parameters, "ON");
ad = this.getDialog(JSV.common.Annotation.AType.Integration, -1);
}if (ad != null) (ad.getData()).autoIntegrate();
break;
case JSV.common.IntegralData.IntMode.LIST:
this.pd.showDialog(JSV.common.Annotation.AType.Integration);
break;
case JSV.common.IntegralData.IntMode.MARK:
if (ad == null) {
this.checkIntegralParams(parameters, "ON");
ad = this.getDialog(JSV.common.Annotation.AType.Integration, -1);
}if (ad != null) (ad.getData()).addMarks(value.substring(4).trim());
break;
case JSV.common.IntegralData.IntMode.MIN:
if (ad != null) {
try {
var val = Double.parseDouble(JSV.common.ScriptToken.getTokens(value).get(1));
(ad.getData()).setMinimumIntegral(val);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}break;
case JSV.common.IntegralData.IntMode.UPDATE:
if (ad != null) (ad.getData()).update(parameters);
}
this.updateDialog(JSV.common.Annotation.AType.Integration, -1);
return true;
}, "JSV.common.Parameters,~S");
Clazz.defineMethod(c$, "setSpectrum", 
function(iSpec, fromSplit){
if (fromSplit && this.nSplit > 1) {
if (this.nSplit > 1) this.setSpectrumClicked(iSpec);
} else {
this.setSpectrumClicked(iSpec);
this.stackSelected = false;
this.showAllStacked = false;
}if (iSpec >= 0) this.dialogsToFront(this.getSpectrum());
}, "~N,~B");
Clazz.defineMethod(c$, "setSpectrumJDX", 
function(spec){
var pt = this.getFixedSelectedSpectrumIndex();
this.spectra.removeItemAt(pt);
this.spectra.add(pt, spec);
this.pendingMeasurement = null;
this.clearViews();
this.viewData.newSpectrum(this.spectra);
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "setZoom", 
function(x1, y1, x2, y2){
this.setZoomTo(0);
if (x1 == 0 && x2 == 0 && y1 == 0 && y2 == 0) {
this.newPins();
this.imageView = null;
x1 = this.getScale().minXOnScale;
x2 = this.getScale().maxXOnScale;
} else {
this.doZoom(x1, y1, x2, y2, true, (y1 != y2), false, true, true);
}}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "shiftSpectrum", 
function(mode, xOld, xNew){
var spec = this.getSpectrum();
if (!spec.isNMR() || !spec.is1D()) return false;
var ok = null;
var dx = 0;
if (xNew == 1.7976931348623157E308) {
dx = -spec.addSpecShift(0);
} else {
switch (mode) {
case 3:
dx = xNew;
break;
case 1:
case 2:
this.nextClickMode = mode;
if (Double.isNaN(xOld)) {
ok = this.pd.getInput("Click on " + (mode == 1 ? "or beside a peak to set its chemical shift" : "the spectrum set the chemical shift at that point") + (xNew == -2147483648 ? "" : " to " + xNew) + ".", "Set Reference " + (mode == 1 ? "for Peak" : "at Point"), "OK");
this.nextClickForSetPeak = ("OK".equals(ok) ? Double.$valueOf(xNew) : null);
return false;
}this.nextClickForSetPeak = null;
case 4:
if (this.nextClickForSetPeak != null) {
xNew = this.nextClickForSetPeak.doubleValue();
this.nextClickForSetPeak = null;
}if (Double.isNaN(xOld)) xOld = this.lastClickX;
if (this.nextClickMode == 1) xOld = this.getNearestPeak(spec, xOld, this.toY(this.pd.mouseY));
if (Double.isNaN(xNew)) try {
var s = this.pd.getInput("New chemical shift (set blank to reset)", "Set Reference", JU.DF.formatDecimalDbl(xOld, this.getScale().precision[0])).trim();
if (s.length == 0) xNew = xOld - spec.addSpecShift(0);
 else xNew = Double.parseDouble(s);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return false;
} else {
throw e;
}
}
dx = xNew - xOld;
break;
}
}if (dx == 0) return false;
spec.addSpecShift(dx);
if (this.annotations != null) for (var i = this.annotations.size(); --i >= 0; ) if (this.annotations.get(i).spec === spec) this.annotations.get(i).addSpecShift(dx);

if (this.dialogs != null) for (var e, $e = this.dialogs.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) if (e.getValue().getSpectrum() === spec) e.getValue().setSpecShift(dx);

this.getScale().addSpecShift(dx);
if (!Double.isNaN(this.lastClickX)) this.lastClickX += dx;
this.updateDialogs();
this.doZoom(0, this.getScale().minYOnScale, 0, this.getScale().maxYOnScale, true, true, false, true, false);
this.pd.setTaintedAll();
this.pd.repaint();
return true;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "toPeak", 
function(istep){
istep *= (this.drawXAxisLeftToRight ? 1 : -1);
if (Double.isNaN(this.lastClickX)) this.lastClickX = this.lastPixelX = 0;
var spec = this.getSpectrum();
var coord = this.setCoordClicked(this.lastPixelX, this.lastClickX, 0);
var iPeak = spec.setNextPeak(coord, istep);
if (iPeak < 0) return;
var peak = spec.getPeakList().get(iPeak);
spec.setSelectedPeak(peak);
this.setCoordClicked(peak.getXPixel(), peak.getX(), 0);
this.pd.notifyPeakPickedListeners( new JSV.common.PeakPickEvent(this.jsvp, this.pd.coordClicked, peak));
}, "~N");
Clazz.defineMethod(c$, "scaleSelectedBy", 
function(f){
for (var i = this.bsSelected.nextSetBit(0); i >= 0; i = this.bsSelected.nextSetBit(i + 1)) this.viewData.scaleSpectrum(i, f);

}, "~N");
Clazz.overrideMethod(c$, "toString", 
function(){
return "gs: " + this.nSpectra + " " + this.spectra + " " + this.spectra.get(0).getFilePath();
});
Clazz.defineMethod(c$, "setXPointer", 
function(spec, x){
if (spec != null) this.setSpectrumClicked(this.getSpectrumIndex(spec));
this.xValueMovedTo = this.lastClickX = x;
this.lastPixelX = this.toPixelX(x);
this.setXPixelMovedTo(x, 1.7976931348623157E308, 0, 0);
this.yValueMovedTo = NaN;
}, "JSV.common.Spectrum,~N");
Clazz.defineMethod(c$, "setXPointer2", 
function(spec, x){
if (spec != null) this.setSpectrumClicked(this.getSpectrumIndex(spec));
this.setXPixelMovedTo(1.7976931348623157E308, x, 0, 0);
}, "JSV.common.Spectrum,~N");
Clazz.defineMethod(c$, "hasCurrentMeasurement", 
function(type){
return ((type === JSV.common.Annotation.AType.Integration ? this.selectedSpectrumIntegrals : this.selectedSpectrumMeasurements) != null);
}, "JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "getDialog", 
function(type, iSpec){
if (iSpec == -1) iSpec = this.getCurrentSpectrumIndex();
return (this.dialogs == null || iSpec < 0 ? null : this.dialogs.get(type + "_" + iSpec));
}, "JSV.common.Annotation.AType,~N");
Clazz.defineMethod(c$, "removeDialog", 
function(iSpec, type){
if (this.dialogs != null && iSpec >= 0) this.dialogs.remove(type + "_" + iSpec);
}, "~N,JSV.common.Annotation.AType");
Clazz.defineMethod(c$, "addDialog", 
function(iSpec, type, dialog){
if (this.dialogs == null) this.dialogs =  new java.util.Hashtable();
var key = type + "_" + iSpec;
dialog.setGraphSetKey(key);
this.dialogs.put(key, dialog);
return dialog;
}, "~N,JSV.common.Annotation.AType,JSV.api.AnnotationData");
Clazz.defineMethod(c$, "removeDialog", 
function(dialog){
var key = dialog.getGraphSetKey();
this.dialogs.remove(key);
var data = dialog.getData();
if (data != null) this.dialogs.put(key, data);
}, "JSV.dialog.JSVDialog");
Clazz.defineMethod(c$, "getPeakListing", 
function(iSpec, p, forceNew){
if (iSpec < 0) iSpec = this.getCurrentSpectrumIndex();
if (iSpec < 0) return null;
var dialog = this.getDialog(JSV.common.Annotation.AType.PeakList, -1);
if (dialog == null) {
if (!forceNew) return null;
this.addDialog(iSpec, JSV.common.Annotation.AType.PeakList, dialog =  new JSV.common.PeakData(JSV.common.Annotation.AType.PeakList, this.getSpectrum()));
}(dialog.getData()).setPeakList(p, -2147483648, this.viewData.getScale());
if (JSV.common.GraphSet.isDialog(dialog)) (dialog).setFields();
return dialog.getData();
}, "~N,JSV.common.Parameters,~B");
Clazz.defineMethod(c$, "setPeakListing", 
function(tfToggle){
var dialog = this.getDialog(JSV.common.Annotation.AType.PeakList, -1);
var ad = (JSV.common.GraphSet.isDialog(dialog) ? dialog : null);
var isON = (tfToggle == null ? ad == null || !ad.isVisible() : tfToggle.booleanValue());
if (isON) {
this.pd.showDialog(JSV.common.Annotation.AType.PeakList);
} else if (JSV.common.GraphSet.isDialog(dialog)) {
(dialog).setVisible(false);
}}, "Boolean");
Clazz.defineMethod(c$, "haveIntegralDisplayed", 
function(i){
var ad = this.getDialog(JSV.common.Annotation.AType.Integration, i);
return (ad != null && ad.getState());
}, "~N");
Clazz.defineMethod(c$, "getIntegrationGraph", 
function(i){
var ad = this.getDialog(JSV.common.Annotation.AType.Integration, i);
return (ad == null ? null : ad.getData());
}, "~N");
Clazz.defineMethod(c$, "setIntegrationRatios", 
function(value){
var iSpec = this.getFixedSelectedSpectrumIndex();
if (this.aIntegrationRatios == null) this.aIntegrationRatios =  new Array(this.nSpectra);
this.aIntegrationRatios[iSpec] = JSV.common.IntegralData.getIntegrationRatiosFromString(this.getSpectrum(), value);
}, "~S");
Clazz.defineMethod(c$, "getIntegrationRatios", 
function(i){
return (this.aIntegrationRatios == null ? null : this.aIntegrationRatios[i]);
}, "~N");
Clazz.defineMethod(c$, "integrate", 
function(iSpec, parameters){
var spec = this.getSpectrumAt(iSpec);
if (parameters == null || !spec.canIntegrate()) {
this.removeDialog(iSpec, JSV.common.Annotation.AType.Integration);
return false;
}this.addDialog(iSpec, JSV.common.Annotation.AType.Integration,  new JSV.common.IntegralData(spec, parameters));
return true;
}, "~N,JSV.common.Parameters");
Clazz.defineMethod(c$, "getIntegration", 
function(iSpec, p, forceNew){
if (iSpec < 0) iSpec = this.getCurrentSpectrumIndex();
if (iSpec < 0) return null;
var dialog = this.getDialog(JSV.common.Annotation.AType.Integration, -1);
if (dialog == null) {
if (!forceNew) return null;
dialog = this.addDialog(iSpec, JSV.common.Annotation.AType.Integration,  new JSV.common.IntegralData(this.getSpectrum(), p));
}return dialog.getData();
}, "~N,JSV.common.Parameters,~B");
Clazz.defineMethod(c$, "getMeasurementInfo", 
function(type, iSpec){
var md;
switch (type) {
case JSV.common.Annotation.AType.PeakList:
md = this.getPeakListing(iSpec, null, false);
break;
case JSV.common.Annotation.AType.Integration:
md = this.getIntegration(iSpec, null, false);
break;
default:
return null;
}
if (md == null) return null;
var info =  new java.util.Hashtable();
md.getInfo(info);
return info;
}, "JSV.common.Annotation.AType,~N");
Clazz.defineMethod(c$, "getInfo", 
function(key, iSpec){
var spectraInfo =  new java.util.Hashtable();
if ("".equals(key)) {
spectraInfo.put("KEYS", "viewInfo spectra");
} else if ("viewInfo".equalsIgnoreCase(key)) return this.getScale().getInfo(spectraInfo);
var specInfo =  new JU.Lst();
spectraInfo.put("spectra", specInfo);
for (var i = 0; i < this.nSpectra; i++) {
if (iSpec >= 0 && i != iSpec) continue;
var spec = this.spectra.get(i);
var info = spec.getInfo(key);
if (iSpec >= 0 && key != null && (info.size() == 2 || key.equalsIgnoreCase("id"))) {
if (info.size() == 2) info.remove("id");
return info;
}JSV.common.Parameters.putInfo(key, info, "type", spec.getDataType());
JSV.common.Parameters.putInfo(key, info, "titleLabel", spec.getTitleLabel());
JSV.common.Parameters.putInfo(key, info, "filePath", spec.getFilePath().$replace('\\', '/'));
JSV.common.Parameters.putInfo(key, info, "PeakList", (JSV.common.Parameters.isMatch(key, "PeakList") ? this.getMeasurementInfo(JSV.common.Annotation.AType.PeakList, i) : null));
JSV.common.Parameters.putInfo(key, info, "Integration", (JSV.common.Parameters.isMatch(key, "Integration") ? this.getMeasurementInfo(JSV.common.Annotation.AType.Integration, i) : null));
if (iSpec >= 0) return info;
specInfo.addLast(info);
}
return spectraInfo;
}, "~S,~N");
Clazz.defineMethod(c$, "getTitle", 
function(forPrinting){
return (this.nSpectra == 1 || this.iSpectrumSelected >= 0 && (!forPrinting || this.nSplit == 1) ? this.getSpectrum().getTitle() : null);
}, "~B");
Clazz.defineMethod(c$, "getCurrentView", 
function(){
this.setScale(this.getFixedSelectedSpectrumIndex());
return this.viewData.getScale();
});
Clazz.defineMethod(c$, "set2DXY", 
function(x, y, isLocked){
var p;
if (this.gs2dLinkedX != null) {
p = this.toPixelX(x);
if (p != this.fixX(p)) {
p = -2147483648;
x = 1.7976931348623157E308;
}this.cur1D2x1.setX(x, p);
}if (this.gs2dLinkedY != null) {
p = this.toPixelX(y);
if (p != this.fixX(p)) {
p = -2147483648;
y = 1.7976931348623157E308;
}this.cur1D2x2.setX(y, p);
}this.cur1D2Locked = isLocked;
}, "~N,~N,~B");
Clazz.defineMethod(c$, "dialogsToFront", 
function(spec){
if (this.dialogs == null) return;
if (spec == null) spec = this.getSpectrum();
for (var e, $e = this.dialogs.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
var ad = e.getValue();
if (this.isVisible(ad)) {
if (spec == null) (ad).setVisible(true);
 else (ad).setFocus(ad.getSpectrum() === spec);
}}
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "setPlotColors", 
function(oColors){
var colors = oColors;
if (colors.length > this.nSpectra) {
var tmpPlotColors =  new Array(this.nSpectra);
System.arraycopy(colors, 0, tmpPlotColors, 0, this.nSpectra);
colors = tmpPlotColors;
} else if (this.nSpectra > colors.length) {
var tmpPlotColors =  new Array(this.nSpectra);
var numAdditionColors = this.nSpectra - colors.length;
System.arraycopy(colors, 0, tmpPlotColors, 0, colors.length);
for (var i = 0, j = colors.length; i < numAdditionColors; i++, j++) tmpPlotColors[j] = this.generateRandomColor();

colors = tmpPlotColors;
}this.plotColors = colors;
}, "~O");
Clazz.defineMethod(c$, "disposeImage", 
function(){
{
if (this.image2D != null)
this.image2D.parentNode.removeChild(this.image2D);
}this.image2D = null;
this.jsvp = null;
this.pd = null;
this.highlights = null;
this.plotColors = null;
});
Clazz.defineMethod(c$, "generateRandomColor", 
function(){
while (true) {
var red = Clazz.doubleToInt(Math.random() * 255);
var green = Clazz.doubleToInt(Math.random() * 255);
var blue = Clazz.doubleToInt(Math.random() * 255);
var randomColor = this.g2d.getColor3(red, green, blue);
if (randomColor.getRGB() != 0) return randomColor;
}
});
Clazz.defineMethod(c$, "setPlotColor0", 
function(oColor){
this.plotColors[0] = oColor;
}, "~O");
Clazz.defineMethod(c$, "getPlotColor", 
function(index){
if (index >= this.plotColors.length) return null;
return this.plotColors[index];
}, "~N");
Clazz.defineMethod(c$, "setColorFromToken", 
function(og, whatColor){
if (whatColor != null) this.g2d.setGraphicsColor(og, whatColor === JSV.common.ScriptToken.PLOTCOLOR ? this.plotColors[0] : this.pd.getColor(whatColor));
}, "~O,JSV.common.ScriptToken");
Clazz.defineMethod(c$, "setPlotColor", 
function(og, i){
var c;
switch (i) {
case -3:
c = JSV.common.GraphSet.veryLightGrey;
break;
case -2:
c = this.pd.BLACK;
break;
case -1:
c = this.pd.getColor(JSV.common.ScriptToken.INTEGRALPLOTCOLOR);
break;
default:
c = this.plotColors[i];
break;
}
this.g2d.setGraphicsColor(og, c);
}, "~O,~N");
Clazz.defineMethod(c$, "draw2DImage", 
function(){
if (this.imageView != null) this.g2d.drawGrayScaleImage(this.gMain, this.image2D, this.imageView.xPixel0, this.imageView.yPixel0, this.imageView.xPixel0 + this.imageView.xPixels - 1, this.imageView.yPixel0 + this.imageView.yPixels - 1, this.imageView.xView1, this.imageView.yView1, this.imageView.xView2, this.imageView.yView2);
});
Clazz.defineMethod(c$, "get2DImage", 
function(spec0){
this.imageView =  new JSV.common.ImageView();
this.imageView.set(this.viewList.get(0).getScale());
if (!this.update2dImage(true)) return false;
this.imageView.resetZoom();
this.sticky2Dcursor = true;
return true;
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "update2dImage", 
function(isCreation){
this.imageView.set(this.viewData.getScale());
var spec = this.getSpectrumAt(0);
var buffer = this.imageView.get2dBuffer(spec, !isCreation);
if (buffer == null) {
this.image2D = null;
this.imageView = null;
return false;
}if (isCreation) {
buffer = this.imageView.adjustView(spec, this.viewData);
this.imageView.resetView();
}this.image2D = this.g2d.newGrayScaleImage(this.gMain, this.image2D, this.imageView.imageWidth, this.imageView.imageHeight, buffer);
this.setImageWindow();
return true;
}, "~B");
Clazz.defineMethod(c$, "getAnnotation", 
function(x, y, text, isPixels, is2d, offsetX, offsetY){
return  new JSV.common.ColoredAnnotation().setCA(x, y, this.getSpectrum(), text, this.pd.BLACK, isPixels, is2d, offsetX, offsetY);
}, "~N,~N,~S,~B,~B,~N,~N");
Clazz.defineMethod(c$, "getAnnotation", 
function(args, lastAnnotation){
return JSV.common.Annotation.getColoredAnnotation(this.g2d, this.getSpectrum(), args, lastAnnotation);
}, "JU.Lst,JSV.common.Annotation");
Clazz.defineMethod(c$, "fillBox", 
function(g, x0, y0, x1, y1, whatColor){
this.setColorFromToken(g, whatColor);
this.g2d.fillRect(g, Math.min(x0, x1), Math.min(y0, y1), Math.abs(x0 - x1), Math.abs(y0 - y1));
}, "~O,~N,~N,~N,~N,JSV.common.ScriptToken");
Clazz.defineMethod(c$, "drawBox", 
function(g, x0, y0, x1, y1, whatColor){
this.setColorFromToken(g, whatColor);
this.g2d.drawRect(g, Math.min(x0, x1), Math.min(y0, y1), Math.abs(x0 - x1) - 1, Math.abs(y0 - y1) - 1);
}, "~O,~N,~N,~N,~N,JSV.common.ScriptToken");
Clazz.defineMethod(c$, "drawHandle", 
function(g, x, y, size, outlineOnly){
if (outlineOnly) this.g2d.drawRect(g, x - size, y - size, size * 2, size * 2);
 else this.g2d.fillRect(g, x - size, y - size, size * 2 + 1, size * 2 + 1);
}, "~O,~N,~N,~N,~B");
Clazz.defineMethod(c$, "setCurrentBoxColor", 
function(g){
this.g2d.setGraphicsColor(g, this.pd.BLACK);
}, "~O");
Clazz.defineMethod(c$, "fillArrow", 
function(g, type, x, y, doFill){
var f = 1;
switch (type) {
case 1:
case 3:
f = -1;
break;
}
var axPoints =  Clazz.newIntArray(-1, [x - 5, x - 5, x + 5, x + 5, x + 8, x, x - 8]);
var ayPoints =  Clazz.newIntArray(-1, [y + 5 * f, y - f, y - f, y + 5 * f, y + 5 * f, y + 10 * f, y + 5 * f]);
switch (type) {
case 1:
case 2:
if (doFill) this.g2d.fillPolygon(g, ayPoints, axPoints, 7);
 else this.g2d.drawPolygon(g, ayPoints, axPoints, 7);
break;
case 3:
case 4:
if (doFill) this.g2d.fillPolygon(g, axPoints, ayPoints, 7);
 else this.g2d.drawPolygon(g, axPoints, ayPoints, 7);
}
}, "~O,~N,~N,~N,~B");
Clazz.defineMethod(c$, "fillCircle", 
function(g, x, y, doFill){
if (doFill) this.g2d.fillCircle(g, x - 4, y - 4, 8);
 else this.g2d.drawCircle(g, x - 4, y - 4, 8);
}, "~O,~N,~N,~B");
Clazz.defineMethod(c$, "setAnnotationColor", 
function(g, note, whatColor){
if (whatColor != null) {
this.setColorFromToken(g, whatColor);
return;
}var color = null;
if (Clazz.instanceOf(note,"JSV.common.ColoredAnnotation")) color = (note).getColor();
if (color == null) color = this.pd.BLACK;
this.g2d.setGraphicsColor(g, color);
}, "~O,JSV.common.Annotation,JSV.common.ScriptToken");
Clazz.defineMethod(c$, "setSolutionColor", 
function(vi, isNone, asFitted){
for (var i = 0; i < this.nSpectra; i++) {
var spec = this.spectra.get(i);
var color = (isNone || !spec.canShowSolutionColor() ? -1 : vi.getColour(spec, asFitted));
spec.setFillColor(color == -1 ? null : this.pd.vwr.parameters.getColor1(color));
}
}, "JSV.api.VisibleInterface,~B,~B");
Clazz.defineMethod(c$, "setIRMode", 
function(mode, type){
for (var i = 0; i < this.nSpectra; i++) {
var spec = this.spectra.get(i);
if (!spec.dataType.equals(type)) continue;
var spec2 = JSV.common.Spectrum.taConvert(spec, mode);
if (spec2 !== spec) this.pd.setSpecForIRMode(spec2);
}
}, "JSV.common.Spectrum.IRMode,~S");
Clazz.defineMethod(c$, "getSpectrumCount", 
function(){
return 0;
});
Clazz.defineMethod(c$, "invertYAxis", 
function(){
this.viewList.get(0).init(null, 0, 0, this.getSpectrum().invertYAxis().isContinuous());
this.resetViewCompletely();
});
c$.isDialog = Clazz.defineMethod(c$, "isDialog", 
function(ad){
return (ad != null && ad.isDialog());
}, "JSV.api.AnnotationData");
c$.$GraphSet$Highlight$ = function(){
/*if4*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
Clazz.prepareCallback(this, arguments);
this.x1 = 0;
this.x2 = 0;
this.color = null;
this.spectrum = null;
Clazz.instantialize(this, arguments);}, JSV.common.GraphSet, "Highlight", null);
Clazz.makeConstructor(c$, 
function(x1, x2, spec, color){
this.x1 = x1;
this.x2 = x2;
this.color = color;
this.spectrum = spec;
}, "~N,~N,JSV.common.Spectrum,javajs.api.GenericColor");
Clazz.overrideMethod(c$, "toString", 
function(){
return "highlight " + this.x1 + " " + this.x2 + " " + this.spectrum;
});
Clazz.overrideMethod(c$, "equals", 
function(obj){
if (!(Clazz.instanceOf(obj,"JSV.common.GraphSet.Highlight"))) return false;
var hl = obj;
return ((hl.x1 == this.x1) && (hl.x2 == this.x2));
}, "~O");
Clazz.overrideMethod(c$, "hashCode", 
function(){
return Clazz.doubleToInt(this.x1 * 1000 + this.x2 * 1000000);
});
/*eoif4*/})();
};
c$.RT2 = Math.sqrt(2.0);
c$.veryLightGrey = null;
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.declareInterface(JSV.common, "XYScaleConverter");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.Parameters"], "JSV.common.ColorParameters", ["java.util.Hashtable", "$.StringTokenizer", "JU.CU", "$.Lst", "JSV.common.ScriptToken"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.titleFontName = null;
this.displayFontName = null;
this.elementColors = null;
this.plotColors = null;
this.isDefault = false;
Clazz.instantialize(this, arguments);}, JSV.common, "ColorParameters", JSV.common.Parameters);
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, JSV.common.ColorParameters, []);
JSV.common.ColorParameters.BLACK = this.getColor3(0, 0, 0);
JSV.common.ColorParameters.RED = this.getColor3(255, 0, 0);
JSV.common.ColorParameters.LIGHT_GRAY = this.getColor3(200, 200, 200);
JSV.common.ColorParameters.DARK_GRAY = this.getColor3(80, 80, 80);
JSV.common.ColorParameters.BLUE = this.getColor3(0, 0, 255);
JSV.common.ColorParameters.WHITE = this.getColor3(255, 255, 255);
this.elementColors =  new java.util.Hashtable();
this.setColor(JSV.common.ScriptToken.TITLECOLOR, JSV.common.ColorParameters.BLACK);
this.setColor(JSV.common.ScriptToken.UNITSCOLOR, JSV.common.ColorParameters.RED);
this.setColor(JSV.common.ScriptToken.SCALECOLOR, JSV.common.ColorParameters.BLACK);
this.setColor(JSV.common.ScriptToken.COORDINATESCOLOR, JSV.common.ColorParameters.RED);
this.setColor(JSV.common.ScriptToken.GRIDCOLOR, JSV.common.ColorParameters.LIGHT_GRAY);
this.setColor(JSV.common.ScriptToken.PLOTCOLOR, JSV.common.ColorParameters.BLUE);
this.setColor(JSV.common.ScriptToken.PLOTAREACOLOR, JSV.common.ColorParameters.WHITE);
this.setColor(JSV.common.ScriptToken.BACKGROUNDCOLOR, this.getColor3(192, 192, 192));
this.setColor(JSV.common.ScriptToken.INTEGRALPLOTCOLOR, JSV.common.ColorParameters.RED);
this.setColor(JSV.common.ScriptToken.PEAKTABCOLOR, JSV.common.ColorParameters.RED);
this.setColor(JSV.common.ScriptToken.PEAKOVERCOLOR, JSV.common.ColorParameters.RED);
this.setColor(JSV.common.ScriptToken.HIGHLIGHTCOLOR, JSV.common.ColorParameters.DARK_GRAY);
for (var i = 0; i < 8; i++) JSV.common.ColorParameters.defaultPlotColors[i] = this.getColorFromString(JSV.common.ColorParameters.defaultPlotColorNames[i]);

this.plotColors =  new Array(8);
System.arraycopy(JSV.common.ColorParameters.defaultPlotColors, 0, this.plotColors, 0, 8);
});
Clazz.defineMethod(c$, "setFor", 
function(jsvp, ds, includeMeasures){
if (ds == null) ds = this;
if (includeMeasures) jsvp.getPanelData().setBooleans(ds, null);
var pd = jsvp.getPanelData();
if (pd.getCurrentPlotColor(1) != null) pd.setPlotColors(this.plotColors);
pd.setColorOrFont(ds, null);
}, "JSV.api.JSVPanel,JSV.common.ColorParameters,~B");
Clazz.defineMethod(c$, "set", 
function(pd, st, value){
var param = null;
switch (st) {
default:
this.setP(pd, st, value);
return;
case JSV.common.ScriptToken.PLOTCOLORS:
if (pd == null) this.getPlotColors(value);
 else pd.setPlotColors(this.getPlotColors(value));
return;
case JSV.common.ScriptToken.BACKGROUNDCOLOR:
case JSV.common.ScriptToken.COORDINATESCOLOR:
case JSV.common.ScriptToken.GRIDCOLOR:
case JSV.common.ScriptToken.HIGHLIGHTCOLOR:
case JSV.common.ScriptToken.INTEGRALPLOTCOLOR:
case JSV.common.ScriptToken.PEAKOVERCOLOR:
case JSV.common.ScriptToken.PEAKTABCOLOR:
case JSV.common.ScriptToken.PLOTAREACOLOR:
case JSV.common.ScriptToken.PLOTCOLOR:
case JSV.common.ScriptToken.SCALECOLOR:
case JSV.common.ScriptToken.TITLECOLOR:
case JSV.common.ScriptToken.UNITSCOLOR:
param = this.setColorFromString(st, value);
break;
case JSV.common.ScriptToken.TITLEFONTNAME:
case JSV.common.ScriptToken.DISPLAYFONTNAME:
param = this.getFontName(st, value);
break;
}
if (pd == null) return;
if (param != null) pd.setColorOrFont(this, st);
}, "JSV.common.PanelData,JSV.common.ScriptToken,~S");
Clazz.defineMethod(c$, "getElementColor", 
function(st){
return this.elementColors.get(st);
}, "JSV.common.ScriptToken");
Clazz.defineMethod(c$, "setColor", 
function(st, color){
if (color != null) this.elementColors.put(st, color);
return color;
}, "JSV.common.ScriptToken,javajs.api.GenericColor");
Clazz.defineMethod(c$, "copy", 
function(){
return this.copy(this.name);
});
Clazz.defineMethod(c$, "setElementColors", 
function(p){
this.displayFontName = p.displayFontName;
for (var entry, $entry = p.elementColors.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) this.setColor(entry.getKey(), entry.getValue());

return this;
}, "JSV.common.ColorParameters");
Clazz.defineMethod(c$, "getColorFromString", 
function(name){
return this.getColor1(JU.CU.getArgbFromString(name));
}, "~S");
Clazz.defineMethod(c$, "getPlotColors", 
function(plotColorsStr){
if (plotColorsStr == null) {
this.plotColors[0] = this.getElementColor(JSV.common.ScriptToken.PLOTCOLOR);
return this.plotColors;
}var st =  new java.util.StringTokenizer(plotColorsStr, ",;.- ");
var colors =  new JU.Lst();
try {
while (st.hasMoreTokens()) colors.addLast(this.getColorFromString(st.nextToken()));

} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return null;
} else {
throw e;
}
}
return colors.toArray( new Array(colors.size()));
}, "~S");
Clazz.defineMethod(c$, "setColorFromString", 
function(st, value){
return this.setColor(st, this.getColorFromString(value));
}, "JSV.common.ScriptToken,~S");
Clazz.defineMethod(c$, "getFontName", 
function(st, value){
var isValid = this.isValidFontName(value);
switch (st) {
case JSV.common.ScriptToken.TITLEFONTNAME:
return (isValid ? this.titleFontName = value : this.titleFontName);
case JSV.common.ScriptToken.DISPLAYFONTNAME:
return (isValid ? this.displayFontName = value : this.displayFontName);
}
return null;
}, "JSV.common.ScriptToken,~S");
c$.BLACK = null;
c$.RED = null;
c$.LIGHT_GRAY = null;
c$.DARK_GRAY = null;
c$.BLUE = null;
c$.WHITE = null;
c$.defaultPlotColors =  new Array(8);
c$.defaultPlotColorNames =  Clazz.newArray(-1, ["black", "darkGreen", "darkred", "orange", "magenta", "cyan", "maroon", "darkGray"]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.Annotation"], "JSV.common.ColoredAnnotation", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.color = null;
Clazz.instantialize(this, arguments);}, JSV.common, "ColoredAnnotation", JSV.common.Annotation);
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, JSV.common.ColoredAnnotation, []);
});
Clazz.defineMethod(c$, "getColor", 
function(){
return this.color;
});
Clazz.defineMethod(c$, "setCA", 
function(x, y, spec, text, color, isPixels, is2D, offsetX, offsetY){
this.setA(x, y, spec, text, isPixels, is2D, offsetX, offsetY);
this.color = color;
return this;
}, "~N,~N,JSV.common.Spectrum,~S,javajs.api.GenericColor,~B,~B,~N,~N");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.XYScaleConverter"], "JSV.common.ImageView", ["JSV.common.Coordinate", "$.ScaleData"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.buf2d = null;
this.grayFactorLast = 0;
this.averageGray = 0;
this.xPixel0 = 0;
this.yPixel0 = 0;
this.xPixel1 = 0;
this.yPixel1 = 0;
this.imageWidth = 0;
this.imageHeight = 0;
this.xPixels = 0;
this.yPixels = 0;
this.xPixelZoom1 = 0;
this.yPixelZoom1 = 0;
this.xPixelZoom2 = 0;
this.yPixelZoom2 = 0;
this.xView1 = 0;
this.yView1 = 0;
this.xView2 = 0;
this.yView2 = 0;
this.minX = NaN;
this.maxX = 0;
this.minY = 0;
this.maxY = 0;
this.minZ = 0;
this.maxZ = 0;
this.scaleData = null;
Clazz.instantialize(this, arguments);}, JSV.common, "ImageView", null, JSV.common.XYScaleConverter);
Clazz.defineMethod(c$, "set", 
function(view){
if (Double.isNaN(this.minX)) {
this.minX = view.minX;
this.maxX = view.maxX;
}this.minZ = view.minY;
this.maxZ = view.maxY;
this.scaleData =  new JSV.common.ScaleData();
}, "JSV.common.ScaleData");
Clazz.defineMethod(c$, "setZoom", 
function(xPixel1, yPixel1, xPixel2, yPixel2){
this.xPixelZoom1 = Math.min(xPixel1, xPixel2);
this.yPixelZoom1 = Math.min(yPixel1, yPixel2);
this.xPixelZoom2 = Math.max(xPixel1, xPixel2);
this.yPixelZoom2 = Math.max(yPixel1, yPixel2);
this.setView();
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "setXY0", 
function(spec, xPixel, yPixel){
this.xPixel0 = xPixel;
this.yPixel0 = yPixel;
this.xPixel1 = this.xPixel0 + this.xPixels - 1;
this.yPixel1 = this.yPixel0 + this.yPixels - 1;
this.setMinMaxY(spec);
}, "JSV.common.Spectrum,~N,~N");
Clazz.defineMethod(c$, "setPixelWidthHeight", 
function(xPixels, yPixels){
this.xPixels = xPixels;
this.yPixels = yPixels;
}, "~N,~N");
Clazz.defineMethod(c$, "resetView", 
function(){
this.xView1 = 0;
this.yView1 = 0;
this.xView2 = this.imageWidth - 1;
this.yView2 = this.imageHeight - 1;
});
Clazz.defineMethod(c$, "setView", 
function(){
if (this.xPixelZoom1 == 0) this.resetZoom();
var x1 = this.toImageX(this.xPixelZoom1);
var y1 = this.toImageY(this.yPixelZoom1);
var x2 = this.toImageX(this.xPixelZoom2);
var y2 = this.toImageY(this.yPixelZoom2);
this.xView1 = Math.min(x1, x2);
this.yView1 = Math.min(y1, y2);
this.xView2 = Math.max(x1, x2);
this.yView2 = Math.max(y1, y2);
this.setScaleData();
this.resetZoom();
});
Clazz.defineMethod(c$, "resetZoom", 
function(){
this.xPixelZoom1 = this.xPixel0;
this.yPixelZoom1 = this.yPixel0;
this.xPixelZoom2 = this.xPixel1;
this.yPixelZoom2 = this.yPixel1;
});
Clazz.defineMethod(c$, "toImageX", 
function(xPixel){
return this.xView1 + Clazz.doubleToInt(Math.floor((xPixel - this.xPixel0) / (this.xPixels - 1.0) * (this.xView2 - this.xView1)));
}, "~N");
Clazz.defineMethod(c$, "toImageY", 
function(yPixel){
return this.yView1 + Clazz.doubleToInt(Math.floor((yPixel - this.yPixel0) / (this.yPixels - 1.0) * (this.yView2 - this.yView1)));
}, "~N");
Clazz.defineMethod(c$, "toImageX0", 
function(xPixel){
return JSV.common.Coordinate.intoRange(Clazz.doubleToInt((1.0 * xPixel - this.xPixel0) / (this.xPixels - 1) * (this.imageWidth - 1)), 0, this.imageWidth - 1);
}, "~N");
Clazz.defineMethod(c$, "toImageY0", 
function(yPixel){
return JSV.common.Coordinate.intoRange(Clazz.doubleToInt((1.0 * yPixel - this.yPixel0) / (this.yPixels - 1) * (this.imageHeight - 1)), 0, this.imageHeight - 1);
}, "~N");
Clazz.defineMethod(c$, "isXWithinRange", 
function(xPixel){
return (xPixel >= this.xPixel0 - 5 && xPixel < this.xPixel0 + this.xPixels + 5);
}, "~N");
Clazz.defineMethod(c$, "toSubspectrumIndex", 
function(yPixel){
return JSV.common.Coordinate.intoRange(this.imageHeight - 1 - this.toImageY(yPixel), 0, this.imageHeight - 1);
}, "~N");
Clazz.defineMethod(c$, "toX0", 
function(xPixel){
return this.maxX + (this.minX - this.maxX) * (this.fixX(xPixel) - this.xPixel0) / (this.xPixels - 1);
}, "~N");
Clazz.defineMethod(c$, "toPixelX0", 
function(x){
return this.xPixel1 - Clazz.doubleToInt((x - this.minX) / (this.maxX - this.minX) * (this.xPixels - 1));
}, "~N");
Clazz.defineMethod(c$, "toPixelY0", 
function(ysub){
return this.yPixel1 - Clazz.doubleToInt(ysub / (this.imageHeight - 1) * (this.yPixels - 1));
}, "~N");
Clazz.defineMethod(c$, "subIndexToPixelY", 
function(subIndex){
var f = 1.0 * (this.imageHeight - 1 - subIndex - this.yView1) / (this.yView2 - this.yView1);
var y = this.yPixel0 + Clazz.doubleToInt(f * (this.yPixels - 1));
return y;
}, "~N");
Clazz.defineMethod(c$, "fixSubIndex", 
function(subIndex){
return JSV.common.Coordinate.intoRange(subIndex, this.imageHeight - 1 - this.yView2, this.imageHeight - 1 - this.yView1);
}, "~N");
Clazz.defineMethod(c$, "setView0", 
function(xp1, yp1, xp2, yp2){
var x1 = this.toImageX0(xp1);
var y1 = this.toImageY0(yp1);
var x2 = this.toImageX0(xp2);
var y2 = this.toImageY0(yp2);
this.xView1 = Math.min(x1, x2);
this.yView1 = Math.min(y1, y2);
this.xView2 = Math.max(x1, x2);
this.yView2 = Math.max(y1, y2);
this.resetZoom();
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "get2dBuffer", 
function(spec, forceNew){
var subSpectra = spec.getSubSpectra();
if (subSpectra == null || !subSpectra.get(0).isContinuous()) return null;
var xyCoords = spec.getXYCoords();
var nSpec = subSpectra.size();
this.imageWidth = xyCoords.length;
this.imageHeight = nSpec;
var grayFactor = 255 / (this.maxZ - this.minZ);
if (!forceNew && this.buf2d != null && grayFactor == this.grayFactorLast) return this.buf2d;
this.grayFactorLast = grayFactor;
var pt = this.imageWidth * this.imageHeight;
var buf = (this.buf2d == null || this.buf2d.length != pt ?  Clazz.newIntArray (pt, 0) : this.buf2d);
var totalGray = 0;
for (var i = 0; i < nSpec; i++) {
var points = subSpectra.get(i).xyCoords;
if (points.length != xyCoords.length) return null;
for (var j = 0; j < xyCoords.length; j++) {
var y = points[j].getYVal();
var gray = 255 - JSV.common.Coordinate.intoRange(Clazz.doubleToInt((y - this.minZ) * grayFactor), 0, 255);
buf[--pt] = gray;
totalGray += gray;
}
}
this.averageGray = (1 - totalGray / (this.imageWidth * this.imageHeight) / 255);
System.out.println("Average gray = " + this.averageGray);
return (this.buf2d = buf);
}, "JSV.common.Spectrum,~B");
Clazz.defineMethod(c$, "adjustView", 
function(spec, view){
var i = 0;
var isLow = false;
while (((isLow = (this.averageGray < 0.05)) || this.averageGray > 0.3) && i++ < 10) {
view.scaleSpectrum(-2, isLow ? 2 : 0.5);
this.set(view.getScale());
this.get2dBuffer(spec, false);
}
return this.buf2d;
}, "JSV.common.Spectrum,JSV.common.ViewData");
Clazz.defineMethod(c$, "getBuffer", 
function(){
return this.buf2d;
});
Clazz.defineMethod(c$, "setMinMaxY", 
function(spec){
var subSpectra = spec.getSubSpectra();
var spec0 = subSpectra.get(0);
this.maxY = spec0.getY2D();
this.minY = subSpectra.get(subSpectra.size() - 1).getY2D();
if (spec0.y2DUnits.equalsIgnoreCase("Hz")) {
this.maxY /= spec0.freq2dY;
this.minY /= spec0.freq2dY;
}this.setScaleData();
}, "JSV.common.Spectrum");
Clazz.defineMethod(c$, "setScaleData", 
function(){
this.scaleData.minY = this.minY;
this.scaleData.maxY = this.maxY;
this.scaleData.setYScale(this.toY(this.yPixel0), this.toY(this.yPixel1), false, false);
});
Clazz.overrideMethod(c$, "fixX", 
function(xPixel){
return (xPixel < this.xPixel0 ? this.xPixel0 : xPixel > this.xPixel1 ? this.xPixel1 : xPixel);
}, "~N");
Clazz.overrideMethod(c$, "fixY", 
function(yPixel){
return JSV.common.Coordinate.intoRange(yPixel, this.yPixel0, this.yPixel1);
}, "~N");
Clazz.overrideMethod(c$, "getScale", 
function(){
return this.scaleData;
});
Clazz.overrideMethod(c$, "toX", 
function(xPixel){
return this.maxX + (this.minX - this.maxX) * this.toImageX(this.fixX(xPixel)) / (this.imageWidth - 1);
}, "~N");
Clazz.overrideMethod(c$, "toY", 
function(yPixel){
var isub = this.toSubspectrumIndex(yPixel);
return this.maxY + (this.minY - this.maxY) * isub / (this.imageHeight - 1);
}, "~N");
Clazz.overrideMethod(c$, "toPixelX", 
function(x){
var x0 = this.toX(this.xPixel0);
var x1 = this.toX(this.xPixel1);
return this.xPixel0 + Clazz.doubleToInt((x - x0) / (x1 - x0) * (this.xPixels - 1));
}, "~N");
Clazz.overrideMethod(c$, "toPixelY", 
function(y){
var f = (y - this.scaleData.minYOnScale) / (this.scaleData.maxYOnScale - this.scaleData.minYOnScale);
return Clazz.doubleToInt(this.yPixel0 + f * this.yPixels);
}, "~N");
Clazz.overrideMethod(c$, "getXPixels", 
function(){
return this.xPixels;
});
Clazz.overrideMethod(c$, "getYPixels", 
function(){
return this.yPixels;
});
Clazz.overrideMethod(c$, "getXPixel0", 
function(){
return this.xPixel0;
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.ScaleData", ["JSV.common.Coordinate"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.initMinYOnScale = 0;
this.initMaxYOnScale = 0;
this.initMinY = 0;
this.initMaxY = 0;
this.startDataPointIndex = 0;
this.endDataPointIndex = 0;
this.pointCount = 0;
this.minX = 0;
this.maxX = 0;
this.firstX = NaN;
this.minXOnScale = 0;
this.maxXOnScale = 0;
this.specShift = 0;
this.precision = null;
this.exportPrecision = null;
this.steps = null;
this.minorTickCounts = null;
this.minYOnScale = 0;
this.maxYOnScale = 0;
this.minY = 0;
this.maxY = 0;
this.isShiftZoomedY = false;
this.spectrumScaleFactor = 1;
this.spectrumYRef = 0;
this.userYFactor = 1;
this.firstY = 0;
this.minY2D = 0;
this.maxY2D = 0;
this.xFactorForScale = 0;
this.yFactorForScale = 0;
Clazz.instantialize(this, arguments);}, JSV.common, "ScaleData", null);
Clazz.prepareFields (c$, function(){
this.precision =  Clazz.newIntArray (2, 0);
this.exportPrecision =  Clazz.newIntArray (2, 0);
this.steps =  Clazz.newDoubleArray (2, 0);
this.minorTickCounts =  Clazz.newIntArray (2, 0);
});
Clazz.makeConstructor(c$, 
function(){
});
Clazz.makeConstructor(c$, 
function(iStart, iEnd){
this.startDataPointIndex = iStart;
this.endDataPointIndex = iEnd;
this.pointCount = this.endDataPointIndex - this.startDataPointIndex + 1;
}, "~N,~N");
Clazz.makeConstructor(c$, 
function(coords, start, end, isContinuous, isInverted){
this.minX = JSV.common.Coordinate.getMinX(coords, start, end);
this.maxX = JSV.common.Coordinate.getMaxX(coords, start, end);
this.minY = JSV.common.Coordinate.getMinY(coords, start, end);
if (this.minY > 0 && !isContinuous) this.minY = 0;
this.maxY = JSV.common.Coordinate.getMaxY(coords, start, end);
this.setScale(isContinuous, isInverted);
}, "~A,~N,~N,~B,~B");
Clazz.defineMethod(c$, "setScale", 
function(isContinuous, isInverted){
this.setXScale();
if (!isContinuous) this.maxXOnScale += this.steps[0] / 2;
this.setYScale(this.minY, this.maxY, true, isInverted);
}, "~B,~B");
Clazz.defineMethod(c$, "setXScale", 
function(){
var xStep = this.setScaleParams(this.minX, this.maxX, 0);
this.firstX = Math.floor(this.minX / xStep) * xStep;
if (Math.abs((this.minX - this.firstX) / xStep) > 0.0001) this.firstX += xStep;
this.minXOnScale = this.minX;
this.maxXOnScale = this.maxX;
});
Clazz.defineMethod(c$, "isYZeroOnScale", 
function(){
return (this.minYOnScale < this.spectrumYRef && this.maxYOnScale > this.spectrumYRef);
});
Clazz.defineMethod(c$, "setYScale", 
function(minY, maxY, setScaleMinMax, isInverted){
if (minY == 0 && maxY == 0) maxY = 1;
if (this.isShiftZoomedY) {
minY = this.minYOnScale;
maxY = this.maxYOnScale;
}var yStep = this.setScaleParams(minY, maxY, 1);
var dy = (isInverted ? yStep / 2 : yStep / 4);
var dy2 = (isInverted ? yStep / 4 : yStep / 2);
if (!this.isShiftZoomedY) {
this.minYOnScale = (minY == 0 ? 0 : setScaleMinMax ? dy * Math.floor(minY / dy) : minY);
this.maxYOnScale = (setScaleMinMax ? dy2 * Math.ceil(maxY * 1.05 / dy2) : maxY);
}this.firstY = (minY == 0 ? 0 : Math.floor(minY / dy) * dy);
if (this.minYOnScale < 0 && this.maxYOnScale > 0) {
this.firstY = 0;
while (this.firstY - yStep > this.minYOnScale) this.firstY -= yStep;

} else if (this.minYOnScale != 0 && Math.abs((minY - this.firstY) / dy) > 0.0001) {
this.firstY += dy;
}if (setScaleMinMax) {
this.initMinYOnScale = this.minYOnScale;
this.initMaxYOnScale = this.maxYOnScale;
this.initMinY = minY;
this.initMaxY = maxY;
}}, "~N,~N,~B,~B");
Clazz.defineMethod(c$, "scale2D", 
function(f){
var dy = this.maxY - this.minY;
if (f == 1) {
this.maxY = this.initMaxY;
this.minY = this.initMinY;
return;
}this.maxY = this.minY + dy / f;
}, "~N");
Clazz.defineMethod(c$, "setXRange", 
function(x1, x2){
this.minX = x1;
this.maxX = x2;
this.setXScale();
}, "~N,~N");
c$.getXRange = Clazz.defineMethod(c$, "getXRange", 
function(i, xyCoords, initX, finalX, iStart, iEnd, startIndices, endIndices){
var index = 0;
var ptCount = 0;
for (index = iStart; index <= iEnd; index++) {
if (xyCoords[index].getXVal() >= initX) {
startIndices[i] = index;
ptCount = 1;
break;
}}
while (++index <= iEnd && xyCoords[index].getXVal() <= finalX) {
ptCount++;
}
endIndices[i] = startIndices[i] + ptCount - 1;
return ptCount;
}, "~N,~A,~N,~N,~N,~N,~A,~A");
Clazz.defineMethod(c$, "setScaleParams", 
function(min, max, i){
var dx = (max == min ? 1 : Math.abs(max - min) / 14);
var log = Math.log10(Math.abs(dx));
var exp = Clazz.doubleToInt(Math.floor(log));
this.exportPrecision[i] = exp;
this.precision[i] = (exp <= 0 ? Math.min(8, 1 - exp) : exp > 3 ? -2 : 0);
var j = 0;
var dec = Math.pow(10, log - exp);
while (dec > JSV.common.ScaleData.NTICKS[j]) {
j++;
}
this.steps[i] = Math.pow(10, exp) * JSV.common.ScaleData.NTICKS[j];
log = Math.log10(Math.abs(this.steps[i] * 1.0001e5));
var mantissa = log - Math.floor(log);
var n = 0;
for (j = 0; j < JSV.common.ScaleData.NTICKS.length; j++) if (Math.abs(mantissa - JSV.common.ScaleData.LOGTICKS[j]) < 0.001) {
n = JSV.common.ScaleData.NTICKS[j];
break;
}
this.minorTickCounts[i] = n;
return this.steps[i];
}, "~N,~N,~N");
Clazz.defineMethod(c$, "isInRangeX", 
function(x){
return (x >= this.minX && x <= this.maxX);
}, "~N");
Clazz.defineMethod(c$, "addSpecShift", 
function(dx){
this.specShift += dx;
this.minX += dx;
this.maxX += dx;
this.minXOnScale += dx;
this.maxXOnScale += dx;
this.firstX += dx;
}, "~N");
Clazz.defineMethod(c$, "getInfo", 
function(info){
info.put("specShift", Double.$valueOf(this.specShift));
info.put("minX", Double.$valueOf(this.minX));
info.put("maxX", Double.$valueOf(this.maxX));
info.put("minXOnScale", Double.$valueOf(this.minXOnScale));
info.put("maxXOnScale", Double.$valueOf(this.maxXOnScale));
info.put("minY", Double.$valueOf(this.minY));
info.put("maxY", Double.$valueOf(this.maxY));
info.put("minYOnScale", Double.$valueOf(this.minYOnScale));
info.put("maxYOnScale", Double.$valueOf(this.maxYOnScale));
info.put("minorTickCountX", Integer.$valueOf(this.minorTickCounts[0]));
info.put("xStep", Double.$valueOf(this.steps[0]));
return info;
}, "java.util.Map");
Clazz.defineMethod(c$, "setMinMax", 
function(minX, maxX, minY, maxY){
this.minX = minX;
this.maxX = maxX;
this.minY = minY;
this.maxY = maxY;
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "toX", 
function(xPixel, xPixel1, drawXAxisLeftToRight){
return this.toXScaled(xPixel, xPixel1, drawXAxisLeftToRight, this.xFactorForScale);
}, "~N,~N,~B");
Clazz.defineMethod(c$, "toX0", 
function(xPixel, xPixel0, xPixel1, drawXAxisLeftToRight){
return this.toXScaled(xPixel, xPixel1, drawXAxisLeftToRight, (this.maxXOnScale - this.minXOnScale) / (xPixel1 - xPixel0));
}, "~N,~N,~N,~B");
Clazz.defineMethod(c$, "toXScaled", 
function(xPixel, xPixel1, drawXAxisLeftToRight, factor){
return (drawXAxisLeftToRight ? this.maxXOnScale - (xPixel1 - xPixel) * factor : this.minXOnScale + (xPixel1 - xPixel) * factor);
}, "~N,~N,~B,~N");
Clazz.defineMethod(c$, "toPixelX", 
function(dx, xPixel0, xPixel1, drawXAxisLeftToRight){
return this.toPixelXScaled(dx, xPixel0, xPixel1, drawXAxisLeftToRight, this.xFactorForScale);
}, "~N,~N,~N,~B");
Clazz.defineMethod(c$, "toPixelX0", 
function(dx, xPixel0, xPixel1, drawXAxisLeftToRight){
return this.toPixelXScaled(dx, xPixel0, xPixel1, drawXAxisLeftToRight, (this.maxXOnScale - this.minXOnScale) / (xPixel1 - xPixel0));
}, "~N,~N,~N,~B");
Clazz.defineMethod(c$, "toPixelXScaled", 
function(dx, xPixel0, xPixel1, drawXAxisLeftToRight, factor){
var x = Clazz.doubleToInt((dx - this.minXOnScale) / factor);
return (drawXAxisLeftToRight ? xPixel0 + x : xPixel1 - x);
}, "~N,~N,~N,~B,~N");
Clazz.defineMethod(c$, "toY", 
function(yPixel, yPixel0){
return this.maxYOnScale + (yPixel0 - yPixel) * this.yFactorForScale;
}, "~N,~N");
Clazz.defineMethod(c$, "toY0", 
function(yPixel, yPixel0, yPixel1){
var factor = (this.maxYOnScale - this.minYOnScale) / (yPixel1 - yPixel0);
var y = this.maxYOnScale + (yPixel0 - yPixel) * factor;
return Math.max(this.minYOnScale, Math.min(y, this.maxYOnScale));
}, "~N,~N,~N");
Clazz.defineMethod(c$, "toPixelY", 
function(yVal, yPixel1){
return (Double.isNaN(yVal) ? -2147483648 : yPixel1 - Clazz.doubleToInt(((yVal - this.spectrumYRef) * this.userYFactor + this.spectrumYRef - this.minYOnScale) / this.yFactorForScale));
}, "~N,~N");
Clazz.defineMethod(c$, "toPixelY0", 
function(y, yPixel0, yPixel1){
var factor = (this.maxYOnScale - this.minYOnScale) / (yPixel1 - yPixel0);
return Clazz.doubleToInt(yPixel0 + (this.maxYOnScale - y) / factor);
}, "~N,~N,~N");
Clazz.defineMethod(c$, "setXYScale", 
function(xPixels, yPixels, isInverted){
var yRef = this.spectrumYRef;
var f = this.spectrumScaleFactor;
var useInit = (f != 1 || this.isShiftZoomedY);
var minY = (useInit ? this.initMinYOnScale : this.minY);
var maxY = (useInit ? this.initMaxYOnScale : this.maxY);
if (useInit && yRef < minY) yRef = minY;
if (useInit && yRef > maxY) yRef = maxY;
this.setYScale((minY - yRef) / f + yRef, (maxY - yRef) / f + yRef, f == 1, isInverted);
this.xFactorForScale = (this.maxXOnScale - this.minXOnScale) / (xPixels - 1);
this.yFactorForScale = (this.maxYOnScale - this.minYOnScale) / (yPixels - 1);
}, "~N,~N,~B");
c$.copyScaleFactors = Clazz.defineMethod(c$, "copyScaleFactors", 
function(sdFrom, sdTo){
for (var i = 0; i < sdFrom.length; i++) {
sdTo[i].spectrumScaleFactor = sdFrom[i].spectrumScaleFactor;
sdTo[i].spectrumYRef = sdFrom[i].spectrumYRef;
sdTo[i].userYFactor = sdFrom[i].userYFactor;
sdTo[i].specShift = sdFrom[i].specShift;
sdTo[i].isShiftZoomedY = sdFrom[i].isShiftZoomedY;
}
}, "~A,~A");
c$.copyYScales = Clazz.defineMethod(c$, "copyYScales", 
function(sdFrom, sdTo){
for (var i = 0; i < sdFrom.length; i++) {
sdTo[i].initMinYOnScale = sdFrom[i].initMinYOnScale;
sdTo[i].initMaxYOnScale = sdFrom[i].initMaxYOnScale;
sdTo[i].minY = sdFrom[i].minY;
sdTo[i].maxY = sdFrom[i].maxY;
if (sdFrom[i].isShiftZoomedY) {
sdTo[i].isShiftZoomedY = true;
sdTo[i].minYOnScale = sdFrom[i].minYOnScale;
sdTo[i].maxYOnScale = sdFrom[i].maxYOnScale;
}}
}, "~A,~A");
c$.setDataPointIndices = Clazz.defineMethod(c$, "setDataPointIndices", 
function(graphsTemp, initX, finalX, minPoints, startIndices, endIndices){
var nSpectraOK = 0;
var nSpectra = graphsTemp.size();
for (var i = 0; i < nSpectra; i++) {
var xyCoords = graphsTemp.get(i).getXYCoords();
if (JSV.common.ScaleData.getXRange(i, xyCoords, initX, finalX, 0, xyCoords.length - 1, startIndices, endIndices) >= minPoints) nSpectraOK++;
}
return (nSpectraOK == nSpectra);
}, "JU.Lst,~N,~N,~N,~A,~A");
c$.fixScale = Clazz.defineMethod(c$, "fixScale", 
function(map){
if (map.isEmpty()) return;
while (true) {
for (var entry, $entry = map.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) {
var s = entry.getValue();
var pt = s.indexOf("E");
if (pt >= 0) s = s.substring(0, pt);
if (s.indexOf(".") < 0) return;
if (!s.endsWith("0") && !s.endsWith(".")) return;
}
for (var entry, $entry = map.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) {
var s = entry.getValue();
var pt = s.indexOf("E");
if (pt >= 0) entry.setValue(s.substring(0, pt - 1) + s.substring(pt));
 else entry.setValue(s.substring(0, s.length - 1));
}
}
}, "java.util.Map");
Clazz.defineMethod(c$, "scaleBy", 
function(f){
if (this.isShiftZoomedY) {
var center = (this.isYZeroOnScale() ? this.spectrumYRef : (this.minYOnScale + this.maxYOnScale) / 2);
this.minYOnScale = center - (center - this.minYOnScale) / f;
this.maxYOnScale = center - (center - this.maxYOnScale) / f;
} else {
this.spectrumScaleFactor *= f;
}}, "~N");
c$.NTICKS =  Clazz.newIntArray(-1, [2, 5, 10, 10]);
c$.LOGTICKS =  Clazz.newDoubleArray(-1, [Math.log10(2), Math.log10(5), 0, 1]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["java.lang.Enum", "JSV.common.MeasurementData", "$.IntegralComparator"], "JSV.common.IntegralData", ["java.util.Collections", "$.StringTokenizer", "JU.AU", "$.BS", "$.DF", "$.Lst", "$.PT", "JSV.common.Annotation", "$.Coordinate", "$.Integral", "$.ScriptToken"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.percentMinY = 0;
this.percentOffset = 0;
this.intRange = 0;
this.normalizationFactor = 1;
this.percentRange = 0;
this.offset = 0;
this.integralTotal = 0;
this.haveRegions = false;
this.xyCoords = null;
Clazz.instantialize(this, arguments);}, JSV.common, "IntegralData", JSV.common.MeasurementData);
Clazz.makeConstructor(c$, 
function(integralMinY, integralOffset, integralRange, spec){
Clazz.superConstructor(this, JSV.common.IntegralData, [JSV.common.Annotation.AType.Integration, spec]);
this.percentMinY = integralMinY;
this.percentOffset = integralOffset;
this.percentRange = integralRange;
this.calculateIntegral();
}, "~N,~N,~N,JSV.common.Spectrum");
Clazz.makeConstructor(c$, 
function(spec, p){
Clazz.superConstructor(this, JSV.common.IntegralData, [JSV.common.Annotation.AType.Integration, spec]);
if (p == null) {
this.autoIntegrate();
return;
}this.percentOffset = p.integralOffset;
this.percentRange = p.integralRange;
this.calculateIntegral();
}, "JSV.common.Spectrum,JSV.common.Parameters");
Clazz.defineMethod(c$, "getPercentMinimumY", 
function(){
return this.percentMinY;
});
Clazz.defineMethod(c$, "getPercentOffset", 
function(){
return this.percentOffset;
});
Clazz.defineMethod(c$, "getIntegralFactor", 
function(){
return this.intRange;
});
Clazz.defineMethod(c$, "update", 
function(parameters){
this.update(parameters.integralMinY, parameters.integralOffset, parameters.integralRange);
}, "JSV.common.Parameters");
Clazz.defineMethod(c$, "update", 
function(integralMinY, integralOffset, integralRange){
var percentRange0 = this.percentRange;
if (integralRange <= 0 || integralRange == this.percentRange && integralOffset == this.percentOffset) return;
this.percentOffset = integralOffset;
this.percentRange = integralRange;
this.checkRange();
var intRangeNew = integralRange / 100 / this.integralTotal;
var offsetNew = integralOffset / 100;
for (var i = 0; i < this.xyCoords.length; i++) {
var y = this.xyCoords[i].getYVal();
y = (y - this.offset) / this.intRange;
this.xyCoords[i].setYVal(y * intRangeNew + offsetNew);
}
if (this.normalizationFactor != 1) this.normalizationFactor *= percentRange0 / integralRange;
if (this.haveRegions) {
for (var i = this.size(); --i >= 0; ) {
var ir = this.get(i);
var y1 = this.getYValueAt(ir.getXVal());
var y2 = this.getYValueAt(ir.getXVal2());
ir.setYVal(y1);
ir.setYVal2(y2);
ir.setValue(Math.abs(y2 - y1) * 100 * this.normalizationFactor);
}
}this.intRange = intRangeNew;
this.offset = offsetNew;
}, "~N,~N,~N");
Clazz.defineMethod(c$, "getYValueAt", 
function(x){
return JSV.common.Coordinate.getYValueAt(this.xyCoords, x);
}, "~N");
Clazz.defineMethod(c$, "addIntegralRegion", 
function(x1, x2){
if (Double.isNaN(x1)) {
this.haveRegions = false;
this.clear();
return null;
}if (Double.isNaN(x2)) {
return this.splitIntegral(x1);
}if (x1 == x2) return null;
if (x1 < x2) {
this.clear(x1, x2);
return null;
}var y1 = this.getYValueAt(x1);
var y2 = this.getYValueAt(x2);
this.haveRegions = true;
var $in =  new JSV.common.Integral().setInt(x1, y1, this.spec, Math.abs(y2 - y1) * 100 * this.normalizationFactor, x2, y2);
this.clear(x1, x2);
this.addLast($in);
java.util.Collections.sort(this, JSV.common.IntegralData.c);
return $in;
}, "~N,~N");
Clazz.defineMethod(c$, "splitIntegral", 
function(x){
var i = this.find(x);
if (i < 0) return null;
var integral = this.removeItemAt(i);
var x0 = integral.getXVal();
var x2 = integral.getXVal2();
this.addIntegralRegion(x0, x);
return this.addIntegralRegion(x, x2);
}, "~N");
Clazz.overrideMethod(c$, "setSpecShift", 
function(dx){
JSV.common.Coordinate.shiftX(this.xyCoords, dx);
for (var i = this.size(); --i >= 1; ) {
this.get(i).addSpecShift(dx);
}
}, "~N");
Clazz.defineMethod(c$, "addMarks", 
function(ppms){
ppms = JU.PT.rep(" " + ppms, ",", " ");
ppms = JU.PT.rep(ppms, " -", " #");
ppms = JU.PT.rep(ppms, "--", "-#");
ppms = ppms.$replace('-', '^');
ppms = ppms.$replace('#', '-');
var tokens = JSV.common.ScriptToken.getTokens(ppms);
for (var i = 0; i < tokens.size(); i++) {
try {
var s = tokens.get(i);
var norm = 0;
var pt = s.indexOf('^');
if (pt < 0) continue;
var pt2 = s.indexOf(':');
if (pt2 > pt) {
norm = Double.$valueOf(s.substring(pt2 + 1).trim()).doubleValue();
s = s.substring(0, pt2).trim();
}var x2 = Double.$valueOf(s.substring(0, pt).trim()).doubleValue();
var x1 = Double.$valueOf(s.substring(pt + 1).trim()).doubleValue();
if (x1 == 0 && x2 == 0) this.clear();
if (x1 == x2) continue;
var m = this.addIntegralRegion(Math.max(x1, x2), Math.min(x1, x2));
if (m != null && norm > 0) this.setSelectedIntegral(m, norm);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
continue;
} else {
throw e;
}
}
}
}, "~S");
Clazz.defineMethod(c$, "calculateIntegral", 
function(){
var specXyCoords = this.spec.getXYCoords();
this.xyCoords =  new Array(specXyCoords.length);
this.integralTotal = 0;
this.checkRange();
var minY = 1E100;
for (var i = 0; i < specXyCoords.length; i++) {
var y = specXyCoords[i].getYVal();
if (y < minY && y >= 0) minY = y;
}
var minI = 1E100;
var maxI = -1.0E100;
for (var i = 0; i < specXyCoords.length; i++) {
var y = specXyCoords[i].getYVal();
this.integralTotal += (y - minY);
if (this.integralTotal < minI) minI = this.integralTotal;
if (this.integralTotal > maxI) maxI = this.integralTotal;
}
this.integralTotal = maxI - minI;
this.intRange = (this.percentRange / 100) / this.integralTotal;
this.offset = (this.percentOffset / 100);
var integral = 0;
for (var i = specXyCoords.length; --i >= 0; ) {
var y = specXyCoords[i].getYVal();
integral += (y - minY);
this.xyCoords[i] =  new JSV.common.Coordinate().set(specXyCoords[i].getXVal(), integral * this.intRange + this.offset);
}
return this.xyCoords;
});
Clazz.defineMethod(c$, "checkRange", 
function(){
this.percentOffset = Math.max(5, this.percentOffset);
this.percentRange = Math.max(10, this.percentRange);
});
c$.getIntegrationRatiosFromString = Clazz.defineMethod(c$, "getIntegrationRatiosFromString", 
function(spec, key_values){
var ratios =  new JU.Lst();
var allParamTokens =  new java.util.StringTokenizer(key_values, ",");
while (allParamTokens.hasMoreTokens()) {
var token = allParamTokens.nextToken();
var eachParam =  new java.util.StringTokenizer(token, ":");
var ratio =  new JSV.common.Annotation().setA(Double.parseDouble(eachParam.nextToken()), 0.0, spec, eachParam.nextToken(), true, false, 0, 0);
ratios.addLast(ratio);
}
return ratios;
}, "JSV.common.Spectrum,~S");
Clazz.defineMethod(c$, "getXYCoords", 
function(){
return this.xyCoords;
});
Clazz.defineMethod(c$, "getPercentYValueAt", 
function(x){
return this.getYValueAt(x) * 100;
}, "~N");
Clazz.defineMethod(c$, "dispose", 
function(){
this.spec = null;
this.xyCoords = null;
});
Clazz.defineMethod(c$, "setSelectedIntegral", 
function(integral, val){
var val0 = integral.getValue();
var factor = (val <= 0 ? 1 / this.normalizationFactor : val / val0);
this.factorAllIntegrals(factor, val <= 0);
}, "JSV.common.Measurement,~N");
Clazz.defineMethod(c$, "factorAllIntegrals", 
function(factor, isReset){
for (var i = 0; i < this.size(); i++) {
var m = this.get(i);
m.setValue(factor * m.getValue());
}
this.normalizationFactor = (isReset ? 1 : this.normalizationFactor * factor);
}, "~N,~B");
Clazz.defineMethod(c$, "remove", 
function(i){
return this.removeItemAt(i);
}, "~N");
Clazz.defineMethod(c$, "getBitSet", 
function(){
var bs = JU.BS.newN(this.xyCoords.length);
if (this.size() == 0) {
bs.setBits(0, this.xyCoords.length);
return bs;
}for (var i = this.size(); --i >= 0; ) {
var m = this.get(i);
var x1 = JSV.common.Coordinate.getNearestIndexForX(this.xyCoords, m.getXVal());
var x2 = JSV.common.Coordinate.getNearestIndexForX(this.xyCoords, m.getXVal2());
bs.setBits(Math.min(x1, x2), Math.max(x1, x2));
}
return bs;
});
Clazz.overrideMethod(c$, "getMeasurementListArray", 
function(units){
var data =  new Array(this.size());
for (var pt = 0, i = this.size(); --i >= 0; ) data[pt++] =  Clazz.newArray(-1, ["" + pt, JU.DF.formatDecimalDbl(this.get(i).getXVal(), 2), JU.DF.formatDecimalDbl(this.get(i).getXVal2(), 2), this.get(i).text]);

return data;
}, "~S");
Clazz.overrideMethod(c$, "getMeasurementListArrayReal", 
function(units){
var data = JU.AU.newDouble2(this.size());
for (var pt = 0, i = this.size(); --i >= 0; pt++) data[pt] =  Clazz.newDoubleArray(-1, [this.get(i).getXVal(), this.get(i).getXVal2(), this.get(i).getValue()]);

return data;
}, "~S");
Clazz.overrideMethod(c$, "getDataHeader", 
function(){
return JSV.common.IntegralData.$HEADER;
});
Clazz.defineMethod(c$, "shiftY", 
function(yOld, yNew, yPixel0, yPixels){
var pt = Clazz.doubleToInt(100.0 * (yPixel0 + yPixels - yNew) / yPixels);
if (yOld < 0) pt -= this.percentOffset;
if (yOld < 0) {
this.update(0, this.percentOffset, pt);
} else {
this.update(0, pt, this.percentRange);
}}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "autoIntegrate", 
function(){
if (this.xyCoords == null) this.calculateIntegral();
if (this.xyCoords.length == 0) return;
this.clear();
var iStart = -1;
var cutoff = 0.0001;
var nCount = 0;
var nMin = 20;
var y0 = this.xyCoords[this.xyCoords.length - 1].getYVal();
for (var i = this.xyCoords.length - 1; --i >= 0; ) {
var y = this.xyCoords[i].getYVal();
nCount++;
if ((y - y0) < cutoff && iStart < 0) {
if (y < y0) {
y0 = y;
nCount = 0;
}continue;
}if (iStart < 0) {
iStart = i + Math.min(nCount, nMin);
y0 = y;
nCount = 0;
continue;
}if ((y - y0) < cutoff) {
if (nCount == 1) y0 = y;
if (nCount >= nMin) {
this.addIntegralRegion(this.xyCoords[iStart].getXVal(), this.xyCoords[i].getXVal());
iStart = -1;
y0 = y;
nCount = 0;
}} else {
nCount = 0;
y0 = y;
}}
var nH = this.spec.getHydrogenCount();
if (nH > 0) this.factorAllIntegrals(nH / this.percentRange, false);
});
Clazz.defineMethod(c$, "getInfo", 
function(info){
info.put("offset", Double.$valueOf(this.myParams.integralOffset));
info.put("range", Double.$valueOf(this.myParams.integralRange));
info.put("normalizationFactor", Double.$valueOf(this.normalizationFactor));
info.put("integralTotal", Double.$valueOf(this.integralTotal));
Clazz.superCall(this, JSV.common.IntegralData, "getInfo", [info]);
}, "java.util.Map");
Clazz.defineMethod(c$, "setMinimumIntegral", 
function(val){
for (var i = this.size(); --i >= 0; ) if (this.get(i).getValue() < val) this.removeItemAt(i);

}, "~N");
/*if2*/;(function(){
var c$ = Clazz.declareType(JSV.common.IntegralData, "IntMode", Enum);
c$.getMode = Clazz.defineMethod(c$, "getMode", 
function(value){
for (var mode, $mode = 0, $$mode = JSV.common.IntegralData.IntMode.values(); $mode < $$mode.length && ((mode = $$mode[$mode]) || true); $mode++) if (value.startsWith(mode.name())) return mode;

return JSV.common.IntegralData.IntMode.NA;
}, "~S");
Clazz.defineEnumConstant(c$, "OFF", 0, []);
Clazz.defineEnumConstant(c$, "ON", 1, []);
Clazz.defineEnumConstant(c$, "TOGGLE", 2, []);
Clazz.defineEnumConstant(c$, "AUTO", 3, []);
Clazz.defineEnumConstant(c$, "LIST", 4, []);
Clazz.defineEnumConstant(c$, "MARK", 5, []);
Clazz.defineEnumConstant(c$, "MIN", 6, []);
Clazz.defineEnumConstant(c$, "UPDATE", 7, []);
Clazz.defineEnumConstant(c$, "CLEAR", 8, []);
Clazz.defineEnumConstant(c$, "NA", 9, []);
/*eoif2*/})();
c$.c =  new JSV.common.IntegralComparator();
c$.$HEADER =  Clazz.newArray(-1, ["peak", "start/ppm", "end/ppm", "value"]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JU.Lst", "JSV.api.AnnotationData"], "JSV.common.MeasurementData", ["JU.AU", "$.DF", "JSV.common.Annotation", "$.Parameters"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.type = null;
this.spec = null;
this.units = null;
this.precision = 0;
this.myParams = null;
this.isON = true;
this.key = null;
Clazz.instantialize(this, arguments);}, JSV.common, "MeasurementData", JU.Lst, JSV.api.AnnotationData);
Clazz.makeConstructor(c$, 
function(type, spec){
Clazz.superConstructor (this, JSV.common.MeasurementData, []);
this.type = type;
this.spec = spec;
this.myParams =  new JSV.common.Parameters().setName("MeasurementData");
}, "JSV.common.Annotation.AType,JSV.common.Spectrum");
Clazz.defineMethod(c$, "getMeasurements", 
function(){
return this;
});
Clazz.overrideMethod(c$, "getAType", 
function(){
return this.type;
});
Clazz.overrideMethod(c$, "getState", 
function(){
return this.isON;
});
Clazz.overrideMethod(c$, "setState", 
function(b){
this.isON = b;
}, "~B");
Clazz.defineMethod(c$, "setMeasurements", 
function(measurements){
}, "JU.Lst");
Clazz.overrideMethod(c$, "getParameters", 
function(){
return this.myParams;
});
Clazz.defineMethod(c$, "getDataHeader", 
function(){
return JSV.common.MeasurementData.HEADER;
});
Clazz.defineMethod(c$, "getMeasurementListArray", 
function(units){
this.units = units;
var ddata = this.getMeasurementListArrayReal(units);
var precisionX = (this.spec.isNMR() ? 4 : 2);
var precisionDX = (this.spec.isHNMR() && units.equals("ppm") ? 4 : 2);
var data =  new Array(this.size());
for (var i = this.size(); --i >= 0; ) data[i] =  Clazz.newArray(-1, ["" + (i + 1), JU.DF.formatDecimalDbl(ddata[i][0], precisionX), JU.DF.formatDecimalDbl(ddata[i][1], precisionX), JU.DF.formatDecimalDbl(ddata[i][2], precisionDX)]);

return data;
}, "~S");
Clazz.defineMethod(c$, "getMeasurementListArrayReal", 
function(units){
var toHz = this.spec.isNMR() && units.equalsIgnoreCase("HZ");
var data = JU.AU.newDouble2(this.size());
for (var pt = 0, i = this.size(); --i >= 0; ) {
var y = this.get(i).getValue();
if (toHz) y *= this.spec.getObservedFreq();
data[pt++] =  Clazz.newDoubleArray(-1, [this.get(i).getXVal(), this.get(i).getXVal2(), y]);
}
return data;
}, "~S");
c$.checkParameters = Clazz.defineMethod(c$, "checkParameters", 
function(md, p){
if (md.size() == 0) return false;
var myParams = md.getParameters();
switch (md.getAType()) {
case JSV.common.Annotation.AType.Integration:
break;
case JSV.common.Annotation.AType.PeakList:
return (p.peakListInterpolation.equals(myParams.peakListInterpolation) && p.peakListThreshold == myParams.peakListThreshold);
case JSV.common.Annotation.AType.Measurements:
break;
case JSV.common.Annotation.AType.NONE:
}
return false;
}, "JSV.common.MeasurementData,JSV.common.ColorParameters");
Clazz.overrideMethod(c$, "getSpectrum", 
function(){
return this.spec;
});
Clazz.overrideMethod(c$, "getData", 
function(){
return this;
});
Clazz.defineMethod(c$, "clear", 
function(x1, x2){
for (var i = this.size(); --i >= 0; ) {
var $in = this.get(i);
if ($in.text.length == 0 || $in.overlaps(x1, x2)) {
this.removeItemAt(i);
}}
}, "~N,~N");
Clazz.defineMethod(c$, "find", 
function(x){
for (var i = this.size(); --i >= 0; ) {
var $in = this.get(i);
if ($in.overlaps(x, x)) {
return i;
}}
return -1;
}, "~N");
Clazz.overrideMethod(c$, "setSpecShift", 
function(dx){
for (var i = this.size(); --i >= 0; ) {
var m = this.get(i);
var x = m.getXVal() + dx;
m.setXVal(x);
m.setValue(x);
m.text = JU.DF.formatDecimalDbl(x, this.precision);
}
}, "~N");
Clazz.overrideMethod(c$, "getGraphSetKey", 
function(){
return this.key;
});
Clazz.overrideMethod(c$, "setGraphSetKey", 
function(key){
this.key = key;
}, "~S");
Clazz.overrideMethod(c$, "isVisible", 
function(){
return true;
});
Clazz.defineMethod(c$, "getInfo", 
function(info){
info.put("header", this.getDataHeader());
info.put("table", this.getMeasurementListArrayReal("ppm"));
if (this.units != null) info.put("units", this.units);
}, "java.util.Map");
Clazz.overrideMethod(c$, "isDialog", 
function(){
return false;
});
c$.HEADER =  Clazz.newArray(-1, ["", "start", "end", "value"]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "AnnotationData");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
(function(){
var c$ = Clazz.declareType(JSV.common, "IntegralComparator", null, java.util.Comparator);
Clazz.overrideMethod(c$, "compare", 
function(m1, m2){
return (m1.getXVal() < m2.getXVal() ? -1 : m1.getXVal() > m2.getXVal() ? 1 : 0);
}, "JSV.common.Measurement,JSV.common.Measurement");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.Measurement"], "JSV.common.Integral", null, function(){
var c$ = Clazz.declareType(JSV.common, "Integral", JSV.common.Measurement);
Clazz.defineMethod(c$, "setInt", 
function(x1, y1, spec, value, x2, y2){
this.setA(x1, y1, spec, "", false, false, 0, 6);
this.setPt2(x2, y2);
this.setValue(value);
return this;
}, "~N,~N,JSV.common.Spectrum,~N,~N,~N");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.Annotation", "$.Coordinate"], "JSV.common.Measurement", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.pt2 = null;
this.value = 0;
Clazz.instantialize(this, arguments);}, JSV.common, "Measurement", JSV.common.Annotation);
Clazz.prepareFields (c$, function(){
this.pt2 =  new JSV.common.Coordinate();
});
Clazz.defineMethod(c$, "setM1", 
function(x, y, spec){
this.setA(x, y, spec, "", false, false, 0, 6);
this.setPt2(this.getXVal(), this.getYVal());
return this;
}, "~N,~N,JSV.common.Spectrum");
Clazz.defineMethod(c$, "copyM", 
function(){
var m =  new JSV.common.Measurement();
m.setA(this.getXVal(), this.getYVal(), this.spec, this.text, false, false, this.offsetX, this.offsetY);
m.setPt2(this.pt2.getXVal(), this.pt2.getYVal());
return m;
});
Clazz.defineMethod(c$, "setPt2", 
function(spec, doSetPt2){
this.spec = spec;
if (doSetPt2) this.setPt2(this.getXVal(), this.getYVal());
return this;
}, "JSV.common.Spectrum,~B");
Clazz.defineMethod(c$, "setPt2", 
function(x, y){
this.pt2.setXVal(x);
this.pt2.setYVal(y);
this.value = Math.abs(x - this.getXVal());
this.text = this.spec.setMeasurementText(this);
}, "~N,~N");
Clazz.defineMethod(c$, "getSpectrum", 
function(){
return this.spec;
});
Clazz.defineMethod(c$, "setValue", 
function(value){
this.value = value;
this.text = this.spec.setMeasurementText(this);
}, "~N");
Clazz.defineMethod(c$, "getValue", 
function(){
return this.value;
});
Clazz.defineMethod(c$, "getXVal2", 
function(){
return this.pt2.getXVal();
});
Clazz.defineMethod(c$, "getYVal2", 
function(){
return this.pt2.getYVal();
});
Clazz.overrideMethod(c$, "addSpecShift", 
function(dx){
this.setXVal(this.getXVal() + dx);
this.pt2.setXVal(this.pt2.getXVal() + dx);
}, "~N");
Clazz.defineMethod(c$, "setYVal2", 
function(y2){
this.pt2.setYVal(y2);
}, "~N");
Clazz.defineMethod(c$, "overlaps", 
function(x1, x2){
return (Math.min(this.getXVal(), this.getXVal2()) < Math.max(x1, x2) && Math.max(this.getXVal(), this.getXVal2()) > Math.min(x1, x2));
}, "~N,~N");
Clazz.overrideMethod(c$, "toString", 
function(){
return "[" + this.getXVal() + "," + this.pt2.getXVal() + "]";
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.MeasurementData"], "JSV.common.PeakData", ["JU.DF", "JSV.common.Coordinate", "$.PeakPick"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.thresh = 0;
this.minY = 0;
this.maxY = 0;
Clazz.instantialize(this, arguments);}, JSV.common, "PeakData", JSV.common.MeasurementData);
Clazz.defineMethod(c$, "getThresh", 
function(){
return this.thresh;
});
Clazz.overrideMethod(c$, "getDataHeader", 
function(){
return (this.spec.isHNMR() ? JSV.common.PeakData.HNMR_HEADER :  Clazz.newArray(-1, ["peak", this.spec.getXUnits(), this.spec.getYUnits()]));
});
Clazz.overrideMethod(c$, "getMeasurementListArray", 
function(units){
var data =  new Array(this.size());
var last =  Clazz.newDoubleArray(-1, [-1.0E100, 1e100, 1e100]);
var ddata;
for (var pt = 0, i = this.size(); --i >= 0; pt++) {
ddata = this.spec.getPeakListArray(this.get(i), last, this.maxY);
if (ddata.length == 2) data[pt] =  Clazz.newArray(-1, ["" + (pt + 1), JU.DF.formatDecimalDbl(ddata[0], 2), JU.DF.formatDecimalDbl(ddata[1], 4)]);
 else data[pt] =  Clazz.newArray(-1, ["" + (pt + 1), JU.DF.formatDecimalDbl(ddata[0], 4), JU.DF.formatDecimalDbl(ddata[1], 4), JU.DF.formatDecimalDbl(ddata[2], 2), (ddata[3] == 0 ? "" : JU.DF.formatDecimalDbl(ddata[3], 2)), (ddata[4] == 0 ? "" : JU.DF.formatDecimalDbl(ddata[4], 2)), (ddata[5] == 0 ? "" : JU.DF.formatDecimalDbl(ddata[5], 2))]);
}
return data;
}, "~S");
Clazz.overrideMethod(c$, "getMeasurementListArrayReal", 
function(units){
var data =  Clazz.newDoubleArray (this.size(), 0);
var last =  Clazz.newDoubleArray(-1, [-1.0E100, 1e100, 1e100]);
for (var pt = 0, i = this.size(); --i >= 0; pt++) data[pt] = this.spec.getPeakListArray(this.get(i), last, this.maxY);

return data;
}, "~S");
Clazz.defineMethod(c$, "getInfo", 
function(info){
info.put("interpolation", this.myParams.peakListInterpolation);
info.put("threshold", Double.$valueOf(this.myParams.peakListThreshold));
Clazz.superCall(this, JSV.common.PeakData, "getInfo", [info]);
}, "java.util.Map");
Clazz.defineMethod(c$, "setPeakList", 
function(p, precision, view){
this.precision = (precision == -2147483648 ? this.spec.getDefaultUnitPrecision() : precision);
var xyCoords = this.spec.getXYCoords();
if (xyCoords.length < 3) return;
this.clear();
if (p != null) {
this.myParams.peakListInterpolation = p.peakListInterpolation;
this.myParams.peakListThreshold = p.peakListThreshold;
}var doInterpolate = (this.myParams.peakListInterpolation.equals("parabolic"));
var isInverted = this.spec.isInverted();
this.minY = view.minYOnScale;
this.maxY = view.maxYOnScale;
var minX = view.minXOnScale;
var maxX = view.maxXOnScale;
this.thresh = this.myParams.peakListThreshold;
if (Double.isNaN(this.thresh)) this.thresh = this.myParams.peakListThreshold = (this.minY + this.maxY) / 2;
var yLast = 0;
var y3 =  Clazz.newDoubleArray(-1, [xyCoords[0].getYVal(), yLast = xyCoords[1].getYVal(), 0]);
var n = 0;
if (isInverted) for (var i = 2; i < xyCoords.length; i++) {
var y = y3[i % 3] = xyCoords[i].getYVal();
if (yLast < this.thresh && y3[(i - 2) % 3] > yLast && yLast < y) {
var x = (doInterpolate ? JSV.common.Coordinate.parabolicInterpolation(xyCoords, i - 1) : xyCoords[i - 1].getXVal());
if (x >= minX || x <= maxX) {
var m =  new JSV.common.PeakPick().setValue(x, y, this.spec, null, 0);
this.addLast(m);
if (++n == 100) break;
}}yLast = y;
}
 else for (var i = 2; i < xyCoords.length; i++) {
var y = y3[i % 3] = xyCoords[i].getYVal();
if (yLast > this.thresh && y3[(i - 2) % 3] < yLast && yLast > y) {
var x = (doInterpolate ? JSV.common.Coordinate.parabolicInterpolation(xyCoords, i - 1) : xyCoords[i - 1].getXVal());
if (x >= minX && x <= maxX) {
var m =  new JSV.common.PeakPick().setValue(x, y, this.spec, JU.DF.formatDecimalDbl(x, precision), x);
this.addLast(m);
if (++n == 100) break;
}}yLast = y;
}
}, "JSV.common.Parameters,~N,JSV.common.ScaleData");
c$.HNMR_HEADER =  Clazz.newArray(-1, ["peak", "shift/ppm", "intens", "shift/hz", "diff/hz", "2-diff", "3-diff"]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.Measurement"], "JSV.common.PeakPick", null, function(){
var c$ = Clazz.declareType(JSV.common, "PeakPick", JSV.common.Measurement);
Clazz.defineMethod(c$, "setValue", 
function(x, y, spec, text, value){
if (text == null) {
this.set(x, y);
this.setPt2(spec, false);
} else {
this.setA(x, y, spec, text, false, false, 0, 6);
this.value = value;
this.setPt2(this.getXVal(), this.getYVal());
}return this;
}, "~N,~N,JSV.common.Spectrum,~S,~N");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["java.util.EventObject"], "JSV.common.PeakPickEvent", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.coord = null;
this.peakInfo = null;
Clazz.instantialize(this, arguments);}, JSV.common, "PeakPickEvent", java.util.EventObject);
Clazz.makeConstructor(c$, 
function(source, coord, peakInfo){
Clazz.superConstructor(this, JSV.common.PeakPickEvent, [source]);
this.coord = coord;
this.peakInfo = (peakInfo == null ? null : peakInfo);
}, "~O,JSV.common.Coordinate,JSV.common.PeakInfo");
Clazz.defineMethod(c$, "getCoord", 
function(){
return this.coord;
});
Clazz.defineMethod(c$, "getPeakInfo", 
function(){
return this.peakInfo;
});
Clazz.overrideMethod(c$, "toString", 
function(){
return (this.peakInfo == null ? null : this.peakInfo.toString());
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.Coordinate", "$.ScriptToken"], "JSV.common.PlotWidget", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.xPixel0 = 0;
this.yPixel0 = 0;
this.xPixel1 = 0;
this.yPixel1 = 0;
this.isPin = false;
this.isPinOrCursor = false;
this.isXtype = false;
this.is2D = false;
this.is2Donly = false;
this.isEnabled = true;
this.isVisible = false;
this.name = null;
this.color = null;
Clazz.instantialize(this, arguments);}, JSV.common, "PlotWidget", JSV.common.Coordinate);
Clazz.prepareFields (c$, function(){
this.color = JSV.common.ScriptToken.PLOTCOLOR;
});
Clazz.makeConstructor(c$, 
function(name){
Clazz.superConstructor (this, JSV.common.PlotWidget, []);
this.name = name;
this.isPin = (name.charAt(0) == 'p');
this.isPinOrCursor = (name.charAt(0) != 'z');
this.isXtype = (name.indexOf("x") >= 0);
this.is2D = (name.indexOf("2D") >= 0);
this.is2Donly = (this.is2D && name.charAt(0) == 'p');
}, "~S");
Clazz.overrideMethod(c$, "toString", 
function(){
return this.name + (!this.isPinOrCursor ? "" + this.xPixel0 + " " + this.yPixel0 + " / " + this.xPixel1 + " " + this.yPixel1 : " x=" + this.getXVal() + "/" + this.xPixel0 + " y=" + this.getYVal() + "/" + this.yPixel0);
});
Clazz.defineMethod(c$, "selected", 
function(xPixel, yPixel){
return (this.isVisible && Math.abs(xPixel - this.xPixel0) < 5 && Math.abs(yPixel - this.yPixel0) < 5);
}, "~N,~N");
Clazz.defineMethod(c$, "setX", 
function(x, xPixel){
this.setXVal(x);
this.xPixel0 = this.xPixel1 = xPixel;
}, "~N,~N");
Clazz.defineMethod(c$, "setY", 
function(y, yPixel){
this.setYVal(y);
this.yPixel0 = this.yPixel1 = yPixel;
}, "~N,~N");
Clazz.defineMethod(c$, "getValue", 
function(){
return (this.isXtype ? this.getXVal() : this.getYVal());
});
Clazz.defineMethod(c$, "setEnabled", 
function(enabled){
this.isEnabled = enabled;
}, "~B");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.ViewData", ["JSV.common.Coordinate", "$.ScaleData"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.scaleData = null;
this.thisScale = null;
this.nSpectra = 0;
this.iThisScale = 0;
this.spectra = null;
Clazz.instantialize(this, arguments);}, JSV.common, "ViewData", null);
Clazz.makeConstructor(c$, 
function(spectra, yPt1, yPt2, startList, endList, isContinuous, is2D){
this.nSpectra = (is2D ? 1 : spectra.size());
this.scaleData =  new Array(this.nSpectra);
for (var j = 0; j < this.nSpectra; j++) this.scaleData[j] =  new JSV.common.ScaleData(startList[j], endList[j]);

this.init(spectra, yPt1, yPt2, isContinuous);
}, "JU.Lst,~N,~N,~A,~A,~B,~B");
Clazz.makeConstructor(c$, 
function(spectra, yPt1, yPt2, isContinuous){
this.nSpectra = spectra.size();
var n = spectra.get(0).getXYCoords().length;
this.scaleData =  new Array(1);
this.scaleData[0] =  new JSV.common.ScaleData(0, n - 1);
this.init(spectra, yPt1, yPt2, isContinuous);
}, "JU.Lst,~N,~N,~B");
Clazz.defineMethod(c$, "getScaleData", 
function(){
return this.scaleData;
});
Clazz.defineMethod(c$, "getScale", 
function(){
return this.thisScale;
});
Clazz.defineMethod(c$, "init", 
function(spectra, yPt1, yPt2, isContinuous){
if (spectra == null) spectra = this.spectra;
 else this.spectra = spectra;
this.thisScale = this.scaleData[this.iThisScale = 0];
for (var i = 0; i < this.scaleData.length; i++) {
this.scaleData[i].userYFactor = spectra.get(i).getUserYFactor();
this.scaleData[i].spectrumYRef = spectra.get(i).getYRef();
}
this.resetScaleFactors();
var minX = JSV.common.Coordinate.getMinX(spectra, this);
var maxX = JSV.common.Coordinate.getMaxX(spectra, this);
var minY = JSV.common.Coordinate.getMinYUser(spectra, this);
var maxY = JSV.common.Coordinate.getMaxYUser(spectra, this);
if (yPt1 != yPt2) {
minY = yPt1;
maxY = yPt2;
if (minY > maxY) {
var t = minY;
minY = maxY;
maxY = t;
}}var isInverted = spectra.get(0).isInverted();
for (var i = 0; i < this.scaleData.length; i++) {
this.scaleData[i].setMinMax(minX, maxX, minY, maxY);
this.scaleData[i].setScale(isContinuous, isInverted);
}
}, "JU.Lst,~N,~N,~B");
Clazz.defineMethod(c$, "newSpectrum", 
function(spectra){
this.init(spectra, 0, 0, false);
}, "JU.Lst");
Clazz.defineMethod(c$, "setXRangeForSubSpectrum", 
function(xyCoords){
this.setXRange(0, xyCoords, this.scaleData[0].minX, this.scaleData[0].maxX, 0, xyCoords.length - 1);
}, "~A");
Clazz.defineMethod(c$, "setXRange", 
function(i, xyCoords, initX, finalX, iStart, iEnd){
var index = 0;
var ptCount = 0;
for (index = iStart; index <= iEnd; index++) {
var x = xyCoords[index].getXVal();
if (x >= initX) {
this.scaleData[i % this.scaleData.length].startDataPointIndex = index;
break;
}}
for (; index <= iEnd; index++) {
var x = xyCoords[index].getXVal();
ptCount++;
if (x >= finalX) {
break;
}}
this.scaleData[i % this.scaleData.length].endDataPointIndex = index;
return ptCount;
}, "~N,~A,~N,~N,~N,~N");
Clazz.defineMethod(c$, "getStartingPointIndex", 
function(i){
return this.scaleData[i % this.scaleData.length].startDataPointIndex;
}, "~N");
Clazz.defineMethod(c$, "getEndingPointIndex", 
function(i){
return this.scaleData[i % this.scaleData.length].endDataPointIndex;
}, "~N");
Clazz.defineMethod(c$, "areYScalesSame", 
function(i, j){
i %= this.scaleData.length;
j %= this.scaleData.length;
return (this.scaleData[i].minYOnScale == this.scaleData[j].minYOnScale && this.scaleData[i].maxYOnScale == this.scaleData[j].maxYOnScale);
}, "~N,~N");
Clazz.defineMethod(c$, "setScale", 
function(i, xPixels, yPixels, isInverted){
this.iThisScale = i % this.scaleData.length;
this.thisScale = this.scaleData[this.iThisScale];
this.thisScale.setXYScale(xPixels, yPixels, isInverted);
}, "~N,~N,~N,~B");
Clazz.defineMethod(c$, "resetScaleFactors", 
function(){
for (var i = 0; i < this.scaleData.length; i++) this.scaleData[i].spectrumScaleFactor = 1;

});
Clazz.defineMethod(c$, "scaleSpectrum", 
function(i, f){
if (f <= 0 || i >= this.nSpectra) return;
if (i == -2) {
this.thisScale.scale2D(f);
return;
}if (i < 0) for (i = 0; i < this.scaleData.length; i++) this.scaleData[i].scaleBy(f);

 else this.scaleData[i % this.scaleData.length].scaleBy(f);
}, "~N,~N");
Clazz.defineMethod(c$, "getNewScales", 
function(iSelected, isXOnly, y1, y2){
if (isXOnly) return this.scaleData;
iSelected %= this.scaleData.length;
var f1 = (y1 - this.thisScale.minYOnScale) / (this.thisScale.maxYOnScale - this.thisScale.minYOnScale);
var f2 = (y2 - this.thisScale.minYOnScale) / (this.thisScale.maxYOnScale - this.thisScale.minYOnScale);
var sd =  new Array(this.scaleData.length);
for (var i = 0; i < this.scaleData.length; i++) sd[i] = (iSelected >= 0 && i != iSelected ? this.scaleData[i] :  new JSV.common.ScaleData());

JSV.common.ScaleData.copyScaleFactors(this.scaleData, sd);
JSV.common.ScaleData.copyYScales(this.scaleData, sd);
for (var i = 0; i < this.scaleData.length; i++) {
if (iSelected >= 0 && i != iSelected) continue;
sd[i].isShiftZoomedY = true;
sd[i].minYOnScale = this.scaleData[i].minYOnScale * (1 - f1) + f1 * this.scaleData[i].maxYOnScale;
sd[i].maxYOnScale = this.scaleData[i].minYOnScale * (1 - f2) + f2 * this.scaleData[i].maxYOnScale;
}
return sd;
}, "~N,~B,~N,~N");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
(function(){
var c$ = Clazz.decorateAsClass(function(){
this.isub = 0;
this.title = null;
Clazz.instantialize(this, arguments);}, JSV.common, "SubSpecChangeEvent", null);
Clazz.makeConstructor(c$, 
function(isub, title){
this.isub = isub;
this.title = title;
}, "~N,~S");
Clazz.defineMethod(c$, "isValid", 
function(){
return (this.title != null);
});
Clazz.defineMethod(c$, "getSubIndex", 
function(){
return this.isub;
});
Clazz.overrideMethod(c$, "toString", 
function(){
return this.title;
});
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
(function(){
var c$ = Clazz.declareType(JSV.common, "ZoomEvent", null);
/*LV!1824 unnec constructor*/})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(null, "JU.Font", ["JU.AU"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.fid = 0;
this.fontFace = null;
this.fontStyle = null;
this.fontSizeNominal = 0;
this.idFontFace = 0;
this.idFontStyle = 0;
this.fontSize = 0;
this.font = null;
this.fontMetrics = null;
this.manager = null;
this.ascent = 0;
this.descent = 0;
this.isBold = false;
this.isItalic = false;
this.fontSizeAngstroms = 0;
Clazz.instantialize(this, arguments);}, JU, "Font", null);
Clazz.makeConstructor(c$, 
function(manager, fid, idFontFace, idFontStyle, fontSize, fontSizeNominal, fontSizeAngstroms, graphics){
this.manager = manager;
this.fid = fid;
this.fontFace = JU.Font.fontFaces[idFontFace];
this.fontStyle = JU.Font.fontStyles[idFontStyle];
this.idFontFace = idFontFace;
this.idFontStyle = idFontStyle;
this.fontSize = fontSize;
this.fontSizeAngstroms = fontSizeAngstroms;
this.isBold = (idFontStyle & 1) == 1;
this.isItalic = (idFontStyle & 2) == 2;
this.fontSizeNominal = fontSizeNominal;
this.font = manager.newFont(JU.Font.fontFaces[idFontFace], this.isBold, this.isItalic, fontSize);
this.fontMetrics = manager.getFontMetrics(this, graphics);
this.descent = manager.getFontDescent(this.fontMetrics);
this.ascent = manager.getFontAscent(this.fontMetrics);
}, "J.api.FontManager,~N,~N,~N,~N,~N,~N,~O");
c$.getFont3D = Clazz.defineMethod(c$, "getFont3D", 
function(fontID){
return JU.Font.font3ds[fontID];
}, "~N");
c$.createFont3D = Clazz.defineMethod(c$, "createFont3D", 
function(fontface, fontstyle, fontsize, fontsizeNominal, fontSizeAngstroms, manager, graphicsForMetrics){
if (fontsize > 0xFF) fontsize = 0xFF;
if (fontsize < 0) {
fontSizeAngstroms = -fontsize;
fontsizeNominal = fontsize = 10;
}var fontsizeX16 = (Clazz.floatToInt(fontsize)) << 4;
var fontkey = ((fontface & 3) | ((fontstyle & 3) << 2) | (fontsizeX16 << 4));
for (var i = JU.Font.fontkeyCount; --i > 0; ) if (fontkey == JU.Font.fontkeys[i] && JU.Font.font3ds[i].fontSizeNominal == fontsizeNominal) return JU.Font.font3ds[i];

var fontIndexNext = JU.Font.fontkeyCount++;
if (fontIndexNext == JU.Font.fontkeys.length) {
JU.Font.fontkeys = JU.AU.arrayCopyI(JU.Font.fontkeys, fontIndexNext + 8);
JU.Font.font3ds = JU.AU.arrayCopyObject(JU.Font.font3ds, fontIndexNext + 8);
}var font3d =  new JU.Font(manager, fontIndexNext, fontface, fontstyle, fontsize, fontsizeNominal, fontSizeAngstroms, graphicsForMetrics);
JU.Font.font3ds[fontIndexNext] = font3d;
JU.Font.fontkeys[fontIndexNext] = fontkey;
return font3d;
}, "~N,~N,~N,~N,~N,J.api.FontManager,~O");
c$.getFontFaceID = Clazz.defineMethod(c$, "getFontFaceID", 
function(fontface){
return ("Monospaced".equalsIgnoreCase(fontface) ? 2 : "Serif".equalsIgnoreCase(fontface) ? 1 : 0);
}, "~S");
c$.getFontStyleID = Clazz.defineMethod(c$, "getFontStyleID", 
function(fontstyle){
for (var i = 4; --i >= 0; ) if (JU.Font.fontStyles[i].equalsIgnoreCase(fontstyle)) return i;

return -1;
}, "~S");
Clazz.defineMethod(c$, "getAscent", 
function(){
return this.ascent;
});
Clazz.defineMethod(c$, "getDescent", 
function(){
return this.descent;
});
Clazz.defineMethod(c$, "getHeight", 
function(){
return this.getAscent() + this.getDescent();
});
Clazz.defineMethod(c$, "getFontMetrics", 
function(){
return this.fontMetrics;
});
Clazz.defineMethod(c$, "stringWidth", 
function(text){
return this.manager.fontStringWidth(this, text);
}, "~S");
Clazz.defineMethod(c$, "getInfo", 
function(){
return (this.fontSizeAngstroms > 0 ? -this.fontSizeAngstroms : this.fontSizeNominal) + " " + this.fontFace + " " + this.fontStyle;
});
Clazz.overrideMethod(c$, "toString", 
function(){
return "[" + this.getInfo() + "]";
});
c$.fontkeyCount = 1;
c$.fontkeys =  Clazz.newIntArray (8, 0);
c$.font3ds =  new Array(8);
c$.fontFaces =  Clazz.newArray(-1, ["SansSerif", "Serif", "Monospaced", ""]);
c$.fontStyles =  Clazz.newArray(-1, ["Plain", "Bold", "Italic", "BoldItalic"]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.PanelNode", ["JU.SB", "JSV.common.Parameters"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.treeNode = null;
this.source = null;
this.fileName = null;
this.jsvp = null;
this.id = null;
this.legend = null;
this.isSelected = false;
this.isView = false;
this.isSimulation = false;
this.frameTitle = null;
Clazz.instantialize(this, arguments);}, JSV.common, "PanelNode", null);
Clazz.makeConstructor(c$, 
function(id, fileName, source, jsvp){
this.id = id;
this.source = source;
this.fileName = fileName;
this.isSimulation = (source.getFilePath().indexOf("http://SIMULATION/") >= 0);
this.jsvp = jsvp;
if (jsvp != null) {
this.pd().getSpectrumAt(0).setId(id);
this.frameTitle = jsvp.getTitle();
}}, "~S,~S,JSV.source.JDXSource,JSV.api.JSVPanel");
Clazz.defineMethod(c$, "setTreeNode", 
function(node){
this.treeNode = node;
}, "JSV.api.JSVTreeNode");
Clazz.defineMethod(c$, "getTreeNode", 
function(){
return this.treeNode;
});
Clazz.defineMethod(c$, "dispose", 
function(){
this.source.dispose();
if (this.jsvp != null) this.jsvp.dispose();
this.source = null;
this.jsvp = null;
this.legend = null;
});
Clazz.defineMethod(c$, "pd", 
function(){
return this.jsvp.getPanelData();
});
Clazz.defineMethod(c$, "getSpectrum", 
function(){
return this.pd().getSpectrum();
});
Clazz.defineMethod(c$, "setLegend", 
function(legend){
if (this.legend != null) this.legend.dispose();
this.legend = legend;
return legend;
}, "JSV.dialog.JSVDialog");
Clazz.overrideMethod(c$, "toString", 
function(){
return ((this.id == null ? "" : this.id + ": ") + (this.frameTitle == null ? this.fileName : this.frameTitle));
});
c$.findSourceByNameOrId = Clazz.defineMethod(c$, "findSourceByNameOrId", 
function(id, panelNodes){
for (var i = panelNodes.size(); --i >= 0; ) {
var node = panelNodes.get(i);
if (id.equals(node.id) || id.equals(node.source.getSpectra().get(0).sourceID) || node.source.matchesFilePath(id)) return node.source;
}
for (var i = panelNodes.size(); --i >= 0; ) {
var node = panelNodes.get(i);
if (id.equals(node.fileName)) return node.source;
}
return null;
}, "~S,JU.Lst");
c$.findNodeById = Clazz.defineMethod(c$, "findNodeById", 
function(id, panelNodes){
if (id != null) for (var i = panelNodes.size(); --i >= 0; ) if (id.equals(panelNodes.get(i).id) || id.equals(panelNodes.get(i).frameTitle)) return panelNodes.get(i);

return null;
}, "~S,JU.Lst");
c$.findNode = Clazz.defineMethod(c$, "findNode", 
function(jsvp, panelNodes){
for (var i = panelNodes.size(); --i >= 0; ) if (panelNodes.get(i).jsvp === jsvp) return panelNodes.get(i);

return null;
}, "JSV.api.JSVPanel,JU.Lst");
c$.getSpectrumListAsString = Clazz.defineMethod(c$, "getSpectrumListAsString", 
function(panelNodes){
var sb =  new JU.SB();
for (var i = 0; i < panelNodes.size(); i++) {
var node = panelNodes.get(i);
if (!node.isView) sb.append(" ").append(node.id);
}
return sb.toString().trim();
}, "JU.Lst");
c$.isOpen = Clazz.defineMethod(c$, "isOpen", 
function(panelNodes, filePath){
if (filePath != null) for (var i = panelNodes.size(); --i >= 0; ) {
if (panelNodes.get(i).source.matchesFilePath(filePath) || filePath.equals(panelNodes.get(i).frameTitle)) return i;
}
return -1;
}, "JU.Lst,~S");
Clazz.defineMethod(c$, "setFrameTitle", 
function(name){
this.frameTitle = name;
}, "~S");
c$.getLastFileFirstNode = Clazz.defineMethod(c$, "getLastFileFirstNode", 
function(panelNodes){
var n = panelNodes.size();
var node = (n == 0 ? null : panelNodes.get(n - 1));
for (var i = n - 1; --i >= 0; ) {
if (panelNodes.get(i).source !== node.source) break;
node = panelNodes.get(i);
}
return (node == null ? null : node.jsvp);
}, "JU.Lst");
Clazz.defineMethod(c$, "getInfo", 
function(key){
var info = this.pd().getInfo(false, key);
JSV.common.Parameters.putInfo(key, info, "panelId", this.id);
JSV.common.Parameters.putInfo(key, info, "panelFileName", this.fileName);
JSV.common.Parameters.putInfo(key, info, "panelSource", this.source.getFilePath());
return info;
}, "~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
(function(){
var c$ = Clazz.decorateAsClass(function(){
this.imageableX = 0;
this.imageableY = 0;
this.paperHeight = 0;
this.paperWidth = 0;
this.imageableHeight = 0;
this.imageableWidth = 0;
this.layout = "landscape";
this.position = "fit to page";
this.showGrid = true;
this.showXScale = true;
this.showYScale = true;
this.showTitles = true;
this.font = "Helvetica";
this.paper = null;
this.asPDF = true;
this.title = null;
this.date = null;
Clazz.instantialize(this, arguments);}, JSV.common, "PrintLayout", null);
Clazz.prepareFields (c$, function(){
this.paperHeight = Clazz.floatToInt(Math.min(11, 11.69) * 72);
this.paperWidth = Clazz.floatToInt(Math.min(8.5, 8.27) * 72);
this.imageableHeight = this.paperHeight;
this.imageableWidth = this.paperWidth;
});
Clazz.makeConstructor(c$, 
function(pd){
if (pd != null) {
this.asPDF = true;
pd.setDefaultPrintOptions(this);
}}, "JSV.common.PanelData");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.RepaintManager", ["JSV.common.JSViewer"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.repaintPending = false;
this.vwr = null;
Clazz.instantialize(this, arguments);}, JSV.common, "RepaintManager", null);
Clazz.makeConstructor(c$, 
function(viewer){
this.vwr = viewer;
}, "JSV.common.JSViewer");
Clazz.defineMethod(c$, "refresh", 
function(){
if (this.repaintPending) {
return false;
}this.repaintPending = true;
var applet = this.vwr.html5Applet;
var jmol = (JSV.common.JSViewer.isJS && !JSV.common.JSViewer.isSwingJS ? JSV.common.JSViewer.jsmolObject : null);
if (jmol == null) {
this.vwr.selectedPanel.repaint();
} else {
jmol.repaint(applet, false);
this.repaintDone();
}return true;
});
Clazz.defineMethod(c$, "repaintDone", 
function(){
this.repaintPending = false;
this.notify();
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.common");
Clazz.load(null, "JSV.common.SyncManager", ["JU.PT", "$.SB", "JSV.common.PanelNode", "JU.Logger"], function(){
var c$ = Clazz.declareType(JSV.common, "SyncManager", null);
c$.syncToJmol = Clazz.defineMethod(c$, "syncToJmol", 
function(vwr, pi){
vwr.peakInfoModelSentToJmol = pi.getModel();
vwr.si.syncToJmol(JSV.common.SyncManager.jmolSelect(vwr.pd(), pi));
}, "JSV.common.JSViewer,JSV.common.PeakInfo");
c$.syncFromJmol = Clazz.defineMethod(c$, "syncFromJmol", 
function(vwr, peakScript){
if (peakScript.equals("TEST")) peakScript = JSV.common.SyncManager.testScript;
if (peakScript.indexOf("<PeakData") < 0) {
if (peakScript.startsWith("JSVSTR:")) {
vwr.si.syncToJmol(peakScript);
return;
}vwr.runScriptNow(peakScript);
if (peakScript.indexOf("#SYNC_PEAKS") >= 0) JSV.common.SyncManager.syncToJmolPeaksAfterSyncScript(vwr);
return;
}var sourceID = JU.PT.getQuotedAttribute(peakScript, "sourceID");
var type;
var model;
var file;
var jmolSource;
var index;
var atomKey;
if (sourceID == null) {
file = JU.PT.getQuotedAttribute(peakScript, "file");
index = JU.PT.getQuotedAttribute(peakScript, "index");
if (file == null || index == null) return;
file = JU.PT.rep(file, "#molfile", "");
model = JU.PT.getQuotedAttribute(peakScript, "model");
jmolSource = JU.PT.getQuotedAttribute(peakScript, "src");
var modelSent = (jmolSource != null && jmolSource.startsWith("Jmol") ? null : vwr.peakInfoModelSentToJmol);
if (model != null && modelSent != null && !model.equals(modelSent)) {
JU.Logger.info("JSV ignoring model " + model + "; should be " + modelSent);
return;
}vwr.peakInfoModelSentToJmol = null;
if (vwr.panelNodes.size() == 0 || !vwr.checkFileAlreadyLoaded(file)) {
JU.Logger.info("file " + file + " not found -- JSViewer closing all and reopening");
vwr.si.siSyncLoad(file);
}type = JU.PT.getQuotedAttribute(peakScript, "type");
atomKey = null;
} else {
file = null;
index = model = sourceID;
atomKey = "," + JU.PT.getQuotedAttribute(peakScript, "atom") + ",";
type = "ID";
jmolSource = sourceID;
}var pi = JSV.common.SyncManager.selectPanelByPeak(vwr, file, index, atomKey);
var pd = vwr.pd();
pd.selectSpectrum(file, type, model, true);
vwr.si.siSendPanelChange();
pd.addPeakHighlight(pi);
vwr.repaint(true);
if (jmolSource == null || (pi != null && pi.getAtoms() != null)) vwr.si.syncToJmol(JSV.common.SyncManager.jmolSelect(vwr.pd(), pi));
}, "JSV.common.JSViewer,~S");
c$.syncToJmolPeaksAfterSyncScript = Clazz.defineMethod(c$, "syncToJmolPeaksAfterSyncScript", 
function(vwr){
var source = vwr.currentSource;
if (source == null) return;
try {
var file = "file=" + JU.PT.esc(source.getFilePath());
var spectra = source.getSpectra();
var peaks = spectra.get(spectra.size() - 1).getPeakList();
var sb =  new JU.SB();
sb.append("[");
var n = peaks.size();
for (var i = 0; i < n; i++) {
var s = peaks.get(i).toString();
s = s + " " + file;
sb.append(JU.PT.esc(s));
if (i > 0) sb.append(",");
}
sb.append("]");
vwr.si.syncToJmol("Peaks: " + sb);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}, "JSV.common.JSViewer");
c$.selectPanelByPeak = Clazz.defineMethod(c$, "selectPanelByPeak", 
function(vwr, file, index, atomKey){
var panelNodes = vwr.panelNodes;
if (panelNodes == null) return null;
var pi = null;
for (var i = panelNodes.size(); --i >= 0; ) panelNodes.get(i).pd().addPeakHighlight(null);

pi = vwr.pd().selectPeakByFileIndex(file, index, atomKey);
if (pi != null) {
vwr.setNode(JSV.common.PanelNode.findNode(vwr.selectedPanel, panelNodes));
} else {
for (var i = panelNodes.size(); --i >= 0; ) {
var node = panelNodes.get(i);
if ((pi = node.pd().selectPeakByFileIndex(file, index, atomKey)) != null) {
vwr.setNode(node);
break;
}}
}return pi;
}, "JSV.common.JSViewer,~S,~S,~S");
c$.jmolSelect = Clazz.defineMethod(c$, "jmolSelect", 
function(pd, pi){
var script = ("IR".equals(pi.getType()) || "RAMAN".equals(pi.getType()) ? "vibration ON; selectionHalos OFF;" : "vibration OFF; selectionhalos " + (pi.getAtoms() == null ? "OFF" : "ON"));
return "Select: " + pi + " script=\"" + script + " \" sourceID=\"" + pd.getSpectrum().sourceID + "\"";
}, "JSV.common.PanelData,JSV.common.PeakInfo");
c$.testScript = "<PeakData  index=\"1\" title=\"\" model=\"~1.1\" type=\"1HNMR\" xMin=\"3.2915\" xMax=\"3.2965\" atoms=\"15,16,17,18,19,20\" multiplicity=\"\" integral=\"1\"> src=\"JPECVIEW\" file=\"http://SIMULATION/$caffeine\"";
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.source");
Clazz.load(["J.api.JmolJDXMOLReader"], "JSV.source.JDXReader", ["java.io.BufferedReader", "$.FileInputStream", "$.StringReader", "java.util.Hashtable", "$.LinkedHashMap", "$.StringTokenizer", "javajs.api.Interface", "JU.AU", "$.Lst", "$.PT", "$.Rdr", "$.SB", "JSV.common.Coordinate", "$.JSVFileManager", "$.JSViewer", "$.PeakInfo", "$.Spectrum", "JSV.exception.JSVException", "JSV.source.JDXDecompressor", "$.JDXHeader", "$.JDXSource", "$.JDXSourceStreamTokenizer", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.mnovaParamValue = null;
this.nmrMaxY = NaN;
this.source = null;
this.t = null;
this.errorLog = null;
this.obscure = false;
this.done = false;
this.isZipFile = false;
this.filePath = null;
this.loadImaginary = true;
this.isSimulation = false;
this.ignoreShiftReference = false;
this.ignorePeakTables = false;
this.lastErrPath = null;
this.isTabularData = false;
this.firstSpec = 0;
this.lastSpec = 0;
this.nSpec = 0;
this.blockID = 0;
this.mpr = null;
this.reader = null;
this.modelSpectrum = null;
this.acdAssignments = null;
this.acdMolFile = null;
this.peakData = null;
Clazz.instantialize(this, arguments);}, JSV.source, "JDXReader", null, J.api.JmolJDXMOLReader);
Clazz.makeConstructor(c$, 
function(filePath, obscure, loadImaginary, iSpecFirst, iSpecLast, nmrNormalization){
filePath = JU.PT.trimQuotes(filePath);
this.isSimulation = (filePath != null && filePath.startsWith("http://SIMULATION/"));
if (this.isSimulation) {
this.nmrMaxY = (Double.isNaN(nmrNormalization) ? 10000 : nmrNormalization);
}this.filePath = filePath;
this.obscure = obscure;
this.firstSpec = iSpecFirst;
this.lastSpec = iSpecLast;
this.loadImaginary = loadImaginary;
}, "~S,~B,~B,~N,~N,~N");
c$.getVarList = Clazz.defineMethod(c$, "getVarList", 
function(dataClass){
var index = JSV.source.JDXReader.VAR_LIST_TABLE[0].indexOf(dataClass);
return JSV.source.JDXReader.VAR_LIST_TABLE[1].substring(index + 1, index + 12).trim();
}, "~S");
c$.createJDXSourceFromStream = Clazz.defineMethod(c$, "createJDXSourceFromStream", 
function($in, obscure, loadImaginary, nmrMaxY){
return JSV.source.JDXReader.createJDXSource(null, $in, "stream", obscure, loadImaginary, -1, -1, nmrMaxY);
}, "java.io.InputStream,~B,~B,~N");
c$.getHeaderMap = Clazz.defineMethod(c$, "getHeaderMap", 
function($in, map){
return JSV.source.JDXReader.getHeaderMapS($in, map, -1, null);
}, "java.io.InputStream,java.util.Map");
c$.getHeaderMapS = Clazz.defineMethod(c$, "getHeaderMapS", 
function($in, map, index, suffix){
var source = JSV.source.JDXReader.createJDXSource(null, $in, null, false, false, 0, -1, 0).getJDXSpectrum(index);
var hlist = source.headerTable;
if (map == null) map =  new java.util.LinkedHashMap();
for (var i = 0, n = hlist.size(); i < n; i++) {
var h = hlist.get(i);
map.put((suffix == null ? h[2] : h[2] + suffix), h[1]);
}
return map;
}, "java.io.InputStream,java.util.Map,~N,~S");
c$.createJDXSource = Clazz.defineMethod(c$, "createJDXSource", 
function(file, $in, filePath, obscure, loadImaginary, iSpecFirst, iSpecLast, nmrMaxY){
var isHeaderOnly = (iSpecLast < iSpecFirst);
var data = null;
var br;
var bytes = null;
if (JU.AU.isAB($in)) {
bytes = $in;
if (JU.Rdr.isZipB(bytes)) {
return JSV.source.JDXReader.readBrukerFileZip(bytes, file == null ? filePath : file.getFullPath());
}}if ((typeof($in)=='string') || bytes != null) {
if ((typeof($in)=='string')) data = $in;
br = JSV.common.JSVFileManager.getBufferedReaderForStringOrBytes($in);
} else if (Clazz.instanceOf($in,"java.io.InputStream")) {
br = JSV.common.JSVFileManager.getBufferedReaderForInputStream($in);
} else {
br = $in;
}var header = null;
var source = null;
try {
if (br == null) {
if (file != null && file.isDirectory()) return JSV.source.JDXReader.readBrukerFileDir(file.getFullPath());
br = JSV.common.JSVFileManager.getBufferedReaderFromName(filePath);
}if (!isHeaderOnly) {
br.mark(400);
var chs =  Clazz.newCharArray (400, '\0');
br.read(chs, 0, 400);
br.reset();
header =  String.instantialize(chs);
if (header.startsWith("PK")) {
br.close();
return JSV.source.JDXReader.readBrukerFileZip(null, file.getFullPath());
}if (header.indexOf('\0') >= 0 || header.indexOf("##TITLE= Parameter file") == 0 || header.indexOf("##TITLE= Audit trail") == 0) {
br.close();
return JSV.source.JDXReader.readBrukerFileDir(file.getParentAsFile().getFullPath());
}var pt1 = header.indexOf('#');
var pt2 = header.indexOf('<');
if (pt1 < 0 || pt2 >= 0 && pt2 < pt1) {
var xmlType = header.toLowerCase();
xmlType = (xmlType.contains("<animl") || xmlType.contains("<!doctype technique") ? "AnIML" : xmlType.contains("xml-cml") ? "CML" : xmlType.contains("<nmrml") ? "NMRML" : null);
if (xmlType == null) return JSV.source.JDXReader.readBrukerFileDir(file.getFullPath());
source = (JSV.common.JSViewer.getInterface("JSV.source." + xmlType + "Reader")).getSource(filePath, br);
br.close();
if (source == null) {
JU.Logger.error(header + "...");
throw  new JSV.exception.JSVException("File type not recognized");
}}}if (source == null) {
source = ( new JSV.source.JDXReader(filePath, obscure, loadImaginary, iSpecFirst, iSpecLast, nmrMaxY)).getJDXSource(br, isHeaderOnly);
}if (data != null) source.setInlineData(data);
return source;
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
if (!JSV.common.JSViewer.isJS) e.printStackTrace();
if (br != null) br.close();
if (header != null) JU.Logger.error(header + "...");
var s = e.getMessage();
{
}throw  new JSV.exception.JSVException("Error reading data: " + s);
} else {
throw e;
}
}
}, "J.api.GenericFileInterface,~O,~S,~B,~B,~N,~N,~N");
c$.readBrukerFileDir = Clazz.defineMethod(c$, "readBrukerFileDir", 
function(filePath){
return (javajs.api.Interface.getInterface("JSV.source.BrukerReader")).readBrukerDir(filePath);
}, "~S");
c$.readBrukerFileZip = Clazz.defineMethod(c$, "readBrukerFileZip", 
function(bytes, filePath){
return (javajs.api.Interface.getInterface("JSV.source.BrukerReader")).readBrukerZip(bytes, filePath);
}, "~A,~S");
Clazz.defineMethod(c$, "getJDXSource", 
function(reader, isHeaderOnly){
this.source =  new JSV.source.JDXSource(0, this.filePath);
this.isZipFile = (Clazz.instanceOf(reader,"JSV.api.JSVZipReader"));
this.t =  new JSV.source.JDXSourceStreamTokenizer(reader);
this.errorLog =  new JU.SB();
var label = null;
var value = null;
var isOK = false;
while (!this.done && "##TITLE".equals(this.t.peakLabel())) {
isOK = true;
if (label != null && !this.isZipFile) this.logError("Warning - file is a concatenation without LINK record -- does not conform to JCAMP-DX standard 6.1.3!");
var spectrum =  new JSV.common.Spectrum();
var dataLDRTable =  new JSV.source.JDXHeader.DataLDRTable();
if (isHeaderOnly) spectrum.setHeaderTable(dataLDRTable.table);
while (!this.done && (label = this.t.getLabel()) != null && (value = this.getValue(label)) != null) {
if (this.isTabularData) {
if (isHeaderOnly) {
dataLDRTable.addHeader(this.t.rawLabel, "<data>");
break;
}this.processTabularData(spectrum, dataLDRTable, label, isHeaderOnly);
this.addSpectrum(spectrum, false);
if (this.isSimulation && spectrum.getXUnits().equals("PPM")) spectrum.setHZtoPPM(true);
spectrum = null;
continue;
}if (!isHeaderOnly) {
if (label.equals("##DATATYPE") && value.toUpperCase().equals("LINK")) {
this.getBlockSpectra(dataLDRTable);
spectrum = null;
continue;
}if (label.equals("##NTUPLES") || label.equals("##VARNAME")) {
this.getNTupleSpectra(dataLDRTable, spectrum, label);
spectrum = null;
continue;
}}if (label.equals("##JCAMPDX")) {
this.setVenderSpecificValues(this.t.rawLine);
}if (spectrum == null) spectrum =  new JSV.common.Spectrum();
this.processLabel(spectrum, dataLDRTable, label, value, isHeaderOnly);
}
if (isHeaderOnly && spectrum != null) this.addSpectrum(spectrum, false);
}
if (!isOK) throw  new JSV.exception.JSVException("##TITLE record not found");
this.source.setErrorLog(this.errorLog.toString());
return this.source;
}, "~O,~B");
Clazz.defineMethod(c$, "processLabel", 
function(spectrum, dataLDRTable, label, value, isHeaderOnly){
if (!this.readDataLabel(spectrum, label, value, this.errorLog, this.obscure, isHeaderOnly) && !isHeaderOnly) return;
if (this.mnovaParamValue != null) {
var pt;
if (value.startsWith("(") && (pt = value.indexOf(',')) >= 0) {
var key = value.substring(1, pt).trim();
pt = value.indexOf(')', pt + 1);
if (pt > 0) {
value = value.substring(pt + 1).trim();
}dataLDRTable.addHeader(key, value);
}this.mnovaParamValue = null;
} else {
dataLDRTable.addHeader(this.t.rawLabel, value);
}if (!isHeaderOnly) this.checkCustomTags(spectrum, label, value);
}, "JSV.common.Spectrum,JSV.source.JDXHeader.DataLDRTable,~S,~S,~B");
Clazz.defineMethod(c$, "logError", 
function(err){
this.errorLog.append(this.filePath == null || this.filePath.equals(this.lastErrPath) ? "" : this.filePath).append("\n").append(err).append("\n");
this.lastErrPath = this.filePath;
}, "~S");
Clazz.defineMethod(c$, "setVenderSpecificValues", 
function(rawLine){
if (rawLine.indexOf("JEOL") >= 0) {
System.out.println("Skipping ##.SHIFTREFERENCE for JEOL " + rawLine);
this.ignoreShiftReference = true;
}if (rawLine.indexOf("MestReNova") >= 0) {
this.ignorePeakTables = true;
}}, "~S");
Clazz.defineMethod(c$, "getValue", 
function(label){
var value = (this.isTabularDataLabel(label) ? "" : this.t.getValue());
return ("##END".equals(label) ? null : value);
}, "~S");
Clazz.defineMethod(c$, "isTabularDataLabel", 
function(label){
return (this.isTabularData = ("##DATATABLE##PEAKTABLE##XYDATA##XYPOINTS#".indexOf(label + "#") >= 0));
}, "~S");
Clazz.defineMethod(c$, "addSpectrum", 
function(spectrum, forceSub){
if (!this.loadImaginary && spectrum.isImaginary()) {
JU.Logger.info("FileReader skipping imaginary spectrum -- use LOADIMAGINARY TRUE to load this spectrum.");
return true;
}if (this.acdAssignments != null) {
if (!spectrum.dataType.equals("MASS SPECTRUM") && !spectrum.isContinuous()) {
JU.Logger.info("Skipping ACD Labs line spectrum for " + spectrum);
return true;
}if (this.acdAssignments.size() > 0) {
try {
this.mpr.setACDAssignments(spectrum.title, spectrum.getTypeLabel(), this.source.peakCount, this.acdAssignments, this.acdMolFile);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
JU.Logger.info("Failed to create peak data: " + e);
} else {
throw e;
}
}
}if (this.acdMolFile != null) JSV.common.JSVFileManager.cachePut("mol", this.acdMolFile);
}if (!Float.isNaN(this.nmrMaxY)) spectrum.normalizeSimulation(this.nmrMaxY);
 else if (spectrum.getMaxY() >= 10000) spectrum.normalizeSimulation(1000);
if (this.isSimulation) spectrum.setSimulated(this.filePath);
this.nSpec++;
if (this.firstSpec > 0 && this.nSpec < this.firstSpec) return true;
if (this.lastSpec > 0 && this.nSpec > this.lastSpec) return !(this.done = true);
spectrum.setBlockID(this.blockID);
this.source.addJDXSpectrum(null, spectrum, forceSub);
return true;
}, "JSV.common.Spectrum,~B");
Clazz.defineMethod(c$, "getBlockSpectra", 
function(sourceLDRTable){
JU.Logger.debug("--JDX block start--");
var label = "";
var value = null;
var isNew = (this.source.type == 0);
var forceSub = false;
while ((label = this.t.getLabel()) != null && !label.equals("##TITLE")) {
value = this.getValue(label);
if (isNew && !this.readHeaderLabel(this.source, label, value, this.errorLog, this.obscure)) sourceLDRTable.addHeader(this.t.rawLabel, value);
if (label.equals("##BLOCKS")) {
var nBlocks = JU.PT.parseInt(value);
if (nBlocks > 100 && this.firstSpec <= 0) forceSub = true;
}}
value = this.getValue(label);
if (!"##TITLE".equals(label)) throw  new JSV.exception.JSVException("Unable to read block source");
if (isNew) this.source.setHeaderTable(sourceLDRTable.table);
this.source.type = 1;
this.source.isCompoundSource = true;
var spectrum =  new JSV.common.Spectrum();
var dataLDRTable =  new JSV.source.JDXHeader.DataLDRTable();
this.readDataLabel(spectrum, label, value, this.errorLog, this.obscure, false);
try {
var tmp;
while ((tmp = this.t.getLabel()) != null) {
if ((value = this.getValue(tmp)) == null && "##END".equals(label)) {
JU.Logger.debug("##END= " + this.t.getValue());
break;
}label = tmp;
if (this.isTabularData) {
this.processTabularData(spectrum, dataLDRTable, label, false);
continue;
}if (label.equals("##DATATYPE")) {
if (value.toUpperCase().equals("LINK")) {
this.getBlockSpectra(dataLDRTable);
spectrum = null;
label = null;
} else if (value.toUpperCase().startsWith("NMR PEAK")) {
if (this.ignorePeakTables) {
this.done = true;
return this.source;
}}} else if (label.equals("##NTUPLES") || label.equals("##VARNAME")) {
this.getNTupleSpectra(dataLDRTable, spectrum, label);
spectrum = null;
label = "";
}if (this.done) break;
if (spectrum == null) {
spectrum =  new JSV.common.Spectrum();
dataLDRTable =  new JSV.source.JDXHeader.DataLDRTable();
if (label === "") continue;
if (label == null) {
label = "##END";
continue;
}}if (value == null) {
if (spectrum.getXYCoords().length > 0 && !this.addSpectrum(spectrum, forceSub)) return this.source;
spectrum =  new JSV.common.Spectrum();
dataLDRTable =  new JSV.source.JDXHeader.DataLDRTable();
continue;
}this.processLabel(spectrum, dataLDRTable, label, value, false);
}
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
if (!JSV.common.JSViewer.isJS) e.printStackTrace();
throw  new JSV.exception.JSVException(e.getMessage());
} else {
throw e;
}
}
this.addErrorLogSeparator();
this.source.setErrorLog(this.errorLog.toString());
JU.Logger.debug("--JDX block end--");
return this.source;
}, "JSV.source.JDXHeader.DataLDRTable");
Clazz.defineMethod(c$, "addErrorLogSeparator", 
function(){
if (this.errorLog.length() > 0 && this.errorLog.lastIndexOf("=====================\n") != this.errorLog.length() - "=====================\n".length) this.logError("=====================\n");
});
Clazz.defineMethod(c$, "getNTupleSpectra", 
function(sourceLDRTable, spectrum0, label){
var minMaxY =  Clazz.newDoubleArray(-1, [1.7976931348623157E308, 4.9E-324]);
this.blockID = Math.random();
var isOK = true;
if (this.firstSpec > 0) spectrum0.setNumDim(1);
var isVARNAME = label.equals("##VARNAME");
if (!isVARNAME) {
label = "";
}var nTupleTable =  new java.util.Hashtable();
var plotSymbols =  new Array(2);
var isNew = (this.source.type == 0);
if (isNew) {
this.source.type = 2;
this.source.isCompoundSource = true;
this.source.setHeaderTable(sourceLDRTable.table);
}while (!(label = (isVARNAME ? label : this.t.getLabel())).equals("##PAGE")) {
isVARNAME = false;
var st =  new java.util.StringTokenizer(this.t.getValue(), ",");
var attrList =  new JU.Lst();
while (st.hasMoreTokens()) attrList.addLast(st.nextToken().trim());

nTupleTable.put(label, attrList);
}
var symbols = nTupleTable.get("##SYMBOL");
if (!label.equals("##PAGE")) throw  new JSV.exception.JSVException("Error Reading NTuple Source");
var page = this.t.getValue();
var spectrum = null;
var isFirst = true;
while (!this.done) {
if ((label = this.t.getLabel()).equals("##ENDNTUPLES")) {
this.t.getValue();
break;
}if (label.equals("##PAGE")) {
page = this.t.getValue();
continue;
}if (spectrum == null) {
spectrum =  new JSV.common.Spectrum();
spectrum0.copyTo(spectrum);
spectrum.setTitle(spectrum0.getTitle());
if (!spectrum.is1D()) {
var pt = page.indexOf('=');
if (pt >= 0) try {
spectrum.setY2D(this.parseAFFN(page.substring(0, pt), page.substring(pt + 1).trim()));
var y2dUnits = page.substring(0, pt).trim();
var i = symbols.indexOf(y2dUnits);
if (i >= 0) spectrum.setY2DUnits(nTupleTable.get("##UNITS").get(i));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}}var dataLDRTable =  new JSV.source.JDXHeader.DataLDRTable();
spectrum.setHeaderTable(dataLDRTable.table);
while (!label.equals("##DATATABLE")) {
dataLDRTable.addHeader(this.t.rawLabel, this.t.getValue());
label = this.t.getLabel();
}
var continuous = true;
var line = this.t.flushLine();
if (line.trim().indexOf("PEAKS") > 0) continuous = false;
var index1 = line.indexOf('(');
var index2 = line.lastIndexOf(')');
if (index1 == -1 || index2 == -1) throw  new JSV.exception.JSVException("Variable List not Found");
var varList = line.substring(index1, index2 + 1);
var countSyms = 0;
for (var i = 0; i < symbols.size(); i++) {
var sym = symbols.get(i).trim();
if (varList.indexOf(sym) != -1) {
plotSymbols[countSyms++] = sym;
}if (countSyms == 2) break;
}
this.setTabularDataType(spectrum, "##" + (continuous ? "XYDATA" : "PEAKTABLE"));
if (!this.readNTUPLECoords(spectrum, nTupleTable, plotSymbols, minMaxY)) throw  new JSV.exception.JSVException("Unable to read Ntuple Source");
if (!spectrum.nucleusX.equals("?")) spectrum0.nucleusX = spectrum.nucleusX;
spectrum0.nucleusY = spectrum.nucleusY;
spectrum0.freq2dX = spectrum.freq2dX;
spectrum0.freq2dY = spectrum.freq2dY;
spectrum0.y2DUnits = spectrum.y2DUnits;
for (var i = 0, n = sourceLDRTable.table.size(); i < n; i++) {
var entry = sourceLDRTable.table.get(i);
var key = JSV.source.JDXSourceStreamTokenizer.cleanLabel(entry[0]);
if (!key.equals("##TITLE") && !key.equals("##DATACLASS") && !key.equals("##NTUPLES")) dataLDRTable.table.addLast(entry);
}
if (isOK) this.addSpectrum(spectrum, !isFirst);
isFirst = false;
spectrum = null;
}
this.addErrorLogSeparator();
this.source.setErrorLog(this.errorLog.toString());
JU.Logger.info("NTUPLE MIN/MAX Y = " + minMaxY[0] + " " + minMaxY[1]);
return this.source;
}, "JSV.source.JDXHeader.DataLDRTable,JSV.source.JDXDataObject,~S");
Clazz.defineMethod(c$, "readDataLabel", 
function(spectrum, label, value, errorLog, obscure, isHeaderOnly){
if (!this.readHeaderLabel(spectrum, label, value, errorLog, obscure)) return false;
label += " ";
if (("##MINX ##MINY ##MAXX ##MAXY ##FIRSTY ##DELTAX ##DATACLASS ").indexOf(label) >= 0) return false;
switch (("##FIRSTX  ##LASTX   ##NPOINTS ##XFACTOR ##YFACTOR ##XUNITS  ##YUNITS  ##XLABEL  ##YLABEL  ##NUMDIM  ##OFFSET  ").indexOf(label)) {
case 0:
spectrum.fileFirstX = this.parseAFFN(label, value);
return false;
case 10:
spectrum.fileLastX = this.parseAFFN(label, value);
return false;
case 20:
spectrum.fileNPoints = Integer.parseInt(value);
return false;
case 30:
spectrum.setXFactor(this.parseAFFN(label, value));
return false;
case 40:
spectrum.yFactor = this.parseAFFN(label, value);
return false;
case 50:
spectrum.setXUnits(value);
return false;
case 60:
spectrum.setYUnits(value);
return false;
case 70:
spectrum.setXLabel(value);
return true;
case 80:
spectrum.setYLabel(value);
return true;
case 90:
spectrum.setNumDim(Integer.parseInt(value));
return false;
case 100:
if (!spectrum.isShiftTypeSpecified()) {
spectrum.setShiftReference(this.parseAFFN(label, value), 1, 1);
}return false;
default:
if (label.length < 17 || isHeaderOnly && value.indexOf(",") >= 0) return !isHeaderOnly;
if (label.equals("##.OBSERVEFREQUENCY ")) {
spectrum.setObservedFreq(this.parseAFFN(label, value));
return false;
}if (label.equals("##.OBSERVENUCLEUS ")) {
spectrum.setObservedNucleus(value);
return false;
}if (label.equals("##$REFERENCEPOINT ") && !spectrum.isShiftTypeSpecified()) {
var pt = value.indexOf(" ");
if (pt > 0) value = value.substring(0, pt);
spectrum.setShiftReference(this.parseAFFN(label, value), 1, 2);
return false;
}if (label.equals("##.SHIFTREFERENCE ")) {
if (this.ignoreShiftReference || !(spectrum.dataType.toUpperCase().contains("SPECTRUM"))) return false;
value = JU.PT.replaceAllCharacters(value, ")(", "");
var srt =  new java.util.StringTokenizer(value, ",");
if (srt.countTokens() != 4) return false;
try {
srt.nextToken();
srt.nextToken();
var pt = Clazz.floatToInt(Float.parseFloat(srt.nextToken().trim()));
var shift = this.parseAFFN(label, srt.nextToken().trim());
spectrum.setShiftReference(shift, pt, 0);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
return false;
}return true;
}
}, "JSV.source.JDXDataObject,~S,~S,JU.SB,~B,~B");
Clazz.defineMethod(c$, "readHeaderLabel", 
function(jdxHeader, label, value, errorLog, obscure){
switch (label) {
case "##TITLE":
jdxHeader.setTitle(obscure || value == null || value.equals("") ? "Unknown" : value);
return false;
case "##JCAMPDX":
jdxHeader.jcampdx = value;
var version = JU.PT.parseFloat(value);
if (version >= 6 || Float.isNaN(version)) {
if (errorLog != null) errorLog.append("Warning: JCAMP-DX version may not be fully supported: " + value + "\n");
}return false;
case "##ORIGIN":
jdxHeader.origin = (value != null && !value.equals("") ? value : "Unknown");
return false;
case "##OWNER":
jdxHeader.owner = (value != null && !value.equals("") ? value : "Unknown");
return false;
case "##DATATYPE":
jdxHeader.dataType = value;
return false;
case "##LONGDATE":
jdxHeader.longDate = value;
return false;
case "##DATE":
jdxHeader.date = value;
return false;
case "##TIME":
jdxHeader.time = value;
return false;
case "##$PARAMETERFILE":
this.mnovaParamValue = value;
return false;
}
return true;
}, "JSV.source.JDXHeader,~S,~S,JU.SB,~B");
Clazz.defineMethod(c$, "setTabularDataType", 
function(spectrum, label){
if (label.equals("##PEAKASSIGNMENTS")) spectrum.setDataClass("PEAKASSIGNMENTS");
 else if (label.equals("##PEAKTABLE")) spectrum.setDataClass("PEAKTABLE");
 else if (label.equals("##XYDATA")) spectrum.setDataClass("XYDATA");
 else if (label.equals("##XYPOINTS")) spectrum.setDataClass("XYPOINTS");
}, "JSV.source.JDXDataObject,~S");
Clazz.defineMethod(c$, "processTabularData", 
function(spec, table, label, isHeaderOnly){
this.setTabularDataType(spec, label);
spec.setHeaderTable(table.table);
if (spec.dataClass.equals("XYDATA")) {
spec.checkJDXRequiredTokens();
if (!isHeaderOnly) this.decompressData(spec, null);
return;
}if (spec.dataClass.equals("PEAKTABLE") || spec.dataClass.equals("XYPOINTS")) {
spec.setContinuous(spec.dataClass.equals("XYPOINTS"));
try {
this.t.readLineTrimmed();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
var xyCoords;
if (spec.xFactor != 1.7976931348623157E308 && spec.yFactor != 1.7976931348623157E308) {
var data = this.t.getValue();
xyCoords = JSV.common.Coordinate.parseDSV(data, spec.xFactor, spec.yFactor);
} else {
xyCoords = JSV.common.Coordinate.parseDSV(this.t.getValue(), 1, 1);
}spec.setXYCoords(xyCoords);
var fileDeltaX = JSV.common.Coordinate.deltaX(xyCoords[xyCoords.length - 1].getXVal(), xyCoords[0].getXVal(), xyCoords.length);
spec.setIncreasing(fileDeltaX > 0);
return;
}throw  new JSV.exception.JSVException("Unable to read JDX file tabular data for line " + this.t.labelLineNo);
}, "JSV.source.JDXDataObject,JSV.source.JDXHeader.DataLDRTable,~S,~B");
Clazz.defineMethod(c$, "readNTUPLECoords", 
function(spec, nTupleTable, plotSymbols, minMaxY){
var list;
var label;
if (spec.dataClass.equals("XYDATA")) {
list = nTupleTable.get("##SYMBOL");
var index1 = list.indexOf(plotSymbols[0]);
var index2 = list.indexOf(plotSymbols[1]);
list = nTupleTable.get("##VARNAME");
spec.setVarName(list.get(index2).toUpperCase());
list = nTupleTable.get(label = "##FACTOR");
spec.setXFactor(this.parseAFFN(label, list.get(index1)));
spec.setYFactor(this.parseAFFN(label, list.get(index2)));
list = nTupleTable.get(label = "##LAST");
spec.fileLastX = this.parseAFFN(label, list.get(index1));
list = nTupleTable.get(label = "##FIRST");
spec.fileFirstX = this.parseAFFN(label, list.get(index1));
list = nTupleTable.get("##VARDIM");
spec.fileNPoints = Integer.parseInt(list.get(index1));
list = nTupleTable.get("##UNITS");
spec.setXUnits(list.get(index1));
spec.setYUnits(list.get(index2));
if (spec.nucleusX == null && (list = nTupleTable.get("##.NUCLEUS")) != null) {
spec.setNucleusAndFreq(list.get(0), false);
spec.setNucleusAndFreq(list.get(index1), true);
} else {
if (spec.nucleusX == null) spec.nucleusX = "?";
}this.decompressData(spec, minMaxY);
return true;
}if (spec.dataClass.equals("PEAKTABLE") || spec.dataClass.equals("XYPOINTS")) {
spec.setContinuous(spec.dataClass.equals("XYPOINTS"));
list = nTupleTable.get("##SYMBOL");
var index1 = list.indexOf(plotSymbols[0]);
var index2 = list.indexOf(plotSymbols[1]);
list = nTupleTable.get("##UNITS");
spec.setXUnits(list.get(index1));
spec.setYUnits(list.get(index2));
spec.setXYCoords(JSV.common.Coordinate.parseDSV(this.t.getValue(), spec.xFactor, spec.yFactor));
return true;
}return false;
}, "JSV.source.JDXDataObject,java.util.Map,~A,~A");
Clazz.defineMethod(c$, "parseAFFN", 
function(label, val){
var pt = val.indexOf("E");
if (pt > 0) {
var len = val.length;
var ch;
switch (len - pt) {
case 2:
case 3:
this.logError("Warning - " + label + " value " + val + " is not of the format xxxE[+/-]nn or xxxE[+/-]nnn (spec. 4.5.3) -- warning only; accepted");
break;
case 4:
case 5:
if ((ch = val.charAt(pt + 1)) == '+' || ch == '-') break;
default:
this.logError("Error - " + label + " value " + val + " is not of the format xxxE[+/-]nn or xxxE[+/-]nnn (spec. 4.5.3) -- " + val.substring(pt) + " ignored!");
val = val.substring(0, pt);
}
}return Double.parseDouble(val);
}, "~S,~S");
Clazz.defineMethod(c$, "decompressData", 
function(spec, minMaxY){
var errPt = this.errorLog.length();
spec.setIncreasing(spec.fileLastX > spec.fileFirstX);
spec.setContinuous(true);
var decompressor =  new JSV.source.JDXDecompressor(this.t, spec.fileFirstX, spec.fileLastX, spec.xFactor, spec.yFactor, spec.fileNPoints);
var t = System.currentTimeMillis();
var xyCoords = decompressor.decompressData(this.errorLog);
if (JU.Logger.debugging) JU.Logger.debug("decompression time = " + (System.currentTimeMillis() - t) + " ms");
spec.setXYCoords(xyCoords);
var d = decompressor.getMinY();
if (minMaxY != null) {
if (d < minMaxY[0]) minMaxY[0] = d;
d = decompressor.getMaxY();
if (d > minMaxY[1]) minMaxY[1] = d;
}spec.finalizeCoordinates();
if (this.errorLog.length() != errPt) {
var fileDeltaX = JSV.common.Coordinate.deltaX(spec.fileLastX, spec.fileFirstX, spec.fileNPoints);
this.logError(spec.getTitle());
this.logError("firstX from Header " + spec.fileFirstX);
this.logError("lastX from Header " + spec.fileLastX + " Found " + decompressor.lastX);
this.logError("deltaX from Header " + fileDeltaX);
this.logError("Number of points in Header " + spec.fileNPoints + " Found " + decompressor.getNPointsFound());
} else {
}if (JU.Logger.debugging) {
System.err.println(this.errorLog.toString());
}}, "JSV.source.JDXDataObject,~A");
Clazz.defineMethod(c$, "checkCustomTags", 
function(spectrum, label, value){
if (label.length > 10) label = label.substring(0, 10);
if (spectrum == null) System.out.println(label);
 else this.modelSpectrum = spectrum;
var pt = "##$MODELS ##$PEAKS  ##$SIGNALS##$MOLFILE##PEAKASSI##$UVIRASS##$MSFRAGM".indexOf(label);
if (pt < 0) return false;
this.getMpr().set(this, this.filePath, null);
try {
this.reader =  new java.io.BufferedReader( new java.io.StringReader(value));
switch (pt) {
case 0:
this.mpr.readModels();
break;
case 10:
case 20:
this.peakData =  new JU.Lst();
this.source.peakCount += this.mpr.readPeaks(pt == 20, this.source.peakCount);
break;
case 30:
this.acdAssignments =  new JU.Lst();
this.acdMolFile = JU.PT.rep(value, "$$ Empty String", "");
break;
case 40:
case 50:
case 60:
this.acdAssignments =  new JU.Lst();
return this.mpr.readACDAssignments((spectrum).fileNPoints, pt == 40, this.acdAssignments);
}
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
throw  new JSV.exception.JSVException(e.getMessage());
} else {
throw e;
}
} finally {
this.reader = null;
}
return true;
}, "JSV.common.Spectrum,~S,~S");
Clazz.defineMethod(c$, "getMpr", 
function(){
return (this.mpr == null ? this.mpr = JSV.common.JSViewer.getInterface("J.jsv.JDXMOLParser") : this.mpr);
});
Clazz.overrideMethod(c$, "rd", 
function(){
return this.reader.readLine();
});
Clazz.overrideMethod(c$, "setSpectrumPeaks", 
function(nH, peakXLabel, peakYlabel){
this.modelSpectrum.setPeakList(this.peakData, peakXLabel, peakYlabel);
if (this.modelSpectrum.isNMR()) this.modelSpectrum.setHydrogenCount(nH);
}, "~N,~S,~S");
Clazz.overrideMethod(c$, "addPeakData", 
function(info){
if (this.peakData == null) this.peakData =  new JU.Lst();
this.peakData.addLast( new JSV.common.PeakInfo(info));
}, "~S");
Clazz.overrideMethod(c$, "processModelData", 
function(id, data, type, base, last, modelScale, vibScale, isFirst){
}, "~S,~S,~S,~S,~S,~N,~N,~B");
Clazz.overrideMethod(c$, "discardLinesUntilContains", 
function(containsMatch){
var line;
while ((line = this.rd()) != null && line.indexOf(containsMatch) < 0) {
}
return line;
}, "~S");
Clazz.overrideMethod(c$, "discardLinesUntilContains2", 
function(s1, s2){
var line;
while ((line = this.rd()) != null && line.indexOf(s1) < 0 && line.indexOf(s2) < 0) {
}
return line;
}, "~S,~S");
Clazz.overrideMethod(c$, "discardLinesUntilNonBlank", 
function(){
var line;
while ((line = this.rd()) != null && line.trim().length == 0) {
}
return line;
});
c$.main = Clazz.defineMethod(c$, "main", 
function(args){
try {
var map = JSV.source.JDXReader.getHeaderMap( new java.io.FileInputStream("c:/temp/t6.jdx"), null);
for (var k, $k = map.keySet().iterator (); $k.hasNext()&& ((k = $k.next ()) || true);) {
if (k.startsWith("##")) continue;
var s = map.get(k);
if (s.length > 30) {
s = s.substring(0, 30) + "...";
}System.out.println(k + "=" + s);
}
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
e.printStackTrace();
} else {
throw e;
}
}
System.out.println("done");
}, "~A");
c$.VAR_LIST_TABLE =  Clazz.newArray(-1, ["PEAKTABLE   XYDATA      XYPOINTS", " (XY..XY)    (X++(Y..Y)) (XY..XY)    "]);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.declareInterface(J.api, "JmolJDXMOLReader");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.load(["java.util.HashMap"], "java.util.LinkedHashMap", ["java.util.AbstractCollection", "$.AbstractSet", "java.util.MapEntry.Type"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.accessOrder = false;
this.head = null;
this.tail = null;
Clazz.instantialize(this, arguments);}, java.util, "LinkedHashMap", java.util.HashMap);
Clazz.makeConstructor(c$, 
function(){
this.construct (16, 0.75, false);
});
Clazz.makeConstructor(c$, 
function(s){
this.construct (s, 0.75, false);
}, "~N");
Clazz.makeConstructor(c$, 
function(s, lf){
this.construct (s, lf, false);
}, "~N,~N");
Clazz.makeConstructor(c$, 
function(s, lf, order){
Clazz.superConstructor(this, java.util.LinkedHashMap, [s, lf]);
this.accessOrder = order;
this.head = null;
this.tail = null;
}, "~N,~N,~B");
Clazz.makeConstructor(c$, 
function(m){
Clazz.superConstructor (this, java.util.LinkedHashMap, []);
this.accessOrder = false;
this.head = null;
this.tail = null;
this.putAll(m);
}, "java.util.Map");
Clazz.overrideMethod(c$, "newElementArray", 
function(s){
return  new Array(s);
}, "~N");
Clazz.overrideMethod(c$, "get", 
function(key){
var m = this.getJavaEntry(key);
if (m == null) {
return null;
}if (this.accessOrder && this.tail !== m) {
var p = m.chainBackward;
var n = m.chainForward;
n.chainBackward = p;
if (p != null) {
p.chainForward = n;
} else {
this.head = n;
}m.chainForward = null;
m.chainBackward = this.tail;
this.tail.chainForward = m;
this.tail = m;
}return m.value;
}, "~O");
Clazz.overrideMethod(c$, "createEntry", 
function(key, index, value){
var m =  new java.util.LinkedHashMap.LinkedHashMapEntry(key, value);
m.next = this.elementData[index];
this.elementData[index] = m;
this.linkEntry(m);
return m;
}, "~O,~N,~O");
Clazz.overrideMethod(c$, "put", 
function(key, value){
var index = this.getModuloHash(key);
var m = this.findJavaEntry(key, index);
if (m == null) {
this.modCount++;
if (++this.elementCount > this.threshold) {
this.rehash();
index = key == null ? 0 : (key.hashCode() & 0x7FFFFFFF) % this.elementData.length;
}m = this.createEntry(key, index, null);
} else {
this.linkEntry(m);
}var result = m.value;
m.value = value;
if (this.removeEldestEntry(this.head)) {
this.remove(this.head.key);
}return result;
}, "~O,~O");
Clazz.defineMethod(c$, "linkEntry", 
function(m){
if (this.tail === m) {
return;
}if (this.head == null) {
this.head = this.tail = m;
return;
}var p = m.chainBackward;
var n = m.chainForward;
if (p == null) {
if (n != null) {
if (this.accessOrder) {
this.head = n;
n.chainBackward = null;
m.chainBackward = this.tail;
m.chainForward = null;
this.tail.chainForward = m;
this.tail = m;
}} else {
m.chainBackward = this.tail;
m.chainForward = null;
this.tail.chainForward = m;
this.tail = m;
}return;
}if (n == null) {
return;
}if (this.accessOrder) {
p.chainForward = n;
n.chainBackward = p;
m.chainForward = null;
m.chainBackward = this.tail;
this.tail.chainForward = m;
this.tail = m;
}}, "java.util.LinkedHashMap.LinkedHashMapEntry");
Clazz.overrideMethod(c$, "entrySet", 
function(){
return  new java.util.LinkedHashMap.LinkedHashMapEntrySet(this);
});
Clazz.overrideMethod(c$, "keySet", 
function(){
if (this.$keySet == null) {
this.$keySet = ((Clazz.isClassDefined("java.util.LinkedHashMap$1") ? 0 : java.util.LinkedHashMap.$LinkedHashMap$1$ ()), Clazz.innerTypeInstance(java.util.LinkedHashMap$1, this, null));
}return this.$keySet;
});
Clazz.overrideMethod(c$, "values", 
function(){
if (this.$values == null) {
this.$values = ((Clazz.isClassDefined("java.util.LinkedHashMap$2") ? 0 : java.util.LinkedHashMap.$LinkedHashMap$2$ ()), Clazz.innerTypeInstance(java.util.LinkedHashMap$2, this, null));
}return this.$values;
});
Clazz.overrideMethod(c$, "remove", 
function(key){
var m = this.removeJavaEntry(key);
if (m == null) {
return null;
}var p = m.chainBackward;
var n = m.chainForward;
if (p != null) {
p.chainForward = n;
} else {
this.head = n;
}if (n != null) {
n.chainBackward = p;
} else {
this.tail = p;
}return m.value;
}, "~O");
Clazz.defineMethod(c$, "removeEldestEntry", 
function(eldest){
return false;
}, "java.util.Map.Entry");
Clazz.defineMethod(c$, "clear", 
function(){
Clazz.superCall(this, java.util.LinkedHashMap, "clear", []);
this.head = this.tail = null;
});
Clazz.defineMethod(c$, "clone", 
function(){
var map = Clazz.superCall(this, java.util.LinkedHashMap, "clone", []);
map.clear();
for (var entry, $entry = this.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) {
map.put(entry.getKey(), entry.getValue());
}
return map;
});
Clazz.overrideMethod(c$, "__setJS", 
function(){
this.__m = null;
});
c$.$LinkedHashMap$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "LinkedHashMap$1", java.util.AbstractSet);
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.b$["java.util.LinkedHashMap"].containsKey(object);
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.b$["java.util.LinkedHashMap"].size();
});
Clazz.overrideMethod(c$, "clear", 
function(){
this.b$["java.util.LinkedHashMap"].clear();
});
Clazz.overrideMethod(c$, "remove", 
function(key){
if (this.b$["java.util.LinkedHashMap"].containsKey(key)) {
this.b$["java.util.LinkedHashMap"].remove(key);
return true;
}return false;
}, "~O");
Clazz.overrideMethod(c$, "iterator", 
function(){
return  new java.util.LinkedHashMap.LinkedHashIterator(((Clazz.isClassDefined("java.util.LinkedHashMap$1$1") ? 0 : java.util.LinkedHashMap.$LinkedHashMap$1$1$ ()), Clazz.innerTypeInstance(java.util.LinkedHashMap$1$1, this, null)), this.b$["java.util.LinkedHashMap"]);
});
/*eoif5*/})();
};
c$.$LinkedHashMap$1$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "LinkedHashMap$1$1", null, java.util.MapEntry.Type);
Clazz.overrideMethod(c$, "get", 
function(entry){
return entry.key;
}, "java.util.MapEntry");
/*eoif5*/})();
};
c$.$LinkedHashMap$2$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "LinkedHashMap$2", java.util.AbstractCollection);
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.b$["java.util.LinkedHashMap"].containsValue(object);
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.b$["java.util.LinkedHashMap"].size();
});
Clazz.overrideMethod(c$, "clear", 
function(){
this.b$["java.util.LinkedHashMap"].clear();
});
Clazz.overrideMethod(c$, "iterator", 
function(){
return  new java.util.LinkedHashMap.LinkedHashIterator(((Clazz.isClassDefined("java.util.LinkedHashMap$2$1") ? 0 : java.util.LinkedHashMap.$LinkedHashMap$2$1$ ()), Clazz.innerTypeInstance(java.util.LinkedHashMap$2$1, this, null)), this.b$["java.util.LinkedHashMap"]);
});
/*eoif5*/})();
};
c$.$LinkedHashMap$2$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "LinkedHashMap$2$1", null, java.util.MapEntry.Type);
Clazz.overrideMethod(c$, "get", 
function(entry){
return entry.value;
}, "java.util.MapEntry");
/*eoif5*/})();
};
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.LinkedHashMap, "LinkedHashIterator", java.util.HashMap.HashMapIterator);
Clazz.makeConstructor(c$, 
function(value, hm){
Clazz.superConstructor(this, java.util.LinkedHashMap.LinkedHashIterator, [value, hm]);
this.entry = hm.head;
}, "java.util.MapEntry.Type,java.util.LinkedHashMap");
Clazz.overrideMethod(c$, "hasNext", 
function(){
return (this.entry != null);
});
Clazz.overrideMethod(c$, "next", 
function(){
this.checkConcurrentMod();
if (!this.hasNext()) {
throw  new java.util.NoSuchElementException();
}var result = this.type.get(this.entry);
this.lastEntry = this.entry;
this.entry = (this.entry).chainForward;
this.canRemove = true;
return result;
});
Clazz.overrideMethod(c$, "remove", 
function(){
this.checkConcurrentMod();
if (!this.canRemove) {
throw  new IllegalStateException();
}this.canRemove = false;
this.associatedMap.modCount++;
var index = this.associatedMap.getModuloHash(this.lastEntry.key);
var m = this.associatedMap.elementData[index];
if (m === this.lastEntry) {
this.associatedMap.elementData[index] = this.lastEntry.next;
} else {
while (m.next != null) {
if (m.next === this.lastEntry) {
break;
}m = m.next;
}
m.next = this.lastEntry.next;
}var lhme = this.lastEntry;
var p = lhme.chainBackward;
var n = lhme.chainForward;
var lhm = this.associatedMap;
if (p != null) {
p.chainForward = n;
if (n != null) {
n.chainBackward = p;
} else {
lhm.tail = p;
}} else {
lhm.head = n;
if (n != null) {
n.chainBackward = null;
} else {
lhm.tail = null;
}}this.associatedMap.elementCount--;
this.expectedModCount++;
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.declareType(java.util.LinkedHashMap, "LinkedHashMapEntrySet", java.util.HashMap.HashMapEntrySet);
Clazz.overrideMethod(c$, "iterator", 
function(){
return  new java.util.LinkedHashMap.LinkedHashIterator(((Clazz.isClassDefined("java.util.LinkedHashMap$LinkedHashMapEntrySet$1") ? 0 : java.util.LinkedHashMap.LinkedHashMapEntrySet.$LinkedHashMap$LinkedHashMapEntrySet$1$ ()), Clazz.innerTypeInstance(java.util.LinkedHashMap$LinkedHashMapEntrySet$1, this, null)), this.hashMap());
});
c$.$LinkedHashMap$LinkedHashMapEntrySet$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "LinkedHashMap$LinkedHashMapEntrySet$1", null, java.util.MapEntry.Type);
Clazz.overrideMethod(c$, "get", 
function(entry){
return entry;
}, "java.util.MapEntry");
/*eoif5*/})();
};
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.chainForward = null;
this.chainBackward = null;
Clazz.instantialize(this, arguments);}, java.util.LinkedHashMap, "LinkedHashMapEntry", java.util.HashMap.Entry);
Clazz.makeConstructor(c$, 
function(theKey, theValue){
Clazz.superConstructor(this, java.util.LinkedHashMap.LinkedHashMapEntry, [theKey, theValue]);
this.chainForward = null;
this.chainBackward = null;
}, "~O,~O");
Clazz.defineMethod(c$, "clone", 
function(){
var entry = Clazz.superCall(this, java.util.LinkedHashMap.LinkedHashMapEntry, "clone", []);
entry.chainBackward = this.chainBackward;
entry.chainForward = this.chainForward;
var lnext = entry.next;
if (lnext != null) {
entry.next = lnext.clone();
}return entry;
});
/*eoif3*/})();
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.AbstractMap", "$.AbstractSet", "$.Iterator", "$.Map", "$.MapEntry"], "java.util.HashMap", ["java.util.AbstractCollection", "$.Arrays", "java.util.MapEntry.Type"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.elementCount = 0;
this.elementData = null;
this.loadFactor = 0;
this.threshold = 0;
this.modCount = 0;
this.$entrySet = null;
this.__m = null;
this.__allowJS = false;
Clazz.instantialize(this, arguments);}, java.util, "HashMap", java.util.AbstractMap, [java.util.Map, Cloneable, java.io.Serializable]);
Clazz.makeConstructor(c$, 
function(){
var size = 16;
var loadFactor = 0.75;
{
size = (arguments[0] || size); loadFactor = (arguments[1] ||
0.75);
}this.initHM(size, loadFactor);
});
Clazz.defineMethod(c$, "newElementArray", 
function(s){
return  new Array(s);
}, "~N");
Clazz.defineMethod(c$, "initHM", 
function(capacity, loadFactor){
var map = null;
{
if (typeof capacity == "object") { map = capacity; this.__allowJS =
map.__allowJS; capacity = (map.size() < 6 ? 11 : map.size() * 2); }
else { this.__allowJS = true; } !capacity && (capacity = 0);
!loadFactor && (loadFactor = 0.75);
}if (capacity == 0) capacity = 16;
if (capacity >= 0) {
this.elementCount = 0;
this.elementData = this.newElementArray(capacity == 0 ? 1 : capacity);
this.loadFactor = loadFactor;
this.computeMaxSize();
} else {
throw  new IllegalArgumentException();
}this.__setJS();
if (map != null) {
this.putAll(map);
}}, "~N,~N");
Clazz.defineMethod(c$, "putMapEntries", 
function(mOriginal, evict){
var n = mOriginal.size();
if (n == 0) return;
var key = null;
var value = null;
if (java.util.HashMap.__isSimple(this) && java.util.HashMap.__isSimple(mOriginal)) {
var me = this;
var hash = 0;
var mode = java.util.HashMap.__hasKey(me, key);
{
mOriginal.__m.forEach(function(value, key) {
me.putJSVal(hash, key, value, false, evict, mode);
});
}return;
}if (java.util.HashMap.__isSimple(mOriginal)) {
var me = this;
{
mOriginal.__m.forEach(function(value, key) {
me.putJavaValue(key, value);
});
}return;
}this.__m = null;
for (var e, $e = mOriginal.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
key = e.getKey();
value = e.getValue();
this.putJavaValue(key, value);
}
}, "java.util.Map,~B");
Clazz.defineMethod(c$, "reinitialize", 
function(){
this.elementData = null;
this.$entrySet = null;
this.$keySet = null;
this.$values = null;
this.modCount = 0;
this.threshold = 0;
this.elementCount = 0;
this.__setJS();
});
Clazz.overrideMethod(c$, "clear", 
function(){
this.modCount++;
if (java.util.HashMap.__isSimple(this)) {
{
this.__m.clear();
}}this.__setJS();
if (this.elementCount > 0) {
this.elementCount = 0;
java.util.Arrays.fill(this.elementData, null);
this.modCount++;
}});
Clazz.defineMethod(c$, "clone", 
function(){
var result;
try {
result = Clazz.superCall(this, java.util.HashMap, "clone", []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
result.reinitialize();
result.putMapEntries(this, false);
return result;
});
Clazz.defineMethod(c$, "computeMaxSize", 
function(){
this.threshold = Clazz.floatToInt(this.elementData.length * this.loadFactor);
});
Clazz.overrideMethod(c$, "containsKey", 
function(key){
switch (java.util.HashMap.__hasKey(this, key)) {
case 0:
break;
case 1:
java.util.HashMap.__ensureJavaMap(this);
break;
case 2:
return false;
case 3:
return true;
}
return (this.getJavaEntry(key) != null);
}, "~O");
Clazz.defineMethod(c$, "keysEqual", 
function(k1, entry){
var k1Hash = k1 == null ? 0 : k1.hashCode();
if (k1Hash != entry.origKeyHash) {
return false;
}if (k1 == null && entry.key == null) {
return true;
}return k1.equals(entry.key);
}, "~O,java.util.HashMap.Entry");
Clazz.overrideMethod(c$, "containsValue", 
function(value){
if (java.util.HashMap.__isSimple(this)) {
var m = this.__m;
{
var iter = m.values();
for (var n = iter.next(); !n.done; n = iter.next()) {
if (n.value == value || n.value.equals$O(value)) {
return true;
}
}
}} else if (value != null) {
for (var i = this.elementData.length; --i >= 0; ) {
var entry = this.elementData[i];
while (entry != null) {
if (value.equals(entry.value)) {
return true;
}entry = entry.next;
}
}
} else {
for (var i = this.elementData.length; --i >= 0; ) {
var entry = this.elementData[i];
while (entry != null) {
if (entry.value == null) {
return true;
}entry = entry.next;
}
}
}return false;
}, "~O");
Clazz.overrideMethod(c$, "entrySet", 
function(){
var es;
return (es = this.$entrySet) == null ? (this.$entrySet =  new java.util.HashMap.HashMapEntrySet(this)) : es;
});
Clazz.overrideMethod(c$, "get", 
function(key){
switch (java.util.HashMap.__hasKey(this, key)) {
case 0:
break;
case 1:
java.util.HashMap.__ensureJavaMap(this);
break;
case 2:
return null;
case 3:
var v = null;
{
v = this.__m.get(key);
}return v;
}
var m = this.getJavaEntry(key);
return (m == null ? null : m.value);
}, "~O");
Clazz.defineMethod(c$, "getJavaEntry", 
function(key){
var index = this.getModuloHash(key);
return this.findJavaEntry(key, index);
}, "~O");
Clazz.defineMethod(c$, "getModuloHash", 
function(key){
if (key == null) {
return 0;
}return (key.hashCode() & 0x7FFFFFFF) % this.elementData.length;
}, "~O");
Clazz.defineMethod(c$, "findJavaEntry", 
function(key, index){
var m;
m = this.elementData[index];
if (key != null) {
while (m != null && !this.keysEqual(key, m)) {
m = m.next;
}
} else {
while (m != null && m.key != null) {
m = m.next;
}
}return m;
}, "~O,~N");
Clazz.overrideMethod(c$, "isEmpty", 
function(){
return this.size() == 0;
});
Clazz.overrideMethod(c$, "keySet", 
function(){
if (this.$keySet == null) {
this.$keySet = ((Clazz.isClassDefined("java.util.HashMap$1") ? 0 : java.util.HashMap.$HashMap$1$ ()), Clazz.innerTypeInstance(java.util.HashMap$1, this, null));
}return this.$keySet;
});
Clazz.overrideMethod(c$, "put", 
function(key, value){
var type = java.util.HashMap.__hasKey(this, key);
switch (type) {
case 0:
break;
case 1:
java.util.HashMap.__ensureJavaMap(this);
break;
case 2:
case 3:
return this.putJSVal(1, key, value, false, true, type);
}
return this.putJavaValue(key, value);
}, "~O,~O");
Clazz.defineMethod(c$, "putJavaValue", 
function(key, value){
var index = this.getModuloHash(key);
var entry = this.findJavaEntry(key, index);
if (entry == null) {
this.modCount++;
if (++this.elementCount > this.threshold) {
this.rehash();
index = key == null ? 0 : (key.hashCode() & 0x7FFFFFFF) % this.elementData.length;
}entry = this.createEntry(key, index, value);
return null;
}var result = entry.value;
entry.value = value;
return result;
}, "~O,~O");
Clazz.defineMethod(c$, "createEntry", 
function(key, index, value){
var entry =  new java.util.HashMap.Entry(key, value);
entry.next = this.elementData[index];
this.elementData[index] = entry;
return entry;
}, "~O,~N,~O");
Clazz.overrideMethod(c$, "putAll", 
function(map){
if (!map.isEmpty()) for (var entry, $entry = map.entrySet().iterator (); $entry.hasNext()&& ((entry = $entry.next ()) || true);) {
this.put(entry.getKey(), entry.getValue());
}
}, "java.util.Map");
Clazz.defineMethod(c$, "putJSVal", 
function(hash, key, value, onlyIfAbsent, evict, mode){
var v0 = null;
switch (mode) {
case 2:
{
this.__m.set(key, value);
}++this.modCount;
break;
case 3:
if (hash != 0) {
{
v0 = this.__m.get(key) || null;
}}if (!onlyIfAbsent || v0 == null) {
{
this.__m.set(key, value);
}}break;
}
return v0;
}, "~N,~O,~O,~B,~B,~N");
Clazz.defineMethod(c$, "rehashImpl", 
function(capacity){
var length = (capacity == 0 ? 1 : capacity << 1);
var newData = this.newElementArray(length);
for (var i = 0; i < this.elementData.length; i++) {
var entry = this.elementData[i];
while (entry != null) {
var key = entry.key;
var index = key == null ? 0 : (key.hashCode() & 0x7FFFFFFF) % length;
var next = entry.next;
entry.next = newData[index];
newData[index] = entry;
entry = next;
}
}
this.elementData = newData;
this.computeMaxSize();
}, "~N");
Clazz.defineMethod(c$, "rehash", 
function(){
this.rehashImpl(this.elementData.length);
});
Clazz.overrideMethod(c$, "remove", 
function(key){
switch (java.util.HashMap.__hasKey(this, key)) {
case 0:
break;
case 1:
java.util.HashMap.__ensureJavaMap(this);
break;
case 2:
return null;
case 3:
return this.removeJSNode(1, key, null, false, true);
}
var entry = this.removeJavaEntry(key);
return (entry == null ? null : entry.value);
}, "~O");
Clazz.defineMethod(c$, "removeJSNode", 
function(hash, key, value, matchValue, movable){
var v = null;
if (hash == 1 || matchValue) {
{
v = this.__m.get(key) || null;
}}if (!matchValue || v === value || (value != null && value.equals(v))) {
{
this.__m["delete"](key);
}++this.modCount;
switch (hash) {
case 1:
return v;
case 3:
return "true";
}
}return null;
}, "~N,~O,~O,~B,~B");
Clazz.defineMethod(c$, "removeJavaEntry", 
function(key){
var index = 0;
var entry;
var last = null;
if (key != null) {
index = (key.hashCode() & 0x7FFFFFFF) % this.elementData.length;
entry = this.elementData[index];
while (entry != null && !this.keysEqual(key, entry)) {
last = entry;
entry = entry.next;
}
} else {
entry = this.elementData[0];
while (entry != null && entry.key != null) {
last = entry;
entry = entry.next;
}
}if (entry == null) {
return null;
}if (last == null) {
this.elementData[index] = entry.next;
} else {
last.next = entry.next;
}this.modCount++;
this.elementCount--;
return entry;
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
{
if (this.__m)
return this.__m.size;
}return this.elementCount;
});
Clazz.overrideMethod(c$, "values", 
function(){
if (this.$values == null) {
this.$values = ((Clazz.isClassDefined("java.util.HashMap$2") ? 0 : java.util.HashMap.$HashMap$2$ ()), Clazz.innerTypeInstance(java.util.HashMap$2, this, null));
}return this.$values;
});
Clazz.defineMethod(c$, "__setJS", 
function(){
if (this.__allowJS && java.util.HashMap.USE_SIMPLE) {
var m = null;
{
m = new Map();
}this.__m = m;
} else {
this.__m = null;
}});
c$.__get = Clazz.defineMethod(c$, "__get", 
function(map, key){
{
return map.__m.get(key == null ? null : key + "");
}}, "~O,~O");
c$.__set = Clazz.defineMethod(c$, "__set", 
function(map, key, value){
{
map.__m.set(key == null ? null : key + "", value);
}}, "java.util.Map,~O,~O");
c$.__hasKey = Clazz.defineMethod(c$, "__hasKey", 
function(map, key){
{
return (!map.__m ? 0 : key != null && typeof key != "string" ? 1 :
map.__m.has(key) ? 3 : 2);
}}, "java.util.Map,~O");
c$.__isSimple = Clazz.defineMethod(c$, "__isSimple", 
function(map){
{
return !!map.__m;
}}, "java.util.Map");
c$.__ensureJavaMap = Clazz.defineMethod(c$, "__ensureJavaMap", 
function(map){
{
if (map.__m) { var m = map.__m; map.__m = null;
m.forEach(function(value, key){map.put(key, value);}); m.clear();
}
}}, "java.util.Map");
c$.$HashMap$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "HashMap$1", java.util.AbstractSet);
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.b$["java.util.HashMap"].containsKey(object);
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.b$["java.util.HashMap"].size();
});
Clazz.overrideMethod(c$, "clear", 
function(){
this.b$["java.util.HashMap"].clear();
});
Clazz.overrideMethod(c$, "remove", 
function(key){
if (!this.b$["java.util.HashMap"].containsKey(key)) return false;
this.b$["java.util.HashMap"].remove(key);
return true;
}, "~O");
Clazz.overrideMethod(c$, "iterator", 
function(){
return  new java.util.HashMap.HashMapIterator(((Clazz.isClassDefined("java.util.HashMap$1$1") ? 0 : java.util.HashMap.$HashMap$1$1$ ()), Clazz.innerTypeInstance(java.util.HashMap$1$1, this, null)), this.b$["java.util.HashMap"]);
});
/*eoif5*/})();
};
c$.$HashMap$1$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "HashMap$1$1", null, java.util.MapEntry.Type);
Clazz.overrideMethod(c$, "get", 
function(entry){
if (java.util.HashMap.__isSimple(this.b$["java.util.HashMap"])) {
{
return (entry == null ? null : entry.value[0]);
}}return entry.key;
}, "java.util.MapEntry");
/*eoif5*/})();
};
c$.$HashMap$2$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "HashMap$2", java.util.AbstractCollection);
Clazz.overrideMethod(c$, "contains", 
function(object){
return this.b$["java.util.HashMap"].containsValue(object);
}, "~O");
Clazz.overrideMethod(c$, "size", 
function(){
return this.b$["java.util.HashMap"].size();
});
Clazz.overrideMethod(c$, "clear", 
function(){
this.b$["java.util.HashMap"].clear();
});
Clazz.overrideMethod(c$, "iterator", 
function(){
return  new java.util.HashMap.HashMapIterator(((Clazz.isClassDefined("java.util.HashMap$2$1") ? 0 : java.util.HashMap.$HashMap$2$1$ ()), Clazz.innerTypeInstance(java.util.HashMap$2$1, this, null)), this.b$["java.util.HashMap"]);
});
/*eoif5*/})();
};
c$.$HashMap$2$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "HashMap$2$1", null, java.util.MapEntry.Type);
Clazz.overrideMethod(c$, "get", 
function(entry){
if (java.util.HashMap.__isSimple(this.b$["java.util.HashMap"])) {
{
return (entry == null ? null : entry.value[1]);
}}return entry.value;
}, "java.util.MapEntry");
/*eoif5*/})();
};
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.origKeyHash = 0;
this.next = null;
Clazz.instantialize(this, arguments);}, java.util.HashMap, "Entry", java.util.MapEntry);
Clazz.makeConstructor(c$, 
function(theKey, theValue){
Clazz.superConstructor(this, java.util.HashMap.Entry, [theKey, theValue]);
this.origKeyHash = (theKey == null ? 0 : theKey.hashCode());
}, "~O,~O");
Clazz.defineMethod(c$, "clone", 
function(){
var entry = Clazz.superCall(this, java.util.HashMap.Entry, "clone", []);
if (this.next != null) {
entry.next = this.next.clone();
}return entry;
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.jsMapIterator = null;
this.isSimple = false;
this.index = 0;
this.expectedModCount = 0;
this.type = null;
this.canRemove = false;
this.entry = null;
this.lastEntry = null;
this.associatedMap = null;
Clazz.instantialize(this, arguments);}, java.util.HashMap, "HashMapIterator", null, java.util.Iterator);
Clazz.makeConstructor(c$, 
function(value, hm){
this.associatedMap = hm;
this.type = value;
this.expectedModCount = hm.modCount;
this.lastEntry = this.entry = null;
this.isSimple = java.util.HashMap.__isSimple(this.associatedMap);
if (this.isSimple) {
var m = this.associatedMap.__m;
{
this.jsMapIterator = m.entries();
this.entry = this.jsMapIterator.next();
}}}, "java.util.MapEntry.Type,java.util.HashMap");
Clazz.overrideMethod(c$, "hasNext", 
function(){
if (this.isSimple) {
if (this.entry == null) {
return false;
}var isDone = false;
{
isDone = this.entry.done;
}return !isDone;
}if (this.entry != null) {
return true;
}while (this.index < this.associatedMap.elementData.length) {
if (this.associatedMap.elementData[this.index] == null) {
this.index++;
} else {
return true;
}}
return false;
});
Clazz.defineMethod(c$, "checkConcurrentMod", 
function(){
if (this.expectedModCount != this.associatedMap.modCount) {
throw  new java.util.ConcurrentModificationException();
}});
Clazz.overrideMethod(c$, "next", 
function(){
this.checkConcurrentMod();
if (!this.hasNext()) {
throw  new java.util.NoSuchElementException();
}var result = null;
if (this.isSimple) {
{
result = this.entry;
this.entry = this.jsMapIterator.next() || null;
}} else if (this.entry == null) {
result = this.lastEntry = this.associatedMap.elementData[this.index++];
this.entry = this.lastEntry.next;
} else {
if (this.lastEntry.next !== this.entry) {
this.lastEntry = this.lastEntry.next;
}result = this.entry;
this.entry = this.entry.next;
}this.canRemove = true;
return this.type.get(result);
});
Clazz.overrideMethod(c$, "remove", 
function(){
this.checkConcurrentMod();
if (!this.canRemove) {
throw  new IllegalStateException();
}this.canRemove = false;
this.associatedMap.modCount++;
if (this.lastEntry.next === this.entry) {
while (this.associatedMap.elementData[--this.index] == null) {
;}
this.associatedMap.elementData[this.index] = this.associatedMap.elementData[this.index].next;
this.entry = null;
} else {
this.lastEntry.next = this.entry;
}this.associatedMap.elementCount--;
this.expectedModCount++;
});
/*eoif3*/})();
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.associatedMap = null;
Clazz.instantialize(this, arguments);}, java.util.HashMap, "HashMapEntrySet", java.util.AbstractSet);
Clazz.makeConstructor(c$, 
function(hm){
Clazz.superConstructor (this, java.util.HashMap.HashMapEntrySet, []);
this.associatedMap = hm;
}, "java.util.HashMap");
Clazz.defineMethod(c$, "hashMap", 
function(){
return this.associatedMap;
});
Clazz.overrideMethod(c$, "size", 
function(){
return this.associatedMap.elementCount;
});
Clazz.overrideMethod(c$, "clear", 
function(){
this.associatedMap.clear();
});
Clazz.overrideMethod(c$, "remove", 
function(object){
if (this.contains(object)) {
this.associatedMap.remove((object).getKey());
return true;
}return false;
}, "~O");
Clazz.overrideMethod(c$, "contains", 
function(object){
if (!(Clazz.instanceOf(object,"java.util.Map.Entry"))) return false;
var key = (object).getKey();
if (!this.associatedMap.containsKey(key)) return false;
if (java.util.HashMap.__isSimple(this.associatedMap)) {
var value = (object).getValue();
var v = this.associatedMap.get(key);
return (value === v || value != null && value.equals(v));
}var entry = this.associatedMap.getJavaEntry((object).getKey());
return object.equals(entry);
}, "~O");
Clazz.overrideMethod(c$, "iterator", 
function(){
return  new java.util.HashMap.HashMapIterator(((Clazz.isClassDefined("java.util.HashMap$HashMapEntrySet$1") ? 0 : java.util.HashMap.HashMapEntrySet.$HashMap$HashMapEntrySet$1$ ()), Clazz.innerTypeInstance(java.util.HashMap$HashMapEntrySet$1, this, null)), this.associatedMap);
});
c$.$HashMap$HashMapEntrySet$1$=function(){
/*if5*/;(function(){
var c$ = Clazz.declareAnonymous(java.util, "HashMap$HashMapEntrySet$1", null, java.util.MapEntry.Type);
Clazz.overrideMethod(c$, "get", 
function(entry){
if (java.util.HashMap.__isSimple(this.b$["java.util.HashMap.HashMapEntrySet"].associatedMap)) {
var key = null;
var value = null;
{
key = entry.value[0];
value = entry.value[1];
}return  new java.util.HashMap.Entry(key, value);
}return entry;
}, "java.util.MapEntry");
/*eoif5*/})();
};
/*eoif3*/})();
c$.USE_SIMPLE = true;
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.load(["java.util.Map"], "java.util.MapEntry", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.key = null;
this.value = null;
Clazz.instantialize(this, arguments);}, java.util, "MapEntry", null, [java.util.Map.Entry, Cloneable]);
Clazz.makeConstructor(c$, 
function(theKey){
this.key = theKey;
}, "~O");
Clazz.makeConstructor(c$, 
function(theKey, theValue){
this.key = theKey;
this.value = theValue;
}, "~O,~O");
Clazz.defineMethod(c$, "clone", 
function(){
try {
return Clazz.superCall(this, java.util.MapEntry, "clone", []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});
Clazz.overrideMethod(c$, "equals", 
function(object){
if (this === object) {
return true;
}if (Clazz.instanceOf(object,"java.util.Map.Entry")) {
var entry = object;
return (this.key == null ? entry.getKey() == null : this.key.equals(entry.getKey())) && (this.value == null ? entry.getValue() == null : this.value.equals(entry.getValue()));
}return false;
}, "~O");
Clazz.overrideMethod(c$, "getKey", 
function(){
return this.key;
});
Clazz.overrideMethod(c$, "getValue", 
function(){
return this.value;
});
Clazz.overrideMethod(c$, "hashCode", 
function(){
return (this.key == null ? 0 : this.key.hashCode()) ^ (this.value == null ? 0 : this.value.hashCode());
});
Clazz.overrideMethod(c$, "setValue", 
function(object){
var result = this.value;
this.value = object;
return result;
}, "~O");
Clazz.overrideMethod(c$, "toString", 
function(){
return this.key + "=" + this.value;
});
Clazz.declareInterface(java.util.MapEntry, "Type");
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("javajs.api");
(function(){
var c$ = Clazz.declareType(javajs.api, "Interface", null);
c$.getInterface = Clazz.defineMethod(c$, "getInterface", 
function(name){
try {
var x = Clazz._4Name(name);
return (x == null ? null : x.newInstance());
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
System.out.println("Interface.java Error creating instance for " + name + ": \n" + e);
return null;
} else {
throw e;
}
}
}, "~S");
c$.getInstanceWithParams = Clazz.defineMethod(c$, "getInstanceWithParams", 
function(name, classes, params){
try {
var cl = Clazz._4Name(name);
return cl.getConstructor(classes).newInstance(params);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
System.out.println("Interface.getInterfaceWithParams Error creating instance for " + name + ": \n" + e);
return null;
} else {
throw e;
}
}
}, "~S,~A,~A");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.io.BufferedReader", "javajs.api.GenericLineReader"], "JU.Rdr", ["java.io.BufferedInputStream", "$.ByteArrayInputStream", "$.InputStreamReader", "$.StringReader", "JU.AU", "$.Base64", "$.Encoding", "$.SB"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.reader = null;
Clazz.instantialize(this, arguments);}, JU, "Rdr", null, javajs.api.GenericLineReader);
Clazz.makeConstructor(c$, 
function(reader){
this.reader = reader;
}, "java.io.BufferedReader");
Clazz.overrideMethod(c$, "readNextLine", 
function(){
return this.reader.readLine();
});
c$.readCifData = Clazz.defineMethod(c$, "readCifData", 
function(parser, br, keys){
parser.set(null, br, false);
return (keys == null ? parser.getAllCifData() : parser.getAllCifDataType(keys));
}, "javajs.api.GenericCifDataParser,java.io.BufferedReader,~A");
c$.fixUTF = Clazz.defineMethod(c$, "fixUTF", 
function(bytes){
var encoding = JU.Rdr.getUTFEncoding(bytes);
if (encoding !== JU.Encoding.NONE) {
try {
var s =  String.instantialize(bytes, encoding.name().$replace('_', '-'));
switch (encoding) {
case JU.Encoding.UTF8:
case JU.Encoding.UTF_16BE:
case JU.Encoding.UTF_16LE:
s = s.substring(1);
break;
default:
break;
}
return s;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
System.out.println(e);
} else {
throw e;
}
}
}return  String.instantialize(bytes);
}, "~A");
c$.getUTFEncoding = Clazz.defineMethod(c$, "getUTFEncoding", 
function(bytes){
if (bytes.length >= 3 && (bytes[0] & 0xFF) == 0xEF && (bytes[1] & 0xFF) == 0xBB && (bytes[2] & 0xFF) == 0xBF) return JU.Encoding.UTF8;
if (bytes.length >= 4 && (bytes[0] & 0xFF) == 0 && (bytes[1] & 0xFF) == 0 && (bytes[2] & 0xFF) == 0xFE && (bytes[3] & 0xFF) == 0xFF) return JU.Encoding.UTF_32BE;
if (bytes.length >= 4 && (bytes[0] & 0xFF) == 0xFF && (bytes[1] & 0xFF) == 0xFE && (bytes[2] & 0xFF) == 0 && (bytes[3] & 0xFF) == 0) return JU.Encoding.UTF_32LE;
if (bytes.length >= 2 && (bytes[0] & 0xFF) == 0xFF && (bytes[1] & 0xFF) == 0xFE) return JU.Encoding.UTF_16LE;
if (bytes.length >= 2 && (bytes[0] & 0xFF) == 0xFE && (bytes[1] & 0xFF) == 0xFF) return JU.Encoding.UTF_16BE;
return JU.Encoding.NONE;
}, "~A");
c$.getUTFEncodingForStream = Clazz.defineMethod(c$, "getUTFEncodingForStream", 
function(is){
{
is.resetStream();
}var abMagic =  Clazz.newByteArray (4, 0);
abMagic[3] = 1;
try {
is.mark(5);
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return JU.Encoding.NONE;
} else {
throw e;
}
}
is.read(abMagic, 0, 4);
is.reset();
return JU.Rdr.getUTFEncoding(abMagic);
}, "java.io.BufferedInputStream");
c$.isBase64 = Clazz.defineMethod(c$, "isBase64", 
function(sb){
return (sb.indexOf(";base64,") == 0);
}, "JU.SB");
c$.isCompoundDocumentS = Clazz.defineMethod(c$, "isCompoundDocumentS", 
function(is){
return JU.Rdr.isCompoundDocumentB(JU.Rdr.getMagic(is, 8));
}, "java.io.InputStream");
c$.isCompoundDocumentB = Clazz.defineMethod(c$, "isCompoundDocumentB", 
function(bytes){
return (bytes.length >= 8 && (bytes[0] & 0xFF) == 0xD0 && (bytes[1] & 0xFF) == 0xCF && (bytes[2] & 0xFF) == 0x11 && (bytes[3] & 0xFF) == 0xE0 && (bytes[4] & 0xFF) == 0xA1 && (bytes[5] & 0xFF) == 0xB1 && (bytes[6] & 0xFF) == 0x1A && (bytes[7] & 0xFF) == 0xE1);
}, "~A");
c$.isBZip2S = Clazz.defineMethod(c$, "isBZip2S", 
function(is){
return JU.Rdr.isBZip2B(JU.Rdr.getMagic(is, 3));
}, "java.io.InputStream");
c$.isGzipS = Clazz.defineMethod(c$, "isGzipS", 
function(is){
return JU.Rdr.isGzipB(JU.Rdr.getMagic(is, 2));
}, "java.io.InputStream");
c$.isBZip2B = Clazz.defineMethod(c$, "isBZip2B", 
function(bytes){
return (bytes != null && bytes.length >= 3 && (bytes[0] & 0xFF) == 0x42 && (bytes[1] & 0xFF) == 0x5A && (bytes[2] & 0xFF) == 0x68);
}, "~A");
c$.isGzipB = Clazz.defineMethod(c$, "isGzipB", 
function(bytes){
return (bytes != null && bytes.length >= 2 && (bytes[0] & 0xFF) == 0x1F && (bytes[1] & 0xFF) == 0x8B);
}, "~A");
c$.isPickleS = Clazz.defineMethod(c$, "isPickleS", 
function(is){
return JU.Rdr.isPickleB(JU.Rdr.getMagic(is, 2));
}, "java.io.InputStream");
c$.isPickleB = Clazz.defineMethod(c$, "isPickleB", 
function(bytes){
return (bytes != null && bytes.length >= 2 && (bytes[0] & 0xFF) == 0x7D && (bytes[1] & 0xFF) == 0x71);
}, "~A");
c$.isMessagePackS = Clazz.defineMethod(c$, "isMessagePackS", 
function(is){
return JU.Rdr.isMessagePackB(JU.Rdr.getMagic(is, 2));
}, "java.io.InputStream");
c$.isMessagePackB = Clazz.defineMethod(c$, "isMessagePackB", 
function(bytes){
var b;
return (bytes != null && bytes.length >= 1 && (((b = bytes[0] & 0xFF)) == 0xDE || (b & 0xE0) == 0x80 && bytes[1] != 0x50));
}, "~A");
c$.isPngZipStream = Clazz.defineMethod(c$, "isPngZipStream", 
function(is){
return JU.Rdr.isPngZipB(JU.Rdr.getMagic(is, 55));
}, "java.io.InputStream");
c$.isPngZipB = Clazz.defineMethod(c$, "isPngZipB", 
function(bytes){
return (bytes[50] == 0 && bytes[51] == 0x50 && bytes[52] == 0x4E && bytes[53] == 0x47 && bytes[54] == 0x4A);
}, "~A");
c$.isZipS = Clazz.defineMethod(c$, "isZipS", 
function(is){
return JU.Rdr.isZipB(JU.Rdr.getMagic(is, 4));
}, "java.io.InputStream");
c$.isZipB = Clazz.defineMethod(c$, "isZipB", 
function(bytes){
return (bytes.length >= 4 && bytes[0] == 0x50 && bytes[1] == 0x4B && bytes[2] == 0x03 && bytes[3] == 0x04);
}, "~A");
c$.getMagic = Clazz.defineMethod(c$, "getMagic", 
function(is, n){
var abMagic = (n > 264 ?  Clazz.newByteArray (n, 0) : JU.Rdr.b264 == null ? (JU.Rdr.b264 =  Clazz.newByteArray (265, 0)) : JU.Rdr.b264);
{
is.resetStream();
}try {
abMagic[264] = -1;
is.mark(n + 1);
var i = is.read(abMagic, 0, n);
if (i < n) {
abMagic[0] = abMagic[264] = 0;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
try {
is.reset();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return abMagic;
}, "java.io.InputStream,~N");
c$.guessMimeTypeForBytes = Clazz.defineMethod(c$, "guessMimeTypeForBytes", 
function(bytes){
switch (bytes.length < 2 ? -1 : bytes[1]) {
case 0:
return "image/jpg";
case 0x49:
return "image/gif";
case 0x4D:
return "image/BMP";
case 0x50:
return "image/png";
default:
return "image/unknown";
}
}, "~A");
c$.getBIS = Clazz.defineMethod(c$, "getBIS", 
function(bytes){
return  new java.io.BufferedInputStream( new java.io.ByteArrayInputStream(bytes));
}, "~A");
c$.getBR = Clazz.defineMethod(c$, "getBR", 
function(string){
return  new java.io.BufferedReader( new java.io.StringReader(string));
}, "~S");
c$.getUnzippedInputStream = Clazz.defineMethod(c$, "getUnzippedInputStream", 
function(jzt, bis){
while (JU.Rdr.isGzipS(bis)) bis =  new java.io.BufferedInputStream(jzt.newGZIPInputStream(bis));

return bis;
}, "javajs.api.GenericZipTools,java.io.BufferedInputStream");
c$.getUnzippedInputStreamBZip2 = Clazz.defineMethod(c$, "getUnzippedInputStreamBZip2", 
function(jzt, bis){
while (JU.Rdr.isBZip2S(bis)) bis =  new java.io.BufferedInputStream(jzt.newBZip2InputStream(bis));

return bis;
}, "javajs.api.GenericZipTools,java.io.BufferedInputStream");
c$.getBytesFromSB = Clazz.defineMethod(c$, "getBytesFromSB", 
function(sb){
return (JU.Rdr.isBase64(sb) ? JU.Base64.decodeBase64(sb.substring(8)) : sb.toBytes(0, -1));
}, "JU.SB");
c$.getStreamAsBytes = Clazz.defineMethod(c$, "getStreamAsBytes", 
function(bis, out){
var buf =  Clazz.newByteArray (1024, 0);
var bytes = (out == null ?  Clazz.newByteArray (4096, 0) : null);
var len = 0;
var totalLen = 0;
while ((len = bis.read(buf, 0, 1024)) > 0) {
totalLen += len;
if (out == null) {
if (totalLen >= bytes.length) bytes = JU.AU.ensureLengthByte(bytes, totalLen * 2);
System.arraycopy(buf, 0, bytes, totalLen - len, len);
} else {
out.write(buf, 0, len);
}}
bis.close();
if (out == null) {
return JU.AU.arrayCopyByte(bytes, totalLen);
}return totalLen + " bytes";
}, "java.io.BufferedInputStream,JU.OC");
c$.getBufferedReader = Clazz.defineMethod(c$, "getBufferedReader", 
function(bis, charSet){
if (JU.Rdr.getUTFEncodingForStream(bis) === JU.Encoding.NONE) return  new JU.Rdr.StreamReader(bis, charSet);
var bytes = JU.Rdr.getLimitedStreamBytes(bis, -1);
bis.close();
return JU.Rdr.getBR(charSet == null ? JU.Rdr.fixUTF(bytes) :  String.instantialize(bytes, charSet));
}, "java.io.BufferedInputStream,~S");
c$.getLimitedStreamBytes = Clazz.defineMethod(c$, "getLimitedStreamBytes", 
function(is, n){
var buflen = (n > 0 && n < 1024 ? n : 1024);
var buf =  Clazz.newByteArray (buflen, 0);
var bytes =  Clazz.newByteArray (n < 0 ? 4096 : n, 0);
var len = 0;
var totalLen = 0;
if (n < 0) n = 2147483647;
while (totalLen < n && (len = is.read(buf, 0, buflen)) > 0) {
totalLen += len;
if (totalLen > bytes.length) bytes = JU.AU.ensureLengthByte(bytes, totalLen * 2);
System.arraycopy(buf, 0, bytes, totalLen - len, len);
if (n != 2147483647 && totalLen + buflen > bytes.length) buflen = bytes.length - totalLen;
}
if (totalLen == bytes.length) return bytes;
buf =  Clazz.newByteArray (totalLen, 0);
System.arraycopy(bytes, 0, buf, 0, totalLen);
return buf;
}, "java.io.InputStream,~N");
c$.streamToUTF8String = Clazz.defineMethod(c$, "streamToUTF8String", 
function(bis){
var data =  new Array(1);
try {
JU.Rdr.readAllAsString(JU.Rdr.getBufferedReader(bis, "UTF-8"), -1, true, data, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return data[0];
}, "java.io.BufferedInputStream");
c$.readAllAsString = Clazz.defineMethod(c$, "readAllAsString", 
function(br, nBytesMax, allowBinary, data, i){
try {
var sb = JU.SB.newN(8192);
var line;
if (nBytesMax < 0) {
line = br.readLine();
if (allowBinary || line != null && line.indexOf('\0') < 0 && (line.length != 4 || (line.charAt(0)).charCodeAt(0) != 65533 || line.indexOf("PNG") != 1)) {
sb.append(line).appendC('\n');
while ((line = br.readLine()) != null) sb.append(line).appendC('\n');

}} else {
var n = 0;
var len;
while (n < nBytesMax && (line = br.readLine()) != null) {
if (nBytesMax - n < (len = line.length) + 1) line = line.substring(0, nBytesMax - n - 1);
sb.append(line).appendC('\n');
n += len + 1;
}
}br.close();
data[i] = sb.toString();
return true;
} catch (ioe) {
if (Clazz.exceptionOf(ioe, Exception)){
data[i] = ioe.toString();
return false;
} else {
throw ioe;
}
}
}, "java.io.BufferedReader,~N,~B,~A,~N");
c$.getPngZipPointAndCount = Clazz.defineMethod(c$, "getPngZipPointAndCount", 
function(bis, pt_count){
bis.mark(75);
try {
var data = JU.Rdr.getLimitedStreamBytes(bis, 74);
bis.reset();
var pt = 0;
for (var i = 64, f = 1; --i > 54; f *= 10) pt += (data[i] - 48) * f;

var n = 0;
for (var i = 74, f = 1; --i > 64; f *= 10) n += (data[i] - 48) * f;

pt_count[0] = pt;
pt_count[1] = n;
} catch (e) {
pt_count[1] = 0;
}
}, "java.io.BufferedInputStream,~A");
c$.getPngZipStream = Clazz.defineMethod(c$, "getPngZipStream", 
function(bis, asNewStream){
if (!JU.Rdr.isPngZipStream(bis)) return bis;
var data =  Clazz.newByteArray (0, 0);
bis.mark(75);
try {
var pt_count =  Clazz.newIntArray (2, 0);
JU.Rdr.getPngZipPointAndCount(bis, pt_count);
if (pt_count[1] != 0) {
var pt = pt_count[0];
while (pt > 0) pt -= bis.skip(pt);

if (!asNewStream) return bis;
data = JU.Rdr.getLimitedStreamBytes(bis, pt_count[1]);
}} catch (e) {
} finally {
try {
if (asNewStream) bis.close();
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
} else {
throw e;
}
}
}
return JU.Rdr.getBIS(data);
}, "java.io.BufferedInputStream,~B");
c$.getZipRoot = Clazz.defineMethod(c$, "getZipRoot", 
function(fileName){
var pt = fileName.indexOf("|");
return (pt < 0 ? fileName : fileName.substring(0, pt));
}, "~S");
c$.isTar = Clazz.defineMethod(c$, "isTar", 
function(bis){
var bytes = JU.Rdr.getMagic(bis, 264);
return (bytes[264] == -1 && (bytes[257] & 0xFF) == 0x75 && (bytes[258] & 0xFF) == 0x73 && (bytes[259] & 0xFF) == 0x74 && (bytes[260] & 0xFF) == 0x61 && (bytes[261] & 0xFF) == 0x72);
}, "java.io.BufferedInputStream");
c$.streamToBytes = Clazz.defineMethod(c$, "streamToBytes", 
function(is){
var bytes = JU.Rdr.getLimitedStreamBytes(is, -1);
is.close();
return bytes;
}, "java.io.InputStream");
c$.streamToString = Clazz.defineMethod(c$, "streamToString", 
function(is){
return  String.instantialize(JU.Rdr.streamToBytes(is));
}, "java.io.InputStream");
c$.isBinary = Clazz.defineMethod(c$, "isBinary", 
function(bis, n){
var bytes = JU.Rdr.getMagic(bis, n);
if (JU.Rdr.b264[264] == -1) for (var i = 0; i < n; i++) if (bytes[i] < 9) return true;

return false;
}, "java.io.BufferedInputStream,~N");
/*if3*/;(function(){
var c$ = Clazz.decorateAsClass(function(){
this.stream = null;
Clazz.instantialize(this, arguments);}, JU.Rdr, "StreamReader", java.io.BufferedReader);
Clazz.makeConstructor(c$, 
function(bis, charSet){
Clazz.superConstructor(this, JU.Rdr.StreamReader, [ new java.io.InputStreamReader(bis, (charSet == null ? "UTF-8" : charSet))]);
this.stream = bis;
}, "java.io.BufferedInputStream,~S");
Clazz.defineMethod(c$, "getStream", 
function(){
try {
this.stream.reset();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return this.stream;
});
/*eoif3*/})();
c$.b264 = null;
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("javajs.api");
Clazz.declareInterface(javajs.api, "GenericLineReader");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.load(["java.io.InputStream"], "java.io.ByteArrayInputStream", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.buf = null;
this.pos = 0;
this.$mark = 0;
this.count = 0;
Clazz.instantialize(this, arguments);}, java.io, "ByteArrayInputStream", java.io.InputStream);
Clazz.makeConstructor(c$, 
function(buf){
Clazz.superConstructor (this, java.io.ByteArrayInputStream, []);
this.buf = buf;
this.pos = 0;
this.count = buf.length;
}, "~A");
Clazz.overrideMethod(c$, "readByteAsInt", 
function(){
return (this.pos < this.count) ? (this.buf[this.pos++] & 0xff) : -1;
});
Clazz.overrideMethod(c$, "read", 
function(b, off, len){
return this.readBAIS(b, off, len);
}, "~A,~N,~N");
Clazz.defineMethod(c$, "readBAIS", 
function(b, off, len){
if (b == null) {
throw  new NullPointerException();
} else if (off < 0 || len < 0 || len > b.length - off) {
throw  new IndexOutOfBoundsException();
}if (this.pos >= this.count) {
return -1;
}var avail = this.count - this.pos;
if (len > avail) {
len = avail;
}if (len <= 0) {
return 0;
}System.arraycopy(this.buf, this.pos, b, off, len);
this.pos += len;
return len;
}, "~A,~N,~N");
Clazz.overrideMethod(c$, "skip", 
function(n){
var k = this.count - this.pos;
if (n < k) {
k = n < 0 ? 0 : n;
}this.pos += k;
return k;
}, "~N");
Clazz.overrideMethod(c$, "available", 
function(){
return this.count - this.pos;
});
Clazz.overrideMethod(c$, "markSupported", 
function(){
return true;
});
Clazz.overrideMethod(c$, "mark", 
function(readAheadLimit){
this.$mark = this.pos;
}, "~N");
Clazz.overrideMethod(c$, "resetStream", 
function(){
});
Clazz.overrideMethod(c$, "reset", 
function(){
this.pos = this.$mark;
});
Clazz.overrideMethod(c$, "close", 
function(){
});
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JSV.source");
Clazz.load(["java.util.Iterator"], "JSV.source.JDXDecompressor", ["JSV.common.Coordinate", "JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.xFactor = 0;
this.yFactor = 0;
this.nPoints = 0;
this.ich = 0;
this.t = null;
this.firstX = 0;
this.lastX = 0;
this.maxY = 4.9E-324;
this.minY = 1.7976931348623157E308;
this.debugging = false;
this.xyCoords = null;
this.line = null;
this.lineLen = 0;
this.errorLog = null;
this.lastDif = -2147483648;
this.dupCount = 0;
this.nptsFound = 0;
this.lastY = 0;
this.isDIF = true;
Clazz.instantialize(this, arguments);}, JSV.source, "JDXDecompressor", null, java.util.Iterator);
Clazz.makeConstructor(c$, 
function(t, firstX, lastX, xFactor, yFactor, nPoints){
this.t = t;
this.firstX = firstX;
this.lastX = lastX;
this.xFactor = xFactor;
this.yFactor = yFactor;
this.nPoints = nPoints;
this.debugging = JU.Logger.isActiveLevel(6);
}, "JSV.source.JDXSourceStreamTokenizer,~N,~N,~N,~N,~N");
Clazz.makeConstructor(c$, 
function(line, lastY){
this.line = line.trim();
this.lineLen = line.length;
this.lastY = lastY;
}, "~S,~N");
Clazz.defineMethod(c$, "getMinY", 
function(){
return this.minY;
});
Clazz.defineMethod(c$, "getMaxY", 
function(){
return this.maxY;
});
Clazz.defineMethod(c$, "decompressData", 
function(errorLog){
this.errorLog = errorLog;
var deltaXcalc = JSV.common.Coordinate.deltaX(this.lastX, this.firstX, this.nPoints);
if (this.debugging) this.logError("firstX=" + this.firstX + " lastX=" + this.lastX + " xFactor=" + this.xFactor + " yFactor=" + this.yFactor + " deltaX=" + deltaXcalc + " nPoints=" + this.nPoints);
this.xyCoords =  new Array(this.nPoints);
var difFracMax = 0.5;
var prevXcheck = 0;
var prevIpt = 0;
var lastXExpected = this.lastX;
var x = this.lastX = this.firstX;
var lastLine = null;
var ipt = 0;
var yval = 0;
var haveWarned = false;
var lineNumber = this.t.labelLineNo;
try {
while ((this.line = this.t.readLineTrimmed()) != null && this.line.indexOf("##") < 0) {
lineNumber++;
if ((this.lineLen = this.line.length) == 0) continue;
this.ich = 0;
var isCheckPoint = this.isDIF;
var xcheck = this.readSignedFloat() * this.xFactor;
yval = this.nextValue(yval);
if (!isCheckPoint && ipt > 0) x += deltaXcalc;
if (this.debugging) this.logError("Line: " + lineNumber + " isCP=" + isCheckPoint + "\t>>" + this.line + "<<\n x, xcheck " + x + " " + x / this.xFactor + " " + xcheck / this.xFactor + " " + deltaXcalc / this.xFactor);
var y = yval * this.yFactor;
var point =  new JSV.common.Coordinate().set(x, y);
if (ipt == 0 || !isCheckPoint) {
this.addPoint(point, ipt++);
} else if (ipt < this.nPoints) {
var lastY = this.xyCoords[ipt - 1].getYVal();
if (y != lastY) {
this.xyCoords[ipt - 1] = point;
this.logError(lastLine + "\n" + this.line + "\nY-value Checkpoint Error! Line " + lineNumber + " for y=" + y + " yLast=" + lastY);
}if (xcheck == prevXcheck || (xcheck < prevXcheck) != (deltaXcalc < 0)) {
this.logError(lastLine + "\n" + this.line + "\nX-sequence Checkpoint Error! Line " + lineNumber + " order for xCheck=" + xcheck + " after prevXCheck=" + prevXcheck);
}var xcheckDif = Math.abs(xcheck - prevXcheck);
var xiptDif = Math.abs((ipt - prevIpt) * deltaXcalc);
var fracDif = Math.abs((xcheckDif - xiptDif)) / xcheckDif;
if (this.debugging) System.err.println("JDXD fracDif = " + xcheck + "\t" + prevXcheck + "\txcheckDif=" + xcheckDif + "\txiptDif=" + xiptDif + "\tf=" + fracDif);
if (fracDif > difFracMax) {
this.logError(lastLine + "\n" + this.line + "\nX-value Checkpoint Error! Line " + lineNumber + " expected " + xiptDif + " but X-Sequence Check difference reads " + xcheckDif);
}}prevIpt = (ipt == 1 ? 0 : ipt);
prevXcheck = xcheck;
var nX = 0;
while (this.hasNext()) {
var ich0 = this.ich;
if (this.debugging) this.logError("line " + lineNumber + " char " + ich0 + ":" + this.line.substring(0, ich0) + ">>>>" + this.line.substring(this.ich));
if (Double.isNaN(yval = this.nextValue(yval))) {
this.logError("There was an error reading line " + lineNumber + " char " + ich0 + ":" + this.line.substring(0, ich0) + ">>>>" + this.line.substring(ich0));
} else {
x += deltaXcalc;
if (yval == 1.7976931348623157E308) {
yval = 0;
this.logError("Point marked invalid '?' for line " + lineNumber + " char " + ich0 + ":" + this.line.substring(0, ich0) + ">>>>" + this.line.substring(ich0));
}this.addPoint( new JSV.common.Coordinate().set(x, yval * this.yFactor), ipt++);
if (this.debugging) this.logError("nx=" + ++nX + " " + x + " " + x / this.xFactor + " yval=" + yval);
}}
this.lastX = x;
if (!haveWarned && ipt > this.nPoints) {
this.logError("! points overflow nPoints!");
haveWarned = true;
}lastLine = this.line;
}
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
ioe.printStackTrace();
} else {
throw ioe;
}
}
this.checkZeroFill(ipt, lastXExpected);
return this.xyCoords;
}, "JU.SB");
Clazz.defineMethod(c$, "checkZeroFill", 
function(ipt, lastXExpected){
this.nptsFound = ipt;
if (this.nPoints == this.nptsFound) {
if (Math.abs(lastXExpected - this.lastX) > 0.00001) this.logError("Something went wrong! The last X value was " + this.lastX + " but expected " + lastXExpected);
} else {
this.logError("Decompressor did not find " + this.nPoints + " points -- instead " + this.nptsFound + " xyCoords.length set to " + this.nPoints);
for (var i = this.nptsFound; i < this.nPoints; i++) this.addPoint( new JSV.common.Coordinate().set(0, NaN), i);

}}, "~N,~N");
Clazz.defineMethod(c$, "addPoint", 
function(pt, ipt){
if (ipt >= this.nPoints) return;
this.xyCoords[ipt] = pt;
var y = pt.getYVal();
if (y > this.maxY) this.maxY = y;
 else if (y < this.minY) this.minY = y;
if (this.debugging) this.logError("Coord: " + ipt + pt);
}, "JSV.common.Coordinate,~N");
Clazz.defineMethod(c$, "logError", 
function(s){
if (this.debugging) JU.Logger.debug(s);
System.err.println(s);
this.errorLog.append(s).appendC('\n');
}, "~S");
Clazz.defineMethod(c$, "nextValue", 
function(yval){
if (this.dupCount > 0) return this.getDuplicate(yval);
var ch = this.skipUnknown();
switch (JSV.source.JDXDecompressor.actions[ch.charCodeAt(0)]) {
case 1:
this.isDIF = true;
return yval + (this.lastDif = this.readNextInteger(ch == '%' ? 0 : ch <= 'R' ? ch.charCodeAt(0) - 73 : 105 - ch.charCodeAt(0)));
case 2:
this.dupCount = this.readNextInteger((ch == 's' ? 9 : ch.charCodeAt(0) - 82)) - 1;
return this.getDuplicate(yval);
case 3:
yval = this.readNextSqueezedNumber(ch);
break;
case 4:
this.ich--;
yval = this.readSignedFloat();
break;
case -1:
yval = 1.7976931348623157E308;
break;
default:
yval = NaN;
break;
}
this.isDIF = false;
return yval;
}, "~N");
Clazz.defineMethod(c$, "skipUnknown", 
function(){
var ch = '\u0000';
while (this.ich < this.lineLen && JSV.source.JDXDecompressor.actions[(ch = this.line.charAt(this.ich++)).charCodeAt(0)] == 0) {
}
return ch;
});
Clazz.defineMethod(c$, "readSignedFloat", 
function(){
var ich0 = this.ich;
var ch = '\u0000';
while (this.ich < this.lineLen && " ,\t\n".indexOf(ch = this.line.charAt(this.ich)) >= 0) this.ich++;

var factor = 1;
switch ((ch).charCodeAt(0)) {
case 45:
factor = -1;
case 43:
ich0 = ++this.ich;
break;
}
if (this.scanToNonnumeric() == 'E' && this.ich + 3 < this.lineLen) {
switch ((this.line.charAt(this.ich + 1)).charCodeAt(0)) {
case 45:
case 43:
this.ich += 4;
if (this.ich < this.lineLen && (ch = this.line.charAt(this.ich)) >= '0' && ch <= '9') this.ich++;
break;
}
}return factor * Double.parseDouble(this.line.substring(ich0, this.ich));
});
Clazz.defineMethod(c$, "getDuplicate", 
function(yval){
this.dupCount--;
return (this.isDIF ? yval + this.lastDif : yval);
}, "~N");
Clazz.defineMethod(c$, "readNextInteger", 
function(n){
var c = String.fromCharCode(0);
while (this.ich < this.lineLen && (c = this.line.charAt(this.ich)) >= '0' && c <= '9') {
n = n * 10 + (n < 0 ? 48 - c.charCodeAt(0) : c.charCodeAt(0) - 48);
this.ich++;
}
return n;
}, "~N");
Clazz.defineMethod(c$, "readNextSqueezedNumber", 
function(ch){
var ich0 = this.ich;
this.scanToNonnumeric();
return Double.parseDouble((ch.charCodeAt(0) > 0x60 ? 0x60 - ch.charCodeAt(0) : ch.charCodeAt(0) - 0x40) + this.line.substring(ich0, this.ich));
}, "~S");
Clazz.defineMethod(c$, "scanToNonnumeric", 
function(){
var ch = String.fromCharCode(0);
while (this.ich < this.lineLen && ((ch = this.line.charAt(this.ich)) == '.' || ch >= '0' && ch <= '9')) this.ich++;

return (this.ich < this.lineLen ? ch : '\0');
});
Clazz.defineMethod(c$, "getNPointsFound", 
function(){
return this.nptsFound;
});
Clazz.overrideMethod(c$, "hasNext", 
function(){
return (this.ich < this.lineLen || this.dupCount > 0);
});
Clazz.overrideMethod(c$, "next", 
function(){
return (this.hasNext() ? Double.$valueOf(this.lastY = this.nextValue(this.lastY)) : null);
});
Clazz.overrideMethod(c$, "remove", 
function(){
});
c$.actions =  Clazz.newIntArray (255, 0);
{
for (var i = 0x25; i <= 0x73; i++) {
var c = String.fromCharCode(i);
switch ((c).charCodeAt(0)) {
case 37:
case 74:
case 75:
case 76:
case 77:
case 78:
case 79:
case 80:
case 81:
case 82:
case 106:
case 107:
case 108:
case 109:
case 110:
case 111:
case 112:
case 113:
case 114:
JSV.source.JDXDecompressor.actions[i] = 1;
break;
case 43:
case 45:
case 46:
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
JSV.source.JDXDecompressor.actions[i] = 4;
break;
case 63:
JSV.source.JDXDecompressor.actions[i] = -1;
break;
case 64:
case 65:
case 66:
case 67:
case 68:
case 69:
case 70:
case 71:
case 72:
case 73:
case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
case 103:
case 104:
case 105:
JSV.source.JDXDecompressor.actions[i] = 3;
break;
case 83:
case 84:
case 85:
case 86:
case 87:
case 88:
case 89:
case 90:
case 115:
JSV.source.JDXDecompressor.actions[i] = 2;
break;
}
}
}});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.source");
Clazz.load(["JSV.source.JDXHeader"], "JSV.source.JDXSource", ["JU.Lst"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.type = 0;
this.isCompoundSource = false;
this.jdxSpectra = null;
this.errors = "";
this.filePath = null;
this.peakCount = 0;
this.isView = false;
this.inlineData = null;
Clazz.instantialize(this, arguments);}, JSV.source, "JDXSource", JSV.source.JDXHeader);
Clazz.makeConstructor(c$, 
function(type, filePath){
Clazz.superConstructor (this, JSV.source.JDXSource, []);
this.type = type;
this.setFilePath(filePath);
this.headerTable =  new JU.Lst();
this.jdxSpectra =  new JU.Lst();
this.isCompoundSource = (type != 0);
}, "~N,~S");
Clazz.defineMethod(c$, "dispose", 
function(){
this.headerTable = null;
this.jdxSpectra = null;
});
Clazz.defineMethod(c$, "getJDXSpectrum", 
function(index){
if (index < 0) index += this.jdxSpectra.size();
return (this.jdxSpectra.size() <= index ? null : this.jdxSpectra.get(index));
}, "~N");
Clazz.defineMethod(c$, "addJDXSpectrum", 
function(filePath, spectrum, forceSub){
if (filePath == null) filePath = this.filePath;
spectrum.setFilePath(filePath);
if (this.inlineData != null) spectrum.setInlineData(this.inlineData);
var n = this.jdxSpectra.size();
if (n == 0 || !this.jdxSpectra.get(n - 1).addSubSpectrum(spectrum, forceSub)) this.jdxSpectra.addLast(spectrum);
}, "~S,JSV.common.Spectrum,~B");
Clazz.defineMethod(c$, "getNumberOfSpectra", 
function(){
return this.jdxSpectra.size();
});
Clazz.defineMethod(c$, "getSpectra", 
function(){
return this.jdxSpectra;
});
Clazz.defineMethod(c$, "getSpectraAsArray", 
function(){
return (this.jdxSpectra == null ? null : this.jdxSpectra.toArray());
});
Clazz.defineMethod(c$, "getErrorLog", 
function(){
return this.errors;
});
Clazz.defineMethod(c$, "setErrorLog", 
function(errors){
this.errors = errors;
}, "~S");
Clazz.defineMethod(c$, "setFilePath", 
function(filePath){
this.filePath = filePath;
}, "~S");
Clazz.defineMethod(c$, "getFilePath", 
function(){
return this.filePath;
});
c$.createView = Clazz.defineMethod(c$, "createView", 
function(specs){
var source =  new JSV.source.JDXSource(-2, "view");
source.isView = true;
for (var i = 0; i < specs.size(); i++) source.addJDXSpectrum(specs.get(i).getFilePath(), specs.get(i), false);

return source;
}, "JU.Lst");
Clazz.defineMethod(c$, "getHeaderRowDataAsArray", 
function(addDataClass, rowData){
if (rowData == null) rowData =  Clazz.newArray(0, 0, null);
var data = this.getHeaderRowDataAsArray(addDataClass, rowData.length);
for (var i = rowData.length; --i >= 0; ) data[data.length - rowData.length + i] = rowData[i];

return data;
}, "~B,~A");
Clazz.defineMethod(c$, "setID", 
function(id){
this.jdxSpectra.get(0).sourceID = id;
}, "~S");
Clazz.defineMethod(c$, "matchesFilePath", 
function(filePath){
return this.filePath.equals(filePath) || this.filePath.$replace('\\', '/').equals(filePath);
}, "~S");
Clazz.defineMethod(c$, "setInlineData", 
function(data){
this.inlineData = data;
if (this.jdxSpectra != null) for (var i = this.jdxSpectra.size(); --i >= 0; ) this.jdxSpectra.get(i).setInlineData(data);

}, "~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.tree");
Clazz.load(["JSV.api.JSVTree"], "JSV.tree.SimpleTree", ["JSV.common.JSVFileManager", "$.PanelNode", "JSV.tree.SimpleTreeModel", "$.SimpleTreeNode", "$.SimpleTreePath"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.si = null;
this.rootNode = null;
this.spectraTreeModel = null;
this.vwr = null;
this.selectedPath = null;
Clazz.instantialize(this, arguments);}, JSV.tree, "SimpleTree", null, JSV.api.JSVTree);
Clazz.makeConstructor(c$, 
function(viewer){
this.vwr = viewer;
this.rootNode =  new JSV.tree.SimpleTreeNode("Spectra", null);
this.spectraTreeModel =  new JSV.tree.SimpleTreeModel(this.rootNode);
}, "JSV.common.JSViewer");
Clazz.overrideMethod(c$, "getRootNode", 
function(){
return this.rootNode;
});
Clazz.defineMethod(c$, "valueChanged", 
function(){
this.vwr.selectedTreeNode(this.getLastSelectedPathComponent());
});
Clazz.defineMethod(c$, "getLastSelectedPathComponent", 
function(){
return (this.selectedPath == null ? null : this.selectedPath.getLastPathComponent());
});
Clazz.overrideMethod(c$, "setSelectedPanel", 
function(si, jsvp){
if (jsvp != null) {
var treeNode = JSV.common.PanelNode.findNode(jsvp, this.vwr.panelNodes).treeNode;
this.setSelectionPath(this.vwr.spectraTree.newTreePath(treeNode.getPath()));
}}, "JSV.api.ScriptInterface,JSV.api.JSVPanel");
Clazz.defineMethod(c$, "setSelectionPath", 
function(newTreePath){
this.selectedPath = newTreePath;
this.valueChanged();
}, "JSV.api.JSVTreePath");
Clazz.overrideMethod(c$, "createTree", 
function(fileCount, source, panels){
var tree = this.vwr.spectraTree;
var rootNode = tree.getRootNode();
var panelNodes = this.vwr.panelNodes;
var fileName = JSV.common.JSVFileManager.getTagName(source.getFilePath());
var panelNode =  new JSV.common.PanelNode(null, fileName, source, null);
var fileNode =  new JSV.tree.SimpleTreeNode(fileName, panelNode);
panelNode.setTreeNode(fileNode);
tree.spectraTreeModel.insertNodeInto(fileNode, rootNode, rootNode.getChildCount());
for (var i = 0; i < panels.length; i++) {
var jsvp = panels[i];
var id = fileCount + "." + (i + 1);
panelNode =  new JSV.common.PanelNode(id, fileName, source, jsvp);
var treeNode =  new JSV.tree.SimpleTreeNode(panelNode.toString(), panelNode);
panelNode.setTreeNode(treeNode);
panelNodes.addLast(panelNode);
tree.spectraTreeModel.insertNodeInto(treeNode, fileNode, fileNode.getChildCount());
}
this.vwr.selectFrameNode(panels[0]);
return fileNode;
}, "~N,JSV.source.JDXSource,~A");
Clazz.overrideMethod(c$, "setPath", 
function(path){
this.setSelectionPath(path);
}, "JSV.api.JSVTreePath");
Clazz.defineMethod(c$, "newTreePath", 
function(path){
return  new JSV.tree.SimpleTreePath(path);
}, "~A");
Clazz.overrideMethod(c$, "deleteNodes", 
function(toDelete){
for (var i = 0; i < toDelete.size(); i++) {
this.spectraTreeModel.removeNodeFromParent(toDelete.get(i));
}
}, "JU.Lst");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVTree");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.tree");
(function(){
var c$ = Clazz.decorateAsClass(function(){
this.rootNode = null;
Clazz.instantialize(this, arguments);}, JSV.tree, "SimpleTreeModel", null);
Clazz.makeConstructor(c$, 
function(rootNode){
this.rootNode = rootNode;
}, "JSV.api.JSVTreeNode");
Clazz.defineMethod(c$, "insertNodeInto", 
function(fileNode, rootNode, i){
var node = rootNode;
node.$children.add(i, fileNode);
(fileNode).prevNode = node;
}, "JSV.api.JSVTreeNode,JSV.api.JSVTreeNode,~N");
Clazz.defineMethod(c$, "removeNodeFromParent", 
function(node){
(node).prevNode.$children.removeObj(node);
}, "JSV.api.JSVTreeNode");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.tree");
Clazz.load(["JSV.api.JSVTreeNode"], "JSV.tree.SimpleTreeNode", ["JU.Lst", "JSV.tree.SimpleTreeEnumeration"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.panelNode = null;
this.index = 0;
this.prevNode = null;
this.$children = null;
this.text = null;
Clazz.instantialize(this, arguments);}, JSV.tree, "SimpleTreeNode", null, JSV.api.JSVTreeNode);
Clazz.makeConstructor(c$, 
function(text, panelNode){
this.text = text;
this.panelNode = panelNode;
this.$children =  new JU.Lst();
}, "~S,JSV.common.PanelNode");
Clazz.overrideMethod(c$, "getPanelNode", 
function(){
return this.panelNode;
});
Clazz.overrideMethod(c$, "getIndex", 
function(){
return this.index;
});
Clazz.overrideMethod(c$, "setIndex", 
function(index){
this.index = index;
}, "~N");
Clazz.overrideMethod(c$, "children", 
function(){
return  new JSV.tree.SimpleTreeEnumeration(this);
});
Clazz.overrideMethod(c$, "getChildCount", 
function(){
return this.$children.size();
});
Clazz.overrideMethod(c$, "getPath", 
function(){
var o =  new JU.Lst();
var node = this;
o.addLast(node);
while ((node = node.prevNode) != null) o.add(0, node);

return o.toArray();
});
Clazz.overrideMethod(c$, "isLeaf", 
function(){
return (this.prevNode != null && this.prevNode.prevNode != null);
});
Clazz.overrideMethod(c$, "toString", 
function(){
return this.text;
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVTreeNode");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.tree");
Clazz.load(["java.util.Enumeration"], "JSV.tree.SimpleTreeEnumeration", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.node = null;
this.pt = 0;
Clazz.instantialize(this, arguments);}, JSV.tree, "SimpleTreeEnumeration", null, java.util.Enumeration);
Clazz.makeConstructor(c$, 
function(jsTreeNode){
this.node = jsTreeNode;
}, "JSV.tree.SimpleTreeNode");
Clazz.overrideMethod(c$, "hasMoreElements", 
function(){
return (this.pt < this.node.$children.size());
});
Clazz.overrideMethod(c$, "nextElement", 
function(){
return this.node.$children.get(this.pt++);
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.tree");
Clazz.load(["JSV.api.JSVTreePath"], "JSV.tree.SimpleTreePath", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.path = null;
Clazz.instantialize(this, arguments);}, JSV.tree, "SimpleTreePath", null, JSV.api.JSVTreePath);
Clazz.makeConstructor(c$, 
function(path){
this.path = path;
}, "~A");
Clazz.overrideMethod(c$, "getLastPathComponent", 
function(){
return (this.path == null || this.path.length == 0 ? null : this.path[this.path.length - 1]);
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVTreePath");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
Clazz.load(["JSV.api.JSVMainPanel"], "JSV.js2d.JsMainPanel", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.mainSelectedPanel = null;
this.currentPanelIndex = 0;
this.title = null;
this.visible = false;
this.focusable = false;
this.enabled = false;
Clazz.instantialize(this, arguments);}, JSV.js2d, "JsMainPanel", null, JSV.api.JSVMainPanel);
Clazz.overrideMethod(c$, "getCurrentPanelIndex", 
function(){
return this.currentPanelIndex;
});
Clazz.overrideMethod(c$, "dispose", 
function(){
});
Clazz.overrideMethod(c$, "getTitle", 
function(){
return this.title;
});
Clazz.overrideMethod(c$, "setTitle", 
function(title){
this.title = title;
}, "~S");
Clazz.defineMethod(c$, "getHeight", 
function(){
return (this.mainSelectedPanel == null ? 0 : this.mainSelectedPanel.getHeight());
});
Clazz.defineMethod(c$, "getWidth", 
function(){
return (this.mainSelectedPanel == null ? 0 : this.mainSelectedPanel.getWidth());
});
Clazz.overrideMethod(c$, "isEnabled", 
function(){
return this.enabled;
});
Clazz.overrideMethod(c$, "isFocusable", 
function(){
return this.focusable;
});
Clazz.overrideMethod(c$, "isVisible", 
function(){
return this.visible;
});
Clazz.overrideMethod(c$, "setEnabled", 
function(b){
this.enabled = b;
}, "~B");
Clazz.overrideMethod(c$, "setFocusable", 
function(b){
this.focusable = b;
}, "~B");
Clazz.overrideMethod(c$, "setSelectedPanel", 
function(viewer, jsvp, panelNodes){
if (jsvp !== this.mainSelectedPanel) {
this.mainSelectedPanel = jsvp;
}var i = viewer.selectPanel(jsvp, panelNodes);
if (i >= 0) this.currentPanelIndex = i;
this.visible = true;
}, "JSV.common.JSViewer,JSV.api.JSVPanel,JU.Lst");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVMainPanel", JSV.api.JSVViewPanel);
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
Clazz.load(["JSV.api.JSVPanel"], "JSV.js2d.JsPanel", ["JSV.common.JSViewer", "$.PanelData", "JU.Font", "$.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.apiPlatform = null;
this.pd = null;
this.mouse = null;
this.vwr = null;
this.name = null;
this.bgcolor = null;
Clazz.instantialize(this, arguments);}, JSV.js2d, "JsPanel", null, JSV.api.JSVPanel);
Clazz.makeConstructor(c$, 
function(viewer, withPd){
this.vwr = viewer;
this.pd = (withPd ?  new JSV.common.PanelData(this, viewer) : null);
this.apiPlatform = viewer.apiPlatform;
this.mouse = this.apiPlatform.getMouseManager(0, this);
}, "JSV.common.JSViewer,~B");
Clazz.overrideMethod(c$, "getApiPlatform", 
function(){
return this.apiPlatform;
});
Clazz.overrideMethod(c$, "getPanelData", 
function(){
return this.pd;
});
c$.getEmptyPanel = Clazz.defineMethod(c$, "getEmptyPanel", 
function(viewer){
var p =  new JSV.js2d.JsPanel(viewer, false);
p.pd = null;
return p;
}, "JSV.common.JSViewer");
c$.getPanelMany = Clazz.defineMethod(c$, "getPanelMany", 
function(viewer, spectra){
var p =  new JSV.js2d.JsPanel(viewer, true);
p.pd.initMany(spectra, viewer.initialStartIndex, viewer.initialEndIndex);
return p;
}, "JSV.common.JSViewer,JU.Lst");
Clazz.overrideMethod(c$, "getTitle", 
function(){
return this.pd.getTitle();
});
Clazz.overrideMethod(c$, "dispose", 
function(){
if (this.pd != null) this.pd.dispose();
this.pd = null;
this.mouse.dispose();
this.mouse = null;
});
Clazz.overrideMethod(c$, "setTitle", 
function(title){
this.pd.setTitle(title);
this.name = title;
}, "~S");
Clazz.defineMethod(c$, "setColorOrFont", 
function(ds, st){
this.pd.setColorOrFont(ds, st);
}, "JSV.common.ColorParameters,JSV.common.ScriptToken");
Clazz.overrideMethod(c$, "setBackgroundColor", 
function(color){
this.bgcolor = color;
}, "javajs.api.GenericColor");
Clazz.overrideMethod(c$, "getInput", 
function(message, title, sval){
var ret = null;
{
ret = prompt(message, sval);
}this.getFocusNow(true);
return ret;
}, "~S,~S,~S");
Clazz.overrideMethod(c$, "showMessage", 
function(msg, title){
JU.Logger.info(msg);
var applet = this.vwr.html5Applet;
{
applet._showStatus(msg, title);
}this.getFocusNow(true);
}, "~S,~S");
Clazz.overrideMethod(c$, "getFocusNow", 
function(asThread){
if (this.pd != null) this.pd.dialogsToFront(null);
}, "~B");
Clazz.overrideMethod(c$, "getFontFaceID", 
function(name){
return JU.Font.getFontFaceID("SansSerif");
}, "~S");
Clazz.overrideMethod(c$, "doRepaint", 
function(andTaintAll){
if (this.pd == null) return;
if (andTaintAll) this.pd.setTaintedAll();
if (!this.pd.isPrinting) this.vwr.requestRepaint();
}, "~B");
Clazz.overrideMethod(c$, "paintComponent", 
function(context){
var contextFront = null;
var contextRear = null;
{
contextFront = context.canvas.frontLayer.getContext("2d");
contextRear = context;
}if (this.vwr == null) return;
if (this.pd == null) {
if (this.bgcolor == null) this.bgcolor = this.vwr.g2d.getColor1(-1);
this.vwr.g2d.fillBackground(context, this.bgcolor);
this.vwr.g2d.fillBackground(contextRear, this.bgcolor);
this.vwr.g2d.fillBackground(contextFront, this.bgcolor);
return;
}if (this.pd.graphSets == null || this.pd.isPrinting) return;
this.pd.g2d = this.pd.g2d0;
this.pd.drawGraph(context, contextFront, contextRear, this.getWidth(), this.getHeight(), false, false);
this.vwr.repaintDone();
}, "~O");
Clazz.overrideMethod(c$, "printPanel", 
function(pl, os, title){
pl.title = title;
pl.date = this.apiPlatform.getDateFormat("8824");
this.pd.setPrint(pl, "Helvetica");
try {
(JSV.common.JSViewer.getInterface("JSV.common.PDFWriter")).createPdfDocument(this, pl, os);
} catch (ex) {
if (Clazz.exceptionOf(ex, Exception)){
this.showMessage(ex.toString(), "creating PDF");
} else {
throw ex;
}
} finally {
this.pd.setPrint(null, null);
}
}, "JSV.common.PrintLayout,java.io.OutputStream,~S");
Clazz.overrideMethod(c$, "saveImage", 
function(type, file, out, width, height){
var fname = file.getName();
if (out != null) out.cancel();
JSV.common.JSViewer.jsmolObject.saveImage(this.vwr.html5Applet, "png", fname);
return "OK";
}, "~S,J.api.GenericFileInterface,JU.OC,~N,~N");
Clazz.overrideMethod(c$, "hasFocus", 
function(){
return false;
});
Clazz.overrideMethod(c$, "repaint", 
function(){
});
Clazz.overrideMethod(c$, "setToolTipText", 
function(s){
var x = this.pd.mouseX;
var y = this.pd.mouseY;
var applet = this.vwr.html5Applet;
{
applet._showTooltip && applet._showTooltip(s, x, y);
}}, "~S");
Clazz.overrideMethod(c$, "getHeight", 
function(){
return this.vwr.getHeight();
});
Clazz.overrideMethod(c$, "getWidth", 
function(){
return this.vwr.getWidth();
});
Clazz.overrideMethod(c$, "isEnabled", 
function(){
return false;
});
Clazz.overrideMethod(c$, "isFocusable", 
function(){
return false;
});
Clazz.overrideMethod(c$, "isVisible", 
function(){
return false;
});
Clazz.overrideMethod(c$, "setEnabled", 
function(b){
}, "~B");
Clazz.overrideMethod(c$, "setFocusable", 
function(b){
}, "~B");
Clazz.overrideMethod(c$, "toString", 
function(){
return (this.pd == null ? "<closed>" : "" + this.pd.getSpectrumAt(0));
});
Clazz.overrideMethod(c$, "processMouseEvent", 
function(id, x, y, modifiers, time){
return this.mouse != null && this.mouse.processEvent(id, x, y, modifiers, time);
}, "~N,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "processTwoPointGesture", 
function(touches){
if (this.mouse != null) this.mouse.processTwoPointGesture(touches);
}, "~A");
Clazz.overrideMethod(c$, "processKeyEvent", 
function(event){
if (this.mouse != null) this.mouse.processKeyEvent(event);
}, "~O");
Clazz.overrideMethod(c$, "showMenu", 
function(x, y){
this.vwr.showMenu(x, y);
}, "~N,~N");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVPanel", JSV.api.JSVViewPanel);
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
Clazz.load(["J.api.GenericPlatform"], "JSV.js2d.JsPlatform", ["java.net.URL", "JU.AjaxURLStreamHandlerFactory", "$.Rdr", "JSV.app.GenericMouse", "JSV.js2d.Display", "$.Image", "$.JsFile", "$.JsFont"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.canvas = null;
this.viewer = null;
this.context = null;
Clazz.instantialize(this, arguments);}, JSV.js2d, "JsPlatform", null, J.api.GenericPlatform);
Clazz.overrideMethod(c$, "setViewer", 
function(viewer, canvas){
var context = "";
this.viewer = viewer;
this.canvas = canvas;
{
if (canvas != null) {
context = canvas.getContext("2d");
canvas.imgdata = context.getImageData(0, 0, canvas.width, canvas.height);
canvas.buf8 = canvas.imgdata.data;
}
}if (context !== "") this.context = context;
try {
java.net.URL.setURLStreamHandlerFactory( new JU.AjaxURLStreamHandlerFactory());
} catch (e) {
}
}, "J.api.PlatformViewer,~O");
Clazz.overrideMethod(c$, "isSingleThreaded", 
function(){
return true;
});
Clazz.overrideMethod(c$, "getJsObjectInfo", 
function(jsObject, method, args){
{
return (method == null ? null : method == "localName" ? jsObject[0]["nodeName"] : args == null ? jsObject[0][method] : jsObject[0][method](args[0]));
}}, "~A,~S,~A");
Clazz.overrideMethod(c$, "isHeadless", 
function(){
return false;
});
Clazz.overrideMethod(c$, "getMouseManager", 
function(privateKey, jsvp){
return  new JSV.app.GenericMouse(jsvp);
}, "~N,~O");
Clazz.overrideMethod(c$, "convertPointFromScreen", 
function(canvas, ptTemp){
JSV.js2d.Display.convertPointFromScreen(canvas, ptTemp);
}, "~O,JU.P3");
Clazz.overrideMethod(c$, "getFullScreenDimensions", 
function(canvas, widthHeight){
JSV.js2d.Display.getFullScreenDimensions(canvas, widthHeight);
}, "~O,~A");
Clazz.overrideMethod(c$, "getMenuPopup", 
function(menuStructure, type){
return null;
}, "~S,~S");
Clazz.overrideMethod(c$, "hasFocus", 
function(canvas){
return JSV.js2d.Display.hasFocus(canvas);
}, "~O");
Clazz.overrideMethod(c$, "prompt", 
function(label, data, list, asButtons){
return JSV.js2d.Display.prompt(label, data, list, asButtons);
}, "~S,~S,~A,~B");
Clazz.overrideMethod(c$, "renderScreenImage", 
function(context, size){
JSV.js2d.Display.renderScreenImage(this.viewer, context, size);
}, "~O,~O");
Clazz.overrideMethod(c$, "drawImage", 
function(context, canvas, x, y, width, height, isDTI){
JSV.js2d.Image.drawImage(context, canvas, x, y, width, height);
}, "~O,~O,~N,~N,~N,~N,~B");
Clazz.overrideMethod(c$, "requestFocusInWindow", 
function(canvas){
JSV.js2d.Display.requestFocusInWindow(canvas);
}, "~O");
Clazz.overrideMethod(c$, "repaint", 
function(canvas){
JSV.js2d.Display.repaint(canvas);
}, "~O");
Clazz.overrideMethod(c$, "setTransparentCursor", 
function(canvas){
JSV.js2d.Display.setTransparentCursor(canvas);
}, "~O");
Clazz.overrideMethod(c$, "setCursor", 
function(c, canvas){
JSV.js2d.Display.setCursor(c, canvas);
}, "~N,~O");
Clazz.overrideMethod(c$, "allocateRgbImage", 
function(windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, isImageWrite){
return JSV.js2d.Image.allocateRgbImage(windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, (isImageWrite ? null : this.canvas));
}, "~N,~N,~A,~N,~B,~B");
Clazz.overrideMethod(c$, "notifyEndOfRendering", 
function(){
});
Clazz.overrideMethod(c$, "createImage", 
function(data){
return null;
}, "~O");
Clazz.overrideMethod(c$, "disposeGraphics", 
function(gOffscreen){
}, "~O");
Clazz.overrideMethod(c$, "grabPixels", 
function(canvas, width, height, pixels){
{
if (canvas.image && (width != canvas.width || height != canvas.height))
Jmol._setCanvasImage(canvas, width, height);
if (canvas.buf32) return canvas.buf32;
}var buf = JSV.js2d.Image.grabPixels(JSV.js2d.Image.getGraphics(canvas), width, height);
{
canvas.buf32 = buf;
}return buf;
}, "~O,~N,~N,~A");
Clazz.overrideMethod(c$, "drawImageToBuffer", 
function(gOffscreen, imageOffscreen, canvas, width, height, bgcolor){
return this.grabPixels(canvas, width, height, null);
}, "~O,~O,~O,~N,~N,~N");
Clazz.overrideMethod(c$, "getTextPixels", 
function(text, font3d, context, image, width, height, ascent){
return JSV.js2d.Image.getTextPixels(text, font3d, context, width, height, ascent);
}, "~S,JU.Font,~O,~O,~N,~N,~N");
Clazz.overrideMethod(c$, "flushImage", 
function(imagePixelBuffer){
}, "~O");
Clazz.overrideMethod(c$, "getGraphics", 
function(canvas){
return (canvas == null ? this.context : (this.context = JSV.js2d.Image.getGraphics(this.canvas = canvas)));
}, "~O");
Clazz.overrideMethod(c$, "getImageHeight", 
function(canvas){
return (canvas == null ? -1 : JSV.js2d.Image.getHeight(canvas));
}, "~O");
Clazz.overrideMethod(c$, "getImageWidth", 
function(canvas){
return (canvas == null ? -1 : JSV.js2d.Image.getWidth(canvas));
}, "~O");
Clazz.overrideMethod(c$, "getStaticGraphics", 
function(image, backgroundTransparent){
return JSV.js2d.Image.getStaticGraphics(image, backgroundTransparent);
}, "~O,~B");
Clazz.overrideMethod(c$, "newBufferedImage", 
function(image, w, h){
{
if (self.Jmol && Jmol._getHiddenCanvas)
return Jmol._getHiddenCanvas(this.vwr.html5Applet, "stereoImage", w, h);
}return null;
}, "~O,~N,~N");
Clazz.overrideMethod(c$, "newOffScreenImage", 
function(w, h){
{
if (self.Jmol && Jmol._getHiddenCanvas)
return Jmol._getHiddenCanvas(this.vwr.html5Applet, "textImage", w, h);
}return null;
}, "~N,~N");
Clazz.overrideMethod(c$, "waitForDisplay", 
function(echoNameAndPath, zipBytes){
return false;
}, "~O,~O");
Clazz.overrideMethod(c$, "fontStringWidth", 
function(font, text){
return JSV.js2d.JsFont.stringWidth(font, text);
}, "JU.Font,~S");
Clazz.overrideMethod(c$, "getFontAscent", 
function(context){
return JSV.js2d.JsFont.getAscent(context);
}, "~O");
Clazz.overrideMethod(c$, "getFontDescent", 
function(context){
return JSV.js2d.JsFont.getDescent(context);
}, "~O");
Clazz.overrideMethod(c$, "getFontMetrics", 
function(font, context){
return JSV.js2d.JsFont.getFontMetrics(font, context);
}, "JU.Font,~O");
Clazz.overrideMethod(c$, "newFont", 
function(fontFace, isBold, isItalic, fontSize){
return JSV.js2d.JsFont.newFont(fontFace, isBold, isItalic, fontSize, "px");
}, "~S,~B,~B,~N");
Clazz.overrideMethod(c$, "getDateFormat", 
function(isoType){
{
if (isoType == null) {
} else if (isoType.indexOf("8824") >= 0) {
var d = new Date();
var x = d.toString().split(" ");
var MM = "0" + d.getMonth(); MM = MM.substring(MM.length - 2);
var dd = "0" + d.getDate(); dd = dd.substring(dd.length - 2);
return x[3] + MM + dd + x[4].replace(/\:/g,"") + x[5].substring(3,6) + "'" + x[5].substring(6,8) + "'"
} else if (isoType.indexOf("8601") >= 0){
var d = new Date();
var x = d.toString().split(" ");
var MM = "0" + d.getMonth(); MM = MM.substring(MM.length - 2);
var dd = "0" + d.getDate(); dd = dd.substring(dd.length - 2);
return x[3] + MM + dd + x[4].replace(/\:/g,"") + x[5].substring(3,6) + "'" + x[5].substring(6,8) + "'"
}
return ("" + (new Date())).split(" (")[0];
}}, "~S");
Clazz.overrideMethod(c$, "newFile", 
function(name){
return  new JSV.js2d.JsFile(name);
}, "~S");
Clazz.overrideMethod(c$, "getBufferedFileInputStream", 
function(name){
return null;
}, "~S");
Clazz.overrideMethod(c$, "getURLContents", 
function(url, outputBytes, post, asString){
var ret = JSV.js2d.JsFile.getURLContents(url, outputBytes, post);
try {
return (!asString ? ret : (typeof(ret)=='string') ? ret : Clazz.instanceOf(ret,"JU.SB") ? (ret).toString() : Clazz.instanceOf(ret,Array) ?  String.instantialize(ret) :  String.instantialize(JU.Rdr.getStreamAsBytes(ret, null)));
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return "" + e;
} else {
throw e;
}
}
}, "java.net.URL,~A,~S,~B");
Clazz.overrideMethod(c$, "getLocalUrl", 
function(fileName){
return null;
}, "~S");
Clazz.overrideMethod(c$, "getImageDialog", 
function(title, imageMap){
return null;
}, "~S,java.util.Map");
Clazz.overrideMethod(c$, "forceAsyncLoad", 
function(filename){
return false;
}, "~S");
Clazz.overrideMethod(c$, "getInChI", 
function(){
return null;
});
Clazz.overrideMethod(c$, "confirm", 
function(msg, msgNo){
var ok = false;
if (ok) return 0;
if (msgNo != null) ok = false;
return (ok ? 1 : 2);
}, "~S,~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.load(["J.api.FontManager"], "J.api.GenericPlatform", null, function(){
var c$ = Clazz.declareInterface(J.api, "GenericPlatform", J.api.FontManager);
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.declareInterface(J.api, "FontManager");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JU");
Clazz.load(["java.net.URLStreamHandlerFactory", "java.util.Hashtable"], "JU.AjaxURLStreamHandlerFactory", ["JU.AjaxURLStreamHandler"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.htFactories = null;
Clazz.instantialize(this, arguments);}, JU, "AjaxURLStreamHandlerFactory", null, java.net.URLStreamHandlerFactory);
Clazz.prepareFields (c$, function(){
this.htFactories =  new java.util.Hashtable();
});
Clazz.overrideMethod(c$, "createURLStreamHandler", 
function(protocol){
var fac = this.htFactories.get(protocol);
if (fac == null) this.htFactories.put(protocol, fac =  new JU.AjaxURLStreamHandler(protocol));
return (fac.protocol == null ? null : fac);
}, "~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("java.net");
Clazz.declareInterface(java.net, "URLStreamHandlerFactory");
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JU");
Clazz.load(["java.net.URLStreamHandler"], "JU.AjaxURLStreamHandler", ["JU.AjaxURLConnection", "$.SB"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.protocol = null;
Clazz.instantialize(this, arguments);}, JU, "AjaxURLStreamHandler", java.net.URLStreamHandler);
Clazz.makeConstructor(c$, 
function(protocol){
Clazz.superConstructor (this, JU.AjaxURLStreamHandler, []);
this.protocol = protocol;
}, "~S");
Clazz.defineMethod(c$, "openConnection", 
function(url){
return  new JU.AjaxURLConnection(url);
}, "java.net.URL");
Clazz.overrideMethod(c$, "toExternalForm", 
function(u){
var result =  new JU.SB();
result.append(u.getProtocol());
result.append(":");
if (u.getAuthority() != null && u.getAuthority().length > 0) {
result.append("//");
result.append(u.getAuthority());
}if (u.getPath() != null) {
result.append(u.getPath());
}if (u.getQuery() != null) {
result.append("?");
result.append(u.getQuery());
}if (u.getRef() != null) {
result.append("#");
result.append(u.getRef());
}return result.toString();
}, "java.net.URL");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("java.net");
(function(){
var c$ = Clazz.declareType(java.net, "URLStreamHandler", null);
Clazz.defineMethod(c$, "openConnectionProxy", 
function(u, p){
throw  new UnsupportedOperationException("Method not implemented.");
}, "java.net.URL,java.net.Proxy");
Clazz.defineMethod(c$, "parseURL", 
function(u, spec, start, limit){
var protocol = u.getProtocol();
var authority = u.getAuthority();
var userInfo = u.getUserInfo();
var host = u.getHost();
var port = u.getPort();
var path = u.getPath();
var query = u.getQuery();
var ref = u.getRef();
var isRelPath = false;
var queryOnly = false;
if (start < limit) {
var queryStart = spec.indexOf('?');
queryOnly = queryStart == start;
if ((queryStart != -1) && (queryStart < limit)) {
query = spec.substring(queryStart + 1, limit);
if (limit > queryStart) limit = queryStart;
spec = spec.substring(0, queryStart);
}}var i = 0;
var isUNCName = (start <= limit - 4) && (spec.charAt(start) == '/') && (spec.charAt(start + 1) == '/') && (spec.charAt(start + 2) == '/') && (spec.charAt(start + 3) == '/');
if (!isUNCName && (start <= limit - 2) && (spec.charAt(start) == '/') && (spec.charAt(start + 1) == '/')) {
start += 2;
i = spec.indexOf('/', start);
if (i < 0) {
i = spec.indexOf('?', start);
if (i < 0) i = limit;
}host = authority = spec.substring(start, i);
var ind = authority.indexOf('@');
if (ind != -1) {
userInfo = authority.substring(0, ind);
host = authority.substring(ind + 1);
} else {
userInfo = null;
}if (host != null) {
if (host.length > 0 && (host.charAt(0) == '[')) {
throw  new IllegalArgumentException("Invalid host: " + host);
}ind = host.indexOf(':');
port = -1;
if (ind >= 0) {
if (host.length > (ind + 1)) {
port = Integer.parseInt(host.substring(ind + 1));
}host = host.substring(0, ind);
}} else {
host = "";
}if (port < -1) throw  new IllegalArgumentException("Invalid port number :" + port);
start = i;
if (authority.length > 0) path = "";
}if (host == null) {
host = "";
}if (start < limit) {
if (spec.charAt(start) == '/') {
path = spec.substring(start, limit);
} else if (path != null && path.length > 0) {
isRelPath = true;
var ind = path.lastIndexOf('/');
var seperator = "";
if (ind == -1 && authority != null) seperator = "/";
path = path.substring(0, ind + 1) + seperator + spec.substring(start, limit);
} else {
var seperator = (authority != null) ? "/" : "";
path = seperator + spec.substring(start, limit);
}} else if (queryOnly && path != null) {
var ind = path.lastIndexOf('/');
if (ind < 0) ind = 0;
path = path.substring(0, ind) + "/";
}if (path == null) path = "";
if (isRelPath) {
while ((i = path.indexOf("/./")) >= 0) {
path = path.substring(0, i) + path.substring(i + 2);
}
i = 0;
while ((i = path.indexOf("/../", i)) >= 0) {
if (i > 0 && (limit = path.lastIndexOf('/', i - 1)) >= 0 && (path.indexOf("/../", limit) != 0)) {
path = path.substring(0, limit) + path.substring(i + 3);
i = 0;
} else {
i = i + 3;
}}
while (path.endsWith("/..")) {
i = path.indexOf("/..");
if ((limit = path.lastIndexOf('/', i - 1)) >= 0) {
path = path.substring(0, limit + 1);
} else {
break;
}}
if (path.startsWith("./") && path.length > 2) path = path.substring(2);
if (path.endsWith("/.")) path = path.substring(0, path.length - 1);
}this.setURL(u, protocol, host, port, authority, userInfo, path, query, ref);
}, "java.net.URL,~S,~N,~N");
Clazz.defineMethod(c$, "getDefaultPort", 
function(){
return -1;
});
Clazz.defineMethod(c$, "equals2", 
function(u1, u2){
var ref1 = u1.getRef();
var ref2 = u2.getRef();
return (ref1 === ref2 || (ref1 != null && ref1.equals(ref2))) && this.sameFile(u1, u2);
}, "java.net.URL,java.net.URL");
Clazz.defineMethod(c$, "hashCode", 
function(u){
var h = 0;
var protocol = u.getProtocol();
if (protocol != null) h += protocol.hashCode();
h += u.toString().hashCode();
var file = u.getFile();
if (file != null) h += file.hashCode();
if (u.getPort() == -1) h += this.getDefaultPort();
 else h += u.getPort();
var ref = u.getRef();
if (ref != null) h += ref.hashCode();
return h;
}, "java.net.URL");
Clazz.defineMethod(c$, "sameFile", 
function(u1, u2){
if (!((u1.getProtocol() === u2.getProtocol()) || (u1.getProtocol() != null && u1.getProtocol().equalsIgnoreCase(u2.getProtocol())))) return false;
if (!(u1.getFile() === u2.getFile() || (u1.getFile() != null && u1.getFile().equals(u2.getFile())))) return false;
var port1;
var port2;
port1 = (u1.getPort() != -1) ? u1.getPort() : u1.handler.getDefaultPort();
port2 = (u2.getPort() != -1) ? u2.getPort() : u2.handler.getDefaultPort();
if (port1 != port2) return false;
if (!this.hostsEqual(u1, u2)) return false;
return true;
}, "java.net.URL,java.net.URL");
Clazz.defineMethod(c$, "hostsEqual", 
function(u1, u2){
if (u1.getHost() != null && u2.getHost() != null) return u1.getHost().equalsIgnoreCase(u2.getHost());
return u1.getHost() == null && u2.getHost() == null;
}, "java.net.URL,java.net.URL");
Clazz.defineMethod(c$, "toExternalForm", 
function(u){
return "";
}, "java.net.URL");
Clazz.defineMethod(c$, "setURL", 
function(u, protocol, host, port, authority, userInfo, path, query, ref){
if (this !== u.handler) {
throw  new SecurityException("handler for url different from this handler");
}u.set(u.getProtocol(), host, port, authority, userInfo, path, query, ref);
}, "java.net.URL,~S,~S,~N,~S,~S,~S,~S,~S");
Clazz.defineMethod(c$, "setURLDeprecated", 
function(u, protocol, host, port, file, ref){
var authority = null;
var userInfo = null;
if (host != null && host.length != 0) {
authority = (port == -1) ? host : host + ":" + port;
var at = host.lastIndexOf('@');
if (at != -1) {
userInfo = host.substring(0, at);
host = host.substring(at + 1);
}}var path = null;
var query = null;
if (file != null) {
var q = file.lastIndexOf('?');
if (q != -1) {
query = file.substring(q + 1);
path = file.substring(0, q);
} else path = file;
}this.setURL(u, protocol, host, port, authority, userInfo, path, query, ref);
}, "java.net.URL,~S,~S,~N,~S,~S");
})();
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JU");
Clazz.load(["java.net.URLConnection"], "JU.AjaxURLConnection", ["JU.AU", "$.Rdr"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.bytesOut = null;
this.postOut = "";
Clazz.instantialize(this, arguments);}, JU, "AjaxURLConnection", java.net.URLConnection);
Clazz.defineMethod(c$, "doAjax", 
function(){
var jmol = null;
{
jmol = Jmol;
}return jmol.doAjax(this.url, this.postOut, this.bytesOut, false);
});
Clazz.overrideMethod(c$, "connect", 
function(){
});
Clazz.defineMethod(c$, "outputBytes", 
function(bytes){
this.bytesOut = bytes;
}, "~A");
Clazz.defineMethod(c$, "outputString", 
function(post){
this.postOut = post;
}, "~S");
Clazz.overrideMethod(c$, "getInputStream", 
function(){
var is = null;
var o = this.doAjax();
if (JU.AU.isAB(o)) is = JU.Rdr.getBIS(o);
 else if (Clazz.instanceOf(o,"JU.SB")) is = JU.Rdr.getBIS(JU.Rdr.getBytesFromSB(o));
 else if ((typeof(o)=='string')) is = JU.Rdr.getBIS((o).getBytes());
return is;
});
Clazz.defineMethod(c$, "getContents", 
function(){
return this.doAjax();
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("java.net");
Clazz.load(null, "java.net.URLConnection", ["java.util.ArrayList"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.url = null;
this.doInput = true;
this.doOutput = false;
this.connected = false;
this.requests = null;
Clazz.instantialize(this, arguments);}, java.net, "URLConnection", null);
Clazz.makeConstructor(c$, 
function(url){
this.url = url;
}, "java.net.URL");
Clazz.defineMethod(c$, "setDoInput", 
function(doinput){
if (this.connected) throw  new IllegalStateException("Already connected");
this.doInput = doinput;
}, "~B");
Clazz.defineMethod(c$, "getDoInput", 
function(){
return this.doInput;
});
Clazz.defineMethod(c$, "setDoOutput", 
function(dooutput){
if (this.connected) throw  new IllegalStateException("Already connected");
this.doOutput = dooutput;
}, "~B");
Clazz.defineMethod(c$, "getDoOutput", 
function(){
return this.doOutput;
});
Clazz.defineMethod(c$, "getURL", 
function(){
return this.url;
});
Clazz.defineMethod(c$, "getInputStream", 
function(){
throw  new java.net.UnknownServiceException("protocol doesn't support input");
});
Clazz.defineMethod(c$, "getOutputStream", 
function(){
throw  new java.net.UnknownServiceException("protocol doesn't support output");
});
Clazz.defineMethod(c$, "setRequestProperty", 
function(key, value){
if (this.connected) throw  new IllegalStateException("Already connected");
if (key == null) throw  new NullPointerException("key is null");
if (this.requests == null) this.requests =  new java.util.ArrayList();
for (var i = this.requests.size(); --i >= 0; ) if (this.requests.get(i)[0].equals(key)) {
this.requests.get(i)[1] = value;
return;
}
this.requests.add( Clazz.newArray(-1, [key, value]));
}, "~S,~S");
});
;//5.0.1-v7 Fri Nov 21 04:39:22 CST 2025

Clazz.declarePackage("JSV.app");
Clazz.load(["J.api.GenericMouseInterface"], "JSV.app.GenericMouse", ["JU.Logger"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.pd = null;
this.jsvp = null;
this.xWhenPressed = 0;
this.yWhenPressed = 0;
this.modifiersWhenPressed10 = 0;
this.isMouseDown = false;
this.disposed = false;
Clazz.instantialize(this, arguments);}, JSV.app, "GenericMouse", null, J.api.GenericMouseInterface);
Clazz.makeConstructor(c$, 
function(jsvp){
this.jsvp = jsvp;
this.pd = jsvp.getPanelData();
}, "JSV.api.JSVPanel");
Clazz.overrideMethod(c$, "clear", 
function(){
});
Clazz.overrideMethod(c$, "processEvent", 
function(id, x, y, modifiers, time){
if (this.pd == null) {
if (!this.disposed && id == 501 && (modifiers & 4) != 0) this.jsvp.showMenu(x, y);
return true;
}if (id != 507) modifiers = JSV.app.GenericMouse.applyLeftMouse(modifiers);
switch (id) {
case 507:
this.wheeled(time, x, modifiers | 32);
break;
case 501:
this.xWhenPressed = x;
this.yWhenPressed = y;
this.modifiersWhenPressed10 = modifiers;
this.pressed(time, x, y, modifiers, false);
break;
case 506:
this.dragged(time, x, y, modifiers);
break;
case 504:
this.entered(time, x, y);
break;
case 505:
this.exited(time, x, y);
break;
case 503:
this.moved(time, x, y, modifiers);
break;
case 502:
this.released(time, x, y, modifiers);
if (x == this.xWhenPressed && y == this.yWhenPressed && modifiers == this.modifiersWhenPressed10) {
this.clicked(time, x, y, modifiers, 1);
}break;
default:
return false;
}
return true;
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod(c$, "mouseEntered", 
function(e){
this.entered(e.getWhen(), e.getX(), e.getY());
}, "java.awt.event.MouseEvent");
Clazz.defineMethod(c$, "mouseExited", 
function(e){
this.exited(e.getWhen(), e.getX(), e.getY());
}, "java.awt.event.MouseEvent");
Clazz.defineMethod(c$, "mouseMoved", 
function(e){
this.moved(e.getWhen(), e.getX(), e.getY(), e.getModifiers());
}, "java.awt.event.MouseEvent");
Clazz.defineMethod(c$, "mousePressed", 
function(e){
this.pressed(e.getWhen(), e.getX(), e.getY(), e.getModifiers(), e.isPopupTrigger());
}, "java.awt.event.MouseEvent");
Clazz.defineMethod(c$, "mouseDragged", 
function(e){
var modifiers = e.getModifiers();
if ((modifiers & 28) == 0) modifiers |= 16;
this.dragged(e.getWhen(), e.getX(), e.getY(), modifiers);
}, "java.awt.event.MouseEvent");
Clazz.defineMethod(c$, "mouseReleased", 
function(e){
this.released(e.getWhen(), e.getX(), e.getY(), e.getModifiers());
}, "java.awt.event.MouseEvent");
Clazz.defineMethod(c$, "mouseClicked", 
function(e){
this.clicked(e.getWhen(), e.getX(), e.getY(), e.getModifiers(), e.getClickCount());
}, "java.awt.event.MouseEvent");
Clazz.defineMethod(c$, "mouseWheelMoved", 
function(e){
e.consume();
this.wheeled(e.getWhen(), e.getWheelRotation(), e.getModifiers() | 32);
}, "java.awt.event.MouseWheelEvent");
Clazz.defineMethod(c$, "keyTyped", 
function(ke){
if (this.pd == null) return;
var ch = ke.getKeyChar();
var modifiers = ke.getModifiers();
if (JU.Logger.debuggingHigh || true) JU.Logger.info("MouseManager keyTyped: " + ch + " " + (0 + ch.charCodeAt(0)) + " " + modifiers);
if (this.pd.keyTyped(ch.charCodeAt(0), modifiers)) ke.consume();
}, "java.awt.event.KeyEvent");
Clazz.defineMethod(c$, "keyPressed", 
function(ke){
if (this.pd != null && this.pd.keyPressed(ke.getKeyCode(), ke.getModifiers())) ke.consume();
}, "java.awt.event.KeyEvent");
Clazz.defineMethod(c$, "keyReleased", 
function(ke){
if (this.pd != null) this.pd.keyReleased(ke.getKeyCode());
}, "java.awt.event.KeyEvent");
Clazz.overrideMethod(c$, "processKeyEvent", 
function(event){
var e = event;
switch (e.getID()) {
case 401:
this.keyPressed(e);
break;
case 402:
this.keyReleased(e);
break;
case 400:
this.keyTyped(e);
break;
}
}, "~O");
Clazz.defineMethod(c$, "entered", 
function(time, x, y){
if (this.pd != null) this.pd.mouseEnterExit(time, x, y, false);
}, "~N,~N,~N");
Clazz.defineMethod(c$, "exited", 
function(time, x, y){
if (this.pd != null) this.pd.mouseEnterExit(time, x, y, true);
}, "~N,~N,~N");
Clazz.defineMethod(c$, "clicked", 
function(time, x, y, modifiers, clickCount){
if (this.pd != null) this.pd.mouseAction(2, time, x, y, 1, modifiers);
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod(c$, "moved", 
function(time, x, y, modifiers){
if (this.pd == null) return;
if (this.isMouseDown) this.pd.mouseAction(1, time, x, y, 0, JSV.app.GenericMouse.applyLeftMouse(modifiers));
 else this.pd.mouseAction(0, time, x, y, 0, modifiers & -29);
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "wheeled", 
function(time, rotation, modifiers){
if (this.pd != null) this.pd.mouseAction(3, time, 0, rotation, 0, modifiers);
}, "~N,~N,~N");
Clazz.defineMethod(c$, "pressed", 
function(time, x, y, modifiers, isPopupTrigger){
if (this.pd == null) {
if (!this.disposed) this.jsvp.showMenu(x, y);
return;
}this.isMouseDown = true;
this.pd.mouseAction(4, time, x, y, 0, modifiers);
}, "~N,~N,~N,~N,~B");
Clazz.defineMethod(c$, "released", 
function(time, x, y, modifiers){
if (this.pd == null) return;
this.isMouseDown = false;
this.pd.mouseAction(5, time, x, y, 0, modifiers);
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "dragged", 
function(time, x, y, modifiers){
if (this.pd == null) return;
if ((modifiers & 20) == 20) modifiers = modifiers & -5 | 2;
this.pd.mouseAction(1, time, x, y, 0, modifiers);
}, "~N,~N,~N,~N");
c$.applyLeftMouse = Clazz.defineMethod(c$, "applyLeftMouse", 
function(modifiers){
return ((modifiers & 28) == 0) ? (modifiers | 16) : modifiers;
}, "~N");
Clazz.overrideMethod(c$, "processTwoPointGesture", 
function(touches){
}, "~A");
Clazz.overrideMethod(c$, "dispose", 
function(){
this.pd = null;
this.jsvp = null;
this.disposed = true;
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.declareInterface(J.api, "GenericMouseInterface");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
(function(){
var c$ = Clazz.declareType(JSV.js2d, "Display", null);
c$.getFullScreenDimensions = Clazz.defineMethod(c$, "getFullScreenDimensions", 
function(canvas, widthHeight){
{
widthHeight[0] = canvas.width;
widthHeight[1] = canvas.height;
}}, "~O,~A");
c$.hasFocus = Clazz.defineMethod(c$, "hasFocus", 
function(canvas){
return true;
}, "~O");
c$.requestFocusInWindow = Clazz.defineMethod(c$, "requestFocusInWindow", 
function(canvas){
}, "~O");
c$.repaint = Clazz.defineMethod(c$, "repaint", 
function(canvas){
}, "~O");
c$.renderScreenImage = Clazz.defineMethod(c$, "renderScreenImage", 
function(viewer, g, size){
{
}}, "J.api.PlatformViewer,~O,~O");
c$.setTransparentCursor = Clazz.defineMethod(c$, "setTransparentCursor", 
function(canvas){
}, "~O");
c$.setCursor = Clazz.defineMethod(c$, "setCursor", 
function(c, canvas){
}, "~N,~O");
c$.prompt = Clazz.defineMethod(c$, "prompt", 
function(label, data, list, asButtons){
{
var s = prompt(label, data);
if (s != null)return s;
}return "null";
}, "~S,~S,~A,~B");
c$.convertPointFromScreen = Clazz.defineMethod(c$, "convertPointFromScreen", 
function(canvas, ptTemp){
}, "~O,JU.P3");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
(function(){
var c$ = Clazz.declareType(JSV.js2d, "Image", null);
c$.getWidth = Clazz.defineMethod(c$, "getWidth", 
function(canvas){
{
return (canvas.imageWidth ? canvas.imageWidth : canvas.width);
}}, "~O");
c$.getHeight = Clazz.defineMethod(c$, "getHeight", 
function(canvas){
{
return (canvas.imageHeight ? canvas.imageHeight : canvas.height);
}}, "~O");
c$.grabPixels = Clazz.defineMethod(c$, "grabPixels", 
function(context, width, height){
var data = null;
{
if (context._buf32) return context._buf32; // non-canvas internal buffer for image writing
data = context.getImageData(0, 0, width, height).data;
}return JSV.js2d.Image.toIntARGB(data);
}, "~O,~N,~N");
c$.toIntARGB = Clazz.defineMethod(c$, "toIntARGB", 
function(imgData){
var n = Clazz.doubleToInt(imgData.length / 4);
var iData =  Clazz.newIntArray (n, 0);
for (var i = 0, j = 0; i < n; j++) {
iData[i++] = (imgData[j++] << 16) | (imgData[j++] << 8) | imgData[j++] | 0xFF000000;
}
return iData;
}, "~A");
c$.fromIntARGB = Clazz.defineMethod(c$, "fromIntARGB", 
function(buf32, buf8){
var n = buf8.length >> 2;
for (var i = 0, j = 0; i < n; i++) {
buf8[j++] = (buf32[i] >> 16) & 0xFF;
buf8[j++] = (buf32[i] >> 8) & 0xFF;
buf8[j++] = buf32[i] & 0xFF;
buf8[j++] = 0xFF;
}
}, "~A,~A");
c$.getTextPixels = Clazz.defineMethod(c$, "getTextPixels", 
function(text, font3d, context, width, height, ascent){
{
context.fillStyle = "#000000";
context.fillRect(0, 0, width, height);
context.fillStyle = "#FFFFFF";
context.font = font3d.font;
context.fillText(text, 0, ascent);
}return JSV.js2d.Image.grabPixels(context, width, height);
}, "~S,JU.Font,~O,~N,~N,~N");
c$.allocateRgbImage = Clazz.defineMethod(c$, "allocateRgbImage", 
function(windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, canvas){
{
if (canvas == null)
canvas = {width:windowWidth,height:windowHeight};
canvas.buf32 = pBuffer;
}}, "~N,~N,~A,~N,~B,~O");
c$.getStaticGraphics = Clazz.defineMethod(c$, "getStaticGraphics", 
function(canvas, backgroundTransparent){
return JSV.js2d.Image.getGraphics(canvas);
}, "~O,~B");
c$.getGraphics = Clazz.defineMethod(c$, "getGraphics", 
function(canvas){
{
return canvas.getContext("2d");
}}, "~O");
c$.drawImage = Clazz.defineMethod(c$, "drawImage", 
function(context, canvas, x, y, width, height){
{
this.fromIntARGB(canvas.buf32, canvas.buf8);
context.putImageData(canvas.imgdata,x,y);
}}, "~O,~O,~N,~N,~N,~N");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
Clazz.load(["J.api.GenericFileInterface"], "JSV.js2d.JsFile", ["JU.PT", "JSV.common.JSVFileManager"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.name = null;
this.fullName = null;
Clazz.instantialize(this, arguments);}, JSV.js2d, "JsFile", null, J.api.GenericFileInterface);
Clazz.makeConstructor(c$, 
function(name){
this.name = name.$replace('\\', '/');
this.fullName = name;
if (!this.fullName.startsWith("/") && JSV.common.JSVFileManager.urlTypeIndex(name) < 0) this.fullName = JSV.common.JSVFileManager.jsDocumentBase + "/" + this.fullName;
this.fullName = JU.PT.rep(this.fullName, "/./", "/");
name = name.substring(name.lastIndexOf("/") + 1);
}, "~S");
c$.newFile = Clazz.defineMethod(c$, "newFile", 
function(name){
return  new JSV.js2d.JsFile(name);
}, "~S");
Clazz.overrideMethod(c$, "getParentAsFile", 
function(){
var pt = this.fullName.lastIndexOf("/");
return (pt < 0 ? null :  new JSV.js2d.JsFile(this.fullName.substring(0, pt)));
});
Clazz.overrideMethod(c$, "getFullPath", 
function(){
return this.fullName;
});
Clazz.overrideMethod(c$, "getName", 
function(){
return this.name;
});
Clazz.overrideMethod(c$, "isDirectory", 
function(){
return this.fullName.endsWith("/");
});
Clazz.overrideMethod(c$, "length", 
function(){
return 0;
});
c$.getURLContents = Clazz.defineMethod(c$, "getURLContents", 
function(url, outputBytes, post){
try {
var conn = url.openConnection();
if (outputBytes != null) {
conn.outputBytes(outputBytes);
} else if (post != null) {
if (post.charAt(0) == '{') {
post = post.$replace("\n", "\\n");
}conn.outputString(post);
}return conn.getContents();
} catch (e) {
if (Clazz.exceptionOf(e, Exception)){
return e.toString();
} else {
throw e;
}
}
}, "java.net.URL,~A,~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.declareInterface(J.api, "GenericFileInterface");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
(function(){
var c$ = Clazz.declareType(JSV.js2d, "JsFont", null);
c$.newFont = Clazz.defineMethod(c$, "newFont", 
function(fontFace, isBold, isItalic, fontSize, type){
fontFace = (fontFace.equals("Monospaced") ? "Courier" : fontFace.startsWith("Sans") ? "Sans-Serif" : "Serif");
return (isBold ? "bold " : "") + (isItalic ? "italic " : "") + fontSize + type + " " + fontFace;
}, "~S,~B,~B,~N,~S");
c$.getFontMetrics = Clazz.defineMethod(c$, "getFontMetrics", 
function(font, context){
{
if (context.font != font.font) {
context.font = font.font;
font.font = context.font;
context._fontAscent = Math.ceil(font.fontSize); //pt, not px
// the descent is actually (px - pt)
// but I know of no way of getting access to the drawn height
context._fontDescent = Math.ceil(font.fontSize * 0.25);//approx
}
}return context;
}, "JU.Font,~O");
c$.getAscent = Clazz.defineMethod(c$, "getAscent", 
function(context){
{
return Math.ceil(context._fontAscent);
}}, "~O");
c$.getDescent = Clazz.defineMethod(c$, "getDescent", 
function(context){
{
return Math.ceil(context._fontDescent);
}}, "~O");
c$.stringWidth = Clazz.defineMethod(c$, "stringWidth", 
function(font, text){
{
font.fontMetrics.font = font.font;
return Math.ceil(font.fontMetrics.measureText(text).width);
}}, "JU.Font,~S");
})();
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
Clazz.load(["J.api.GenericGraphics"], "JSV.js2d.JsG2D", ["JU.CU", "JSV.common.JSViewer", "JS.Color"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.windowWidth = 0;
this.windowHeight = 0;
this.isShifted = false;
this.inPath = false;
Clazz.instantialize(this, arguments);}, JSV.js2d, "JsG2D", null, J.api.GenericGraphics);
/*LV!1824 unnec constructor*/Clazz.overrideMethod(c$, "getColor4", 
function(r, g, b, a){
return JS.Color.get4(r, g, b, a);
}, "~N,~N,~N,~N");
Clazz.overrideMethod(c$, "getColor3", 
function(r, g, b){
return JS.Color.get3(r, g, b);
}, "~N,~N,~N");
Clazz.overrideMethod(c$, "getColor1", 
function(rgb){
return JS.Color.get1(rgb);
}, "~N");
Clazz.overrideMethod(c$, "newGrayScaleImage", 
function(context, image, width, height, grayBuffer){
return JSV.common.JSViewer.jsmolObject.newGrayScaleImage(context, image, width, height, grayBuffer);
}, "~O,~O,~N,~N,~A");
Clazz.overrideMethod(c$, "drawGrayScaleImage", 
function(g, image, destX0, destY0, destX1, destY1, srcX0, srcY0, srcX1, srcY1){
var iw;
var ih;
{
iw = image.w;
ih = image.h;
}var dw = (destX1 - destX0 + 1);
var dh = (destY1 - destY0 + 1);
var sw = (srcX1 - srcX0 + 1);
var sh = (srcY1 - srcY0 + 1);
var x = -srcX0 * dw / sw;
var w = iw * dw / sw;
var y = -srcY0 * dh / sh;
var h = ih * dh / sh;
{
image.width = w;
image.height = h;
var div = image.div;
var layer = image.layer;
layer.style.left = destX0 + "px";
layer.style.top = destY0 + "px";
layer.style.width = dw + "px";
layer.style.height = dh+ "px";
div.style.left= x + "px";
div.style.top = y + "px";
div.style.width = w + "px";
div.style.height = h + "px";
}}, "~O,~O,~N,~N,~N,~N,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "drawLine", 
function(g, x0, y0, x1, y1){
var inPath = this.inPath;
{
if (!inPath) g.beginPath();
g.moveTo(x0, y0);
g.lineTo(x1, y1);
if (!inPath) g.stroke();
}}, "~O,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "drawCircle", 
function(g, x, y, diameter){
{
var r = diameter/2;
g.beginPath();
g.arc(x + r, y + r, r, 0, 2 * Math.PI, false);
g.stroke();
}}, "~O,~N,~N,~N");
Clazz.overrideMethod(c$, "drawPolygon", 
function(g, ayPoints, axPoints, nPoints){
this.doPoly(g, ayPoints, axPoints, nPoints, false);
}, "~O,~A,~A,~N");
Clazz.defineMethod(c$, "doPoly", 
function(g, axPoints, ayPoints, nPoints, doFill){
{
g.beginPath();
g.moveTo(axPoints[0], ayPoints[0]);
for (var i = 1; i < nPoints; i++)
g.lineTo(axPoints[i], ayPoints[i]);
if (doFill)
g.fill();
else
g.stroke();
}}, "~O,~A,~A,~N,~B");
Clazz.overrideMethod(c$, "drawRect", 
function(g, x, y, width, height){
{
g.beginPath();
g.rect(x ,y, width, height);
g.stroke();
}}, "~O,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "drawString", 
function(g, s, x, y){
{
g.fillText(s,x,y);
}}, "~O,~S,~N,~N");
Clazz.overrideMethod(c$, "drawStringRotated", 
function(g, s, x, y, angle){
}, "~O,~S,~N,~N,~N");
Clazz.overrideMethod(c$, "fillBackground", 
function(g, bgcolor){
if (bgcolor == null) {
{
if (!this.isShifted) {
g.translate(-0.5, -0.5);
this.isShifted = true;
}
g.clearRect(0,0, this.windowWidth, this.windowHeight);
return;
}}this.setGraphicsColor(g, bgcolor);
this.fillRect(g, 0, 0, this.windowWidth, this.windowHeight);
}, "~O,javajs.api.GenericColor");
Clazz.overrideMethod(c$, "fillCircle", 
function(g, x, y, diameter){
{
var r = diameter/2;
g.beginPath();
g.arc(x + r, y + r, r, 0, 2 * Math.PI, false);
g.fill();
}}, "~O,~N,~N,~N");
Clazz.overrideMethod(c$, "fillPolygon", 
function(g, ayPoints, axPoints, nPoints){
this.doPoly(g, ayPoints, axPoints, nPoints, true);
}, "~O,~A,~A,~N");
Clazz.overrideMethod(c$, "fillRect", 
function(g, x, y, width, height){
{
g.fillRect(x, y, width, height);
}}, "~O,~N,~N,~N,~N");
Clazz.overrideMethod(c$, "setGraphicsColor", 
function(g, c){
var s = JU.CU.toCSSString(c);
{
g.fillStyle = g.strokeStyle = s;
}}, "~O,javajs.api.GenericColor");
Clazz.overrideMethod(c$, "setFont", 
function(g, font){
var s = font.getInfo();
var pt = s.indexOf(" ");
s = s.substring(0, pt) + "px" + s.substring(pt);
{
g.font = s;
}return font;
}, "~O,JU.Font");
Clazz.overrideMethod(c$, "setStrokeBold", 
function(g, tf){
{
g.lineWidth = (tf ? 2 : 1);
}}, "~O,~B");
Clazz.overrideMethod(c$, "setWindowParameters", 
function(width, height){
this.windowWidth = width;
this.windowHeight = height;
}, "~N,~N");
Clazz.overrideMethod(c$, "translateScale", 
function(g, x, y, scale){
}, "~O,~N,~N,~N");
Clazz.overrideMethod(c$, "canDoLineTo", 
function(){
return true;
});
Clazz.overrideMethod(c$, "doStroke", 
function(g, isBegin){
this.inPath = isBegin;
{
if (isBegin) {
g.beginPath();
} else {
g.stroke();
}
}}, "~O,~B");
Clazz.overrideMethod(c$, "lineTo", 
function(g, x2, y2){
{
g.lineTo(x2, y2);
}}, "~O,~N,~N");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("J.api");
Clazz.declareInterface(J.api, "GenericGraphics");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JS");
Clazz.load(["javajs.api.GenericColor"], "JS.Color", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.argb = 0;
Clazz.instantialize(this, arguments);}, JS, "Color", null, javajs.api.GenericColor);
Clazz.overrideMethod(c$, "addAlpha", 
function(a){
if (this.getOpacity255() != 0xFF) return this;
var c =  new JS.Color();
c.argb = (this.argb & 0xFFFFFF) | (a << 24);
return c;
}, "~N");
Clazz.overrideMethod(c$, "getRGB", 
function(){
return this.argb & 0x00FFFFFF;
});
Clazz.overrideMethod(c$, "getOpacity255", 
function(){
return ((this.argb >> 24) & 0xFF);
});
c$.get1 = Clazz.defineMethod(c$, "get1", 
function(rgb){
var c =  new JS.Color();
c.argb = rgb | 0xFF000000;
return c;
}, "~N");
c$.get3 = Clazz.defineMethod(c$, "get3", 
function(r, g, b){
return  new JS.Color().set4(r, g, b, 0xFF);
}, "~N,~N,~N");
c$.get4 = Clazz.defineMethod(c$, "get4", 
function(r, g, b, a){
return  new JS.Color().set4(r, g, b, a);
}, "~N,~N,~N,~N");
Clazz.defineMethod(c$, "set4", 
function(r, g, b, a){
this.argb = ((a << 24) | (r << 16) | (g << 8) | b) & 0xFFFFFFFF;
return this;
}, "~N,~N,~N,~N");
Clazz.overrideMethod(c$, "toString", 
function(){
var s = ("00000000" + Integer.toHexString(this.argb));
return "[0x" + s.substring(s.length - 8, s.length) + "]";
});
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("javajs.api");
Clazz.declareInterface(javajs.api, "GenericColor");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
Clazz.load(["JSV.common.ColorParameters"], "JSV.js2d.JsParameters", ["JS.Color"], function(){
var c$ = Clazz.declareType(JSV.js2d, "JsParameters", JSV.common.ColorParameters);
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, JSV.js2d.JsParameters, []);
});
Clazz.overrideMethod(c$, "isValidFontName", 
function(name){
return true;
}, "~S");
Clazz.overrideMethod(c$, "getColor1", 
function(rgb){
return JS.Color.get1(rgb);
}, "~N");
Clazz.overrideMethod(c$, "getColor3", 
function(r, g, b){
return JS.Color.get3(r, g, b);
}, "~N,~N,~N");
Clazz.defineMethod(c$, "copy", 
function(newName){
return ( new JSV.js2d.JsParameters().setName(newName)).setElementColors(this);
}, "~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.js2d");
Clazz.load(["JSV.api.JSVFileHelper"], "JSV.js2d.JsFileHelper", ["JU.PT", "JSV.common.JSViewer", "JSV.js2d.JsFile"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.vwr = null;
Clazz.instantialize(this, arguments);}, JSV.js2d, "JsFileHelper", null, JSV.api.JSVFileHelper);
/*LV!1824 unnec constructor*/Clazz.overrideMethod(c$, "set", 
function(viewer){
this.vwr = viewer;
return this;
}, "JSV.common.JSViewer");
Clazz.overrideMethod(c$, "getFile", 
function(fileName, panelOrFrame, isSave){
var f = null;
fileName = JU.PT.rep(fileName, "=", "_");
{
f = prompt("Enter a file name:", fileName);
}return (f == null ? null :  new JSV.js2d.JsFile(f));
}, "~S,~O,~B");
Clazz.overrideMethod(c$, "setDirLastExported", 
function(name){
return name;
}, "~S");
Clazz.overrideMethod(c$, "setFileChooser", 
function(pdf){
}, "JSV.common.ExportType");
Clazz.overrideMethod(c$, "showFileOpenDialog", 
function(panelOrFrame, userData){
JSV.common.JSViewer.jsmolObject.loadFileAsynchronously(this, this.vwr.html5Applet, "?", userData);
return null;
}, "~O,~A");
Clazz.defineMethod(c$, "setData", 
function(fileName, data, userInfo){
if (fileName == null) return;
if (data == null) {
this.vwr.selectedPanel.showMessage(fileName, "File Open Error");
return;
}var script = (userInfo == null ? null : "");
var isAppend = false;
{
isAppend = userInfo[0];
script = userInfo[1];
}this.vwr.si.siOpenDataOrFile( String.instantialize(data), "cache://" + fileName, null, null, -1, -1, isAppend, null, null);
if (script != null) this.vwr.runScript(script);
}, "~S,~O,~A");
Clazz.overrideMethod(c$, "getUrlFromDialog", 
function(info, msg){
{
return prompt(info, msg);
}}, "~S,~S");
});
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026

Clazz.declarePackage("JSV.api");
Clazz.declareInterface(JSV.api, "JSVFileHelper");
;//5.0.1-v7 Sun Sep 20 11:26:09 CDT 2026


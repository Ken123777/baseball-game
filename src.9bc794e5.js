parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bpXs":[function(require,module,exports) {
function t(){this.score=10,this.correctAnswer=[],this.answerList=[],this.resultList=[]}t.prototype.checkOverlapNum=function(t){return 3!=new Set(t).size},t.prototype.makeRandomNum=function(t){for(var r,e="999";e;)r=Math.floor(9*Math.random()).toString(),e=t.find(function(t){return t===r});return r},t.prototype.makeCorrectAnswer=function(){for(var t=[],r=0;r<3;r++)t.push(this.makeRandomNum(t));return console.log("make correct answer",t),t},t.prototype.init=function(){console.log("claer",this.score,this.answerList,this.resultList),this.score=10,this.answerList=[],this.resultList=[],this.correctAnswer=this.makeCorrectAnswer()},t.prototype.inputAnswer=function(t,r,e,s){if(-1!==this.checkAnswer(t)){var o=this.getResult(t);this.score-=1,this.answerList.push(t),this.resultList.push(o),"3S"===o?e(this.score):r(this.score,this.answerList,this.resultList)}else s("inputErr")},t.prototype.getResult=function(t){var r="",e=0,s=0;correctAnswerSet=new Set(this.correctAnswer);for(var o=0;o<3;o++)this.correctAnswer[o]===t[o]&&(e+=1,correctAnswerSet.delete(t[o]));for(var n=0;n<3;n++)correctAnswerSet.has(t[n])&&(s+=1);return correctAnswerSet.clear(),0===e&&0===s?r="OUT":(r+=0!==e?"".concat(e,"S"):"",r+=0!==s?"".concat(s,"B"):""),r},t.prototype.checkAnswer=function(t){return t.search(/^[0-9]{3}$/)},module.exports=t;
},{}],"Focm":[function(require,module,exports) {
var e=require("./BaseBallMgmt"),n=document.getElementById("start-page"),t=n.querySelector("h1"),l=document.getElementById("play-page"),i=document.getElementById("play-input"),o=document.getElementById("play-score"),r=document.getElementById("answer-list"),c=document.getElementById("result-list"),a=new e;function d(){a.init(),p(10,[],[])}function u(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function s(e,n){u(e);for(var t=0;t<n.length;t++){var l=document.createElement("li");l.innerHTML=n[t],e.appendChild(l)}}function y(){n.style.display="none",l.style.display="block",a.init()}function f(e){s(r,e)}function m(e){s(c,e)}function p(e,n,t){o.innerHTML=e,parseInt(e)<4?o.style.color="red":o.style.color="black",f(n),m(t)}function g(e){if(13==e.keyCode){var n=e.target.value;if(e.target.value="",console.log("inputAnswer",n),a.checkOverlapNum(n))return void alert("중복된 값을 입력하면 안됩니다.");a.inputAnswer(n,function(e,n,t){0==e?(alert("당신은 패배하였습니다.\n게임을 다시 시작합니다."),d()):p(e,n,t)},function(e){alert("축하합니다. 정답을 맞추셨습니다.\n당신의 점수는 ".concat(e,"점 입니다.\n게임을 다시 시작합니다.")),d()},function(){alert("입력값이 세자리가 아닙니다. 다시 입력해주세요.")})}}function v(){t.addEventListener("click",y),i.addEventListener("keydown",g)}v();
},{"./BaseBallMgmt":"bpXs"}]},{},["Focm"], null)
//# sourceMappingURL=/baseball-game/src.9bc794e5.js.map
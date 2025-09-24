/*
------------------------------
         __           _     
   _____/ /______    (_)____
  / ___/ __/ ___/   / / ___/
 (__  ) /_/ /  _   / (__  ) 
/____/\__/_/  (_)_/ /____/  
               /___/         
------------------------------
           str.js
------------------------------
    Lightweight String Utility
    軽量文字列ユーティリティ
------------------------------
    by: @imorun
    ver: 1.0.5.1
------------------------------
    Updated: 2025-09-24
------------------------------
*/
function str(text) {
    return String(text);
}

function Str(text) {
    return String(text);
}

function Upper(text) {
    return text.toUpperCase();
}

function Lower(text) {
    return text.toLowerCase();
}

function AddMark(text, mark, position = "end") {
    if (position === "st" || position === "start") return mark + text;
    if (position === "ed" || position === "end") return text + mark;
    if (typeof position === "number") {
        return text.slice(0, position) + mark + text.slice(position);
    }
    return text;
}

function Short(text, length) {
    return text.slice(0, length);
}

function Cut(text, start, end) {
    return text.slice(start, end);
}

function Reverse(text) {
    return text.split("").reverse().join("");
}

function Replace(text, from, to) {
    return text.replace(from, to);
}

function PE(text, length, mark) {
    return text.padEnd(length, mark);
}

function Repeat(text, times) {
    return text.repeat(times);
}

function Length(text) {
    return text.length;
}

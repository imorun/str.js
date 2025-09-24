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
/**
 * 任意の値を文字列に変換します / Converts any value to a string
 * @param {any} text - 変換したい値 / value to convert
 * @returns {string} 文字列 / string
 */
function str(text) {
	return String(text);
}

function Str(text) {
	return String(text);
}

/**
 * 文字列を大文字に変換 / Convert string to uppercase
 * @param {string} text - 対象文字列 / input string
 * @returns {string} 大文字の文字列 / uppercase string
 */
function Upper(text) {
	return text.toUpperCase();
}

/**
 * 文字列を小文字に変換 / Convert string to lowercase
 * @param {string} text - 対象文字列 / input string
 * @returns {string} 小文字の文字列 / lowercase string
 */
function Lower(text) {
	return text.toLowerCase();
}

/**
 * 文字列に指定位置でマークを追加 / Add mark to string at specified position
 * @param {string} text - 対象文字列 / input string
 * @param {string} mark - 追加する文字 / mark to add
 * @param {string|number} [position="end"] - 位置("start"/"st" or "end"/"ed" or 数字) / position ("start"/"st", "end"/"ed", or number)
 * @returns {string} マーク追加後の文字列 / string with mark added
 */
function AddMark(text, mark, position = "end") {
	if (position === "st" || position === "start") return mark + text;
	if (position === "ed" || position === "end") return text + mark;
	if (typeof position === "number") return text.slice(0, position) + mark + text
		.slice(position);
	return text;
}

/**
 * 文字列の先頭から指定文字数を取得 / Get first N characters
 * @param {string} text - 対象文字列 / input string
 * @param {number} length - 取得文字数 / number of characters
 * @returns {string} 切り出した文字列 / substring
 */
function Short(text, length) {
	return text.slice(0, length);
}

/**
 * 文字列を指定範囲で切り出す / Cut string from start to end
 * @param {string} text - 対象文字列 / input string
 * @param {number} start - 開始位置 / start index
 * @param {number} end - 終了位置 / end index
 * @returns {string} 切り出した文字列 / substring
 */
function Cut(text, start, end) {
	return text.slice(start, end);
}

/**
 * 文字列を逆順にする / Reverse string
 * @param {string} text - 対象文字列 / input string
 * @returns {string} 逆順文字列 / reversed string
 */
function Reverse(text) {
	return text.split("").reverse().join("");
}

/**
 * 文字列を置換 / Replace substring
 * @param {string} text - 対象文字列 / input string
 * @param {string|RegExp} from - 置換対象 / substring or regex to replace
 * @param {string} to - 置換後 / replacement string
 * @returns {string} 置換後文字列 / string after replacement
 */
function Replace(text, from, to) {
	return text.replace(from, to);
}

/**
 * 文字列を指定長さまで埋める / Pad string to a specified length
 * @param {string} text - 対象文字列 / input string
 * @param {number} length - 埋める長さ / length to pad to
 * @param {string} mark - 埋める文字 / padding character
 * @returns {string} 埋めた文字列 / padded string
 */
function PE(text, length, mark) {
	return text.padEnd(length, mark);
}

/**
 * 文字列を繰り返す / Repeat string
 * @param {string} text - 対象文字列 / input string
 * @param {number} times - 繰り返す回数 / number of repetitions
 * @returns {string} 繰り返した文字列 / repeated string
 */
function Repeat(text, times) {
	return text.repeat(times);
}

/**
 * 文字列の長さを取得 / Get string length
 * @param {string} text - 対象文字列 / input string
 * @returns {number} 文字数 / length of string
 */
function Length(text) {
	return text.length;
}

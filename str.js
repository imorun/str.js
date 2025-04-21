function str(text) {
    return String(text);
}

function Upper(text) {
    return text.toUpperCase();
}

function Lower(text) {
    return text.toLowerCase();
}

function AddMark(text, mark, position = "end") {
    if (position === "st") return mark + text;
    if (position === "ed") return text + mark;
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

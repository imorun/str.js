# str.js

[**Download v1.0.5.1 str.js**](https://github.com/imorun/str.js/releases/download/v1.0.5.1/str.js)

# 日本語

**str.js**は、文字列操作を簡単に行える軽量で柔軟なJavaScriptライブラリです。このツールは、文字列のフォーマットを簡単に行うことができるツールです。

---

## 主な特徴
- 🛠️ **シンプルで直感的なAPI**
- 🤝 **他のJavaScriptライブラリとの互換性が高い**
- ⚡ **軽量で高速**

---

## インストール

以下のリンクからダウンロードしてください：

[**v1.0.5.1のstr.jsをダウンロード**](https://github.com/imorun/str.js/releases/download/v1.0.5.1/str.js)

また、Gitでクローンすることもできます：

```bash
git clone https://github.com/imorun/str.js.git
```

## 関数一覧

| 関数名                    | 説明                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------|
| `Str(text)`               | 任意の値を文字列に変換します。<br>**変換前に数値やオブジェクトがあっても文字列に変換することができます。**           |
| `Upper(text)`             | 文字列をすべて大文字に変換します。<br>**例: "hello" → "HELLO"**                               |
| `Lower(text)`             | 文字列をすべて小文字に変換します。<br>**例: "HELLO" → "hello"**                               |
| `AddMark(text, mark, position)` | 文字列の指定した位置にマーク（`mark`）を追加します。<br>`position`には `"start"か"st"`, `"end"か"ed"`, または整数を指定できます。<br>**例: `"hello" → "★hello"`, `"hello" → "hello★"`** |
| `Short(text, length)`     | 文字列の先頭から指定した長さだけ切り出します。<br>**例: `"JavaScript" → "Java"（長さ4）**                        |
| `Cut(text, start, end)`   | 指定された開始位置から終了位置まで文字列を切り出します。<br>**例: `"Hello World"` → `"Hello"`（0-5文字目）    |
| `Reverse(text)`           | 文字列を逆順にします。<br>**例: `"abc"` → `"cba"`**                                          |
| `Replace(text, from, to)` | 文字列内の `from` を `to` に置換します。<br>**例: `"JavaScript"` → `"JS"`（"Java" を "JS" に置換）**           |
| `PE(text, length, mark)`  | 文字列を `length` まで `mark` で埋めます。<br>**`padEnd` に相当します。<br>**例: `"abc"` → `"abc*****"`（長さ8） |
| `Repeat(text, times)`     | 文字列を指定回数繰り返します。<br>**例: `"Hi"` → `"HiHiHi"`（3回繰り返し）**                     |
| `Length(text)`            | 文字列の長さ（文字数）を取得します。<br>**例: `"JavaScript"` → `10`**                           |

---

# english

**str.js** is a lightweight and flexible JavaScript library that makes string manipulation easy. This tool makes string formatting easy.

---

## Main Features
- 🛠️ **Simple and intuitive API**
- 🤝 **High compatibility with other JavaScript libraries**
- ⚡ **Lightweight and fast**

---

## Installation

Download from the link below:

[**Download v1.0.5.1 str.js**](https://github.com/imorun/str.js/releases/download/v1.0.5.1/str.js)

You can also clone it with Git:

```bash
git clone https://github.com/imorun/str.js.git
```

## Function List

| Function Name            | Description                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------|
| `atr(text)`               | Converts any value to a string.<br>**Can convert numbers, objects, etc., into a string.**        |
| `Upper(text)`             | Converts the string to uppercase.<br>**Example: "hello" → "HELLO"**                               |
| `Lower(text)`             | Converts the string to lowercase.<br>**Example: "HELLO" → "hello"**                               |
| `AddMark(text, mark, position)` | Adds a mark (`mark`) at a specified position.<br>You can specify `"start"or"st"`, `"end"or"ed"`, or a number for `position`.<br>**Example: `"hello" → "★hello"`, `"hello" → "hello★"`** |
| `Short(text, length)`     | Extracts the first `length` characters from the string.<br>**Example: `"JavaScript" → "Java"` (length 4)**  |
| `Cut(text, start, end)`   | Extracts the string from position `start` to position `end`.<br>**Example: `"Hello World"` → `"Hello"` (0-5 characters)** |
| `Reverse(text)`           | Reverses the string.<br>**Example: `"abc"` → `"cba"`**                                          |
| `Replace(text, from, to)` | Replaces `from` with `to` in the string.<br>**Example: `"JavaScript"` → `"JS"` (replaces "Java" with "JS")** |
| `PE(text, length, mark)`  | Pads the string to `length` with the `mark` character.<br>**Equivalent to `padEnd`.**<br>**Example: `"abc"` → `"abc*****"` (length 8)** |
| `Repeat(text, times)`     | Repeats the string `times` number of times.<br>**Example: `"Hi"` → `"HiHiHi"` (repeated 3 times)** |
| `Length(text)`            | Returns the length (number of characters) of the string.<br>**Example: `"JavaScript"` → `10`**   |

---

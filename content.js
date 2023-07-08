const resource = {
    'th': {
        '1': 'ๅ',
        '2': '/',
        '3': '-',
        '4': 'ภ',
        '5': 'ถ',
        '6': 'ุ',
        '7': 'ึ',
        '8': 'ค',
        '9': 'ต',
        '0': 'จ',
        '-': 'ข',
        '=': 'ช',
        'q': 'ๆ',
        'w': 'ไ',
        'e': 'ำ',
        'r': 'พ',
        't': 'ะ',
        'y': 'ั',
        'u': 'ี',
        'i': 'ร',
        'o': 'น',
        'p': 'ย',
        '[': 'บ',
        ']': 'ล',
        '\\': 'ฃ',
        'a': 'ฟ',
        's': 'ห',
        'd': 'ก',
        'f': 'ด',
        'g': 'เ',
        'h': '้',
        'j': '่',
        'k': 'า',
        'l': 'ส',
        ';': 'ว',
        "'": 'ง',
        'z': 'ผ',
        'x': 'ป',
        'c': 'แ',
        'v': 'อ',
        'b': 'ิ',
        'n': 'ื',
        'm': 'ท',
        ',': 'ม',
        '.': 'ใ',
        '/': 'ฝ',
        '!': '+',
        '@': '๑',
        '#': '๒',
        '$': '๓',
        '%': '๔',
        '^': 'ู',
        '&': '฿',
        '*': '๕',
        '(': '๖',
        ')': '๗',
        '_': '๘',
        '+': '๙',
        'Q': '๐',
        'W': '"',
        'E': 'ฎ',
        'R': 'ฑ',
        'T': 'ธ',
        'Y': 'ํ',
        'U': '๊',
        'I': 'ณ',
        'O': 'ฯ',
        'P': 'ญ',
        '{': 'ฐ',
        '}': ',',
        '|': 'ฅ',
        'A': 'ฤ',
        'S': 'ฆ',
        'D': 'ฏ',
        'F': 'โ',
        'G': 'ฌ',
        'H': '็',
        'J': '๋',
        'K': 'ษ',
        'L': 'ศ',
        ':': 'ซ',
        '"': '.',
        'Z': '(',
        'X': ')',
        'C': 'ฉ',
        'V': 'ฮ',
        'B': 'ฺ',
        'N': '์',
        'M': '?',
        '<': 'ฒ',
        '>': 'ฬ',
        '?': 'ฦ',
        ' ': ' ',
    },
    'en': {
        'จ': '0',
        'ๅ': '1',
        '/': '2',
        '-': '3',
        'ภ': '4',
        'ถ': '5',
        'ุ': '6',
        'ึ': '7',
        'ค': '8',
        'ต': '9',
        'ข': '-',
        'ช': '=',
        'ๆ': 'q',
        'ไ': 'w',
        'ำ': 'e',
        'พ': 'r',
        'ะ': 't',
        'ั': 'y',
        'ี': 'u',
        'ร': 'i',
        'น': 'o',
        'ย': 'p',
        'บ': '[',
        'ล': ']',
        'ฃ': '\\',
        'ฟ': 'a',
        'ห': 's',
        'ก': 'd',
        'ด': 'f',
        'เ': 'g',
        '้': 'h',
        '่': 'j',
        'า': 'k',
        'ส': 'l',
        'ว': ';',
        'ง': "'",
        'ผ': 'z',
        'ป': 'x',
        'แ': 'c',
        'อ': 'v',
        'ิ': 'b',
        'ื': 'n',
        'ท': 'm',
        'ม': ',',
        'ใ': '.',
        'ฝ': '/',
        '+': '!',
        '๑': '@',
        '๒': '#',
        '๓': '$',
        '๔': '%',
        'ู': '^',
        '฿': '&',
        '๕': '*',
        '๖': '(',
        '๗': ')',
        '๘': '_',
        '๙': '+',
        '๐': 'Q',
        '"': 'W',
        'ฎ': 'E',
        'ฑ': 'R',
        'ธ': 'T',
        'ํ': 'Y',
        '๊': 'U',
        'ณ': 'I',
        'ฯ': 'O',
        'ญ': 'P',
        'ฐ': '{',
        ',': '}',
        'ฅ': '|',
        'ฤ': 'A',
        'ฆ': 'S',
        'ฏ': 'D',
        'โ': 'F',
        'ฌ': 'G',
        '็': 'H',
        '๋': 'J',
        'ษ': 'K',
        'ศ': 'L',
        'ซ': ':',
        '.': '"',
        '(': 'Z',
        ')': 'X',
        'ฉ': 'C',
        'ฮ': 'V',
        'ฺ': 'B',
        '์': 'N',
        '?': 'M',
        'ฒ': '<',
        'ฬ': '>',
        'ฦ': '?',
        ' ': ' '
    }
}

let res_th = ""
let res_en = ""
let res_both = ""
let input_event

const widget_div = document.createElement("div")
let widget_btn = document.createElement("button")
let span_tooltip = document.createElement("span")

let style = document.createElement("style")
style.innerHTML = `
button.transth-btn {
    background-color: coral;
    padding: 0px;
    border-radius: 200%;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 2px;
    height: 38px;
    width: 38px;
    border: whitesmoke;
    border-style: double;
    border-width: 8px;
    z-index: 99;
  }
  .transth-btn .transth-tooltip {
    visibility: hidden;
    width: max-content;
    background-color: gray;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: -4px;
    left: 140%;
    font-size: 16px;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: auto;
    grid-gap: 10px;
  }
  
  .transth-btn .transth-tooltip::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 99%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent gray transparent transparent;
  }
  
  .transth-btn:hover .transth-tooltip {
    visibility: visible;
  }
    .trans-action-btn {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 2px;
        cursor: pointer;
        border-radius: 10px;
    }

    .trans-action-btn:hover {
        background-color: #37783a;
    }
  }`

let img = document.createElement('img');
img.src = chrome.extension.getURL('logo.png')
img.style = 'height: -webkit-fill-available;'

span_tooltip.className = "transth-tooltip"
widget_btn.appendChild(img)
widget_btn.appendChild(span_tooltip)

widget_btn.classList = ['transth-btn']
widget_div.id = 'transth-widget'
widget_div.style = 'z-index:99'
widget_div.appendChild(style)
widget_div.appendChild(widget_btn)

let th_btn = document.createElement("button")
let en_btn = document.createElement("button")
let both_btn = document.createElement("button")
th_btn.innerHTML = 'ไทย'
en_btn.innerHTML = 'ENG'
both_btn.innerHTML = 'ไทย&ENG'
th_btn.className = "trans-action-btn"
en_btn.className = "trans-action-btn"
both_btn.className = "trans-action-btn"

const translationText = (res) => {
    if (input_event && input_event.target) {
        input_event.target.innerText = res;
        input_event.target.innerHTML = res;
        input_event.target.value = res;
    }
}

th_btn.onclick = () => translationText(res_th)
en_btn.onclick = () => translationText(res_en)
both_btn.onclick = () => translationText(res_both)

document.addEventListener("input", function (event) {
    input_event = event
    let input_char = input_event.data
    let input_len = String(input_event.target.value).length || String(input_event.target.innerHTML).length

    if (input_event.inputType == "insertLineBreak") {
        input_char = '\n'
        console.log(input_char)
    }

    if (input_char == null) {
        if (input_len) {
            res_th = res_th.slice(0, input_len)
            res_en = res_en.slice(0, input_len)
            res_both = res_both.slice(0, input_len)
        } else {
            res_th = ""
            res_en = ""
            res_both = ""
        }
    } else {
        res_th = res_th.slice(0, input_len - 1)
        if (input_char in resource['th']) {
            res_th = res_th + '' + resource['th'][input_char]
        } else {
            res_th = res_th + '' + input_char
        }

        res_en = res_en.slice(0, input_len - 1)
        if (input_char in resource['en']) {
            res_en = res_en + '' + resource['en'][input_char]
        } else {
            res_en = res_en + '' + input_char
        }

        res_both = res_both.slice(0, input_len - 1)
        if (input_char in resource['en']) {
            res_both = res_both + '' + resource['en'][input_char]
        } else if (input_char in resource['th']) {
            res_both = res_both + '' + resource['th'][input_char]
        } else {
            res_both = res_both + '' + input_char
        }
    }

    // console.log(input_event, res_th, res_en);
    span_tooltip.innerHTML = ''
    span_tooltip.appendChild(th_btn)
    span_tooltip.appendChild(document.createTextNode(` ${res_th.trim() !== '' ? res_th : '...'}`))
    span_tooltip.appendChild(en_btn)
    span_tooltip.appendChild(document.createTextNode(` ${res_en.trim() !== '' ? res_en : '...'}`))
    span_tooltip.appendChild(both_btn)
    span_tooltip.appendChild(document.createTextNode(` ${res_both.trim() !== '' ? res_both : '...'}`))
    event.target.insertAdjacentElement("afterend", widget_div)
}, true);
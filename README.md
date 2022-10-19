### [GitHub emoji polyfill](https://github.com/warren-bank/crx-GitHub-emoji-polyfill/tree/greasemonkey-userscript)

[Userscript](https://github.com/warren-bank/crx-GitHub-emoji-polyfill/raw/greasemonkey-userscript/greasemonkey-userscript/GitHub-emoji-polyfill.user.js) for [GitHub](https://github.com/) to run in:
* the [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) web browser extension for Chrome/Chromium

Its purpose is to:
* inject a CSS polyfill to add an emoji font for use on operating systems that don't natively provide any of the emoji font families that are assumed by the GitHub website to be supported
  - examples of operating systems:
    * versions of Microsoft Windows &lt; 10
  - emoji font families implicitly used by the GitHub website (before applying the polyfill):
    * [Apple Color Emoji](https://en.wikipedia.org/wiki/Apple_Color_Emoji)
    * [Segoe UI Emoji](https://learn.microsoft.com/en-us/typography/font-list/segoe-ui-emoji)
    * [Segoe UI Symbol](https://learn.microsoft.com/en-us/typography/font-list/segoe-ui-symbol)

#### Credits:

* [Noto Emoji](https://github.com/googlefonts/noto-emoji) provides a replacement for the emoji font
  - Noto Emoji (Stands for No Tofu) is an open source (Open Font License 1.1) emoji library
  - [_NotoColorEmoji.ttf_](https://github.com/warren-bank/crx-GitHub-emoji-polyfill/raw/greasemonkey-userscript/font/1-Noto-Color-Emoji/1-full/NotoColorEmoji.ttf) is a Unicode compliant color emoji font
    * size: 9.9 MB

#### Notes:

* the use of a polyfill to replace a missing emoji font is an inefficient workaround
* when possible, it would be better to install the missing emoji font onto the operating system:
  - [_Apple_Color_Emoji.ttf_](https://github.com/warren-bank/crx-GitHub-emoji-polyfill/raw/greasemonkey-userscript/font/2-Apple-Color-Emoji/1-full/Apple_Color_Emoji.ttf)
    * size: 44 MB
  - [_Segoe_UI_Emoji.ttf_](https://github.com/warren-bank/crx-GitHub-emoji-polyfill/raw/greasemonkey-userscript/font/3-Segoe-UI-Emoji/1-full/Segoe_UI_Emoji.ttf)
    * size: 660 KB

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)

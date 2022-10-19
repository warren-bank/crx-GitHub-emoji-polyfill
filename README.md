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
  - [_NotoColorEmoji.ttf_](https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf) is a Unicode compliant color emoji font

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)

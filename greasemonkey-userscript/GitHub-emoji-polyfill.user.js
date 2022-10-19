// ==UserScript==
// @name         GitHub emoji polyfill
// @description  Inject a CSS polyfill to add an emoji font.
// @version      1.0.1
// @include      /^https?:\/\/(?:[^\.\/]*\.)*github\.com\/.*$/
// @icon         https://github.githubassets.com/favicons/favicon.png
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_getResourceURL
// @grant        GM_addElement
// @resource     emoji_font https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf
// @homepage     https://github.com/warren-bank/crx-GitHub-emoji-polyfill/tree/greasemonkey-userscript
// @supportURL   https://github.com/warren-bank/crx-GitHub-emoji-polyfill/issues
// @downloadURL  https://github.com/warren-bank/crx-GitHub-emoji-polyfill/raw/greasemonkey-userscript/greasemonkey-userscript/GitHub-emoji-polyfill.user.js
// @updateURL    https://github.com/warren-bank/crx-GitHub-emoji-polyfill/raw/greasemonkey-userscript/greasemonkey-userscript/GitHub-emoji-polyfill.user.js
// @namespace    warren-bank
// @author       Warren Bank
// @copyright    Warren Bank
// ==/UserScript==

// =====
// docs:
// =====
//   https://www.tampermonkey.net/documentation.php#_resource
//   https://www.tampermonkey.net/documentation.php#GM_getResourceText
//   https://www.tampermonkey.net/documentation.php#GM_getResourceURL
// =====
//   https://wiki.greasespot.net/Metadata_Block#@resource
//   https://wiki.greasespot.net/GM_getResourceText
//   https://wiki.greasespot.net/GM_getResourceURL
// =====
//   https://stackoverflow.com/a/33339794
// =====

var should_add_polyfill = function() {
  var emoji_count = unsafeWindow.document.querySelectorAll('g-emoji').length

  return (emoji_count > 0)
}

var add_polyfill = function() {
  var emoji_font_url

  emoji_font_url = GM_getResourceURL('emoji_font')

  if ((typeof emoji_font_url === 'object') && (emoji_font_url instanceof Promise)) {
    emoji_font_url.then(add_inline_css)
  }
  else {
    add_inline_css(emoji_font_url)
  }
}

var add_inline_css = function(emoji_font_url) {
  var inline_css

  if ((typeof emoji_font_url === 'string') && emoji_font_url.length) {
    inline_css = `
@font-face {
  font-family: "Noto Color Emoji";
  src: url("${emoji_font_url}");
}
g-emoji {
  font-family: "Noto Color Emoji" !important;
}
`

    GM_addElement('style', {textContent: inline_css})
  }
}

if (should_add_polyfill())
  add_polyfill()

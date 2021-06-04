{
"use strict"

const jsdom = require("jsdom")
const { JSDOM } = jsdom
const dom = new JSDOM("<!DOCTYPE html>", { pretendToBeVisual: true }) // EXPERIMENTAL: Untested
const { window } = dom
const { document } = (dom).window

function* buttonIDGen(buttonIDVar) {
  // EXPERIMENTAL: Untested
  yield ++buttonIDVar
}

function getHTMLCode() {
  // EXPERIMENTAL: Needs its own implementation of package in <script> tags so website works as expected, needs meta tags, title, etc., untested
  return `<!DOCTYPE html><html>${document.querySelector("html").innerHTML}</html>`
}

let buttonIDVar = 0
const buttonIDGenerator = buttonIDGen(buttonIDVar)

let stylerCreated = false
let style = ""
const styleElem = document.createElement("style")
styleElem.innerHTML = style
document.body.appendChild(styleElem)

module.exports = {
  Button: class Button {
    // EXPERIMENTAL: Untested
    constructor(text = `Button${buttonIDGenerator.next().value}`, listener = undefined, options = { pureText: false }) {
      this.textInternalSecure = String(text) || `Button${buttonIDGenerator.next().value}`
      this.listenerInternalSecure = Function(listener) || undefined
      this.optionsInternalSecure = Object(options) || { pureText: false }
      this.updateOptionsInternalSecure()
      this.dangerouslyUsedElement = document.createElement("button")
      this.updateTextInternalSecure()
      this.updateListenerInternalSecure()
      document.body.appendChild(this.dangerouslyUsedElement)
    }
    updateTextInternalSecure() {
      if (!this.optionsInternalSecure.pureText) {
        this.dangerouslyUsedElement.innerHTML = String(this.textInternalSecure)
      } else {
        this.dangerouslyUsedElement.innerText = String(this.textInternalSecure)
      }
    }
    updateListenerInternalSecure() {
      if (this.listenerInternalSecure) {
        this.dangerouslyUsedElement.addEventListener("click", Function(this.listenerInternalSecure))
      }
    }
    updateOptionsInternalSecure() {
      if (typeof this.optionsInternalSecure !== "object") this.optionsInternalSecure = { pureText: false }
      if (this.optionsInternalSecure.pureText == null) this.optionsInternalSecure.pureText = false
    }
    get text() {
      return String(this.textInternalSecure)
    }
    set text(newContent) {
      this.textInternalSecure = String(newContent)
      this.updateTextInternalSecure()
      return String(this.textInternalSecure)
    }
    get click() {
      return Function(this.listenerInternalSecure)
    }
    set click(newContent) {
      this.listenerInternalSecure = Function(newContent)
      this.updateListenerInternalSecure()
      return Function(this.listenerInternalSecure)
    }
    get options() {
      return Object(this.optionsInternalSecure)
    }
    set options(newContent) {
      this.optionsInternalSecure = Object(newContent) || { pureText: false }
      this.updateOptionsInternalSecure()
    }
  },
  getHTMLCode, // EXPERIMENTAL: Needs its own implementation of package in <script> tags so website works as expected, needs meta tags, title, etc., untested
  Equality: class Equality {
    // EXPERIMENTAL: Untested
    constructor(val1, val2) {
      this.val1 = val1
      this.val2 = val2
      this.res = this.val1 === this.val2 || Number.isNaN(this.val1) && Number.isNaN(this.val2) // Number.isNaN() used instead of isNaN() is important since its property on Number only works for numbers, thus only matching NaN and not impossible numbers like true.
    }
  }
  },
  DuplicationError: class DuplicationError extends Error {
    // EXPERIMENTAL: Untested
    constructor(message) {
      super(message)
      this.name = "DuplicationError"
    }
  },
  Styler: class Styler {
    // EXPERIMENTAL: Untested
    constructor() {
      if (stylerCreated) throw new DuplicationError("Cannot duplicate styler")
      stylerCreated = true
      this.updateStylesInternalSecure()
    }
    updateStylesInternalSecure() {
      return styleElem.innerHTML = style
    }
    get styles() {
      return String(style)
    }
    set styles(content) {
      style = String(content)
      return this.updateStylesInternalSecure()
    }
  },
  navigator: window.navigator, // EXPERIMENTAL: Untested
  userStorage: window.localStorage // EXPERIMENTAL: Untested
}
}

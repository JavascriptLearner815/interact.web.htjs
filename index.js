"use strict"

const jsdom = require("jsdom")
const { JSDOM } = jsdom
const dom = new JSDOM("<!DOCTYPE html>", { pretendToBeVisual: true })
const { window } = dom
const { document } = (dom).window

function* buttonIDGen(buttonIDVar) {
  yield ++buttonIDVar
}

function getHTMLCode() {
  // EXPERIMENTAL: Needs its own implementation of package in <script> tags so website works as expected, needs meta tags, title, etc.
  return `<!DOCTYPE html><html>${document.querySelector("html").innerHTML}</html>`
}

let buttonIDVar = 0
const buttonIDGenerator = buttonIDGen(buttonIDVar)

module.exports = {
  Button: class Button {
    constructor(text = `Button${buttonIDGenerator.next().value}`, listener = undefined, options = { pureText: false }) {
      this.textInternalSecure = String(text)
      this.listenerInternalSecure = Function(listener)
      this.optionsInternalSecure = Object(options) || { pureText: false }
      if (typeof this.optionsInternalSecure !== "object") this.optionsInternalSecure = { pureText: false }
      if (this.optionsInternalSecure.pureText == null) this.optionsInternalSecure.pureText = false
      this.dangerouslyUsedElement = document.createElement("button")
      this.updateTextInternalSecure()
      document.body.appendChild(this.dangerouslyUsedElement)
    }
    updateTextInternalSecure() {
      if (!this.optionsInternalSecure.pureText) {
        this.dangerouslyUsedElement.innerHTML = String(this.textInternalSecure)
      } else {
        this.dangerouslyUsedElement.innerText = String(this.textInternalSecure)
      }
    }
    get text() {
      return String(this.textInternalSecure)
    }
    set text(newContent) {
      return this.textInternalSecure = String(newContent)
    }
  },
  getHTMLCode // EXPERIMENTAL: Needs its own implementation of package in <script> tags so website works as expected, needs meta tags, title, etc.
}

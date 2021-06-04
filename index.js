{
// FIXME: Assuming Primitive(impossible) == null instead of impossible
// TODO: Store default values into variables for their obvious other usages
  
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
  
  class Button {
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
  }
  
  class Equality {
    // EXPERIMENTAL: Untested
    constructor(val1, val2) {
      this.val1 = val1
      this.val2 = val2
      this.res = this.val1 === this.val2 || Number.isNaN(this.val1) && Number.isNaN(this.val2) // Number.isNaN() used instead of isNaN() is important since its property on Number only works for numbers, thus only matching NaN and not impossible numbers like true.
    }
  }
  
  class DuplicationError extends Error {
    // EXPERIMENTAL: Untested
    constructor(message) {
      super(message)
      this.name = "DuplicationError"
    }
  }
  
  class Styler {
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
  }
  
  class Video {
    // EXPERIMENTAL: Untested
    constructor(id = undefined, alt = "The video cannot be displayed. Please try updating or changing your browser.", width = 800, height = 650, options = { controls: true, autoplay: false, muted: false }) {
      id == null ? this.idInternalSecure = undefined : this.idInternalSecure = String(id) || undefined
      this.dangerouslyUsedElement = document.createElement("video")
      this.updateIDInternalSecure()
      this.altInternalSecure = String(alt) || "The video cannot be displayed. Please try updating or changing your browser."
      this.updateAltInternalSecure()
      this.widthInternalSecure = Number(width) || 800 // COMING SOON: Removing width
      this.updateWidthInternalSecure()
      this.heightInternalSecure = Number(height) || 650 // COMING SOON: Removing height
      this.updateHeightInternalSecure()
      this.optionsInternalSecure = Object(options) || { controls: true, autoplay: false, muted: false }
      this.updateOptionsInternalSecure()
      document.body.appendChild(this.dangerouslyUsedElement)
    }
    updateIDInternalSecure() {
      return this.idInternalSecure == null ? this.dangerouslyUsedElement.removeAttribute("id") : (String(this.idInternalSecure) ? this.dangerouslyUsedElement.id = String(this.idInternalSecure) : this.dangerouslyUsedElement.removeAttribute("id"))
    }
    updateAltInternalSecure() {
      return this.altInternalSecure != null ? this.dangerouslyUsedElement.innerText = String(this.altInternalSecure || "The video cannot be displayed. Please try updating or changing your browser.") : this.dangerouslyUsedelement.innerText = "The video cannot be displayed. Please try updating or changing your browser." // COMING SOON: Disabling alt completely
    }
    updateWidthInternalSecure() {
      return this.dangerouslyUsedElement.width = Number(this.widthInternalSecure())
    }
    updateHeightInternalSecure() {
      return this.dangerouslyUsedElement.height = Number(this.heightInternalSecure())
    }
    updateOptionsInternalSecure() {
      if (typeof this.optionsInternalSecure !== "object") this.optionsInternalSecure = { controls: true, autoplay: false, muted: false }
      if (!this.optionsInternalSecure.controls || typeof Boolean(this.optionsInternalSecure.controls) !== "boolean") this.optionsInternalSecure.controls = true
      if (!this.optionsInternalSecure.autoplay || typeof Boolean(this.optionsInternalSecure.autoplay) !== "boolean") this.optionsInternalSecure.autoplay = false
      if (!this.optionsInternalSecure.muted || typeof Boolean(this.optionsInternalSecure.muted) !== "boolean") this.optionsInternalSecure.muted = false
      // Stubborn autoplay/muted agreement convention:
      if (!((this.optionsInternalSecure.autoplay && this.optionsInternalSecure.muted) || !this.optionsInternalSecure.autoplay))) this.optionsInternalSecure.muted = true // If autoplay is on but muted is not, muted is turned on
      this.dangerouslyUsedElement.controls = Boolean(this.optionsInternalSecure.controls)
      this.dangerouslyUsedElement.autoplay = Boolean(this.optionsInternalSecure.controls)
      this.dangerouslyUsedElement.muted = Boolean(this.optionsInternalSecure.controls)
      return this.optionsInternalSecure
    }
    get id() {
      return String(this.idInternalSecure)
    }
    set id(value = undefined) {
      value == null ? this.idInternalSecure = undefined : this.idInternalSecure = String(value) || undefined
      return this.updateIDInternalSecure()
    }
    get alt() {
      return String(this.altInternalSecure)
    }
    set alt(value = "The video cannot be displayed. Please try updating or changing your browser.") {
      this.altInternalSecure = String(value) || "The video cannot be displayed. Please try updating or changing your browser."
      return this.updateAltInternalSecure()
    }
    get width() {
      return Number(this.widthInternalSecure)
    }
    set width(value = 800) {
      this.widthInternalSecure = Number(value) || 800
      return this.updateWidthInternalSecure()
    }
    get height() {
      return Number(this.heightInternalSecure)
    }
    set height(value = 650) {
      this.heightInternalSecure = Number(value) || 650
      return this.updateHeightInternalSecure()
    }
    get options() {
      return Object(this.optionsInternalSecure)
    }
    set options(value) {
      this.optionsInternalSecure = Object(value) || { controls: true, autoplay: false, muted: false }
      return this.updateOptionsInternalSecure()
    }
  }
  
  const navigator = window.navigator // EXPERIMENTAL: Untested
  
  class MediaRequest {
    // EXPERIMENTAL: Untested
    constructor(videoElement = undefined, options = { mic: true, cam: { width: { min: 240, want: videoElement.width, need: false, max: 2098 }, height: { min: 240, want: videoElement.height, need: false, max: 2098 }, face: { want: "front", need: false }, fps: { min: 30, want: 60, need: false, max: Number.POSITIVE_INFINITY } } }) {
      !(videoElement instanceof Video) ? throw new TypeError("Video element must be a video!") : this.videoElementInternalSecure = videoElement.dangerouslyUsedElement
      this.optionsInternalSecure = Object(options) || { mic: true, cam: { width: { min: 240, want: videoElement.width, need: false, max: 2098 }, height: { min: 240, want: videoElement.height, need: false, max: 2098 }, face: { want: "front", need: false }, fps: { min: 30, want: 60, need: false, max: Number.POSITIVE_INFINITY } } }
      // COMPLETEME: I am too tired to finish this.
    }
  }
  
  const userStorage = window.localStorage // EXPERIMENTAL: Untested

module.exports = {
  // EXPERIMENTAL: Untested
  Button, // EXPERIMENTAL: Untested
  getHTMLCode, // EXPERIMENTAL: Needs its own implementation of package in <script> tags so website works as expected, needs meta tags, title, etc., untested
  Equality, // EXPERIMENTAL: Untested
  DuplicationError, // EXPERIMENTAL: Untested
  Styler, // EXPERIMENTAL: Untested
  Video, // EXPERIMENTAL: Untested
  navigator, // EXPERIMENTAL: Untested
  MediaRequest, // EXPERIMENTAL: Untested
  userStorage, // EXPERIMENTAL: Untested
}
}

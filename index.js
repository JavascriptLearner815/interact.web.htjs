function* buttonIDGen(buttonIDVar) {
  yield ++buttonIDVar
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
      // Just noticed that document will never be defined, archiving until I find a way to use it
      return this.textInternalSecure = String(newContent)
    }
  }
}

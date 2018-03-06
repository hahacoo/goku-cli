const home = require('user-home')
const path = require('path')
const fs = require('fs')

const exists = fs.existsSync

module.exports = {
  isLocalPath (templatePath) {
    return /^[./]|(^[a-zA-Z]:)/.test(templatePath)
  },

  checkPath(...args) {
    return exists(path.join.apply(path, args))
  },

  getTemplatePath (templatePath) {
    return path.isAbsolute(templatePath)
      ? templatePath
      : path.normalize(path.join(process.cwd(), templatePath))
  },

  getTmpPath (template) {
    return path.join(home, '.goku-templates', template.replace(/\//g, '-'))
  }
}

const async = require('async')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const exists = fs.existsSync

module.exports = (files, data, done) => {
    async.eachSeries(Object.keys(files), (file, next) => {
        if (exists(path.normalize(path.join(process.cwd(), file)))) {
            inquirer.prompt([{
                type: 'confirm',
                message: `${file} exists. Cover?`,
                name: 'ok'
            }]).then(answers => {
                if (!answers.ok) {
                    delete files[file]
                }
                next()
            }).catch(next)
        } else {
            next()
        }
    }, done)
}

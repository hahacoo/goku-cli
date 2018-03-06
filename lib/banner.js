const chalk = require('chalk')
const character = require('./character')

/**
 *           |\\              
 *        |\\ ||\\  /| /|     
 *      |\\||\\|| \\/ |/ |/|   
 *    |\\ \\| \\  \\ \\ /|/ /  
 *    |\\ \\            //     
 *     <<\\| -\\\\  //-|/
 *       \\\\         |/       
 *        \\\\        /        
 *          \\ _____/           
 */

const logo = ['                    ',
    '         |\\              ',
    '     |\\ ||\\  /| /|      ',
    '   |\\||\\|| \\/ |/ |/|   ',
    ' |\\ \\| \\  \\ \\ /|/ /  ',
    ' |\\ \\            //     ',
    `  <<\\|${chalk.yellow("-\\\\    //-")}|/     `,
    '    \\\\         |/       ',
    '     \\\\        /        ',
    '       \\ _____/          ' + chalk.green(require('../package').description),
    '',
]

const banner = output(write('GOKU'), paint(logo))

module.exports = banner

function output(content, logo) {
    return chalk.gray(content) + logo
}

function write(source) {
    let content = '\n'
    source = source.toUpperCase()

    for (let i = 0; i < 7; i++) {
        for (let j = 0, length = source.length; j < length; j++) {
            content += character[source[j]] ? character[source[j]][i] : '        '
        }
        content += '\n'
    }
    return content
}

function paint(logo) {
    return logo.map(function (row, index) {
        if (index < 6) {
			
            // hair
            return chalk.yellow(row)
		} 
		
        // face
        return chalk.hex('#fabb93')(row)
    }).join('\n')
}

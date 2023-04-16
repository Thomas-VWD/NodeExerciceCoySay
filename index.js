student = require('./information.js')

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `$Hi, I'm ${student.studentName} from ${student.campus} campus, nice to meet you ! `,
    e: "oO",
    T: "U "
}));
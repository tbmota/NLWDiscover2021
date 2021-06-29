const sqlite3 = require("sqlite3");
const {open} = require("sqlite"); //só preciso do open

module.exports = () => {
    open({
        filename: '/src/db/rocketq.sqlite'
    })
}
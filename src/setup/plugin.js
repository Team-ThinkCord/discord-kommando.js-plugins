const { EventEmitter } = require('events');
const fs = require('fs');

class plugin extends EventEmitter {
    // @param [perms] {string[]} Plugin permissions
    constructor(perms) {
        super();
        if (!fs.existsSync("package.json")) throw new ReferenceError("Cannot parse name from package.json. Please provide plugin name in package.json");
        
        const pkg = require('../../../../package.json');
        
        this.name = pkg.name;
        this.perms = perms ?? [];
        
        this.emit
    }
}

module.exports = plugin;
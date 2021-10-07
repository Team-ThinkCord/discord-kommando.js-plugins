const { EventEmitter } = require('events');
const fs = require('fs');

class plugin extends EventEmitter {
    /**
     * @param name {string} Plugin name
     * @param perms {string[]} Plugin permissions
     */
    constructor(perms) {
        super();
        if (!name) throw new TypeError("Cannot read property 'name' of undefined");
        if (!fs.existsSync("package.json")) throw new ReferenceError("Cannot parse name from package.json. Please provide plugin name in package.json");
        
        const pkg = require('../../../../package.json');
        
        this.name = pkg.name;
        this.perms = perms ?? [];
    }
}
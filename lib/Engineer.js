import Employee from './Employee.js'

class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer"
    }
    getGitHub() {
        return this.gitHub;
    }
}
export default Engineer;
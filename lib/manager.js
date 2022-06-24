const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(id, name, email, officeNum) {
        super(id, name, email, officeNum);
        this.officeNumber = officeNum;
    }
    getRole() {
        return "Manager"
    }
}

class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email, gitHub);
        this.gitHub = githubEl;
    }
    getRole() {
        return "Engineer"
    }
}
class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email, school);
        this.school = schoolEl;
    }
    getRole() {
        return "Intern"
    }
}
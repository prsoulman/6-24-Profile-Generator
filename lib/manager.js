import Employee from './Employee.js'

class Manager extends Employee {
    constructor(id, name, email, officeNum) {
        super(id, name, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNum() {
        return this.officeNum;
    }
}
export default Manager;
//module.exports=Manager
class Employee {
    constructor(id, name,email) {
    this.name = name;
    this.id = id;
    this.email = email;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };

    getRole() {
        return 'employee'
    };
};

//export default Employee;
module.exports=Employee
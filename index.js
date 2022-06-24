import inquirer from 'inquirer';
import fs from 'fs'; 

class employee {
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


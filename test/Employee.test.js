//modules.export='./lib/employee.js'
//import Employee from "../lib/employee";
const Employee = require('../lib/employee')
test("Can instantiate Employee instance", () => {
  const e = new Employee(1, 'john', 'test@test.com');
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const e = new Employee(1, 'john', 'test@test.com');
  expect(e.name).toBe('john');
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee(1, 'john', 'test@test.com');
  expect(e.id).toBe(1);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee(1, 'john', 'test@test.com');
  expect(e.email).toBe('test@test.com');
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(1, 'john', 'test@test.com');
  expect(e.getName()).toBe('john');
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee(1, 'john', 'test@test.com');
  expect(e.getId()).toBe(1);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee(1, 'john', 'test@test.com');
  expect(e.getEmail()).toBe('test@test.com');
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});



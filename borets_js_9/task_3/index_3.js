//Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

/*Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор,
а отримувати HTML-код за допомогою методу getHtml ().

Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().*/
class Employee {
    constructor(employee) {
        this.name = employee.name;
        this.surname = employee.surname;
        this.department = employee.department;
        this.position = employee.position;
    }
}

let newEmployee1 = new Employee({
    name: 'Kate',
    surname: 'Smith',
    department: 'AAC',
    position: 'manager',
})

let newEmployee2 = new Employee({
    name: 'Jane',
    surname: 'Doe',
    department: 'KUY',
    position: 'chemist',
})

let employeeArray = [];
employeeArray.push(newEmployee1, newEmployee2);
console.log(employeeArray);

let container = document.querySelector('.container');

class EmpTable {
    constructor(employeesList) {
        this.employeesList = employeesList;
    }
    getHTML() {
        let table = document.createElement('table');
        let row = document.createElement('tr');
        for (const key in this.employeesList[0]) {
            let head = document.createElement('th');
            head.textContent = key;
            row.appendChild(head);
        }
        table.appendChild(row);
        this.employeesList.forEach(item => {
            let row = document.createElement('tr');
            for (const key in item) {
                let cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }

            table.appendChild(row);
        });
        container.appendChild(table);
    }
}

let list = new EmpTable(employeeArray)
console.log(list);
list.getHTML()

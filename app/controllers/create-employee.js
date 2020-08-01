import Controller from '@ember/controller';
import { action, get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';

export default class CreateEmployeeController extends Controller {
    @tracked firstname;
    @tracked lastname;
    @tracked address;
    @tracked salary;
    @tracked email;
    flashMessages = inject();

    @action
    createEmployee() {
        
        console.log('firstname', this.firstname);
        console.log('lastname', this.lastname);
        console.log('address', this.address);
        console.log('salary', this.salary);
        console.log('email', this.email);

        let flashMessages = get(this, 'flashMessages'),
            employee = this.store.createRecord('employee', {
                firstname: this.firstname,
                lastname: this.lastname,
                address: this.address,
                salary: parseFloat(this.salary),
                email: this.email
            });

        employee.save().then(() => {
            this.resetCreateEmployeeForm();
            flashMessages.success('Employee record has been created successfully!');
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }

    resetCreateEmployeeForm() {
        this.firstname = '';
        this.lastname = '';
        this.address = '';
        this.salary = '';
        this.email = '';
    }
}

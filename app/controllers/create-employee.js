import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateEmployeeController extends Controller {
    firstname;
    lastname;
    address;
    salary;
    email;

    @action
    createEmployee() {
        
        console.log('firstname', this.firstname);
        console.log('lastname', this.lastname);
        console.log('address', this.address);
        console.log('salary', this.salary);
        console.log('email', this.email);

        let employee = this.store.createRecord('employee', {
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            salary: parseFloat(this.salary),
            email: this.email
        });

        employee.save().then(() => {
            
            // this.transitionToRoute("employee");
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }
}

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EmployeeController extends Controller {
    @tracked isUpdateModalOpened = false;
    @tracked isViewModalOpened = false;
    @tracked isDeleteModalOpened = false;
    @tracked record = {};
    @tracked employeeId;

    // Open modal on clicking edit icon
    @action
    onClickUpdateIcon(employee) {
        this.isUpdateModalOpened = true;
        console.log("ID: ", employee.id);
        this.employeeId = employee.id;
        this.record = {
            firstname: employee.firstname,
            lastname: employee.lastname,
            address: employee.address,
            salary: employee.salary,
            email: employee.email,
        };
    }

    // Update employee
    @action
    updateEmployee() {

        let self = this;
        this.store.findRecord('employee', this.employeeId).then(function(employee) {
            employee.firstname = self.record.firstname;
            employee.lastname = self.record.lastname;
            employee.address = self.record.address;
            employee.salary = self.record.salary;
            employee.email = self.record.email;
            employee.save().then((success) => {
                self.isUpdateModalOpened = false;
            }).catch((error) => {
                console.log("Error: ", error);
            });
        });
    }

    // Closes modal for updating employee
    @action
    cancelUpdate() {
        this.isUpdateModalOpened = false;
    }
    
    // Open modal on clicking view icon
    @action
    onClickViewIcon(employee) {
        this.isViewModalOpened = true;
        console.log("ID: ", employee.id);
        this.employeeId = employee.id;
        this.record = {
            firstname: employee.firstname,
            lastname: employee.lastname,
            address: employee.address,
            salary: employee.salary,
            email: employee.email,
        };
    }

    // Closes view modal
    @action
    closeViewModal() {
        this.isViewModalOpened = false;
    }

    // Open modal on clicking delete icon
    @action
    onClickDeleteIcon(employee) {
        this.isDeleteModalOpened = true;
        console.log("ID: ", employee.id);
        this.employeeId = employee.id;
        this.record = {
            firstname: employee.firstname,
            lastname: employee.lastname,
            address: employee.address,
            salary: employee.salary,
            email: employee.email,
        };
    }
    
    // Delete employee
    @action
    deleteEmployee() {

        let self = this;
        let employee = this.store.peekRecord('employee', this.employeeId);
        employee.destroyRecord().then((success) => {
            self.isDeleteModalOpened = false;
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }

    // Closes delete modal
    @action
    cancelDelete() {
        this.isDeleteModalOpened = false;
    }
}

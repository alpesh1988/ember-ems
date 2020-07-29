import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
    @attr firstname;
    @attr lastname;
    @attr address;
    @attr salary;
    @attr email;
}
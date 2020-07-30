import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
    @attr('string') firstname;
    @attr('string') lastname;
    @attr('string') address;
    @attr('number') salary;
    @attr('string') email;
}
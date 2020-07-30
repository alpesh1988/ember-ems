import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CreateEmployeeRoute extends Route {
    // set blank values in form
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('firstname', '');
        controller.set('lastname', '');
        controller.set('address', '');
        controller.set('salary', '');
        controller.set('email', '');
    }
}

import { Model } from 'ember-cli-mirage';

import DS from 'ember-data';

export default Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    address: DS.attr('string'),
    salary: DS.attr('number'),
    email: DS.attr('string')
});

import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  firstname() {
    return faker.name.firstName();
  },
  lastname() {
    return faker.name.lastName();
  },
  address() {
    return faker.address.streetAddress();
  },
  salary() {
    return faker.random.number();
  },
  email() {
    return faker.internet.email();
  }
});
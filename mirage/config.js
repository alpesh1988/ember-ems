export default function() {

  this.get('/employees');
  this.post('/employees');
  this.get('/employees/:id');
  this.patch('/employees/:id');
  this.del('/employees/:id');

}

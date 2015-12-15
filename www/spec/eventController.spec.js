describe('EventController', function() {
  beforeEach(module('DiariApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('EventController');
  }));

  it('initiates with a hello message', function(){
    expect(ctrl.message).toEqual('Hello World');
  });
});
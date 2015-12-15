describe('EventController', function() {

  beforeEach(module('DiariApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('EventController');
  }));

  it('initiates with an empty list of events', function(){
    expect(ctrl.allEvents.length).toEqual(0);
  });

});
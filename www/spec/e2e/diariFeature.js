describe('DiariApp', function(){

  var addNewEventButton = $('#new-event')

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function(){
    expect($('.title').getText()).toEqual('DiaRi');
  });

  it('displays an event after being added', function(){
    addNewEventButton.click();
    element(by.model('eventCtrl.date')).sendKeys('01/01/2017');
    element(by.model('eventCtrl.title')).sendKeys('My New Event');
    $('#add-event').click();
    expect($('.next-event title').getText()).toEqual('My New Event');
  });
});
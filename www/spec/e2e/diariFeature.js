describe('DiaRi', function(){

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function(){
    expect(element(by.css('.title')).getText()).toEqual('DiaRi');
  });
});
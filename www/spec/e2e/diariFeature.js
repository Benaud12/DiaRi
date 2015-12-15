describe('DiaRi', function(){
  it('has a title', function(){
    browser.get('http://localhost:8080/www');

    expect(browser.getTitle()).toEqual('DiaRi');
  });
});
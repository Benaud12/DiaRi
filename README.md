DiaRi
=====

Diary management app


```
bower install
npm install
```


####Running Tests

#####Protractor Feature Tests

If [Protractor](http://www.protractortest.org/) and the [command line http-server](https://github.com/indexzero/http-server) need to be installed first run:

```
npm install -g protractor
npm install --save http-server
npm install http-server -g
```

To run tests:

Get an instance of a Selenium Server running:
```
webdriver-manager start
```

Run command-line http server:
```
http-server www/
```

Finally, run the tests:
```
protractor www/spec/e2e/conf.js
```

#####Karma Unit Tests

Run the below from command line:
```
karma start www/spec/karma.conf.js
```


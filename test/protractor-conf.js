exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub'
  ,allScriptsTimeout: 11000
  ,specs: ['e2e/*.js']
  ,capabilities: {
     'browserName': 'phantomjs'
     ,'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs'
     //,'phantomjs.cli.args':['--loglevel=DEBUG']
  }
  ,framework: 'jasmine'
  ,jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

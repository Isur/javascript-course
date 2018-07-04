//babel transpires before the test run
require('babel-register')();

//features that moca doesnt understand
require.extensions['.css'] = function(){};

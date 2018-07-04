//register babel to transpile before our tests run
require('babel-register')();

//disable weback features mocka dosent understand
require.extensions['.css'] = function() {};


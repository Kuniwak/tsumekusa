// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var Paragraph = tsumekusa.Paragraph;


module.exports = {
  'publish': function(test) {
    var p = new Paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    var CORRECT = [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu',
      'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in',
      'culpa qui officia deserunt mollit anim id est laborum.'
    ].join('\n');

    test.equal(p.publish(), CORRECT);
    test.done();
  },
  'publish without display size limit': function(test) {
    Paragraph.publisher.setDisplayWidth(Number.MAX_VALUE);
    var p = new Paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    var CORRECT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    test.equal(p.publish(), CORRECT);
    test.done();
  }
};



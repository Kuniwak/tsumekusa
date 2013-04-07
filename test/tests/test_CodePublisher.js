// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var Code = tsumekusa.Code;


module.exports = {
  'publish': function(test) {
    var CODE = [
      'function example() {',
      '  document.write("Hello, world!");',
      '}'
    ].join('\n');

    var code = new Code(CODE);

    test.equal(code.publish(), CODE);
    test.done();
  }
};

// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var InlineCode = tsumekusa.InlineCode;


module.exports = {
  'Publish an inline code': function(test) {
    var code = new InlineCode('foo.bar()');

    test.equal(code.publish(), '`foo.bar()`');
    test.done();
  }
};

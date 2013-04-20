// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var Strong = tsumekusa.Strong;


module.exports = {
  'Publish a strong': function(test) {
    var strong = new Strong('foo.bar');

    test.equal(strong.publish(), '#foo.bar#');
    test.done();
  }
};

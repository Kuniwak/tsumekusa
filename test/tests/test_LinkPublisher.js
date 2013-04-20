// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var Link = tsumekusa.Link;


module.exports = {
  'Publish a link': function(test) {
    var link = new Link('foo.bar');

    test.equal(link.publish(), '\\foo.bar\\');
    test.done();
  }
};

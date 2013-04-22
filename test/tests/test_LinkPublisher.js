// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var Link = tsumekusa.Link;
var Reference = tsumekusa.Reference;


module.exports = {
  'Publish a link': function(test) {
    var ref = new Reference('id', 'file_name.tsumekusa');
    var link = new Link(ref);

    test.equal(link.publish(), '\\id\\');
    test.done();
  },
  'Publish an URI link': function(test) {
    var link = new Link('http://www.example.com');

    test.equal(link.publish(), '\\http://www.example.com\\');
    test.done();
  }
};

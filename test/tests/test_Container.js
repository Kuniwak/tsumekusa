// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var Container = tsumekusa.Container;
var Document = tsumekusa.Document;


module.exports = {
  'Get a document': function(test) {
    var document = new Document('sample0');
    var container1 = new Container('sample1');
    var container2 = new Container('sample2');

    document.getSubContainers().addChild(container1);
    container1.getSubContainers().addChild(container2);

    test.equal(container2.getDocument(), document);
    test.done();
  }
};

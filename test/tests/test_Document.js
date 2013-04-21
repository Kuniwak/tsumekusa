// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib';
var tsumekusa = require(basePath);
var Document = tsumekusa.Document;
var Container = tsumekusa.Container;

module.exports = {
  'Get a reference helper': function(test) {
    var document = new Document('doc', 'doc.tsumekusa');
    var container1 = new Container('container1');
    var container2 = new Container('container2');
    var container3 = new Container('container3');

    document.getSubContainers().addChild(container1);
    container1.getSubContainers().addChild(container2);
    container2.getSubContainers().addChild(container3);

    test.equal(container3.getReferenceHelper(), document.getReferenceHelper());
    test.equal(container3.getReferenceHelper().getReference().getFileUri(), 'doc.tsumekusa');
    test.done();
  }
};

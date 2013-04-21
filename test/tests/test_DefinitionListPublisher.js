// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var Paragraph = tsumekusa.Paragraph;
var DefinitionList = tsumekusa.DefinitionList;
var ElementArray = tsumekusa.ElementArray;


module.exports = {
  'Publish a no-marker definition list': function(test) {
    var defList = new DefinitionList();

    var term1 = new Paragraph('Term1');
    var descs1 = new ElementArray();
    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    defList.addDefinition(term1, descs1);

    var term2 = new Paragraph('Term2');
    var descs2 = new ElementArray();
    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));
    defList.addDefinition(term2, descs2);

    var term3 = new Paragraph('Term3');
    var descs3 = new ElementArray();
    descs3.addChild(new Paragraph('Desc3-1'));
    descs3.addChild(new Paragraph('Desc3-2'));
    defList.addDefinition(term3, descs3);

    var CORRECT = [
      'Term1',
      '  Desc1-1',
      '',
      '  Desc1-2',
      '',
      'Term2',
      '  Desc2-1',
      '',
      '  Desc2-2',
      '',
      'Term3',
      '  Desc3-1',
      '',
      '  Desc3-2'
    ].join('\n');

    test.equal(defList.publish(), CORRECT);

    test.done();
  },
  'Publish an oredered definition list': function(test) {
    var defList = new DefinitionList(DefinitionList.ListType.ORDERED);

    var term1 = new Paragraph('Term1');
    var descs1 = new ElementArray();
    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    defList.addDefinition(term1, descs1);

    var term2 = new Paragraph('Term2');
    var descs2 = new ElementArray();
    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));
    defList.addDefinition(term2, descs2);

    var term3 = new Paragraph('Term3');
    var descs3 = new ElementArray();
    descs3.addChild(new Paragraph('Desc3-1'));
    descs3.addChild(new Paragraph('Desc3-2'));
    defList.addDefinition(term3, descs3);

    var CORRECT = [
      '1) Term1',
      '  Desc1-1',
      '',
      '  Desc1-2',
      '',
      '2) Term2',
      '  Desc2-1',
      '',
      '  Desc2-2',
      '',
      '3) Term3',
      '  Desc3-1',
      '',
      '  Desc3-2'
    ].join('\n');

    test.equal(defList.publish(), CORRECT);
    test.done();
  },
  'Publish an unordered definition list': function(test) {
    var defList = new DefinitionList(DefinitionList.ListType.UNORDERED);

    var term1 = new Paragraph('Term1');
    var descs1 = new ElementArray();
    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    defList.addDefinition(term1, descs1);

    var term2 = new Paragraph('Term2');
    var descs2 = new ElementArray();
    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));
    defList.addDefinition(term2, descs2);

    var term3 = new Paragraph('Term3');
    var descs3 = new ElementArray();
    descs3.addChild(new Paragraph('Desc3-1'));
    descs3.addChild(new Paragraph('Desc3-2'));
    defList.addDefinition(term3, descs3);

    var CORRECT = [
      '- Term1',
      '  Desc1-1',
      '',
      '  Desc1-2',
      '',
      '- Term2',
      '  Desc2-1',
      '',
      '  Desc2-2',
      '',
      '- Term3',
      '  Desc3-1',
      '',
      '  Desc3-2'
    ].join('\n');

    test.equal(defList.publish(), CORRECT);

    test.done();
  },
  'Publish a nested definition list': function(test) {
    var defList1 = new DefinitionList(DefinitionList.ListType.UNORDERED);
    var defList2 = new DefinitionList(DefinitionList.ListType.UNORDERED);

    var term1 = new Paragraph('Term1');
    var term2 = new Paragraph('Term2');
    var descs1 = new ElementArray();
    var descs2 = new ElementArray();

    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    descs1.addChild(defList2);

    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));

    defList1.addDefinition(term1, descs1);
    defList2.addDefinition(term2, descs2);

    var CORRECT = [
      '- Term1',
      '  Desc1-1',
      '',
      '  Desc1-2',
      '',
      '  - Term2',
      '    Desc2-1',
      '',
      '    Desc2-2'
    ].join('\n');

    test.equal(defList1.publish(), CORRECT);
    test.done();
  }
};

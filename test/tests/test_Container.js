// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib';
var tsumekusa = require(basePath);
var Container = tsumekusa.Container;
var Document = tsumekusa.Document;

var ReferenceHelper = require(basePath + '/references/ReferenceHelper');
var getReferenceHelper;


module.exports = {
  setUp: function(callback) {
    getReferenceHelper = tsumekusa.Element.prototype.getReferenceHelper;
    tsumekusa.Element.prototype.getReferenceHelper = function() {
      return new ReferenceHelper('file_name.tsumekusa');
    };
    callback();
  },
  tearDown: function(callback) {
    tsumekusa.Element.prototype.getReferenceHelper = getReferenceHelper;
    callback();
  },
  'Generate a reference ID by the caption (pascal case)': function(test) {
    var container = new Container('pascalCaseCaption');

    test.equal(container.getReferenceId(), 'pascal-case-caption');
    test.done();
  },
  'Generate a reference ID by the caption (hypenated words)': function(test) {
    var container = new Container('hypenated-words');

    test.equal(container.getReferenceId(), 'hypenated-words');
    test.done();
  },
  'Generate a reference ID by the caption': function(test) {
    var container = new Container('general caption');

    test.equal(container.getReferenceId(), 'general-caption');
    test.done();
  }
};

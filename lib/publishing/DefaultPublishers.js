// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Default element publisher map.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';


/**
 * Default element publisher map.
 * @namespace
 * @exports lib/publishing/DefaultsMap
 */
module.exports = {


  /**
   * Publisher for code elements.
   * @type {module:lib/publishing/CodePublisher}
   */
  CODE: require(basePath + '/publishing/CodePublisher').getInstance(),


  /**
   * Publisher for container elements.
   * @type {module:lib/publishing/ContainerPublisher}
   */
  CONTAINER: require(basePath + '/publishing/ContainerPublisher').getInstance(),


  /**
   * Publisher for elements of table of contents.
   * @type {module:lib/publishing/ContentsTablePublisher}
   */
  CONTENTS_TABLE: require(basePath +
      '/publishing/ContentsTablePublisher').getInstance(),


  /**
   * Publisher for definition elements.
   * @type {module:lib/publishing/DefinitionPublisher}
   */
  DEFINITION: require(basePath +
      '/publishing/DefinitionPublisher').getInstance(),


  /**
   * Publisher for definition list elements.
   * @type {module:lib/publishing/DefinitionListPublisher}
   */
  DEFINITION_LIST: require(basePath +
      '/publishing/DefinitionListPublisher').getInstance(),


  /**
   * Publisher for document elements.
   * @type {module:lib/publishing/DocumentPublisher}
   */
  DOCUMENT: require(basePath + '/publishing/DocumentPublisher').getInstance(),


  /**
   * Publisher for element arrays.
   * @type {module:lib/publishing/ElementArrayPublisher}
   */
  ELEMENT_ARRAY: require(basePath +
      '/publishing/ElementArrayPublisher').getInstance(),


  /**
   * Publisher for inline code elements.
   * @type {module:lib/publishing/InlineCodePublisher}
   */
  INLINE_CODE: require(basePath +
      '/publishing/InlineCodePublisher').getInstance(),


  /**
   * Publisher for link elements.
   * @type {module:lib/publishing/LinkPublisher}
   */
  LINK: require(basePath + '/publishing/LinkPublisher').getInstance(),


  /**
   * Publisher for list elements.
   * @type {module:lib/publishing/ListPublisher}
   */
  LIST: require(basePath + '/publishing/ListPublisher').getInstance(),


  /**
   * Publisher for list item elements.
   * @type {module:lib/publishing/ListItemPublisher}
   */
  LIST_ITEM: require(basePath + '/publishing/ListItemPublisher').getInstance(),


  /**
   * Publisher for paragraph elements.
   * @type {module:lib/publishing/ParagraphPublisher}
   */
  PARAGRAPH: require(basePath + '/publishing/ParagraphPublisher').getInstance(),


  /**
   * Publisher for preformatted paragraph elements.
   * @type {module:lib/publishing/PreformattedParagraphPublisher}
   */
  PREFORMATTED_PARAGRAPH: require(basePath +
      '/publishing/PreformattedParagraphPublisher').getInstance(),


  /**
   * Publisher for strong elements.
   * @type {module:lib/publishing/StrongPublisher}
   */
  STRONG: require(basePath + '/publishing/StrongPublisher').getInstance(),


  /**
   * Publisher for tag elements.
   * @type {module:lib/publishing/TagPublisher}
   */
  TAG: require(basePath + '/publishing/TagPublisher').getInstance()
};

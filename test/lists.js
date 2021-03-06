'use strict';

var isEqual = require('./support/is-equal');

describe('lists', function() {
  describe('li', function() {
    it('should convert a list item to markdown', function() {
      isEqual.inline('<li>Lorem ipsum dolor sit amet</li>', '* Lorem ipsum dolor sit amet\n');
    });
  });

  describe('ul', function() {
    it('should convert an unordered list to markdown', function() {
      isEqual.inline('<ul><li>Lorem ipsum dolor sit amet</li></ul>', '* Lorem ipsum dolor sit amet\n');
      isEqual('list-ul');
    });

    it('should convert an unordered list with attributes to markdown', function() {
      isEqual('list-ul-attributes', 'list-ul-attributes');
    });

    it('should convert an unordered list item with an anchor', function() {
      isEqual('list-ul-anchor');
    });

    it('should convert an unordered list item with anchor and code tags', function() {
      isEqual('list-ul-anchor-code');
      var fixture = `
        <ul>
          <li><a href="#foo">HTML <code> [hidden] </code> attribute</a></li>
        </ul>`;

      isEqual.inline(fixture, '* [HTML ` [hidden] ` attribute](#foo)');
    });

    it('should convert an unordered list with code', function() {
      isEqual('list-li-code');
    });

    it('should convert an unordered list with anchors to markdown', function() {
      isEqual('list-ul-anchors');
    });

    it('should handle text nodes in complex nested lists', function() {
      isEqual('list-nav-nested');
    });
  });

  describe('ol', function() {
    it('should convert an ordered list to markdown', function() {
      isEqual('list-ol');
    });

    it('should convert an ordered list with attributes to markdown', function() {
      isEqual('list-ol-attributes');
    });

    it('should convert nested lists to markdown', function() {
      isEqual('list-nested');
    });

    it('should convert multiple nested lists separated by text to markdown', function() {
      isEqual('list-nested-text');
    });
  });
});

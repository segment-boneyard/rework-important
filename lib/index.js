
/**
 * Module dependencies.
 */

var visit = require('rework-visit');

/**
 * Append `!important` to every rule.
 *
 *
 *      selector {
 *        property: baz;
 *      }
 *
 * yields
 *
 *     selector {
  *       property: baz !important;
 *     }
 *
 *
 * @return {Function}
 * @api public
 */

module.exports = function(){
  return function(style){
    visit(style, important);
  };
};

/**
 * Append important to all property values.
 *
 * @param {Array} declarations
 * @api private
 */

function important(declarations){
  for (var i = 0; i < declarations.length; ++i) {
    var decl = declarations[i];
    var value = decl.value;
    if (!value) continue;
    if ('comment' == decl.type) continue;
    if (~value.indexOf('important')) continue;
    decl.value += ' !important';
  }
}

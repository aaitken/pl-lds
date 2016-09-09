(function() {
  var templates;

  templates = PLP.namespace('templates');

  templates['expenses-table-body-row'] = "<td><div class=\"slds-truncate\"><%= content[0] %></div></td>\n<td><div class=\"slds-truncate\"><%= content[1] %></div></td>\n<td><div class=\"slds-truncate\"></div></td>\n<td><div class=\"slds-truncate\"></div></td>\n<td><div class=\"slds-truncate\"></div></td>\n<td><div class=\"slds-truncate\"></div></td>";

}).call(this);

(function() {
  var templates;

  templates = PLP.namespace('templates');

  templates['text-field'] = "<div class=\"slds-form-element\">\n  <div class=\"slds-form-element__control\">\n    <input id=\"text-input-01\" class=\"slds-input\" type=\"text\" value=\"<%= content %>\">\n  </div>\n</div>";

}).call(this);

(function() {
  var templates;

  templates = PLP.namespace('templates');

  templates['tooltip'] = "<div class=\"slds-popover__body\"><%= content %></div>";

}).call(this);

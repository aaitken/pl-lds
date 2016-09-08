(function() {
  var templates;

  templates = PLP.namespace('templates');

  templates['expenses-table-body-row'] = "<tr>\n  <td><div class=\"slds-truncate\"><%= content[0] %></div></td>\n  <td><div class=\"slds-truncate\"><%= content[1] %></div></td>\n  <td><div class=\"slds-truncate\"></div></td>\n  <td><div class=\"slds-truncate\"></div></td>\n  <td><div class=\"slds-truncate\"></div></td>\n  <td><div class=\"slds-truncate\"></div></td>\n</tr>";

}).call(this);
;(function() {
  var templates;

  templates = PLP.namespace('templates');

  templates['info-icon'] = "<span class=\"slds-icon_container\">\n  <svg aria-hidden=\"true\" class=\"slds-icon slds-icon-text-default\">\n    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#info\"></use>\n  </svg>\n</span>";

}).call(this);
;(function() {
  var templates;

  templates = PLP.namespace('templates');

  templates['text-field'] = "<div class=\"slds-form-element\">\n  <div class=\"slds-form-element__control\">\n    <input id=\"text-input-01\" class=\"slds-input\" type=\"text\" value=\"\">\n  </div>\n</div>";

}).call(this);
;(function() {
  var templates;

  templates = PLP.namespace('templates');

  templates['yes-no-select'] = "<div class=\"slds-form-element__control\">\n  <div class=\"slds-select_container\">\n    <select id=\"select-01\" class=\"slds-select\">\n      <option>Yes</option>\n      <option>No</option>\n    </select>\n  </div>\n</div>";

}).call(this);

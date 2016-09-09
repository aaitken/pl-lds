(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['analysis-title-button'] = "<button class=\"slds-button slds-button--icon-border-filled\" aria-haspopup=\"true\">\n  <svg aria-hidden=\"true\" class=\"slds-button__icon\">\n    <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n  </svg>\n  <span class=\"slds-assistive-text\">Show More</span>\n</button>\n<div class=\"slds-dropdown slds-dropdown--left\">\n  <ul class=\"dropdown__list\" role=\"menu\">\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"0\">\n        <span class=\"slds-truncate\">Menu Item One</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Menu Item Two</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Menu Item Three</span>\n      </a>\n    </li>\n    <li class=\"slds-has-divider--top-space\" role=\"separator\"></li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Menu Item Four</span>\n      </a>\n    </li>\n  </ul>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['info-icon'] = "<svg aria-hidden=\"true\" class=\"slds-icon slds-icon--x-small slds-icon-text-default\">\n  <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#info\"></use>\n</svg>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['yes-no-select'] = "<div class=\"slds-form-element__control\">\n  <div class=\"slds-select_container\">\n    <select id=\"select-01\" class=\"slds-select\">\n      <option>Yes</option>\n      <option>No</option>\n    </select>\n  </div>\n</div>";

}).call(this);

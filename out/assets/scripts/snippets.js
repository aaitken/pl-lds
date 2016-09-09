(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['analysis-title-button'] = "<button class=\"slds-button slds-button--icon-border-filled\" aria-haspopup=\"true\">\n  <svg aria-hidden=\"true\" class=\"slds-button__icon\">\n    <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n  </svg>\n  <span class=\"slds-assistive-text\">Show More</span>\n</button>\n<div class=\"slds-dropdown slds-dropdown--left slds-dropdown--small\">\n  <ul class=\"dropdown__list\" role=\"menu\">\n    <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">\n        <span class=\"slds-truncate\">\n          <svg aria-hidden=\"true\" class=\"slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small\">\n            <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#check\"></use>\n          </svg>\n          <span>Analysis 1<br>\n          CentrePoint 1, CenterPoint 2<br>\n          5 Separate Units<span>\n          </span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">\n          <svg aria-hidden=\"true\" class=\"slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small\">\n            <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#check\"></use>\n          </svg>\n          <span>Analysis 2<br>\n          CentrePoint 1<br>\n          3 Combined Units<span>\n          </span>\n          </span>\n      </a>\n    </li>\n    <li class=\"slds-has-divider--top-space\" role=\"separator\"></li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">\n        <svg aria-hidden=\"true\" class=\"slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small\">\n            <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#check\"></use>\n          </svg>\n        New Analysis</span>\n      </a>\n    </li>\n  </ul>\n</div>";

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

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['analysis-title-menu'] = "<button class=\"slds-button slds-button--icon-border-filled\" aria-haspopup=\"true\">\n  <svg aria-hidden=\"true\" class=\"slds-button__icon\">\n    <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n  </svg>\n  <span class=\"slds-assistive-text\">Show More</span>\n</button>\n<div class=\"slds-dropdown slds-dropdown--left slds-dropdown--small\">\n  <ul class=\"dropdown__list\" role=\"menu\">\n    <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">\n        <span class=\"slds-truncate\">\n          <svg aria-hidden=\"true\" class=\"slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small\">\n            <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#check\"></use>\n          </svg>\n          <span>Analysis 1<br>\n          CentrePoint 1, CenterPoint 2<br>\n          5 Separate Units<span>\n          </span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">\n          <svg aria-hidden=\"true\" class=\"slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small\">\n            <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#check\"></use>\n          </svg>\n          <span>Analysis 2<br>\n          CentrePoint 1<br>\n          3 Combined Units<span>\n          </span>\n          </span>\n      </a>\n    </li>\n    <li class=\"slds-has-divider--top-space\" role=\"separator\"></li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">\n        <svg aria-hidden=\"true\" class=\"slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small\">\n            <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#check\"></use>\n          </svg>\n        Create New Analysis</span>\n      </a>\n    </li>\n  </ul>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['analysis-title-settings'] = "<button  class=\"slds-button slds-button--icon-container\" aria-haspopup=\"true\">\n  <svg aria-hidden=\"true\" class=\"slds-button__icon\">\n    <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#settings\"></use>\n  </svg>\n</button>\n<div class=\"slds-dropdown slds-dropdown--left slds-nubbin--top-left\">\n  <ul class=\"dropdown__list\" role=\"menu\">\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"0\">\n        <span class=\"slds-truncate\">Modify Units and Settings</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Modify Budget</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Rename</span>\n      </a>\n    </li>\n  </ul>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['info-icon'] = "<svg aria-hidden=\"true\" class=\"slds-icon slds-icon--x-small slds-icon-text-default\">\n  <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#info\"></use>\n</svg>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['validation-switch'] = "<label class=\"slds-checkbox--toggle slds-grid\">\n  <span class=\"slds-form-element__label slds-m-bottom--none\">Approval Submission Validation</span>\n  <input name=\"checkbox\" type=\"checkbox\" aria-describedby=\"toggle-desc\">\n  <span id=\"toggle-desc\" class=\"slds-checkbox--faux_container\" aria-live=\"assertive\">\n    <span class=\"slds-checkbox--faux\"></span>\n  </span>\n</label>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['yes-no-select'] = "<div class=\"slds-form-element__control\">\n  <div class=\"slds-select_container\">\n    <select id=\"select-01\" class=\"slds-select\">\n      <option>Yes</option>\n      <option>No</option>\n    </select>\n  </div>\n</div>";

}).call(this);

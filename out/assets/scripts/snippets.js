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

  snippets['commissions-placeholder'] = "[Commissions]";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['deal-reports-btn'] = "<button class=\"plp-deal-reports-button slds-button\">\n  Deal Reports\n  <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--right\">\n    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n  </svg>\n</button>\n<div class=\"slds-dropdown slds-dropdown--right\">\n<ul class=\"dropdown__list\" role=\"menu\">\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">Deal Summary</a>\n  </li>\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">Lease Abstract</a>\n  </li>\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">OA Deal Summary</a>\n  </li>\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">Cash Flow</a>\n  </li>\n</ul>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['expenses-hanging-rack'] = "<h1 class=\"slds-text-heading--small slds-m-bottom--medium\" style=\"font-weight:regular\">Expense Recoveries</h1>\n<form class=\"slds-form--inline slds-m-bottom--medium\">\n  <div class=\"slds-form-element\">\n    <label class=\"slds-form-element__label\" for=\"name\">Expense Base Year</label>\n    <div class=\"slds-form-element__control\">\n      <input id=\"name\" class=\"slds-input\" type=\"text\" />\n    </div>\n  </div>\n  <div class=\"slds-form-element\">\n    <label class=\"slds-form-element__label\" for=\"email\">Lease Type</label>\n    <div class=\"slds-form-element__control\">\n      <div class=\"slds-select_container\">\n        <select id=\"select-01\" class=\"slds-select\">\n          <option>Gross</option>\n          <option>mgpm</option>\n          <option>modgross</option>\n          <option>nnn</option>\n          <option>nnnpm</option>\n        </select>\n      </div>\n    </div>\n  </div>\n</form>\n<table id=\"expenses-table\" class=\"slds-m-bottom--x-large slds-table slds-table--bordered slds-no-row-hover\">\n  <thead data-view=\"expenses-table-head\" id=\"expenses-table-head\">\n    <tr class=\"slds-text-heading--label\">\n      <th width=\"25%\" valign=\"top\">\n        <div class=\"slds-truncate\"><span>Expense Category</span></div>\n      </th>\n      <th width=\"17%\" valign=\"top\">\n        <div class=\"slds-truncate\"><span>Budgeted</span><br><span>OpEx</span></div>\n      </th>\n      <th width=\"14.5%\" valign=\"top\">\n        <div class=\"slds-truncate\"><span>Recoverable</span><br>Outside Rent</div>\n      </th>\n      <th width=\"14.5%\" valign=\"top\">\n        <div class=\"slds-truncate\"><span>Expense Stop</span></div>\n      </th>\n      <th width=\"14.5%\" valign=\"top\">\n        <div class=\"slds-truncate\"><span>Stop Amount</span></div>\n      </th>\n      <th width=\"14.5%\" valign=\"top\">\n        <div class=\"slds-truncate\"><span>Cap</span></div>\n      </th>\n    </tr>\n  </thead>\n  <tbody id=\"expenses-table-body\">\n    <tr style=\"height: 49px\">\n      <td class=\"slds-text-heading--label\">OpEx and Stop Totals</td>\n      <td>100</td>\n      <td></td>\n      <td></td>\n      <td>100000</td>\n      <td></td>\n    </tr>\n  </tbody>\n</table>\n<h1 class=\"slds-text-heading--small slds-m-bottom--medium\" style=\"font-weight:regular\">Comments</h1>\n<div class=\"slds-form-element\">\n  <div class=\"slds-form-element__control\">\n    <textarea class=\"slds-textarea\" placeholder=\"Add expense comments here.\"></textarea>\n  </div>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['guarantees-placeholder'] = "[Guarantees]";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['info-icon'] = "<svg aria-hidden=\"true\" class=\"slds-icon slds-icon--x-small slds-icon-text-default\">\n  <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#info\"></use>\n</svg>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['options-add-option-btn'] = "<button class=\"slds-button slds-button--neutral\">Add Option\n  <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--right\">\n    <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n  </svg>\n</button>\n<div class=\"slds-dropdown slds-dropdown--left\">\n  <ul class=\"dropdown__list slds-dropdown--length-5\" role=\"menu\">\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"0\">\n        <span class=\"slds-truncate\">Termination</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Contraction</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Cancellation</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Right to Notice of Sale</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"0\">\n        <span class=\"slds-truncate\">Right to Parking</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Relocation</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Right to Remeasure</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Right of First Offer to Purchase</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"0\">\n        <span class=\"slds-truncate\">Purchase</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Expansion</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Renewal</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">ROFO</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">ROFR</span>\n      </a>\n    </li>\n  </ul>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['options'] = "<h1 class=\"slds-text-heading--small slds-m-bottom--medium\" style=\"font-weight:regular\">Option Types and Details</h1>\n<h1 class=\"slds-text-heading--small slds-m-bottom--medium\" style=\"font-weight:regular\">Comments</h1>\n<div class=\"slds-form-element\">\n  <div class=\"slds-form-element__control\">\n    <textarea class=\"slds-textarea\" placeholder=\"Add options comments here.\"></textarea>\n  </div>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['rent-indexation-placeholder'] = "[Rent Indexation]";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['rents-and-incentives-placeholder'] = "[Rents and Incentives]";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['submenu'] = "<a data-id=\"units\" class=\"plp-bold-for-sizing\">Units</a>\n<span>|</span>\n<a data-id=\"rents-and-incentives\" class=\"plp-bold-for-sizing\">Rents &amp; Incentives</a>\n<span>|</span>\n<a data-id=\"tenant-improvements\" class=\"plp-bold-for-sizing\">Tenant Improvements</a>\n<span>|</span>\n<a data-id=\"commissions\" class=\"plp-bold-for-sizing\">Commissions</a>\n<span>|</span>\n<a data-id=\"expenses\" class=\"plp-bold-for-sizing\">Expenses</a>\n<span>|</span>\n<a data-id=\"rent-indexation\" class=\"plp-bold-for-sizing\">Rent Indexation</a>\n<span>|</span>\n<a data-id=\"guarantees\" class=\"plp-bold-for-sizing\">Guarantees</a>\n<span>|</span>\n<a data-id=\"options\" class=\"plp-bold-for-sizing\">Options</a>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['tenant-improvements-placeholder'] = "[Tenant Improvements]";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['units-placeholder'] = "[Units]";

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

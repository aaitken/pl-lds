(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['expenses-deal-reports-btn'] = "<button class=\"plp-deal-reports-button slds-button slds-button--neutral\">\n  Deal Reports\n  <svg aria-hidden=\"true\" class=\"slds-button__icon slds-button__icon--right\">\n    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#down\"></use>\n  </svg>\n</button>\n<div class=\"slds-dropdown slds-dropdown--right\">\n<ul class=\"dropdown__list\" role=\"menu\">\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">Deal Summary</a>\n  </li>\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">Lease Abstract</a>\n  </li>\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">OA Deal Summary</a>\n  </li>\n  <li class=\"slds-dropdown__item slds-is-selected\" role=\"presentation\">\n    <a href=\"javascript:void(0);\" role=\"menuitemcheckbox\" aria-checked=\"true\" tabindex=\"0\">Cash Flow</a>\n  </li>\n</ul>\n</div>";

}).call(this);

(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['analysis-title-settings'] = "<button  class=\"slds-button slds-button--icon-container\" aria-haspopup=\"true\">\n  <svg aria-hidden=\"true\" class=\"slds-button__icon\">\n    <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#settings\"></use>\n  </svg>\n</button>\n<div class=\"slds-dropdown slds-dropdown--left slds-nubbin--top-left\">\n  <ul class=\"dropdown__list\" role=\"menu\">\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"0\">\n        <span class=\"slds-truncate\">Modify Units and Settings</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Modify Budget</span>\n      </a>\n    </li>\n    <li class=\"slds-dropdown__item\" role=\"presentation\">\n      <a href=\"javascript:void(0);\" role=\"menuitem\" tabindex=\"-1\">\n        <span class=\"slds-truncate\">Rename</span>\n      </a>\n    </li>\n  </ul>\n</div>";

}).call(this);

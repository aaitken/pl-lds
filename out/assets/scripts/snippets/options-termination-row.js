(function() {
  var snippets;

  snippets = PLP.namespace('snippets');

  snippets['options-termination-row'] = "<tr class=\"slds-text-heading--label\">\n  <td>\n    <div class=\"slds-form-element__control\">\n      <div class=\"slds-select_container\">\n        <select id=\"select-01\" class=\"slds-select\">\n          <option></option>\n          <option>Tenant</option>\n          <option>Landlord</option>\n          <option>Tenant/Landlord</option>\n        </select>\n      </div>\n    </div>\n  </td>\n  <td>\n    <div class=\"slds-form-element\">\n      <div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon--right\">\n        <svg aria-hidden=\"true\" class=\"slds-input__icon slds-icon--x-small\">\n          <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#dayview\"></use>\n        </svg>\n        <input id=\"text-input-01\" class=\"slds-input\" type=\"text\" />\n      </div>\n    </div>\n  </td>\n  <td>\n        <div class=\"slds-form-element__control\" style=\"display:inline-block; min-width:5.75rem\">\n          <input type=\"number\" min=\"1\" max=\"36\" id=\"input-02\" class=\"slds-input\" placeholder=\"Months\" />\n        </div>\n        <div style=\"display:inline-block;text-transform: none;padding:0 .25rem\">\n          or\n        </div>\n        <div class=\"slds-form-element__control\" style=\"display:inline-block\">\n        <div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon--right\">\n          <svg aria-hidden=\"true\" class=\"slds-input__icon slds-icon--x-small\">\n            <use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#dayview\"></use>\n          </svg>\n          <input id=\"text-input-01\" class=\"slds-input\" type=\"text\" placeholder=\"Date\" />\n      </div> \n        </div>\n    </div>\n  </td>\n  <td>\n    <fieldset class=\"slds-form-element slds-has-error\">\n      <div class=\"slds-form-element__control\">\n        <div class=\"slds-checkbox--button-group\">\n          <span class=\"slds-button slds-checkbox--button\" for=\"monday\">\n            <input name=\"checkbox\" type=\"checkbox\" id=\"monday\" aria-describedby=\"error_01\" />\n            <label class=\"slds-checkbox--button__label\" for=\"monday\">\n              <span class=\"slds-checkbox--faux\" style=\"text-transform:none\">Rolling</span>\n            </label>\n          </span>\n          <span class=\"slds-button slds-checkbox--button\" for=\"tuesday\">\n            <input name=\"checkbox\" type=\"checkbox\" id=\"tuesday\" aria-describedby=\"error_01\" />\n            <label class=\"slds-checkbox--button__label\" for=\"tuesday\">\n              <span class=\"slds-checkbox--faux\" style=\"text-transform:none\" title=\"Unamortized Tenant Improvements\">Unam. TIs</span>\n            </label>\n          </span>\n          <span class=\"slds-button slds-checkbox--button\" for=\"wednesday\">\n            <input name=\"checkbox\" type=\"checkbox\" id=\"wednesday\" aria-describedby=\"error_01\" />\n            <label class=\"slds-checkbox--button__label\" for=\"wednesday\">\n              <span class=\"slds-checkbox--faux\" style=\"text-transform:none\">Unam. LCs</span>\n            </label>\n          </span>\n        </div>\n      </div>\n    </fieldset>\n  </td>\n  <td>\n    <div class=\"slds-form-element\">\n      <div class=\"slds-form-element__control\">\n        <input id=\"text-input-01\" class=\"slds-input\" type=\"text\" value=\"\">\n      </div>\n    </div>\n  </td>\n  <td>\n    \n  </td>\n  <td>\n    <span class=\"slds-icon_container\">\n      <svg aria-hidden=\"true\" class=\"slds-icon slds-icon-text-default  slds-icon--x-small\">\n        <use data-id=\"trash\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#delete\"></use>\n      </svg>\n    </span>\n  </td>\n</tr>";

}).call(this);
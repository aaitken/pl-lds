snippets = PLP.namespace('snippets')

snippets['options-termination-row'] = """
  <tr>
    <td valign="top">
      <div class="slds-form-element__control">
        <div class="slds-select_container">
          <select id="select-01" class="slds-select">
            <option></option>
            <option>Tenant</option>
            <option>Landlord</option>
            <option>Tenant/Landlord</option>
          </select>
        </div>
      </div>
    </td>
    <td valign="top">
      <div class="slds-form-element">
        <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
          <svg aria-hidden="true" class="slds-input__icon slds-icon--x-small">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#dayview"></use>
          </svg>
          <input id="text-input-01" class="slds-input" type="text" />
        </div>
      </div>
    </td>
    <td valign="top">
      <div class="slds-form-element__control" style="display:inline-block; min-width:5.75rem">
        <input type="number" min="1" max="36" id="input-02" class="slds-input" placeholder="Months" />
      </div>
      <div style="display:inline-block;text-transform: none;padding:0 .25rem">
        or
      </div>
      <div class="slds-form-element__control" style="display:inline-block">
        <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
          <svg aria-hidden="true" class="slds-input__icon slds-icon--x-small">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#dayview"></use>
          </svg>
          <input id="text-input-01" class="slds-input" type="text" placeholder="Date" />
        </div> 
      </div>
    </td>
    <td valign="top">
      <div class="slds-form-element__control">
        <label class="slds-checkbox" for="opportunities-ownership">
          <input name="default" type="checkbox" id="opportunities-ownership">
          <span class="slds-checkbox--faux"></span>
          <span class="slds-form-element__label">Rolling Option</span>
        </label>
        <label class="slds-checkbox" for="contact-ownership">
          <input name="default" type="checkbox" id="contact-ownership">
          <span class="slds-checkbox--faux"></span>
          <span class="slds-form-element__label">Unamortized TIs</span>
        </label>
        <label class="slds-checkbox" for="contact-ownership">
          <input name="default" type="checkbox" id="contact-ownership">
          <span class="slds-checkbox--faux"></span>
          <span class="slds-form-element__label">Unamortized LCs</span>
        </label>
      </div>
    </td>
    <td valign="top">
      <div class="slds-form-element">
        <div class="slds-form-element__control">
          <input id="text-input-01" class="slds-input" type="text" value="">
        </div>
      </div>
    </td>
    <td>
      
    </td>
    <td valign="top">
      <span class="slds-icon_container">
        <svg aria-hidden="true" class="slds-icon slds-icon-text-default  slds-icon--x-small">
          <use data-id="trash" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
        </svg>
      </span>
    </td>
  </tr>
  """

snippets = PLP.namespace('snippets')

snippets['options-termination-row'] = """
  <tr class="slds-text-heading--label">
    <td>
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
    <td>
      <div class="slds-form-element">
        <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
          <svg aria-hidden="true" class="slds-input__icon slds-icon--x-small">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#dayview"></use>
          </svg>
          <input id="text-input-01" class="slds-input" type="text" />
        </div>
      </div>
    </td>
    <td>
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
      </div>
    </td>
    <td>
      <fieldset class="slds-form-element slds-has-error">
        <div class="slds-form-element__control">
          <div class="slds-checkbox--button-group">
            <span class="slds-button slds-checkbox--button" for="monday">
              <input name="checkbox" type="checkbox" id="monday" aria-describedby="error_01" />
              <label class="slds-checkbox--button__label" for="monday">
                <span class="slds-checkbox--faux" style="text-transform:none">Rolling</span>
              </label>
            </span>
            <span class="slds-button slds-checkbox--button" for="tuesday">
              <input name="checkbox" type="checkbox" id="tuesday" aria-describedby="error_01" />
              <label class="slds-checkbox--button__label" for="tuesday">
                <span class="slds-checkbox--faux" style="text-transform:none" title="Unamortized Tenant Improvements">Unam. TIs</span>
              </label>
            </span>
            <span class="slds-button slds-checkbox--button" for="wednesday">
              <input name="checkbox" type="checkbox" id="wednesday" aria-describedby="error_01" />
              <label class="slds-checkbox--button__label" for="wednesday">
                <span class="slds-checkbox--faux" style="text-transform:none">Unam. LCs</span>
              </label>
            </span>
          </div>
        </div>
      </fieldset>
    </td>
    <td>
      <div class="slds-form-element">
        <div class="slds-form-element__control">
          <input id="text-input-01" class="slds-input" type="text" value="">
        </div>
      </div>
    </td>
    <td>
      
    </td>
    <td>
      <span class="slds-icon_container">
        <svg aria-hidden="true" class="slds-icon slds-icon-text-default  slds-icon--x-small">
          <use data-id="trash" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
        </svg>
      </span>
    </td>
  </tr>
  """

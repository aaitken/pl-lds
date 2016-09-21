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
      <div class="slds-form-element">
          <div class="slds-form-element__control" style="display:inline-block">
            <div class="slds-select_container">
              <select id="select-01" class="slds-select">
                <option></option>
                <option>Months from Start</option>
                <option>Notice Date</option>
              </select>
            </div>
          </div>
          <div class="slds-form-element__control" style="display:inline-block">
            <input id="input-02" class="slds-input" type="text" />
          </div>
        </div>
      </div>
    </td>
    <td>
      <div class="slds-form-element">
        <div class="slds-form-element__control">
          <input id="text-input-01" class="slds-input" type="text" value="">
        </div>
      </div>
    </td>
    <td>
      <div class="slds-form-element">
        <div class="slds-form-element__control">
          <input id="text-input-01" class="slds-input" type="text" value="">
        </div>
      </div>
    </td>
    <td>
      <div class="slds-form-element">
        <div class="slds-form-element__control">
          <input id="text-input-01" class="slds-input" type="text" value="">
        </div>
      </div>
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

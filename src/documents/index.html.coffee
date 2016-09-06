--- cson

layout: 'default'
headerIcon: '<span class="slds-icon_container" style="position:absolute; margin: -.1rem 0 0 .5rem" ><svg aria-hidden="true" class="slds-icon slds-icon-text-default slds-icon--x-small"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use></svg></span>'
yesNoSelect: '<div class="slds-form-element__control">
    <div class="slds-select_container">
      <select id="select-01" class="slds-select">
        <option></option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
  </div>'
textField: '<div class="slds-form-element">
    <div class="slds-form-element__control">
      <input id="text-input-01" class="slds-input" type="text" placeholder="" />
    </div>
  </div>'

---

h1 class:"slds-text-heading--large", "Tell me this!"

table class:"slds-table slds-table--bordered slds-table--cell-buffer slds-no-row-hover", ->
  thead ->
    tr class:"slds-text-heading--label", ->
      for heading in [
        ['20', 'Expense Category']
        ['18', "Current Year Avg.#{@document.headerIcon}<br>Budgeted OpEx"]
        ['18', "Recoverable Outside#{@document.headerIcon}<br>of Base Rent"]
        ['16', "Expense Stop#{@document.headerIcon}"]
        ['14', "Stop Amount#{@document.headerIcon}"]
        ['14', "Cap#{@document.headerIcon}"]]
        th width:"#{heading[0]}%", valign:"top", ->
          div class:"slds-truncate", heading[1]
  tbody ->
    for row in [
      ['Common Area Maintenance', '0.0000', @document.yesNoSelect, @document.yesNoSelect, @document.textField, @document.yesNoSelect]
      ['Insurance', '0.0000', @document.yesNoSelect, @document.yesNoSelect, @document.textField, @document.yesNoSelect]
      ['Property Taxes', '0.0000', @document.yesNoSelect, @document.yesNoSelect, @document.textField, @document.yesNoSelect]
      ['Utilities', '0.0000', @document.yesNoSelect, @document.yesNoSelect, @document.textField, @document.yesNoSelect]
      ['Management Fees', '0.0000', @document.yesNoSelect, @document.yesNoSelect, @document.textField, @document.yesNoSelect]
      ['Amortized CAM Recoveries', '0.0000', @document.yesNoSelect, @document.yesNoSelect, @document.textField, @document.yesNoSelect]
      ['Tarmac', '0.0000', @document.yesNoSelect, @document.yesNoSelect, @document.textField, @document.yesNoSelect]]
      tr ->
        for val in row
          td ->
            div class:"slds-truncate", val
            
       

      

    



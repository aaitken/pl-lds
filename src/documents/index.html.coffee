--- cson

layout: 'default'

snippets:
  common: ''
  expenses:
    headerIcon: """
      <span class="slds-icon_container" style="position:absolute; margin: -.1rem 0 0 .75rem" >
        <svg aria-hidden="true" class="slds-icon slds-icon-text-default slds-icon--x-small">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
        </svg>
      </span>"""
    ynSelect: """
      <div class="slds-form-element__control">
        <div class="slds-select_container">
          <select id="select-01" class="slds-select">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>"""
    textField: """<div class="slds-form-element">
        <div class="slds-form-element__control">
          <input id="text-input-01" class="slds-input" type="text" placeholder="" />
        </div>
      </div>"""
    dropdown: """
      <div class="slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open", style="position:absolute; margin: -.1rem 0 0 2.5rem">
        <button id="btn-override" class="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true">
          <svg aria-hidden="true" class="slds-button__icon">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Show More</span>
        </button>
      </div> """

---

h1 class:"slds-text-heading--small slds-m-bottom--medium", style:"font-weight:regular" , "Settings and Selections"

form ".slds-form--inline.slds-m-bottom--medium", ->
  div ".slds-form-element", ->
    label ".slds-form-element__label", for: "name", "Expense Base Year"
    div ".slds-form-element__control", ->
      input "#name.slds-input", type: "text"
  div ".slds-form-element", ->
    label ".slds-form-element__label", for: "email", "Email"
    div ".slds-form-element__control", ->
      div ".slds-select_container", ->
        select "#select-01.slds-select", ->
          option "Gross"
          option "mgpm"
          option "modgross"
          option "nnn"
          option "nnnpm"

table class:"slds-m-bottom--x-large slds-table slds-table--bordered slds-table--cell-buffer slds-no-row-hover", ->
  thead ->
    tr class:"slds-text-heading--label", ->
      icon = @document.snippets.expenses.headerIcon
      for heading in [
        ['25', 'Expense Category']
        ['17', "Budgeted#{icon}#{@document.snippets.expenses.dropdown}<br>OpEx"]
        ['14.5', "Recoverable#{icon}<br>Outside Rent"]
        ['14.5', "Expense Stop#{icon}"]
        ['14.5', "Stop Amount#{icon}"]
        ['14.5', "Cap#{icon}"]]
        th width:"#{heading[0]}%", valign:"top", ->
          div class:"slds-truncate", heading[1]
  tbody ->
    ynSelect = @document.snippets.expenses.ynSelect
    textField = @document.snippets.expenses.textField
    for row in [
      ['Common Area Maintenance', '0.0000', ynSelect, ynSelect, textField, ynSelect]
      ['Insurance', '0.0000', ynSelect, ynSelect, textField, ynSelect]
      ['Property Taxes', '0.0000', ynSelect, ynSelect, textField, ynSelect]
      ['Utilities', '0.0000', ynSelect, ynSelect, textField, ynSelect]
      ['Management Fees', '0.0000', ynSelect, ynSelect, textField, ynSelect]
      ['Amortized CAM Recoveries', '0.0000', ynSelect, ynSelect, textField, ynSelect]
      ['Tarmac', '0.0000', ynSelect, ynSelect, textField, ynSelect]]
      tr ->
        for val in row
          td ->
            div class:"slds-truncate", val
    tr style:"height: 49px", ->
      td class:"slds-text-heading--label", "OpEx and Stop Totals"      
      td "100"      
      td ""      
      td ""      
      td "100000"      
      td ""      

h1 class:"slds-text-heading--small slds-m-bottom--medium", style:"font-weight:regular" , "Comments"
div class:"slds-form-element", ->
  div class:"slds-form-element__control", ->
    textarea class:"slds-textarea", placeholder:"Add expense comments here."
       

      

    



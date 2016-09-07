--- cson

layout: 'default'

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
      infoIcon = 'expenses/header-info-icon'
      dropdown = 'expenses/dropdown'
      for heading in [
        ['25', 'Expense Category']
        ['17', "Budgeted#{@partial(infoIcon)}#{@partial(dropdown)}<br>OpEx"]
        ['14.5', "Recoverable#{@partial(infoIcon)}<br>Outside Rent"]
        ['14.5', "Expense Stop#{@partial(infoIcon)}"]
        ['14.5', "Stop Amount#{@partial(infoIcon)}"]
        ['14.5', "Cap#{@partial(infoIcon)}"]]
        th width:"#{heading[0]}%", valign:"top", ->
          div class:"slds-truncate", heading[1]
  tbody ->
    ynSelect = 'expenses/yes-no-select'
    textField = 'expenses/text-field'
    for row in [
      ['Common Area Maintenance', '0.0000', @partial(ynSelect), @partial(ynSelect), @partial(textField), @partial(ynSelect)]
      ['Insurance', '0.0000', @partial(ynSelect), @partial(ynSelect), @partial(textField), @partial(ynSelect)]
      ['Property Taxes', '0.0000', @partial(ynSelect), @partial(ynSelect), @partial(textField), @partial(ynSelect)]
      ['Utilities', '0.0000', @partial(ynSelect), @partial(ynSelect), @partial(textField), @partial(ynSelect)]
      ['Management Fees', '0.0000', @partial(ynSelect), @partial(ynSelect), @partial(textField), @partial(ynSelect)]
      ['Amortized CAM Recoveries', '0.0000', @partial(ynSelect), @partial(ynSelect), @partial(textField), @partial(ynSelect)]
      ['Tarmac', '0.0000', @partial(ynSelect), @partial(ynSelect), @partial(textField), @partial(ynSelect)]]
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
       

      

    



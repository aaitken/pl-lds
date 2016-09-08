--- cson

layout: 'default'

---


ul ".slds-m-bottom--x-large.slds-tabs--default__nav", role: "tablist", ->
  li ".slds-tabs--default__item.slds-text-title--caps", ->
    a ".slds-tabs--default__link", "Overview"
  li ".slds-tabs--default__item.slds-text-title--caps.slds-active", ->
    a ".slds-tabs--default__link", "Analysis"
  li ".slds-tabs--default__item.slds-text-title--caps", ->
    a ".slds-tabs--default__link", "Approval"

div class:"slds-m-bottom--large", ->
  h1 class:"slds-text-heading--medium", "Analysis 1"
  div class:"slds-button-group plp-right plp-analysis-level-buttons", role: "group", ->
    button ".slds-button.slds-button--neutral", "Refresh"
    button ".slds-button.slds-button--neutral", "Edit"
    button ".slds-button.slds-button--neutral", "Save" 

div class:"slds-m-bottom--x-large plp-kpi-container", ->
  img src:"/assets/images/KPIs.png" 
  

div class:"plp-submenu slds-m-bottom--x-large slds-text-title", ->
  a "Units"
  span "|"
  a "Rents & Incentives"
  span "|"
  a "Tenant Improvements"
  span "|"
  a "Commissions"
  span "|"
  a class:"plp-is-active", "Expenses"
  span "|"
  a "Rent Indexation"
  span "|"
  a "Guarantees"
  span "|"
  a "Options"

  button class:"plp-deal-reports-button plp-right slds-button slds-button--neutral", ->
    text "Deal Reports"
    svg "aria-hidden":"true", class:"slds-button__icon slds-button__icon--right", ->
      use "xlink:href":"/assets/icons/utility-sprite/svg/symbols.svg#down"

h1 class:"slds-text-heading--small slds-m-bottom--medium", style:"font-weight:regular" , "Settings and Selections"

form ".slds-form--inline.slds-m-bottom--medium", ->
  div ".slds-form-element", ->
    label ".slds-form-element__label", for: "name", "Expense Base Year"
    div ".slds-form-element__control", ->
      input "#name.slds-input", type: "text"
  div ".slds-form-element", ->
    label ".slds-form-element__label", for: "email", "Lease Type"
    div ".slds-form-element__control", ->
      div ".slds-select_container", ->
        select "#select-01.slds-select", ->
          option "Gross"
          option "mgpm"
          option "modgross"
          option "nnn"
          option "nnnpm"

table id:"bbv-expenses-table", class:"slds-m-bottom--x-large slds-table slds-table--bordered slds-table--cell-buffer slds-no-row-hover", ->
  thead ->
    tr class:"slds-text-heading--label", ->
      infoIcon = 'expenses/header-info-icon'
      dropdown = 'expenses/override-button'
      for heading in [
        ['25', 'Expense Category']
        ['17', "Budgeted#{@partial(infoIcon)}#{@partial(dropdown)}<br>OpEx"]
        ['14.5', "Recoverable#{@partial(infoIcon)}<br>Outside Rent"]
        ['14.5', "Expense Stop#{@partial(infoIcon)}"]
        ['14.5', "Stop Amount#{@partial(infoIcon)}"]
        ['14.5', "Cap#{@partial(infoIcon)}"]]
        th width:"#{heading[0]}%", valign:"top", ->
          div class:"slds-truncate", heading[1]
  tbody id:"bbv-expenses-table-body", ->
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
       

      

    



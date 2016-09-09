snippets = PLP.namespace('snippets')

snippets['validation-switch'] = """
  <label class="slds-checkbox--toggle slds-grid">
    <span class="slds-form-element__label slds-m-bottom--none">Approval Submission Validation</span>
    <input name="checkbox" type="checkbox" aria-describedby="toggle-desc" checked="checked">
    <span id="toggle-desc" class="slds-checkbox--faux_container" aria-live="assertive">
      <span class="slds-checkbox--faux"></span>
    </span>
  </label>
  """

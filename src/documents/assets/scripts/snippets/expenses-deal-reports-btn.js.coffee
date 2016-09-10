snippets = PLP.namespace('snippets')

snippets['expenses-deal-reports-btn'] = """
  <button class="plp-deal-reports-button slds-button slds-button--neutral">
    Deal Reports
    <svg aria-hidden="true" class="slds-button__icon slds-button__icon--right">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
  </button>
  <div class="slds-dropdown slds-dropdown--right">
  <ul class="dropdown__list" role="menu">
    <li class="slds-dropdown__item slds-is-selected" role="presentation">
      <a href="javascript:void(0);" role="menuitemcheckbox" aria-checked="true" tabindex="0">Deal Summary</a>
    </li>
    <li class="slds-dropdown__item slds-is-selected" role="presentation">
      <a href="javascript:void(0);" role="menuitemcheckbox" aria-checked="true" tabindex="0">Lease Abstract</a>
    </li>
    <li class="slds-dropdown__item slds-is-selected" role="presentation">
      <a href="javascript:void(0);" role="menuitemcheckbox" aria-checked="true" tabindex="0">OA Deal Summary</a>
    </li>
    <li class="slds-dropdown__item slds-is-selected" role="presentation">
      <a href="javascript:void(0);" role="menuitemcheckbox" aria-checked="true" tabindex="0">Cash Flow</a>
    </li>
  </ul>
</div>
  """


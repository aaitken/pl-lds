snippets = PLP.namespace('snippets')

snippets['expenses-deal-reports-btn'] = """
  <button class="plp-deal-reports-button slds-button slds-button--neutral">
    Deal Reports
    <svg aria-hidden="true" class="slds-button__icon slds-button__icon--right">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
  </button>
  <div class="slds-dropdown slds-dropdown--right slds-dropdown--small">
  <ul class="dropdown__list" role="menu">
    <li class="slds-dropdown__item slds-is-selected" role="presentation">
      <a href="javascript:void(0);" role="menuitemcheckbox" aria-checked="true" tabindex="0">
        <span class="slds-truncate">
          <svg aria-hidden="true" class="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
          </svg>
          <span>Analysis 1<br>
          CentrePoint 1, CenterPoint 2<br>
          5 Separate Units<span>
          </span>
      </span></span></a>
    </li>
    <li class="slds-dropdown__item" role="presentation">
      <a href="javascript:void(0);" role="menuitemcheckbox" tabindex="-1">
        <span class="slds-truncate">
          <svg aria-hidden="true" class="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
          </svg>
          <span>Analysis 2<br>
          CentrePoint 1<br>
          3 Combined Units<span>
          </span>
          </span>
      </span></a>
    </li>
    <li class="slds-has-divider--top-space" role="separator"></li>
    <li class="slds-dropdown__item" role="presentation">
      <a href="javascript:void(0);" role="menuitem" tabindex="-1">
        <span class="slds-truncate">
        <svg aria-hidden="true" class="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
          </svg>
        Create New Analysis</span>
      </a>
    </li>
  </ul>
</div>
  """


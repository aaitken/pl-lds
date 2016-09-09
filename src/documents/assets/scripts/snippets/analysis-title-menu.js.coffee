snippets = PLP.namespace('snippets')

snippets['analysis-title-menu'] = """
  <button class="slds-button slds-button--icon-border-filled" aria-haspopup="true">
    <svg aria-hidden="true" class="slds-button__icon">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown--left slds-dropdown--small">
    <ul class="dropdown__list" role="menu">
      <li class="slds-dropdown__item slds-is-selected" role="presentation">
        <a href="javascript:void(0);" role="menuitemcheckbox" aria-checked="true" tabindex="0">
          <span class="slds-truncate">
            <svg aria-hidden="true" class="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>
            <span>Analysis 1<br>
            CentrePoint 1, CenterPoint 2<br>
            5 Separate Units<span>
            </span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitemcheckbox" tabindex="-1">
          <span class="slds-truncate">
            <svg aria-hidden="true" class="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>
            <span>Analysis 2<br>
            CentrePoint 1<br>
            3 Combined Units<span>
            </span>
            </span>
        </a>
      </li>
      <li class="slds-has-divider--top-space" role="separator"></li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">
          <svg aria-hidden="true" class="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>
          Create New Analysis</span>
        </a>
      </li>
    </ul>
  </div>
  """

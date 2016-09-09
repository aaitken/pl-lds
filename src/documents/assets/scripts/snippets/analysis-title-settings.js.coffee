snippets = PLP.namespace('snippets')

snippets['analysis-title-settings'] = """
  <button  class="slds-button slds-button--icon-container" aria-haspopup="true">
    <svg aria-hidden="true" class="slds-button__icon">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
    </svg>
  </button>
  <div class="slds-dropdown slds-dropdown--left slds-nubbin--top-left">
    <ul class="dropdown__list" role="menu">
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="0">
          <span class="slds-truncate">Modify Units and Settings</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Modify Budget</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Rename</span>
        </a>
      </li>
    </ul>
  </div>
  """

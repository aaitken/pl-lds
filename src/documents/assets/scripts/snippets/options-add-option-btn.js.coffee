snippets = PLP.namespace('snippets')

snippets['options-add-option-btn'] = """
  <button class="slds-button slds-button--neutral">Add Option
    <svg aria-hidden="true" class="slds-button__icon slds-button__icon--right">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
  </button>
  <div class="slds-dropdown slds-dropdown--left">
    <ul class="dropdown__list slds-dropdown--length-5" role="menu">
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="0">
          <span class="slds-truncate">Termination</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Contraction</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Cancellation</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Right to Notice of Sale</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="0">
          <span class="slds-truncate">Right to Parking</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Relocation</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Right to Remeasure</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Right of First Offer to Purchase</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="0">
          <span class="slds-truncate">Purchase</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Expansion</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">Renewal</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">ROFO</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate">ROFR</span>
        </a>
      </li>
    </ul>
  </div>
  """

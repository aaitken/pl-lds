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
          <span data-value="termination" class="slds-truncate">Termination</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="contraction" class="slds-truncate">Contraction</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="cancellation" class="slds-truncate">Cancellation</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="right to notice" class="slds-truncate">Right to Notice of Sale</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="0">
          <span data-value="right to parking" class="slds-truncate">Right to Parking</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="relocation" class="slds-truncate">Relocation</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="right to remeasure" class="slds-truncate">Right to Remeasure</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="right to purchase" class="slds-truncate">Right of First Offer to Purchase</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="0">
          <span data-value="purchase" class="slds-truncate">Purchase</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="expansion" class="slds-truncate">Expansion</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="renewal" class="slds-truncate">Renewal</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="rofo" class="slds-truncate">ROFO</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span data-value="rofr" class="slds-truncate">ROFR</span>
        </a>
      </li>
    </ul>
  </div>
  """

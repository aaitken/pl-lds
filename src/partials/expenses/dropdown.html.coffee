div ".slds-dropdown-trigger.slds-dropdown-trigger--click.slds-is-open", style: "position:absolute; margin: -.1rem 0 0 2.5rem", ->
  button "#btn-override.slds-button.slds-button--icon-border-filled.slds-button--icon-x-small", "aria-haspopup": "true", ->
    svg ".slds-button__icon", "aria-hidden": "true", ->
      text """<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>"""

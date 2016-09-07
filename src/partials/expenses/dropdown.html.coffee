div "#btn-override.slds-dropdown-trigger.slds-dropdown-trigger--click.slds-is-open", style: "position:absolute; margin: -.1rem 0 0 2.5rem", ->
  button ".slds-button.slds-button--icon-border-filled.slds-button--icon-x-small", "aria-haspopup": "true", ->
    svg ".slds-button__icon", "aria-hidden": "true", ->
      text """<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>"""
  div "#option.is-hidden.slds-dropdown.slds-dropdown--right.slds-dropdown--actions", ->
    ul ".dropdown__list", role: "menu", ->
      li ".slds-dropdown__item", role: "presentation", ->
        a href: "javascript:void(0);", role: "menuitem", tabindex: 0, ->
          span ".slds-truncate", "Action One"

views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['info-icon'] extends Backbone.View

  tagName: 'span'
  className: 'slds-icon_container'

  events:
    mouseenter: ->
      @to = setTimeout (=>
        @showTip()), 250
    mouseleave: 'killTip'

  initialize: (options = {})->
    @tip = options.tip
    @bodyView = views['body'].singleton()
    @snippet = _.template(snippets['info-icon'])
    @TooltipView = views['tooltip']
    @render()

  render: ->
    @$el.html @snippet()
  
  showTip: ->
    @to = null
    @offset = @$el.offset()
    @tooltipView = new @TooltipView {tip: @tip}
    @bodyView.$el.append @tooltipView.el
    @position()
    @tooltipView.$el.fadeIn(150)

  getNubbinDescription: ->
    nubbin = ['top', '']
    if + @offset.left-151 + @tooltipView.$el.width() > views['body'].singleton().$el.width() - 30
      nubbin[1] = 'right'
    if + $(window).height() + views['body'].singleton().$el.scrollTop() < + @offset.top + @tooltipView.$el.height() + 35
      nubbin[0] = 'bottom'
    @nubbinDescription = "#{nubbin[0]}#{nubbin[1]}"
  
  position: ->
    console.log @getNubbinDescription()
    $elTooltip = @tooltipView.$el
    if @nubbinDescription is 'top'
      $elTooltip.css {
        position: 'absolute'
        left: "#{@offset.left-151}px"
        top: "#{+@offset.top+35}px"}
      $elTooltip.addClass('slds-nubbin--top')
    if @nubbinDescription is 'topright'
      $elTooltip.css {
        position: 'absolute'
        left: "#{@offset.left-280}px"
        top: "#{+@offset.top+35}px"}
      $elTooltip.addClass('slds-nubbin--top-right')
    else if @nubbinDescription is 'bottom'
      $elTooltip.css {
        position: 'absolute'
        left: "#{@offset.left-151}px"
        top: "#{@offset.top-@tooltipView.$el.height()-15}px"}
      $elTooltip.addClass('slds-nubbin--bottom')
    else if @nubbinDescription is 'bottomright'
      $elTooltip.css {
        position: 'absolute'
        left: "#{@offset.left-280}px"
        top: "#{@offset.top-@tooltipView.$el.height()-15}px"}
      $elTooltip.addClass('slds-nubbin--bottom-right')

  killTip: ->
    if @to
      clearTimeout(@to)
    else
      @tooltipView.$el.fadeOut 100, =>
        @tooltipView.remove()

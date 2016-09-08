views = PLP.namespace('views')
templates = PLP.namespace('templates')
snippets = PLP.namespace('snippets')
content = PLP.namespace('content')

class views['expenses-table-body-row'] extends Backbone.View

  tagName: 'tr'

  initialize: (options)->
    @$opexCell = null
    @content = options.content
    @template = _.template(templates['expenses-table-body-row'])
    @selectSnippet = _.template(snippets['yes-no-select'])
    @inputTemplate = _.template(templates['text-field'])
    @render()
    @attachData()

  render: ->
    $el = @$el
    $el.html @template(content: @content)
    @$opexCell = $el.find('td:eq(1)')
    $el.find('td:eq(2), td:eq(3), td:eq(5)').html @selectSnippet
    $el.find('td:eq(4)').html @inputTemplate({content: ''})

  attachData: ->
    @$opexCell.data {val: @$opexCell.text().trim()}

  makeOpexEditable: ->
    @$opexCell.html @inputTemplate({content: @$opexCell.data('val')})

  makeOpexRO: ->
    @$opexCell.html @$opexCell.data('val')

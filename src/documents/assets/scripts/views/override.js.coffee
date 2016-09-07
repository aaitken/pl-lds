views = window.PLP.views

class views.Override extends Backbone.View

  initialize: ->
    @setElement $('#btn-override')
    @$option = @$('#option') 

  events:
    'click': ->
      @$option.removeClass('is-hidden') 
       

  

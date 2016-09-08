(function() {
  var templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  views['tooltip'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      "class": 'slds-popover slds-popover--tooltip slds-nubbin--top',
      role: 'tooltip'
    };

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.content = options.tip;
      this.template = _.template(templates['tooltip']);
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.template({
        content: this.content
      }));
    };

    return _Class;

  })(Backbone.View);

}).call(this);

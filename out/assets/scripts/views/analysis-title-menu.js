(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['analysis-title-menu'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      "class": 'slds-dropdown-trigger slds-dropdown-trigger--click',
      'data-view': 'analysis-title-menu'
    };

    _Class.prototype.events = {
      click: function() {
        this.bodyView.closeAll();
        return this.toggleMenu(event);
      }
    };

    _Class.prototype.initialize = function() {
      this.snippet = _.template(snippets['analysis-title-menu']);
      this.bodyView = views['body'].singleton();
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.snippet);
    };

    _Class.prototype.toggleMenu = function(event) {
      event.stopPropagation();
      return this.$el.toggleClass('slds-is-open');
    };

    return _Class;

  })(Backbone.View);

}).call(this);

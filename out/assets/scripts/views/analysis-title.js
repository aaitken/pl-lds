(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views = PLP.namespace('views');

  views['analysis-title'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.initialize = function() {
      this.setElement($('#analysis-title'));
      this.menu = views['analysis-title-menu'].singleton();
      this.settings = views['analysis-title-settings'].singleton();
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.find('h1 span').after(this.menu.el);
      return this.menu.$el.after(this.settings.el);
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['options'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function(options) {
      if (options == null) {
        options = {};
      }
      return this.instance != null ? this.instance : this.instance = new this(options);
    };

    _Class.prototype.attributes = {
      'data-view': 'options'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['options']);
      this.render();
      return this.writeChildren();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    _Class.prototype.writeChildren = function() {
      return views['options-add-option-btn'].singleton({
        $hook: this.$el
      });
    };

    return _Class;

  })(Backbone.View);

}).call(this);

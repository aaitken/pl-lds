(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views['expenses-table'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.initialize = function() {
      this.setElement($('#expenses-table'));
      this.thead = new views['expenses-table-head']({
        el: this.$('#expenses-table-head')
      });
      return this.tbody = new views['expenses-table-body']({
        el: this.$('#expenses-table-body')
      });
    };

    _Class.prototype.hide = function() {
      return this.$el.hide();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

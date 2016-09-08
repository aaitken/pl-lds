(function() {
  var content, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  content = PLP.namespace('content');

  views['expenses-table-body'] = (function(superClass) {
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

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.RowView = views['expenses-table-body-row'];
      this.rowViews = [];
      this.bodyContent = content['expenses-table'].tbody;
      return this.writeChildren();
    };

    _Class.prototype.writeChildren = function() {
      return _.each(this.bodyContent.reverse(), (function(_this) {
        return function(item) {
          _this.rowViews.push(new _this.RowView({
            content: item
          }));
          return _this.$el.prepend(_this.rowViews[_this.rowViews.length - 1].el);
        };
      })(this));
    };

    return _Class;

  })(Backbone.View);

}).call(this);

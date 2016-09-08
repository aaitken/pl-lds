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

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.rowView = views['expenses-table-body-row'];
      this.bodyContent = content['expenses-table'].tbody;
      return this.writeChildren();
    };

    _Class.prototype.writeChildren = function() {
      var that;
      that = this;
      return _.each(this.bodyContent.reverse(), (function(_this) {
        return function(item) {
          var rowView;
          rowView = new _this.rowView({
            content: item
          });
          return _this.$el.prepend(rowView.el);
        };
      })(this));
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = window.PLP.views;

  views.Override = (function(superClass) {
    extend(Override, superClass);

    function Override() {
      return Override.__super__.constructor.apply(this, arguments);
    }

    Override.prototype.initialize = function() {
      this.setElement($('#btn-override'));
      return this.$option = this.$('#option');
    };

    Override.prototype.events = {
      'click': function() {
        return this.$option.removeClass('is-hidden');
      }
    };

    return Override;

  })(Backbone.View);

}).call(this);

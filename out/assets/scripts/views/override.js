(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = window.PLP.views;

  views.Override = (function(superClass) {
    extend(Override, superClass);

    function Override() {
      this.el = $('#btn-override');
      Override.__super__.constructor.call(this);
    }

    Override.prototype.events = {
      'click': function() {
        return alert('click');
      }
    };

    Override.prototype.initialize = function() {
      return alert('init');
    };

    return Override;

  })(Backbone.View);

}).call(this);

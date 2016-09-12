(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  PLP.Router = (function(superClass) {
    extend(Router, superClass);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      expenses: 'expenses',
      units: 'units'
    };

    Router.prototype.initialize = function() {
      return this.on('route', function() {
        return views['submenu'].singleton().highlight();
      });
    };

    Router.prototype.expenses = function() {
      views['expenses-hanging-rack'].singleton({
        $hook: $('#deal-reports')
      }).show();
      return views['expenses-table'].singleton();
    };

    Router.prototype.units = function() {
      return views['units-placeholder'].singleton({
        $hook: $('#deal-reports')
      }).show();
    };

    return Router;

  })(Backbone.Router);

}).call(this);

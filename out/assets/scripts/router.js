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
      expenses: 'expenses'
    };

    Router.prototype.expenses = function() {
      views['expenses-hanging-rack'].singleton({
        $hook: $('#deal-reports')
      });
      return views['expenses-table'].singleton();
    };

    return Router;

  })(Backbone.Router);

}).call(this);

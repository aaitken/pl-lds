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
      views['submenu'].singleton({
        $hook: $('#kpi-container')
      });
      views['expenses-hanging-rack'].singleton({
        $hook: $('#submenu')
      });
      views['expenses-table'].singleton();
      views['analysis-title'].singleton();
      views['validation-switch'].singleton({
        $hook: $('#top-tabs')
      });
      views['expenses-deal-reports-btn'].singleton({
        $hook: $('#submenu')
      });
      views['body'].singleton();
      return views['submenu'].singleton().size();
    };

    return Router;

  })(Backbone.Router);

}).call(this);

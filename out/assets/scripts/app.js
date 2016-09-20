(function() {
  var router, views;

  views = PLP.namespace('views');

  views['analysis-title'].singleton();

  views['submenu'].singleton({
    $hook: $('#kpi-container')
  });

  views['submenu'].singleton().size();

  views['validation-switch'].singleton({
    $hook: $('#top-tabs')
  });

  views['deal-reports-btn'].singleton({
    $hook: $('#submenu')
  });

  views['body'].singleton();

  router = PLP.router = new PLP.Router();

  Backbone.history.start();

}).call(this);

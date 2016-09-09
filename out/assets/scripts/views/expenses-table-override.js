(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views['expenses-table-override'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'button';

    _Class.prototype.className = 'slds-button';

    _Class.prototype.initialize = function() {
      return this.$el.text('Override');
    };

    _Class.prototype.events = {
      'click': function() {
        var $spans;
        $spans = this.$el.parent().find('span:eq(0), span:eq(2)');
        if (this.$el.text() === "Override") {
          this.$el.text("Revert");
          views['expenses-table'].singleton().override();
          $($spans[0]).text('Override');
          return $spans.addClass('plp-highlight');
        } else {
          this.$el.text("Override");
          views['expenses-table'].singleton().revert();
          $($spans[0]).text('Budgeted');
          return $spans.removeClass('plp-highlight');
        }
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);

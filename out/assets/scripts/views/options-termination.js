(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['options-termination'] = (function(superClass) {
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

    _Class.prototype.attributes = {
      'data-view': 'options-termination'
    };

    _Class.prototype.events = function() {
      return {
        click: 'remove'
      };
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['options-termination']);
      this.rowSnippet = _.template(snippets['options-termination-row']);
      return this.render();
    };

    _Class.prototype.writeRow = function() {
      this.$el.find('tbody').prepend(this.rowSnippet);
      return this.$el.find('tbody input:eq(0)').focus();
    };

    _Class.prototype.writeTable = function() {
      if ($("[data-view='options-termination']").length === 0) {
        this.$hook.after(this.el);
      }
      return this;
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.writeTable();
    };

    _Class.prototype.remove = function() {
      var $target, targetName;
      $target = $(event.target);
      targetName = $target.prop('tagName').toLowerCase();
      if (targetName === 'use' || targetName === 'svg') {
        $target.parentsUntil('tbody').remove();
      }
      if (this.$el.find('tbody tr').length === 0) {
        return this.$el.detach();
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);

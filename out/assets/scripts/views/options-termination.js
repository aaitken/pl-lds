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
      'data-view': 'options-termination',
      'style': 'display: none'
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
      return setTimeout(((function(_this) {
        return function() {
          _this.$el.find('tbody').prepend(_this.rowSnippet);
          _this.$el.find('tbody input:eq(0)').focus();
          return _this.$el.removeAttr('style');
        };
      })(this)), 25);
    };

    _Class.prototype.writeTable = function() {
      if ($("[data-view='options-termination']").length === 0) {
        this.$hook.after(this.el);
      }
      this.promote();
      return this;
    };

    _Class.prototype.promote = function() {
      var addOptionBtn;
      addOptionBtn = $("[data-view='options-add-option-btn']")[0];
      if (this.$el.prev()[0] !== addOptionBtn) {
        return $(addOptionBtn).after(this.$el);
      }
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.snippet);
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
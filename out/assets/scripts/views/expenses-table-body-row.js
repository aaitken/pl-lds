(function() {
  var content, snippets, templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  snippets = PLP.namespace('snippets');

  content = PLP.namespace('content');

  views['expenses-table-body-row'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'tr';

    _Class.prototype.initialize = function(options) {
      this.$opexCell = null;
      this.content = options.content;
      this.template = _.template(templates['expenses-table-body-row']);
      this.selectSnippet = _.template(snippets['yes-no-select']);
      this.inputTemplate = _.template(templates['text-field']);
      this.render();
      return this.attachData();
    };

    _Class.prototype.render = function() {
      var $el;
      $el = this.$el;
      $el.html(this.template({
        content: this.content
      }));
      this.$opexCell = $el.find('td:eq(1)');
      $el.find('td:eq(2), td:eq(3), td:eq(5)').html(this.selectSnippet);
      return $el.find('td:eq(4)').html(this.inputTemplate({
        content: ''
      }));
    };

    _Class.prototype.attachData = function() {
      return this.$opexCell.data({
        val: this.$opexCell.text().trim()
      });
    };

    _Class.prototype.makeOpexEditable = function() {
      return this.$opexCell.html(this.inputTemplate({
        content: this.$opexCell.data('val')
      }));
    };

    _Class.prototype.makeOpexRO = function() {
      return this.$opexCell.html(this.$opexCell.data('val'));
    };

    return _Class;

  })(Backbone.View);

}).call(this);

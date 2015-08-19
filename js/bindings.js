ko.bindingHandlers.jsSpinner = {
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		var $el = $(element);
		var options = allBindings() || {};
		var observable = valueAccessor();
		$el.spinner(options);
		
		ko.utils.registerEventHandler(element, 'spin', function(event, ui) {
			observable(ui.value);
		});
	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		var observable = valueAccessor();
		var $el = $(element);
		$el.spinner('value', observable());
	}
};

ko.bindingHandlers.tokenInput = {
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		var $el = $(element);
		var options = allBindings().tokenInputOptions || {};
		var self = this;
		this.tokens = valueAccessor();
		element.isUpdating = false;
		
		$el.tokenInput(options.url, $.extend(options, {
			onAdd: function(item) {
				// if (!element.isUpdating) {
					element.isUpdating = true;
					self.tokens.push(item);					
					element.isUpdating = false;
				// }
			},
			onDelete: function(item) {
				// if (!element.isUpdating) {
					element.isUpdating = true;
					self.tokens.remove(item);
					element.isUpdating = false;	
				// }
			},
			addAll: function() {
				self.tokens.forEach(function(token) {
					$(element).tokenInput('add', token);
				}, this);
			}
		}));
	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		var tokens = ko.toJS(valueAccessor());
		var $el = $(element);
		// if (element.isUpdating) {
			element.isUpdating = true;
			$el.tokenInput('clear');
			for (var i = 0; i < tokens.length; i++) {
				$el.tokenInput('add', tokens[i]);
			}
			element.isUpdating = false;
		// }
	}
};
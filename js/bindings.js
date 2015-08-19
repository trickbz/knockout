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


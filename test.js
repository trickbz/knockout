$(function () {
	$('#datepicker').datepicker({
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true
	});

	$('#speed').selectmenu();

	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];

    function split(val) {
		return val.split(/,\s*/);
    }
    function extractLast(term) {
		return split(term).pop();
    }

	$('#languages')
		.bind("keydown", function (event) {
			if (event.keyCode === $.ui.keyCode.TAB &&
				$(this).autocomplete("instance").menu.active) {
				event.preventDefault();
			}
		})
		.autocomplete({
			minLength: 0,
			source: function (request, response) {
				// delegate back to autocomplete, but extract the last term
				response($.ui.autocomplete.filter(
					availableTags, extractLast(request.term)));
			},
			focus: function () {
				// prevent value inserted on focus
				return false;
			},
			select: function (event, ui) {
				var terms = split(this.value);
				// remove the current input
				terms.pop();
				// add the selected item
				terms.push(ui.item.value);
				// add placeholder to get the comma-and-space at the end
				terms.push("");
				this.value = terms.join(", ");
				return false;
			}
		});

	$("#select2").select2({
		data: availableTags,
		placeholder: "Select a state..."
	});

	var dataTokenInput = [
		{ id: 1, name: "ActionScript" },
		{ id: 2, name: "AppleScript" },
		{ id: 3, name: "Asp" },
		{ id: 4, name: "BASIC" },
		{ id: 5, name: "C" },
		{ id: 6, name: "C++" },
		{ id: 7, name: "Clojure" },
		{ id: 8, name: "COBOL" },
		{ id: 9, name: "ColdFusion" },
		{ id: 10, name: "Erlang" },
		{ id: 11, name: "Fortran" },
		{ id: 12, name: "Groovy" },
		{ id: 13, name: "Haskell" },
		{ id: 14, name: "Java" },
		{ id: 15, name: "JavaScript" },
		{ id: 16, name: "Lisp" },
		{ id: 17, name: "Perl" },
		{ id: 18, name: "PHP" },
		{ id: 19, name: "Python" },
		{ id: 20, name: "Ruby" },
		{ id: 21, name: "Scala" },
		{ id: 22, name: "Scheme" }
	];

	$('#tokeninput').tokenInput(dataTokenInput, {
		hintText: "Choose a technology",
		theme: "facebook"
	});

	$("#spinner").spinner().spinner("value", 5);
	
	// slick grid
	var linkFormatter = function (row, cell, value, columnDef, dataContext) {
        return "<a href='" + value.href + "' tabindex='0'>" + value.text + "</a>";
    };

	var grid;
	var columns = [
		{ id: "url", name: "URL", field: "url", formatter: linkFormatter },
		// { id: "duration", name: "Duration", field: "duration" },
		// { id: "%", name: "% Complete", field: "percentComplete" },
		// { id: "start", name: "Start", field: "start" },
		// { id: "finish", name: "Finish", field: "finish" },
		// { id: "effort-driven", name: "Effort Driven", field: "effortDriven" }
	];
	var options = {
		enableCellNavigation: true,
		enableColumnReorder: false
	};

	var gridData = [
		{ url: { href: "http://www.google.com", text: "Google" } }
	];

	// var data = [];
	// for (var i = 0; i < 500; i++) {
	// 	data[i] = {
	// 		title: "<a href='" + i + "' tabindex='0'>Task " + i + "</a>",
	// 		// duration: "5 days",
	// 		// percentComplete: Math.round(Math.random() * 100),
	// 		// start: "01/01/2009",
	// 		// finish: "01/05/2009",
	// 		// effortDriven: (i % 5 == 0)
	// 	};
	// }
	grid = new Slick.Grid("#slickGrid", gridData, columns, options);

});
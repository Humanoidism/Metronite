# Flyouts

A jQuery plugin for Metronite to create flyouts.

## Usage

Flyouts are very simple to implement. You can do it like this

	$("#myFlyout").flyout();

or you can use an anonymous function

	$.flyout({
		id: "myFlyout"
	});

## Options

There are a few available options, that you can apply. It's simple to set these options however you want

It's very easy to change the behavior of a flyout by setting its options:

	$.flyout({
		id: "myFlyout", // The ID of an element to apply the flyout to
		theme: "Light", // The theme for this flyout (see Available Themes)
		color: "Blue", // The color to use for the flyout (see Available Colors)
		duration: 100, // The duration in milliseconds for the animations
		static: false, // If true, the flyout won't show close button
		align: 'right' // The alignment which the flyout will appear (left or right)
	});

## Events

The flyout has events, that also can be triggered.

* `onShow` - When the flyout is showing.
* `onHide` - When the flyout is hiding.
* `onClose` - When the flyout is closing (triggered by the close button)

## Example

	$myFlyout = $("#myFlyout").flyout({
		theme: "Dark,
		color: "Orange",
		align: "left"
	});

	// Show the flyout, when button is clicked
	$("#myButton").bind('click', function(e) {
		$myFlyout.show();
		e.preventDefault();
	});

	$myFlyout.on('close', function() {
		console.log("The flyout was closed.");
	});
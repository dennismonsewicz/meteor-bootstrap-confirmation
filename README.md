bootstrap3-confirmation
============

Meteor packaging of ethaizone/Bootstrap-Confirmation with Bootstrap 3 support

This package is MIT Licensed. Do whatever you like with it but any responsibility for doing so is your own.

All rights to ethaizone/Bootstrap-Confirmation are with the original author

Example
============
In your handlebars template:

    <input type="text" class="form-control" id="my-input">

In client-side JS code:

    Template.mytemplate.rendered=function() {
    	this.$('#my-input').confirmation();
    }

See http://ethaizone.github.io/Bootstrap-Confirmation/ for more

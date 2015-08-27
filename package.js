// package metadata file for Meteor.js
var packageName = 'divramod:angular-formly-templates-ionic';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'formly templates for ionic';
var gitLink = 'https://github.com/divramod/angular-formly-templates-ionic';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.1.0.3'); // Meteor versions

    api.use('divramod:angular-formly@10.0.0', where); // Dependencies
    api.use('divramod:api-check@10.0.0', where); // Dependencies

    api.addFiles('dist/angular-formly-templates-ionic.min.js', where); // Files in use
});

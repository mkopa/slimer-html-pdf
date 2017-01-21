const page = require('webpage').create(),
      system = require('system');

settings = JSON.parse(system.args[1]);

for (var property in settings) {
  if (settings.hasOwnProperty(property)) {
    page[property] = settings[property];
  }
}

address = system.args[2];
output = system.args[3];

page.open(address, function() {
  page.render(output, {format: 'pdf'});
  phantom.exit();
});

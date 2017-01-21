# phantomjs 2.5.0 (beta)
full support for HTML5 (including FLEX)
problems with rendering to pdf (rendering to images (png, jpeg) working correctly)

# slimerjs - similar to phantomjs but uses Gecko and SpiderMonkey.

## Install dependencies on virtual machine
```
#!/bin/sh
# don't remind install npm first
sudo apt-get install -y xvfb firefox
npm i slimerjs -g
# add below command into system startup script
Xvfb :19 -screen 0 1024x768x16 &
export DISPLAY=:19
```

Breaking page
```
page-break-inside: auto|avoid|initial|inherit;

auto	Default. Automatic page breaks
avoid	Avoid page break inside the element (if possible)
initial	Sets this property to its default value.
inherit	Inherits this property from its parent element.
```
e.g.
```html
<div style="page-break-before:avoid;"><!-- content --></div>
```

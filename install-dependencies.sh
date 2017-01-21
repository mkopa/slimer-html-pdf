#!/bin/sh

# don't remind install npm first
sudo apt-get install -y xvfb firefox
npm i slimerjs -g
# add below command into system startup script
Xvfb :19 -screen 0 1024x768x16 &
export DISPLAY=:19
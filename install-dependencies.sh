#!/bin/sh

# don't remind install npm first
sudo apt-get install -y xvfb firefox
# copy that script to autostart (/etc/init.d/node-slimer `chmod + x`)
Xvfb :19 -screen 0 1024x768x16 &
export DISPLAY=:19

#!/bin/bash

sudo -s
cd /root/TryAtJenkins
git pull origin master
pwd
whereis node
npm install
pm2 restart 0

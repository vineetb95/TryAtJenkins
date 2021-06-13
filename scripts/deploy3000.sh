#!/bin/bash

sudo -s
cd /root/TryAtJenkins
git pull origin master
npm install
pm2 restart 0

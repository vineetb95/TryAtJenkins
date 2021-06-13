#!/bin/bash

sudo -s
cd /root/TryAtJenkins
git pull origin master
sh scripts/rest.sh

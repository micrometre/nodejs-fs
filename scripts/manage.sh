#!/bin/bash
#alpr -c gb public/images -n 1
file="public/images"

for d in $file ; do
   #ls "$d"
   alpr -c gb  -n 1 public/images | awk '/-/ {print $1 "\t" $2}'  
done
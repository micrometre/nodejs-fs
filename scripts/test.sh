#!/bin/bash
alpr -c gb  -n 1 public/images | sed 's|public|http://localhost|g; /plate0:/d;/[A-Z]/p'   
#pwd
#alpr -c gb  -n 1 public/images |  tr " " ","  
#alpr -c gb  -n 1 -j public/images  | sed 's|public| http://localhost|g; /: 1 result/d;g' 




#alpr -c gb  -n 1 public/images | sed 's|public|     "http://localhost|g; /plate0:/d; s/^\s*./["/g;s/.*/&"]/ '


#alpr -c gb  -n 1 public/images | sed 's|public|"http://localhost|g;s|plate0|{|g;s/.$/"]/;/: 1 result/d;s/^\s*./["/g; s/confidence:/","/g   '
#alpr -c gb public/images -n 1
#file="public/images"

#for d in $file ; do
   #ls "$d"
#done
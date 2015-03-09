#! /bin/sh

adb shell "su -c 'chmod 777 /data/data/com.example.sang.helloworld/databases/* '"
adb pull /data/data/com.example.sang.helloworld/databases/test.db && open test.db


#!/bin/bash  
sudo dnf update -y
wget https://dev.mysql.com/get/mysql80-community-release-el9-3.noarch.rpm -y
sudo dnf install mysql80-community-release-el9-3.noarch.rpm -y
sudo yum update -y
sudo yum install mysql-community-client -y

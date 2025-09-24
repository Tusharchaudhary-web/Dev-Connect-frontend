ubuntu@ip-172-31-41-253:~/Dev-Connect-frontend$ cat README.md
Install axios and import it
Install cors in backend => add middleware with configuration (origin and credentials)
whenever you are making an API call so pass axios =>{withCredentials:true}

Install the RTK: npm install

1. npm install @reduxjs/toolkit react-redux
2. build our store
3. connect our store to our app
4. create a slice(cartSlice)
5. dispatch(action)
6. selector

Login and see if your data is coming properly in the store
Navbar should update as soon as user logs in.
Refractor our code to add constants file + create a components folder

you should not be able to access other routes without login
if token is not present , redirect to login page

Season-3

Launching a AWS instance

we have already build 2 microservice

1. frontend microservice
2. backend microservice

Now we will create a server and deploy our application onto a server and make our application live for everybody ro access on the internet.

What is AWS?
AWS (Amazon Web Services) is a cloud service provider.
It offers different services like EC2 (virtual servers), S3 (storage), and RDS (databases) on demand.

EC2 is the AWS service that creates and manages instances (virtual machines) that runs on the cloud.

Instance : Virtual machine(VM)

Benefits:

1. No need to set up your own physical server or database.
2. Pay only for what you use (pay-as-you-go model)

In short

AWS → Cloud service provider

EC2 → Service provided by AWS to create/manage virtual machines

Instance → Virtual machine created by EC

How to create an instance using EC2?
steps

1. give the name whatever you wish to
2. choose operating system - ubuntu
3. select Instance type - t3.micro - this machine can handle basic level of traffic
4. generete Key pair - choose key pair type - RSA
   RSA is an encryption algorithm that generate pem file.
   pem file is a scret key to access the server
   then launch the instance

5. wait for instance is running and fine
6. click on the instance after it is up
7. click on SSH

open terminal in laptop

1. cd downloads ( devconnect secret key)
2. chmod 400 "Dev Connect-secret.pem"
3. ssh -i "Dev Connect-secret.pem" ubuntu@ec2-13-232-31-95.ap-south-1.compute.amazonaws.com

now we have loggedin in the terminal of machine

4. Now install node

a) Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

b) Reload shell
source ~/.bashrc

c) Install specific Node.js version
nvm install 22.18.0

d) Use that version
nvm use 22.18.0

e) Verify
node -v
npm -v

Note : this version should be same as the local system version

5. Now clone the code to instance(VM)
   git clone https://github.com/Tusharchaudhary-web/Dev-Connect-frontend.git

6. come inside frontend project
   ls
   cd Dev-Connect-frontend

   Now we are inside the frontend project so we will preapreb our project

a) Install the dependencies inside the frontend project
command : npm install

b) Build the project
command :npm run build

c) to update the system
command : sudo apt update

d) To host the frontend project we need Nginx
to update the system
sudo apt install nginx

Now we can use this http server to deploy our app

e) start the nginx
command : sudo systemctl start nginx

f) Enable the Nginx
command : sudo systemctl enable nginx

g) copy the dist folder to Nginx
command : sudo scp -r dist/\* /var/www/html/

h) enable the port 80 of your instance

go to instances -> security ->security group -> Inbound rules to allow acces to port 80

/\*

Now we will copy the code of dist folder(build files) to Nginx(HTTP server repository)

copy code from dist(build files) to /var/www/html/

sudo scp -r dist/\* /var/www/html/

sudo : to get root level permission
scp : to copy the build files
-r : recursively
dist/\* : all the build files
/var/www/html/ : copy here

you can check with it
command : cd /var/www/html/
ls

\*/

Backend

a) loggedin on the server
command : ssh -i "Dev Connect-secret.pem" ubuntu@ec2-13-232-31-95.ap-south-1.compute.amazonaws.com

b) clone the repository
git clone https://github.com/Tusharchaudhary-web/Dev-Connect-Backend.git

c) go to backend project
ls
cd Dev-Connect-Backend

d) Install the dependencies
npm install

e) allowed ec2 instance public IP on mongodb server(whitelisting the IP)
Now add port 3000 just like we added 80

Run the command : npm run start
Now : http://13.232.31.95:3000/user/feed :
but problem is that our server is keep running so it this IP is active,if we closed the server so it will not be active

but we cannot just do npm run start and keep our terminal forever,it will loose the connection and application willbe stopped after sometime so we need to keep our aplication alive 24\*7
so we will use PM2
what is PM2?
M2 is a daemon process manager that will help you manage and keep your application online 24/7

f) install pm2
npm install pm2 -g

g) now start the project
pm2 start npm -- start

pm2 logs - pm2 logs
pm2 flush npm - flush the logs (npm is name of application)
pm2 list - list of processes started by pm2
pm2 stop npm - stop the application
pm2 delete npm - it will delete the application

How to give a custom name?
pm2 start npm --name "Dev-Connect-Backend" -- start

frontend : http://13.232.31.95/
backend : http://13.232.31.95:3000/

Domain name : devconnect.com
Backend : devconnect.com:3000 => devconnect.com/api

How to map port number to path
Nginx proxy pass


sudo nano /etc/nginx/sites-available/default

nano - to edit the file

nginx config below


server_name : 12.232.31.95

    location /api/ {
        proxy_pass http://localhost:3000/;   # Node.js backend port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

exit ctrl+x
save ctrl+y
enter

sudo systemctl restart nginx - Now restart the nginx
modify the base_URL to /api

http://13.232.31.95:3000/user/feed
http://13.232.31.95/api/user/feed






























b) npm run dev - run project in local machine
npm run build - vite bundle the project and create a dist which contains all the files and now it will be ready to push to production
ubuntu@ip-172-31-41-253:~/Dev-Connect-frontend$

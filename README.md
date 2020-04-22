Northeastern University MS Information Systems DevOps Spring 2020 - Final Project

PROJECT TITLE: Covid-19 Dashboard

PROJECT DESCRIPTION:

Getting real time data of countries affected with covid-19, with a detailed report of total cases, people tested positive, recovered, total deaths. The dashboard drills down to country specfic data as well as an overview of all countries with a summary of world report at home page. Recharts is used for data visualization.

PRE-REQUISITE:

1) Node.js v10.15.3

How to run:

A) Run "npm start" command at root of your project and by default react application runs on localhost 3000

B) Using the Endpoint for Frontend:
1) GET All Data : http://ExternalIP/all
2) GET All Country : http://ExternalIP/countries
3) GET Country Specific : http://ExternalIP/countries/:country

C) To run the application after deploying it in AWS, 

  a) First deploy the covid-19 backend present at "https://github.com/josephnp732/Covid19-Backend"
  
  b) Then change the "fetchUrl" variable with AWS domain
  
  c) Dockerize your front end and apply front end service and deployment yaml files to get the front end pods running
  
  d) Hit the front end url to see the output after deploying it in AWS Eks cluster

D) To see the charts click on "Charts" button and click again to close it
E) To see all country data click on "Get World report" and for a particular country details, enter country name on input box, click outside the box and then hit "Get Country Specific data" button
  
Note:

1) Front-end Hostname (Open frontend with Chrome Securities Disabled)

    a) MacOS Command: open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
    
    b) For Windows: Open command line interface where you have web browser installed and disable web security for it. For example, to disable security for chrome type "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security"


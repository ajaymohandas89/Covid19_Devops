Northeastern University MS IS DevOps Spring 2020 - Final Project

PROJECT TITLE: Covid-19 Dashboard

PROJECT DESCRIPTION:

Getting real time data of countries affected with covid-19, with a detailed report of total cases, people tested positive, recovered, total deaths. The dashboard drills down to country specfic data as well as an overview of all countries with a summary of world report at home page. Recharts is used for data visualization.

PRE-REQUISITE:

1) Node.js v10.15.3

How to run:

Using the Endpoint for Frontend:
1) GET All Data : http:/<ExternalIP>/all
2) GET All Country : http:/<ExternalIP>/countries
3) GET Country Specific : http:/<ExternalIP>/countries/<country>

To deploy and run the application on localhost just type npm start

  
Note: External IP: Public facing DNS Name generated at the end of the script country: Example: USA, India, Bahrain, etc.

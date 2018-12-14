# ![sajilni logo](./assets/Sajilni-logo-with-url.png). 

Sajilni.com is an online event management and e-ticketing platform that  enables event organizers, promoters and venue owners to sell tickets in a click of a button.

Sajilni has expanded its offerings and capitalized on the latest trends in ticketing technologies to
serve the event organizers needs by offering its software as a white label ticketing solution.

For High overview summary check [WBS work breakdown structure](https://drive.google.com/file/d/1qBQLCSi5t5Cd82apHocNTTduMsPYX7Fx/view)

## MileStone 1 ( White labeling Sajilni Version 3.0)
Custmize Sajilni solution for white labeling;

* White labelling  Sajilni application;
  1. Home Page
  2. Event Page
  3. Buying Process
  4. Organizer Page
  
  Thoses parts will be CSS changes mainly ... theming.
  
**Deadline** is ~1 month, and to meet this challenge at current phase;

We will

  1. Preserve old way of deploying, as much as possible
  2. Configure multi domain, each client will have his domain 
  3. Minimal Change On Deployment Script, for two apps on same tomcat
  4. Use same database to deliver on time. 
  5. Use same single code repository
  6. Deliver widgets
  7. Implement new payment integration
  

## Milestone 2 (Take it step further)

We have a vision to implement all below according to priority;

To do 
 1. Centralized server deployments configuration
 2. Centralized White labeling configuration
 3. Customize backend/css/js any thing, for each client smoothly and keep track of these changes
 4. To accomplish #3 above we have to come up with, separating and refactoring the layers of system and code
 between buisness,UI, backend (use any technology necessary)
 
 
 **And Keeping up with cutting edge practices, and learn how people are doing it
 Eventually we shall have crystal clear picture for the following questions... before we start anywork**
 
 * Question: What if i have 30 clients, How infrastructure configs, and repos will be? 

 * Question: In case of single client needs a change (CSS,JS,JAVA,DB), 
 how to change and deploy with minimum downtime?
			
   
## Current stack at sajilni

1. Jquery/javascript  no es6 or advanced stuff
2. JSP, JAVAEE
3. Spring mainly MVC
4. DB MySql
5. We are amazonians

---
tags:
  - spring
  - servlet
---
# What Is Dispatcher Servlet in Spring? - GeeksforGeeks

tags:: source
## Metadata
- Author: geeksforgeeks.org
- Full Title: What Is Dispatcher Servlet in Spring? - GeeksforGeeks
- Category: #articles
- URL: https://www.geeksforgeeks.org/what-is-dispatcher-servlet-in-spring/

## Highlights
- DispatcherServlet acts as the Front Controller for Spring-based web applications. So now what is Front Controller? So it is pretty simple. Any request is going to come into our website the front controller is going to stand in front and is going to accept all the requests and once the front controller accepts that request then this is the job of the front controller that it will make a decision that who is the right controller to handle that request. For example, refer to the below image. Suppose we have a website called student.com and the client is make a request to save student data by hitting the following URL student.com/save and its first come to the front controller and once the front controller accepts that request it is going to assign to the Controller_1 as this controller handle the request for /save operation. Then it is going to return back the response to the Client.
- Why this line “<load-on-startup>1</load-on-startup>”?This will make sure that whenever your server will get started the DispatcherServlet will get initialized. And if you are not writing this line of code then whenever the first request will come to your server starting from /student.com at that time only the DispatcherServlet will be initialized and we don’t want it. We want the DispatcherServlet will be initialized during the time of the server startup. That’s why we have written this line of code. The complete web.xml file is given below:

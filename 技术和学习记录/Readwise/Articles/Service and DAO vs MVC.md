---
tags:
  - 架构模式
  - mvc
---
# Service and DAO vs MVC

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Service and DAO vs MVC
- Category: #articles
- URL: https://stackoverflow.com/questions/45490749/service-and-dao-vs-mvc

## Highlights
- DAO pattern offers a logic to structure your persistence mechanism (the glue between your database and the model of your MVC). T
- You should not compare these directly with each other. Services and DAOs form layers in any n-layered application. MVC application can include Services and DAOs.
  Service layer is a generic term that basically acts as an entry point to the application domain and typically includes business logic. For a web application, you could treat the business logic layer as a service layer, or for mobile clients, you could expose a web API and treat is a service layer. In short irrespective of GUI/ Client, you should be able to re-use business logic as-is. 
  DAOs are just the objects that abstract away the data storage mechanism.
  MVC is a design pattern where V and C are "strictly" form the presentation layer, and M can include everything that is beyond presentation (GUI). The model part in MVC has been an opinion based topic for a long time. But here's how I would structure a typical MVC application.
- This means that model & DAo are same - No they are not. User model object may contain Firstname and Lastname however your view needs to display full name. Fullname would then be defined by UserViewModel because that's just for View's purpose.
# Service and DAO vs MVC

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Service and DAO vs MVC
- Category: #articles
- URL: https://stackoverflow.com/questions/45490749/service-and-dao-vs-mvc

## Highlights
- DAO pattern offers a logic to structure your persistence mechanism (the glue between your database and the model of your MVC). T
- You should not compare these directly with each other. Services and DAOs form layers in any n-layered application. MVC application can include Services and DAOs.
  Service layer is a generic term that basically acts as an entry point to the application domain and typically includes business logic. For a web application, you could treat the business logic layer as a service layer, or for mobile clients, you could expose a web API and treat is a service layer. In short irrespective of GUI/ Client, you should be able to re-use business logic as-is. 
  DAOs are just the objects that abstract away the data storage mechanism.
  MVC is a design pattern where V and C are "strictly" form the presentation layer, and M can include everything that is beyond presentation (GUI). The model part in MVC has been an opinion based topic for a long time. But here's how I would structure a typical MVC application.
- This means that model & DAo are same - No they are not. User model object may contain Firstname and Lastname however your view needs to display full name. Fullname would then be defined by UserViewModel because that's just for View's purpose.

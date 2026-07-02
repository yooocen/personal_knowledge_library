# No Found for Dependency: Expected at Least 1 Bean Which Qualifies as Autowire Candidate for This Dependency. Dependency Annotations:

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: No Found for Dependency: Expected at Least 1 Bean Which Qualifies as Autowire Candidate for This Dependency. Dependency Annotations:
- Category: #articles
- URL: https://stackoverflow.com/questions/26095881/no-found-for-dependency-expected-at-least-1-bean-which-qualifies-as-autowire-ca

## Highlights
- This means that there's no bean available to fulfill that dependency. Yes, you have an implementation of the interface, but you haven't created a bean for that implementation. You have two options:
  Annotate UserDaoImpl with @Component or @Repository, and let the component scan do the work for you, exactly as you have done with UserService.
  Add the bean manually to your xml file, the same you have done with UserBoImpl.

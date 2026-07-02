# Domain Driven Design: Domain Service, Application Service

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Domain Driven Design: Domain Service, Application Service
- Category: #articles
- URL: https://stackoverflow.com/questions/2268699/domain-driven-design-domain-service-application-service

## Highlights
- Domain Services : Encapsulates
  business logic that doesn't naturally
  fit within a domain object, and are NOT typical CRUD operations – those would belong to a Repository.
  Application Services : Used by
  external consumers to talk to your
  system (think Web Services). If consumers need access to CRUD operations, they would be exposed here.
  Infrastructure Services : Used to
  abstract technical concerns (e.g.
  MSMQ, email provider, etc).
- Application Services will typically use both Domain Services and Repositories to deal with external requests.

# Log4j Bridge

tags:: source
## Metadata
- Author: slf4j.org
- Full Title: Log4j Bridge
- Category: #articles
- URL: https://www.slf4j.org/legacy.html

## Highlights
- Often, some of the components you depend on rely on a logging
  API other than SLF4J. You may also assume that these components
  will not switch to SLF4J in the immediate future. To deal with
  such circumstances, SLF4J ships with several bridging modules
  which redirect calls made to log4j, JCL and java.util.logging APIs
  to behave as if they were made to the SLF4J API instead. The
  figure below illustrates the idea.

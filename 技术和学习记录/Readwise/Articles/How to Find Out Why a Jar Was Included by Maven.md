# How to Find Out Why a Jar Was Included by Maven?

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: How to Find Out Why a Jar Was Included by Maven?
- Category: #articles
- URL: https://stackoverflow.com/questions/4597811/how-to-find-out-why-a-jar-was-included-by-maven

## Highlights
- It looks like the pattern passed to -Dincludes is incorrect.
  From the documentation of Maven Dependency Plugin, the syntax of -Dincludes is defined by StrictPatternIncludesArtifactFilter. From the javadoc of AbstractStrictPatternArtifactFilter from which this is subclassed,

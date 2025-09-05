# Maven Managed Dependencies - Resolving ${project.version} From Parent Pom

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Maven Managed Dependencies - Resolving ${project.version} From Parent Pom
- Category: #articles
- URL: https://stackoverflow.com/questions/16895555/maven-managed-dependencies-resolving-project-version-from-parent-pom

## Highlights
- But the artifact my.group.dep.1.jar is used, instead of my.group.dep.2.jar. So the placeholder is resolved to the version of the project using the managed dependency, and not those of the project defining the dependency.
  Is that expected behaviour? I'm using maven 3.0.4.

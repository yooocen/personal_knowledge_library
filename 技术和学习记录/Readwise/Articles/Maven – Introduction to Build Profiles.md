# Maven – Introduction to Build Profiles

tags:: source
## Metadata
- Author: maven.apache.org
- Full Title: Maven – Introduction to Build Profiles
- Category: #articles
- URL: https://maven.apache.org/guides/introduction/introduction-to-profiles.html

## Highlights
- Profiles are specified using a subset of the elements available in the POM itself (plus one extra section), and are triggered in any of a variety of ways. They modify the POM at build time, and are meant to be used in complementary sets to give equivalent-but-different parameters for a set of target environments (providing, for example, the path of the appserver root in the development, testing, and production environments).
- Per Project
  - Defined in the POM itself (pom.xml).
  Per User
  - Defined in the Maven-settings (%USER_HOME%/.m2/settings.xml).
  Global
  - Defined in the global Maven-settings (${maven.home}/conf/settings.xml).
  Profile descriptor
  - a descriptor located in project basedir (profiles.xml) (no longer supported in Maven 3.0 and above; see Maven 3 compatibility notes)
- From the command line
  Through Maven settings
  Based on environment variables
  OS settings
  Present or missing files

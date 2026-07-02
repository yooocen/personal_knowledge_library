# org.mockito.exceptions.misusing.NotAMockException

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: org.mockito.exceptions.misusing.NotAMockException
- Category: #articles
- URL: https://stackoverflow.com/questions/42001163/org-mockito-exceptions-misusing-notamockexception

## Highlights
- Exception message says that argument passed to when() is not a mock.
  In this case, it's a result
  doReturn(response).when(result);
  Exception message even says what a correct invocation should look like:
  Example of correct stubbing:
  doThrow(new RuntimeException()).when(mock).someMethod();
  It isn't clear from the question what is being tested here. If abc is a mock object and you want to return the response on XYZ call then something like this should work:
  doReturn(response).when(abc).XYZ(exampleHeader);
  Otherwise, you need to explain what exactly are you trying to achieve.

# Documentation - Deep Dive

tags:: source
## Metadata
- Author: typescriptlang.org
- Full Title: Documentation - Deep Dive
- Category: #articles
- URL: https://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html

## Highlights
- A type alias declaration (type sn = number | string;)
  An interface declaration (interface I { x: number[]; })
  A class declaration (class C { })
  An enum declaration (enum E { A, B, C })
  An import declaration which refers to a type
- Values are runtime names that we can reference in expressions
- The declaration class C { } creates two things:
  a type C which refers to the instance shape of the class,
  and a value C which refers to the constructor function of the class.
  Enum declarations behave similarly.
---
tags:
  - vim
---
# Can I Map Alt Key in Vim?

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Can I Map Alt Key in Vim?
- Category: #articles
- URL: https://stackoverflow.com/questions/7501092/can-i-map-alt-key-in-vim

## Highlights
- :help key-notation describes what format needs to be used to map different keys. In the case of alt, you can use either <A- or <M-. So your mapping would be
  map <M-d> <C-d>
  I'd also recommend using the nore variant of :map (e.g., noremap) unless you explicitly want to allow the right-hand side to be re-evaluated for mappings.
# Can I Map Alt Key in Vim?

tags:: source
## Metadata
- Author: stackoverflow.com
- Full Title: Can I Map Alt Key in Vim?
- Category: #articles
- URL: https://stackoverflow.com/questions/7501092/can-i-map-alt-key-in-vim

## Highlights
- :help key-notation describes what format needs to be used to map different keys. In the case of alt, you can use either <A- or <M-. So your mapping would be
  map <M-d> <C-d>
  I'd also recommend using the nore variant of :map (e.g., noremap) unless you explicitly want to allow the right-hand side to be re-evaluated for mappings.

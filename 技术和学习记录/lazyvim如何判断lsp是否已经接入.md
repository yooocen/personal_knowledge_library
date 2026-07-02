---
tags:
  - vim
---
`:lua print(vim.inspect(vim.lsp.get_clients({ bufnr = 0 })))`
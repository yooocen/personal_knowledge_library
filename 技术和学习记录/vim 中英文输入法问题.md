---
tags:
  - vim
---
安装im_select

```lua
local im_select_cmd = "/mnt/f/config/im-select.exe"

-- 1. VimEnter 时切换到英文 (1033) - 使用 system() 静默执行
vim.api.nvim_create_autocmd("VimEnter", {
  pattern = "*",
  callback = function()
    vim.fn.system(im_select_cmd .. " 1033")
  end,
  desc = "Switch to English input method on Vim enter",
})

-- 2. 进入插入模式时切换到中文 (2052) - 使用 system() 静默执行
vim.api.nvim_create_autocmd("InsertEnter", {
  pattern = "*",
  callback = function()
    vim.fn.system(im_select_cmd .. " 2052")
  end,
  desc = "Switch to Chinese input method on insert enter",
})

-- 3. 离开插入模式时切换到英文 (1033) - 使用 system() 静默执行
vim.api.nvim_create_autocmd("InsertLeave", {
  pattern = "*",
  callback = function()
    vim.fn.system(im_select_cmd .. " 1033")
  end,
  desc = "Switch to English input method on insert leave",
})

-- 4. VimLeave 时切换到中文 (2052) - 使用 system() 静默执行
vim.api.nvim_create_autocmd("VimLeave", {
  pattern = "*",
  callback = function()
    vim.fn.system(im_select_cmd .. " 2052")
  end,
  desc = "Switch to Chinese input method on Vim leave",
})

```
---
view-count: 3
---
```lua
set nu
set hidden
set wrap
set showcmd
set wildmenu
set incsearch
set hlsearch
map ; :
map _d d
let mapleader =" "
map H ^
map L $
map J G
map K gg
noremap < <<
noremap > >>
noremap x "_x
let &t_ut=''
" noremap d "_d
set notimeout
noremap <LEADER><CR> :nohlsearch<CR>
map tt :NERDTree<cr>
syntax on
" vmap <C-x> :!pbcopy<CR>
vmap <C-c> :w !pbcopy<CR><CR>
set cuc
set cul
call plug#begin('~/.config/nvim/plugged')
Plug 'numirias/semshi', { 'do': ':UpdateRemotePlugins' }
Plug 'ron89/thesaurus_query.vim'
Plug 'mbbill/undotree'
Plug 'junegunn/goyo.vim'
Plug 'kshenoy/vim-signature'
Plug 'junegunn/vim-easy-align'
Plug 'scrooloose/nerdcommenter'
Plug 'scrooloose/nerdtree'
Plug 'neoclide/coc.nvim'
Plug 'easymotion/vim-easymotion'
Plug 'jiangmiao/auto-pairs'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'yuttie/hydrangea-vim'
Plug 'jacoborus/tender.vim'
Plug 'morhetz/gruvbox'
Plug 'tpope/vim-surround'
Plug 'kien/ctrlp.vim'
Plug 'AndrewRadev/switch.vim'
Plug 'michaeljsmith/vim-indent-object'
Plug 'justinmk/vim-sneak'
Plug 'kana/vim-textobj-entire'
Plug 'kana/vim-textobj-user'
Plug 'puremourning/vimspector', {'do': './install_gadget.py --enable-rust --enable-python'}
Plug 'yggdroot/leaderf'
Plug 'tomtom/tcomment_vim'
Plug 'skywind3000/vim-terminal-help'
Plug 'connorholyday/vim-snazzy'
call plug#end()
let g:coc_global_extensions = ['coc-tsserver',
      \'coc-html',
      \'coc-css',
      \'coc-json',
      \'coc-java',
      \'coc-python',
      \'coc-flutter',
      \'coc-emmet',
      \'coc-snippets',
      \'coc-xml',
      \'coc-yaml',
      \'coc-markdownlint',
      \'coc-tsserver',
      \'coc-explorer',
      \'coc-highlight']

colorscheme hydrangea
" Use tab for trigger completion with characters ahead and navigate.
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction
set tabstop=2
set softtabstop=2
set shiftwidth=2
set expandtab
set encoding=utf-8
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Use K to show documentation in preview window.
nnoremap <silent> <cr>k :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  elseif (coc#rpc#ready())
    call CocActionAsync('doHover')
  else
    execute '!' . &keywordprg . " " . expand('<cword>')
  endif
endfunction

" Use `[g` and `]g` to navigate diagnostics
" Use `:CocDiagnostics` to get all diagnostics of current buffer in location list.
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Make <CR> auto-select the first completion item and notify coc.nvim to
" format on enter, <cr> could be remapped by other vim plugin
inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm()
                              \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif
"" Unicode symbols
let g:airline_left_sep = '>'
let g:airline_right_sep = '<'
let g:airline_symbols.whitespace = 'Ξ'

"set fencs=utf-8,ucs-bom,shift-jis,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8
set fileencodings=ucs-bom,utf-8,cp936
set fileencoding=utf-8

" vimspector 相关配置
let g:vimspector_enable_mappings = 'HUMAN'



set nocompatible
filetype on
filetype indent on
filetype plugin on
filetype plugin indent on

set scrolloff=5

nmap sl :set splitright<CR>:vsplit<CR>
nmap sh :set nosplitright<CR>:vsplit<CR>
nmap sk :set nosplitbelow<CR>:split<CR>
nmap sj :set splitbelow<CR>:split<CR>

nmap <LEADER>l <C-w>l
nmap <LEADER>h <C-w>h
nmap <LEADER>j <C-w>j
nmap <LEADER>k <C-w>k

nmap <LEADER><up> :res+5<CR>
nmap <LEADER><down> :res-5<CR>
nmap <LEADER><left> :vertical resize-5<CR>
nmap <LEADER><right> :vertical resize+3<CR>

nmap te :tabe<CR>
nmap tn :+tabnext<CR>
nmap tb :-tabnext<CR>

" nmap <CR> o<ESC>
map <LEADER>sc :set spell!<CR> 


map <LEADER><LEADER> <ESC>/<++><CR>:nohlsearch<CR>c4l


```


```lua
set nu
set hidden
set wrap
set showcmd
set wildmenu
set incsearch
set hlsearch
map ; :
let mapleader =" "
map H ^
map L $
map J G
map K gg
noremap < <<
noremap > >>
noremap x "_x
noremap vv <C-v>
nmap <leader>g :Ag<CR>
let &t_ut=''
" noremap d "_d
set notimeout
noremap <LEADER><CR> :nohlsearch<CR>
map tt :NERDTree<cr>
syntax on
" vmap <C-x> :!pbcopy<CR>
vmap <C-c> :w !pbcopy<CR><CR>
set cuc
set cul
call plug#begin('~/.config/nvim/plugged')
Plug 'numirias/semshi', { 'do': ':UpdateRemotePlugins' }
Plug 'ron89/thesaurus_query.vim'
Plug 'mbbill/undotree'
Plug 'junegunn/goyo.vim'
Plug 'kshenoy/vim-signature'
Plug 'junegunn/vim-easy-align'
Plug 'scrooloose/nerdcommenter'
Plug 'scrooloose/nerdtree'
Plug 'neoclide/coc.nvim'
Plug 'easymotion/vim-easymotion'
Plug 'jiangmiao/auto-pairs'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'yuttie/hydrangea-vim'
Plug 'jacoborus/tender.vim'
Plug 'morhetz/gruvbox'
Plug 'tpope/vim-surround'
Plug 'kien/ctrlp.vim'
Plug 'AndrewRadev/switch.vim'
Plug 'michaeljsmith/vim-indent-object'
Plug 'justinmk/vim-sneak'
Plug 'kana/vim-textobj-entire'
Plug 'kana/vim-textobj-user'
Plug 'puremourning/vimspector', {'do': './install_gadget.py --enable-rust --enable-python'}
Plug 'tomtom/tcomment_vim'
Plug 'skywind3000/vim-terminal-help'
Plug 'connorholyday/vim-snazzy'
Plug 'Yggdroot/LeaderF', { 'do': ':LeaderfInstallCExtension' }
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'justinmk/vim-sneak'
call plug#end()
let g:coc_global_extensions = ['coc-tsserver',
      \'coc-html',
      \'coc-css',
      \'coc-json',
      \'coc-java',
      \'coc-python',
      \'coc-flutter',
      \'coc-emmet',
      \'coc-snippets',
      \'coc-xml',
      \'coc-yaml',
      \'coc-markdownlint',
      \'coc-tsserver',
      \'coc-explorer',
      \'coc-highlight']

colorscheme hydrangea

nmap <space>e <Cmd>CocCommand explorer<CR>

" Use tab for trigger completion with characters ahead and navigate.
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction
set tabstop=2
set softtabstop=2
set shiftwidth=2
set expandtab
set encoding=utf-8
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Use K to show documentation in preview window.
nnoremap <silent> <c-d> :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  elseif (coc#rpc#ready())
    call CocActionAsync('doHover')
  else
    execute '!' . &keywordprg . " " . expand('<cword>')
  endif
endfunction

" Use `[g` and `]g` to navigate diagnostics
" Use `:CocDiagnostics` to get all diagnostics of current buffer in location list.
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Make <CR> auto-select the first completion item and notify coc.nvim to
" format on enter, <cr> could be remapped by other vim plugin
inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm()
                              \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif
"" Unicode symbols
let g:airline_left_sep = '>'
let g:airline_right_sep = '<'
let g:airline_symbols.whitespace = 'Ξ'

"set fencs=utf-8,ucs-bom,shift-jis,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8
set fileencodings=ucs-bom,utf-8,cp936
set fileencoding=utf-8

" vimspector 相关配置
let g:vimspector_enable_mappings = 'HUMAN'

set nocompatible
filetype on
filetype indent on
filetype plugin on
filetype plugin indent on

set scrolloff=30

" nmap sl :set splitright<CR>:vsplit<CR>
" nmap sh :set nosplitright<CR>:vsplit<CR>
" nmap sk :set nosplitbelow<CR>:split<CR>
" nmap sj :set splitbelow<CR>:split<CR>

nmap <LEADER>l <C-w>l
nmap <LEADER>h <C-w>h
nmap <LEADER>j <C-w>j
nmap <LEADER>k <C-w>k

nmap <LEADER><up> :res+5<CR>
nmap <LEADER><down> :res-5<CR>
nmap <LEADER><left> :vertical resize-5<CR>
nmap <LEADER><right> :vertical resize+3<CR>

nmap te :tabe<CR>
nmap tn :+tabnext<CR>
nmap tb :-tabnext<CR>

" nmap <CR> o<ESC>
map <LEADER>sc :set spell!<CR> 


nmap <LEADER>nx <ESC>/<++><CR>:nohlsearch<CR>c4l

nmap <LEADER>th :ThesaurusQueryLookupCurrentWord<CR>

let g:Lf_WindowPosition = 'popup'


```
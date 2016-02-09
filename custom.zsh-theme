#should live in ~//.oh-my-zsh/themes/custom.zsh-theme

local ret_status="%(?:%{$fg_bold[green]%}≫ :%{$fg_bold[red]%}≫ %s)"
PROMPT='%{$fg_bold[green]%}%p%{$fg[cyan]%}${PWD/#$HOME/~} $(git_prompt_info)$(hg_prompt_info)${ret_status} %{$reset_color%}'

# prior setup
#local ret_status="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ %s)"
#PROMPT='${ret_status}%{$fg_bold[green]%}%p%{$fg[cyan]%}${PWD/#$HOME/~} $(git_prompt_info)$(hg_prompt_info) % %{$reset_color%}'

# alternative symbols I like ➜ ≑ ≡ ≡ ≫


# in enviornments where multiple vcs are being used, you should set different colors for each system, generally I use blue for git & magenta for hg
ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[blue]%}git:(%{$fg_bold[white]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%})%{$fg[yellow]%}✗%{$reset_color%}"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})%{$fg[green]%}✓%{$reset_color%}"

ZSH_THEME_HG_PROMPT_PREFIX="%{$fg_bold[magenta]%}hg:(%{$fg[white]%}"
ZSH_THEME_HG_PROMPT_SUFFIX="%{$reset_color%} "
ZSH_THEME_HG_PROMPT_DIRTY="%{$fg_bold[magenta]%})%{$fg[yellow]%}✗%{$reset_color%}"
ZSH_THEME_HG_PROMPT_CLEAN="%{$fg_bold[magenta]%})%{$fg[green]%}✓%{$reset_color%}"

#color testing
#PROMPT="%{$fg_bold[white]%}bold white%{$reset_color%} | %{$fg[white]%}white%{$reset_color%} | %{$fg_bold[magenta]%}bold magenta%{$reset_color%} | %{$fg[magenta]%}magenta%{$reset_color%} | %{$fg_bold[red]%}bold red%{$reset_color%} | %{$fg[red]%}red%{$reset_color%} | %{$fg_bold[cyan]%}bold cyan%{$reset_color%} | %{$fg[cyan]%}cyan%{$reset_color%} | %{$fg_bold[blue]%}bold blue%{$reset_color%} | %{$fg[blue]%}blue%{$reset_color%} | %{$fg_bold[green]%}bold green%{$reset_color%} | %{$fg[green]%}green%{$reset_color%} | %{$fg_bold[black]%}bold black%{$reset_color%} | %{$fg[black]%}black%{$reset_color%} | %{$fg_bold[yellow]%}bold yellow%{$reset_color%} | %{$fg[yellow]%}yellow%{$reset_color%} "

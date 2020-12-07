# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/bshatzer/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="custom"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git colored-man-pages pip nvm)
# osx python zsh-autosuggestions



# User configuration
export PATH="/usr/local/share/python:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/use:/usr/local/sbin"

source $ZSH/oh-my-zsh.sh

# User configuration
## explanation of VISUAL vs EDITOR 
## https://web.archive.org/web/20200727173026/https://unix.stackexchange.com/questions/4859/visual-vs-editor-what-s-the-difference
export VISUAL=nano
export EDITOR="$VISUAL"



# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias hostfile='sudo nano -w /private/etc/hosts'
alias hosts=hostfile

alias reload=". ~/.zshrc && echo 'ZSH config reloaded from ~/.zshrc'"

function simpleserver() {ruby -run -e httpd . -p "${1:-8000}"}
alias ss=simpleserver

alias beep="echo -e '\07'"

alias restart="sudo shutdown -r now"



# https://www.makeuseof.com/tag/sound-advice-fixing-common-mac-audio-problems-os-x/#reset-core-audio
alias kill_coreaudio='sudo killall coreaudiod'
function resetAudio() {
  if read -q "RESP?Reset coreaudiod? "; then
      echo
      kill_coreaudio
      echo
      echo "Yes fired"      
  else 
    beep
    echo
    echo "'$RESP' not 'Y' or 'y'. Exiting..."
  fi
}
alias restartAudio=resetAudio


#colors use ${RED}Red text ${NORMAL} back to normal
BLACK=$(tput setaf 0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
LIME_YELLOW=$(tput setaf 190)
POWDER_BLUE=$(tput setaf 153)
BLUE=$(tput setaf 4)
MAGENTA=$(tput setaf 5)
CYAN=$(tput setaf 6)
WHITE=$(tput setaf 7)
BRIGHT=$(tput bold)
NORMAL=$(tput sgr0)
BLINK=$(tput blink)
REVERSE=$(tput smso)
UNDERLINE=$(tput smul)

# Shows all files/folders
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"

# Weather
alias weather='curl https://wttr.in'

# update per https://jira.atlassian.com/browse/SRCTREE-3172
alias sourcetree='/Applications/SourceTree.app/Contents/Resources/stree'

# https://github.com/hugomd/parrot.live
alias parrot='curl parrot.live'
alias partyparrot=parrot
alias party=parrot
alias testinternet=parrot

function curl-size {
  if [[ -z $1 ]]; then
    printf '%s\n' "Please provide a URL"
  else
    local response=$(curl -sI "$1" | tr -d '\r' )
    local statusCode=$(echo $response | awk '/^HTTP/ {print}')
    local byteLength=$(echo $response | awk '/[cC]ontent-[lL]ength/ {print $2}')
    if [[ -z $response ]]; then
      printf '%s\n' "Please provide a valid URL"
    else
      local disposition=UNKNOWN

      if [[ $statusCode = *"200"* ]]; then
        disposition=OK
      elif [[ $statusCode = *" 30"* ]]; then
        disposition=REDIRECT
        local newLocation=$(echo $response | awk '/^[lL]ocation:/ {print $2}')
        print $statusCode
      else
        disposition=OTHER
      fi

      function _doMath {
        divisor=$1
        print "scale=3;$byteLength/$divisor" | bc -l
      }

      if [[ $disposition == REDIRECT ]]; then
        printf 'redirecting to %s\n' $newLocation
        curl-size $(echo $newLocation)
      elif [[ $disposition == OTHER ]]; then
         print $statusCode
      else
        local value=""
        local unit=""
        if [[ -z $byteLength || ($byteLength == "0") ]]; then
          unit="Please provide a valid URL"
        elif (($byteLength>1000000000));then #1*10^9
          value=$(_doMath 1000000000)
          unit="gb"
        elif (($byteLength>1000000));then #1*10^6
          value=$(_doMath 1000000)
          unit="mb"
        elif (($byteLength>1000));then
          value=$(_doMath 1000)
          unit="kb"
        else
          value="$byteLength"
          unit="bytes"
        fi
        # printf '%s\n' "$(printf '%s\n' "$value" | grep -o '.*[1-9]') $unit"
        printf '%s\n' "${YELLOW}$(printf '%s\n' "$value" | grep -o '.*[1-9]') $unit"
      fi
    fi
  fi
}

function shortenGitUrl {
  if [[ -z $1 ]]; then
    printf '%s\n' "Please provide a URL"
  else
    response=$(curl -i https://git.io -F "url=$1" | grep -Fi Location);
    url=${response:s/Location: /}
    echo $url | pbcopy
    print $url
  fi
}
alias shortenGit=shortenGitUrl
alias shortgit=shortenGitUrl

# Markdown Viewer
# https://github.com/axiros/terminal_markdown_viewer
# Note: code snippets don't work if installed via pip. Use: `pip install git+https://github.com/axiros/terminal_markdown_viewer.git`
alias readMarkdown=mdv
alias rmd=mdv
alias markdown=mdv

function listAlias {
  text=''
  text+="  ${GREEN}weather\n"
  text+="  ${LIME_YELLOW}parrot / partyparrot / party / testinternet\n"
  text+="  ${GREEN}curl-size \$URL\n"
  text+="  ${LIME_YELLOW}simpleserver / ss\n"
  text+="  ${GREEN}hostfile / hosts\n"
  text+="  ${LIME_YELLOW}tree\n"
  text+="  ${GREEN}sourcetree\n"  
  text+="  ${LIME_YELLOW}shortenGit \$URL / shortenGitUrl / shortgit\n"  
  text+="  ${POWDER_BLUE}--- git --- \n"
  text+="  ${POWDER_BLUE}branches | remotes | hist/history | ignored\n"
  printf "%b" "$text"
}
alias Aliases=listAlias
alias aliases=listAlias


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

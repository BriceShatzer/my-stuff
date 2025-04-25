# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
# ZSH_THEME="robbyrussell"
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

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
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

source $ZSH/oh-my-zsh.sh

# User configuration
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/share/python:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/use:/usr/local/sbin"



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

alias flushdns='dscacheutil -flushcache && killall -HUP mDNSResponder'

alias reload=". ~/.zshrc && echo 'ZSH config reloaded from ~/.zshrc'"

function simpleserver() {ruby -run -e httpd . -p "${1:-8000}"}
alias ss=simpleserver

alias beep="echo -e '\07'"

alias finder=open

function shutdown() {
  if read -q "RESP?Are you sure you want to shutdown? "; then
      echo
      fire_immediateShutdown
      echo
      echo "shutting down..."      
  else 
    beep
    echo "'$RESP' not 'Y' or 'y'. Exiting..."
  fi
}
alias fire_immediateShutdown='sudo shutdown -r now'


# overwriting git to prompt & handle unset upstream pushes
git() {
  if [[ "$1" == "push" ]]; then
    shift
    local branch=$(git symbolic-ref --short HEAD 2>/dev/null)

    if git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1; then
      command git push "$@"
    else
      echo "⚠️  No upstream set for branch '$branch'."
      read "choice?👉 Set upstream to 'origin/$branch' and push? (y/n) "
      if [[ "$choice" == "y" ]]; then
        command git push --set-upstream origin "$branch" "$@"
      else
        echo "❌ Push cancelled."
        return 1
      fi
    fi
  if [[ "$1" == "chekcout" ]]; then
    echo "⚠️  No upstream set for branch '$branch'."
  else
    command git "$@"
  fi
}



#colors use ${RED}Red text ${NORMAL} back to normal
BLACK=$(tput setaf 0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
LIME_YELLOW=$(tput setaf 190)
PEACOCK_BLUE=$(tput setaf 74)
BLUE=$(tput setaf 4)
MAGENTA=$(tput setaf 5)
CYAN=$(tput setaf 6)
WHITE=$(tput setaf 7)
BRIGHT=$(tput bold)
NORMAL=$(tput sgr0)
SALMON=$(tput setaf 209)
BLINK=$(tput blink)
REVERSE=$(tput smso)
UNDERLINE=$(tput smul)

function listTextFormat() {
  text=''
  text+=" ${BLACK}BLACK\n"
  text+=" ${RED}RED\n"
  text+=" ${GREEN}GREEN\n"
  text+=" ${YELLOW}YELLOW\n"
  text+=" ${LIME_YELLOW}LIME_YELLOW\n"
  text+=" ${PEACOCK_BLUE}PEACOCK_BLUE\n"
  text+=" ${BLUE}BLUE\n"
  text+=" ${MAGENTA}MAGENTA\n"
  text+=" ${CYAN}CYAN\n"
  text+=" ${SALMON}SALMON\n"
  text+=" ${WHITE}WHITE\n"
  text+=" ${BRIGHT}BRIGHT\n"
  text+=" ${NORMAL}NORMAL\n"
  text+=" ${BLINK}BLINK\n"
  text+=" ${REVERSE}REVERSE (\${NORMAL} to end)${NORMAL}\n"
  text+=" ${UNDERLINE}UNDERLINE(\${NORMAL} to end)${NORMAL}\n"

  printf "%b" "$text"
}
alias listColors=listTextFormat
alias listcolors=listTextFormat
alias colors=listTextFormat

# Shows all files/folders
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"

# See occupid ports 
alias ports='lsof -i -P -n | grep LISTEN'

# See running node processes 
alias runningNode='ps | grep node'
alias runningNodes=runningNode
alias showNodes=runningNode

# Weather
alias weather='curl https://wttr.in/Chicago\?u'

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
        if [[ -z $byteLength || $byteLength == "0" ]]; then
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

# Glow - markdown reader
# https://github.com/charmbracelet/glow
alias rmd=glow

# update per https://jira.atlassian.com/browse/SRCTREE-3172
alias sourcetree='/Applications/SourceTree.app/Contents/Resources/stree'

alias subl='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'

# list available scripts from package.json
function listScripts () {node -e "console.log(Object.keys(require('.' + require('path').sep + 'package.json').scripts || {}))"}
alias list-npm=listScripts

# Function to suggest running `npm ci` instead of `npm install`
# __npm_install() {
#   if [[ "$1" == "install" ]]; then
#     echo "Consider running 'npm ci' instead of 'npm install' to ensure you have the exact dependencies & versions listed in the package-lock.json file."
#   fi
#   command npm "$@"
# }
# Override the npm command with the custom function
# alias npm='__npm_install'

# SAN stuff 
# alias san-start="vip dev-env start --slug=san"
# alias san-stop="vip dev-env stop --slug=san"

function listAlias {
  text='\n'
  text+="  ${GREEN}weather\n"
  text+="  ${LIME_YELLOW}parrot / partyparrot / party / testinternet\n"
  text+="  ${GREEN}listTextFormat / listColors / listcolors / colors list\n"  
  text+="  ${LIME_YELLOW}curl-size \$URL\n"
  text+="  ${GREEN}simpleserver / ss\n"
  text+="  ${LIME_YELLOW}hostfile / hosts | flushdns\n"
  text+="  ${GREEN}tree\n"
  text+="  ${LIME_YELLOW}sourcetree\n"  
  text+="  ${GREEN}restartAudio\n"  
  text+="  ${LIME_YELLOW}fire_immediateShutdown\n"  
  text+="  ${GREEN}showNodes / runningNodes / runningNode\n" 
  text+="  ${LIME_YELLOW}ports\n"  
  text+="  ${GREEN}rmd / glow\n"
  text+="\n"  
  text+="  ${PEACOCK_BLUE}--- git --- \n"
  text+="  ${PEACOCK_BLUE}branches | remotes | hist/history | ignored\n"
  text+="\n"
  text+="  ${LIME_YELLOW}list-npm\n"
  text+="\n"
  text+="  ${SALMON}--- builtin --- \n"
  text+="  ${SALMON}uptime | finder . | top\n"

  printf "%b" "$text"
}
alias Aliases=listAlias
alias aliases=listAlias



export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion	


# adding custom php version to path
export PATH="/opt/homebrew/opt/php@8.3/bin:$PATH"
export PATH="/opt/homebrew/opt/php@8.3/sbin:$PATH"

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"


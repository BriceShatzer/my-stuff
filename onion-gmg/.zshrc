# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=/Users/briceshatzer/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="custom"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

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
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git mercurial nvm rvm docker)



# User configuration
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/use:/usr/local/sbin"

source $ZSH/oh-my-zsh.sh
source ~/.zsh-nvm/zsh-nvm.plugin.zsh

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

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias reload=". ~/.zshrc && echo 'ZSH config reloaded from ~/.zshrc'"

function simpleserver() {ruby -run -e httpd . -p "${1:-8000}"}
alias ss=simpleserver

alias beep="echo -e '\07'"

alias restart="sudo shutdown -r now"

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

#http://brettterpstra.com/projects/mdless/
# ^ ruby gem, may require: sudo pip install Pygments
# function readMarkdown() {
#     cat $1 | mdless
# }
# alias rmd=readMarkdown

# alias homestead='function __homestead() { (cd ~/Homestead && vagrant $*); unset -f __homestead; }; __homestead'
# alias homesteadYAML='nano ~/.homestead/Homestead.yaml'

# Shows all files/folders
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"

alias hostfile='sudo nano -w /private/etc/hosts'
alias hosts=hostfile

# -- No Longer functional :(
#Magic Card util
#alias mtg="mtg --colorize"

# Weather
alias weather='curl https://wttr.in'

# https://github.com/hugomd/parrot.live
alias parrot='curl parrot.live'
alias partyparrot=parrot
alias party=parrot
alias testinternet=parrot

# update per https://jira.atlassian.com/browse/SRCTREE-3172
alias sourcetree='/Applications/SourceTree.app/Contents/Resources/stree'
#alias sourcetree = 'open -a SourceTree .'
#alias st = sourcetree

#export NVM_DIR="/Users/Brice/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

##---VPN---
function vpn_password {
  security 2>&1 >/dev/null find-generic-password -ga kinja-vpn \
  | ruby -e 'print $1 if STDIN.gets =~ /^password: "(.*)"$/'
}

function vpn {
  OPENCONNECT=$(pidof openconnect)
  case "$1" in
    start)
      if [ -z "$OPENCONNECT" ] ; then
        echo "Connecting to VPN ..."
        echo $(vpn_password) | sudo openconnect --no-dtls --background -u xxxxxxxx \
          --passwd-on-stdin xxx-xxx.xxxxx-xxx.xxx

      fi
      ;;
    stop)
      if [ -n "$OPENCONNECT" ] ; then
        echo "Closing VPN connection ..."
        sudo killall -SIGINT openconnect
      fi
      ;;
    restart)
      vpn stop
      vpn start
      ;;
    status)
      if [ -n "$OPENCONNECT" ] ; then
        echo "VPN is connected"
      else
        echo "VPN is disconnected"
      fi
      ;;
    *)
      echo "Usage: vpn {start|stop|restart}"
      return 1
  esac
}

function pidof {
  COMMAND="$1"
  PID=$(ps -A -o pid,command | grep $COMMAND | grep -v grep | awk '{print $1}')
  if [ -n "$PID" ]; then
    echo "$PID"
  fi
}


function curl-size {
  if [[ -z $1 ]]; then
    printf '%s\n' "Please provide a URL"
  else
    response=$(curl -sI "$1" | tr -d '\r' )
    statusCode=$(echo $response | awk '/^HTTP/ {print}')
    byteLength=$(echo $response | awk '/[cC]ontent-[lL]ength/ {print $2}')

    if [[ $statusCode = *"200"* ]]; then
      redirect=false
    elif [[
      $statuscode = *"301"* ||
      $statuscode = *"307"* ||
      $statuscode = *"308"* ||
    ]]; then
      redirect=true
      newLocation=$(echo $response | awk '/^[lL]ocation:/ {print $2}')
      print $statusCode
    elif [[ $statuscode != *"200"* ]]; then
      nonStandard=true
    fi

    function _doMath {
      divisor=$1
      print "scale=3;$byteLength/$divisor" | bc -l
    }

    if [[ $redirect = true ]]; then
      printf 'redirecting to %s\n' $newLocation
      curl-size $(echo $newLocation)
    elif [[ $nonStandard = true ]]; then
       print $statuscode
    else
      if [[ -z $byteLength || ($byteLength == "0") ]]; then
        value=""
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

      printf '%s\n' "${YELLOW}$(printf '%s\n' "$value" | grep -o '.*[1-9]') $unit"
    fi
  fi
}


function initMantle {
  printf '%s\n' "intializing Kinja-Mantle"
  cd /Users/briceshatzer/Projects/kinja-workspace/kinja-mantle
  sbt run
}
alias mantle=initMantle
alias startMantle=initMantle


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


#---Kinja Alias---
alias kinja-selenium='~/Projects/kinja-workspace/kinja-mantle/node_modules/.bin/selenium-standalone start'
alias prio-tests='npm run test:wd -- -s circle -f test/webdriver/specs/ads/InPostAdZones-specs.js'
alias pm2-kill='npx pm2 stop all'
alias pm2-killall='npx pm2 stop all'
alias pm2-stop='npx pm2 stop all'
alias pm2-stopall='npx pm2 stop all'


function listAlias {
  text=''
  text+="  ${GREEN}weather\n"
  text+="  ${LIME_YELLOW}parrot / partyparrot / party / testinternet\n"
  text+="  ${GREEN}curl-size $URL\n"
  text+="  ${LIME_YELLOW}simpleserver / ss\n"
  text+="  ${GREEN}hostfile\n"
  text+="  ${LIME_YELLOW}initMantle / mantle / startMantle\n"
  text+="  ${GREEN}mtg\n"
  text+="  ${LIME_YELLOW}party / parrot / partyparrot / testinternet\n"
  text+="  ${GREEN}pm2-kill\n"
  text+="  ${LIME_YELLOW}rmd / readMarkdown\n"
  text+="  ${GREEN}sourcetree\n"
  text+="  ${LIME_YELLOW}tree\n"
  printf "%b" "$text"
}
alias Aliases=listAlias
alias aliases=listAlias

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

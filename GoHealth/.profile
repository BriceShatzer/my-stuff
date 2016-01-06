
export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

prefered__shell=
if [ -x /bin/zsh ]; then
  prefered_shell=/bin/zsh
fi

if [ -n "$prefered_shell" ]; then
  case $- in
    *i*) SHELL=$prefered_shell; export SHELL; exec "$prefered_shell";;
  esac
_byobu_sourced=1 . /usr/bin/byobu-launch

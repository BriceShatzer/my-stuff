### lives in ~/.oh-my-zsh/lib/correction.zsh

if [[ "$ENABLE_CORRECTION" == "true" ]]; then
  alias cp='nocorrect cp'
  alias man='nocorrect man'
  alias mkdir='nocorrect mkdir'
  alias mv='nocorrect mv'
  alias sudo='nocorrect sudo'
  alias su='nocorrect su'

### this stops correcting commands & arguments and only corrects commands
### this stops "npm run storybook" from prompting "zsh: correct 'storybook' to '.storybook' [nyae]?"
  # setopt correct_all
  unsetopt correct_all  
  setopt correct
fi

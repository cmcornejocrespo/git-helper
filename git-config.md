# git config
## levels
```
--local # repo level
--global # user level
--system # machine level
```
#### --global
```
git config --global --list
cat ~/.gitconfig
```
```
[user]
	name = davidegaspar
	email = git@davidegaspar.com
[core]
	editor = vim
[push]
	default = simple
```
#### --local
```
git config --local --list
cat .git/config
```
## CR/LF
Unix
```
git config --global core.autocrlf input
```
Win
```
git config --global core.autocrlf true
```

## push
push only the current branch
```
git config --global push.default simple
```

## pull
```
git config --global pull.rebase true
```
## ReReRe
Reuse Recorded Resolution
```
git config --global rerere.enabled true
```
## Colors
```
git config --global color.ui true
```
## Alias
```
git config --global alias.s "status -s"
git config --global alias.lg "log --oneline --decorate --all --graph"
```

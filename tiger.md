# 虎 tiger

## clone

git clone `url` -b `branch/commit/tag` --depth `n` `directory`

> andy
```
cd ~/tmp
git clone https://github.com/davidegaspar/tiger.git andy
cd andy
git config --local pull.rebase false
git lg
```

> catie
```
cd ~/tmp
git clone https://github.com/davidegaspar/tiger.git -b develop catie
cd catie
git config --local pull.rebase false
git lg
```

## branch

#### create

git branch `branch_name`

#### create + checkout

git checkout -b `branch_name`

> andy
```
git checkout -b feature/A
node commit.js ben.txt
node commit.js ben.txt
node commit.js ben.txt
git lg
```

> catie
```
git checkout -b feature/B
node commit.js catie.txt
node commit.js catie.txt
git lg
```

## merge

git merge `branch_name`

#### fast forward

> andy
```
git checkout develop
git merge feature/A
git push
git branch -d feature/A
git lg
```

#### recursive

> catie
```
git checkout develop
git pull
git lg
git merge feature/B
git push
git branch -d feature/B
git lg
```

## push/pull

#### push rejected

> andy
```
git checkout -b feature/C
node commit.js names.txt
node commit.js names.txt
node commit.js names.txt
git lg
git checkout develop
git merge feature/C
git push
git fetch
git pull
git push
git branch -d feature/C
git lg
```

#### git pull merge conflict

> catie
```
git checkout -b feature/D
node commit.js names.txt
node commit.js names.txt
git lg
git checkout develop
git merge feature/D
git push
git pull
vim names.txt
git status
git add names.txt
git commit
git push
git branch -d feature/D
git lg
```

## branch collaboration

#### push

git push -u `remote` `branch`

> andy
```
git checkout -b feature/E
node commit.js names.txt
node commit.js names.txt
git push -u origin feature/E
git lg
# have a look at github
```

#### pull

> catie
```
git checkout feature/E
git fetch
git lg
node commit.js names.txt
node commit.js names.txt
git push
git lg
```

#### stop collaboration

git push origin :`branch`

> andy
```
git pull
git lg
git branch -a
git push origin :feature/E
git lg
git branch -a
# have a look at github
git branch -d feature/E
git checkout develop
git branch -d feature/E
git branch -D feature/E
git lg
```

#### prune

git remote prune `remote`

> catie
```
git branch -a
git checkout develop
git branch -d feature/E
git branch -a
git remote prune origin
git branch -a
git lg
```

## [Tags](git-tag.md)

## Rebase

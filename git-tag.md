# git tag

## create

git tag `type(s)` `tag_name`

> andy
```
git checkout develop
git fetch
git pull
git tag fix
git lg
node commit.js names.txt
node commit.js names.txt
node commit.js names.txt
git lg
git tag -a 0.1.0
git lg
```

#### create later

git tag -a `tagname` `commit`

> andy
```
git tag -a gates 905150e
git lg
```

## list

> andy
```
git tag
git tag -l 'f*'
git show-ref --tags
# working on an alias
```

## checkout

git checkout `tag_name`

> andy
```
git checkout fix
git lg
```

#### checkout to branch

git checkout -b `branch_name` `tag_name`

> andy
```
git checkout -b fix/gates gates
git lg
node commit.js names.txt
git lg
```

## push

> andy
```
git push origin --tags
```

## pull

> catie
```
git pull --tags
git lg
```

## delete

git tag -d `tag_name`

> andy
```
git tag -d fix
git tag -d gates
git tag
```

> catie
```
git pull --tags
git tag
```

#### delete remote

git push `remote` :refs/tags/`tag_name`

> andy
```
git push origin :refs/tags/fix
git push origin :refs/tags/gates
```

> catie
```
git tag -d fix
git tag -d gates
git tag
```

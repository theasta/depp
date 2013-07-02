# depp - A DEPendency Parser

```shell
depp
```

will lookup for all package.json files in subfolders (node_modules folders are excluded though) and give a quick overview of the dependendies :

```shell
---------------------------
depp@0.0.1
/Users/alex/Dropbox/git/depp
---------------------------
- dependencies:
    walk: ~2.2.1
    optimist: ~0.6.0
```

```shell
depp -dev
```

Will also list the devDependencies


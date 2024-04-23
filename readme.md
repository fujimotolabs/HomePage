## devcontainerの起動の仕方

1. /.devcontainer内に.envファイルを作成
2. envファイルを内容を
```
KEY_NAME=/.ssh以下のkeyの名前に変更
(例)　github, id_rsaなどなど
```
3. ホストOS側に、/.ssh/configがなければ、
```
Host github.com
  IdentityFile ~/.ssh/keyの名前
  User git
```

## GitHub Pages　
```main```ブランチに、PRかPUSH(管理者以外不可)のときに、github/actionsにてbuildおよびdeploy 

## 技術選定
vite + Vue3 




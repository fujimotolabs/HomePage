# 藤本研究室ホームページ

## devcontainer の起動の仕方

1. /.devcontainer 内に.env ファイルを作成
2. env ファイルを内容を

   ```bash
   KEY_NAME=/.ssh以下のkeyの名前に変更
   (例)　github, id_rsaなどなど
   ```

3. ホスト OS 側に、/.ssh/config がなければ、

```bash
Host github.com
  IdentityFile ~/.ssh/keyの名前
  User git
```

## GitHub Pages

`main`ブランチに、PR か PUSH(管理者以外不可)のときに、github/actions にて build および deploy

## 技術選定

vite + Vue3

# 藤本研究室ホームページ

## devcontainer の中での ssh よる github の接続方法

### windows の場合

1. 管理者権限の PowerShell で `winget install Microsoft.OpenSSH.Beta --override ADDLOCAL=Client`
2. 別の Powershell で`ssh -V`してバージョンが上がっていれば完了

3. `Get-Service ssh-agent`で`Running`以外の場合は、`Start-Service ssh-agent`を実行
4. `ssh-add`を実行し、local 環境の ssh 鍵を取り込む(鍵の名前を id_rsa 以外などの特殊な羅列してる場合はパスを通す)
5. `~\HomePage>`から`code .`実行(wsl からではだめ)
6. `shift+CTRL+P`で`devcontainer:rebuild`

### macOS の場合

1. macOS にはデフォルトで OpenSHH がインストールされてる
2. ssh-agent 起動して、windows の`4. ~ 6.`参考に実行

#### おすすめ

    ~/.zprofile に(なければ作成)以下入力

    ```bash
    eval "$(ssh-agent)"
    ssh-add --apple-use-keychain ~/your ssh key path
    ```

`your ssh key path`は、秘密鍵の方(.pub じゃない方)の絶対パスを入力

### linux の場合

openSHH ダウンロードして、あとは同じ

## GitHub Pages

`main`ブランチに、PR か PUSH(管理者以外不可)のときに、github/actions にて build および deploy

## 技術選定

vite + Vue3

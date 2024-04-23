# 藤本研究室ホームページ

## devcontainer の中での ssh よる github の接続方法

### windows の場合

1. 管理者権限の PowerShell で `winget install Microsoft.OpenSSH.Beta --override ADDLOCAL=Client`
2. 別の Powershell で`ssh -V`してバージョンが上がっていれば完了

3. `Get-Service ssh-agent`で`Running`以外の場合は、`Start-Service ssh-agent`を実行
4. `ssh-add`を実行し、local 環境の ssh 鍵を取り込む
5. `~\HomePage>`から`code .`実行(wsl からではだめ)
6. `shift+CTRL+P`で`devcontainer:rebuild`

## GitHub Pages

`main`ブランチに、PR か PUSH(管理者以外不可)のときに、github/actions にて build および deploy

## 技術選定

vite + Vue3

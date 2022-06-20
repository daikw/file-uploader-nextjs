# 参考リンク

- [NextJS: Simple Upload file to server - CodeSandbox](https://codesandbox.io/s/thyb0?file=/pages/index.js:899-915)
- [node.js - How to download a file on Next.js using an API route - Stack Overflow](https://stackoverflow.com/questions/68490546/how-to-download-a-file-on-next-js-using-an-api-route)
-

# @daikw の頭の中

1. すぐ使えそうなテンプレがないか調べる -> `create-next-app` と `with-typescript` が見つかる
2. 使えそうなところを利用して実装する: `User` -> `File` に変換し、いらないものを削る
3. それっぽい ダウンロード / アップロード のサンプルを真似して実装する
4. ファイルストレージ (`_uploaded_files`) とのグルーコードを書く

# What's next?

## Light

- フッター・ヘッダーを凝ったものにする
- ファイルのアップロード成功・失敗を画面に表示する

## Medium

- ファイルストレージへのアクセスに排他制御を入れる
- `material-ui` を入れて見た目を綺麗にする
- `File` を一度にたくさん受け取れるようにする

## Challenging

- ファイルストレージをインメモリストア(`Redis`)やデータベース(`SQLite`)に換装する
- ファイルのプレビュー機能をつける
- ファイルアップロード時にウイルスチェックを入れる
- 特殊なファイルを作って、Next.js の実行サーバに侵入する

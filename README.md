[Photosynth/その他/勉強会/社内イベント/Next.js 勉強会/README - photosynth-inc.esa.io](https://photosynth-inc.esa.io/posts/4989) のお題アプリの参考実装です。

# 使い方

1. まず、[お題のアプリ](https://photosynth-inc.esa.io/posts/4989#Next.js%20%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B:%20OPTIONAL)を自分で作ってみる
1. この参考実装を起動してみて、作ったものと比較してみる
1. 参考実装か、自分で作ったものに対して改善を加えてみる

## 動作環境

- `node v14.10.0` で作ったが、その辺のバージョンなら大体動くと思われる
- [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) で起動する
  ```
  # devサーバの起動
  npm run dev
  ```

# @daikw の頭の中

1. すぐ使えそうなテンプレがないか調べる -> `create-next-app` と [`with-typescript`](https://github.com/vercel/next.js/tree/canary/examples/with-typescript) が見つかる
1. 使えそうなところを利用して実装する: `User` -> `File` に変換し、いらないものを削る
1. それっぽい ダウンロード / アップロード のサンプルを真似して実装する
1. ファイルストレージ (`_uploaded_files`) とのグルーコードを書く

## 参考にしたサンプル

- [NextJS: Simple Upload file to server - CodeSandbox](https://codesandbox.io/s/thyb0?file=/pages/index.js:899-915)
- [node.js - How to download a file on Next.js using an API route - Stack Overflow](https://stackoverflow.com/questions/68490546/how-to-download-a-file-on-next-js-using-an-api-route)

# What's next?

## Light

- フッター・ヘッダーを凝ったものにする
- ファイルのアップロード成功・失敗を画面に表示する
- アップロード先ディレクトリを、汎用の一時ディレクトリにする
- `fs` を `fs/promises` に置換する
- 特定のファイルをアップロードすることで、アプリケーションに DOS 攻撃をする / このパスの攻撃を緩和する

## Medium

- ファイルストレージへのアクセスに排他制御を入れる
- `material-ui` を入れて見た目を綺麗にする
- `File` を一度にたくさん受け取れるようにする

## Challenging

- ファイルストレージをインメモリストア(`Redis`)やデータベース(`SQLite`)に換装する
- ファイルのプレビュー機能をつける
- ファイルアップロード時にウイルスチェックを入れる
- 特殊なファイルを作って、Next.js の実行サーバに侵入する

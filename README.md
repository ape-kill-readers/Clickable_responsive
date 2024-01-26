# Clickable_responsive
クリッカブルマップのレスポンシブ対応をテストする。
・日本地図のimageを使う
・都道府県の位置に対応した座標データを取得しjsonファイルに保存
・取得した座標データに対してハイパーリンクを付与し画面遷移を可能にする
・imageMapResizerライブラリを使用し、画像のリサイズに応じて画像内の座標を再計算する


# ImageMapResizer ライブラリの概要
画像のリサイズに応じた座標の変換: 画像がリサイズされると、画像内の座標もそれに合わせて変換する必要がある。imageMapResizerは、画像のリサイズに応じて coords 属性の値を再計算し、適切な座標を保持。

画像のリサイズ検知とリサイズ処理のトリガー: imageMapResizerは、画像のリサイズを検知し、その後に画像マップをリサイズする必要がある。これは、ブラウザウィンドウのリサイズやデバイスの回転など、さまざまなイベントに対応する必要がある。

ブラウザ間の互換性: imageMapResizerは、異なるブラウザやデバイスでの動作を考慮して開発されており、幅広い環境で正しく機能するように設計されている。

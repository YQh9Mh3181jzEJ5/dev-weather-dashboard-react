# 🌦️ Weather App

OpenWeather API を使用して世界の主要都市の天気を表示するシンプルなアプリケーションです。

## 🚀 特徴

- 🔍 都市名で天気を検索
- 🌡️ 現在の気温表示
- 💧 湿度情報の表示
- 🌬️ 風速情報の表示
- 🎨 美しい UI デザイン

## 🛠️ 使用技術

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- Tailwind CSS 3.4.10
- React Icons 5.3.0

## 📦 主要コンポーネント

- Weather.tsx: メインの天気表示コンポーネント
- App.tsx: アプリケーションのルートコンポーネント

## 🏗️ プロジェクト構造

```shell
src/
  ├── components/
  │   └── Weather.tsx
  ├── assets/
  │   └── react.svg
  ├── App.tsx
  ├── index.css
  └── main.tsx
public/
  └── vite.svg
```

## 🔧 設定ファイル

tsconfig.json: TypeScript 設定
vite.config.ts: Vite 設定
tailwind.config.js: Tailwind CSS 設定
eslint.config.js: ESLint 設定

## 📝 TODO

OpenWeather API との連携実装
検索機能の実装
エラーハンドリングの追加
レスポンシブデザインの改善
単体テストの追加

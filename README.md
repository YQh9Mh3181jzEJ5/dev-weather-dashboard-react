# 🌦️ WeatherNow

OpenWeather API を使用して世界の主要都市の天気をリアルタイムで表示するシンプルなアプリです。

🌐 **デプロイ済みアプリ**: [https://weather-app-ruby-nu.vercel.app/](https://weather-app-ruby-nu.vercel.app/)

## 🚀 特徴

- 🔍 都市名での天気検索
- 🌡️ 現在の気温表示
- 💧 湿度情報の表示
- 🌬️ 風速情報の表示
- 🔄 効率的な状態管理とデータフェッチング
- 🎭 コンポーネントのメモ化によるパフォーマンス最適化

## 🛠️ 使用技術

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.3
- Tailwind CSS 3.4.10
- React Icons 5.3.0
- Axios 1.7.7
- TanStack Query (React Query) 5.54.1

## 📦 主要コンポーネント

- `Weather.tsx`: メインの天気表示コンポーネント
- `SearchBar.tsx`: 都市検索用コンポーネント
- `WeatherIcon.tsx`: 天気アイコン表示コンポーネント
- `WeatherInfo.tsx`: 詳細天気情報表示コンポーネント
- `useWeather.ts`: 天気データフェッチング用カスタムフック
- `useWeatherSearch.ts`: 検索機能を管理するカスタムフック
- `api.ts`: Axios を使用した API 呼び出しロジック

## 🏗️ プロジェクト構造

```shell
src/
├── App.tsx
├── assets
│   └── landscape.jpg
├── components
│   ├── SearchBar
│   │   └── SearchBar.tsx
│   └── Weather
│       ├── Weather.tsx
│       ├── WeatherIcon.tsx
│       └── WeatherInfo.tsx
├── constants
│   ├── config.ts
│   └── icon.ts
├── hooks
│   ├── useWeather.ts
│   └── useWeatherSearch.ts
├── index.css
├── main.tsx
├── type
│   └── index.ts
├── utils
     └── api.ts
```

## 📝 TODO

- [ ] 複数日の天気予報表示
- [ ] ユーザーの位置情報に基づく自動天気表示
- [ ] お気に入り都市の保存機能
- [ ] 詳細な気象データのグラフ表示

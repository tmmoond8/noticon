# Noticon

> A icon storage service for Notion

All images are stored safely in the [Cloudinary](https://cloudinary.com). You can search icons you want, or upload icons you do.

https://noticon.tammolo.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/7cbfbeae-6a72-4dbf-9deb-85cb90a46712/deploy-status)](https://app.netlify.com/sites/noticon/deploys)

![](https://user-images.githubusercontent.com/11402468/92193883-59fcac00-eea4-11ea-86d6-f0c90956a827.gif)

## Project Stack

Client
Following items are core frontend technologies used in this project:

- React
- Next.js
- Emotion
- TypeScript
- MobX
- Notion-UI
- react-easy-crop
- Google Sheets API (for simple database)
- Firebase realtime-database

## Run on your machine

### Prerequistes

- Node.js v12^
- yarn

### Installation

1. Clone the project & Install packages from npm

```bash
$ git clone https://github.com/tmmoond8/noticon.git
$ cd noticon && yarn
```

2. Rename .env.sample to .env

3. Run

```bash
$ yarn dev
```

http://localhost:3000

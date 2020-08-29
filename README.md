# Noticon

> the icon storage service for Notion

All images are stored safely in the [Cloudinary](https://cloudinary.com). You can search icons you want, or upload icons you do.

http://noticon.tammolo.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/7cbfbeae-6a72-4dbf-9deb-85cb90a46712/deploy-status)](https://app.netlify.com/sites/noticon/deploys)

![](https://user-images.githubusercontent.com/11402468/63856567-e72d3b00-c9dc-11e9-9e36-6a5d85803464.gif)

## Project Stack

Client
Following items are core frontend technologies used in this project:

- React
- Next.js
- Emotion
- TypeScript
- MobX
- Google Sheets API (for simple database)

## Run on your machine

### Prerequistes

- Node.js v10^
- yarn

### Installation

1. Clone the project & Install packages from npm

```bash
$ git clone https://github.com/tmmoond8/noticon.git
$ cd noticon && yarn
```

2. Rename .env.sample to .env

```bash
REACT_APP_CLOUDINARY_UPLOAD_PRESET=test_preset
REACT_APP_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/dgggcrkxq/image/upload
REACT_APP_CLOUDINARY_API_KEY=193243387542668
REACT_APP_GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfycbw6zKYeWddESrtPTNZP-fjGUF_uWpMyeIVR7zkT16_IlNkMqYo/exec
REACT_APP_SHEET_NAME=sample
```

3. Run

```bash
$ yarn dev
```

http://localhost:3000

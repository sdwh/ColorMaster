# 灰色と青

## Demo

使用 Vue CLI 練習的第一個 Vue Side Projects.

[🍷 灰色と青 | sdwh.dev](https://color.sdwh.dev)

### About

[Author's Blog](https://sdwh.dev)

## 專案設定

本機必須先安裝 [Node.js](https://nodejs.org/en/)

```
npm install
```

Clone 後必須先執行 npm install 安裝相關的 node_modules。

### Compiles and hot-reloads for development
```
npm run serve
```

開以享受即時的開發結果預覽，前端開發的行雲流水感來自於此 😎

### Compiles and minifies for production

```
npm run build
```

執行後會進行下列指令：

```bash
# Create dist/ for compiled files
vue-cli-service build

# Push files to gh-page Branch
cd .\dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/sdwh/ColorMaster.git master:gh-pages
```



### Lints and fixes files
```
npm run lint
```
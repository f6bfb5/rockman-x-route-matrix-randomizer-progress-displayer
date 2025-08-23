# Rockman X Route MatriX Randomizer Progress Displayer

Still WIP

## 使用方式

1. 從Releases下載`RouteMatriXRandomizer_progress_displayer.zip`
2. 和`RouteMatriXRandomizer_progress_tracker.zip`一同解壓縮到`boot.lua`所在位置
3. 遊戲執行後，在OBS的瀏覽器來源中勾選本機檔案，選擇解壓縮後的`index.html`
4. 尺寸（瀏覽器來源屬性內的寬度和高度）可依需求自行設定，圖示和文字大小會隨尺寸響應變化

## 顯示內容

- 關卡
  - 一排 附圖
  - 未/已解鎖/已通關/變化
- 特殊武器
  - 考慮放一起或再一排 可圖可字
- 西格瑪鑰匙
  - 文字
- 愛心武器E罐
  - 文字
- 裝甲 波升劍
  - 附圖
- X炮強化項目
  - 文字
- 傑洛屍體/特殊頭目
  - 可圖可字
- 騎乘裝甲
  - 隨意
- 死亡/IFG/時間/SEED

## TODO

- 從網址params切換設定
- 只顯示當前遊戲內容
- 顯示取得記錄
- 圖示
- 動畫效果
- [VAVA_Flag, VAVA_Stage]

## library

- SolidJS
- TailwindCSS
- [vite-plugin-singlefile - npm](https://www.npmjs.com/package/vite-plugin-singlefile)
- emfont
- MuzaiPixel

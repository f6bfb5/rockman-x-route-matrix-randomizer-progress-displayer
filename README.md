# Route MatriX Randomizer progress displayer

## 事前準備/prerequisites

用於圖像化[Route MatriX Randomizer progress tracker](https://github.com/fsworld009/Route-MatriX-Randomizer_progress_tracker/)輸出的進度表網頁

## 使用方式/how to use

1. 從Releases下載`RouteMatriXRandomizer_progress_displayer.zip`
2. 解壓縮到`boot.lua`所在的位置
3. 在OBS的瀏覽器來源中勾選「本機檔案」，選擇`index.html`
4. 尺寸（瀏覽器來源屬性內的寬度和高度）可依需求自行設定，圖示和文字大小會隨尺寸響應變化

## library

- SolidJS
- TailwindCSS
- [vite-plugin-singlefile - npm](https://www.npmjs.com/package/vite-plugin-singlefile)
- solid-motionone
- emfont
- MuzaiPixel

## TODO

- 從網址params切換設定
  - 顯示所有遊戲內容
  - 只顯示當前遊戲內容
  - 顯示最後取得記錄
- 動畫效果

## note

- 共通
  - 標題
  - 關卡
    - 8x1/4x2
    - 未/已解鎖/已通關/變化
  - 特殊武器
    - 8x1/4x2
    - 覆蓋於關卡上？
  - 西格瑪鑰匙
    - 文字
  - 愛心/武器/E罐
    - 文字
  - 裝甲/波升劍
  - X炮強化項目
- X2
  - 傑洛屍體
  - VAVA/VFF/MBB
    - [VAVA_Flag, VAVA_Stage]
- X3
  - 騎乘裝甲
- 其他
  - 死亡/IFG/時間/SEED

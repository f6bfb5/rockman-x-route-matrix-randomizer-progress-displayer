# Route MatriX Randomizer progress displayer

![screenshot](/screenshot.jpg)

用於圖像化[Route MatriX Randomizer progress tracker](https://github.com/fsworld009/Route-MatriX-Randomizer_progress_tracker/)輸出的進度表網頁

## 事前準備/prerequisites

- [Route MatriX Randomizer progress tracker](https://github.com/fsworld009/Route-MatriX-Randomizer_progress_tracker/)
  - `progress_tracker/`
  - `patched_boot.lua`

## 安裝方式/how to install

1. 從Releases下載`RouteMatriXRandomizer_progress_displayer.zip`
2. 解壓縮到`boot.lua`所在的位置

解壓縮後的目錄結構應如下：

```plain
RouteMatriXRandomizer
├── bin/
├── lua/
├── boot.lua
├── boot.smc
├── spoiler.txt
├── progress_tracker/ (從「事前準備」的repo中新增)
├── patched_boot.lua (從「事前準備」的repo中新增)
├── progress_tracker_assets/ (從「Release」解壓縮)
└── index.html (從「Release」解壓縮)
```

若有其他想並用的記錄顯示網頁，只需將`index.html`更名為其他任意名稱，即可避免衝突

## 使用方式/how to use

1. 在OBS的瀏覽器來源中勾選「本機檔案」，選擇`index.html`
2. 尺寸（瀏覽器來源屬性內的寬度和高度）可依需求自行設定，圖示和文字大小會隨尺寸響應變化
3. 如果有出現下方被截斷的情況，請依使用的版位增加高度或縮減寬度

## 選項/options

~~想啟用選項，需在複製「本機檔案」欄位上的網址後，取消勾選，將網址改為`file:///`+`複製網址`~~

~~在網址末端可用`?選項1=值&選項2=值&選項3=值`的方式進行調整~~
~~例如`index.html?s=1`~~

- ~~`s`~~
  - ~~`1`：只顯示當前遊戲~~
  - ~~預設值：顯示所有遊戲~~

對OBS的瀏覽器來源右鍵→點選「互動」→點擊視窗畫面，可切換目前/所有遊戲/取得記錄模式

如果字體的窄體顯示效果不正確時，於互動中再次點擊畫面進行切換即可

## library

- SolidJS
- TailwindCSS
- [vite-plugin-singlefile - npm](https://www.npmjs.com/package/vite-plugin-singlefile)
- solid-motionone
- solid-transition-group
- js-crc
- emfont
- MuzaiPixel
- FusionPixelFont12pxMono
- [webで自動に長体をかける｜Solution - ソリューション｜株式会社イージェーワークス](https://www.ejworks.com/solution/detail.html?article_id=150)

## TODO

- [x] 切換設定
  - [ ] ~~從網址params取得~~
  - [x] 全畫面點擊
- [ ] 設定
  - [x] 顯示所有遊戲內容
  - [x] 只顯示當前遊戲內容
  - [x] 顯示最後取得記錄
  - [ ] 單行式顯示
- [ ] 動畫效果
  - [x] Motion
  - [ ] 微調
- [ ] ~~recalculate aspect ratio~~
- [ ] long click>slide to switch?
- [ ] wheel to add/reduce display text line
- [x] check source by crc to avoid redundant parse

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
- log
  - get diff from object?

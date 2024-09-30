# Express 專案

## package.json 中的 dependencies 與 devDependencies 分別是什麼

* dependencies: 我在這個應用程式上用了什麼套件
* devDependencies: 我只有在開發或測試的時候需要的套件

## package.json 中的 scripts 這個區塊怎麼用？

* scripts 是用來運行 npm run XXXX 命令的，可以自定義一些命令來執行測試、啟動應用程式

## Port number 要怎麼以環境變數來設定？

* 可以使用 process.env 來讀取環境變數並設定 port number
* 可以使用 .env 檔案搭配 dotenv 套件

## 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

* 要上傳：package.json、package-lock.json、app.js，因其包含主要的程式功能，以及運行程式所需要的套件及環境
* 不要上傳：.env、node_modules，因其包含一些開發者的敏感資料像是 API Key，密碼，而 modules 則可以透過 npm instal 來安裝即可

## 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

* CJS：使用 require 來引入模組，並用 module.exports 來導出模組
* ESM：使用 import 來引入模組，使用 export 來導出模組

## 進階題

## localhost 是什麼？

* localhost 就是指自己正在使用的電腦的位址，也可以用 127.0.0.1 來代替。不管是localhost 或是 127.0.0.1，指的都是自己的電腦

## curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？

* curl 是一個用於傳送和接收資料的命令行工具，可以用來發送 HTTP 請求，測試 API 或網頁
* curl http://localhost:3000/ 指令即可以自己電腦的本地伺服器 localhost 發送 http 請求，用來測試網路連線
* -X：指定請求方法 (如 GET、POST)
* -d：發送的 data，通常用於 POST 

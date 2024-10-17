# W04 - 個人作業 4

## 1. instance public IP: [3.106.252.32](<http://3.106.252.32/>)

## 2. 什麼是 instance type？

* Instance type 就是雲端服務提供商（像是 AWS）提供的不同規格的虛擬機器。不同的 instance type 有不同的 CPU、記憶體和存儲空間，適合不同的應用需求。

## 3. 什麼是 Nginx？有哪些用途與特性？

* Nginx 是一個高效能的網頁伺服器。它可以用來處理靜態文件、做反向代理（把請求轉發給後端伺服器）、負載均衡（分散流量到多個伺服器）等。它的特點是速度快、資源佔用少。

## 4. pm2 套件是什麼？有什麼用處？

* pm2 是一個用來管理 Node.js 應用的工具。它可以讓你的應用在崩潰後自動重啟、監控應用的運行狀態、管理日誌等。

## 5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server? (提示 `Reverse proxy` vs `Forward Proxy`)

* Proxy 就是代理伺服器，它在客戶端和目標伺服器之間傳遞請求。反向代理（Reverse Proxy）是指代理伺服器接收客戶端的請求，然後將請求轉發給後端的伺服器。使用 Nginx 作為反向代理可以提高應用的性能、安全性和可擴展性。

## 6. 在 readme 中提供步驟 9 的 Nginx 設定檔

> server {
    listen 80;

    server_name 3.106.252.32;  

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
  }

## 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

* Security Group 是一種虛擬防火牆，用來控制 EC2 instance 的進出流量。它可以設定哪些 IP 和端口可以訪問你的伺服器。設定原則是只允許必要的流量，其他的都拒絕。

## 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

* sudo 是一個讓你以超級用戶（root）身份執行命令的工具。有些操作需要修改系統文件或安裝軟件，這些操作需要超級用戶權限，所以需要用 sudo。

## 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

* Nginx 的日誌文件通常在 /var/log/nginx/ 目錄下，包括 access.log 和 error.log。你可以用 cat、tail 或 less 命令來查看這些日誌文件，例如：

> sudo tail -f /var/log/nginx/access.log
> sudo tail -f /var/log/nginx/error.log

## 10. Linux 檔案目錄結構

1. /etc 是什麼的縮寫？這裡通常都放哪些檔案？ /etc 是 "etcetera" 的縮寫，通常存放系統配置文件。
2. /var 這裡通常都放哪些檔案？ /var 目錄通常存放可變數據文件，如日誌文件、臨時文件和郵件隊列等。
3. /boot 這裡通常都放哪些檔案？ /boot 目錄通常存放啟動加載器和內核相關的文件。
4.  $PATH 環境變數的作用是什麼？ $PATH 環境變數指定了系統查找可執行文件的目錄列表。
5.  which 指令的作用？ which 指令用來查找並顯示可執行文件的完整路徑。

## 11. 列出完成本作業時參考的資料

* [Linux Directories Explained in 100 Seconds](<https://www.youtube.com/watch?v=42iQKuQodW4>)
* [The NGINX Crash Course Nginx](<https://lightda-tw.notion.site/20241002-W04-4-1132ceabc70c8048bbd2d228ad660156>) 
* [Amazon EC2 Basics & Instances Tutorial](<https://www.youtube.com/watch?v=iHX-jtKIVNA>)
* [Connect to your Linux instance using an SSH client](<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html>)
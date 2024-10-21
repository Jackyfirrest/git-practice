# W05 - 個人作業 5

1. 網址：<https://ntuweb.live>，點擊過去可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）
   - 需先在 AWS Security Group 設定 SSL 的 443 port 接口，再安裝 SSL 憑證到 Nginx
   - 將下載好的 SSL 憑證移動到目錄資料夾，合併 crt 檔案
   - 設定 Nginx 設定檔 `sudo nano /etc/nginx/sites-available/default`

   ```nginx
   server {
       listen 80;
       server_name 3.106.252.32;

       # Redirect all HTTP requests to HTTPS
       return 301 https://$host$request_uri;
   }

   server {
       listen 80;
       server_name ntuweb.live;

       # Redirect all HTTP requests to HTTPS
       return 301 https://$host$request_uri;
   }

   server {
       listen 443 ssl;
       server_name ntuweb.live;

       ssl_certificate /etc/ssl/certs/certificate.crt;
       ssl_certificate_key /etc/ssl/private/private.key;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }

       access_log /var/log/nginx/nginx.vhost.access.log;
       error_log /var/log/nginx/nginx.vhost.error.log;
   }  

2. 你在哪裡購買網域的: name.com
3. DNS 的 A record 是什麼？
   - A 記錄（Address Record）是 DNS 記錄的一種，用於將域名解析到 IPv4 地址。
4. DNS 的 NS record 是什麼？
   - NS 記錄（Name Server Record）是 DNS 記錄的一種，用於指定域名的權威名稱伺服器。
5. Domain Name vs FQDN vs URL 這三者分別為何？
   - Domain Name（域名）：是一個用於標識網路資源的名稱，例如 `ntuweb.live`。
   - FQDN（Fully Qualified Domain Name，完全限定域名）：是一個完整的域名，包括主機名和域名，例如 `www.ntuweb.live`。
   - URL（Uniform Resource Locator，統一資源定位符）：是一個用於定位網路資源的地址，包括協議、域名和路徑，例如 `https://www.ntuweb.live/path/to/resource`。
6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
   - 為網站加上憑證可以加密數據傳輸，保護用戶的隱私和安全，防止數據被竊聽和篡改。使用 HTTPS 也可以提高網站的信任度和 SEO 排名。

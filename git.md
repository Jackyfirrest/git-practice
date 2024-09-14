# 20240912 W01 - 個人作業 1
### 說明 blob, tree, commit, branch, head 分別是什麼
1. blob
    * Blob 是 Git 用來儲存檔案內容的單位
2. tree
    * Tree 代表的是檔案目錄結構，指向檔案名稱和 blob 或其他 tree
3. commit
    * 表示專案在某個時間點的完整狀態，每次進行 commit，都會記錄這次變更的內容
4. branch
    * 指向某個 commit，每個 branch 會代表一個開發線，是團隊可以同時進行多個功能或版本的開發
5. head
    * 當前正在操作的 commit 或 branch

### 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
1. objects
    * 每次提交、添加文件時,都會在此目錄下生成新的文件
2. refs
    * 包含 branch 等訊息
3. HEAD
    * 紀錄現在的 branch
    * 切換 branch 時會變化
4. index 
    * 暫存區
    * 使用 git add 時會更新
5. config 
    * 修改環境時會更新
6. logs
    * 紀錄 HEAD 和各個 branch 的歷史

### commit message 應該怎麼寫比較好？應該有什麼 style 嗎？
1. 以動詞開頭，如 "Add", "Fix", "Update" 等
2. 保持簡潔
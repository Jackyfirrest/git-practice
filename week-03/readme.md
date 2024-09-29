# W03 - 個人作業 3

## 什麼是 AWS Region, AZ (availability zones)？

* AWS 雲端基礎設施是以區域 (Region) 與可用區域 (Available Zone) 為中心來建置的
* AWS Region: 是世界上有多個可用區域的實體位置
* AZ (availability zones): 可用區域由一或多個分散的資料中心(Data Center)所組成，每一個AZ就是一個可獨立運作的資料中心都有備援電源、聯網和連線能力，且置放在不同的機構

## 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？

* 我主要會根據成本以及距離來做考量，因此會選擇離我自己最近的 AWS Region，如此除了可以減少網路的延遲，也可以增加存取數據的速度
* 同時也可以考慮 AWS 系統的穩定性，因此可以選擇有部件較多 AZ 的 Region

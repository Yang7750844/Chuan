{
  "author":"takagen99",
  "ua": "",
  "homeUrl": "http://www.yinghuacd.com",
  "cateManual": {
    "国漫": "china", 
    "日本": "japan",
    "美国": "american"
  },

// Home Summary ====================================================
  "homeVodNode": "//div[@class='img']/ul/li",
  "homeVodName": "/p[@class='tname']/a/text()",
  "homeVodNameR": "",
  "homeVodId": "/a/@href",
  "homeVodIdR": "/show/(\\w+).html",
  "homeVodImg": "/a/img/@src",
  "homeVodImgR": "",
  "homeVodMark": "/p[contains(text(),'最新')]/a/text()",
  "homeVodMarkR": "",
  
// Category Summary ================================================
  "cateUrl": "http://www.yinghuacd.com/{cateId}/{catePg}.html",
  "cateVodNode": "//div[@class='lpic']/ul/li",
  "cateVodName": "/a/img/@alt",
  "cateVodId": "/a/@href",
  "cateVodIdR": "/show/(\\w+).html",
  "cateVodImg": "/a/img/@src",
  "cateVodMark": "/span/font/text()",
  
// Category Details ================================================
  "dtUrl": "http://www.yinghuacd.com/show/{vid}.html",
  "dtNode": "//div[@class='fire l']",
  "dtName": "//div[@class='thumb l']/img/@alt",
  "dtNameR": "",
  "dtImg": "//div[@class='thumb l']/img/@src",
  "dtImgR": "",
  "dtCate": "//div[@class='sinfo']//label[contains(text(),'类型')]/parent::*/a/text()",
  "dtCateR": "",
  "dtYear": "//div[@class='sinfo']//label[contains(text(),'上映')]/parent::*/a/text()",
  "dtYearR": "",
  "dtArea": "//div[@class='sinfo']//label[contains(text(),'地区')]/parent::*/a/text()",
  "dtAreaR": "",
  "dtMark": "//div[@class='sinfo']/p/text()",
  "dtMarkR": "",
  "dtDesc": "//div[@class='info']/text()",
  "dtDescR": "",
  
// Playlist ========================================================
  "dtFromNode": "//div[contains(@class,'tabs')]/ul[@class='menu0']/li",
  "dtFromName": "/text()",
  "dtUrlNode": "//div[contains(@class,'movurl')]/ul",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/v/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "http://www.yinghuacd.com/v/{playUrl}.html",
  "playUa": "",
  
// Search Results ==================================================
  "searchUrl": "http://www.yinghuacd.com/search/{wd}",
  "scVodNode": "//div[@class='lpic']/ul/li",
  "scVodName": "/a/img/@alt",
  "scVodId": "/a/@href",
  "scVodIdR": "/show/(\\w+).html",
  "scVodImg": "/a/img/@src",
  "scVodMark": "//font[@class='red']/text()"
}

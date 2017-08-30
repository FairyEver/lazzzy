// base64
import base64 from 'js-base64'

let Cookie

let serialize = function (array) {
  let str = ''
  for (var i = 0; i < array.length; i++) {
    str += toString(array[i])
  }
  return base64.Base64.encode(str)
}

// 克隆
let clone = function (obj) {
  var o
  if (typeof obj === 'object') {
    if (obj === null) {
      o = null
    } else {
      if (obj instanceof Array) {
        o = []
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(clone(obj[i]))
        }
      } else {
        o = {}
        for (var j in obj) {
          o[j] = clone(obj[j])
        }
      }
    }
  } else {
    o = obj
  };
  return o
}

/*
*   [name] 存储，IE6~7 cookie 其他浏览器HTML5本地存储
*   [prop] mode:模式
*   [prop] key:Key
*   [prop] string:保存的数据
*/
let savaLocal = function (mode, key, string) {
  // 追加模式
  if (mode === 'add') {
    if (readLocal(key)) {
      string = readLocal(key) + string
    }
    save()
  } else if (mode === 'cover') {
    // 覆盖模式
    save()
  }
  function save () {
    if (window.localStorage) {
      localStorage.setItem(key, base64.Base64.encode(string))
    } else {
      Cookie.write(key, string)
    }
  }
}

/*
*   [name] 从存储里读取数据
*   [prop] key:Key
* [return] string
*/
let readLocal = function (key) {
  let str = window.localStorage ? localStorage.getItem(key) : Cookie.read(key)
  if (str) {
    return base64.Base64.decode(str)
  } else {
    return null
  }
}

/*
*   [name] 删除本地的数据
*   [prop] key:Key
*/
let cleanLocal = function (key) {
  if (window.localStorage) {
    localStorage.removeItem(key)
  } else {
    // setCookie(key, '', -1)
  }
}

/*
*   [name] 检测本地数据是否为空
*   [prop] key:Key
* [return] true / false
*/
let checkLocal = function (key) {
  if ((readLocal(key) === '') || (readLocal(key) === null)) {
    return false
  } else {
    return true
  }
}

/*
*   [name] 字符串转json
*   [prop] text:需要转的字符串
*/
function toJson (text) {
  return JSON.parse(text)
}

/*
*   [name] json转字符串
*   [prop] obj:需要转的json
*/
function toString (obj) {
  return JSON.stringify(obj, null, '\t')
}

/*
*   [name] 工具函数 填充字符串至指定长度
*   [prop] num:实际数字
*   [prop] n:需要的长度
*   [prop] placeHolder:占位符
*/
function pad (num, n, placeHolder) {
  let len = num.toString().length
  while (len < n) {
    num = num + placeHolder
    len++
  }
  return num
}

/*
*   [name] 工具函数 判断是否含有汉字
*   [prop] text:检测字符
*/
function hasChinese (text) {
  return /.*[\u4e00-\u9fa5]+.*$/.test(text)
}

// 计算两天之间的间隔
// 2017-1-1 2017-2-2
function getDateDiff (startDate, endDate) {
  var now = new Date()
  var nowYear = now.getFullYear()
  var nowMonth = now.getMonth() + 1
  if (String(nowMonth).length === 1) { nowMonth = '0' + String(nowMonth) }
  var nowDay = now.getDate()
  var nowStr = nowYear + '-' + nowMonth + '-' + nowDay
  if (startDate === 'now') { startDate = nowStr };
  if (endDate === 'now') { endDate = nowStr };
  var startTime = new Date(Date.parse(startDate)).getTime() / (1000 * 60 * 60 * 24)
  var endTime = new Date(Date.parse(endDate)).getTime() / (1000 * 60 * 60 * 24)
  var dates = endTime - startTime
  return dates
}

// 计算一个数组所有项的平均值
function pingjun (array, fixed) {
  let addLength = 0
  let addNum = 0
  array.map((x, index) => {
    if (parseFloat(x)) {
      addLength += 1
      addNum += parseFloat(x)
    }
  })
  let pj = addNum / addLength
  if (pj) { return pj.toFixed(fixed) } else { return '0' }
}

// ---------------------------------------------------
// 日期格式化
// 格式 YYYY/yyyy/YY/yy 表示年份
// MM/M 月份
// W/w 星期
// dd/DD/d/D 日期
// hh/HH/h/H 时间
// mm/m 分钟
// ss/SS/s/S 秒
// ---------------------------------------------------
// Date.prototype.Format = function (formatStr) {
//   var str = formatStr
//   var Week = ['日', '一', '二', '三', '四', '五', '六']
//   str = str.replace(/yyyy|YYYY/, this.getFullYear())
//   str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100))
//   str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? this.getMonth().toString() : '0' + (this.getMonth() + 1))
//   str = str.replace(/M/g, (this.getMonth() + 1))
//   str = str.replace(/w|W/g, Week[this.getDay()])
//   str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate())
//   str = str.replace(/d|D/g, this.getDate())
//   str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours())
//   str = str.replace(/h|H/g, this.getHours())
//   str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes())
//   str = str.replace(/m/g, this.getMinutes())
//   str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds())
//   str = str.replace(/s|S/g, this.getSeconds())
//   return str
// }
// tool.dateFormat(new Date(), 'yyyy-MM-dd')
function dateFormat (dateObj, formatStr) {
  var str = formatStr
  var Week = ['日', '一', '二', '三', '四', '五', '六']
  str = str.replace(/yyyy|YYYY/, dateObj.getFullYear())
  str = str.replace(/yy|YY/, (dateObj.getYear() % 100) > 9 ? (dateObj.getYear() % 100).toString() : '0' + (dateObj.getYear() % 100))
  str = str.replace(/MM/, (dateObj.getMonth() + 1) > 9 ? dateObj.getMonth().toString() : '0' + (dateObj.getMonth() + 1))
  str = str.replace(/M/g, (dateObj.getMonth() + 1))
  str = str.replace(/w|W/g, Week[dateObj.getDay()])
  str = str.replace(/dd|DD/, dateObj.getDate() > 9 ? dateObj.getDate().toString() : '0' + dateObj.getDate())
  str = str.replace(/d|D/g, dateObj.getDate())
  str = str.replace(/hh|HH/, dateObj.getHours() > 9 ? dateObj.getHours().toString() : '0' + dateObj.getHours())
  str = str.replace(/h|H/g, dateObj.getHours())
  str = str.replace(/mm/, dateObj.getMinutes() > 9 ? dateObj.getMinutes().toString() : '0' + dateObj.getMinutes())
  str = str.replace(/m/g, dateObj.getMinutes())
  str = str.replace(/ss|SS/, dateObj.getSeconds() > 9 ? dateObj.getSeconds().toString() : '0' + dateObj.getSeconds())
  str = str.replace(/s|S/g, dateObj.getSeconds())
  return str
}

let tool = {
  // 序列化
  serialize,
  // 克隆
  clone,
  // 数据保存和存储
  savaLocal,
  readLocal,
  cleanLocal,
  checkLocal,
  // 字符串和json互转
  toJson,
  toString,
  // 填充字符串至指定长度
  pad,
  // 判断是否含有汉字
  hasChinese,
  // 计算两天之间的间隔
  getDateDiff,
  // 计算数组元素的平均值
  pingjun,
  // 日期格式化
  dateFormat
}

export {
  tool
}

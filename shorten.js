/*
 *  @ Project: ibank Javascript Shorten Plugin
 *  @ Description: ibank Javascript Shorten Plugin
 *  @ Author: Sung Ho Yang
 *  @ Version: 1.00 (02-MAR-2021)
 */
 // ib:mobileConnector.js
 // $ib.shorten.create(msg.@id, index, url)
// Global

const nowDate = new Date();
const md = Number(("0" + (nowDate.getMonth() + 1)).slice(-2)+("0" + (nowDate.getDate())).slice(-2));
console.log(`md : ${md} mm : ${nowDate.getDate()}`);
const maxNum = 13845841; // 숫자(10)+소문자(26)+대문자(25) 대문자 Z 제외 총 61^4
const baseList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY"; // 대문자 Z 제외
const baseSize = 61;
const shuffleArr ={
  0 : [0, 3, 1, 2, 4, 6, 5], 1 : [2, 4, 0, 5, 6, 3, 1], 2 : [5, 2, 3, 1, 4, 0, 6], 3 : [5, 6, 2, 3, 1, 0, 4],
  4 : [6, 4, 3, 5, 1, 2, 0], 5 : [1, 0, 6, 4, 3, 2, 5], 6 : [3, 1, 6, 0, 2, 4, 5], 7 : [4, 1, 6, 3, 0, 5, 2],
  8 : [4, 0, 3, 2, 6, 1, 5], 9 : [6, 5, 4, 0, 3, 2, 1], a : [4, 0, 2, 1, 5, 6, 3], b : [6, 0, 4, 3, 1, 2, 5],
  c : [4, 3, 0, 6, 5, 1, 2], d : [5, 6, 4, 1, 3, 0, 2], e : [2, 1, 3, 5, 6, 0, 4], f : [1, 5, 3, 2, 4, 0, 6]
};

var $ib = $ib || {};

// Shorten
$ib.shorten = {};

// 생성
$ib.shorten.create = function(deliveryId, index, url) {
  var strVal = $ib.shorten.code62Create(md) + $ib.shorten.code62Create(deliveryId);
  strVal = $ib.shorten.shuffle(strVal,index);
  
  return strVal;
};  

// 난수 발생
$ib.shorten.code62Create = function( n ) {
  if(maxNum <= n) n = n % maxNum;
  var strVal;
  var num = parseInt(n);
  var retVal = [];
  do {
    var mod = num % baseSize;
    console.log(`mod : ${num % baseSize}`);
    num = parseInt(num / baseSize);
    console.log(`num : ${num}`);
    retVal.push(baseList[ mod ]);
  } while (num > 0) ;

  strVal = retVal.reverse().join("");

  return strVal;
};

// 순서 섞기
$ib.shorten.shuffle = function(str,index) {
  
  var strVal = "";
  var strTmp = "";
  var len = str.length;
  var type = baseList[Math.floor(Math.random() * 16)];
  var key = type.toString(16);
  var arr =  shuffleArr[key];
  
  switch(len) {
    case 3:
      strTmp = str + 'ZZZ';
      break;
    case 4:
      strTmp = str + 'ZZ';
      break;
    case 5:
      strTmp = str + 'Z';
      break;
    default:
      strTmp = str;
      break;
  }
  strTmp = strTmp + index.toString(16);
  
  arr.forEach(function(val){
      strVal = strVal + strTmp[val];
  });

  return strVal + key;
};
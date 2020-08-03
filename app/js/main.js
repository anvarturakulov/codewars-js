"use strict";

  function narcissistic(value) {
    let str = String(value);
    let len = str.length;
    let sum = 0;
    for (let i = 0; i < len; i++){
        sum += (+str[i])**len; 
    }
    return value == sum;
  }

  function list(names){
    let len = names.length;
    let newArr = [];
    let probel;
    if (len == 1) {
        newArr.push(names[0].name)
    } else if (len == 2) {
        newArr.push(String(names[0].name+' & '+String(names[1].name)))
    } else if (len > 2) {
        for (let i =0; i<(len-2); i++){
            probel = i == 0 ? probel = '': probel = ' ';
            newArr.push(probel+names[i].name);
        }
        newArr.push(' ' +String(names[len-2].name+' & '+String(names[len-1].name)))
    }
    return String(newArr);
  }

  function filter_list(l) {
    return l.filter(element => typeof(element)=='number');
  }    



function findMissingLetter(array){
  let arr_en_EN = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let startIndex = arr_en_EN.findIndex(item => item == array[0]);
  let newTrueArr = arr_en_EN.slice(startIndex,startIndex+array.length+1);
  for (let i = 0; i < newTrueArr.length; i++) {
    if (newTrueArr[i] != array[i]) return newTrueArr[i]
  }
  return '';
}

function findMissingLetter2(array){
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let start = alphabet.indexOf(array[0]);
  return alphabet.slice(start,start+array.length).find(el => !array.includes(el));
}

function findMissingLetter3(array){
  let first = array[0].charCodeAt(0);
  for (let i =0; i<array.length; i++){
    if (first + i !== array[i].charCodeAt(0)){
      return String.fromCharCode(first + i)
    }
  }
}

function toCamelCase(str){
  let seperator = (str.includes('-')) ? '-' : '_';
  let newArr = str.split(seperator);
  let newArrUpper =[];
  for (let i = 0; i< newArr.length; i++) {
    let newStr = String(newArr[i]);
    if (i == 0 && newArr[i].length > 0 && newArr[i][0] == newArr[i][0].toLowerCase()) {

    } else if (newStr.length > 0) {
      newStr = (newStr.length > 1)? newStr[0].toUpperCase()+newStr.slice(1,newStr.length):newStr[0].toUpperCase(); 
    }
    newArrUpper.push(newStr);
  }
  return newArrUpper.join('');
}


var countBits = function(n) {
  let pars = n.toString(2);
  return String(pars).split('').filter(elem => elem == '1').length;
};

function openOrSenior(data){
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 54 && data[i][1]>7) {
      newArr.push('Senior')
    } else {
      newArr.push('Open')
    }
  }
  return newArr;
}

function openOrSenior2(data){
  return data.map(([age, handi]) => (age > 54 && handi > 7) ? "Senior":"Open");
}

function iqTest(numbers){
  function indexOf(element, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (newArr[i] == element) return i+1;
    }
  };

  let newArr = numbers.split(' ').map(el => {
    return el % 2 == 0 ? 'even':'odd';
  })

  return newArr.filter(el => el=='even').length == 1 ? indexOf('even',newArr): indexOf('odd',newArr);
}

function solution(str){
  if (str.length % 2 != 0) str += '_';
  let newArr = [];
  for (let i =1; i<= str.length;) {
    newArr.push(str.slice(i-1,i+1));
    i += 2; 
  }
  return newArr;
}

function validParentheses(parens){
  let s = 0;
  for (let i = 0; i< parens.length; i++) {
    if (parens[i] == ')') s--;
    if (parens[i] == '(') s++;  
    if (s < 0) return false;
  }
  return s == 0;
}

function duplicateEncode(word){
  let arr = word.split("");
  let newArr = [];
  let tempArr = []

  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr.filter(el => {
      return (el==arr[i] || el.toLowerCase() == arr[i].toLowerCase()) ? true : false;
    })
    tempArr.length > 1 ? newArr.push(')') : newArr.push('(');
  }
  return newArr.join('');
}

//alert(duplicateEncode("Success"));

function dirReduc(arr){
  function twinSide(side1, side2){
    let sideTwin;
    side1 == undefined ? sideTwin = side2[0] : sideTwin = side1[0]+side2[0];
    if (sideTwin == 'NS' || sideTwin=='SN') return true;
    if (sideTwin == 'WE' || sideTwin=='EW') return true;
    return false;
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let startElement = newArr[newArr.length-1];
    let endElement   = arr[i];
    twinSide(startElement, endElement) == false ? newArr.push(arr[i]) : newArr.pop();
  }
  return newArr;
}


(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) == ["WEST"]) ? alert('Test 1 - OK') : alert('Test 1 - No');
(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) == ["NORTH", "WEST", "SOUTH", "EAST"]) ? alert('Test 2 - OK') : alert('Test 2 - No');
(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) == []) ? alert('Test 3 - OK') : alert('Test 3 - No');



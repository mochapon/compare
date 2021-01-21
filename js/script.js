'use strict';

  // ボタンの要素を取得
  const button = document.getElementById("button");

  // ボタンをクリックした時の処理
  button.addEventListener("click", function (e) {

    e.preventDefault();

    // 2つの入力フォームの値を取得
    const kakaku = document.getElementById("kakaku").value;
    const guramu = document.getElementById("guramu").value;

    // 2つの数値を除算して100を乗算
    // const cal = (parseInt(kakaku, 10) / parseInt(guramu, 10)) * 100;
    const cal = (kakaku / guramu) * 100;

    // a 要素の作成と属性の指定
    const newTxt = document.createTextNode(cal);

    // li 要素の作成
    const newLi = document.createElement("li");
    newLi.appendChild(newTxt);

    // リストに追加
    const list = document.getElementById("js_resultList");
    // list.innerText = 'リスト'
    list.appendChild(newLi);
    
  });


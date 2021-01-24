'use strict';
{
  
  document.querySelector('button').addEventListener('click', e => {

    e.preventDefault();

    const guramu = document.getElementById("guramu").value;
    const kakaku = document.getElementById("kakaku").value;
    
    // 小数第三位以下切り捨て
    const tanka = Math.floor(((kakaku / guramu) * 100) * 100) / 100;

    const li = document.createElement('li');
    li.textContent = `${guramu}g：${kakaku}円：＠${tanka}円`;

    document.querySelector('ul').appendChild(li);
    
  });


  //　Resetボタンで更新
  const reload = document.getElementById('reload');
  reload.addEventListener('click', () => {
  window.location.reload();
  });
}
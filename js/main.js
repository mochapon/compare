'use strict';
{
  
  document.querySelector('button').addEventListener('click', e => {

    e.preventDefault();

    const guramu = document.getElementById("guramu").value;
    const kakaku = document.getElementById("kakaku").value;
    
    const tanka = (kakaku / guramu) * 100;

    const li = document.createElement('li');
    li.textContent = `${guramu}：${kakaku}：＠${tanka}円`;

    document.querySelector('ul').appendChild(li);
    
  });


  //　Resetボタンで更新
  const reload = document.getElementById('reload');
  reload.addEventListener('click', () => {
  window.location.reload();
  });
}
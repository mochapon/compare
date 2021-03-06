'use strict';
{

  document.getElementById('keisan').addEventListener('click', e => {

    e.preventDefault();

    const guramu = document.getElementById("guramu").value;
    const kakaku = document.getElementById("kakaku").value;

    if (guramu === '' || kakaku === '') {
      alert('数字を入力してください')
    } else {
    // 小数第三位以下切り捨て
    const tanka = ((kakaku / guramu) * 100).toFixed(1);
    const text1 = document.getElementById('guramu');
    const text2 = document.getElementById('kakaku');
    const li = document.createElement('li');
    li.textContent = `${guramu}g：${kakaku}円：@${tanka}円`;
    
      document.querySelector('ul').appendChild(li);
      
      text1.value = '';
      text2.value = '';
      text1.focus();
    }

  });
    

}
function readMoreFunc() {
  var moreText = document.getElementById('read-more');
  var btnText = document.getElementById('myBtn');

  if (moreText.style.display == 'none') {
    moreText.style.display = 'inline';
    btnText.innerHTML = 'Less';
  } else {
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  }
}

// КНОПКА READ MORE PROGRAM SECTION

function readMoreProgramFunc() {
  // Параграф, спан чи те що буде всередині id="more" буде приховуватися
  var moreText = document.getElementById('more');
  // Твоя кнопка з індексом:
  // <button onclick="readMoreProgramFunc()" class="program__btn" id="program_btn">
  //   Read more
  // </button>
  var btnText = document.getElementById('program_btn');

  if (moreText.style.display == 'none') {
    moreText.style.display = 'inline';
    btnText.innerHTML = 'Less';
  } else {
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  }
}
// В scss додай:
// #more {
//     display: none;
// }

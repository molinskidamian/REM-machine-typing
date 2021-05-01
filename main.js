const textArr = ['tekst1', 'tekst2', 'tekst3'];
const p = document.createElement('p');

//  interface
const timeout = 20;
let activeLetter = 0;
let activeText = 0;

const writeFn = () => {

  p.textContent += textArr[activeText][activeLetter];
  document.body.appendChild(p);

  console.log(`activeText: ${activeText} activeLetter: ${activeLetter} - ${textArr[activeText][activeLetter]}`);
  activeLetter++;


  if(activeLetter === textArr[activeText].length){
    activeText++;

    if(activeText === textArr.length) return;

    return setTimeout(() => {
        activeLetter = 0;
        p.textContent = "";
        writeFn(); // ! Remember! You MUST TURN ON current function AGAIN!

      }, 2000);

    }

  setTimeout(writeFn, timeout);
}

writeFn();
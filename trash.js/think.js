let smena = null;

document.querySelector('.level-title').onclick = event => {
    let i = 0;

    smena = setInterval(() => { /* выполянет какой-то код с какой-то переодичностью */
        event.target.innerText = event.target.innerText.split('').map((element, index) => {
            if (index <i) {
                return event.target.dataset.value[index]; /* вставляем оригинальную букву под порядковым номером [индекс] */
            }

            else {
                return alf[Math.floor(Math.random() * 26)];/* вставляем рандомную из alf */
            }
        }).join('');

        if (i >= event.target.dataset.value.length) {
            clearInterval(smena);
        }
        i += 1 / 3;
    }, 50);
}
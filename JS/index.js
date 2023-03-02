
var n1, n2;
var score_one = 0;
var score_two = 0;
const alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let smena = null;

document.querySelector('.main_button').onmouseover = event => {
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

document.querySelector('.main_button').onclick = function () {
    document.querySelectorAll(".one").forEach(element => {
        n1 = Math.floor(Math.random() * 6 + 1);
        element.setAttribute("src", `../dice\\dice_${n1}.png`);

    });
    document.querySelectorAll(".two").forEach(element => {
        n2 = Math.floor(Math.random() * 6 + 1);
        element.setAttribute("src", `../dice\\dice_${n2}.png`);

    });


    if (n1 > n2) {
        score_one = score_one + 1;
        document.querySelector('.one_score').innerHTML = `${score_one}`;
    }

    else if (n1 < n2) {
        score_two = score_two + 1;
        document.querySelector('.two_score').innerHTML = `${score_two}`;
    }

    var score = document.querySelector(".history");
    if (n1 === n2   ){
        score.insertAdjacentHTML("afterbegin", `<h4>Draw</h4>`);   
    }
    else {
    score.insertAdjacentHTML("afterbegin", `<h4>Roundㅤ${score_one + score_two}ㅤ:ㅤ${n1}/${n2}</h4>`);
    }
}

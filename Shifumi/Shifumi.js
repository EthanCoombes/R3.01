const buttons = document.querySelectorAll('.game');
const resultDisplay = document.getElementById('result');
const winDisplay = document.getElementById('win');
const drawDisplay = document.getElementById('draw');
const loseDisplay = document.getElementById('lose');
const resetButton = document.getElementById('reset');

const val = ["Pierre", "Feuille", "Ciseaux"];
const score = { win: 0, draw: 0, lose: 0 };

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const user = button.textContent;
        const computer = val[Math.floor(Math.random() * 3)];
        let result;

        if (user == computer) {   
            result = "Égalité!";
            score.draw++;
        }
        else if ((user == "Pierre" && computer == "Ciseaux") ||
                 (user == "Ciseaux" && computer == "Feuille") ||
                 (user == "Feuille" && computer == "Pierre")) {
            result = "Vous gagnez!";
            score.win++;
        } else {
            result = "Vous perdez!";
            score.lose++;
        }
        resultDisplay.textContent = 'Vous avez choisi ' + user + ' l\'ordinateur a choisi ' + computer +'. '+ result;
        winDisplay.textContent = score.win + ' victoires';
        drawDisplay.textContent = score.draw + ' égalités';
        loseDisplay.textContent = score.lose + ' défaites';
        updateScoreDisplay();

    });
});

resetButton.addEventListener('click', () => {
    score.win = 0;
    score.draw = 0;
    score.lose = 0;
    updateScoreDisplay();
    resultDisplay.textContent = '';
});

function updateScoreDisplay() {
    winDisplay.textContent = pluralize(score.win, "victoire", "victoires");
    drawDisplay.textContent = pluralize(score.draw, "égalité", "égalités");
    loseDisplay.textContent = pluralize(score.lose, "défaite", "défaites");
}

function pluralize(count, singular, plural) {
    if (count > 1 ) {
        return count + ' ' + plural;
    }
    else return count + ' ' + singular;
};

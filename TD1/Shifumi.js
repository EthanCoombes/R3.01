const buttons = document.querySelectorAll('.jeu');
const resultDisplay = document.getElementById('resultat');
const winDisplay = document.getElementById('win');
const drawDisplay = document.getElementById('draw');
const loseDisplay = document.getElementById('lose');
const resetButton = document.getElementById('reset');

const val = ["Pierre", "Feuille", "Ciseaux"];
const score = { win: 0, draw: 0, lose: 0 };

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.textContent;
        const computerChoice = val[Math.floor(Math.random() * 3)];
        let result;

        if (userChoice === computerChoice) {   
            result = "Égalité!";
            score.draw++;
        }
        else if ((userChoice === "Pierre" && computerChoice === "Ciseaux") ||
                 (userChoice === "Ciseaux" && computerChoice === "Feuille") ||
                 (userChoice === "Feuille" && computerChoice === "Pierre")) {
            result = "Vous gagnez!";
            score.win++;
        } else {
            result = "Vous perdez!";
            score.lose++;
        }
        resultDisplay.textContent = 'Vous avez choisi ' + userChoice + ' l\'ordinateur a choisi ' + computerChoice +'. '+ result;
        winDisplay.textContent = `${score.win} victoires`;
        drawDisplay.textContent = `${score.draw} égalités`;
        loseDisplay.textContent = `${score.lose} défaites`;
        updateScoreDisplay();

    });
});

function updateScoreDisplay() {
    winDisplay.textContent = pluralize(score.win, "victoire", "victoires");
    drawDisplay.textContent = pluralize(score.draw, "égalité", "égalités");
    loseDisplay.textContent = pluralize(score.lose, "défaite", "défaites");
}


resetButton.addEventListener('click', () => {
    score.win = 0;
    score.draw = 0;
    score.lose = 0;
    updateScoreDisplay();
    resultDisplay.textContent = '';
});

function pluralize(count, singular, plural) {
    return count + ' ' + (count > 1 ? plural : singular)
};

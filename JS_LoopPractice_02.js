/* Qs - Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/
let random=10;
let Match =prompt("Guess the number =");
while (Match!=random) {
    Match= prompt("Guess a Number Again =");
}
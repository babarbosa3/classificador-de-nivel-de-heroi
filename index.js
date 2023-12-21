// nome do herói
let nome = "Felipao"

//nível de experiência XP do herói
let nivelXP = 12000

if (nivelXP <= 1000) {
    nivelXP = "Ferro"
} else if (nivelXP >= 1001 && nivelXP <= 2000) {
    nivelXP = "Bronze"
} else if (nivelXP >= 2001 && nivelXP <= 5000) {
    nivelXP = "Prata"
} else if (nivelXP >= 5001 && nivelXP <= 7000) {
    nivelXP = "Ouro"
} else if (nivelXP >= 7001 && nivelXP <= 8000) {
    nivelXP = "Platina"
} else if (nivelXP >= 8001 && nivelXP <= 9000) {
    nivelXP = "Ascendente"
} else if (nivelXP >= 9001 && nivelXP <= 10000) {
    nivelXP = "Imortal"
} else if (nivelXP >= 10001) {
    nivelXP = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivelXP + ".")
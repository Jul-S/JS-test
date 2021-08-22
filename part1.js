for (let i = 0; i <= 100; i++) {
    const divisibleBy3 = (i % 3 === 0);
    const divisibleBy5 = (i % 5 === 0);
    let message = "";

    if (divisibleBy3 & divisibleBy5) {
        message = "Jackpot!";
    } else if (divisibleBy3) {
        message = "This is divisible by 3!";
    } else if (divisibleBy5) {
        message = "This is divisible by 5!";
    }

    console.log(i + " - " + message);
}
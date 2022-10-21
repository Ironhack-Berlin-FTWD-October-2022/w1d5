// Challenge:

const chuck = {
    firstName: "Chuck",
    lastName: "Norris",
    birthDate: new Date("1940-03-10"),
    jokes: [
        "Chuck Norris counted to infinity... Twice.",
        "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis",
    ],
    displayInfo() {
        console.log(
            `My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`
        );
    },
    getAge() {
        console.log(
            Math.floor(
                (new Date() - this.birthDate) / (1000 * 60 * 60 * 24 * 365)
            )
        );
        // Hint: to get the current time, you can do: new Date()
        // Hint: to get the birthDate, you can do: this.birthDate
        // Hint: you can subtract 2 dates and you get the number of milliseconds
    },
    addJoke(joke) {
        this.jokes.push(joke);
    },
    getRandomJoke() {
        const randomIndex = Math.floor(Math.random() * this.jokes.length);
        return this.jokes[randomIndex];
    },
};

chuck.addJoke("Chuck norris can divide by zero");
chuck.addJoke("Chuck norris kills flies with his gun");
console.log(chuck.getRandomJoke());
console.log(chuck.getRandomJoke());
chuck.displayInfo();

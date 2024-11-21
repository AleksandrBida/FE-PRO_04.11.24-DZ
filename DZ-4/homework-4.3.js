const userYearOfBirth = prompt("Enter your year of birth.");
let resultMessage = "";

if (!userYearOfBirth) {
    alert("It is a pity that you did not want to enter year of birth.");
} else {
    resultMessage += `Your age: ${new Date().getFullYear() - userYearOfBirth}\n`;
    const userCity = prompt("Enter city where are you leave.");

    if (!userCity) {
        alert("It is a pity that you did not want to enter your city.");
    } else {
        switch (userCity.toLowerCase()) {
            case "kyiv":
                resultMessage += `You live in the capital of Ukraine\n`;
                break;
            case "washington":
                resultMessage += `You live in the capital of USA\n`;
                break;
            case "london":
                resultMessage += `You live in the capital of Great Britain\n`;
                break;
            default:
                resultMessage += `You live in the city ${userCity}\n`;
                break;
        }

        const userFavoriteSport = prompt("Enter yor favorite sport.");

        if (!userFavoriteSport) {
            alert("It is a pity that you did not want to enter your favorite sport.");
        } else {
            switch (userFavoriteSport.toLowerCase()) {
                case "footbal":
                    resultMessage += `Do you want to be like Cristiano Ronaldo?\n`;
                    break;
                case "swimming":
                    resultMessage += `Do you want to be like Jerry Mikulek?\n`;
                    break;
                case "shooting":
                    resultMessage += `Do you want to be like Caleb Dressel?\n`;
                    break;
                default:
                    resultMessage += `Yor favorite sport is ${userCity}`;
                    break;
            }

            alert(resultMessage)
        }
    }
}
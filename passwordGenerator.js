const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()12345679';

const generatePassword = (range) => {
    let generatedPass = '';
    for (let i = 0; i<range; i++) {
        generatedPass += characters.substr(Math.floor(Math.random() * characters.length), 1);
    }
    console.log(generatedPass);
}

generatePassword(16);
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()12345679';

const generatePassword = (range) => {
    let generatedPass = '';
    for (let i = 0; i<range; i++) {
        generatedPass += characters.substr(Math.floor(Math.random() * characters.length), 1);
    }
    console.log(generatedPass);
}

generatePassword(16);

/* 
5 Results:

DxwOYigTrgyz(I^q
jXZCzs%3h^H!XfnL
b@LxjOqpG!ULa17c
cx7IhJfq4(yzgT7&
^R)z9CCPkdlHoT2Z

*/
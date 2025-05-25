
    let charset = 'abcdefghijklmnopqrstuvwxyz;', password = "";
    let flag = 1;

    for (let i = 0; i < 5; i++) {
        password += flag == 1 ? (charset.charAt(Math.floor(Math.random() * charset.length)) + Math.round(Math.random() * 9)) 
            : charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase(); flag = 1 - flag;
    }

    console.log(`password is ${password} and length is ${password.length}`); // Output: Testing

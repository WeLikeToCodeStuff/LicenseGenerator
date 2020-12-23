const randomstring = require("randomstring");
const fs = require("fs")

var i;

for (i = 0; i < 500; i++) {

    var string1 = randomstring.generate({
        length: 5,
        charset: "alphanumeric"
    });


    var string2 = randomstring.generate({
        length: 5,
        charset: "alphanumeric"
    });


    var string3 = randomstring.generate({
        length: 5,
        charset: "alphanumeric"
    });


    var string4 = randomstring.generate({
        length: 5,
        charset: "alphanumeric"
    });



    var s12 = string1.concat("-", string2)
    var s13 = s12.concat("-", string3)
    // var s14 = s13.concat("-", string4)
    s13 = s13.toUpperCase()
    s13 = s13 + "\n"






    fs.writeFile("output.txt", s13, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("File written successfully\n");
        }
    })




    fs.appendFile('output.txt', s13, function (err) {
        if (err) {
            console.log("append failed")
        } else {
            console.log("done")
        }
    })
}



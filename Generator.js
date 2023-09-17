import { log } from "console";
import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    // console.log(answers) //First we made an url object from console with this.
    // Use user feedback for... whatever!!

    fs.writeFile("URL.text",url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
    } )
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

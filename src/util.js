import { existsSync } from "fs";
import inquirer from "inquirer";
import chalk from "chalk";

export const makefileExists = async () => {
  const makefilePath = "Makefile";
  if (existsSync(makefilePath)) {
    const overwriteAnswer = await inquirer.prompt([
      {
        type: "input",
        name: "overwrite",
        message:
          "A Makefile already exists in this directory. Do you want to overwrite it? [Yes/No]",
        validate: function (input) {
          const validInputs = ["yes", "no", "y", "n"];
          if (validInputs.includes(input.toLowerCase())) {
            return true;
          }
          return "Please enter Yes, No, Y, or N.";
        },
        default: 'yes'
      },
    ]);

    if (overwriteAnswer.overwrite.toLowerCase().startsWith("n")) {
      console.log(chalk.red("Makefile not created. Already exists!"));
      return false;
    }
  }
  return true;
};

import { redBright, yellow, white, blueBright, greenBright } from "chalk";

export function dbConnectCallback() {
  //✔︎
  console.log(
    `${greenBright("[Database] ✔︎")}${white(":\t")} ${yellow(
      "Connection established"
    )} `
  );
}

export function dbConnectCatch(error) {
  //✖
  console.log(
    `${redBright("[Database] ✖")}${white(":\t")} ${yellow(
      "Failed to establish a database connection:"
    )}`,
    error
  );
}

import { redBright, yellow, white, blueBright, greenBright } from "chalk";

export function listenCallback(port) {
  //✔︎
  console.log(
    `${greenBright("[Server] ✔︎ ")}${white(":\t")} ${yellow(
      "Now listening for HTTP requests on"
    )} ${white("http://localhost:")}${blueBright(port)}`
  );
}

export function listenCatch(error) {
  //✖
  console.log(
    `${redBright("[Server] ✖")}${white(":\t")} ${yellow(
      "Failed to establish the server:"
    )}`,
    error
  );
  process.exit(0);
}

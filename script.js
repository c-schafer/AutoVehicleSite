const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (e) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    e.preventDefault();
  },
  false
);

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

form1.addEventListener(
  "submit",
  (e) => {
    const data = new FormData(form1);
    let output = "";
    for (const entry of data) {
      output = entry[1];
    }
    console.log("selected", output);
    e.preventDefault();
    document.getElementsByClassName("chart")[0].style.display = "block";
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  },
  false
);

form2.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();

    document.getElementsByClassName("chart")[1].style.display = "block";
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  },
  false
);

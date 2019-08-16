// import Rosy from "./rosy";

const tags: string[] = [
  "p",
  "a",
  "b",
  "i",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span"
];

for (const tag of tags) {
  const elmnts = document.getElementsByTagName(tag);

  for (const elmnt of elmnts) {
    elmnt.addEventListener("mouseover", function(this:Element) {
      const enabled = window.localStorage.getItem("rosy_enabled");

      // tslint:disable-next-line: radix
      if (parseInt(enabled)) {
        console.log("enabled");
      }
    });
  }
}

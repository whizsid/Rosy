import { browser } from "webextension-polyfill-ts";
import Rosy from "./rosy";

const inputElement = document.getElementById("quickInput") as HTMLInputElement;
const rowElement = document.getElementById("quickRow") as HTMLElement;
const displayElement = document.getElementById("quickResult") as HTMLElement;

if (inputElement) {
  const callback = function(this: HTMLInputElement) {
    const value: string = this.value;

    if (value.length > 0) {
      rowElement.setAttribute("style", "display:unset");

      // tslint:disable-next-line: radix
      displayElement.innerHTML = Rosy(parseInt(value));
    } else {
      rowElement.setAttribute("style", "display:none");
    }
  };

  inputElement.addEventListener("change", callback);
  inputElement.addEventListener("keyup", callback);
}

const switchButton = document.getElementById("switch-blue") as HTMLInputElement;
browser.storage.local
  .get(["rosyEnabled"])
  .then(({ rosyEnabled }: { rosyEnabled?: string }) => {
    // tslint:disable-next-line: radix
    let enabled = parseInt(rosyEnabled);

    if (enabled) {
      switchButton.checked = true;
    } else {
      switchButton.checked = false;
    }

    switchButton.addEventListener("change", function(this) {
      enabled = enabled ? 0 : 1;

      if (enabled) {
        browser.storage.local.set({ rosyEnabled: "1" }).then(() => {
          switchButton.checked = true;
        });
      } else {
        browser.storage.local.set({ rosyEnabled: "0" }).then(() => {
          switchButton.checked = false;
        });
      }
    });
  });

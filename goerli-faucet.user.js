// ==UserScript==
// @name         Goerli Faucet
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically submits geth faucet.
// @author       You
// @match        https://goerlifaucet.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=goerlifaucet.com
// @updateURL    https://github.com/jessemillman/geth-tampermonkey/raw/main/goerli-faucet.user.js
// @downloadURL  https://github.com/jessemillman/geth-tampermonkey/raw/main/goerli-faucet.user.js
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
  
    window.addEventListener("load", function (event) {
      console.log("running");
      var address = "0x190B646C385023E707765fDa54e8dEef33C3a66a"; // update with your wallet address
      var input = document.querySelector(
        "#root > div.alchemy-app > div.alchemy-app-content-container > div:nth-child(2) > div.row > div > span > div:nth-child(1) > div.col-md-9.col-sm-12 > input"
      );
      var submit = document.querySelector(
        "#root > div.alchemy-app > div.alchemy-app-content-container > div:nth-child(2) > div.row > div > span > div:nth-child(1) > div.col-md-3.col-sm-12 > button > div > span"
      );
  
      setNativeValue(input, address);
  
      setTimeout(() => {
        submit.click();
      }, 500);
    });
  
    function setNativeValue(element, value) {
      let lastValue = element.value;
      element.value = value;
      let event = new Event("input", { target: element, bubbles: true });
      // React 15
      event.simulated = true;
      // React 16
      let tracker = element._valueTracker;
      if (tracker) {
        tracker.setValue(lastValue);
      }
      element.dispatchEvent(event);
    }
  })();
  

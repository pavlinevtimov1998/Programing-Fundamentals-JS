function browserHistory(obj, array) {
  for (let element of array) {
    let tokens = element.split(" ");
    let openOrClose = tokens.splice(0, 1);
    let name = tokens.join(" ");

    if (openOrClose[0] === "Close") {
      for (let website of obj["Open Tabs"]) {
        if (website === name) {
          let index = obj["Open Tabs"].indexOf(website);
          obj["Open Tabs"].splice(index, 1);
          obj["Recently Closed"].push(name);
          obj["Browser Logs"].push(`Close ${name}`);
        }
      }
    } else if (openOrClose[0] === "Open") {
      obj["Open Tabs"].push(name);
      obj["Browser Logs"].push(`Open ${name}`);
    } else {
      obj["Open Tabs"].splice(0);
      obj["Recently Closed"].splice(0);
      obj["Browser Logs"].splice(0);
    }
  }

  console.log(`${obj["Browser Name"]}`);
  console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);

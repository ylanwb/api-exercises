console.log("It's working");
let api_url = "https://rickandmortyapi.com/api/character/322";
// console.log(api_url)
async function getApi(url) {
  const response = await fetch(url);

  let data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
getApi(api_url);
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
function show(data) {
  let tab = `<tr>
      <th>Name</th>
      <th>status</th>
      <th>species</th>
      <th>gender</th>
     </tr>`;

  let rickName = data["name"]
  let rickStatus = data["status"]
  let rickSpecies = data["species"]
  let rickGender = data["gender"]
  let rickInfo = rickName.concat(", ", rickStatus).concat(", ", rickSpecies).concat(", ", rickGender)
  document.getElementById("simpleRick").innerHTML = tab;
  document.getElementById("rickInfo").innerHTML = rickInfo;
}

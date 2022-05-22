console.log("It's working");
const api_url = "https://rickandmortyapi.com/api/character";
const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexDirection = "collumn";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.border = "1px solid black";
// console.log(api_url)
async function getApi(url) {
  const response = await fetch(url);

  let data = await response.json();

  if (data) {
    hideloader();
  }
  console.log(data.results);
  data.results.map((result) => {
    const image = result.image
    const name = result.name;
    const species = result.species;
    const gender = result.gender;
    const status = result.status;
    const location = result.location;

    const boxDiv = document.createElement("div");
    boxDiv.classList.add("example");
    container.append(boxDiv);

    const img = document.createElement("img")
    const nameSpan = document.createElement("p");
    const speciesSpan = document.createElement("p")
    const genderSpan = document.createElement("p")
    const statusSpan = document.createElement("p")
    const locationSpan = document.createElement("p")

    img.style.borderTopRightRadius = "10px"
    img.style.borderTopLeftRadius = "10px"
    img.setAttribute("src", image)
    boxDiv.append(img)
    nameSpan.innerText = "Name: " + name;
    boxDiv.append(nameSpan);
    speciesSpan.innerText = "Species: " + species;
    boxDiv.append(speciesSpan)
    genderSpan.innerText = "Gender: " + gender;
    boxDiv.append(genderSpan)
    statusSpan.innerText = "Status: " + status;
    boxDiv.append(statusSpan)
    locationSpan.innerText = location.name;
    boxDiv.append(locationSpan)
  });
}
getApi(api_url);
function hideloader() {
  document.getElementById("loading").style.display = "none";
}

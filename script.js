const geneRate = document.querySelector("#btn-random");
const namE = document.querySelector("#p-name");
const emaiL = document.querySelector("#p-email");
const adD = document.querySelector("#p-address");
const imgP = document.querySelector("#img-profile");
const UC = document.querySelector("#div-user-card");

callApi();

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

geneRate.onclick = () => {
  UC.style.display = "none";
  namE.innerText = resp.data.name;
};

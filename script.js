const geneRate = document.querySelector("#btn-random");
const namE = document.querySelector("#p-name");
const emaiL = document.querySelector("#p-email");
const adD = document.querySelector("#p-address");
const imgP = document.querySelector("#img-profile");
const UC = document.querySelector("#div-user-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgP.src = resp.data.results[0].picture.large;
  namE.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  emaiL.innerText = resp.data.results[0].email;
  adD.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country;
  console.log(resp.data.results[0]);
}

geneRate.onclick = () => {
  callApi();
};

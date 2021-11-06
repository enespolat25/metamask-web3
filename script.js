let accounts;

window.onload = function () {
  console.log("DApp is loaded");
};

const connectEth = async () => {
  accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      console.log(err.code);
    });

  console.log(accounts[0]);
  document.getElementById("p").innerHTML =
    " Bağlantı kurulan hesap : " + accounts[0];
};

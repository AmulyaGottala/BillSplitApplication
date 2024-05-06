function billSplit() {
  const billAmount = parseInt(document.getElementById("billAmount").value);
  const personCount = parseInt(document.getElementById("personCount").value);
  const finalBillAmount = document.getElementById("finalBillAmount");
  const cgst = 0.09;
  const sgst = 0.09;
  const gst = cgst + sgst;
  let tax = billAmount * gst;

  const discount = document.getElementById("checkbox").checked;

  if (billAmount <= 0 || isNaN(billAmount)) {
    alert("enter valid amount");
  } else if (personCount <= 1 || isNaN(personCount)) {
    alert("enter more than 1 person to split bill");
  } else if (discount) {
    let bill = billAmount - billAmount * 0.05;
    finalBillAmount.value = Math.round(bill / personCount);
    document.getElementById("billAmount").value = "";
    document.getElementById("personCount").value = "";
    document.getElementById("checkbox").checked = false;
    document.getElementById("taxAdded").textContent = `Tax Added: ${tax}`;
  } else if (discount === false) {
    finalBillAmount.value = Math.round(billAmount / personCount);
    document.getElementById("billAmount").value = "";
    document.getElementById("personCount").value = "";
    document.getElementById("taxAdded").textContent = `Tax Added: ${tax}`;
  }
}

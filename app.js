function billSplit() {
  const billAmount = parseInt(document.getElementById("billAmount").value);
  const personCount = parseInt(document.getElementById("personCount").value);
  const finalBillAmount = document.getElementById("finalBillAmount");
  const cgst = 0.09;
  const sgst = 0.09;
  const gst = cgst + sgst;
  const discount = document.getElementById("checkbox").checked;

  if (billAmount <= 0 || isNaN(billAmount)) {
    alert("enter valid amount");
    // document.getElementById("billAmount").value = "";
    // document.getElementById("personCount").value = "";
  } else if (personCount <= 1 || isNaN(personCount)) {
    alert("enter more than 1 person to split bill");
    // document.getElementById("billAmount").value = "";
    // document.getElementById("personCount").value = "";
  } else if (discount) {
    let bill = billAmount - billAmount * 0.05 - billAmount * gst;
    console.log(bill);
    finalValue = bill / personCount;
    finalBillAmount.value = Math.round(finalValue);
    document.getElementById("billAmount").value = "";
    document.getElementById("personCount").value = "";
    document.getElementById("checkbox").checked = false;
  } else if (discount === false) {
    let billing = billAmount - billAmount * gst;
    console.log(billing);
    finalValue = billing / personCount;
    finalBillAmount.value = Math.round(finalValue);
    document.getElementById("billAmount").value = "";
    document.getElementById("personCount").value = "";
  }
}

console.log(typeof "sdfjh");

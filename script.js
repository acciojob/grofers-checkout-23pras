const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  
  prices.forEach((price) => {
    total += parseInt(price.textContent);
  });

  const existingTotalRow = document.getElementById("ans");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  let final = document.createElement('tr');
  final.id = "ans";
  final.innerHTML = `<td colspan="2">Total: Rs. ${total}</td>`;

  let table = document.querySelector("table");
  table.appendChild(final);
};

getSumBtn.addEventListener("click", getSum);

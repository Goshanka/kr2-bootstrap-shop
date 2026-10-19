const orderModal = document.getElementById("orderModal");

orderModal.addEventListener("show.bs.modal", (event) => {
  const productName = event.relatedTarget.dataset.product;
  if (productName) {
    orderModal.querySelector("select").value = productName;
  }
});

document.querySelectorAll(".js-order-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      return;
    }

    form.reset();
    form.classList.remove("was-validated");

    if (form.closest(".modal")) {
      bootstrap.Modal.getInstance(orderModal).hide();
      document.getElementById("success-alert").classList.remove("d-none");
    } else {
      form.querySelector(".js-success-alert").classList.remove("d-none");
    }
  });
});

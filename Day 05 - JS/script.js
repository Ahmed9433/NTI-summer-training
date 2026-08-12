function getProducts() {
  var data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function validateForm() {
  var name = document.getElementById("product-name").value;
  var description = document.getElementById("product-description").value;
  var color = document.getElementById("product-color").value;

  if (name.length === 0 || name.length > 10) {
    alert("Product Name is required and must be 10 characters maximum");
    return false;
  }

  if (description.length === 0 || description.length > 50) {
    alert("Product description is required and must be 50 characters maximum.");
    return false;
  }

  if (color === "") {
    alert("Product color is required.");
    return false;
  }

  return true;
}

function handleSubmit() {
  var index = document.getElementById("index").value;

  if (!validateForm()) {
    return;
  }

  if (index === "") {
    addProduct();
  } else {
    updateProduct(index);
  }
}

function addProduct() {
  var products = getProducts();

  var product = {
    name: document.getElementById("product-name").value,
    description: document.getElementById("product-description").value,
    color: document.getElementById("product-color").value,
    outOfStock: document.getElementById("product-availability").checked,
  };

  products.push(product);
  saveProducts(products);
  clearForm();
  renderTable();
}

function deleteProduct(index) {
  var products = getProducts();
  products.splice(index, 1);
  saveProducts(products);
  clearForm();
  renderTable();
}

function editProduct(index) {
  var products = getProducts();
  var product = products[index];

  document.getElementById("product-name").value = product.name;
  document.getElementById("product-description").value = product.description;
  document.getElementById("product-color").value = product.color;
  document.getElementById("product-availability").checked = product.outOfStock;
  document.getElementById("index").value = index;

  document.getElementById("form-title").textContent = "Update Product";
  document.getElementById("main-button").textContent = "Update";
}

function updateProduct(index) {
  var products = getProducts();

  products[index] = {
    name: document.getElementById("product-name").value,
    description: document.getElementById("product-description").value,
    color: document.getElementById("product-color").value,
    outOfStock: document.getElementById("product-availability").checked,
  };

  saveProducts(products);
  clearForm();
  renderTable();

  document.getElementById("index").value = "";
  document.getElementById("form-title").textContent = "Add New Product";
  document.getElementById("main-button").textContent = "Add";
}

function clearForm() {
  document.getElementById("product-name").value = "";
  document.getElementById("product-description").value = "";
  document.getElementById("product-color").value = "";
  document.getElementById("product-availability").checked = false;
  document.getElementById("search-input").value = "";
}

function renderTable(searchValue) {
  var products = getProducts();
  var tContent = document.getElementById("table-content");

  tContent.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    if (
      searchValue === undefined ||
      searchValue === "" ||
      product.name.toLowerCase().indexOf(searchValue) !== -1 ||
      product.description.toLowerCase().indexOf(searchValue) !== -1 ||
      product.color.toLowerCase().indexOf(searchValue) !== -1
    ) {
      var row = document.createElement("tr");

      var indexCell = document.createElement("td");
      var nameCell = document.createElement("td");
      var descriptionCell = document.createElement("td");
      var colorCell = document.createElement("td");
      var stockCell = document.createElement("td");
      var actionCell = document.createElement("td");
      actionCell.className = "actions-container";

      indexCell.textContent = i + 1;
      nameCell.textContent = product.name;
      descriptionCell.textContent = product.description;
      colorCell.textContent = product.color;
      stockCell.textContent = product.outOfStock ? "Out of Stock" : "In Stock";

      var editBtn = document.createElement("button");
      var deleteBtn = document.createElement("button");

      editBtn.textContent = "Edit";
      deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
      </svg>`;

      editBtn.className = "edit-button";
      deleteBtn.className = "delete-button";

      editBtn.setAttribute("onclick", "editProduct(" + i + ")");
      deleteBtn.setAttribute("onclick", "deleteProduct(" + i + ")");

      actionCell.appendChild(editBtn);
      actionCell.appendChild(deleteBtn);

      row.appendChild(indexCell);
      row.appendChild(nameCell);
      row.appendChild(descriptionCell);
      row.appendChild(colorCell);
      row.appendChild(stockCell);
      row.appendChild(actionCell);

      tContent.appendChild(row);
    }
  }
}

renderTable();

var searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  renderTable(searchInput.value.toLowerCase());
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    renderTable(searchInput.value.toLowerCase());
  }
});

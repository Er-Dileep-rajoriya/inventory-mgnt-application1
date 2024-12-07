async function deleteProduct(id) {
  let result = confirm("Are you sure! Do you want to delete Product.?");

  if (result) {
    const response = await fetch("/delete-product/" + id, {
      method: "POST",
    });

    if (response.ok) {
      window.location.reload();
    }
  }
}

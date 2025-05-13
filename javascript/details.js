window.onload = function () {
  const image = localStorage.getItem('productImage');
  const name = localStorage.getItem('productName');
  const originalPrice = localStorage.getItem('productOriginalPrice');
  const discountPrice = localStorage.getItem('productDiscountPrice');

  document.getElementById('detailImage').src = image;
  document.getElementById('detailName').textContent = name;
  document.getElementById('detailOriginalPrice').textContent = originalPrice;
  document.getElementById('detailPrice').textContent = discountPrice;
};

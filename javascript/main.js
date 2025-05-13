function viewDetails(image, name, originalPrice, discountPrice) {
  localStorage.setItem('productImage', image);
  localStorage.setItem('productName', name);
  localStorage.setItem('productOriginalPrice', originalPrice);
  localStorage.setItem('productDiscountPrice', discountPrice);

  window.location.href = 'phone-details.html';
}

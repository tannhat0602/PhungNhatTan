const https = require('https');

const url = 'https://api.escuelajs.co/api/v1/products';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const products = JSON.parse(data);
      // Hiển thị thông tin sản phẩm ra console
      products.forEach((product, idx) => {
        console.log(`------------------------------`);
        console.log(`Sản phẩm #${idx + 1}`);
        console.log(`Tên: ${product.title}`);
        console.log(`Giá: ${product.price}`);
        console.log(`Mô tả: ${product.description}`);
        console.log(`Danh mục: ${product.category?.name}`);
        console.log(`Ảnh: ${product.images && product.images.length > 0 ? product.images[0] : ''}`);
      });
    } catch (err) {
      console.error('Lỗi khi parse JSON:', err);
    }
  });

}).on('error', (err) => {
  console.error('Lỗi khi gọi API:', err);
});
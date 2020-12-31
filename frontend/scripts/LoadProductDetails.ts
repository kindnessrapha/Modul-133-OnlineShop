import {Product} from "../../backend/model/product.ts";

export async function loadProductDetail() {
    const productId = new URLSearchParams(window.location.search).get("productId");
    const response = await fetch(`http://localhost:8000/api/products/${productId}`);
    const product: Product = await response.json();

    console.log(product);

    document.querySelector("h1").innerText = product.productName;
    document.querySelector("span").innerText = product.description;
    document.getElementById("image-product").src = `./../assets/${product.imageName}`;
}
import {Product} from "../../backend/model/product.ts";

export async function loadProductDetail() {
    const productId = new URLSearchParams(window.location.search).get("productId");
    const response = await fetch(`http://localhost:8000/api/products/${productId}`);
    const product: Product = await response.json();

    console.log(product);

    document.querySelector("h3").innerText = product.productName;
    document.getElementById("label-productDescription").innerText = product.description;
    document.getElementById("label-productPrice").innerText = product.specialOffer ?? product.normalPrice;
    document.getElementById("image-product").src = `./../assets/${product.imageName}`;
}
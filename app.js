let other_Imgs = document.querySelectorAll(".image img");
let other_Imgs_cov = document.querySelectorAll(".image");
let main_Img = document.querySelector(".main-image img");
let add_Cart_Btn = document.querySelector(".add-cart");
let addBtn = document.querySelector(".add");
let removeBtn = document.querySelector(".remove");
let counter = document.querySelector(".num");
let wrap = document.querySelector(".wrap");
let cart = document.querySelector(".cart");
let cart_info = document.querySelector(".cart .info-cart");
let price_string = document.querySelector(".price").textContent;
let no_items = document.querySelector(".no-items");
let notf = document.querySelector(".profiles div");
let iconCart = document.querySelector(".icont-cart");
let closeBtn = document.querySelector(".closeBtn");
let mainImage = document.querySelector(".img .big-img img");
let previousBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
let other_imgg = document.querySelectorAll(".imgg");
let preview_img_cart = document.querySelector(".preview-image-cart");
let container = document.querySelector(".container");
let price = price_string.replace("$", "");
let count2 = 1;
price = parseFloat(price).toFixed(2);

let count = 0;
counter.textContent = count;

other_Imgs_cov.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    other_Imgs_cov.forEach((img) => {
      img.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let data_id = e.currentTarget.getAttribute("data-id");
    main_Img.setAttribute("src", `images/image-product-${data_id}.jpg`);
  });
});

addBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

removeBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});

add_Cart_Btn.addEventListener("click", () => {
  if (count > 0) {
    no_items.style.display = "none";
    notf.classList.add("icon-cont");
    let totalPrice = parseInt(price * count);
    cart_info.innerHTML = `
    <div class="shoplist">
      
      <img class="shop-img" src="images/image-product-1-thumbnail.jpg" alt="none" class="pic">
      
      <div class="shop-info">
        <p >Fall Limited Edition Sneakers</p>
        <p>$125 x <span class="counter">${count}</span> <span class="total-price">$${totalPrice}</span></p>
        
      </div>
      
      <a class="deleteBtn" href="#"><img class="deleteImg" src="images/icon-delete.svg" alt="none"></a>
    </div>
    `;
  }
});

cart.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteImg")) {
    if (e.target.closest(".shoplist")) {
      e.target.closest(".shoplist").remove();
      no_items.style.display = "block";
      notf.classList.remove("icon-cont");
    }
  }
});

document.querySelector(".profiles").addEventListener("click", (e) => {
  if (e.target.classList.contains("icont-cart")) {
    cart.classList.toggle("active");
  }
});

nextBtn.addEventListener("click", (e) => {
  count2++;
  if (count2 <= 4) {
    mainImage.setAttribute("src", `images/image-product-${count2}.jpg`);
    other_imgg.forEach((img) => {
      img.classList.remove("active");
    });
    other_imgg[count2 - 1].classList.add("active");
  } else {
    count2 = 4;
  }
});

previousBtn.addEventListener("click", (e) => {
  count2--;
  if (count2 > 0) {
    mainImage.setAttribute("src", `images/image-product-${count2}.jpg`);
    other_imgg.forEach((img) => {
      img.classList.remove("active");
    });
    other_imgg[count2 - 1].classList.add("active");
  } else {
    count2 = 1;
  }
});

main_Img.addEventListener("click", () => {
  preview_img_cart.classList.add("show");
  container.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  preview_img_cart.classList.remove("show");
  container.classList.remove("hide");
});

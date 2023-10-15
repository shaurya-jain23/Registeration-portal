const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");

    
    const image = faq.querySelector("img");

    
    if (faq.classList.contains("active")) {
      
      image.src = "Vector 5.svg";
    } else {
      
      image.src = "Vector 4.svg";
    }
  });
});

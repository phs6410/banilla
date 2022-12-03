const imgs = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];




function bg() {

  const getImg = imgs[Math.floor(Math.random() * imgs.length)];
  const bgImg = document.createElement("img");
  bgImg.src = `img/${getImg}`;
  
  document.body.style.backgroundImage = `url(${bgImg.src})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

bg();

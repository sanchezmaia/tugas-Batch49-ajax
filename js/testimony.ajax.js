const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/b06c654b1399239d932c", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading Data");
    }
  };

  xhr.onerror = function () {
    reject("Network Error");
  };

  xhr.send();
});
function addStars(star) {
  let starLogo = '<i class="fa-solid fa-star"></i>';
  return starLogo.repeat(star);
}

// async function updateButtonStyle(button) {
//   // Reset all button styles
//   let buttons = document.getElementsByClassName("rating-btn");
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].style.backgroundColor = "white";
//     buttons[i].style.color = "black";
//   }

//   // Set the clicked button style
//   button.style.backgroundColor = "#fd4e2f";
//   button.style.color = "white";
// }

async function allTestimonial() {
  try {
    const response = await testimonial;
    let testimonialHTML = "";

    response.forEach((item) => {
      testimonialHTML += `<div class="testimonial">
      <p class="quote">
          ${item.review}
      </p>
      <div class="description">
          <img src="${item.profPic}" alt="">
          <div class="person">
              <span class="name">${item.author}</span><br>
             <span class="name">${item.subrating}<i class="bi bi-star-fill"></i> </span><br>
          </div>
      </div>
  </div>
      `;
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (error) {
    console.log(error);
  }
}

allTestimonial();

async function filterTestimonial(rating) {
  try {
    const response = await testimonial;
    let testimonialHTML = "";
    const testimonialFiltered = response.filter((item) => {
      return item.rating === rating;
    });
    if (testimonialFiltered.length === 0) {
      testimonialHTML = `<h1>Opss, Sayang sekali 😎</h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
            <div class="testimonial">
                <p class="quote">
                    ${item.review}
                </p>
                <div class="description">
                    <img src="${item.profPic}" alt="">
                    <div class="person">
                        <span class="name">${item.author}</span><br>
                        <span class="name">${item.subrating}<i class="bi bi-star-fill"></i> </span><br>
                    </div>
                </div>
            </div>
            `;
      });
    }
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (error) {
    console.log(error);
  }
}

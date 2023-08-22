const testimonialData = [
  {
    author: "Muhammad Yesus Sidharta",
    rating: 5,
    review:
      "Sangat puas dengan layanan jasa pembuatan web dari tim ini. Mereka sangat responsif terhadap kebutuhan kami dan berhasil menghasilkan situs web yang sesuai dengan visi dan misi perusahaan kami. Desainnya modern dan fungsional, serta integrasi dengan sistem backend berjalan dengan lancar. Terima kasih atas profesionalisme dan dedikasinya!",
    projPic: "https://img.freepik.com/premium-vector/kids-website-landing-page-ui-design-template_502601-12.jpg",
    job: "Data Scientist",
    company: "PT. Jaya Abadi",
    linkedinId: "alifdwt",
    profPic: "https://s3.ap-southeast-1.amazonaws.com/cdn.vcgamers.com/news/wp-content/uploads/2023/02/foto-pp-wa-aesthetic-12-300x300.jpg",
  },
  {
    author: "Yohanes Abdul Situmorang",
    rating: 4,
    review:
      "Menggunakan layanan jasa pembuatan web ini adalah keputusan yang sangat tepat. Mereka mengambil waktu untuk mendengarkan ide-ide saya dan mengintegrasikannya ke dalam situs web dengan sempurna. Situs web yang mereka buat mudah digunakan dan tampilannya menarik. Saya sangat merekomendasikan layanan ini kepada siapa pun yang membutuhkan solusi web berkualitas.",
    projPic: "https://sketch-cdn.imgix.net/assets/blog/sketch-ui-design%402x.png?ixlib=rb-4.1.0&fit=max&w=1920&q=95&auto=format&fm=png&s=74863334ced26f21e3342c0c375f1dae",
    job: "Front end Developer",
    company: "PT. Sumber Makmur",
    linkedinId: "alifdwt",
    profPic: "https://s3.ap-southeast-1.amazonaws.com/cdn.vcgamers.com/news/wp-content/uploads/2023/02/foto-pp-wa-aesthetic-6-300x300.jpg",
  },
  {
    author: "Sarah Tanjung",
    rating: 3,
    review:
      "Tim di balik layanan jasa pembuatan web ini luar biasa! Mereka tidak hanya memiliki keahlian teknis yang tinggi, tetapi juga memiliki pemahaman mendalam tentang kebutuhan bisnis online. Situs web yang mereka kembangkan untuk startup saya tidak hanya menarik secara visual, tetapi juga memiliki fitur-fitur yang mendukung pertumbuhan bisnis kami. Saya sangat terkesan dengan hasilnya.",
    projPic: "https://cdn.dribbble.com/userupload/4060584/file/original-a2dcb88a24da79db509636a26cd98052.png?resize=400x0",
    job: "Business Development",
    company: "FoodieVerse",
    linkedinId: "alifdwt",
    profPic: "https://wallpapers.com/images/hd/aesthetic-profile-picture-52t290ggbex44jma.jpg",
  },
  {
    author: "David Michael",
    rating: 4,
    review:
      "Sebagai organisasi nirlaba, kami mencari solusi yang terjangkau namun efektif untuk membangun situs web kami. Layanan jasa pembuatan web ini memberikan lebih dari yang kami harapkan. Mereka dengan cermat menggambarkan kisah kami melalui desain yang menarik dan mengkomunikasikannya dengan jelas kepada audiens kami. Kami bangga memiliki situs web yang mampu menyampaikan misi kami.",
    projPic: "https://cdn.dribbble.com/userupload/2970030/file/original-b405f07b44b99610820219e22202c3a4.png?resize=400x0",
    job: "Fundraising",
    company: "GreenEarth",
    linkedinId: "alifdwt",
    profPic: "https://wallpapers-clan.com/wp-content/uploads/2023/01/dark-aesthetic-boy-pfp-28.jpg",
  },
  {
    author: "Rina Purnama",
    rating: 4,
    review:
      "Saya awalnya ragu-ragu tentang bagaimana layanan jasa pembuatan web dapat mengubah bisnis online saya. Namun, tim ini membuktikan keraguan saya salah. Mereka tidak hanya menciptakan toko online yang indah, tetapi juga memastikan bahwa fungsionalitasnya tidak diragukan. Sekarang, saya memiliki platform yang memudahkan saya mengelola produk dan melayani pelanggan dengan lebih baik.",
    projPic: "https://blog.tubikstudio.com/wp-content/uploads/2019/03/bugs_store_webdesign_tubik-1-1024x768.png",
    job: "Digital Marketing",
    company: "CraftyStore",
    linkedinId: "alifdwt",
    profPic: "https://wallpapers.com/images/hd/aesthetic-profile-picture-bz0zswmqkcfm45ik.jpg",
  },
  {
    author: "Irfan Akbar",
    rating: 5,
    review:
      "Penting bagi konsultan bisnis memiliki profil online yang kuat. Layanan jasa pembuatan web ini membantu saya menghadirkan diri saya secara profesional kepada klien potensial. Mereka mendengarkan kebutuhan saya secara seksama dan mengintegrasikannya ke dalam desain yang mencerminkan kepribadian dan layanan saya. Saya sangat puas dengan hasilnya dan telah melihat peningkatan signifikan dalam permintaan layanan konsultasi saya.",
    projPic: "https://s3-alpha.figma.com/hub/file/3236068850/252ed11c-029b-409d-b941-19315fb702cd-cover.png",
    job: "Business Consultant",
    company: "BizGrowth",
    linkedinId: "alifdwt",
    profPic: "https://s3.ap-southeast-1.amazonaws.com/cdn.vcgamers.com/news/wp-content/uploads/2023/02/foto-pp-wa-aesthetic-3-300x300.jpg",
  },
];

function addStars(star) {
  let starLogo = '<i class="fa-solid fa-star"></i>';
  return starLogo.repeat(star);
}

function updateButtonStyle(button) {
  // Reset all button styles
  let buttons = document.getElementsByClassName("rating-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "white";
    buttons[i].style.color = "black";
  }

  // Set the clicked button style
  button.style.backgroundColor = "#fd4e2f";
  button.style.color = "white";
}

function allTestimonial() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
            <div class="testimonial">
            <div class="image">
            <img src="${item.projPic}" alt="project-photo">
            <div class="rating">Rating: ${addStars(item.rating)}</div>
            </div>
                <p class="quote">
                    ${item.review}
                </p>
                <div class="description">
                    <img src="${item.profPic}" alt="">
                    <div class="person">
                        <span class="name">${item.author}</span><br>
                        <span class="job">${item.job} at ${item.company}</span><br>
                        <a href="https://linkedin.com/in/${item.linkedinId}/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>
            </div>
        `;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
  updateButtonStyle(event.target);
}

allTestimonial();

function filterTestimonial(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1>Sorry, data not found 😥</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
            <div class="testimonial">
                <div class="image">
                    <img src="${item.projPic}" alt="project-photo">
                    <div class="rating">Rating: ${addStars(item.rating)}</div>
                </div>
                <p class="quote">
                    ${item.review}
                </p>
                <div class="description">
                    <img src="${item.profPic}" alt="">
                    <div class="person">
                        <span class="name">${item.author}</span><br>
                        <span class="job">${item.job} at ${item.company}</span><br>
                        <a href="https://linkedin.com/in/${item.linkedinId}/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>
            </div>
            `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
  updateButtonStyle(event.target);
}

const templete1 = (data, i) => `
  <div class="work-header-box">
    <h2 class="work-header primary-font">My Recent Works</h2>
    <div class="line"></div>
  </div>
  <div class="multi-post-card flex">
    <div class="card-img-box">
      <img
        src="${data.imgPath}"
        alt="${data.cardMobileTitle}"
        class="multi-post-header-img"
      />
    </div>
    <div class="card-text-box flex">
      <h3 class="multi-post-primary primary-font">${data.cardMobileTitle}</h3>
      <p class="multi-post-description">
      ${data.mobileDescription}
      </p>
      <ul class="tags-box flex">
      ${data.tech}
      </ul>
      <a
        href="https://github.com/Gh-Reza/Portfolio-mobile-version"
        class="action-btn popup" 
        content-id="${i}" 
        >See project</a
      >
    </div>
  </div>
`;

const templete2 = (data, i) => `
<div class="card card__${i} flex">
<div class="card-container">
  <div class="card-mobile-content">
    <h3 class="card-primary primary-font">
    ${data.cardMobileTitle}
    </h3>
    <p class="card-description">
    ${data.mobileDescription}
    </p>
  </div>
  <div class="card-desktop-content">
    <h3 class="card-primary primary-font">
      ${data.cardDeskTitle}
    </h3>
    <p class="card-description">
      ${data.deskDescription}
    </p>
  </div>
  <ul class="tags-box flex">
  ${data.tech}
  </ul>
  <a
    href="https://github.com/Gh-Reza/Portfolio-mobile-version"
    class="action-btn popup" 
    content-id="${i}" 
    >See project</a
  >
</div>
</div>
`;

const modal = (data) => `
  <div class="modal-header">
  <h2 class="modal-heading">${data.cardDeskTitle}</h2>
  <img class="close-btn" src="./img/close.svg" alt="Close">
  </div>
  <ul class="tags-box flex">
    ${data.tech}
  </ul>
  <div class="modal-content">
  <div class="card-img-box">
    <img
      src="${data.imgPath}"
      alt="card image"
      class="multi-post-header-img"
    />
  </div>
  <div class="card-text-container">
    <div class="card-text-box">
      <p class="multi-post-description longDesc">
        ${data.longDescription}
      </p>
      <p class="multi-post-description shortDesc">
        ${data.description}
      </p>
    </div>
    <div class="modal-btn-container">
      <a
      href="https://github.com/Gh-Reza/Portfolio-mobile-version"
      class="action-btn" 
      >See live <img src="img/live.png" alt="Live demo"></a
      >
      <a
      href="https://github.com/Gh-Reza/Portfolio-mobile-version"
      class="action-btn" 
      >See source <img src="img/github.svg" alt=""></a
      >
    </div>
  </div>
  </div>
`;

export { templete1, templete2, modal };
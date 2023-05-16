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
        <li><a href="#">${data.tech_1}</a></li>
        <li><a href="#">${data.tech_2}</a></li>
        <li><a href="#">${data.tech_3}</a></li>
        <li><a href="#">${data.tech_4}</a></li>
      </ul>
      <a
        href="https://github.com/Gh-Reza/Portfolio-mobile-version"
        class="action-btn" 
        content-id="${i}" 
        >See project</a
      >
    </div>
  </div>
`

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
    <li><a href="#">${data.tech_1}</a></li>
    <li><a href="#">${data.tech_2}</a></li>
    <li><a href="#">${data.tech_3}</a></li>
  </ul>
  <a
    href="https://github.com/Gh-Reza/Portfolio-mobile-version"
    class="action-btn" 
    content-id="${i}" 
    >See project</a
  >
</div>
</div>
`

const modal = (data) => `
  
`

export { templete1, templete2 };
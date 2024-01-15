export default function Banner(imgUrl, props) {
  console.log(props);
  return `<div class="banner"
  style='background-image: url(${imgUrl});'>
      <div class="container">
          <div class="bannerContent">
            ${props}
          </div>
      </div>
    </div>
    `;
}

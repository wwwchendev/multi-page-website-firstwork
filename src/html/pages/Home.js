const Home = () => {
  const params = window.location.hash.split('/').join('/');
  const type = params === '#/home/test' ? '首頁測試' : '首頁';
  return {
    documentTitle: `${type}`,
    bannerUrl:
      'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/mutiplePage/bg_index.png',
    bannerProps: `<div class="content">
        <h2> 歡迎來到 <span>六角學院</span>
          <br>帶你一起攻略前端設計
        </h2>
        <a href="#/home/test" class='btn'>
          馬上去註冊
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>`,
    mainArea: `<p>${type}</p>`,
  };
};
export default Home;

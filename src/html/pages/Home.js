const Home = () => {
  const params = window.location.hash.split('/').join('/');
  const type = params === '#/home/test' ? '首頁測試' : '首頁';
  return {
    documentTitle: `${type}`,
    html: `<div class="banner"
  style='background-image: url("https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/mutiplePage/bg_index.png");'>
      <div class="container">
          <div class="bannerContent">
          <div class="content">
          <h2> 歡迎來到 <span>六角學院</span>
            <br>帶你一起攻略前端設計
          </h2>
          <a href="#/home/test" class='btn'>
            馬上去註冊
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
          </div>
      </div>
    </div>
    <main class='container'>
    <section>
      <div class='title'>
        <h2>精選課程
          <span>幫助你拿到前端工程師的門票</span>
        </h2>
        <a href="#" class="btn">更多課程 </a>
      </div>
      <ul class='focus'>
        <li>
          <img src="https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/mutiplePage/html5.png" alt="">
          <h4>Html 5 基礎教學</h4>
          <p>主流前端網站設計的基礎，透過實際範例，瞭解正確網站開發流程。</p>
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/mutiplePage/rwd.png" alt="">
          <h4>響應式網站設計</h4>
          <p>六角學院提供響應式開發方法，讓學生瞭解完善的行動版開發觀念。</p>
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/mutiplePage/jQuery.png" alt="">
          <h4>jQuery 實戰教學</h4>
          <p>分為四大主題：變數的使用、操作DOM、基本數學運算和套件運用。</p>
        </li>
      </ul>
    </section>
    <section>
      <div class='title'>
        <h2>課程比較
          <span>線上課程與實體課程的差異</span>
        </h2>
      </div>
      <table class="difference">
        <tr>
          <th>項目</th>
          <th>Hex School線上課程</th>
          <th>一般線上課程</th>
          <th>實體課程</th>
        </tr>
        <tr>
          <td>費用</td>
          <td class="tune">較低</td>
          <td class="tune">較低</td>
          <td>較高</td>
        </tr>
        <tr>
          <td>學習效果</td>
          <td>一般</td>
          <td class="tune">較低</td>
          <td class="tune">很好</td>
        </tr>
        <tr>
          <td>Code Review</td>
          <td class="tune">有</td>
          <td>沒有</td>
          <td>不一定</td>
        </tr>
        <tr>
          <td>課程更新速度</td>
          <td class="tune">普通</td>
          <td class="tune">普通</td>
          <td>較慢</td>
        </tr>
        <tr>
          <td>多次複習</td>
          <td class="tune">可</td>
          <td>可</td>
          <td>不可</td>
        </tr>
        <tr>
          <td>字幕</td>
          <td class="tune">有</td>
          <td>不一定</td>
          <td>板書</td>
        </tr>
      </table>
    </section>
    </main>
    <div class="form">
      <div class="container">
        <p>你就是六角的下一個學生！<br>
          快留下資料讓我們認識你吧</p>
        <div class="contact">
          <input type="text" id="name" placeholder="你的名字是？">
          <input type="email" id="email" placeholder="example@mail.com.tw">
          <input type="submit" id="submit" value="送出">
        </div>
      </div>
    </div>
    `,
  };
};

export default Home;

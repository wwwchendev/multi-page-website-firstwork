import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const initProps = {
  documentTitle: `未命名`,
  bannerUrl: ``,
  bannerProps: ``,
  mainArea: ``,
};

export default function Layout(props = initProps) {
  const { documentTitle, bannerUrl, bannerProps, mainArea } = props;
  document.title = documentTitle;
  return `
  ${Header()} 
  ${Banner(bannerUrl, bannerProps)}
    <main>
      <div class="container">
        ${mainArea}
      </div>
    </main> 
  ${Footer()}
  `;
}

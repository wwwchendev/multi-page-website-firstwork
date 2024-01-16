const initProps = {
  documentTitle: `未命名`,
  html: ``,
};

export default function Layout(props = initProps) {
  const { documentTitle, html } = props;
  document.title = documentTitle;
  return `${html}`;
}

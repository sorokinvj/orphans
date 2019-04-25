import App, { Container } from 'next/app';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import cookies from 'next-cookies';
import MobileDetect from 'mobile-detect';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import GeneralHead from '../components/GeneralHead';
import GlobalStyle from '../components/globals';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // добываем значение языка из пользовательских кукис
    const { language, useragreedwithcookies } = cookies(ctx);
    const hasCookies = typeof language !== 'undefined';
    const cookieConsent = typeof useragreedwithcookies !== 'undefined';

    // определяем тип устройства, чтобы потом react-media
    // рендерила именно ту версию компонента, которая
    // совпадает с серверным html
    const { req } = ctx;
    const md = new MobileDetect(req ? req.headers['user-agent'] : '');
    const phone = md.phone();
    const tablet = md.tablet();

    // Компонент получает свои pageProps с сервера
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // возвращаем pageProps с сервера и значение языка
    return {
      pageProps,
      hasCookies,
      language: hasCookies ? language : 'ru',
      phone,
      tablet,
      cookieConsent,
    };
  }

  componentDidMount() {
    // выставляем куки, если их не было
    if (!this.props.hasCookies && typeof this.props.language !== 'undefined') {
      document.cookie = `language=${this.props.language};Expires=Wed, 22 Oct 2025 07:28:00 GMT`;
    }
  }


  render() {
    const theme = {
      '$grid-gutter-width': '50px',
    };

    const {
      Component, pageProps, phone, tablet, cookieConsent,
    } = this.props;

    // console.log("_app", this.props)
    
    return (
      <Container>
        <BootstrapProvider injectGlobal reset theme={theme}>
          <GlobalStyle />
          <GeneralHead />
          <Nav cookieConsent={cookieConsent} />
          <Component {...pageProps} phone={phone} tablet={tablet} />
          <Footer />
        </BootstrapProvider>
      </Container>
    );
  }
}

export default MyApp;

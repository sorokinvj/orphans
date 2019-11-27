import App from 'next/app';
import React from 'react';
import Router, { withRouter } from 'next/router';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
// import cookies from 'next-cookies';
import MobileDetect from 'mobile-detect';
import Nav from '../components/navigation';
import Footer from '../components/footer';
import GeneralHead from '../components/GeneralHead';
import GlobalStyle from '../components/globals';
import AppWithI18n from '../components/AppWithI18n';
import { initGA, logPageView } from '../components/shared/analytics';
import 'mapbox-gl/dist/mapbox-gl.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // добываем значение языка из пользовательских кукис
    // const { language, useragreedwithcookies } = cookies(ctx);
    // const hasCookies = typeof language !== 'undefined';
    // const cookieConsent = typeof useragreedwithcookies !== 'undefined';

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
      // hasCookies,
      // language: hasCookies ? language : 'ru',
      phone,
      tablet,
      // cookieConsent,
    };
  }

  componentDidMount() {
    // Google Analytics
    initGA();
    logPageView();
    Router.router.events.on('routeChangeComplete', logPageView)
  }


  render() {
    const {
      Component, pageProps, phone, tablet, cookieConsent, router,
    } = this.props;
    // console.log('_app', this.props);

    return (
      <AppWithI18n initLanguage={router.query.lang}>
        <BootstrapProvider injectGlobal reset>
          <GlobalStyle />
          <GeneralHead />
          <Nav cookieConsent={cookieConsent} />
          <Component {...pageProps} phone={phone} tablet={tablet} />
          <Footer />
        </BootstrapProvider>
      </AppWithI18n>
    );
  }
}

export default withRouter(MyApp);

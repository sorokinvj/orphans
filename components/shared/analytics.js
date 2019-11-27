import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-153553648-1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = ({ category, action }) => {
  // console.log(`Log '${action}' in category '${category}'`);
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

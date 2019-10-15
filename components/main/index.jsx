import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from '@bootstrap-styled/v4';
import StyledMainPage from './styled';
import Investigations from './Investigations';
import Intro from './Intro';
import Stories from './Stories';

const MainPage = ({ stories, investigations, phone, lang, videos }) => (
  <StyledMainPage>
    <Container>
      <Intro />
      <Investigations
        investigations={investigations}
        phone={phone}
        lang={lang}
      />
      <Stories
        stories={stories}
        phone={phone}
        lang={lang}
        videos={videos}
      />
    </Container>
  </StyledMainPage>
);

MainPage.propTypes = {

};

export default MainPage;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import { Trans } from '@lingui/macro';
import StyledMainPage from './styled';
import Statement from '../shared/styled/Statement';
import H1 from '../shared/styled/H1';
import Investigation1 from './Investigation1';
import Investigation2 from './Investigation2';
import Investigation3 from './Investigation3';
import Investigation4 from './Investigation4';


const MainPage = ({ stories, investigations, phone }) => (
  <StyledMainPage>
    <Container>
      <Row>
        <Col xs="12" md="9">
          <Statement>
            <Trans>
                “Сиротские истории” — это проект о нарушениях прав самых несчастных и уязвимых людей. Дети, родившиеся без родителей, или брошенные в младенчестве не могу постоять за себя. До 18 лет они живут практически в концлагере, а после — фактически на улице. Государство обязано выдавать им квариры, но на деле обманывает сирот и крадет у них жизнь.
            </Trans>
          </Statement>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="12">
          <H1>
            <Trans>
                Расследования
            </Trans>
          </H1>
        </Col>
      </Row>
      {investigations.map((unit, index, array) => {
        if (index === 0) {
          return <Investigation1 unit1={unit} unit2={array[1]} key={unit.id} phone={phone} />;
        }
        if (index === 1) {
          return <div key={unit.id} />;
        }
        if (index === 2) {
          return <Investigation2 unit={unit} key={unit.id} phone={phone} />;
        }
        if (index === 3) {
          return <Investigation3 unit={unit} key={unit.id} phone={phone} />;
        }
        if (index === 4) {
          return <Investigation4 unit={unit} key={unit.id} phone={phone} />;
        }
        return <div key={unit.id} />;
      })}
    </Container>
  </StyledMainPage>
);

MainPage.propTypes = {

};

export default MainPage;

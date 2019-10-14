import React from 'react';
import {
  Row,
  Col,
} from '@bootstrap-styled/v4';
import { Trans } from '@lingui/macro';
import Statement from '../shared/styled/Statement';

const Intro = () => (
  <Row>
    <Col xs="12" md="9">
      <Statement>
        <Trans>
            “Сиротские истории” — это проект о нарушениях прав самых несчастных и уязвимых людей. Дети, родившиеся без родителей, или брошенные в младенчестве не могу постоять за себя. До 18 лет они живут практически в концлагере, а после — фактически на улице. Государство обязано выдавать им квариры, но на деле обманывает сирот и крадет у них жизнь.
        </Trans>
      </Statement>
    </Col>
  </Row>
);

export default Intro;

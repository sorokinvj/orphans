import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Trans } from '@lingui/macro'
import { Row, Col } from '@bootstrap-styled/v4'
import H1 from '../shared/styled/H1'
import Case from './cards/Case'
import Fact from './Fact'

const StyledIMG = styled.img`
  height: 36rem;
  margin-top: 6rem;
  @media (max-width: 415px) {
    width: 100%;
    height: auto;
  }
`

const Investigations = ({ investigations, phone, lang }) => {
  console.log('lang', lang)
  return (
    <>
      <Row id="investigations">
        <Col xs="12" md="12">
          <H1>
            <Trans>Расследования</Trans>
          </H1>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="6">
          {lang === 'ru' ? (
            <StyledIMG
              src="/static/graph1.svg"
              alt="количество поисковых запросов 'Купить  ребенка'"
            />
          ) : (
            <StyledIMG
              src="/static/graph1_EN.svg"
              alt="search results of 'buy child' on Yandex"
            />
          )}
        </Col>
        {investigations.map(unit => (
          <Col xs="12" md="6" key={unit.id}>
            <Case
              phone={phone}
              item={unit}
              lang={lang}
              type="investigation"
              size="big"
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs="12" md="12">
          <Fact phone={phone} lang={lang} />
        </Col>
      </Row>
    </>
  )
}

Investigations.propTypes = {}

export default Investigations

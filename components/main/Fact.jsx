import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  height: 100%;
  img {
    width: 70%;
    margin-top: 6rem;
    @media (max-width: 415px) {
      margin: 6rem 0 0 0;
      width: 100%;
    }
  }
`

const Fact = ({ phone, lang }) => {
  console.log('lang', lang)
  return (
    <Styled>
      {lang === 'ru' ? (
        <>
          {!phone && (
            <img src="/static/facts1.svg" alt="Facts about orphans in Russia" />
          )}
          {phone && (
            <img
              src="/static/facts1_mob.svg"
              alt="Facts about orphans in Russia"
            />
          )}
        </>
      ) : (
        <>
          {!phone && (
            <img
              src="/static/facts1_EN.svg"
              alt="Facts about orphans in Russia"
            />
          )}
          {phone && (
            <img
              src="/static/facts1_EN_mob.svg"
              alt="Facts about orphans in Russia"
            />
          )}
        </>
      )}
    </Styled>
  )
}

export default Fact

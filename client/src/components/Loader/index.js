import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner className="loadingio-spinner-ripple-eme8l9my2oh">
        <div className="ldio-39yi2ugkh1m">
          <div></div>
          <div></div>
        </div>
      </Spinner>
    </LoaderContainer>
  )
}

export default Loader

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  width: 300px;
  height: 300px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;

  @keyframes ldio-39yi2ugkh1m {
    0% {
      top: 52px;
      left: 52px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 16px;
      left: 16px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }

  .ldio-39yi2ugkh1m div {
    position: absolute;
    border-width: 48px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-39yi2ugkh1m 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .ldio-39yi2ugkh1m div:nth-child(1) {
    border-color: #f61c1c;
  }

  .ldio-39yi2ugkh1m div:nth-child(2) {
    border-color: #90f046;
    animation-delay: -0.5s;
  }

  .ldio-39yi2ugkh1m {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-39yi2ugkh1m div {
    box-sizing: content-box;
  }
`

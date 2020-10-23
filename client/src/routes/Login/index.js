import React from 'react'
import styled from 'styled-components'
import LoginCard from '../..components/LoginCard'

const Login = () => {
  return (
    <LoginPage>
      <LoginBanner></LoginBanner>
      <LoginCardContainer>
        <LoginCard />
      </LoginCardContainer>
    </LoginPage>
  )
}

export default Login

const LoginPage = styled.section``

const LoginBanner = styled.div``

const LoginCardContainer = styled.div``

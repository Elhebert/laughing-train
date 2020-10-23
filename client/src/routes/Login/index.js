import React from 'react'
import styled from 'styled-components'
import LoginCard from '../../components/LoginCard'
import { colors } from '../../styles'
import history from '../../store/history'

const Login = () => {
  const redirectToDashboard = () => {
    history.push('/dashboard')
  }
  return (
    <LoginPage>
      <LoginBanner></LoginBanner>
      <LoginCardContainer>
        <LoginCard redirectToDashboard={redirectToDashboard} />
      </LoginCardContainer>
    </LoginPage>
  )
}

export default Login

const LoginPage = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0;
`

const LoginBanner = styled.div`
  background-color: ${colors.base};
`

const LoginCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

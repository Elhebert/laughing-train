import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const LoginCard = ({ redirectToDashboard }) => {
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log('coming here', username, password)
    redirectToDashboard()
  }

  return (
    <LoginCardContainer>
      <form onSubmit={handleLoginSubmit}>
        <h2>Login or Signup</h2>
        <InputContainer>
          <label htmlFor="username">Username/Email</label>
          <input
            type="email"
            placeholder="abc@xyz.com"
            required
            name="username"
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="******"
            required
            name="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
        </InputContainer>
        <div>
          <SubmitButton type="submit" name="submit" value="Submit" />
        </div>
      </form>
    </LoginCardContainer>
  )
}

LoginCard.propTypes = {
  redirectToDashboard: PropTypes.func.isRequired,
}

export default LoginCard

const LoginCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  border: 1px solid ${colors.border};
  box-shadow: ${colors.boxShadow};
  border-radius: 0.3rem;
  min-width: 300px;

  > form {
    width: 100%;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0rem;

  > label {
    color: ${colors.gray};
    font-size: 0.875rem;
    padding-bottom: 0.25rem;
  }

  > input {
    padding: 0.5rem;
    border: 1px solid ${colors.baseLight};
    border-radius: 0.3rem;
  }
`

const SubmitButton = styled.input`
  width: 100%;
  background-color: ${colors.base};
  color: ${colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
`

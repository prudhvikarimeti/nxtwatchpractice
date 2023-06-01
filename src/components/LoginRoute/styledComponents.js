import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  padding: 20px;
  @media screen and(min-width:992px) {
    width: 350px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  }
`
export const LoginWebsiteLogo = styled.img`
  width: 185px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const CheckboxInput = styled.input`
  margin-right: 4px;
`
export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const UserNameInputField = styled.input`
  outline: none;
  padding: 8px 16px 8px 16px;
  margin-top: 5px;
  border-radius: 2px;
  height: 40px;
  font-size: 14px;
  background-color: #e2e8f0;
  border: 1px solid #d7dfe9;
  color: #64748b;
`

export const PasswordInputField = styled.input`
  outline: none;
  padding: 8px 16px 8px 16px;
  margin-top: 5px;
  border-radius: 2px;
  height: 40px;
  font-size: 14px;
  background-color: #e2e8f0;
  border: 1px solid #d7dfe9;
  color: #64748b;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

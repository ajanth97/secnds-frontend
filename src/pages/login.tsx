import React from "react"
import {Input} from 'baseui/input'
import {
    Card,
    StyledBody,
    StyledAction
  } from "baseui/card";
import { Button } from "baseui/button";
import { Layer } from "baseui/layer";
import {Link} from "gatsby"
import {FormControl} from 'baseui/form-control';
import {validate as validateEmail} from 'email-validator'
import { useLogin } from "../hooks/useLogin";

const payloadData = {emailAddress: "ajanth1997@gmail.com"}


const Login = () => {
const [emailValue, setEmailValue] = React.useState('')
const [isValid, setIsValid] = React.useState(false)
const [isVisited, setIsVisited] = React.useState(false) 

const RespData = useLogin(payloadData)
const onChange = ({target: {value}}) => {
  setIsValid(validateEmail(value))
  setEmailValue(value)
}

const shouldShowError = !isValid && isVisited
console.log(shouldShowError)
  return(
        <Layer>
        <Card
        overrides={{Root: {style: {width: '600px', textAlign: 'center', margin: 'auto', marginTop: '40px'}}}}
        title="Log in"
      >
       <form>
        <FormControl label="Your email" error={shouldShowError ? 'Please enter a valid Email' : null}>
        <React.Fragment>
        <StyledBody>
          Please sign in to your secnds account
        <Input placeholder="Email Address" onChange={onChange} onBlur={() => {setIsVisited(true)}} error={shouldShowError}/>
        <br/>
        <Input placeholder="Password" type="password"/>
        <br/>
        If you are new here <Link to="/signup">Sign up</Link>
        </StyledBody>
        <StyledAction>
          {RespData.loading ? 
          (<Button isLoading overrides={{BaseButton: {style: {width: '100%'}}}}>
          Log in
        </Button>) : (
          <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
          Log in
        </Button>
        )
        }
        </StyledAction>
        </React.Fragment>
        </FormControl>
      </form>
      </Card>
      </Layer>
  )   
}

export default Login
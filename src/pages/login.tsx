import React from "react"
import {Input} from 'baseui/input'
import {
    Card,
    StyledBody,
    StyledAction
  } from "baseui/card";
import { Button } from "baseui/button";
import { Layer } from "baseui/layer";
import { StyledLink } from "baseui/link";
import {Link} from "gatsby"


const Login = () => {
    return(
        <Layer>
        <Card
        overrides={{Root: {style: {width: '600px', textAlign: 'center', margin: 'auto', marginTop: '40px'}}}}
        title="Log in"
      >
        <StyledBody>
          Please sign in to your secnds account
        <Input placeholder="Email Address"/>
        <br/>
        <Input placeholder="Password" type="password"/>
        <br/>
        If you are new here <Link to="/signup"><StyledLink>Sign up</StyledLink></Link>  
        </StyledBody>
        <StyledAction>
          <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
            Log in
          </Button>
        </StyledAction>
      </Card>
      </Layer>
  )   
}

export default Login
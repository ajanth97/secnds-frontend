import React from "react"
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
  } from "baseui/header-navigation";
  import { StyledLink } from "baseui/link";
  import { Button } from "baseui/button";
  import { Layer } from "baseui/layer";
  import {StatefulSelect as Search, TYPE} from 'baseui/select';
  import {Link} from "gatsby"




const Navbar = () => {
   
    return (
        <header>          
                <Layer>
                <HeaderNavigation>
                    <StyledNavigationList $align={ALIGN.left}>
                        <StyledNavigationItem>
                            <Link to="/">
                            <img src="https://ik.imagekit.io/fxfinewfg0/logo_X2CX0Y4X_H.svg"
                            width="150"
                            height="50"
                            />
                            </Link>
                        </StyledNavigationItem>
                    </StyledNavigationList>
                    <StyledNavigationList $align={ALIGN.center}>
                        <Search type={TYPE.search}/>
                    </StyledNavigationList>    
                    <StyledNavigationList $align={ALIGN.right}>
                        <StyledNavigationItem>
                        <StyledLink href="#basic-link1">
                            Tab Link One
                        </StyledLink>
                        </StyledNavigationItem>
                        <StyledNavigationItem>
                        <StyledLink href="#basic-link2">
                            Tab Link Two
                        </StyledLink>
                        </StyledNavigationItem>
                    </StyledNavigationList>
                    <StyledNavigationList $align={ALIGN.right}>
                        <Link to="/login">
                        <StyledNavigationItem>
                        <Button>Log in</Button>
                        </StyledNavigationItem>
                        </Link>
                    </StyledNavigationList>
                    </HeaderNavigation>
             </Layer>
        </header>
    )
}

export default Navbar
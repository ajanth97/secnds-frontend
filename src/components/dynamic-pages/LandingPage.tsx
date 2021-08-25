import React from "react"
import { RouteComponentProps } from "@reach/router"
import ListingCard from "../ListingCard";
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import { Layer } from "baseui/layer";
import {StyledSpinnerNext} from 'baseui/spinner';

import useSWR from 'swr'

const itemProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

const fetcher = (...args) => fetch(...args).then(res => res.json())
   
const LandingPage: React.FC = (props:RouteComponentProps) => {
    const {data, error} = useSWR('https://secnds-server.herokuapp.com/listing/all', fetcher)    
    if (error){
        console.log(error) 
        return <div>Error failed to Load</div>
    }
    if (!data) return <StyledSpinnerNext/> 
    console.log(data)
    return (
        <Layer>
        <FlexGrid
        flexGridColumnCount={[1,2,3,4]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        <FlexGridItem {...itemProps}><ListingCard/></FlexGridItem>
        <FlexGridItem {...itemProps}><ListingCard/></FlexGridItem>
        <FlexGridItem {...itemProps}><ListingCard/></FlexGridItem>
        <FlexGridItem {...itemProps}><ListingCard/></FlexGridItem>
        <FlexGridItem {...itemProps}><ListingCard/></FlexGridItem>
        <FlexGridItem {...itemProps}><ListingCard/></FlexGridItem>
      </FlexGrid>
      </Layer>
    )
}

export default LandingPage

import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import "./SecondGridApp.css"
function SecondGridApp() {
  return (
    <div>
        <>
  
</>
      <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='blue' />
  <GridItem rowSpan={2} colSpan={2} bg='yellow' />
  <GridItem rowSpan={2} colSpan={1} bg='red' />
</Grid>
    </div>
  )
}

export default SecondGridApp

import React from 'react'
import Header from './Header'
import styled from 'styled-components';
import { Box } from '@mui/material';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100%',

});
const Tittle = styled(Box)({
  width: '"100vw - 40px"',
  marginTop: '20px',
});

const WorkDetail1 = () => {
  return (
    <Container><Header/>
    <Tittle>
      <Image src="/assets/work/hue/1.png" alt="1" width={1440} height={900} />
    </Tittle>
    
    </Container>
  )
}

export default WorkDetail1
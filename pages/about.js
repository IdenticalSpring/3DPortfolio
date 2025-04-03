import About1 from '@/components/About1';
import About2 from '@/components/About2';
import React from 'react'
import styled from 'styled-components'

const About = styled.div`
  width: 100vw;
  height: 100%;
  background-color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
`;

const about = () => {
  return (
    <About>
      <About1/>
      <About2/>
    </About>
  )
}

export default about
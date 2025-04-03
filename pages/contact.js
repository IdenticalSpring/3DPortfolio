import Contact1 from '@/components/Contact1'
import Contact2 from '@/components/Contact2'
import React from 'react'
import styled from 'styled-components'

const Contact = styled.div`
  width: 100vw;
  height: 140vh;
  background-color: #1937d6;
  position: relative;
  overflow: hidden;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
`
const contact = () => {
  return (
    <Contact>
      <Contact1 />
      <Contact2 />

    </Contact>
  )
}

export default contact
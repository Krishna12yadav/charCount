import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 92vw;
  background-color: red;
  height: 95%;
`

export const FirstContainer = styled.div`
  background-color: #ffc533;
  padding: 20px;
  width: 50%;
  height: 100%;
`
export const SecondContainer = styled.div`
  background-color: #1e293b;
  padding: 20px;
  width: 50%;
  height: 100%;
`

export const Heading1 = styled.h1`
  color: #272c47;
`

export const Heading2 = styled(Heading1)`
  color: #ffc533;
`
export const Input = styled.input`
  border: 0px black;
  outline-style: none;
  height: 30px;
  width: 60%;
  background-color: white;
  border-radius: 2px;
  padding: 12px;
`
export const Button = styled.button`
  color: black;
  background-color: #ffc533;
  width: 20%;
  height: 30px;
  border-radius: 2px;
  margin-left: 30px;
  border: 0px black;
  outline-style: none;
`
export const Image = styled.img`
  width: 100%;
`
export const DataContainer = styled.ul`
  background-color: #ffc570;
`
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`

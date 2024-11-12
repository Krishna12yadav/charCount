import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  ResponsiveContainer,
  FirstContainer,
  SecondContainer,
  Heading1,
  Heading2,
  Input,
  DataContainer,
  Image,
  Form,
  Button,
} from './style'

class Card extends Component {
  state = {input: '', charList: []}

  onChangeInput = e => {
    this.setState({input: e.target.value})
  }

  onClickAdd = e => {
    e.preventDefault()
    this.setState(prev => ({
      charList: [...prev.charList, prev.input],
      input: '',
    }))
  }

  renderData = () => {
    const {charList} = this.state

    if (charList.length === 0) {
      return (
        <Image
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
          alt="no user inputs"
        />
      )
    }
    return (
      <DataContainer>
        {charList.map(item => (
          <li style={{listStyleType: 'none'}} key={uuidv4()}>
            <p>{item}</p>: {item.length}
          </li>
        ))}
      </DataContainer>
    )
  }

  render() {
    const {input} = this.state
    return (
      <ResponsiveContainer>
        <FirstContainer>
          <Heading1>Count The Characters Like a Boss...</Heading1>
          {this.renderData()}
        </FirstContainer>
        <SecondContainer>
          <Heading2>Character Counter</Heading2>
          <Form onSubmit={this.onClickAdd}>
            <Input
              type="text"
              placeholder="Enter the Characters here"
              value={input}
              onChange={this.onChangeInput}
            />
            <Button type="submit">Add</Button>
          </Form>
        </SecondContainer>
      </ResponsiveContainer>
    )
  }
}

export default Card

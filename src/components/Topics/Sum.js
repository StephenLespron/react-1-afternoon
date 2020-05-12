import React, { Component } from 'react';

export default class Sum extends Component {
constructor(){
    super()
    this.state = {
        number1: 0,
        number2: 0,
        sum: null
    }
}

updateNum1(value){
    this.setState({
        number1: parseInt(value, 10)
    })
}
updateNum2(value){
    this.setState({
        number2: parseInt(value, 10)
    })
}

sumItUp(){
let total = this.state.number1 + this.state.number2

this.setState({
    sum: total
})

}

  render() {
    return (
        <div className='puzzleBox sumPB'>
          <h4>Sum</h4>
          <input className='inputLine' onChange={ev => this.updateNum1(ev.target.value)}/>
          <input className='inputLine' onChange={ev => this.updateNum2(ev.target.value)}/>
          <button className='confirmationButton' onClick={() => {this.sumItUp()}}>Sum it up!</button>
          <span className='resultsBox'>Total: {this.state.sum}</span>
      </div>
    )
  }
}
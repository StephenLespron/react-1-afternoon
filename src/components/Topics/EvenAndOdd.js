import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
constructor(){
    super()
    this.state ={
    evenArray: [],
    oddArray: [],
    userInput: ``
 }
}

updateInput(value){
    this.setState({
        userInput: value
    })
}

assignEvenandOdds(userInput){
    let numbers = userInput.split(`,`)
    console.log(numbers)
    let evens =[]
    let odds =[]
    for(let i = 0; i < numbers.length; i++){
        let num = parseFloat(numbers[i])
        if(num % 2 === 0){
            evens.push(num)
        } else if(num % 2 === 1){
            odds.push(num)
        }
    }
    this.setState({
        evenArray: evens,
        oddArray: odds
    })
}




  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
          <h4>Evens and Odds </h4>
          <input className='inputLine' onChange={ev => this.updateInput(ev.target.value)}/>
          <button className='confirmationButton' onClick={ () => {this.assignEvenandOdds(this.state.userInput)}}>Split</button>
          <span className='resultsBox'>Evens: { JSON.stringify(this.state.evenArray) }</span>
          <span className='resultsBox'>Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}
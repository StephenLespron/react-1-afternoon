import React, { Component } from 'react';

export default class Palindrome extends Component {
constructor(){
    super()
    this.state = {
        userInput: ``,
        palindrome: ``
    }
}

updateInput(value){
    this.setState({
        userInput: value
    })
}

checkPalindrome(userInput){
    let inputReverse = userInput.split("").reverse().join("")
    if(userInput == inputReverse){
        this.setState({
            palindrome: `"${userInput}" is a palindrome`
        })
    } else {
        this.setState({
            palindrome: `"${userInput}" is not a palindrome`
        })
    }

}

  render() {
    return (
        <div className='puzzleBox filterStringPB'>
          <h4>Palindrome</h4>
          <input className='inputLine' onChange={ev => this.updateInput(ev.target.value)}/>
          <button className='confirmationButton' onClick={()=>{this.checkPalindrome(this.state.userInput)}}> Check </button>
          <span className='resultsBox'>Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor (){
        super()
        this.state = {
            unfilteredArray: [`Que Sera Sera`, `Baseball is 90% half mental`, `Hey you, fat lineman!`],
            userInput: ``,
            filteredArray: []
        }
    }

    updateInput(value){
        this.setState({
            userInput: value
        })
    }

    filterArray(str){
        let strings = this.state.unfilteredArray
        let filteredArray = []

        for(let i = 0; i < strings.length; i++){
        if(strings[i].includes(str)){
            filteredArray.push(strings[i])
         }
        }

        this.setState({filteredArray: filteredArray})
    }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
          <h4>Filter String</h4>
          <span className='puzzleText'>Original: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
          <input className='inputLine' onChange={ev => this.updateInput(ev.target.value)}/>
          <button className='confirmationButton' onClick={() => {this.filterArray(this.state.userInput)}}>Filter</button>
          <span className='resultsBox filterStringRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    )
  }
}
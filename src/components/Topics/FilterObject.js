import React, { Component } from 'react';

export default class FilterObject extends Component {
constructor(){
    super()
    this.state = {
        unfilteredArray: [
            {
              name: 'Jimmy Joe',
              title: 'Hack0r',
              age: 12,
            },
            {
              name: 'Jeremy Schrader',
              age: 24,
              hairColor: 'brown'
            },
            {
              name: 'Carly Armstrong',
              title: 'CEO',
            }
          ],
        userInput: ``,
        filteredArray: []
    }
}

updateInput(value){
    this.setState({
        userInput: value
    })
}

filterArray(prop){
    let{unfilteredArray} = this.state
    let arr = []
    for(let i = 0; i < unfilteredArray.length; i++){
        if(unfilteredArray[i][prop]){
            arr.push(unfilteredArray[i])
        }
    }
    this.setState({
        filteredArray: arr
    })
}

  render() {
    return (
    <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
        <input className='inputLine' onChange={ev => this.updateInput(ev.target.value)}/>
        <button className='confirmationButton' onClick={() => {this.filterArray(this.state.userInput)}}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
    </div>
    )
  }
}
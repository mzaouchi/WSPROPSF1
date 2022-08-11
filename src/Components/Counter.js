import React from "react"

class Counter extends React.Component{
    constructor(props){
        super()
        this.state={
            count : 0,
            textP : ""
        }
        // console.log('1- Initialisation')
    }
    increment=()=> this.setState({count :this.state.count + 1 })
    decrement =()=> this.state.count > 0 && this.setState({count : this.state.count -1})

    componentDidMount(){
        // console.log('3- Mount')
        document.title = "Hi"
    }
    componentDidUpdate(){
      // console.log('4- Update')
      document.title = this.state.count
    }
    componentWillUnmount(){
      // console.log('5- Unmount')
      document.title = "By"
    }
    render(){
        // console.log('2- Rendering')
        // console.log(this)
        const {name} = this.props
        return(
            <div>
                <h2>Counter</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <input type='text' onChange={(e)=> this.setState({textP : e.target.value})}/>
                <h2>{this.state.textP}</h2>
                {/* <h3>{this.props.name}</h3> */}
                <h4>{name}</h4>

            </div>
        )
    }
}

export default Counter
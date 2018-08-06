import React,{Component} from 'react';
import '../style.css';
class Square extends Component
{  
	render()
	{
		return(
			<td onClick={this.props.onClick}>{this.props.value} </td>
			)
	}
}


class Board extends Component
{  
	constructor(props)
	{
		super(props)
		this.state={
			squares: Array(9).fill(null),
			xIsNext: true
		}
	}


	handleClick(i)
	{
		const squarecopy = this.state.squares.slice();
		squarecopy[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({squares:squarecopy,
			xIsNext: !this.state.xIsNext})


	}
	renderSquare(i)
	{   
		return(
			<Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>
			)
	}
	render()
	{  
		const status = 'Next player :'+(this.state.xIsNext ? 'X' :'O');
		return(
		<div>
		  {status}

		 <tr>{this.renderSquare(0)}
			{this.renderSquare(1)}
			{this.renderSquare(2)}
			</tr>
			<tr>
			{this.renderSquare(3)}
			{this.renderSquare(4)}
			{this.renderSquare(5)}
			</tr>
			<tr>
			{this.renderSquare(6)}
			{this.renderSquare(7)}
			{this.renderSquare(8)}
		 </tr>
		   </div>
			
			
			)
	}
}

class Game extends Component
{
   render()
   {
   	return(
   		<Board />)
   }
}

export default Game;
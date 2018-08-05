import React,{Component} from 'react';
import '../style.css';
class Square extends Component
{  constructor(props)
	{
		super(props)
		this.state={
          value:''
		}
	}
	render()
	{
		return(
			<td onClick={()=>{this.setState({value:'X'})}}>{this.state.value} </td>
			)
	}
}
class Board extends Component
{
	renderSquare(i)
	{
		return(
			<Square />)
	}
	render()
	{  
		const status = 'Next player : X';
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
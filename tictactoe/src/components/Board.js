import React , {Component} from 'react';
import Square from './Square';
class Board extends Component
{

	renderSquare(i)
	{
		return(
			<Square value={i}/>)
	}
	render()
	{
		return(
			this.renderSquare(0);
			)
	}
}

export defaults Board;
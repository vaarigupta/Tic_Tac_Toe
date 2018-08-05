import React , {Component} from 'react';
import Square from './Square';
class Board extends Component
{

	rendersquare(i)
	{
		return(
			<Square />)
	}
	render()
	{
		return(
			renderSquare(0)
			)
	}
}

export defaults Board;
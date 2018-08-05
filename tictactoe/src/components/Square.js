import React, {Component} from 'react';
import Board from './Board';
class Square extends Component
{
	render()
	{
		return(
			<button>{this.props.value} </button>
			)
	}
}
export defaults Square;
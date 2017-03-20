import React, { Component }  from 'react';

class Digit extends Component {

	state = {
		digit: 0,
		size: this.props.size | 20
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({digit: this.props.value})
		}, 100)
	}

	render(){
		return(
			<div 
				className={this.props.className}
				style={{
					height: this.state.size+'px',
					overflow: 'hidden',
					width: (this.state.size-10)+'px',
					float: 'left',
				}}
			>
				{
					[0,1,2,3,4,5,6,7,8,9].map((item)=>(
						<div key={"dgt"+item} 
							style={{
								height: this.state.size+'px',
								width: (this.state.size-10)+'px',
								fontSize: this.state.size+'px',
								transform: "translateY(-"+this.state.size*this.state.digit+"px)",
								transition: 'transform .6s ease-in-out',
								lineHeight: '0em',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							{item}
						</div>
					))
				}
			</div>
		)
	}

}

const Odometer = ({value, className}) => {
		let targetPlace = [];
		for(let i=0; i<(value+'').length; i++) targetPlace.push(i)
		return(
			<div className={className}>
				{
					targetPlace.map((item, index)=>{
						let pow = Math.pow(10, index)
						let n = Math.trunc(value/pow)%10
						return <Digit key={'digit'+index} value={n} size={40} />
					})
					.reverse()
				}
			</div>
		)
	}

export default Odometer



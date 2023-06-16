const currencyNames = {
	d: 'Dollars',
	r: 'Ruppes'
};

function Millionaire(props) {
	if (props.networth > 1000000) {
		return <p className="millionaire">A millionaire</p>;
	}

	return <p className="not-millionarie">Not yet a millionaire...</p>;
}

class NetWorthInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			local_networth: 0
		};
	}

	handleChange = (e) => {
		this.setState({
			local_networth: parseFloat(e.target.value) || 0
		});
	};

	render() {
		const currency = this.props.currency;
		return (
			<fieldset className="networth">
				<legend>Enter net worth in {currencyNames[currency]}</legend>

				<input className="input"
						dafaultValue={this.state.local_networth}
						onChange={this.handleChange}  />

				<Millionaire networth={this.state.local_networth} />
			</fieldset>
		);
	}
}

class MillionaireCalculator extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="contents">
				<NetWorthInput currency={'d'} />
				<NetWorthInput currency={'r'} />
			</div>
		);
	}
}

ReactDOM.render(<MillionaireCalculator />, document.getElementById("outer"));
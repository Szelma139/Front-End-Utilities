render(){
	const {ninja} = this.props;
	const ninjaList = ninja.map(ninja => {
	return (
<div className="ninja>
<div> Name: {ninja.name} </div>
<div> Name: {ninja.age} </div>
<div> Name: {ninjaother} </div>
</div>
)
	})	
		
	return (
	<div className="ninja-list">
	{ninjaList}
	</div>
	
	)
------------------------------------------------------------------------------------------------------------------------------------
		
		
		handleChange=(e)=> {
		
	this.setState({
		[e.target.id]: e.target.value
		})
		}
		
		handleSubmit=(e)=> {
		e.preventDefault();
		console.log(this.state)
		}
		
		<form onSubmit={}>
		<label htmlFor="name"> Name: </label>
		<input type="text" id="name" onChange={this.handleChange} />
		<label htmlFor="name"> Age: </label>
		<input type="text" id="age" onChange={this.handleChange} />
		<label htmlFor="name"> Surname: </label>
		<input type="text" id="surname" onChange={this.handleChange} />
		</form>

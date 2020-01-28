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
//storage

var React = require('react');


var 

var Mongoose = require('mongoose');

var Storage = React.createClass({
render: function(){
	historyList = this.props.map(function(data){
                        return <li>{data.name}-{data.location.lat},{data.location.lng}</li>);


	return{
		<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search History</h3>
		</div>
		<div className="panel-body text-center">
		<ul class = "list-group">
			
			<li class='list-group-item'><p>{this.p}     {this.props.address}</p></li>
						
						
		</div>
	</div>
})
});
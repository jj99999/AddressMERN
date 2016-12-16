//storage

var React = require('react');


var 

var Mongoose = require('mongoose');

var Storage = React.createClass({
render: function(){
	var historyList = this.props.storage2.map(function(data){
                        return <li><p>{data.location}</p></li>);


	return{
		<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search History</h3>
		</div>
		<div className="panel-body text-center">
		<ul class = "list-group">
			
			{historyList}
						
		</ul>		
		</div>
	</div>
})
});
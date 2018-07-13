import React , {Component} from 'react';
import {  NavItem  } from 'react-bootstrap';
import {guid} from '../utils';

class ChildMenu extends Component {

	constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
        this.loadTab = this.loadTab.bind(this);
        this.onTabLoaded = this.onTabLoaded.bind(this);
    }
	
	loadTab(){	  
		
        var url = this.props.item.url;
        var self = this;
        let headers = {
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'x-custom-uuid': window.btoa(uuid) ,
            'x-custom-userId': userId,
            'Accept-Language':userLocale,
            'Authorization' : 'Bearer ' + atkn
        };

        fetch(url, {
		    credentials: 'include',
		    'headers': {headers}
		}).then(function (res) {
		    return res.json();
		}).catch(function (error) {
		    return self.onTabLoaded(null, error);
		}).then(function (response) {
		    return self.onTabLoaded(response, null);
		});
      
	}
	
	onTabLoaded(data,err){
		if (data != undefined){
			let tempItem = {
					name:data.description,
					url:data.url,
					leftIcons:data.leftIcons,
					rightIcons:data.rightIcons,
					//active:true,
					uuid:guid()
			}						
			this.props.root.state.bodyC.push(tempItem);
			this.props.root.setState({
				activeTab:tempItem.uuid
			});		
		}				
	}
	
	onClickItem(e) {
		this.loadTab();
	}
		
	render() {		
		return (
			<NavItem 
				eventKey={guid()} 
				onClick={this.onClickItem}
				href="http://www.google.com"
			>
			{this.props.name}
			</NavItem>
		);		
	};
}

export default ChildMenu;
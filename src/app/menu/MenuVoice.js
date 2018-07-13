import React , {Component} from 'react';
import { NavDropdown} from 'react-bootstrap';

import DropdownChildMenu from './DropdownChildMenu';
import ChildMenu from './ChildMenu';

class MenuVoice extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.item.items !== undefined) {
            var self = this;
            const childsList = this.props.item.items.map(function (child,index) {
                    child.key=index;                                  
                    return (
                        <DropdownChildMenu
                            key={index}
                            item={child} 
                            name={child.name}
                            parent={self}
                            selected={false}
                            root={self.props.root}
                        />)
                });
  
            return(
                <NavDropdown title={this.props.item.name} id="basic-nav-dropdown">
                    {childsList}
                </NavDropdown>

            );
        } else {
            return(     
                <ChildMenu 
                    key={1} 
                    name={this.props.name}  
                    parent={this} 
                    selected={false}
                    root={this.props.root}
                    type="nav-link"
                />                  
            );
        }
    }    
}

export default MenuVoice;
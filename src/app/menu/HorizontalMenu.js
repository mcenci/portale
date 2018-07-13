import React , {Component} from 'react';
import { Navbar , Nav } from 'react-bootstrap';

import MenuVoice from './MenuVoice';

class HorizontalMenu extends Component {
    constructor(props) {
       super(props);
/*     this.onMenuLoadedMenu = this.onMenuLoadedMenu.bind(this);
       this.loadMenu(props.url);
 */ 
    }

    onMenuLoadedMenu(data) {
        this.props.onMenuLoaded(data);
    }
    
    loadMenu(url){
        var self = this;

        let headers = {
            'Accept':'application/json, text/javascript, */*; q=0.01',
            'x-custom-uuid': window.btoa(uuid) ,
            'x-custom-userId': userId,
            'Accept-Language':userLocale,
            'Authorization' : 'Bearer ' + atkn
        };

        var menu = '{"logo":null,"items":[{"name":"GESTIONE APPLICAZIONI","url":"/cenci/usersmanager/applications"},{"name":"GESTIONE UTENTI","url":"/users/management","items":[{"name":"Utenti Ldap","url":"/cenci/usersmanager/ldapUsers"},{"name":"Utenti","url":"/cenci/usersmanager/users"}]}],"user":null}';
        return self.onMenuLoadedMenu(menu.json());
        /* fetch(url, {
                credentials: 'include',
                'headers': {headers}
                }
        ).then(function (res) {
            return res.json();
        }).catch(function (error) {
            console.log(url)
            return console.error(error);
        }).then(function (response) {
            return self.onMenuLoadedMenu(response);
        }); */
    }          
    
    render(){
        
        if (this.props.menu != null) {
            
            const menuVoices = this.props.menu.items;
            var self = this;
            var menuVoicesList;
            if(menuVoices){
                menuVoicesList = menuVoices.map(function (menuVoice) {
                return (
                    <MenuVoice 
                        key= {menuVoice.name}
                        item= {menuVoice}
                        name= {menuVoice.name}
                        parent= {self}
                        root= {self.props.root}
                    />
                );
              });
            }
            
            return (
                <Navbar>
                    <Navbar.Header>
                        <a className="navbar-brand" href="#"><img alt="Brand" src={this.props.logo}/></a>
                    </Navbar.Header>
                    <Nav>
                        {menuVoicesList}
                    </Nav>
                </Navbar>           
            );
        }
        else {
            return (<div></div>);
        }
    }
}

export default HorizontalMenu;
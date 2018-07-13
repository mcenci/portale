import React , {Component} from 'react';
import { Button } from 'react-bootstrap';

import HorizontalMenu from './menu/HorizontalMenu';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        var hmenu = {"logo":null,"items":[{"name":"GESTIONE APPLICAZIONI","url":"/cenci/usersmanager/applications"},{"name":"GESTIONE UTENTI","url":"/users/management","items":[{"name":"Utenti Ldap","url":"/cenci/usersmanager/ldapUsers"},{"name":"Utenti","url":"/cenci/usersmanager/users"}]}],"user":null};

        let title = 'Simple Portale';
        return (
            <div className='container'>
                <h2>{title}</h2>
                <HorizontalMenu 
                    menu = {hmenu}
                    logo = ''
                />
                <Button bsStyle='success' bsSize='large'>Success</Button>
            </div>
        );
    }
}
export default App;
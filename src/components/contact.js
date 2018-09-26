import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Joel Vilca Alania</h2>
                        <img 
                            src={require('./joel.jpg')}
                            alt="joel vilca"
                            style={{height:'200px'}}
                        />
                        <p style={{width:'75%',margin:'auto',padding: '1em'}}>MI nombre es joel estudiante de la universidad nacional jorge basadre de la 
                            escuela profesional de informatica y sistemas actualmente como desarrollador de 
                            software.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                            <ListItemContent style={{ fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                953 553 629
                            </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{ fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-envelope-square" aria-hidden="true"/>
                                joevil23tjq@gmail.com
                            </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{ fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                                My skyppe Id
                            </ListItemContent>
                            </ListItem>
                             
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
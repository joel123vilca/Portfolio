import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="http://pez23.hol.es/joel/img/joel.jpg"
                            alt="joel vilca"
                            className="perfil-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr></hr>
                            <p>HTML/CSS | Javascript | React | React-Native | Redux | Php | Mysql | Laravel</p>
                            <div className="social-links">
                            <a href="https://www.linkedin.com/in/joel-vilca-bb8709148/" rel="noopener noreferrer" target="_blank">
                             <i className="fa fa-linkedin-square" aria-hidden="true" />
                             </a>

                            {/* Github */}
                            <a href="https://github.com/joel123vilca" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Freecodecamp */}
                                <a href="https://www.facebook.com/joel.vilcaalania" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                 </a>
                               

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './Skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src={require('./joel.jpg')}
                                alt="joel Vilca Alania"
                                style={{height:'200px', width:'200px', borderRadius: '50%'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Joel Vilca Alania</h2>
                        <h4 style={{color: 'grey'}}>Programer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>
                        Con solo 13 años Michael Sayman creó una aplicación que fue una de las vendidas de Apple en su tiempo,
                         al igual que la app 4 Snaps, un juego que permite adivinar palabras a partir de cuatro imágenes.
                          Esto lo llevó a contrarrestar la mala situación económica de su familia.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2'}}/>
                        <h3>Address</h3>
                        <p>Tacna, Peru</p>
                        <h5>Phone</h5>
                        <p> 953-553-629</p>
                        <h5>Email</h5>
                        <p>joevil23tjq@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.joelvilca.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell  className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2014}
                        endYear={2018}
                        universityName="UNIVERSIDAD JORGE BASADRE"
                        universityDescription="estudie en la uni"
                        />
                        <Education 
                        startYear="2018-I"
                        endYear="2018-II"
                        universityName="Platzi"
                        universityDescription="Platzi is education online"
                        />
                        <h2>Experience</h2>
                        <hr/>
                        <Experience
                            startYear="2018, Enero"
                            endYear="2018, Junio"
                            jobName="Software Developer in OGD-TurTacna"
                            jobDescription="In Ogd tur Tacna develop 1 app web and 1 app mobile Acomer"
                        />
                        <hr></hr>
                        <h2>Skills</h2>
                        <Skills
                        skillName="Javascript"
                        progress={70}
                        />
                        <Skills
                        skillName="HTML/ CSS"
                        progress={80}
                        />
                        <Skills
                        skillName="React"
                        progress={70}
                        />
                        <Skills
                        skillName="React-Native"
                        progress={50}
                        />
                        <Skills
                        skillName="Php and Laravel"
                        progress={60}
                        />
                        
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Resume;
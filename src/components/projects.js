import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minwidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', 
                    background:'url(https://cdn-images-1.medium.com/max/1200/1*G2QwxPF2TvWXzRUnA4axoA.png) center / cover'}}>React Project 1</CardTitle>
                    <CardText>
                        Desarrollado en javascript
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/* 2*/}
                <Card shadow={5} style={{minwidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', 
                    background:'url(https://cdn-images-1.medium.com/max/1200/1*G2QwxPF2TvWXzRUnA4axoA.png) center / cover'}}>React Project 2</CardTitle>
                    <CardText>
                        Desarrollado en javascript
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h2>this is redux</h2></div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h2>this is React Native</h2></div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div><h2>this php laravel</h2></div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} riple>
                    <Tab>React</Tab>
                    <Tab>Redux</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Laravel and Php</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
               
            </div>
        )
    }
}

export default Projects;
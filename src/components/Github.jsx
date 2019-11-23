import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bigAvatar: {
        width: 160,
        height: 160,
    },
  }));

class Github extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: {},
            repos:  [],
        }

    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/hoangqc`)
        .then(res => {
            const user = res.data;            
            this.setState({ user });
            })
        .catch(error => console.log(error));

        axios.get(`https://api.github.com/users/hoangqc/repos`)
        .then(res => {
            const repos = res.data;
            //console.log(repos)
            this.setState({ repos });
            })
        .catch(error => console.log(error));

    }

    render(){
        return (
            <div>
                <div className={useStyles.root}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                        <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                        <span> Github</span>
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <Card>
                        <CardHeader title="Welcome to the Github"  />
                        <span>
                        <Avatar alt="HoangQC" src={this.state.user.avatar_url} className={useStyles.bigAvatar} /> <h2><a href={this.state.user.html_url}>{this.state.user.login}</a></h2>
                        </span>
                        
                        <CardContent>
                            <ul>
                                { this.state.repos.map(repo => <li>{repo.name} </li>)} 
                            </ul>
                        </CardContent>
                    </Card>                              
                </div>

            </div>

        )
    }

}

export default Github;
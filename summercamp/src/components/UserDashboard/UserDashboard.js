import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './UserDashboard.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Navbar from '../Navbar/Navbar1';
import UserDashboardNav from '../UserDashboardNav/UserDashboardNav';

import { Divide as Hamburger } from 'hamburger-react'

export default class UserDashboard extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
       children:[],
       menuStatus: 0,
       addChild:false,

       }
    
this.handleClick=this.handleClick.bind(this);
this.handleClose=this.handleClose.bind(this);



    }

     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
     handleClose = () => {
       this.setState({anchorEl:null});
      
    };

   
      render() {
        // if(this.props.user===null)
        // return <Redirect to={'/'}/>;
     if(this.state.addChild)
     {
       this.setState({addChild:false})
       return <Redirect to={'/ChildRegistration'}/>
     }
    return (
      
    <div  className='UserDashboard'>
    
<UserDashboardNav user={this.props.user}/>
      <div className='my-children'> 
      <div className='title-children'>
        <h3>הילדים שלי</h3>
        <Button onClick={()=>this.setState({addChild:true}) } id='add-child' variant="outlined" color="primary"> <Icon id='plus'>add_circle</Icon>  רישום ילד חדש</Button>
        </div>
        {this.state.children.length===0?(<p>לא נמצאו ילדים</p>):''}
        {this.state.children.map((item,index)=>{
          return <p>item</p>
        })}


      </div>

    </div>

    );
  }
}

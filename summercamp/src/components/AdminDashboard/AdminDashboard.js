import React, {Component} from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './AdminDashboard.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Users from '../Users/Users';
import Navbar from '../Navbar/Navbar1';
import { Divide as Hamburger } from 'hamburger-react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';

export default class AdminDashboard extends Component {
    constructor(props, context) {
        super(props, context);
       this.state={
       menuStatus: 0,
       openMenu:false,
       Users:[],
       userType:'',


       }
    
this.handleClick=this.handleClick.bind(this);
this.handleClose=this.handleClose.bind(this);
this.getMenuOptions=this.getMenuOptions.bind(this);
this.setMenuStatus=this.setMenuStatus.bind(this);
this.closeMenu=this.closeMenu.bind(this);
this.openMenu=this.openMenu.bind(this);
this.getMenu=this.getMenu.bind(this);
this.handleChangeSelect=this.handleChangeSelect.bind(this);



    }
    componentDidMount(){
      axios.get('http://10.100.102.6:8080/api/users')
      .then(res => {
        this.setState({Users:res.data})
  
      })
    }

    handleChangeSelect(event){
      console.log(event.target.value)
      this.setState({userType:event.target.value});

    }
     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
     handleClose = () => {
       this.setState({anchorEl:null});
      
    };
    getMenuOptions() {
      return [
          {
              name: 'עמוד ראשי',
              link: '/UserDashboard',
          },
          {
              name: 'תפריט',
              link: '/profile/3798e56b-84bf-462d-806c-b682dadd5a15',
          },
          {
            name: 'תוכנית יומית',
            link: '/profile/3798e56b-84bf-462d-806c-b682dadd5a15',
        },
        {
          name: 'תמונות',
          link: '/profile/3798e56b-84bf-462d-806c-b682dadd5a15',
      }
        
      ];
  
}
setMenuStatus(status) {
  this.setState({menuStatus: status});
}
closeMenu() {
  this.setMenuStatus(3);
  this.setState({openMenu:false})

  setTimeout(() => this.setMenuStatus(0), 200);
}
openMenu() {
  if(!this.state.openMenu)   {
    this.setMenuStatus(1);
    setTimeout(() => this.setMenuStatus(2), 200);
  }
  else{
    this.closeMenu();
  }


  this.setState({openMenu:!this.state.openMenu})


}

getMenu() {
  if (this.state.menuStatus == 0) {
      return null;
  }
  return <Navbar  options={this.getMenuOptions()}  menuStatus={this.state.menuStatus}
  onClose={this.closeMenu}
/>
}


      render() {
        // if(this.props.user===null)
        // return <Redirect to={'/'}/>;
     
    return (
      
    <div  className='UserDashboard'>
      {this.getMenu()}
      <div id='Hamburger'>
      <Hamburger  color='rgb(49, 112, 136)' rounded direction="left" toggled={this.state.openMenu} toggle={this.openMenu} />
      </div>
      <div className='menu'>
      <div className='Dashboard-tool'>

      <h1 className='h1-Dashboard'> קייטנת עושים גלים </h1>
      <h1 className='summer_txt-Dashboard'> חלום של קיץ</h1>

      </div>

      </div >
      <p className='user-welcome'>  {this.props.user.name}</p>
      <p className='admin-Dashboard'>דף מנהל</p>

      <div className='my-children'> 
      <div className='title-children'>
        <h3> משתמשים</h3>
           <FormControl  variant="standard" id='userType-select-admin'>
        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.userType}
          onChange={this.handleChangeSelect}
          displayEmpty
        >
    <MenuItem value="">
            <em>סינון לפי</em>
          </MenuItem>
          <MenuItem value='parent'>הורה</MenuItem>

          <MenuItem value='מדריך'>מדריך</MenuItem>
        </Select>
      </FormControl>
        </div>
        <br/>
        {this.state.Users.length===0?(<p>אין משתמשים</p>):''}
        {this.state.Users.map((item,index)=>{
          if(this.state.userType===''||item.role===this.state.userType)
          return <Users user={item} />
        })}


      </div>

    </div>

    );
  }
}

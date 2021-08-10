import React, { Component } from 'react';
import PoolBack from '../../Images/poolback.jpeg';
import './Register.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';


export default class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: '',
      userType:''
    }

    this.handelSubmit = this.handelSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  

  handelSubmit() {
    console.log('send')
  }
   handleChange(event) {
    this.setState({userType:event.target.value});
  };

  render() {
    return (
      <div className='Register' >

        <h1 className='h1-register'> קייטנת עושים גלים <span className='summer_txt-register'>חלום של קיץ</span></h1>
        <p id='pText-register' className='h1-register'>דף הרשמה</p>

        <form onSubmit={this.handelSubmit} id='register-form' >
          <FormControl className='login' onSubmit={this.handelSubmit} >
            <InputLabel id="input-user" htmlFor="input-user"  >שם משתמש</InputLabel>
            <Input required type='text' id="input-user" aria-describedby="my-helper-text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />

          </FormControl>
          <br />

          <FormControl onSubmit={this.handelSubmit} >

            <InputLabel id="input-pass" htmlFor="input-pass">סיסמא</InputLabel>

            <Input id="input-pass" required type='password' id="input-pass" aria-describedby="my-helper-text" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />

          </FormControl>

          <br/>
          <FormControl  variant="standard" id='userType-select'>
        <InputLabel shrink id='userType-select-label'>סוג משתמש</InputLabel>
        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.userType}
          onChange={this.handleChange}
          displayEmpty
        >
    <MenuItem value="">
            <em>הורה</em>
          </MenuItem>
          <MenuItem value={20}>מדריך</MenuItem>
        </Select>
      </FormControl>
          <br />
          <Button id='register-submit' type="submit" value="Submit" variant="outlined" color="primary"  >
            הירשם
    </Button>
<br/>


    <a href='/' className='login-link'>משתמש רשום? לחץ להתחברות</a>

        </form>
      </div>

    );
  }
}
import React, { Component } from 'react';
import { connect } from '98k';

import Header from '../../../components/header';
import Menu from '../../../components/menu';

class Register extends Component {
  state = {
    username   : '',
    password   : '',
    name       : '',
    repassword : '',
    gender     : 'm',
  }

  render() {
    const { name, username, password, repassword, gender } = this.state;

    return (
      <div className='container-fluid'>
        <Header/>
        <Menu/>
        <form className='m-5' onSubmit={this.register}>
          <div className='form-group row justify-content-center'>
            <label className='col-2 col-form-label'>Nickname</label>
            <div className='col-3'>
              <input className='form-control' value={name} onChange={this.inputName}/>
            </div>
          </div>
          <div className='form-group row justify-content-center'>
            <label className='col-2 col-form-label'>Username</label>
            <div className='col-3'>
              <input className='form-control' value={username} onChange={this.inputUsername}/>
            </div>
          </div>
          <div className='form-group row justify-content-center'>
            <label className='col-2 col-form-label'>Password</label>
            <div className='col-3'>
              <input className='form-control' type='password' value={password} onChange={this.inputPassword}/>
            </div>
          </div>
          <div className='form-group row justify-content-center'>
            <label className='col-2 col-form-label'>Password</label>
            <div className='col-3'>
              <input className='form-control' type='password' value={repassword} onChange={this.inputRepassword}/>
            </div>
          </div>
          <div className='form-group row justify-content-center align-items-center'>
            <label className='col-2 col-form-label'>Gender</label>
            <div className='col-3'>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' value='m' checked={gender == 'm'} onChange={this.inputGender}/>
                <label className='form-check-label'>Male</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' value='f' checked={gender == 'f'} onChange={this.inputGender}/>
                <label className='form-check-label'>Female</label>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <button className='btn btn-primary' type='submit'>Register</button>
          </div>
        </form>
      </div>
    );
  }

  inputName = e => {
    this.setState({
      name: e.target.value,
    });
  }

  inputUsername = e => {
    this.setState({
      username: e.target.value,
    });
  }

  inputPassword = e => {
    this.setState({
      password: e.target.value,
    });
  }

  inputRepassword = e => {
    this.setState({
      repassword: e.target.value,
    });
  }

  inputGender = e => {
    this.setState({
      gender: e.target.value,
    });
  }

  register = e => {
    e.preventDefault();
    const { name, username, password, repassword, gender } = this.state;
    if(password != repassword) {
      return;
    }
    this.props.dispatch({
      type    : 'auth/register',
      payload : { name, username, password, gender },
    });
  }
}

export default connect()(Register);

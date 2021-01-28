import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         email: '',
         password: ''
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    render() {
        return (
        <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                 name='email' 
                 type='email' 
                 value={this.state.email} 
                 label='email'
                 required 
                 handleChange={this.handleChange}   
                 />
                <FormInput 
                name='password' 
                type='password' 
                value={this.state.password} 
                label='password'
                required 
                handleChange={this.handleChange} 
                />
                <CustomButton type='submit'>Sign In</CustomButton>
            </form>
        </div>
        )
    }
}

export default SignIn;
import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton  from '../custom-button/custom-button';
import {auth, signInWithGoogle} from '../../firebase/firebase.util';

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

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

                this.setState({email: '', password: ''})

        } catch(error) {
            console.error(error);
        }
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
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                Sign In With Google
                </CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn;
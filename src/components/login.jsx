import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {

        };


    }

    render() {


        return (

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-33">
                            Please Login 
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" />
                                <span className="focus-input100-1" />
                                <span className="focus-input100-2" />
                            </div>
                            <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Password" />
                                <span className="focus-input100-1" />
                                <span className="focus-input100-2" />
                            </div>
                            <div className="container-login100-form-btn m-t-20">
                                <button className="login100-form-btn"> Sign in </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;

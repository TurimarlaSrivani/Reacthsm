import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/userService";
import Joi from "joi-browser";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
      userRole: "",
      errors:{}
    };
      

    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);
    
  }
  schema = {
    userId: Joi.string().min(4).alphanum().required(),
    firstName:Joi.string().min(2).max(10).required(),
    lastName:Joi.string().min(1).max(10).required(),
    email:Joi.string().email().required(),
    password: Joi.string().min(8).max(15).alphanum().required(),
    mobileNumber:Joi.string().min(10).max(10).required(),
    userrRole: Joi.string().required()
  };
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state,this.schema, {
      abortEarly: false,allowUnknown:true,
    });
    
    if (result.error !== null) {
     
      for (let err of result.error.details) {
        errors[err.path[0]] = err.message;
      }
    }
  
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("userRole=>" + this.state.userRole);
    const errors = this.validate()
   this.setState({ errors: errors || {} });
    if (errors) return;
    
    let user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      login: {
        loggedIn: "false",
        password: this.state.password,
        userId: this.state.userId,
        userRole: this.state.userRole,
      },
      mobileNumber: this.state.mobileNumber,
      password: this.state.password,
      userId: this.state.userId,
      userRole: this.state.userRole,
    };
  
    console.log("user => " + JSON.stringify(user));

    UserService.createUser(user).then((res) => {
      this.props.history.push(`/login`);
    });
  };
  changeUserIdHandler = (event) => {
    this.setState({ userId: event.target.value });
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeMobileNumberHandler = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };
  changeUserRoleHandler = (event) => {
    this.setState({ userRole: event.target.value });
  };
  cancel() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <br></br>
        <div class="carousel-item active">
              <img
                src="https://image.freepik.com/free-photo/perspective-exterior-nobody-empty-box_1258-260.jpg"
                className = "center"
                width="100%"
                height="700px"
                alt="crop"
              /></div>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div
                className="card col-md-6 offset-md-3 offset-md-3"
                style={{ backgroundColor: "transparent", border: "0" }}
              >
                <h3 className="text-center">User Registration</h3>
                <div className="card-body">
                <div>
                    {this.state.errors.error && (
                      <div className="alert alert-danger w-50 mx-auto mt-3" role="alert">
                        {this.state.errors.error}
                      </div>
                    )}
                  <form className="w-50 mt-3 mx-auto border border-rounded p-3 bg-light"
                    onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <div className="col">
                      <label for="userId">
                        <i class="fas fa-user-circle"></i> UserId
                      </label>
                      <input
                        placeholder="UserId"
                        name="userId"
                        id="userId"
                        className="form-control"
                        value={this.state.userId}
                        onChange={this.changeUserIdHandler}
                      />
                      {this.state.errors && (
                      <small id="userId" className="form-text text-danger">
                        {this.state.errors.userId}
                      </small>
                       )}
                    </div>
                   
                    
                        <div className="col">
                      <label fpr="firstName">
                        <i class="fas fa-user"></i>FirstName
                      </label>
                      <input
                        placeholder="FirstName"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.changeFirstNameHandler}
                        error={this.state.errors.firstName}
                      />
                       {this.state.errors && (
                        <small id="firstName" className="form-text text-danger">
                           {this.state.errors.firstName}
                            </small>
                            )}
                    </div>
                  
          
                      <div className="col">
                        <label for="lastName">
                          <i class="fas fa-user"></i>LastName
                        </label>
                        <input
                          placeholder="LastName"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          value={this.state.lastName}
                          onChange={this.changeLastNameHandler}
                          error={this.state.errors.lastName}
                        />
                         {this.state.errors && (
                        <small id="lastName" className="form-text text-danger">
                           {this.state.errors.lastName}
                            </small>
                            )}
                      </div>
                      </div>
                      <br/>
                   
                      <div className="form-row">
                        <div className="col">
                      <label for= "email">
                        <i class="fas fa-envelope"></i>Email
                      </label>
                      <input
                        placeholder="Email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                        error={this.state.errors.email}
                      />
                       {this.state.errors && (
                        <small id="email" className="form-text text-danger">
                           {this.state.errors.email}
                            </small>
                            )}
                    </div>
                    
                    
                        <div className="col">
                      <label for="password">
                        <i class="fas fa-lock"></i>Password
                      </label>
                      <input
                        placeholder="Password"
                        type="Password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.changePasswordHandler}
                        error={this.state.errors.password}
                      />
                       {this.state.errors && (
                        <small id="password" className="form-text text-danger">
                           {this.state.errors.password}
                            </small>
                            )}
                    </div>
                    </div>
                    <br/>

                    <div className="form-row">
                        <div className="col">
                      <label for="mobileNumber">
                        <i class="fas fa-phone-alt"></i>MobileNumber
                      </label>
                      <input
                        placeholder="MobileNumber"
                        name="mobileNumber"
                        className="form-control"
                        value={this.state.mobileNumber}
                        onChange={this.changeMobileNumberHandler}
                        error={this.state.errors.mobileNumber}
                      />
                       {this.state.errors && (
                        <small id="mobileNumber" className="form-text text-danger">
                           {this.state.errors.mobileNumber}
                            </small>
                            )}
                    </div>
                    
                    
                        <div className="col">
                      <label for ="userRole">
                      <i class="fas fa-user"></i>UserRole
                      </label>
                      <input
                        placeholder="UserRole"
                        name="userRole"
                        id="userRole"
                        className="form-control"
                        value={this.state.userRole}
                        onChange={this.changeUserRoleHandler}
                        error={this.state.errors.userrRole}
                      />
                       {this.state.errors && (
                    <small id="userRole" className="form-text text-danger">
                     {this.state.errors.userRole}
                    </small>
                    )}
                    </div>
                    </div>
                    <br/>
                    <button className="btn btn-success" type="submit" >
                      Register
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                    <div className="mt-2 text-center">
                      <small>
                        Already Registered <Link to="/login">Login</Link>
                      </small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Register;
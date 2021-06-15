import React,{ Component } from 'react'
import UserService from '../services/userService'
import {NavLink} from 'react-router-dom'
  
class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            userid:'',
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            mobileNumber:'',
            role:''
        }
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeMobileNumberHandler=this.changeMobileNumberHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    saveUser= (e) =>{
        e.preventDefault();
        let user ={
            email:this.state.email,
         firstName:this.state.firstName,
         lastName:this.state.lastName,
         login:{
            loggedIn:'false',
            password:this.state.password,
            userId:this.state.userId,
            role:this.state.role
         },
         mobileNumber:this.state.mobileNumber,
         password:this.state.password,
         userId:this.state.userId,
         role:this.state.role
 };

        console.log('user => '+JSON.stringify(user));

        UserService.createUser(user).then(res => {
           this.props.history.push(`/login`);
        });
    }
    changeUserIdHandler =(event) =>{
        this.setState({userid:event.target.value});
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstname:event.target.value});
    }
    changeLastNameHandler =(event) => {
        this.setState({lastname:event.target.value});
    }
    changeEmailHandler =(event) => {
        this.setState({email:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }
    
    changeMobileNumberHandler =(event) => {
        this.setState({mobileNumber:event.target.value});
    }

    changeRoleHandler =(event) => {
        this.setState({role:event.target.value});
    }

    cancel(){
        this.props.history.push('/login');
    }
    
render(){
    return(
        <div>
            <br></br>
        <div class="carousel-item active">
              <img
                src="https://image.freepik.com/free-photo/perspective-exterior-nobody-empty-box_1258-260.jpg"
                className = "center"
                width="100%"
                height="800px"
                alt="crop"
              /></div>
        <div>
        <div className = "container-md" style={{marginTop:"5%"}}>
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">User Registration</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>UserId</label>
                                      <input placeholder="UserId" name="userid" className="form-control" value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>FirstName</label>
                                      <input placeholder="FirstName" name="firstname" className="form-control" value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>LastName</label>
                                      <input placeholder="LastName" name="lastname" className="form-control" value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Email</label>
                                      <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Password</label>
                                      <input placeholder="Password"type ="Password"name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                  </div>
                                 
                                  <div className="form-group">
                                      <label>MobileNumber</label>
                                      <input placeholder="MobileNumber" name="mobileNumber" className="form-control" value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}/>
                                  </div>
                                  <div className="col">
                                  <i class="fas fa-user-tag"> <b>ROLE</b></i>
                                  <input placeholder="Enter Your Role" name="role" className="form-control" value={this.state.role} onChange={this.changeRoleHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveUser}>Register</button>
                                  <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div
        class=" text-center bg-dark"
        style={{
          color: "white",
          marginTop: "1rem",
          padding: "1rem",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <p>
          © 2021 HSM Group. All Rights Reserved
          <NavLink to="#"> Privacy Terms</NavLink>
        </p>
      </div>
        </div>
    )
}
}
export default Register
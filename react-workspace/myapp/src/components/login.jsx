import React,{ Component } from 'react'
import UserService from '../services/userService'
import { NavLink,Link } from "react-router-dom";
  
class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            userid:'',
            password:'',
            userRole:'',
        }
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeUserRoleHandler=this.changeUserRoleHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    saveUser= (e) =>{
        e.preventDefault();
        console.log('userRole=>'+this.state.userRole);
        let loginentity ={userid:this.state.userid,password:this.state.password,userRole:this.state.userRole};
        console.log('loginentity => '+JSON.stringify(loginentity));

        UserService.login(loginentity).then(res => {
            localStorage.setItem('userid',this.state.userid)
            if (this.state.userRole === "admin"){
             
           this.props.history.push(`/adminhome`);
            }
            else if(this.state.userRole==="user"){
             
                this.props.history.push(`/home`);
                }
        });
    }
    changeUserIdHandler =(event) =>{
        this.setState({userid:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }

    changeUserRoleHandler =(event) =>{
        console.log('event=>'+event.target.value)
        this.setState({userRole:event.target.value});
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
                height="600px"
                alt="crop"
              /></div>
        <div>
            <div className = "container-md" style={{marginTop:"5%"}}>
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Login Page</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>UserId</label>
                                      <input placeholder="UserId" name="userid" className="form-control" value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Password</label>
                                      <input placeholder="Password"type ="Password"name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                      <small id="password" className="form-text text-muted">
                                       We'll never share your password with anyone else.
                                      </small>
                                  </div>
                                  <div className="form-group">
                                  <i class="fas fa-user-tag"> ROLE</i>
                                  <select defaultValue ="" className= "form-control"name="userRole" value={this.state.userRole} onChange={this.changeUserRoleHandler}>
                                     <option value="">Select Role</option> 
                                     <option value="admin">Admin</option>
                                      <option value="user">User</option>
                                  </select>
                                  </div>
                                  <button disabled={!this.state.userRole} className="btn btn-primary" onClick={this.saveUser}>Login</button>
                                  <div className="mt-2 text-center">
                                 <small>
                                     New user? <Link to="/register">SignUp</Link>
                                </small>
                                  </div>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
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
export default Login
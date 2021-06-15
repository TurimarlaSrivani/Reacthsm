import React,{ Component } from 'react'
import UserService from '../services/userService'
  
class createUser extends Component{
    constructor(props){
        super(props)

        this.state={
            userid:'',
            userName:'',
            email:'',
            password:'',
            mobileNo:'',
            role:''
        }
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeMobileNoHandler=this.changeMobileNoHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    saveUser= (e) =>{
        e.preventDefault();
        let user ={userid:this.state.userid,userName:this.state.userName,email:this.state.email,password:this.state.password,mobileNo:this.state.mobileNo,role:this.state.role};
        console.log('user => '+JSON.stringify(user));

        UserService.createUser(user).then(res => {
           this.props.history.push(`/user`);
        });
    }
    changeUserIdHandler =(event) =>{
        this.setState({userid:event.target.value});
    }
    changeUserNameHandler= (event) => {
        this.setState({userName:event.target.value});
    }
    changeEmailHandler =(event) => {
        this.setState({email:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }
    
    changeMobileNoHandler =(event) => {
        this.setState({mobileNo:event.target.value});
    }
    changeRoleHandler =(event) => {
        this.setState({role:event.target.value});
    }
    cancel(){
        this.props.history.push('/user');
    }
render(){
    return(
        <div>
            <br></br>
        <div>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add User</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>UserId</label>
                                      <input placeholder="UserId" name="userid" className="form-control" value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>UserName</label>
                                      <input placeholder="UserName" name="userName" className="form-control" value={this.state.userName} onChange={this.changeUserNameHandler}/>
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
                                      <label>MobileNo</label>
                                      <input placeholder="MobileNo" name="mobileNo" className="form-control" value={this.state.mobileNo} onChange={this.changeMobileNoHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Role</label>
                                      <input placeholder="Role" name="role" className="form-control" value={this.state.role} onChange={this.changeRoleHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                  <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
}
export default createUser
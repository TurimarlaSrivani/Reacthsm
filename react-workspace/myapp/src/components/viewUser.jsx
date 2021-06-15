import React, { Component } from 'react';
import UserService from '../services/userService';
class ViewUser extends Component {
    constructor(props){
        super(props)

        this.state={
            userid:this.props.match.params.userid,
            username:'',
            email:'',
            password:'',
            mobileNumber:'',
            role:''
        }
    }
       
    componentDidMount(){
        UserService.viewUser(this.state.userid).then((res) =>{
            let user=res.data;
            this.setState({username:user.username,email:user.email,password:user.password, mobileNumber:user.mobileNumber,role:user.role

            });
        });
    }   
    back(){
        this.props.history.push('/user');
    }  
     
    render() { 
        return (   
            <div>
                <br></br>
           
                <div className="card col-md-6 offset-md-3">
                    <h3 className ="text-center"> View User Details</h3>
                    <div className="card bg-info text-dark">
                    <div className ="card-body">
                    <div className ="row">
                            <label><b>User UserId: </b></label>
                            <div>{this.state.userid}</div>
                        </div>
                        
                        <div className ="row">
                            <label><b>User Name: </b></label>
                            <div>{this.state.username}</div>
                        </div>
                        <div className ="row">
                            <label><b>User Email: </b></label>
                            <div>{this.state.email}</div>
                        </div>    
                        <div className ="row">
                            <label><b>User MobileNumber: </b></label>
                            <div>{this.state.mobileNumber}</div>
                        </div>
                        <div className ="row">
                            <label><b> Role: </b> </label>
                            <div>{this.state.role}</div>
                        </div>
                        <button className="btn btn-dark"  onClick={this.back.bind(this)} style={{marginLeft:"20px"}}>Back</button>

                    </div>
                    </div>
                    </div>
                </div>
        );
    }
}
 
export default ViewUser;
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            isCompleted: false
        };
    }
    inputHandler=(event)=>{
        event.preventDefault()
                if(event.target.name ===  "isNameValid"){
            var nameRGEX = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
            var nameResult = nameRGEX.test(event.target.value)
            // console.log(nameResult);
                    this.setState({
                        [event.target.name] : nameResult
                    })
        }
       else if(event.target.name === "isEmailValid"){
            var emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            var emailResult = emailRGEX.test(event.target.value)
            // console.log(emailResult);
            this.setState({
                [event.target.name] : emailResult
            })
        }
       else if(event.target.name === "isPhoneValid"){
        //    [2-9][1][0-9]{9}
        var phoneRGEX = /^[(]{0,1}[2-9]{3}[)]{0,1}[\s\.]{0,1}[0-9]{3}[\s\.]{0,1}[0-9]{4}$/;
        var phoneResult = phoneRGEX.test(event.target.value);
        // console.log(phoneResult);
        this.setState({
            [event.target.name] : phoneResult
        })
        }
       else if(event.target.name === "isUrlValid"){
        var urlRGEX = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var urlResult = urlRGEX.test(event.target.value)
            // console.log(urlResult);
            this.setState({
                [event.target.name] : urlResult
            })
        }
    }
    validationHandler =()=>{
        console.log("validationHandler");
        if(this.state.isNameValid && this.state.isEmailValid && this.state.isPhoneValid && this.state.isUrlValid  ){
console.log("congrats");
this.setState({
    isCompleted : true
})
        }
        else{
              this.setState({
                    isCompleted : false
                })
          }  
    }
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form onSubmit={this.validationHandler}>
                <h3>Name:
                    <input type="text" name="isNameValid" placeholder="name" onChange={this.inputHandler}/>
                </h3>
                <h3>Email:
                <input type="text" name="isEmailValid" placeholder="email" onChange={this.inputHandler}/>

                </h3>
                <h3>Phone:
                <input type="text" name="isPhoneValid" placeholder="phone" onChange={this.inputHandler}/>

                </h3>
                <h3>Blog URL:
                <input type="text" name="isUrlValid" placeholder="blogUrl" onChange={this.inputHandler}/>
                </h3>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" onClick={this.validationHandler} className="button success expand round text-center">Verify</a>
                    {/* <a href="#"  type="submit" className="button success expand round text-center">Verify</a> */}
                    {/* <input type="submit" value="Verify"  className="button success expand round text-center"/> */}
                    <h1>{this.state.isCompleted === true ? "is completed" : "is not completed"}</h1>
                </div>
                
            </form>
            
        </div>);
    }
}

export default Form;

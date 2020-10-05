import React, { Component } from "react";
import UserDetails from "./UserDetails";
import { Header } from "./Header";

export class UserFormik extends Component {
  state = {
    step: 1,
    username: "",
    bio: "",
    email: "",
    phone: "",
    errors: {
      username: "",
      bio: "",
      email: "",
      phone: "",
    },
  };

  nextStep = () => {
    let { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    let { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  isUsernameValid = async () => {
    let { username } = this.state;

    if ((await username.length) >= 6) {
      await this.setState({
        errors: { username: "" },
      });
      console.log(username);
      return true;
    } else {
      await this.setState({
        errors: {
          username: "Enter atleast 6 characters",
        },
      });
      console.log(this.state);
      console.log("username false");
      return false;
    }
  };

  isBioValid = async () => {
    let { bio } = this.state;

    if ((await bio.length) >= 6) {
      await this.setState({
        errors: { bio: "" },
      });
      console.log(this.state);
      return true;
    } else {
      await this.setState({
        errors: {
          bio: "Enter atleast 6 characters",
        },
      });
      console.log("bio false");
      console.log(this.state);
      return false;
    }
  };

  isEmailValid = async () => {
    const re = /\S+@\S+\.\S+/;

    let { email } = this.state;
    if (await re.test(email)) {
      await this.setState({
        errors: { email: "" },
      });
      console.log(re);
      return true;
    } else {
      await this.setState({
        errors: {
          email: "Enter a valid email",
        },
      });
      console.log("re flase");
      return false;
    }
  };

  isPhoneValid = async () => {
    let { phone } = this.state;

    if (
      (await phone.length) === 10 &&
      (await Number(phone.split("").shift())) === 9
    ) {
      await this.setState({
        errors: { phone: "" },
      });
      console.log(phone);
      return true;
    } else {
      await this.setState({
        errors: {
          phone: "Enter a valid number starting with 9",
        },
      });
      console.log(" phone false");
      return false;
    }
  };

  handleInput = (input) => (e) => this.setState({ [input]: e.target.value });

  handleSubmitUserDetails = async (e) => {
    e.preventDefault();
    let first = await this.isUsernameValid();
    let second = await this.isBioValid();
    let third = await this.isEmailValid();
    let fourth = await this.isPhoneValid();

    if (first && second && third && fourth) {
      this.nextStep();
    }
  };

  render() {
    const { step, username, email, phone, bio, errors } = this.state;
    const {
      isBioValid,
      isEmailValid,
      isUsernameValid,
      isPhoneValid,
      handleInput,
      handleSubmitUserDetails,
    } = this;

    return (
      <div>
        {this.props.children(
          username,
          email,
          phone,
          bio,
          errors,
          isBioValid,
          isEmailValid,
          isUsernameValid,
          isPhoneValid,
          handleInput,
          handleSubmitUserDetails
        )}
      </div>
    );
  }
}
export default UserFormik;

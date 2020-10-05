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
        errors: { ...this.state.errors, username: "" },
      });

      return true;
    } else {
      await this.setState({
        errors: {
          ...this.state.errors,
          username: "Enter atleast 6 characters",
        },
      });

      return false;
    }
  };

  isBioValid = async () => {
    let { bio } = this.state;

    if ((await bio.length) >= 6) {
      await this.setState({
        errors: { ...this.state.errors, bio: "" },
      });

      return true;
    } else {
      await this.setState({
        errors: { ...this.state.errors, bio: "Enter atleast 6 characters" },
      });

      return false;
    }
  };

  isEmailValid = async () => {
    const re = /\S+@\S+\.\S+/;

    let { email } = this.state;
    if (await re.test(email)) {
      await this.setState({
        errors: { ...this.state.errors, email: "" },
      });

      return true;
    } else {
      await this.setState({
        errors: { ...this.state.errors, email: "Enter a valid email" },
      });

      return false;
    }
  };

  isPhoneValid = async () => {
    let { phone } = this.state;

    if (
      (await phone.length) === 10 &&
      ((await Number(phone.split("").shift())) === 9 ||
        (await Number(phone.split("").shift())) === 8 ||
        (await Number(phone.split("").shift())) === 7)
    ) {
      await this.setState({
        errors: { ...this.state.errors, phone: "" },
      });

      return true;
    } else {
      await this.setState({
        errors: {
          ...this.state.errors,
          phone: "Enter a valid number starting with 9",
        },
      });

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

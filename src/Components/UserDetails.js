import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import UserFormik from "./UserFormik";
import "./style.css";

export class UserDetails extends Component {
  render() {
    return (
      <>
        <UserFormik>
          {(
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
          ) => (
            <form onSubmit={handleSubmitUserDetails}>
              <div className="inputfield">
                <TextField
                  onChange={handleInput("username")}
                  style={styles.input}
                  label="Username"
                  defaultValue={username}
                  helperText={errors.username ? errors.username : undefined}
                  variant="outlined"
                />
              </div>
              <div className="inputfield">
                <TextField
                  onChange={handleInput("bio")}
                  style={styles.input}
                  label="Bio"
                  defaultValue={bio}
                  helperText={errors.bio ? errors.bio : undefined}
                  variant="outlined"
                />
              </div>
              <div className="inputfield">
                <TextField
                  onChange={handleInput("email")}
                  style={styles.input}
                  label="E-mail"
                  defaultValue={email}
                  helperText={errors.email ? errors.email : undefined}
                  variant="outlined"
                />
              </div>
              <div className="inputfield">
                <TextField
                  onChange={handleInput("phone")}
                  style={styles.input}
                  label="Contact Number"
                  defaultValue={phone}
                  helperText={errors.phone ? errors.phone : undefined}
                  variant="outlined"
                />
              </div>
              <div className="inputfield">
                <button className="nextbtn" onClick={handleSubmitUserDetails}>
                  Next
                </button>
              </div>
            </form>
          )}
        </UserFormik>
      </>
    );
  }
}

const styles = {
  input: {
    marginTop: 40,
  },
};

export default UserDetails;

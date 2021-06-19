import { useDispatch, useSelector } from "react-redux";
import { isFormValid } from "./isFormValid";
import { User } from "./User";
import { server } from "../config/server.json";
import { withRouter } from "react-router";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpBtn = (props) => {
  //states
  const firstname = useSelector((state) => state.firstname);
  const lastname = useSelector((state) => state.lastname);
  const email = useSelector((state) => state.email);
  const pass = useSelector((state) => state.pass);

  const dispatch = useDispatch();

  const signUp = async () => {
    const newuser = new User();
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.email = email;
    newuser.pass = pass;

    fetch(`${server}/signup`, {
      method: "Post",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message == "succses") {
          props.history.push("/login");
        } else if (data.message == "exist") {
          toast.error(data.detailes);

        }
        else if(data.message=='validation error'){
            toast.error(data.detailes[0]);
        }
      })
      .catch((err) => toast.error(err));

  };
  return (
    <button
      className="btn btn-lg btn-primary btn-block"
      disabled={!isFormValid([firstname, lastname, email, pass])}
      onClick={signUp}
    >
      Sign up
    </button>
  );
};

export default withRouter(SignUpBtn);
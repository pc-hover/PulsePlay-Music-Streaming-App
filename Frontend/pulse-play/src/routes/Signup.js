import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper.js"
import React from "react";
import { useCookies } from "react-cookie"
import { useState } from "react";
import { Icon } from "@iconify/react"
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/Password";
import ButtonComponent from "../components/shared/Button";
import { Link, useNavigate } from "react-router-dom";
function SignupComponent() {

    const [cookie, setCookie] = useCookies(["token"]);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmEmail, setConfirmemail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastname] = useState("");

    const navigate = useNavigate();


    //function which will be called after hitting sngup button
    const signup = async () => {
        if (email != confirmEmail) {
            alert("Email and Confirm Email fields must match");
            return;
        }
        const data = { email, password, username, firstName, lastName };
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
        if (response && !response.err) {
            console.log(response);
            const token = response.token;

            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date })
            alert("Success");
            navigate("/home");
        }
        else {
            alert("Failure");
        }
        console.log(data);
    }

    return (
        <div className=" w-full flex flex-col items-center bg-violet-200">

            <div className="logo p-4 border-b border-solid border-sky-600 w-full flex justify-center">

                <Icon
                    icon="flat-color-icons:music"
                    width="100px">
                </Icon>
                {/* <h2 className="text-xl flex flex-col justify-content items-">PulsePlay</h2> */}
            </div>

            <hr />

            <div className=" flex flex-col justify-content w-1/2 h-full items-center my-10 shadow-2xl bg-white overflow-auto pb-10 rounded-lg">

                <div className="inputRegion w-1/2 pt-10 flex flex-col items-center justify-center  m-10">

                    <div className="font-bold mb-12 text-xl flex flex-col items-center justify-center ">Signup to PulsePlay</div>

                    <TextInput
                        label="What's your email? "
                        placeholder="What's your email?"
                        className="my-6"
                        value={email}
                        setValue={setEmail}
                    />
                    <TextInput
                        label="Confirm your email"
                        placeholder="Enter your email again?"
                        className="my-6"
                        value={confirmEmail}
                        setValue={setConfirmemail}

                    />
                    <TextInput
                        label="Username"
                        placeholder="Enter Your Username"
                        className="my-6"
                        value={username}
                        setValue={setUsername}
                    />

                    <PasswordInput
                        label="Create a Password"
                        placeholder="Enter strong Password here"
                        className="my-6"
                        value={password}
                        setValue={setPassword}
                    />
                    <div className="w-full flex-col justify-between items-center">

                        <TextInput
                            label="First Name"
                            placeholder="Enter a First name"
                            className="my-6"
                            value={firstName}
                            setValue={setfirstName}
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Enter a Last name"
                            className="my-6"
                            value={lastName}
                            setValue={setlastname}
                        />

                    </div>
                    <ButtonComponent
                        label="SIGN UP"
                        className="font-bold my-6 p-20 py-4  rounded-full bg-pink-200"
                        onlclickFunction={(e) => {
                            e.preventDefault();
                            signup();
                        }}

                    />

                    {/* <div>
   <button></button>
</div> */}

                    <div className="w-full border border-solid border-gray-300 my-4 mb-3"> </div>

                </div>
                <div
                    className="flex flex-col justify-content items-center w-full">
                    <div classsName="w-full">Have an account?</div>
                    <div
                        className="border border-gray-400 text-gray-400   my-4 py-3 mb-10 rounded-full w-1/2 flex flex-col justify-content items-center">
                        <Link to="/login">LOGIN INSTEAD</Link>
                    </div>
                </div>

            </div>
        </div >);
};
export default SignupComponent;



import React from "react";
import { Icon } from "@iconify/react"
import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/Password";
import ButtonComponent from "../components/shared/Button";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


function LoginComponent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {

        const data = { email, password };
        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
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

            <div className=" flex flex-col justify-content w-1/2 h-full items-center my-10 shadow-2xl bg-white rounded-lg pb-10">

                <div className="inputRegion w-1/2 pt-10 flex flex-col items-center justify-center  m-10">

                    <div className="font-bold mb-12 text-xl flex flex-col items-center justify-center ">Login to PulsePlay</div>

                    <TextInput
                        label="Email ID or Username "
                        placeholder="Email ID or Username"
                        value={email}
                        setValue={setEmail}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        className=""
                        value={password}
                        setValue={setPassword}
                    />
                    <ButtonComponent
                        label="LOGIN"
                        className="font-bold my-6 p-3 w-full rounded-full bg-pink-200"
                        onlclickFunction={(e) => {
                            e.preventDefault();
                            login();
                        }}
                    />
                    <div>
                        <a
                            href="https://chat.openai.com/" target="blank"
                            className="font-bold text-l ">Forget Your Password?
                        </a>
                    </div>
                    <div className="w-full border border-solid border-gray-300 mt-4"> </div>
                </div>
                <div
                    className="flex flex-col justify-content items-center w-full">
                    <div classsName="w-full">Don't have a account ?</div>
                    <div
                        className="border border-gray-400 text-gray-400   my-3 py-2 rounded-full w-1/2 flex flex-col justify-content items-center">
                        <Link to="/signup">SIGN UP FOR PULSE PLAY </Link>
                    </div>
                </div>

            </div>
        </div>);
};
export default LoginComponent;



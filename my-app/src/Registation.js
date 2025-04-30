import React from 'react';
import {useRef,useState,useEffect} from "react" ;
import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   

const USER_REGEX = /^[a-zA-Z0-9]{4,10}$/;
const PWD_REGEX = /^[a-zA-Z0-9]{8,16}$/;


function Registation() {
    const userRef = useRef();
    const errRef=useRef();
    const [user,setUser]=useState("");
    const [validName,setValidName]=useState(false);
    const [userFocus,setUserFocus]=useState(false);

    const [pwd,setPwd]=useState("");
    const [validPwd,setValidPwd]=useState(false);
    const [pwdFocus,setPwdFocus]=useState(false);

    const [matchPwd,setMatchPwd]=useState("");
    const [validMatchPwd,setValidMatchPwd]=useState(false);
    const [matchPwdFocus,setMatchPwdFocus]=useState(false);
    const [errMsg,setErrMsg]=useState("");
    const [success,setSuccess]=useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        const result=USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidMName(result);
    },[user])

    useEffect(()=>{
        const result=PWD_REGEX.text(pwd);
        console.log(result);
        console.log(pwd);
        const match=pwd===matchPwd;
        setValidMatchPwd(match);
    },[pwd,matchPwd])
  return (
    <div>Registation</div>
  )
}

export default Registation
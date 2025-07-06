import React,{useState} from "react";

const RegisterForm = (props) =>{
    const [formData, setFormData] = useState({
        firstname: "",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    });

    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields]=useState({});
    const [hasBeenSubmit, setHasBeenSubmit]=useState(false);
    const [users, setUsers] = useState([]);

    const handelChange = (e) => {
        const {name , value} = e.target;
        setFormData({...formData, [name]:value});
        validateField(name, value);
    };

    const handelBlure = (e)=>{
        const {name} = e.target;
        setTouchedFields({...touchedFields,[name]:true});
    };

    const validateField = (name,value) =>{
        let errors = {...formErrors}
    };

    switch(name) {
        case "firstname":
            errors.firstname = value.length < 2 ? "First name must be at least 2 characters." : "";
            break;
        case "lastname":
            errors.lastname = value.length < 2 ? "last name must be at least 2 characters." : "";
            break;
        case "email":
            errors.email = value.length < 5 || !value.includes("@") ? "Email must be valid and at least 5 characters." : "";
            break;
        case "password": 
        errors.password = value.length < 8 ? "Password must be at least 6 characters." : "";
        break;
        case "confirmpassword":
            errors.confirmpassword = value !==formData.password ? "Passwords do not match." : "";
            break;
            default:
            break;
    }

    setFormErrors(errors);
};

const validateForm = () =>{
    for (let key in formErrors){
        if(formData[key]==="")return false;
    }
    for (let key in FormData){
        if(formData[key] === "")return false;
    }
    return true;
}

const createUser = (e) => {
    e.preventDefault();

    const allTouched = <object data="" type=""></object>
}
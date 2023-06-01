import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddressForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        navigate("/inicio");
    };

    return <></>;
    
   
}

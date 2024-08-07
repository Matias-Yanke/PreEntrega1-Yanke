import { string, object, mixed,  } from "yup";

let userSchema = object({
    nombre: string().required(),
    telefono: mixed().required(),
    email: string().email().required()
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataform)
        return { status: "success"}
    }catch (error){
        return { status: "error", message: error.message}
    }
}
export default validateForm;
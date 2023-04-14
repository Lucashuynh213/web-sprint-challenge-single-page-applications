import * as yup from "yup"

const formSchema = yup.object().shape({
    special: yup
        .string()
        .trim()
        .min(2,"Name must be at least 2 characters")
});

export default formSchema
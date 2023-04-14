import * as yup from "yup"

const nameInput = 'name-input'
const formSchema = yup.object().shape({
    size: yup
        .string()
        .trim(),
    original: yup
        .string(),
    garlic: yup
        .string(),
    bbq: yup
        .string(),
    pepperoni: yup
        .string(),
    sausage: yup
        .string(),
    bacon: yup
        .string(),
    italian: yup
        .string(),
    grilled: yup
        .string(),
    green: yup
        .string(),
    mushroom: yup
        .string(),
    diced: yup
        .string(),
    black: yup
        .string(),
    roasted: yup
        .string(),
    artichoke: yup
        .string(),
    three: yup
        .string(),
    pineapple: yup
        .string(),
    extra: yup
        .string(),
    gulten: yup
        .string(),
    instruction: yup
        .string()
        .min(2, "name must be at least 2 characters"),
});

export default formSchema
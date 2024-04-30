import { UPDATE_VALUES } from "./action-type"

export const updateProductId = (value) =>({
    type : UPDATE_VALUES,
    payload : value
})
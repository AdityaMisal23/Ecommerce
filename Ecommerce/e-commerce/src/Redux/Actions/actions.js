import { type } from "@testing-library/user-event/dist/type"
import { UPDATE_VALUES } from "./action-type"

export const updateValue = (value) =>({
    type : UPDATE_VALUES,
    payload : value
})

export const updateProductId = (value) =>({
    type : UPDATE_VALUES,
    payload : value
})

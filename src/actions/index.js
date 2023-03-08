import { id } from "../constants/id";
import { EDIT_TASK } from "./types";
import { CREATE_TASK } from "./types";
import { REMOVE_TASK } from "./types";

export const editTask = (id, params = {}) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params
        },
    };
};

export const createTask = ({title, description, status}) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: id(),
            title,
            description,
            status,
        },
    };
};

export const deleteTask = (id) => {
    return {
        type: REMOVE_TASK,
        id,
    };
};
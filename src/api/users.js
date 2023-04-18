import axios from "axios";

// const host = "http://localhost:3000/api/";
const host = `${import.meta.env.VITE_HOST}` 

export const getPeopleRequests = async () => {
    try {
        const resp = await axios.get(`${host}users`);
        return resp.data;
    } catch (error) {
        return null;
    }
};

export const postPersonRequest = async (data) => {
    try {
        const resp = await axios.post(`${host}user`, {
            rut: data.rut,
            name: data.name,
            phone: data.phone,
            email: data.email,
        });
        return resp.status;
    } catch (error) {
        if (error.response.status === 409) {
            return error.response.status;
        } else {
            return null;
        }
    }
};

export const putPersonRequest = async (id, data) => {
    const updateData = {};
    if (data.phone.trim()) {
        updateData.phone = data.phone;
    }
    if (data.email.trim()) {
        updateData.email = data.email;
    }
    try {
        const resp = await axios.put(`${host}user${id}`, updateData);
        console.log(resp)
        return resp.status;
    } catch (error) {
        return null;
    }
};

export const deletePersonRequest = async (id) => {
    const res = await axios.delete(`${host}user${id}`);
    if (res.status === 204) {
        return res.status;
    } else {
        return null;
    }
};

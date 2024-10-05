import axios from "axios";

const getListingsByLocation = (location) => {
    return axios.get(`/api/listings?location=${location}`).then(res => res.data);
};

const getListingById = (id) => {
    return axios.get(`/api/listings/${id}`).then(res.data);
};

export default{
    getListingsByLocation,
    getListingById,
};
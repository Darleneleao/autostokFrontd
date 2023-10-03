import api from "./api"
const boxServices = {
    cadastraBox: async ( data ) => {
        await api.post('/boxes', data)
    },
    getboxes: async (id) => {
       const data = await api.get(`/boxes/${id}`)
       return data.data
    },
    updateBox: async (id ,data) => {
        api.put(`/boxes/${id}`,data)
    },
    deleteBox: async (id) =>{
        api.delete(`/boxes/${id}`)
    }
}
export default boxServices
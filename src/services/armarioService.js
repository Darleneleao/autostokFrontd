import api from "./api"
const armarioService = {
    cadastraArmario: async ( data ) => {
        await api.post('/armarios', data)
    },
    getArmarios: async () => {
       const data = await api.get('/armarios')
       return data.data
    },
    updateArmario: async (id ,data) => {
        api.put(`/armarios/${id}`,data)
    },
    deleteArmario: async (id) =>{
        api.delete(`/armarios/${id}`)
    }
}
export default armarioService
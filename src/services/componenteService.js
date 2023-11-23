import api from "./api"
const componenteServices = {
    cadastraComponente: async ( data ) => {
        await api.post('/componentes', data)
    },
    getComponente: async (id) => {
       const data = await api.get(`/componentes/${id}`)
       return data.data
    },
    updateComponente: async (id ,data) => {
        api.put(`/componentes/${id}`,data)
    },
    deleteComponente: async (id) =>{
        api.delete(`/componentes/${id}`)
    },
    pesquisaComponente: async (data) => {
        const retorno = await api.post(`/componentes/pesquisa`, data)
        return retorno.data
    }
}
export default componenteServices
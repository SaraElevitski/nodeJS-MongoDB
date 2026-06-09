import axios from "axios"

export default new class HelpRequestService {

    GetRequestsList() {
        return axios.get("http://127.0.0.1:8080/api/requests")
    }

    // GetCommetByMessageId(messageId:number) {
    //     return axios.get(`https://jsonplaceholder.typicode.com/posts/${messageId}/comments`)
    // }
}
import axios from "axios";

class TourService{
    static async getAllTour(){
        return await axios.get('http://localhost:3000/tuors')
    }
    static async getOneTour(id){
        return await axios.get("http://localhost:3000/tuors"+id)
    }
    static async addTour(tour){
        return await axios.post("http://localhost:3000/tuors",tour)
    }
    static async updateTour(id,newTour){
        return await axios.put("http://localhost:3000/tuors"+id,newTour)
    }
    static async deleteTour(id){
        return await axios.delete("http://localhost:3000/tuors"+id)
    }
}
export default TourService
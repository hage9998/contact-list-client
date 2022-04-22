import HTTPRequests from "./ httpCommon";
import axios, { AxiosResponse } from 'axios';


interface ApiControllerMethods {

}

export default class ApiController extends HTTPRequests {
	constructor() {
		super("localhost:8080");
	}

	protected get<B>(path: string): Promise<AxiosResponse<B[], any>> {
		return axios.get<B[]>(`http://localhost:8080/contacts`)
	}

	
}
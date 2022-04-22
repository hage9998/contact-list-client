import axios, { AxiosInstance } from "axios";

export default abstract class HTTPRequests {
	protected readonly instance: AxiosInstance;

	public constructor(baseURL: string) {
	  this.instance = axios.create({
		baseURL,
	  });
	}
	
}

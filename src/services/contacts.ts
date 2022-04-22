import ApiController from "../adapters/api";
import { ContactResponse } from "../types/contactsTypes";

class ContactService extends ApiController {
  async getContacts(): Promise<ContactResponse[]> {
    const response = await this.get<ContactResponse>("contacts");
    return response.data;
  }
}
export default new ContactService();

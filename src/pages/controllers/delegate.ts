import { ContactResponse } from "../../types/contactsTypes";
import contactsConnector from "./connector";

export default class ContactDelegate {
  getContacts = async (): Promise<ContactResponse[]> => {
    const ContactService = contactsConnector();

    const data = await ContactService.getContacts();
    return data;
  };
}

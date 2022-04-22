import DataTable from "../components/tables/tableList";
import { FC, useEffect, useState } from "react";
import "./contactListPageStyle.scss";
import ContactDelegate from "./controllers/delegate";
import { ContactResponse } from "../types/contactsTypes";
import { Spinner } from "react-bootstrap";

export type ContactsTableRow = {
  name: string;
  phone: number;
};

const ContactDelegateInstance = new ContactDelegate();
const HEADER: Record<keyof ContactsTableRow, string> = {
  name: "Nome",
  phone: "Telefone",
};

const ROWS: ContactsTableRow[] = [];

const loadRows = (contacts: ContactResponse[]) => {
  ROWS.length = 0;
  contacts.map(({ name, phone }) => {
    const row: ContactsTableRow = {
      name: name,
      phone: phone,
    };
    ROWS.push(row);
  });
};

const ContactListPage: FC = () => {
  const [contact, setContact] = useState<ContactResponse[] | undefined>();
  useEffect(() => {
    if (!contact) {
      ContactDelegateInstance.getContacts().then((cont) => {
        loadRows(cont);
        setContact(cont);
      });
    }
  });

  return (
    <>
      {!contact ? (
        <Spinner animation="border" />
      ) : (
        <DataTable headers={HEADER} rows={ROWS} />
      )}
    </>
  );
};

export default ContactListPage;

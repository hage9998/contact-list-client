import { Table } from "react-bootstrap";
import "./tableListStyle.scss";

type TableHeaderType = string | number;

interface DataTableProps<T extends Record<string, TableHeaderType>> {
  headers: Record<keyof T, TableHeaderType>;
  rows: Readonly<T>[];
}

function DataTable<T extends Record<string, TableHeaderType>>({
  headers,
  rows,
}: DataTableProps<T>) {
  const headerKeys = Object.keys(headers);

  return (
    <div className="div-border">
      <Table striped hover bordered className="data-table-test">
        <thead>
          <tr>
            {Object.entries(headers).map(([key, header]) => (
              <th key={key}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              {headerKeys.map((key) => (
                <td key={key}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable;

// Table.tsx
import React, { useState } from "react";
import Button from "./Button";

interface TableProps {
  schema: { key: string; label: string }[];
  data: Array<{ [key: string]: string | Record<string, string> }>;
}


const LogsTable: React.FC<TableProps> = ({ schema, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderTableCell = (row: any, field: any) => {
    const fieldValue = row[field.key];

    if (typeof fieldValue === "object" && fieldValue !== null) {
      // If the field is an object, recursively render its values
      return Object.values(fieldValue).join(", ");
    }

    return fieldValue;
  };

  return (
    <div>
      <table className="min-w-full bg-white border rounded-xl border-gray-300">
        <thead>
          <tr>
            {schema.map((field) => (
              <th key={field.key} className="border p-2">
                {field.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {schema.map((field) => (
                <td key={field.key} className="border p-2">
                  {renderTableCell(row, field)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-medium">Page {currentPage}</span>
        <div className="space-x-3">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= data.length}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export { LogsTable };

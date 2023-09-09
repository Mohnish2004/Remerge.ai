import React, { useState, useEffect } from "react";

export default function RecordsTable() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await fetch("http://localhost:5050/records");
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    }

    fetchRecords();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-100 dark:text-gray-100">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-900">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-gray-100 dark:ring-offset-gray-100 dark:focus:ring-offset-gray-100 focus:ring-2 dark:bg-gray-100 dark:border-gray-100"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Resume Name/Role
            </th>
            <th scope="col" className="px-6 py-3">
              Comment
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr
              key={record.id}
              className="bg-white border-b dark:bg-gray-100 dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-100"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-${record.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`checkbox-table-${record.id}`}
                    className="sr-only"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {record.name}
              </td>
              <td className="px-6 py-4">{record.comment}</td>
              <td className="px-6 py-4">{record.status}</td>
              <td className="px-6 py-4">
                <a
                  href={`/download/${record.id}`}
                  className="font-medium text-blue-100 dark:text-blue-100 hover:underline"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { HiPlay, HiStop } from 'react-icons/hi2'
import "./Centers.css";


function CentersTable({ data }) {
  const [sortBy, setSortBy] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  
  const columns = [
    {
      header: 'Audio',
      cell: (info) => {    
        const { id, service, divisionna, phonenumbe, address, city, zipcode } = info.row.original;
        const phoneNum = `${phonenumbe.slice(1,4)}-${phonenumbe.slice(6)}`;
        const infoArr = [
          parseInt(id),
          service,
          divisionna,
          phoneNum,
          address,
          city,
          parseInt(zipcode),
        ];

        const startSpeech = () => {
          for (let text of infoArr) {
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.rate = 0.9;
            window.speechSynthesis.speak(speech);
          }
        }

        const stopSpeech = () => {
          window.speechSynthesis.cancel();
        }

        return (
          <div className='speech'>
            <button
              className='start'
              onClick={() => startSpeech()}
            >
              <HiPlay />
            </button>
            &nbsp;
            <button
              className='stop'
              onClick={() => stopSpeech()}
            >
              <HiStop />
            </button>
          </div>
        )
      },
    },
    {
      header: 'ID',
      accessorKey: 'id',
      cell: (info) => parseInt(info.getValue())
    },
    { 
      header: 'Service',
      accessorKey: 'service',
    },
    { 
      header: 'Location',
      accessorKey: 'divisionna',
    },
    { 
      header: 'Phone',
      accessorKey: 'phonenumbe',
    },
    { 
      header: 'Address', 
      accessorKey: 'address',
      cell: (info) => {
        const { address, city, zipcode } = info.row.original;
        const fullAddress = `${address}, ${city}, NY ${parseInt(zipcode)}`;
        return (
          <a
            href={`http://maps.google.com/?q=${fullAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        )
      },
    },
    { 
      header: 'City',
      accessorKey: 'city',
    },
    { 
      header: 'Zip Code',
      accessorKey: 'zipcode',
      cell: (info) => parseInt(info.getValue())
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sortBy,
      globalFilter: filterBy
    },
    onSortingChange: setSortBy,
    onGlobalFilterChange: setFilterBy
  })

  return (
    <section className="table-section">
      <div className="table-filter">
        <label htmlFor="filter">Filter by: </label>
        <input
          id="filter"
          type="text"
          value={filterBy}
          onChange={(event) => setFilterBy(event.target.value)}
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div>
                    {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc"
                    ? " 🔼"
                    : header.column.getIsSorted() === "desc"
                      ? " 🔽"
                      : ""
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-buttons">
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          First page
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last page
        </button>
      </div>
    </section>
  );
}


export default CentersTable;
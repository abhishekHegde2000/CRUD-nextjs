import React from 'react'

const Todo = () => {
  return (
    <table className="table-auto">
        <tr className="bg-black-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
        </tr>
    </table>
  )
}

export default Todo
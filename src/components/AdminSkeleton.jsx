import React from 'react'

const AdminSkeleton = () => {

  return (
    <div>
        <table className="table-autoborder border-[1px] border-[#262626] mt-[80px] box-border mx-auto w-[100vw] max-w-7xl">
          <thead className="bg-[#262626]">
            <tr>
              <th className="px-[8px] py-[10px] border">#S.No</th>
              <th className="px-[8px] py-[10px] border">Name</th>
              <th className="px-[8px] py-[10px] border">Email</th>
              <th className="px-[8px] py-[10px] border">Password</th>
              <th className="px-[8px] py-[10px] border">Created Time</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length:30}).map((data, i) => (
              <tr className="" key={i+1}>
                <td className="bg-[#141414] text-center h-[40px]  border"></td>
                <td className="bg-[#141414] pl-[20px] h-[40px]  border"></td>
                <td className="bg-[#141414] pl-[20px] h-[40px]  border"></td>
                <td className="bg-[#141414] text-center h-[40px]  border"></td>
                <td className="bg-[#141414] text-center h-[40px]  border"></td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
   
  )
}

export default AdminSkeleton
import React, { useState, useEffect, useContext } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.js";
import AdminSkeleton from "../../components/AdminSkeleton.jsx";
import { AuthContex } from "../../Contex/AuthContex.jsx";
import Loader from "../../components/Loader.jsx";
import LoginBut from "../../components/LoginBut.jsx";


const Admin = () => {
  const [admin, setAdmin] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const auth = getAuth();
  
  let {mainUser , setMainUser} = useContext(AuthContex)


  console.log("This is Main User:",mainUser)


  // Real-time users listener
  useEffect(() => {
     onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllUsers(users);
      console.log(snapshot.docs)
    });


  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error("Sign-out error:", error));
  };




  return (
    <div className="min-h-screen bg-[#141414] text-white  w-full flex flex-col gap-[35px]">

    <nav className="bg-[#141414] border-b-[1px] border-[#262626] flex justify-center items-center box-border w-[100vw] fixed top-0 z-20  m-auto ">
      <div className="flex justify-between items-center  h-[60px] w-[100vw] max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={handleSignOut} className="bg-purple-600 hover:bg-purple-700 px-4 py-[5px] rounded-[8px]">
          Sign Out
        </button>
      </div>


    </nav>


    


      {allUsers.length === 0 ? 
        <Loader/>
       : 
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
            {allUsers.map((data, i) => (
              <tr key={data.id} className="hover:bg-gray-800 transform transition-transform ease-in duration-200 hover:scale-101 box-border">
                <td className="text-center p-[5px]">{i + 1}</td>
                <td className="pl-[20px] p-[5px]">{data?.name}</td>
                <td className="pl-[20px] p-[5px]">{data?.email}</td>
                <td className="text-center p-[5px] select-none">{data?.password}</td>
                <td className="text-center p-[5px]">
                  {data?.createdAt?.toDate
                    ? data.createdAt.toDate().toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Admin;

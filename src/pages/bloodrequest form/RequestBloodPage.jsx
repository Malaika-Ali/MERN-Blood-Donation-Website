import React, {useState, useEffect} from "react";
import RequestForm from "./RequestForm";
import axios from 'axios'

const RequestBloodPage = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get("/api/v1/users/current-user", {
          withCredentials: true
        });
        setCurrentUser(response.data.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  if (currentUser === null) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
}
  return (
    <section className="flex items-center flex-col justify-center py-14 md:py-8 bg-red-50 text-zinc-900 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl shadow-xl p-4">
              <div className="p-6 lg:p-12">
                <h2 className="text-3xl font-bold mb-2 text-center">
                  Blood Request Form
                </h2>
                <RequestForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestBloodPage;


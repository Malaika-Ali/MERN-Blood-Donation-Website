import React, {useState, useEffect} from "react";
import axios from "axios";

const CareerCard = ({ donor }) => {

	return (
		<div className="bg-white shadow-2xl hover:bg-red-200 hover:bg-opacity-20  dark:hover:bg-opacity-20 group hover:scale-[1.01] duration-[.4s] p-4 md:p-6">
			<div className="grid grid-cols-12 items-center w-full">
				
				<div className="col-span-12 md:col-span-7 mt-4 md:mt-0">
					<div>
						

						<h5 className="text-center md:text-start text-xl font-medium mb-2">
							<span className="text-blue-600">Donor's Name</span> - {donor.fullname}
						</h5>
					</div>
					<div className="text-center md:text-start mt-6">
						<div className="flex justify-center md:justify-start items-center">
							<div className="ml-2">
								<h6 className="font-bold">Contact Number: {donor.phonenumber}</h6>
								<p className="mb-2">Email Address: {donor.email}</p>
                <p className="mb-2">Donor's City: {donor.city}</p>
                <p className="mb-2">Donor's Area: {donor.area}</p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};


const DonorsList = () => {

  const [donors, setDonors] = useState([])

  useEffect(() => {
    // const fetchCurrentUser = async () => {
    //   try {
    //     const response = await axios.get("/api/v1/users/current-user", {
    //       withCredentials: true
    //     });
    //     setCurrentUser(response.data.data);
    //     console.log(currentUser)
    //   } catch (error) {
    //     console.error("Error fetching current user:", error);
    //   }
    // };

    const fetchDonors=async () => {
      try {
        const response = await axios.get('/api/v1/requests/get-donors');
        const donorsResponse=response.data.data
        const unique=donorsResponse.filter((donor, index, self) =>
          index === self.findIndex((d) => (
              d._id === donor._id 
          ))
      );
        setDonors(unique)
        console.log(donors);
    } catch (error) {
        console.error('Error fetching donors:', error);
    }
    };

    // fetchCurrentUser();
    fetchDonors()
  }, []);


   // Filter unique donors based on their ID
    



    return (
      <section className="py-14 md:py-24 bg-red-50 text-black">
        <div className="container px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <h1 className="text-3xl lg:text-[40px] font-bold mb-12">
                Available Donors of your blood group
              </h1>
            </div>
    
            {donors.length > 0 ? (
              // Render donor cards if donors exist
              donors.map((donor, i) => (
                <div className="col-span-12 mt-6" key={i}>
                  <CareerCard donor={donor} />
                </div>
              ))
            ) : (
              // Render message if no donors exist
              <div className="col-span-12 text-center mt-6">
                <p className="text-lg font-medium text-gray-700">
                  No donors exist now
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
    

};


export default DonorsList
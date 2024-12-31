import React from "react";
import RequestForm from "./RequestForm";

const RequestBloodPage = () => {
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


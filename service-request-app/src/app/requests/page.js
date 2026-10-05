"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ServiceRequestPage() {
  const router = useRouter();

  const [customerName, setCustomerName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [submittedRequests, setSubmittedRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
  const savedUser = localStorage.getItem("currentUser");
  setCurrentUser(savedUser);

  const savedRequests = localStorage.getItem("serviceRequests");

  if (savedRequests) {
    setSubmittedRequests(JSON.parse(savedRequests));
  }
}, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/");
};

const handleSubmit = (event) => {
  event.preventDefault();

  const newRequest = {
    customerName: customerName,
    serviceType: serviceType,
    description: description,
    submittedBy: currentUser,
  };

  const updatedRequests = [...submittedRequests, newRequest];

    setSubmittedRequests(updatedRequests);
    localStorage.setItem("serviceRequests", JSON.stringify(updatedRequests));

    setCustomerName("");
    setServiceType("");
    setDescription("");
};

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">

        <div className="flex justify-between items-center mb-2">
  <h1 className="text-3xl font-bold text-gray-800">
    Service Request
  </h1>

  <button
    type="button"
    onClick={handleLogout}
    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
  >
    Logout
  </button>
</div>

        <p className="text-gray-500 mb-6">
          Enter the customer and service information below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-gray-700 mb-1">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Service Type
            </label>

            <select
            value={serviceType}
            onChange={(event) => setServiceType(event.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select a service</option>

              <option value="Network Installation">
                Network Installation
              </option>
              <option value="Network Repair">
                Network Repair
              </option>
              <option value="Equipment Setup">
                Equipment Setup
              </option>
              <option value="Technical Support">
                Technical Support
              </option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Description
            </label>

            <textarea
              placeholder="Describe the service needed"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Submit Request
          </button>

        </form>
        {submittedRequests.length > 0 && (
  <div className="mt-8 border-t pt-6">

    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Submitted Requests
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">

        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">
              Customer Name
            </th>

            <th className="border border-gray-300 p-3 text-left">
              Service Request
            </th>

            <th className="border border-gray-300 p-3 text-left">
              Description
            </th>

            <th className="border border-gray-300 p-3 text-left">
              Submitted By
            </th>
          </tr>
        </thead>

        <tbody>
          {submittedRequests.map((request, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-3">
                {request.customerName}
              </td>

              <td className="border border-gray-300 p-3">
                {request.serviceType}
              </td>

              <td className="border border-gray-300 p-3">
                {request.description}
              </td>

              <td className="border border-gray-300 p-3">
                {request.submittedBy}
            </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </div>
)}
      </div>
    </main>
  );
}
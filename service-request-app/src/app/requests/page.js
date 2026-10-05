"use client";

import { useState } from "react";

export default function ServiceRequestPage() {
  const [customerName, setCustomerName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [submittedRequests, setSubmittedRequests] = useState([]);

const handleSubmit = (event) => {
  event.preventDefault();

  const newRequest = {
    customerName: customerName,
    serviceType: serviceType,
    description: description,
  };

  setSubmittedRequests([...submittedRequests, newRequest]);

  setCustomerName("");
  setServiceType("");
  setDescription("");
};

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Service Request
        </h1>

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

    <div className="space-y-4">
      {submittedRequests.map((request, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-md p-4"
        >
          <h3 className="font-bold text-lg mb-2">
            Request #{index + 1}
          </h3>

          <p className="mb-2">
            <strong>Customer:</strong> {request.customerName}
          </p>

          <p className="mb-2">
            <strong>Service:</strong> {request.serviceType}
          </p>

          <p>
            <strong>Description:</strong> {request.description}
          </p>
        </div>
      ))}
      </div>
    </div>
)}
      </div>
    </main>
  );
}
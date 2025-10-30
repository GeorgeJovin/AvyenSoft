'use client';

const Clients = () => {
  const clients = [
    'American Airlines',
    'Microsoft',
    'AMEX',
    'Ford',
    'Deloitte',
    'Boeing',
    'Coca-Cola',
    'IBM',
    'Oracle',
    'SAP',
    'Cisco',
    'Intel',
    'HP',
    'Dell',
    'Adobe',
    'VMware',
    'Salesforce',
    'ServiceNow',
    'Workday',
    'Tesla',
    'Amazon',
    'Google',
    'Facebook',
    'Apple',
    'Netflix',
    'Uber',
    'Airbnb',
    'PayPal',
    'Visa',
    'Mastercard',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to serve Fortune 500 companies and innovative startups
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:bg-[#5e6fb5]/5 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
            >
              <p className="text-gray-700 font-semibold text-center">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

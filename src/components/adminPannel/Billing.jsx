import React, { useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import info from '../../assets/info-circle.png';
import trash from '../../assets/trash.png'
import docc from '../../assets/document.png'

const Billing = () => {
    const [selectedPlan, setSelectedPlan] = useState(1);


    const billingData = [
        {
          no: '01',
          invoice: 'Invoice #231',
          date: '23 Dec 2024',
          amount: '$234.99',
          plan: 'Golden plan',
          status: 'Success',
        },
        {
          no: '02',
          invoice: 'Invoice #232',
          date: '23 Dec 2024',
          amount: '$234.99',
          plan: 'Silver plan',
          status: 'Success',
        },
      ];



    const plans = [
        {
            name: "Starter Plan",
            price: "Free",
            discount: "40% off",
            description: "Basic features for up to 10 users",
            features: [
                "Access to basic features",
                "Basic reporting and analytics",
                "1GB storage space",
                "Up to 10 individual users",
                "Basic chat and email support",
            ],
            button: "Start for free",
        },
        {
            name: "Silver Plan",
            price: "₹2999",
            discount: "45% ",
            description: "Unlimited users",
            features: [
                "Access to basic features",
                "Basic reporting and analytics",
                "1GB storage space",
                "Up to 10 individual users",
                "Basic chat and email support",
            ],
            button: "Subscribe",
        },
        {
            name: "Golden Plan",
            price: "₹4999",
            discount: "40% ",
            description: "Unlimited users",
            features: [
                "Access to basic features",
                "Basic reporting and analytics",
                "1GB storage space",
                "Up to 10 individual users",
                "Basic chat and email support",
            ],
            button: "Subscribe",
        },
    ];

    const handleCardClick = (index) => {
        setSelectedPlan(index);
    };

    return (
        <>
            <div className="flex flex-col gap-y-2 pl-8  items-center lg:items-start">
                <span className="text-[26px] xl:text-[20px] font-customBold">Billings</span>
                <span className="text-[#757575] text-sm font-customBold3">
                    Lorem ipsum dolor sit amet, consectetur billing services
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-8  sm:px-24 md:px-20  lg:px-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') handleCardClick(index);
                        }}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleCardClick(index)}
                        className={`border border-gray-400 rounded-2xl p-6 w-full cursor-pointer ${selectedPlan === index
                            ? "bg-[#022213] text-white"
                            : "bg-white text-black"
                            }`}
                    >
                        <div className="flex justify-start gap-x-2 items-center mb-3">
                            <h2 className="text-sub-heading2 xlx:text-xl font-bold">{plan.name}</h2>
                            {index !== 0 && (
                                <span className="bg-liteGreen text-white text-xs px-2 py-1 rounded-full font-medium">
                                    {plan.discount}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-row gap-x-1">
                            <span className="text-[40px] font-2xl xl:font-customBold flex flex-row">{plan.price}</span>
                            {index !== 0 && (
                                <span
                                    className={`flex font-customBold flex-col justify-center items-start text-[13px] mt-2 ${selectedPlan === index ? 'text-[#E5E5E5]' : 'text-[#737373]'}`}
                                >
                                    <span>Per user</span>
                                    <span className="-mt-1">Per month</span>
                                </span>
                            )}
                        </div>

                        <span className="h-14">
                            <p className={`font-medium text-smallHead xlx:text-sm ${selectedPlan === index ? 'text-[#E5E5E5]' : 'text-[#737373]'} `}>
                                {plan.description}
                            </p>
                        </span>

                        <div className="mb-4 h-48 mt-4">
                            <h3
                                className={`font-semibold ${selectedPlan === index ? "text-white" : "text-black"} `}
                            >
                                FEATURES
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                        <VscVerifiedFilled
                                            className={`${(index === 0 && idx > 2) || (index === 1 && idx > 3)
                                                ? "text-gray-400"
                                                : "text-liteGreen"
                                                }`}
                                            size={22}
                                        />
                                        <span
                                            className={`text-smallHead xlx:text-sm font-customBold ${selectedPlan === index ? "text-[#E5E5E5]" : "text-[#737373]"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {index > 0 ? (
                            <button
                                className={`w-full ${selectedPlan === index
                                    ? "bg-liteGreen hover:bg-white hover:text-black"
                                    : "bg-[#022213] text-white"
                                    } hover:bg-[#72A10F] transition duration-300 my-4 mt-10 py-2 rounded-md`}
                            >
                                {plan.button}
                            </button>
                        ) : (
                            <div className="flex items-start mt-10 py-4 w-full lg:max-w-md mx-auto border border-[#CC0000] bg-red-100 text-red-700 rounded-lg">
                                <img src={info} alt="" className="pl-2 pt-0.5" />
                                <div className="ml-1">
                                    <h4 className="text-[10px] xlx:text-[11px] font-bold">Free Plan Almost Expired</h4>
                                    <p className="text-[8px] xlx:text-[9px]">
                                        Your free plan is almost expired. Please renew.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                
            </div>

<div cla>

</div>

<div className="p-6 rounded-md shadow-md w-full">
  <h2 className="text-lg font-semibold mb-4">Billing history</h2>
  <div className="overflow-x-auto">
    {/* Horizontal scrolling wrapper */}
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-white text-[#757575]">
          <th className="px-4 py-2 text-left text-sm font-heavyBold whitespace-nowrap">No</th>
          <th className="px-4 py-2 text-left text-sm font-heavyBold whitespace-nowrap">Invoices</th>
          <th className="px-4 py-2 text-left text-sm font-heavyBold whitespace-nowrap">Date</th>
          <th className="px-4 py-2 text-left text-sm font-heavyBold whitespace-nowrap">Amount</th>
          <th className="px-4 py-2 text-left text-sm font-heavyBold whitespace-nowrap">Plan</th>
          <th className="px-4 py-2 text-left text-sm font-heavyBold whitespace-nowrap">Status</th>
          <th className="px-4 py-2 text-left text-sm font-heavyBold whitespace-nowrap">Action</th>
        </tr>
      </thead>
      <tbody>
        {billingData.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50 font-customBold">
            <td className="px-4 py-2 text-sm whitespace-nowrap">{item.no}</td>
            <td className="px-4 py-2 text-sm whitespace-nowrap">{item.invoice}</td>
            <td className="px-4 py-2 text-sm whitespace-nowrap">{item.date}</td>
            <td className="px-4 py-2 text-sm whitespace-nowrap">{item.amount}</td>
            <td className="px-4 py-2 text-sm whitespace-nowrap">{item.plan}</td>
            <td className="px-4 py-2 text-sm whitespace-nowrap">
              <span className="text-[#1BCC00] bg-[#1BCC0024] px-2 py-1 rounded-full text-smallHead font-medium">
                {item.status}
              </span>
            </td>
            <td className="px-4 py-2 text-sm flex items-center space-x-2 whitespace-nowrap">
              <button className="text-blue-600 hover:text-blue-800">
                <img src={docc} alt="document" className="w-[18px] h-[18px]" />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <img src={trash} alt="trash" className="w-[18px] h-[18px]" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


        </>
    );
};

export default Billing;

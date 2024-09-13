// const steps = ["Login", "Cart", "Shipping", "Payment"];

// const CheckoutIndicator = ({ currentStep }: { currentStep: number }) => {
//   return (
//     <div className="flex justify-between min-w-[500px] items-center mb-8">
//       {steps.map((step, index) => (
//         <div key={index} className="flex items-center">
//           <div
//             className={`w-8 h-8 flex items-center justify-center rounded-full ${
//               index <= currentStep
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-300 text-gray-600"
//             }`}
//           >
//             {index + 1}
//           </div>
//           {index < steps.length  && (
//             <div
//               className={`flex-grow h-1 w-full ${
//                 index < currentStep ? "bg-blue-500" : "bg-gray-300"
//               }`}
//             ></div>
//            )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CheckoutIndicator;

const steps = ["Login", "Cart", "Shipping", "Payment"];

const CheckoutIndicator = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="relative flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center w-full">
          <div
            className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full ${
              index <= currentStep
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className="absolute top-1/2 left-0 right-0 h-1">
              <div
                className={`absolute top-0 left-0 h-full ${
                  index < currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
                style={{ width: "calc(100% / 4 * (3 - " + index + "))" }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutIndicator;

import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
const OtpProcess= () => {
   const [otp, setOtp] = useState('');
   return (
       <div>
           <h3>Enter OTP</h3>
           <OtpInput
               value={otp}
               onChange={setOtp}
               numInputs={6}
               separator={<span>-</span>}
               inputStyle={{
                   width: '40px',
                   height: '40px',
                   margin: '5px',
                   textAlign: 'center',
                   border: '1px solid #ccc',
                   borderRadius: '4px',
               }}
           />
       </div>
   );
};
export default OtpProcess;
import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';

function Donation() {
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    console.log(`Donated: ${amount}`);
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      <Form layout="vertical">
        <Form.Item label="Amount">
          <Input 
            placeholder="Enter amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </Form.Item>
        <Button type="primary" onClick={handleDonate}>
          Donate
        </Button>
      </Form>
    </div>
  );
}

export default Donation;

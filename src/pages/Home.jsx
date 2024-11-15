import React from 'react';

function Home() {
  return (
    <div>
      <div>
      <h1>Welcome to Our Charity Platform</h1>
      <h2>Mission</h2>
      <p>Support developers by donating bitcoin to fuel innovation and creativity</p>
      </div>
      <div>
        <p>Navigate to the <strong>Charities</strong> page to see available charities or visit the{' '}
        <strong>Donation</strong> page to make a contribution.
        </p>
        <h2>Donate Now</h2>
        <p>
          Your contribution can make a significant impact.
          By donating Bitcoin, you are directly supporting talented developers
          who are creating innovative solutions and driving progress in technology.
          Every donation big or small, help fund projects, resources, and tools that 
          empower developers to bring their ideas to life. 
        </p>
      </div>
      <div>
      <p>
        <strong>
          Join us in making a difference! 
          Click the button below to donate now and help shape the future of development. 
          Thank you for your support!
        </strong>
        </p>
      </div>
      <div>
        <button>Donate</button>
      </div>
    </div>
  );
}

export default Home;

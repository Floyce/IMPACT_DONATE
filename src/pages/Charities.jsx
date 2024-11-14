import React from 'react';
import { Card, Col, Row } from 'antd';

function Charities() {
  const charities = [
    { id: 1, name: 'Charity A', description: 'Helping the community.' },
    { id: 2, name: 'Charity B', description: 'Supporting education.' },
  ];

  return (
    <div>
      <h2>Charities</h2>
      <Row gutter={16}>
        {charities.map((charity) => (
          <Col key={charity.id} span={8}>
            <Card title={charity.name} bordered={false}>
              {charity.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Charities;

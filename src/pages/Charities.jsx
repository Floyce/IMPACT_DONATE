
import React from 'react';
import { Card, Button, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const developers = [
  {
    id: 1,
    name: 'Alice Johnson',
    project: 'Open-source AI model for education',
  },
  {
    id: 2,
    name: 'Brian Smith',
    project: 'Decentralized storage for developers',
  },
  {
    id: 3,
    name: 'Cynthia Lee',
    project: 'Blockchain-based healthcare solution',
  },
];

const Charities = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f8f8f8' }}>
      <Title level={2} style={{ textAlign: 'center', color: '#4a4a4a' }}>
        Charities
      </Title>
      <Paragraph style={{ textAlign: 'center', color: '#6c757d' }}>
        Explore projects by talented developers and contribute to their journey.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {developers.map((developer) => (
          <Col xs={24} sm={12} md={8} key={developer.id}>
            <Card
              title={developer.name}
              bordered={false}
              style={{
                borderRadius: '8px',
                background: '#ffffff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Paragraph>{developer.project}</Paragraph>
              <Button
                type="primary"
                href="/donation"
                style={{ backgroundColor: '#d4f674', borderColor: '#d4f674' }}
              >
                Donate
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Charities;

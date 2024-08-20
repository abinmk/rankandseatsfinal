import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import axiosInstance from '../utils/axiosInstance';

const apiUrl = import.meta.env.VITE_API_URL;

const CardsUpdate = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axiosInstance.get(`${apiUrl}/admin-data/cards`);
        setCards(data.cards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, []);

  const handleChange = (index, field, value) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = value;
    setCards(updatedCards);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post(`${apiUrl}/admin-data/cards/update`, { cards });
      alert('Cards updated successfully!');
    } catch (error) {
      console.error('Error updating cards:', error);
    }
  };

  const handleAddCard = () => {
    setCards([
      ...cards,
      {
        title: '',
        text1: '',
        icon1: '',
        color1: '',
        color2: '',
        text2: '',
      },
    ]);
  };

  return (
    <Container>
      <Card className="custom-card mb-3">
        <Card.Header>
          <Card.Title>Update Cards</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleUpdate}>
            {cards.map((card, index) => (
              <div key={index}>
                <Row>
                  <Col>
                    <Form.Group controlId={`cardTitle-${index}`}>
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={card.title}
                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`cardText1-${index}`}>
                      <Form.Label>Text 1</Form.Label>
                      <Form.Control
                        type="text"
                        value={card.text1}
                        onChange={(e) => handleChange(index, 'text1', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`cardIcon1-${index}`}>
                      <Form.Label>Icon</Form.Label>
                      <Form.Control
                        type="text"
                        value={card.icon1}
                        onChange={(e) => handleChange(index, 'icon1', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`cardColor1-${index}`}>
                      <Form.Label>Color 1</Form.Label>
                      <Form.Control
                        type="text"
                        value={card.color1}
                        onChange={(e) => handleChange(index, 'color1', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`cardColor2-${index}`}>
                      <Form.Label>Color 2</Form.Label>
                      <Form.Control
                        type="text"
                        value={card.color2}
                        onChange={(e) => handleChange(index, 'color2', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`cardText2-${index}`}>
                      <Form.Label>Text 2</Form.Label>
                      <Form.Control
                        type="text"
                        value={card.text2}
                        onChange={(e) => handleChange(index, 'text2', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
              </div>
            ))}
            <Button variant="primary" type="submit">
              Update Cards
            </Button>
            <Button variant="secondary" className="ms-3" onClick={handleAddCard}>
              Add New Card
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardsUpdate;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Card, Container, Alert, Spinner, OverlayTrigger, Tooltip } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor
import { FaSave, FaInfoCircle } from 'react-icons/fa';

const apiUrl = import.meta.env.VITE_API_URL;

const AdminInformationAlert = () => {
  const [alertText, setAlertText] = useState("");
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchAlert = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/admin-data/get-information-alert`);
        if (data) {
          setAlertText(data.text);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Information Alert:', error);
        setShowError(true);
        setLoading(false);
      }
    };
    fetchAlert();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/admin-data/post-information-alert`, { text: alertText });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error updating Information Alert:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      // This will enable pasting of HTML content as-is
      matchVisual: false,
    }
  };

  return (
    <Container>
      <Card className="custom-card mb-3">
        <Card.Header className="d-flex align-items-center">
          <FaInfoCircle size={20} className="me-2" />
          <Card.Title>Update Information Alert</Card.Title>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <Form onSubmit={handleUpdate}>
              {showSuccess && <Alert variant="success">Information Alert updated successfully!</Alert>}
              {showError && <Alert variant="danger">There was an error updating the Information Alert.</Alert>}

              <Form.Group controlId="alertText">
                <Form.Label>
                  Information Alert Text{' '}
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Use this editor to format the alert message</Tooltip>}
                  >
                    <FaInfoCircle />
                  </OverlayTrigger>
                </Form.Label>
                <ReactQuill
                  theme="snow"
                  value={alertText}
                  onChange={setAlertText}
                  modules={modules}
                  formats={[
                    'header', 'font', 'size',
                    'bold', 'italic', 'underline', 'strike', 'blockquote',
                    'list', 'bullet',
                    'link', 'image'
                  ]}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="mt-3">
                <FaSave className="me-2" /> Update Alert
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminInformationAlert;

// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import axiosInstance from '../../../utils/axiosInstance';


// const UserProfile = () => {
//   const [show, setShow] = useState(false); // State to manage modal visibility
//   const [profileData, setProfileData] = useState({
//     name: '',
//     email: '',
//     mobileNumber: '',
//     state: '',
//     counseling: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => {
//     fetchProfileData(); // Fetch profile data when the modal is shown
//     setShow(true);
//   };

//   const fetchProfileData = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axiosInstance.get('/profile'); // Adjust the endpoint based on your API
//       setProfileData(data);
//     } catch (error) {
//       console.error('Error fetching profile data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({ ...profileData, [name]: value });
//   };

//   const handleSave = async () => {
//     setLoading(true);
//     try {
//       await axiosInstance.put('/profile', profileData); // Adjust the endpoint based on your API
//       alert('Profile updated successfully!');
//       handleClose();
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('Failed to update profile. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Trigger to open the modal */}
//       <Dropdown.Item as="li" className="border-0" onClick={handleShow}>
//         <i className="fs-13 me-2 bx bx-user"></i>Profile
//       </Dropdown.Item>

//       {/* Modal for profile editing */}
//      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Profile</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formName">
//               <Form.Label>Name2</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={profileData.name}
//                 readOnly // Make the name field non-editable
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={profileData.email}
//                 onChange={handleChange}
//                 disabled
//               />
//             </Form.Group>
//             <Form.Group controlId="formMobile">
//               <Form.Label>Mobile Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="mobileNumber"
//                 value={profileData.mobileNumber}
//                 readOnly // Make the mobile number field non-editable
//               />
//             </Form.Group>
//             <Form.Group controlId="formState">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="state"
//                 value={profileData.state}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCounseling">
//               <Form.Label>Counseling</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="counseling"
//                 value={profileData.counseling}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formPreferredCounseling">
//               <Form.Label>Preferred Counseling</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="preferredCounseling"
//                 value={profileData.preferredCounseling}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formSubscription">
//               <Form.Label>Subscription Details</Form.Label>
//               {renderSubscriptionDetails()} {/* Show subscription status based on paymentStatus */}
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSave} disabled={loading}>
//             {loading ? 'Saving...' : 'Save Changes'}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default UserProfile;

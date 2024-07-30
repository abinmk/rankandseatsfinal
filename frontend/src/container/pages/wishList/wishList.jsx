import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

const Wishlist = ({ username }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/wishlist?username=${username}`);
      setWishlist(response.data.wishlist.items);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
    setLoading(false);
  };

  const removeFromWishlist = async (allotmentId) => {
    try {
      await axios.post('/wishlist/remove', { username, allotmentId });
      fetchWishlist();
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Institute</th>
            <th>Course</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.allotment.allottedInstitute}</td>
              <td>{item.allotment.course}</td>
              <td>{item.allotment.allottedCategory}</td>
              <td>
                <Button variant="danger" onClick={() => removeFromWishlist(item.allotment._id)}>
                  <FaHeart />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;

import React, { useState } from 'react';
import { Accordion, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilterSection.scss';

const AllotmentsFilter = ({ filters, setFilters }) => {
  const [stateFilter, setStateFilter] = useState(filters.state || '');
  const [instituteFilter, setInstituteFilter] = useState(filters.institute || '');
  const [minRank, setMinRank] = useState(filters.minRank || 0);
  const [maxRank, setMaxRank] = useState(filters.maxRank || 100);
  const [minBeds, setMinBeds] = useState(filters.minBeds || 0);
  const [maxBeds, setMaxBeds] = useState(filters.maxBeds || 100);
  const [quotaFilter, setQuotaFilter] = useState(filters.quota || '');
  const [courseFilter, setCourseFilter] = useState(filters.course || '');
  const [courseTypeFilter, setCourseTypeFilter] = useState(filters.courseType || '');
  const [courseCategoryFilter, setCourseCategoryFilter] = useState(filters.courseCategory || '');
  const [degreeTypeFilter, setDegreeTypeFilter] = useState(filters.degreeType || '');
  const [courseFeesFilter, setCourseFeesFilter] = useState(filters.courseFees || '');
  const [yearFilter, setYearFilter] = useState(filters.year || '');
  const [roundFilter, setRoundFilter] = useState(filters.round || '');
  const [categoryFilter, setCategoryFilter] = useState(filters.category || '');
  const [bondFilter, setBondFilter] = useState(filters.bond || '');
  const [bondPenaltyFilter, setBondPenaltyFilter] = useState(filters.bondPenalty || '');
  const [bedsFilter, setBedsFilter] = useState(filters.beds || '');
  const [rankFilter, setRankFilter] = useState(filters.rank || '');

  const applyFilters = () => {
    setFilters({
      state: stateFilter,
      institute: instituteFilter,
      minRank,
      maxRank,
      minBeds,
      maxBeds,
      quota: quotaFilter,
      course: courseFilter,
      courseType: courseTypeFilter,
      courseCategory: courseCategoryFilter,
      degreeType: degreeTypeFilter,
      courseFees: courseFeesFilter,
      year: yearFilter,
      round: roundFilter,
      category: categoryFilter,
      bond: bondFilter,
      bondPenalty: bondPenaltyFilter,
      beds: bedsFilter,
      rank: rankFilter
    });
  };

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          State
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control type="text" value={stateFilter} onChange={(e) => setStateFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Institute
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Form.Group>
              <Form.Label>Institute Name</Form.Label>
              <Form.Control type="text" value={instituteFilter} onChange={(e) => setInstituteFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Rank
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Form.Group>
              <Form.Label>Min Rank</Form.Label>
              <Form.Control type="number" value={minRank} onChange={(e) => setMinRank(Number(e.target.value))} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Max Rank</Form.Label>
              <Form.Control type="number" value={maxRank} onChange={(e) => setMaxRank(Number(e.target.value))} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          Beds
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <Form.Group>
              <Form.Label>Min Beds</Form.Label>
              <Form.Control type="number" value={minBeds} onChange={(e) => setMinBeds(Number(e.target.value))} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Max Beds</Form.Label>
              <Form.Control type="number" value={maxBeds} onChange={(e) => setMaxBeds(Number(e.target.value))} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4">
          Quota
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <Form.Group>
              <Form.Label>Quota</Form.Label>
              <Form.Control type="text" value={quotaFilter} onChange={(e) => setQuotaFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="5">
          Course
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" value={courseFilter} onChange={(e) => setCourseFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="6">
          Course Type
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            <Form.Group>
              <Form.Label>Course Type</Form.Label>
              <Form.Control type="text" value={courseTypeFilter} onChange={(e) => setCourseTypeFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="7">
          Course Category
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
          <Card.Body>
            <Form.Group>
              <Form.Label>Course Category</Form.Label>
              <Form.Control type="text" value={courseCategoryFilter} onChange={(e) => setCourseCategoryFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="8">
          Degree Type
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="8">
          <Card.Body>
            <Form.Group>
              <Form.Label>Degree Type</Form.Label>
              <Form.Control type="text" value={degreeTypeFilter} onChange={(e) => setDegreeTypeFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="9">
          Course Fees
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="9">
          <Card.Body>
            <Form.Group>
              <Form.Label>Course Fees</Form.Label>
              <Form.Control type="text" value={courseFeesFilter} onChange={(e) => setCourseFeesFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="10">
          Year
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="10">
          <Card.Body>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="11">
          Round
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="11">
          <Card.Body>
            <Form.Group>
              <Form.Label>Round</Form.Label>
              <Form.Control type="text" value={roundFilter} onChange={(e) => setRoundFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="12">
          Category
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="12">
          <Card.Body>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="13">
          Bond
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="13">
          <Card.Body>
            <Form.Group>
              <Form.Label>Bond</Form.Label>
              <Form.Control type="text" value={bondFilter} onChange={(e) => setBondFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="14">
          Bond Penalty
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="14">
          <Card.Body>
            <Form.Group>
              <Form.Label>Bond Penalty</Form.Label>
              <Form.Control type="text" value={bondPenaltyFilter} onChange={(e) => setBondPenaltyFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="15">
          Beds
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="15">
          <Card.Body>
            <Form.Group>
              <Form.Label>Beds</Form.Label>
              <Form.Control type="text" value={bedsFilter} onChange={(e) => setBedsFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="16">
          Rank
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="16">
          <Card.Body>
            <Form.Group>
              <Form.Label>Rank</Form.Label>
              <Form.Control type="text" value={rankFilter} onChange={(e) => setRankFilter(e.target.value)} />
            </Form.Group>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Button variant="primary" onClick={applyFilters}>Apply Filters</Button>
    </Accordion>
  );
};

export default AllotmentsFilter;

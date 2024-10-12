import React, { useState } from 'react';
import { Button, Container, Row, Col, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './notification.css'; 

const NotificationPage = () => {
    const navigate = useNavigate();

    
    const initialNotifications = [
        {
            id: 1,
            title: 'Task 1 Deadline',
            content: 'Project Alpha\'s final report is due in 24 hours. Ensure all sections are reviewed.',
            time: '2 hours ago',
            priority: 'Low',
        },
        {
            id: 2,
            title: 'Task 2 Reminder',
            content: 'Complete the team meeting notes and upload them to the project portal.',
            time: 'Oct 18, 2023',
            priority: 'Medium',
        },
        {
            id: 3,
            title: 'Task 3 Deadline',
            content: 'Submit the updated project proposal for Project Bravo.',
            time: 'Oct 15, 2023',
            priority: 'High',
        }
    ];

    const [notifications, setNotifications] = useState(initialNotifications);
    const [sortCriteria, setSortCriteria] = useState('Default');

    
    const deleteNotification = (id) => {
        const updatedNotifications = notifications.filter(notification => notification.id !== id);
        setNotifications(updatedNotifications);
    };

    
    const handleSort = () => {
        let sortedNotifications = [...notifications];
        if (sortCriteria === 'Priority') {
            
            const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
            sortedNotifications.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        } else {
            
            sortedNotifications.sort((a, b) => new Date(b.time) - new Date(a.time));
        }
        setNotifications(sortedNotifications);
    };

    
    const handleViewDetails = (taskId) => {
        navigate(`/task/${taskId}`); 
    };

    return (
        <Container>
          
            <Row className="my-4">
                <Col>
                    <div className="d-flex align-items-center">
                        <BsArrowLeft size={24} className="me-2" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }} />
                        <h2>Notifications</h2>
                    </div>
                    <p>Stay updated with the latest task deadlines and reminders.</p>
                </Col>
            </Row>

           
            <Row>
                <Col md={4}>
                    <DropdownButton
                        id="dropdown-sort"
                        title={`Sort by: ${sortCriteria}`}
                        className="custom-sort-dropdown" 
                    >
                        <Dropdown.Item onClick={() => setSortCriteria('Default')}>Default</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortCriteria('Priority')}>Priority</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col md={2}>
                    <Button
                        variant="primary"
                        className="apply-btn" 
                        onClick={handleSort}
                    >
                        Apply
                    </Button>
                </Col>
            </Row>

           
            <Row className="mt-4 notification-list">
                {notifications.length > 0 ? notifications.map((notification) => (
                    <Col key={notification.id} md={12} className="mb-3">
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title>{notification.title}</Card.Title>
                                        <Card.Text>{notification.content}</Card.Text>
                                        <Card.Text className="text-muted">Posted: {notification.time}</Card.Text>
                                        <Button 
                                            variant="outline-primary" 
                                            className="view-btn" 
                                            onClick={() => handleViewDetails(notification.id)}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                    <Button variant="danger" onClick={() => deleteNotification(notification.id)}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )) : (
                    <Col>
                        <p>No notifications found.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default NotificationPage;

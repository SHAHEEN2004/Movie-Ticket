import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import './MTabs.css'
const MTabs = () => {
    return (
        <div className="sum">
            <Container className='py-4'>
                <Row className='justify-content-center'>
                    <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
                        <Tab eventKey="tab-1" title="SUMMERY">
<br />
<br />
                            <h1>SYNOPSIS</h1>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula eros sit amet est tincidunt aliquet. Fusce laoreet ligula ac ultrices eleifend. Donec hendrerit fringilla odio, ut feugiat mi convallis nec. Fusce elit ex, blandit vitae mattis sit amet, iaculis ac elit. Ut diam mauris, viverra sit amet dictum vel, aliquam ac quam. Ut mi nisl, fringilla sit amet erat et, convallis porttitor ligula. Sed auctor, orci id luctus venenatis, dui dolor euismod risus, et pharetra orci lectus quis sapien. Duis blandit ipsum ac consectetur scelerisque.

                                CAST
                            </p>
                        </Tab>
                        <Tab eventKey="tab-2" title="USER REVIEW (147)">

                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    )
}
export default MTabs;
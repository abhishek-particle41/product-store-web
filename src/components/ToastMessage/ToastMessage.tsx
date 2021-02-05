import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ToastMessage() {
    const [show, setShow] = useState(false);

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        Added to cart!
                    </Toast.Header>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={() => setShow(true)}>Show Toast</Button>
            </Col>
        </Row>
    );
}

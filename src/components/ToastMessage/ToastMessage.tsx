import React from "react";
import Toast from 'react-bootstrap/Toast'
import './style.scss'

export default function ToastMessage() {
    return (
        <div
            className="toast-message"
        >
            <Toast
                delay={5000}
                autohide={true}
                style={{
                    // position: 'absolute',
                    top: 0,
                    right: 0,
                }}
            >
                <Toast.Header closeButton={false}>
                    <strong className="mr-auto">Added to cart</strong>
                </Toast.Header>
            </Toast>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage(props) {
    return (
        <main style={{
            color: "white",
            textAlign: "center"
        }}>
            <h1>Error: Page Not Found</h1>
            <p>
                The page you were trying to access does not exist. Click <Link to="/" style={{
                    color: "red"
                }}>Here</Link> to go home.
            </p>
        </main>
    )
}
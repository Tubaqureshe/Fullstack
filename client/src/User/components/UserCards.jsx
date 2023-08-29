import React, { useState } from 'react';

export default function UserCards({ image, name }) {

    return (
        
        <><style>
            {`
            /* UserCards.css */

            .card {
                transition: transform 0.3s, box-shadow 0.2s;
            }
            
            .card:hover {
                transform: scale(1.05);
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
            }
            
            .card-img-top {
                height: 500px;
                object-fit: cover;
            }
            
            `}
        </style>
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="text-center">
                    <img
                        src={image}
                        className="card-img-top"
                        style={{ height: '500px', objectFit: 'cover' }}
                        alt={name}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

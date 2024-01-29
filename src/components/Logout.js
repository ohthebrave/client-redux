import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const adminLogout = async () => {
            const token = localStorage.getItem('token');
            console.log('===>' + token);
            try {
                const res = await fetch('https://online-market-msht.onrender.com/logout', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'Cache-Control': 'no-cache', // Prevent caching
                        'Pragma': 'no-cache',
                    },
                });
                const data = await res.json();
                if (res.status === 201) {
                    setShow(true);
                    await localStorage.removeItem('token');
                    window.alert('Successfully Logout');
                    navigate('/login', { replace: true });
                    window.location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        };

        const confirmBox = window.confirm("Do you really want to Logout?");
        const handleLogout = async () => {
            if (confirmBox === true) {
                await adminLogout();
                localStorage.removeItem('token');
                navigate('/', { replace: true });
            } else {
                navigate('/');
            }
        };

        handleLogout();
    }, [navigate]); // Include navigate in the dependency array

    return (
        <div>
            <h1>{show ? 'Logout Successfully!' : 'processing...'}</h1>
        </div>
    );
};

export default Logout;

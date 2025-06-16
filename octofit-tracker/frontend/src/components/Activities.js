import React, { useEffect, useState } from 'react';

function Activities() {
    const [activities, setActivities] = useState([]);


    useEffect(() => {
        fetch('https://miniature-pancake-9jrw7p7g7w53p7-8000.app.github.dev/api/activity/')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title mb-4">Activities</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Duration (min)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map(activity => (
                            <tr key={activity.id}>
                                <td>{activity.activity_type}</td>
                                <td>{activity.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Activities;

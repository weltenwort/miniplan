import React from 'react';


const List = ({ activities = [] }) => (
  <div className="o-panel o-panel--nav-top u-window-box--medium">
    {activities.map((activity) => (
      <div className="c-card" key={activity.id}>
        <div className="c-card__content">
          {activity.title}
        </div>
      </div>
    ))}
  </div>
);


export default List;

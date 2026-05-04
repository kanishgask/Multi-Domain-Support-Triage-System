import React, { useEffect, useState } from "react";
import { getTickets } from "../api";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const res = await getTickets();
    setTickets(res.data);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {tickets.map((t) => (
        <div key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <p>Category: {t.category}</p>
          <p>Priority: {t.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

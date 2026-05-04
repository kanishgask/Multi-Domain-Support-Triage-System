exports.classifyTicket = (text) => {
  text = text.toLowerCase();

  if (text.includes("error") || text.includes("bug")) {
    return { category: "Technical", priority: "High" };
  }

  if (text.includes("payment") || text.includes("refund")) {
    return { category: "Billing", priority: "Medium" };
  }

  if (text.includes("price") || text.includes("plan")) {
    return { category: "Sales", priority: "Low" };
  }

  return { category: "General", priority: "Low" };
};

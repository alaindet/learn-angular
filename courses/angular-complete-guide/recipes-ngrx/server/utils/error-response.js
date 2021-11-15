const errorResponse = (message, data = null) => {
  return {
    error: true,
    message,
    data,
  };
};

module.exports = errorResponse;

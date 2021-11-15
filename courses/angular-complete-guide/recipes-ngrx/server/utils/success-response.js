const successResponse = (message, data) => {
  return {
    error: false,
    message,
    data,
  };
};

module.exports = successResponse;

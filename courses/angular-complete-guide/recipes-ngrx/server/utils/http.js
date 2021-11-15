const successResponse = (message, data) => {
  return {
    error: false,
    message,
    data,
  };
};

const errorResponse = (message, data = null) => {
  return {
    error: true,
    message,
    data,
  };
};

module.exports = {
  successResponse,
  errorResponse,
};

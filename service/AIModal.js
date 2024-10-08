// Dummy AI Chat Session
export const AIChatSession = {
  startChat: async ({ history }) => {
    // Simulated dummy response for any query
    const dummyResponse = {
      choices: [
        {
          text: "This is a dummy response for testing purposes. The actual response will be generated by the model.",
        },
      ],
    };

    // Simulate a network delay before returning the response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyResponse);
      }, 500); // Simulate network delay
    });
  },
};

// Example usage of the mocked AIChatSession
(async () => {
  const response = await AIChatSession.startChat({ history: [] });
  console.log(response);
})();

export const schema = {
  type: "object",
  properties: {
    platform: {
      type: "string",
      minLength: 1,
      errorMessage: "Please select a platform"
    },
    url: {
      type: "string",
      minLength: 1,
      errorMessage: "Please enter a username"
    }
  },
  required: ["platform", "url"]
};

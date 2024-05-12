export const schema = {
  type: "object",
  additionalProperties: false,
  required: ["username", "tags"] as const,
  properties: {
    username: {
      type: "string",
      "secure-string": true,
      minLength: 4,
      errorMessage: {
        type: "should be a string",
        format: "Please provide a valid username"
      }
    },
    firstName: {
      type: "string",
      "secure-string": true,
      errorMessage: {
        type: "should be a string",
        format: "Please provide a valid first name"
      },
      nullable: true
    },
    lastName: {
      type: "string",
      "secure-string": true,
      errorMessage: {
        type: "should be a string"
      },
      nullable: true
    },
    about: {
      type: "string",
      "secure-string": true,
      maxLength: 500,
      errorMessage: {
        maxLength: "The text is too long. Please limit it to 500 characters."
      },
      nullable: true
    },
    country: {
      type: "string",
      "secure-string": true,
      nullable: true
    },
    tags: {
      type: "array",
      minItems: 1,
      errorMessage: {
        minItems: "Please select at one thing that you are interested in."
      },
      items: {
        type: "number"
      }
    }
  }
};

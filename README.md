# Token Replace Script for B2C Policies

This script is a handy helper that replaces tokens in B2C policies with actual values, and vice versa.

## Usage

1. Update the configuration in the script as needed.
2. Run the script with `node b2c-token-replace.js`

## Configuration

1. Update your B2C policies to use the tokens. See the example policy in this repository.
2. Set the `filePaths` to the policy files that you want to perform token replace on.
3. Set the values for `tenantName`, `b2cExtensionsAppClientId`, `b2cExtensionsAppObjectId`, `proxyIdentityExperienceFrameworkClientId`, `identityExperienceFrameworkClientId`, and `applicationInsightsInstrumentationKey`.
4. Set the `apply` flag to `true` to replace the tokens with the values, or `false` to replace the values with the tokens.

## Prerequisites

Node.js must be installed on your machine.

## Contributing
Feel free to make contributions to the project.
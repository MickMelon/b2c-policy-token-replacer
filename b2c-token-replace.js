/**
 * This is a helper script to automatically replace the tokens in the policies with
 * actual values and vice versa.
 * 
 * Check and update the configuration below where appropriate.
 * 
 * Run with: `node b2c-token-replace.js`
 */

const fs = require('fs');

/**
 * Configuration
 */

// Set this to the policy file that you want to perform token replace on
const filePaths = [
	"./custom-policies/SignUpOrSignin.xml",
	"./custom-policies/TrustFrameworkExtensions.xml",
	"./custom-policies/TrustFrameworkLocalization.xml",
	"./custom-policies/TrustFrameworkBase.xml",
];

// Set these to the values you want them to be
const tenantName = "";
const b2cExtensionsAppClientId = "";
const b2cExtensionsAppObjectId = "";
const proxyIdentityExperienceFrameworkClientId = "";
const identityExperienceFrameworkClientId = "";
const applicationInsightsInstrumentationKey = "";

// The tokens that get replaced with the above values
const tenantNameToken = "{{tenantName}}";
const b2cExtensionsAppClientIdToken = "{{b2cExtensionsAppClientId}}";
const b2cExtensionsAppObjectIdToken = "{{b2cExtensionsAppObjectId}}";
const proxyIdentityExperienceFrameworkClientIdToken = "{{proxyIdentityExperienceFrameworkClientId}}";
const identityExperienceFrameworkClientIdToken = "{{identityExperienceFrameworkClientId}}";
const applicationInsightsInstrumentationKeyToken = "{{applicationInsightsInstrumentationKey}}";

// Apply/Revert
// Set this to true to replace the tokens with the values
// Set this to false to replace the values with the tokens
const apply = false;

/**
 * Execution
 */

// Required otherwise the replace method only replaces the first 
// occurrence of the string.
const getRegex = (str) => {
	return new RegExp(str, "g");
};

for (const filePath of filePaths) {
	console.log(`Reading file ${filePath}...`);

	let file = fs.readFileSync(filePath, "utf-8");

	if (apply) {
		console.log("Replacing tokens with the values...");
		
		file = file.replace(getRegex(tenantNameToken), tenantName);
		file = file.replace(getRegex(b2cExtensionsAppClientIdToken), b2cExtensionsAppClientId);
		file = file.replace(getRegex(b2cExtensionsAppObjectIdToken), b2cExtensionsAppObjectId);
		file = file.replace(getRegex(proxyIdentityExperienceFrameworkClientIdToken), proxyIdentityExperienceFrameworkClientId);
		file = file.replace(getRegex(identityExperienceFrameworkClientIdToken), identityExperienceFrameworkClientId);
		file = file.replace(getRegex(applicationInsightsInstrumentationKeyToken), applicationInsightsInstrumentationKey);
	} else {
		console.log("Replacing values with the tokens...");
		
		file = file.replace(getRegex(tenantName), tenantNameToken);
		file = file.replace(getRegex(b2cExtensionsAppClientId), b2cExtensionsAppClientIdToken);
		file = file.replace(getRegex(b2cExtensionsAppObjectId), b2cExtensionsAppObjectIdToken);
		file = file.replace(getRegex(proxyIdentityExperienceFrameworkClientId), proxyIdentityExperienceFrameworkClientIdToken);
		file = file.replace(getRegex(identityExperienceFrameworkClientId), identityExperienceFrameworkClientIdToken);
		file = file.replace(getRegex(applicationInsightsInstrumentationKey), applicationInsightsInstrumentationKeyToken);
	}

	fs.writeFile(filePath, file, "utf8", () => console.log(`${filePath} done!`));
}
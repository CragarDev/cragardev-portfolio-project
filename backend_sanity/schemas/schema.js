// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import testimonialSchema from "./testimonialSchema";
import aboutSchema from "./aboutSchema";
import brandsSchema from "./brandsSchema";
import experienceSchema from "./experienceSchema";
import skillsSchema from "./skillsSchema";
import contactSchema from "./contactSchema";
import workExperienceSchema from "./workExperienceSchema";
import worksSchema from "./worksSchema";
import educationSchema from "./educationSchema";
import resumeSchema from "./resumeSchema";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([testimonialSchema, aboutSchema, brandsSchema, experienceSchema, skillsSchema, contactSchema, workExperienceSchema, worksSchema, educationSchema, resumeSchema])
});

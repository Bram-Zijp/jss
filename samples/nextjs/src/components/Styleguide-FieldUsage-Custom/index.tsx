import { ComponentRendering, Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import StyleguideSpecimen from '../Styleguide-Specimen';

interface StyleguideFieldUsageCustomProps {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    customIntField: Field<string>;
  },
  rendering: ComponentRendering
}

/**
 * Demonstrates usage of a custom content field type within JSS.
 * See /sitecore/definitions/components/Styleguide-FieldUsage-Custom.sitecore.js
 * for the definition of the structure of the custom field. This code is just for display.
 */
const StyleguideFieldUsageCustom: React.FC<StyleguideFieldUsageCustomProps> = (props) => (
  <StyleguideSpecimen {...props} e2eId="styleguide-fieldusage-custom">
    {/* Because the integer field is essentially text, we can render it with the Text helper */}
    <Text field={props.fields.customIntField} />
  </StyleguideSpecimen>
);

export default StyleguideFieldUsageCustom;

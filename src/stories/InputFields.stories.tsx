import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputField, { InputFieldType } from './InputField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Development/Input fields',
  component: InputField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    labelTextColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputField>;


export const Fields = ({
    value,
    placeholder,
    disabled,
    onChange,
    label,
    labelTextColor,
    type}: InputFieldType) => 
    <InputField value={value} placeholder={placeholder} disabled={disabled} label={label} type={type} labelTextColor={labelTextColor} onChange={onChange} />; 

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fields.args = {
labelTextColor: 'maroon',
placeholder: 'input of storybook',
type:"text",
value:'Hello'
}; // these are the by default values that come.

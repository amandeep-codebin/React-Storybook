import React from "react";
import ButtonDemo from "./ButtonDemo";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'ButtonDemo',
    component: ButtonDemo,
    argTypes:{
        variant:{
            options:['Primary', 'Secondary', 'Success', 'Danger'],
            control: {type:'checkbox'}
        }
    }
} as ComponentMeta<typeof ButtonDemo>;

const Template: ComponentStory<typeof ButtonDemo> = (args) => <ButtonDemo {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    variant: 'Primary',
    label: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'Secondary',
    label: 'Secondary'
}
export const Success = Template.bind({})
Success.args = {
    variant: 'Success',
    label: 'Success'
}
export const Danger = Template.bind({})
Danger.args = {
    variant: 'Danger',
    label: 'Danger'
}


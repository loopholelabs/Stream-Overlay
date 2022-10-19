import React from 'react'

import { BeRightBackScene } from './BeRightBackScene.jsx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Be Right BackScene',
  component: BeRightBackScene,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BeRightBackScene {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'BeRightBackScene',
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'BeRightBackScene',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'BeRightBackScene',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'BeRightBackScene',
// }

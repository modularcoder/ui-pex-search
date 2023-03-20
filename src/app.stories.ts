import { withDesign } from 'storybook-addon-designs'
import { Story, StoryFn, Meta } from '@storybook/vue3'
import app from './app.vue'


export default {
  title: 'App',
  component: app,
} as Meta<typeof app>

const AppTemplate: StoryFn<typeof app> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { app },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  template: `
    <app />
  `,
})

export const Default = AppTemplate.bind({})

import { WidgetDefinition } from '@site/src/types';
import { IconChecklist } from '@tabler/icons-react';

export const tdayTasksWidget: WidgetDefinition = {
  icon: IconChecklist,
  name: 'Tday Tasks',
  description: 'View, complete, add and edit your Tday tasks',
  path: '../../widgets/tday-tasks',
  configuration: {
    items: [
      {
        name: 'View',
        description: 'Which set of tasks the widget shows.',
        values: {
          type: 'select',
          options: ["Today's tasks", 'Scheduled tasks', 'Overdue tasks', 'Floater tasks'],
        },
        defaultValue: "Today's tasks",
      },
      {
        name: 'Sort by',
        description: 'How the tasks in the widget are ordered.',
        values: { type: 'select', options: ['Default', 'Due date', 'Priority'] },
        defaultValue: 'Default',
      },
      {
        name: 'Show complete button',
        description: 'Show the checkbox used to mark a task complete.',
        values: { type: 'boolean' },
        defaultValue: 'yes',
      },
      {
        name: 'Show quick-add input',
        description: 'Show the input used to add new tasks from the widget.',
        values: { type: 'boolean' },
        defaultValue: 'yes',
      },
    ],
  },
};

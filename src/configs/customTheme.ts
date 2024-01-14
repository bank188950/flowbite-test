import type { CustomFlowbiteTheme } from 'flowbite-react';
export const customTheme: CustomFlowbiteTheme = {
  button: {
    base: 'focus:!ring-0 dark:focus:!ring-0',
    color: {
      primary: 'bg-sky-500 hover:bg-yellow-600',
      secondary: 'bg-blue-500 hover:bg-blue-600',
      accent: 'bg-orange-500 hover:bg-orange-600',
      neutral: 'bg-gray-500 hover:bg-gray-600',
      info: 'bg-blue-500 hover:bg-blue-600',
      success: 'bg-green-500 hover:bg-green-600',
      warning: 'bg-yellow-500 hover:bg-yellow-600',
      error: 'bg-red-500 hover:bg-red-600',
      'base-1': 'bg-light-green hover:bg-gray-200',
      'base-2': 'bg-gray-300 hover:bg-gray-400',
      'base-3': 'bg-gray-500 hover:bg-gray-600',
    },
  },
};

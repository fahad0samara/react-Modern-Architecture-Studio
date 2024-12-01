import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/lib/store/useThemeStore';
import * as Switch from '@radix-ui/react-switch';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-gray-600" />
      <Switch.Root
        checked={isDark}
        onCheckedChange={toggleTheme}
        className={`w-11 h-6 rounded-full relative outline-none cursor-pointer ${
          isDark ? 'bg-gray-900' : 'bg-gray-200'
        }`}
      >
        <Switch.Thumb
          className={`block w-5 h-5 bg-white rounded-full transition-transform duration-100 transform ${
            isDark ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        />
      </Switch.Root>
      <Moon className="h-4 w-4 text-gray-600" />
    </div>
  );
}
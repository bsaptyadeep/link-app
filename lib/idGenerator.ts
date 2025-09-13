// Generate a unique ID for components
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

// Alternative: Generate a more readable ID with prefix
export const generateComponentId = (type: string): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 4);
  return `${type}-${timestamp}-${random}`;
};

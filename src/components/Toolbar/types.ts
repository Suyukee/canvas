import type { tool } from '@/shared/types';

export interface ToolbarProps {
	tool: tool;
	setTool: (tool: tool) => void;
}

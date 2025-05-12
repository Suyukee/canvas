import type { MouseEvent, RefObject } from 'react';
import type { tool } from '@/shared/types';

export type CanvasEventType = MouseEvent<HTMLCanvasElement>;

export interface CanvasProps {
	tool: tool;
	canvasRef: RefObject<HTMLCanvasElement | null>;
}

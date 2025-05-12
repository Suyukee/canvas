import { useState } from 'react';
import styles from '@/components/Canvas/Canvas.module.css';
import type { CanvasEventType, CanvasProps } from '@/components/Canvas/types';

export default function Canvas({ tool, canvasRef }: CanvasProps) {
	const [isDrawing, setIsDrawing] = useState(false);

	const startDraw = (e: CanvasEventType) => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		setIsDrawing(true);

		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		ctx.beginPath();
		ctx.moveTo(x, y);

		if (tool === 'brush') {
			ctx.strokeStyle = 'black';
			ctx.globalCompositeOperation = 'source-over';
		} else {
			ctx.strokeStyle = 'white';
			ctx.globalCompositeOperation = 'destination-out';
		}
	};

	const draw = (e: CanvasEventType) => {
		if (!isDrawing) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		ctx.lineTo(x, y);
		ctx.stroke();
	};

	const endDraw = () => {
		setIsDrawing(false);
	};

	return (
		<canvas
			className={styles.canvas}
			width="1280px"
			height="720px"
			ref={canvasRef}
			onMouseDown={startDraw}
			onMouseMove={draw}
			onMouseUp={endDraw}
			onMouseLeave={endDraw}
		/>
	);
}

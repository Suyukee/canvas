import { useEffect, useRef, useState } from 'react';
import Toolbar from '@/components/Toolbar';
import Canvas from '@/components/Canvas';
import type { tool } from '@/shared/types';

export default function App() {
	const [tool, setTool] = useState<tool>('brush');
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 5;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
	}, []);

	return (
		<main className="app">
			<Toolbar tool={tool} setTool={setTool} />
			<Canvas tool={tool} canvasRef={canvasRef} />
		</main>
	);
}

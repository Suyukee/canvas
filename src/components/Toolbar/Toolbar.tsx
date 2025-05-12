import styles from '@/components/Toolbar/Toolbar.module.css';
import type { ToolbarProps } from '@/components/Toolbar/types';

export default function Toolbar({ tool, setTool }: ToolbarProps) {
	return (
		<div className={styles.toolbar}>
			<button
				onClick={() => setTool('brush')}
				className={`${styles.button} ${tool === 'brush' && styles.active}`}
			>
				Кисть
			</button>

			<div className="line"></div>

			<button
				onClick={() => setTool('eraser')}
				className={`${styles.button} ${tool === 'eraser' && styles.active}`}
			>
				Ластик
			</button>
		</div>
	);
}

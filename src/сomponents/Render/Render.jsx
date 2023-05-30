import { Profiler } from 'react';

const Render = (props) => {
	const { name, children } = props;

	return (
		<Profiler
			id={name}
			onRender={(id, phase, actualDuration) => {
				console.log(`Компонент "${id}" отрисовался на фазе "${phase}" с длительность "${actualDuration}" ms `);
			}}>
			{children}
		</Profiler>
	);
};

export default Render;

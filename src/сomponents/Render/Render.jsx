import { Profiler } from 'react';

let counterRender = 0;

const Render = (props) => {
	const { name, children } = props;
	counterRender++;

	return (
		<Profiler
			id={name}
			onRender={(id, phase, actualDuration) => {
				console.log(
					`Компонент "${id}" отрисовался на фазе "${phase}" с длительность "${actualDuration}" ms счетчик рендера ${counterRender}`,
				);
			}}>
			{children}
		</Profiler>
	);
};

export default Render;

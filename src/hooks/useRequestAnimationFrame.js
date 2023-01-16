const useRequestAnimationFrame = (duration, callback) => {
	let animateId;
	let start = null;

	const startAnimate = () => {
		animateId = requestAnimationFrame(function animate(time) {
			if (!start) {
				start = time;
			}

			const progress = (time - start) / duration;

			callback(progress);

			if (progress < 1) {
				animateId = requestAnimationFrame(animate);
			}
		});
	};

	const cancelAnimate = () => {
		cancelAnimationFrame(animateId);
	};

	return [ startAnimate, cancelAnimate ];
};

export default useRequestAnimationFrame;

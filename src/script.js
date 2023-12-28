const snowFall = () => {
	let $container = document.querySelector('.snowfall');
	for (let i = 0; i < 200; i++) {
		let $div = document.createElement('div');
		$div.classList.add('snowflake');
		$container.appendChild($div)
	}
};

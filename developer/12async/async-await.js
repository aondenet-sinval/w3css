function executaSoma() {
	async function somar(){
			let aa;
			let ab = 5;
			aa = 11;
			return soma = await Promise.resolve(aa + ab);
			aa = 10;//Esse valor necessariamente veio depois da execução de soma.
	};
	somar().then(somado => {
			console.log(somado);
		   let pElem = document.createElement('code');
		   pElem.textContent = 'O resultado da soma com número definido após a instrução somar é: ' + somado;
		   document.body.appendChild(pElem);
	});	
}
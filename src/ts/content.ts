interface RosyPosition {
	powerOfTen:number;
	noun: string;
	prefix: string;
}

interface RosyNumber {
	number: number;
	noun: string;
	prefix: string;
	plusTenNoun: string;
	plusTenPrefix: string;
}


let positions:{[x:number]:RosyPosition} = {
	2:{
		powerOfTen:2,
		noun:'siyaya',
		prefix:'siya'
	},
	3:{
		powerOfTen:3,
		asNoun: 'dahasa',
		asPrefix: 'dahas'
	},
	5:{
		powerOfTen:5,
		asNoun:'lakshaya'
		asPrefix: 'laksha'
	},
	6:{
		powerOfTen:6,
		asNoun: 'miliyanaya'
		asPrefix: 'miliyana'
	}	
}

let numbers:{[x:number]:RosyNumber} = {
	1:{
		number:1,
		asNoun:'eka',
		asPrefix:'ek',
		
	}
}

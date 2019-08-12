import { RosyNumber, RosyPosition } from "./types";

export const positions:{[x:number]:RosyPosition} = {
	2:{
		noun:'siyaya',
		powerOfTen:2,
		prefix:'siya'
	},
	3:{
		noun:'dahasa',
		powerOfTen:3,
		prefix: 'dahas'
	},
	5:{
		noun: 'lakshaya',
		powerOfTen:5,
		prefix: 'laksha'
	},
	6:{
		noun:'miliyanaya',
		powerOfTen:6,
		prefix: 'miliyana'
	},
	7:{
		noun:'kotiya',
		powerOfTen:7,
		prefix:'koti'
	},
	9:{
		noun:'biliyanaya',
		powerOfTen: 9,
		prefix: 'biliyana'
	},
	12: {
		noun: 'triliyanaya',
		powerOfTen: 12,
		prefix:'triliyana'
	}
}

export const numbers:{[x:number]:RosyNumber} = {
	1:{
		noun:'eka',
		number:1,
		plusTenNoun:'ekolaha',
		plusTenPrefix:'ekolos',
		prefix:'ek',
		productTenNoun: 'dahaya',
		productTenPrefix: 'dasa'
	},
	2:{
		noun:'deka',
		number:2,
		plusTenNoun:'dolaha',
		plusTenPrefix:'dolos',
		prefix:'de',
		productTenNoun:'wissa',
		productTenPrefix:'wisi'
	},
	3:{
		noun:'thuna',
		number:3,
		plusTenNoun:'dahathuna',
		plusTenPrefix:'dahathun',
		prefix:'thun',
		productTenNoun: 'thiha',
		productTenPrefix: 'this'
	},
	4:{
		noun: 'hathara',
		number: 4,
		plusTenNoun: 'dahahathara',
		plusTenPrefix:'dahahathara',
		prefix:'hara',
		productTenNoun: 'hathaliha',
		productTenPrefix: 'hathalis'
	},
	5:{
		noun: 'paha',
		number: 5,
		plusTenNoun: 'pahalowa',
		plusTenPrefix: 'pahalos',
		prefix:'pan',
		productTenNoun: 'panaha',
		productTenPrefix: 'panas'
	},
	6:{
		noun: 'haya',
		number: 6,
		plusTenNoun:'dahasaya',
		plusTenPrefix: 'dahasaya',
		prefix: 'haya',
		productTenNoun: 'hata',
		productTenPrefix: 'hata'
	},
	7: {
		noun: 'hatha',
		number: 7,
		plusTenNoun: 'dahahatha',
		plusTenPrefix: 'dahahath',
		prefix: 'hath',
		productTenNoun: 'haththawa',
		productTenPrefix: 'haththa'
	},
	8: {
		noun: 'ata',
		number: 8,
		plusTenNoun: 'dahaata',
		plusTenPrefix: 'dahaata',
		prefix: 'ata',
		productTenNoun: 'asuwa',
		productTenPrefix: 'asu'
	},
	9: {
		noun: 'nawaya',
		number: 9,
		plusTenNoun: 'dahanawaya',
		plusTenPrefix: 'dahanawa',
		prefix: 'nawa',
		productTenNoun: 'anuwa',
		productTenPrefix: 'anu'
	}
}
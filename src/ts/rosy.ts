import {numbers,positions} from "./data";

const Rosy =  (translateMe:number,lastPrefix:boolean=false):string=>{

	let translated:string ="";

	const powers= Object.keys(positions)
		.sort((a:number,b:number)=>b-a);

	let lastModedIndex:number=0;

	while(translateMe>0){

		const position = positions[lastModedIndex];
		const divided=Math.ceil(translateMe/powers[lastModedIndex]);
		const moded = translateMe%powers[lastModedIndex];

		const prefix = lastPrefix? true :  moded<=0;
		translateMe = moded;

		if(divided>99){
			translated += Rosy(divided,true);
		) else if(divided>19){
		
			const dividedByTen = Math.ceil(divided/10);
			const modedByTen = divided%10;
			
			translated += numbers[dividedByTen].productTenPrefix;

			if(prefix){
				translated += numbers[modedByTen].productTenPrefix;				
			} else {
				translated += numbers[modedByTen].productTenNoun;
			}
		} else if (divided>9) {
			const modedByTen = divided%10;

			if(prefix) {
				translated += numbers[modedByTen].plusTenPrefix;
			} else {
				translated += numbers[modedByTen].plusTenNoun;
			}

		} else {
			if(prefix){
				translated += numbers[divided].prefix;
			} else {
				translated += numbers[divided].noun;
			}
		}

		translated += position.prefix;

		lastModedIndex++;
	}

	return translated;
}

export default Rosy;

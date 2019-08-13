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

		translateMe = moded;

		if(divided>99){
			translated += Rosy(divided,true);
		) else if(divided>19){
		
			const dividedByTen = Math.ceil(divided/10);
			const modedByTen = divided%10;
			
			translated += numbers[dividedByTen].productTenPrefix
				+ numbers[modedByTen].productTenPrefix;
		} else if (divided>9) {
			const modedByTen = divided%10;

			translated += numbers[modedByTen].productTenPrefix;
		} else {
			translated += numbers[divided].prefix;
		}

		translated += position.prefix;

		lastModedIndex++;
	}

	return translated;
}

export default Rosy;

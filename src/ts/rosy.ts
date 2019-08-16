import {numbers,positions} from "./data";

const Rosy =  (translateMe:number,lastPrefix:boolean=false):string=>{

	let translated:string ="";

	const powers:number[]= Object.keys(positions)
		// tslint:disable-next-line: radix
		.map((a:string):number=>parseInt(a))
		.sort((a:number,b:number)=>b-a);

	let lastModedIndex:number=0;

	while(translateMe>0){
		const position = positions[powers[lastModedIndex]];
		
		const divided=Math.floor(translateMe/Math.pow(10,position.powerOfTen));
		const moded:number = translateMe % Math.pow(10,position.powerOfTen);

		const prefix = lastPrefix? true :  moded!==0||position.powerOfTen!==0;
		translateMe = moded;


		if(divided>99){
			translated += Rosy(divided,true);
		} else if(divided>19){
			
			const dividedByTen = Math.floor(divided/10);
			const modedByTen = divided%10;

			if(modedByTen>=1){
				translated += numbers[dividedByTen].productTenPrefix+' ';
			} else {
				if(prefix){
					translated += numbers[dividedByTen].productTenPrefix+' ';
				} else {
					translated += numbers[dividedByTen].productTenNoun;
				}
			}

			if(modedByTen>=1){
				if(prefix){
					translated += numbers[modedByTen].prefix+' ';				
				} else {
					translated += numbers[modedByTen].noun;
				}
			}
		} else if (divided>9) {
			const modedByTen = divided%10;

			if(prefix) {
				translated += numbers[modedByTen].plusTenPrefix+' ';
			} else {
				translated += numbers[modedByTen].plusTenNoun;
			}

		} else if(divided>0&&!(divided===1&&position.powerOfTen!=0 &&moded===0&&translated==='')) {

			if(prefix){
				translated += numbers[divided].prefix+' ';
			} else {
				translated += numbers[divided].noun;
			}

		}

		if(divided>0){
			if(moded>0){
				translated += position.prefix+' ';
			} else {
				translated += position.noun;
			}
		}
		lastModedIndex++;
	}

	return translated;
}

export default Rosy;

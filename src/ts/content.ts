import Rosy from './rosy';

const tags:string[] = ['p','a','b','i','h1','h2','h3','h4','h5','h6','span'];


for (const tag of tags){
	const elmnts = document.getElementsByTagName(tag);

	for(const elmnt of elmnts){
		elmnt.addEventListener('mouseover',function(this){
			const enabled = window.localStorage.getItem('rosy_enabled') as boolean;

			if(enabled){

			}
		})
	}
}

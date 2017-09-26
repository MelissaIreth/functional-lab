/*
FORMA ANTIGUA

function lowercaser(input){
	return(input.toLowerCase())

}*/
/*FORMA NUEVA; lowercaser recibe input y lo transforma a lowercase
const lowercaser = (input) => input.toString().toLowerCase()

module.exports = lowercaser*/


/*FORMA más PURA*/

const lowercaser = (input) => {
	if(typeof input !== 'string'){
		throw('input is not a valid string')
	}
		 return input.toLowerCase()
	}

module.exports = lowercaser


/**
 * Async - Await
 */

//  const getImagenPromesa = () => new Promise(resolve => resolve('https://dkhjdihdisud.com'));
//  getImagenPromesa().then(console.log());

/**
 * Esto es lo mismo que lo de arriba
 * Es una promesa por el atributo async
 */
const getImagen = async() => {

    /**
     * Maneja el error
     */
    try {
        const apiKey = 'Vh9fSlVJe82GxtBF1bIy04vwwvRG74Rl';
    
        /**
         * El await espera a que la promesa (fetch) termine
         * Se debe de utilizar en funciones async
         */
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await resp.json();

        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // Error
        console.error(error);
    }

}

getImagen();
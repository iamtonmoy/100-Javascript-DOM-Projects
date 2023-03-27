/**
 * Change the RGB color by generating random RGB color by clicking a button 
 */

window.onload = () =>{
    main()
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn')
    const autoBtn = document.getElementById('change-btn-auto')
    const showRGBNumber = document.getElementById('text-color')
    const stopBtn = document.getElementById('change-btn-auto-stop')

    var starterval;

    function startRGB() {
            starterval = setInterval(() => {
            const autoBgColor = generateRGB();
            root.style.backgroundColor = autoBgColor
            showRGBNumber.innerHTML = generateRGB()  
        }, 500);
    }


    btn.addEventListener('click', function(){
        const bgcolor = generateRGB();
        root.style.backgroundColor = bgcolor;
         showRGBNumber.innerHTML = generateRGB()
        
    })

    autoBtn.addEventListener('click', function(){
        startRGB()
    })

    stopBtn.addEventListener('click', function() {
        clearInterval(starterval)
    })

}

function generateRGB() {
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    return `rgb(${red},${green}, ${blue})`
};


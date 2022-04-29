let watermark = {}

let setWatermark = (str) => {
    return;
    let can = document.getElementById("water_mark")
    let cans = can.getContext('2d')
    cans.rotate(-20 * Math.PI / 180)
    cans.font = '35px Vedana'
    cans.fillStyle = 'rgba(186,223,254,0.3)'
    cans.textAlign = 'left'
    cans.textBaseline = 'Middle'
    cans.fillText(str, can.width / 20, can.height)

    let div = document.getElementById("markWater")
    div.style.top = '3px'
    div.style.left = '0px'
    div.style.position = 'fixed'
    div.style.zIndex = '2'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight + 'px'
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
}

export default setWatermark

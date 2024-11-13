
function modifyDom() {
    let middleDiv = document.createElement('div');
    middleDiv.innerHTML = " <p>middle</p> ";
    let ele = document.getElementById('middle');
    ele.appendChild(middleDiv);
}
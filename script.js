window.addEventListener('load', () => {
    const checkbox = document.getElementById("shrink-mode");
    var areHiddenBranchesShrunk = checkbox.checked ? true : false;

    // On click, hide sublist
    var items = document.getElementsByTagName('a');
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            var sublist = e.target.parentNode.getElementsByTagName('ul')[0];
            if (sublist) {
                sublist.classList.toggle("hidden");
                if (checkbox.checked) sublist.classList.contains("hidden") ? sublist.classList.add("shrunk") : sublist.classList.remove("shrunk");
            }
        });
    }

    // During shrink mode, shrink tree on hidden branches (on load and on checkbox change)
    matchHiddenAndShrunk(areHiddenBranchesShrunk);
    checkbox.addEventListener('change', () => {
        areHiddenBranchesShrunk = checkbox.checked ? true : false;
        matchHiddenAndShrunk(areHiddenBranchesShrunk);
    })
});

function matchHiddenAndShrunk(condition) {
    var items = document.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
        var sublist = items[i].parentNode.getElementsByTagName('ul')[0];
        if (sublist) sublist.classList.contains("hidden") ? (condition ? sublist.classList.add("shrunk") : sublist.classList.remove("shrunk")) : sublist.classList.remove("shrunk");
    }
}

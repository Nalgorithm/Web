function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function findMin(arr)
{
    var min = arr[0]
    for(let el in arr)
    {
        if(arr[el] < min)
        {
            min = arr[el]
        }
    }
    return min
}

function findMax(arr)
{
    var max = arr[0]
    for(let el in arr)
    {
        if(arr[el] > max)
        {
            max = arr[el]
        }
    }
    return max
}

function partition(arr, l, r)
{
    var pivot = arr[Math.floor((l + r) / 2)]
    var [i, j] = [l, r]
    while (i <= j)
    {
        while (arr[i] < pivot)
            i++
        while (arr[j] > pivot)
            j--
        if (i >= j)
            break
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++, j--
    }
    return j
}

function quicksort(a, l, r)
{
    if (l < r)
    {
        let p = partition(a, l, r)
        quicksort(a, l, p)
        quicksort(a, p + 1, r)
    }
}

function countTegs()
{
    var els = document.getElementsByTagName("*");
    var tags = []

    for (let i = 0; i < els.length; i++) {
        tags.push(els[i].tagName)
    }
    let counts = {}
    tags.forEach(function(x) { counts[x] = (counts[x] || 0)+1; })
    console.log(counts)
}


var arr = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000))
console.log(arr)

console.log(findMin(arr))
console.log(findMax(arr))

quicksort(arr, 0, arr.length - 1)
console.log(arr)

countTegs()

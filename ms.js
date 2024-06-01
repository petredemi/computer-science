console.log('buna');
const firstarr = [3, 2, 1, 13, 11, 24, 9, 17];
const secondarr = [105, 79, 100, 110];
function merge( arr, left, middle, right){
        let l1 = middle - left + 1;
        let l2 = right - middle;
        let arr1 = new Array(l1);
        let arr2 = new Array(l2);

        for ( let i = 0; i < l1; ++i){
            arr1[i] = arr[left + i];
        }
        for ( let i = 0; i < l2; ++i){
            arr2[i] = arr[middle + 1 + i];
        }
        let i = 0;
        let j = 0;
        let k = left;

        while ( i < l1 && j < l2){
            if ( arr1[i] < arr2[j]){
                arr[k] = arr1[i];
                ++i;
            }else{
                arr[k] = arr2[j];
                j++;
            }
            k++;
        }
        while( i < l1){
            arr[k] = arr1[i];
            i++;
            k++;
        }
        while (j < l2){
            arr[k] = arr2[j];
            j++;
            k++;
        }
}
function mergeSort(arr, left, right){
    if (left >= right){
        return;
    }
    let middle = left + parseInt((right - left) / 2);
    mergeSort(arr, left, middle);
    console.log(arr);
    mergeSort(arr, middle + 1, right);
    merge(arr, left, middle, right);
}
mergeSort(firstarr, 0, firstarr.length - 1);
mergeSort(secondarr, 0, secondarr.length - 1);
console.log(firstarr);
console.log(secondarr);
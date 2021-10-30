export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
    
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }


  export function getBubbleSort(array){
      let animations= [];
      let auxiliaryArray = array.slice();
      bubbleSort(auxiliaryArray,animations);
      array = auxiliaryArray;
      return[animations, array];
  }

  function bubbleSort(auxiliaryArray, animations){
      const N = auxiliaryArray.length;
      for(let i =0; i<N-1; i++){
          for(let j=0; j<N-i-1; j++){
              animations.push([j, j+1]);
              animations.push([j, j+1]);
              if(auxiliaryArray[j]> auxiliaryArray[j+1]){
                  animations.push([j, auxiliaryArray[j+1]]);
                  animations.push([j+1, auxiliaryArray[j+1]]);
                  swap(auxiliaryArray, j, j+1);

              } else{
                  animations.push([-1,-1]);
                  animations.push([-1,-1]);
              }
          }
      }

  }

  function swap(auxiliaryArray, firstIndex, secondIndex){
      let temp = auxiliaryArray[firstIndex];
      auxiliaryArray[firstIndex] = auxiliaryArray[secondIndex];
      auxiliaryArray[secondIndex] = temp;
  }

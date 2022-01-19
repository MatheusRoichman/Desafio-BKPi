class ArrayUnpacker {
  unzip(List<List<int>> matrix) {
    List<int> unzippedArray = [];
    
    for (int column = 0; column < matrix.length; i++) {
      for (int row = 0; row < matrix[column].length; row++) {
        unzippedArray.add(matrix[column][row]);
      }
    }
    
    unzippedArray.sort();
    
    return unzippedArray;
  }
}

main() {
  ArrayUnpacker au = ArrayUnpacker();
  print(au.unzip([[3, 2, 1], [], [4, 6, 5], [9, 7, 8]));
}
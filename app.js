

function buildList(arr, parent){
  arr.forEach(option =>
    parent.add(
      new Option(option.text, option.value, option.selected)
    )
  );
}

/* populate select list with default lists */
const build = (array, parent) => {
  array.forEach(option =>
    parent.add(
      new Option(option.text, option.value, option.selected)
    )
  );
}

export default { build };

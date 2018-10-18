function truncateString(str, num) {
  for (i = 0; i < num; i++) {
    console.log(str[i].slice(0, num) + " Cats");
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 17);

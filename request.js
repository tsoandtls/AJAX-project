var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/LearnWebCode/json-example/blob/master/animals-1.json');
ourRequest.onload = function() {
  console.log(ourRequest.responseText);
};
ourRequest.send();
